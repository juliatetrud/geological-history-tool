/* ===================== state ===================== */
const svg = document.getElementById("globe");
const NS = "http://www.w3.org/2000/svg";
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let idx = PERIODS.length - 1;      // start at Today
let fromIdx = idx, tMix = 1;        // drift interpolation
let driftStart = 0, driftDur = reduced ? 1 : 1500;
let camTarget = null, camStart = 0, camFrom = null;
let spinning = !reduced, dragging = false, playing = false, playTimer = null;
let showIce = true, showGrid = true;
let selected = null, hint = document.getElementById("globeHint"), hintGone = false;

function el(tag, attrs, parent){
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(e);
  return e;
}
function shortDelta(d){ while (d > 180) d -= 360; while (d < -180) d += 360; return d; }
function lerpPose(a, b, t){
  return [ a[0] + shortDelta(b[0]-a[0])*t, a[1] + (b[1]-a[1])*t, a[2] + shortDelta(b[2]-a[2])*t ];
}
const ease = t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2;

/* ===================== scaffolding ===================== */
const defs = el("defs", {}, svg);
const og = el("radialGradient", { id:"oceanG", cx:"36%", cy:"30%", r:"78%" }, defs);
el("stop", { offset:"0%",  "stop-color":"#1B5876" }, og);
el("stop", { offset:"58%", "stop-color":"#0E3549" }, og);
el("stop", { offset:"100%","stop-color":"#061823" }, og);
const sg = el("radialGradient", { id:"shadeG", cx:"36%", cy:"30%", r:"78%" }, defs);
el("stop", { offset:"0%",   "stop-color":"#fff", "stop-opacity":".13" }, sg);
el("stop", { offset:"46%",  "stop-color":"#fff", "stop-opacity":"0" }, sg);
el("stop", { offset:"86%",  "stop-color":"#000", "stop-opacity":".26" }, sg);
el("stop", { offset:"100%", "stop-color":"#000", "stop-opacity":".55" }, sg);

el("circle", { cx:CX, cy:CY, r:R+16, fill:"none", stroke:"#1A2833", "stroke-width":1 }, svg);
el("circle", { cx:CX, cy:CY, r:R, fill:"url(#oceanG)" }, svg);
const gGrid  = el("g", { id:"gGrid", fill:"none", stroke:"#4D8FAE", "stroke-opacity":".2",
                         "stroke-width":".8" }, svg);
const gEq    = el("path", { fill:"none", stroke:"#7FD0E8", "stroke-opacity":".34",
                            "stroke-width":"1.2", "stroke-dasharray":"5 4" }, svg);
const gLand  = el("g", { id:"gLand" }, svg);
const gIce   = el("g", { id:"gIce" }, svg);
const gMark  = el("g", { id:"gMark" }, svg);
el("circle", { cx:CX, cy:CY, r:R, fill:"url(#shadeG)", "pointer-events":"none" }, svg);
el("circle", { cx:CX, cy:CY, r:R, fill:"none", stroke:"#8FBDD4", "stroke-opacity":".22",
               "stroke-width":1.2, "pointer-events":"none" }, svg);
const gPole  = el("g", { id:"gPole", "pointer-events":"none" }, svg);

/* land paths, created once */
const landPaths = {};
for (const id of PLATE_IDS){
  const g = el("g", { class:"plate" }, gLand);
  landPaths[id] = PLATES[id].rings.map(() =>
    el("path", { fill:"#C9A97B", stroke:"#7E6642", "stroke-width":".9",
                 "stroke-linejoin":"round" }, g));
}

/* graticule geometry */
const MERIDIANS = [], PARALLELS = [];
for (let lon = -180; lon < 180; lon += 30){
  const pts = []; for (let lat = -90; lat <= 90; lat += 3) pts.push(vec(lon, lat));
  MERIDIANS.push(pts);
}
for (let lat = -60; lat <= 60; lat += 30){
  const pts = []; for (let lon = -180; lon <= 180; lon += 3) pts.push(vec(lon, lat));
  PARALLELS.push(pts);
}
const EQUATOR = []; for (let lon = -180; lon <= 180; lon += 3) EQUATOR.push(vec(lon, 0));
const gridPaths = MERIDIANS.concat(PARALLELS).map(() => el("path", {}, gGrid));

/* broken polyline: only the visible arc is drawn */
function linePath(pts){
  let d = "", pen = false;
  for (const p of pts){
    const s = project(p);
    if (!s[2]){ pen = false; continue; }
    d += (pen ? "L" : "M") + s[0].toFixed(1) + " " + s[1].toFixed(1);
    pen = true;
  }
  return d;
}
function ringVisible(pts){
  for (const p of pts) if (project(p)[2]) return true;
  return false;
}

/* ===================== per-period rendering ===================== */
const CAT_COLOUR = { fossil:"#E4705A", forest:"#6FBE7E", event:"#C58BD6",
                     ice:"#7FD0E8", sea:"#59A8D8" };
const CAT_LABEL = { fossil:"Animals and fossils", forest:"Plants and forests",
                    event:"Tectonics and climate", ice:"Ice", sea:"Seas" };
let markNodes = [], iceNodes = [];

function poseOf(plate, i){ return PERIODS[i].plates[plate]; }
function currentPose(plate){
  const a = poseOf(plate, fromIdx), b = poseOf(plate, idx);
  return tMix >= 1 ? b : lerpPose(a, b, ease(tMix));
}

function buildPeriod(){
  gMark.textContent = ""; gIce.textContent = "";
  markNodes = []; iceNodes = [];
  for (const src of [[fromIdx, 1], [idx, 0]]){
    for (const ic of (PERIODS[src[0]].ice || [])){
      const path = el("path", { fill:"#E8F4F8", "fill-opacity":".62",
                                stroke:"#FFFFFF", "stroke-opacity":".5", "stroke-width":".8" }, gIce);
      iceNodes.push({ node:path, ice:ic, which:src[1] });
    }
  }
  PERIODS[idx].sites.forEach((s, n) => {
    const g = el("g", { class:"mk", role:"button", tabindex:"0",
                        "aria-label":s.title, style:"cursor:pointer" }, gMark);
    const ring = el("circle", { r:11, fill:"none", stroke:CAT_COLOUR[s.cat],
                                "stroke-width":1.4, "stroke-opacity":".0" }, g);
    el("circle", { r:7.5, fill:"#07131B", "fill-opacity":".55" }, g);
    const dot = el("circle", { r:4.6, fill:CAT_COLOUR[s.cat], stroke:"#07131B",
                               "stroke-width":1.2 }, g);
    el("title", {}, g).textContent = s.title;
    g.addEventListener("click", () => selectSite(n));
    g.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " "){ e.preventDefault(); selectSite(n); }
    });
    markNodes.push({ g, ring, dot, site:s, n });
  });
}

function draw(){
  const poses = {};
  for (const id of PLATE_IDS) poses[id] = currentPose(id);

  if (showGrid){
    gGrid.style.display = ""; gEq.style.display = "";
    MERIDIANS.concat(PARALLELS).forEach((pts, i) => gridPaths[i].setAttribute("d", linePath(pts)));
    gEq.setAttribute("d", linePath(EQUATOR));
  } else { gGrid.style.display = "none"; gEq.style.display = "none"; }

  for (const id of PLATE_IDS){
    const p = poses[id];
    const T = plateTransform(PLATES[id].home, p[0], p[1], p[2]);
    PLATES[id].vecs.forEach((ring, r) => {
      const moved = ring.map(T);
      const node = landPaths[id][r];
      if (!ringVisible(moved)){ node.setAttribute("d", ""); return; }
      node.setAttribute("d", ringPath(moved));
    });
  }

  gIce.style.display = showIce ? "" : "none";
  if (showIce) for (const it of iceNodes){
    const p = poses[it.ice.plate];
    const T = plateTransform(PLATES[it.ice.plate].home, p[0], p[1], p[2]);
    const centre = T(vec(it.ice.lon, it.ice.lat));
    const ring = capRing(centre, it.ice.r, 48);
    it.node.setAttribute("d", ringVisible(ring) ? ringPath(ring) : "");
    const k = it.which ? (1 - ease(tMix)) : ease(tMix);
    it.node.setAttribute("opacity", tMix >= 1 ? (it.which ? 0 : 1) : k);
  }

  const appear = ease(Math.max(0, Math.min(1, (tMix - .45) / .55)));
  for (const m of markNodes){
    const p = poses[m.site.plate];
    const T = plateTransform(PLATES[m.site.plate].home, p[0], p[1], p[2]);
    const s = project(T(vec(m.site.lon, m.site.lat)));
    m.g.setAttribute("transform", "translate(" + s[0].toFixed(1) + "," + s[1].toFixed(1) + ")");
    const on = s[2] ? appear : 0;
    m.g.setAttribute("opacity", on);
    m.g.style.pointerEvents = on > .3 ? "auto" : "none";
    const sel = selected === m.n;
    m.ring.setAttribute("stroke-opacity", sel ? .95 : 0);
    m.ring.setAttribute("r", sel ? 11 : 8);
    m.dot.setAttribute("r", sel ? 6 : 4.6);
  }

  /* pole pins */
  gPole.textContent = "";
  for (const pole of [[90, "N"], [-90, "S"]]){
    const s = project(vec(0, pole[0]));
    if (!s[2]) continue;
    el("circle", { cx:s[0], cy:s[1], r:3.1, fill:"none", stroke:"#E7EEF3",
                   "stroke-opacity":".62", "stroke-width":1.2 }, gPole);
    el("circle", { cx:s[0], cy:s[1], r:1, fill:"#E7EEF3", "fill-opacity":".62" }, gPole);
    const tx = el("text", { x:s[0] + 8, y:s[1] + 4, fill:"#9FB4C1", "font-size":"11.5",
                            "font-family":"IBM Plex Sans, sans-serif" }, gPole);
    tx.textContent = pole[1];
  }
}

/* ===================== animation loop ===================== */
function frame(now){
  if (tMix < 1){
    tMix = Math.min(1, (now - driftStart) / driftDur);
  }
  if (camTarget){
    const k = Math.min(1, (now - camStart) / (reduced ? 1 : 900));
    const e = ease(k);
    viewLon = camFrom[0] + shortDelta(camTarget[0] - camFrom[0]) * e;
    viewLat = camFrom[1] + (camTarget[1] - camFrom[1]) * e;
    if (k >= 1) camTarget = null;
  } else if (spinning && !dragging){
    viewLon += 0.055;
  }
  if (viewLon > 180) viewLon -= 360; if (viewLon < -180) viewLon += 360;
  draw();
  requestAnimationFrame(frame);
}

/* ===================== panel ===================== */
const panel = document.getElementById("panel");
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;"); }

function renderPeriod(){
  const p = PERIODS[idx];
  selected = null;
  panel.innerHTML =
    '<div class="fade">' +
    '<p class="kicker">' + esc(p.span) + '</p>' +
    '<h2 class="p-head">' + esc(p.headline) + '</h2>' +
    p.body.map(b => '<p class="p-body">' + esc(b) + '</p>').join("") +
    '<ul class="facts">' + p.facts.concat([["Rock record", p.strata]]).map(f =>
      '<li><span class="k">' + esc(f[0]) + '</span><span class="v">' + esc(f[1]) + '</span></li>'
    ).join("") + '</ul>' +
    '<p class="sites-title">Places on this globe — click a marker or a name</p>' +
    '<ul class="sites">' + p.sites.map((s, n) =>
      '<li><button class="site-btn" data-n="' + n + '">' +
      '<span class="pin" style="background:' + CAT_COLOUR[s.cat] + '"></span>' +
      '<span><span class="st">' + esc(s.title) + '</span><br>' +
      '<span class="sd">' + esc(s.sub) + '</span></span></button></li>'
    ).join("") + '</ul></div>';
  panel.querySelectorAll(".site-btn").forEach(b =>
    b.addEventListener("click", () => selectSite(+b.dataset.n)));
  panel.scrollTop = 0;
}

function renderSite(n){
  const p = PERIODS[idx], s = p.sites[n];
  panel.innerHTML =
    '<div class="fade">' +
    '<button class="back">&larr; ' + esc(p.name) + '</button>' +
    '<p class="kicker">' + esc(CAT_LABEL[s.cat]) + '</p>' +
    '<h2 class="p-head">' + esc(s.title) + '</h2>' +
    '<p class="p-sub">' + esc(s.sub) + '</p>' +
    '<p class="p-body">' + esc(s.body) + '</p>' +
    '<div class="thennow">' +
    '<div class="tn"><h4>' + p.ma + ' million years ago</h4>' +
      '<div class="scene">' + iconSVG(s.then.icon, CAT_COLOUR[s.cat]) + '</div>' +
      '<p class="where">' + esc(s.then.where) + '</p><p>' + esc(s.then.text) + '</p></div>' +
    '<div class="tn"><h4>Today</h4>' +
      '<div class="scene">' + iconSVG(s.now.icon, "#8FA3B0") + '</div>' +
      '<p class="where">' + esc(s.now.where) + '</p><p>' + esc(s.now.text) + '</p></div>' +
    '</div></div>';
  panel.querySelector(".back").addEventListener("click", renderPeriod);
  panel.scrollTop = 0;
}

function selectSite(n){
  selected = n;
  renderSite(n);
  const s = PERIODS[idx].sites[n];
  const p = currentPose(s.plate);
  const T = plateTransform(PLATES[s.plate].home, p[0], p[1], p[2]);
  const v = norm(T(vec(s.lon, s.lat)));
  const lon = Math.atan2(v[1], v[0]) / D;
  const lat = Math.asin(Math.max(-1, Math.min(1, v[2]))) / D;
  camFrom = [viewLon, viewLat]; camStart = performance.now();
  camTarget = [lon, Math.max(-72, Math.min(72, lat))];
  hideHint();
}

/* ===================== period switching ===================== */
function setPeriod(next, instant){
  if (next === idx) return;
  fromIdx = idx; idx = next; tMix = 0;
  driftStart = performance.now();
  driftDur = (reduced || instant) ? 1 : 1500;
  const p = PERIODS[idx];
  document.documentElement.style.setProperty("--accent", p.accent);
  document.getElementById("stampName").textContent = p.name;
  document.getElementById("stampAge").textContent = p.ma === 0 ? "present" : p.ma + " Ma";
  document.querySelectorAll(".seg").forEach((b, i) =>
    b.setAttribute("aria-current", i === idx ? "true" : "false"));
  buildPeriod();
  renderPeriod();
  if (p.view && !camTarget){
    camFrom = [viewLon, viewLat]; camStart = performance.now();
    camTarget = [p.view[0], p.view[1]];
  }
}

/* ===================== timeline ribbon ===================== */
const ribbon = document.getElementById("ribbon");
PERIODS.forEach((p, i) => {
  const b = document.createElement("button");
  b.className = "seg"; b.setAttribute("role", "tab");
  b.setAttribute("aria-current", i === idx ? "true" : "false");
  b.innerHTML = '<span class="bar" style="background:' + p.colour + '"></span>' +
                '<span class="lab">' + p.name +
                '<span class="ma">' + (p.ma === 0 ? "now" : p.ma + " Ma") + '</span></span>';
  b.addEventListener("click", () => { stopPlay(); setPeriod(i); });
  ribbon.appendChild(b);
});

/* ===================== controls ===================== */
const playBtn = document.getElementById("playBtn"), playLabel = document.getElementById("playLabel");
function stopPlay(){
  playing = false; clearInterval(playTimer); playLabel.textContent = "Play";
  playBtn.setAttribute("aria-label", "Play through time");
}
playBtn.addEventListener("click", () => {
  if (playing){ stopPlay(); return; }
  playing = true; playLabel.textContent = "Pause";
  if (idx === PERIODS.length - 1) setPeriod(0);
  playTimer = setInterval(() => {
    if (idx >= PERIODS.length - 1){ stopPlay(); return; }
    setPeriod(idx + 1);
  }, 4200);
});

document.querySelectorAll("[data-view]").forEach(b => {
  b.addEventListener("click", () => {
    const v = b.dataset.view.split(",").map(Number);
    camFrom = [viewLon, viewLat]; camStart = performance.now(); camTarget = v;
    hideHint();
  });
});
function toggle(id, get, set){
  const b = document.getElementById(id);
  b.addEventListener("click", () => { set(!get()); b.setAttribute("aria-pressed", get()); });
}
toggle("togIce",  () => showIce,  v => showIce = v);
toggle("togGrid", () => showGrid, v => showGrid = v);
toggle("togSpin", () => spinning, v => spinning = v);

/* drag to rotate */
let px = 0, py = 0;
function hideHint(){ if (!hintGone){ hintGone = true; hint.classList.add("hide"); } }
svg.addEventListener("pointerdown", e => {
  dragging = true; px = e.clientX; py = e.clientY;
  svg.setPointerCapture(e.pointerId); svg.classList.add("dragging"); hideHint();
});
svg.addEventListener("pointermove", e => {
  if (!dragging) return;
  const k = 380 / svg.getBoundingClientRect().width;
  viewLon -= (e.clientX - px) * 0.32 * k;
  viewLat = Math.max(-88, Math.min(88, viewLat + (e.clientY - py) * 0.32 * k));
  px = e.clientX; py = e.clientY; camTarget = null;
});
function endDrag(e){
  if (!dragging) return;
  dragging = false; svg.classList.remove("dragging");
  try { svg.releasePointerCapture(e.pointerId); } catch (err) {}
}
svg.addEventListener("pointerup", endDrag);
svg.addEventListener("pointercancel", endDrag);
svg.addEventListener("keydown", e => {
  const step = 9;
  if (e.key === "ArrowLeft")  { viewLon -= step; camTarget = null; e.preventDefault(); }
  if (e.key === "ArrowRight") { viewLon += step; camTarget = null; e.preventDefault(); }
  if (e.key === "ArrowUp")    { viewLat = Math.min(88, viewLat + step); camTarget = null; e.preventDefault(); }
  if (e.key === "ArrowDown")  { viewLat = Math.max(-88, viewLat - step); camTarget = null; e.preventDefault(); }
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") hideHint();
});

/* about dialog */
const dlg = document.getElementById("aboutDlg");
document.getElementById("aboutBtn").addEventListener("click", () => dlg.showModal());
document.getElementById("aboutClose").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", e => { if (e.target === dlg) dlg.close(); });

/* ===================== go ===================== */
document.documentElement.style.setProperty("--accent", PERIODS[idx].accent);
document.getElementById("stampName").textContent = PERIODS[idx].name;
document.getElementById("stampAge").textContent = "present";
buildPeriod();
renderPeriod();
requestAnimationFrame(frame);
