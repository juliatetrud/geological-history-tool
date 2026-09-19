/* ===================== state ===================== */
const svg = document.getElementById("globe");
const NS = "http://www.w3.org/2000/svg";
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let idx = PERIODS.length - 1;      // start at Today
let fromIdx = idx, tMix = 1;        // drift interpolation
/* pacing: plate drift and camera moves in milliseconds, spin in degrees per
   second (timed, so a 120 Hz screen does not spin twice as fast)           */
const DRIFT_MS = 3000, CAM_MS = 1800, SPIN_DEG_S = 1.65, PLAY_MS = 7000;
let driftStart = 0, driftDur = reduced ? 1 : DRIFT_MS, lastFrame = 0;
let camTarget = null, camStart = 0, camFrom = null;
let spinning = !reduced, dragging = false, playing = false, playTimer = null;
let showIce = true, showGrid = true, showLabels = true, showTerrain = true;
const R0 = R, ZOOM_MAX = 4;
let zoom = 1, zoomTarget = 1;
let selected = null, hint = document.getElementById("globeHint"), hintGone = false;
let mode = "period";               // period | site | compare | layers
let highlights = [], pulseStart = 0, seqTimer = null;
let activeCmp = null, colIdx = 0, activeLayer = null;

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

const discs = [
  [el("circle", { cx:CX, cy:CY, r:R+16, fill:"none", stroke:"#1A2833", "stroke-width":1 }, svg), 16],
  [el("circle", { cx:CX, cy:CY, r:R, fill:"url(#oceanG)" }, svg), 0]
];
const gGrid  = el("g", { id:"gGrid", fill:"none", stroke:"#4D8FAE", "stroke-opacity":".2",
                         "stroke-width":".8" }, svg);
const gEq    = el("path", { fill:"none", stroke:"#7FD0E8", "stroke-opacity":".34",
                            "stroke-width":"1.2", "stroke-dasharray":"5 4" }, svg);
const gLand  = el("g", { id:"gLand" }, svg);
const landClip = el("clipPath", { id:"landClip" }, defs);
const gTerrain = el("g", { id:"gTerrain", "clip-path":"url(#landClip)", "pointer-events":"none" }, svg);
const gCoast = el("g", { id:"gCoast", fill:"none", stroke:"#6E5937", "stroke-width":".9",
                         "stroke-linejoin":"round", "pointer-events":"none" }, svg);
const gIce   = el("g", { id:"gIce" }, svg);
const gLabel = el("g", { id:"gLabel", "pointer-events":"none" }, svg);
const gMark  = el("g", { id:"gMark" }, svg);
const gHi    = el("g", { id:"gHi", "pointer-events":"none" }, svg);
discs.push(
  [el("circle", { cx:CX, cy:CY, r:R, fill:"url(#shadeG)", "pointer-events":"none" }, svg), 0],
  [el("circle", { cx:CX, cy:CY, r:R, fill:"none", stroke:"#8FBDD4", "stroke-opacity":".22",
                  "stroke-width":1.2, "pointer-events":"none" }, svg), 0]);
const gPole  = el("g", { id:"gPole", "pointer-events":"none" }, svg);

/* land paths, created once */
/* each ring is drawn three times: the filled land, the clip that keeps the
   terrain inside the coast, and the coastline stroked on top of the terrain */
const landPaths = {}, clipPaths = {}, coastPaths = {};
for (const id of PLATE_IDS){
  const g = el("g", { class:"plate" }, gLand);
  landPaths[id] = PLATES[id].rings.map(() =>
    el("path", { fill:"#C9A97B", stroke:"#7E6642", "stroke-width":".9",
                 "stroke-linejoin":"round" }, g));
  clipPaths[id]  = PLATES[id].rings.map(() => el("path", {}, landClip));
  coastPaths[id] = PLATES[id].rings.map(() => el("path", {}, gCoast));
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
  buildLabels();
  buildTerrain();
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
      const d = ringVisible(moved) ? ringPath(moved) : "";
      landPaths[id][r].setAttribute("d", d);
      clipPaths[id][r].setAttribute("d", d);
      coastPaths[id][r].setAttribute("d", d);
    });
  }

  drawTerrain(poses);

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

  drawLabels(poses, appear);
  drawHighlights(poses);

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
  const dt = lastFrame ? Math.min(100, now - lastFrame) : 16;
  lastFrame = now;
  if (tMix < 1){
    tMix = Math.min(1, (now - driftStart) / driftDur);
  }
  if (camTarget){
    const k = Math.min(1, (now - camStart) / (reduced ? 1 : CAM_MS));
    const e = ease(k);
    viewLon = camFrom[0] + shortDelta(camTarget[0] - camFrom[0]) * e;
    viewLat = camFrom[1] + (camTarget[1] - camFrom[1]) * e;
    if (k >= 1) camTarget = null;
  } else if (spinning && !dragging){
    viewLon += SPIN_DEG_S * dt / 1000 / zoom;
  }
  if (zoom !== zoomTarget){
    zoom = reduced || Math.abs(zoomTarget - zoom) < .004 ? zoomTarget : zoom + (zoomTarget - zoom) * .22;
    applyZoom();
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
  setMode("period"); clearHighlights();
  panel.innerHTML =
    '<div class="fade">' +
    '<p class="kicker">' + esc(p.span) + '</p>' +
    '<h2 class="p-head">' + esc(p.headline) + '</h2>' +
    p.body.map(b => '<p class="p-body">' + esc(b) + '</p>').join("") +
    '<ul class="facts">' + p.facts.concat([["Rock record", p.strata]]).map(f =>
      '<li><span class="k">' + esc(f[0]) + '</span><span class="v">' + esc(f[1]) + '</span></li>'
    ).join("") + '</ul>' +
    '<p class="sites-title">Places on this globe. Click a marker or a name.</p>' +
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
  setMode("site"); clearHighlights();
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
  cancelSeq();
  selected = n;
  renderSite(n);
  const s = PERIODS[idx].sites[n];
  const p = poseOf(s.plate, idx);
  const T = plateTransform(PLATES[s.plate].home, p[0], p[1], p[2]);
  const v = norm(T(vec(s.lon, s.lat)));
  const lon = Math.atan2(v[1], v[0]) / D;
  const lat = Math.asin(Math.max(-1, Math.min(1, v[2]))) / D;
  camFrom = [viewLon, viewLat]; camStart = performance.now();
  camTarget = [lon, Math.max(-72, Math.min(72, lat))];
  hideHint();
}

/* ===================== terrain =====================
   Colours the land. Past periods use climate belts fixed to the globe, drawn
   as nested caps around each pole, so a continent changes colour as it
   drifts. Today uses real land cover. Everything is clipped to the coast.   */
let terrainNodes = [];
const terrainKey = document.getElementById("terrainKey");

function mixHex(a, b, t){
  const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
  const ch = sh => Math.round(((pa >> sh) & 255) * (1 - t) + ((pb >> sh) & 255) * t);
  return "#" + ((1 << 24) | (ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).slice(1);
}
/* add points along each edge so that long edges follow the sphere */
function densify(pts, closed){
  const out = [], n = pts.length, last = closed ? n : n - 1;
  for (let i = 0; i < last; i++){
    const a = vec(pts[i][0], pts[i][1]), p = pts[(i + 1) % n], b = vec(p[0], p[1]);
    const gap = Math.acos(Math.max(-1, Math.min(1, a[0]*b[0] + a[1]*b[1] + a[2]*b[2]))) / D;
    const steps = Math.max(1, Math.ceil(gap / 4));
    for (let k = 0; k < steps; k++){
      const t = k / steps;
      out.push(norm([a[0] + (b[0]-a[0])*t, a[1] + (b[1]-a[1])*t, a[2] + (b[2]-a[2])*t]));
    }
  }
  if (!closed){ const e = pts[n - 1]; out.push(vec(e[0], e[1])); }
  return out;
}

function buildTerrain(){
  gTerrain.textContent = ""; terrainNodes = [];
  const p = PERIODS[idx], belts = BELTS[p.id], key = [];
  const base = !showTerrain ? BIOMES.bare.colour
             : belts ? BIOMES[belts.find(b => b[0] < 0 && b[1] > 0)[2]].colour : BIOMES.open.colour;
  for (const id of PLATE_IDS) for (const node of landPaths[id]) node.setAttribute("fill", base);
  terrainKey.hidden = !showTerrain;
  terrainKey.parentNode.hidden = !showTerrain;
  if (!showTerrain) return;
  const seen = {};
  const note = (colour, name, kind) => { if (!seen[name]){ seen[name] = 1; key.push([colour, name, kind || "fill"]); } };

  if (belts){
    /* caps run from the equatorial belt outward; each boundary is softened
       by three caps that step from one colour to the next                  */
    const mid = belts.findIndex(b => b[0] < 0 && b[1] > 0);
    const cap = (pole, lat, colour) => terrainNodes.push({
      node: el("path", { fill:colour }, gTerrain),
      ring: capRing(vec(0, pole), 90 - Math.abs(lat), 72) });
    for (const dir of [1, -1]){
      for (let i = mid + dir; i >= 0 && i < belts.length; i += dir){
        const from = BIOMES[belts[i - dir][2]].colour, to = BIOMES[belts[i][2]].colour;
        const edge = dir > 0 ? belts[i][0] : belts[i][1];
        [-2, 0, 2].forEach((off, k) => cap(90 * dir, edge + off * dir, mixHex(from, to, (k + 1) / 3)));
      }
    }
    belts.map(b => b[2]).filter((b, i, all) => all.indexOf(b) === i)
      .sort((a, b) => Object.keys(BIOMES).indexOf(a) - Object.keys(BIOMES).indexOf(b))
      .forEach(b => note(BIOMES[b].colour, BIOMES[b].name));
    /* regions the rocks show were arid, whatever belt they sat in */
    for (const o of (ARID_OVERRIDES[p.id] || [])){
      terrainNodes.push({ node: el("path", { fill:BIOMES.aridRock.colour, "fill-opacity":".94" }, gTerrain),
                          plate: o.plate, ring: densify(o.pts, true) });
      note(BIOMES.aridRock.colour, BIOMES.aridRock.name);
    }
  } else {
    note(BIOMES.open.colour, BIOMES.open.name);
    for (const c of LANDCOVER){
      terrainNodes.push({
        node: el("path", { fill:BIOMES[c.biome].colour, "fill-opacity":c.biome === "ice" ? 1 : .92 }, gTerrain),
        plate: c.plate, ring: c.whole ? PLATES[c.plate].vecs[0] : densify(c.pts, true) });
    }
    ["forestT", "forestW", "boreal", "desert", "tundra", "ice"].forEach(b => note(BIOMES[b].colour, BIOMES[b].name));
  }

  for (const sea of (SEAS[p.id] || [])){
    terrainNodes.push({ node: el("path", { fill:SEA_COLOUR, "fill-opacity":".8" }, gTerrain),
                        plate: sea.plate, ring: densify(sea.pts, true) });
    note(SEA_COLOUR, "Shallow sea over the continent");
  }
  if (!belts){
    for (const lake of LAKES)
      terrainNodes.push({ node: el("path", { fill:SEA_COLOUR }, gTerrain), plate: lake.plate, ring: densify(lake.pts, true) });
    for (const r of RIVERS)
      terrainNodes.push({ node: el("path", { fill:"none", stroke:RIVER_COLOUR, "stroke-width":1.2,
                                             "stroke-linecap":"round", "stroke-linejoin":"round" }, gTerrain),
                          plate: r.plate, line: densify(r.pts, false) });
    note(RIVER_COLOUR, "Rivers and lakes", "line");
  }
  let ranges = 0;
  for (const m of RANGES){
    const a = periodIndex(m.from), b = m.to ? periodIndex(m.to) : PERIODS.length - 1;
    if (idx < a || idx > b) continue;
    ranges++;
    const line = densify(m.pts, false);
    terrainNodes.push({ node: el("path", { fill:"none", stroke:"#5A4028", "stroke-opacity":".42", "stroke-width":5,
                                           "stroke-linecap":"round", "stroke-linejoin":"round" }, gTerrain),
                        plate: m.plate, line });
    terrainNodes.push({ node: el("path", { fill:"none", stroke:"#3B2A1A", "stroke-opacity":".85", "stroke-width":1.3,
                                           "stroke-linecap":"round", "stroke-linejoin":"round",
                                           "stroke-dasharray":"1 3.2" }, gTerrain),
                        plate: m.plate, line });
  }
  if (ranges) note("#5A4028", "Mountain ranges", "range");

  terrainKey.innerHTML = key.map(k =>
    '<li><i class="' + k[2] + '" style="--c:' + k[0] + '"></i>' + esc(k[1]) + '</li>').join("");
}

function drawTerrain(poses){
  gTerrain.style.display = showTerrain ? "" : "none";
  if (!showTerrain) return;
  gTerrain.setAttribute("opacity", tMix >= 1 ? 1 : ease(tMix).toFixed(2));
  const T = {};
  for (const n of terrainNodes){
    let pts = n.ring || n.line;
    if (n.plate){
      if (!T[n.plate]){ const p = poses[n.plate]; T[n.plate] = plateTransform(PLATES[n.plate].home, p[0], p[1], p[2]); }
      pts = pts.map(T[n.plate]);
    }
    n.node.setAttribute("d", n.line ? linePath(pts) : ringVisible(pts) ? ringPath(pts) : "");
  }
}

/* ===================== labels on the globe =====================
   Three kinds, in order of priority: what the continents were called then,
   the oceans of the time, and modern landmarks marked "now the ...".
   Each frame the labels facing the viewer are placed greedily; one that
   would overlap a marker or an earlier label is faded out.                */
const LABEL_STYLE = {
  land:  { size:14.5, wide:.74 },     // wide: average glyph width in ems
  ocean: { size:14,   wide:.50 },
  mark:  { size:11,   wide:.56 }
};
const MARK_ICON = {
  mountain:'<path d="M-6 3.5L-1.5 -4L1.5 .5L3 -1.5L6 3.5Z" fill="#F4F7F9"/>',
  forest:  '<circle cy="-1.5" r="3.6" fill="#F4F7F9"/><path d="M0 1v4" stroke="#F4F7F9" stroke-width="1.6"/>',
  desert:  '<path d="M-6 2q3-6 6 0t6 0" fill="none" stroke="#F4F7F9" stroke-width="1.6" stroke-linecap="round"/>',
  ice:     '<path d="M0 -4.5L4 0L0 4.5L-4 0Z" fill="none" stroke="#F4F7F9" stroke-width="1.5"/>',
  region:  '<circle r="2" fill="#F4F7F9"/>',
  city:    '<rect x="-2.6" y="-2.6" width="5.2" height="5.2" fill="none" stroke="#F4F7F9" stroke-width="1.5"/>'
};
const ICON_ALONE = { mountain:1, forest:1, desert:1, ice:1 };   // kinds that stay when their name will not fit
let labelNodes = [], labelScale = 1;

function landmarkText(m){
  if (PERIODS[idx].ma > 0) return "now " + m.name;
  const t = m.name.replace(/^the /, "");
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function buildLabels(){
  gLabel.textContent = ""; labelNodes = [];
  const set = PERIOD_LABELS[PERIODS[idx].id] || {};
  const add = (kind, text, where, icon) => {
    const g = el("g", { class:"glabel " + kind, opacity:0 }, gLabel);
    if (icon) g.innerHTML = icon;
    const t = el("text", {}, g);
    t.textContent = kind === "land" ? text.toUpperCase() : text;
    /* tier: names of the time, then the best-known landmarks, then the rest */
    const tier = kind === "land" ? 0 : kind === "ocean" ? 1 : LANDMARKS.indexOf(where) < LANDMARK_TOP ? 2 : 3;
    labelNodes.push({ g, t, kind, where, tier, n:labelNodes.length, chars:text.length, a:0, on:false });
  };
  (set.lands  || []).forEach(l => add("land",  l.text, l));
  (set.oceans || []).forEach(o => add("ocean", o.text, o));
  LANDMARKS.forEach(m => add("mark", landmarkText(m), m, MARK_ICON[m.kind] || MARK_ICON.region));
}
function overlaps(b, boxes){
  for (const o of boxes) if (b[0] < o[2] && b[2] > o[0] && b[1] < o[3] && b[3] > o[1]) return true;
  return false;
}
function drawLabels(poses, appear){
  gLabel.style.display = showLabels ? "" : "none";
  if (!showLabels) return;
  const boxes = [], pins = [];          // taken by labels; taken by site markers
  const screen = (where) => {
    let v;
    if (where.at) v = vec(where.at[0], where.at[1]);
    else {
      const p = poses[where.plate];
      v = plateTransform(PLATES[where.plate].home, p[0], p[1], p[2])(vec(where.lon, where.lat));
    }
    const c = toCamera(v);
    return [CX + c[1]*R, CY - c[2]*R, c[0]];
  };
  /* markers and highlighted places keep their ground */
  for (const m of markNodes){
    const s = screen(m.site);
    if (s[2] > 0) pins.push([s[0] - 9, s[1] - 9, s[0] + 9, s[1] + 9]);
  }
  for (const h of highlights){
    const s = screen(h.place);
    if (s[2] <= 0 || h.g.getAttribute("display") === "none") continue;
    const w = (h.place.short || h.place.label).length * 7 * labelScale + 16;
    boxes.push(s[0] > CX + 110 ? [s[0] - w, s[1] - 11, s[0] + 11, s[1] + 11]
                               : [s[0] - 11, s[1] - 11, s[0] + w, s[1] + 11]);
  }
  /* within a tier, labels already showing go first, so they do not flicker */
  const order = labelNodes.slice().sort((p, q) => p.tier - q.tier || (q.on - p.on) || p.n - q.n);
  /* the best-known landmarks reserve their own point, so that a neighbour's
     name is not laid across it before they have had their turn               */
  const reserved = [];
  for (const L of labelNodes){
    if (L.tier !== 2) continue;
    const s = screen(L.where);
    if (s[2] > .32) reserved.push({ L, box:[s[0] - 6, s[1] - 6, s[0] + 6, s[1] + 6] });
  }
  let placing = null;
  const fits = b => !overlaps(b, boxes) && !overlaps(b, pins) &&
    !overlaps(b, reserved.filter(r => r.L !== placing).map(r => r.box)) &&
    b[0] > 4 && b[1] > 4 && b[2] < CX * 2 - 4 && b[3] < CY * 2 - 4 &&
    Math.hypot(Math.max(Math.abs(b[0] - CX), Math.abs(b[2] - CX)),
               Math.max(Math.abs(b[1] - CY), Math.abs(b[3] - CY))) < R * 1.12;
  for (const L of order){
    const s = screen(L.where), st = LABEL_STYLE[L.kind], size = st.size * labelScale;
    let target = 0;
    placing = L;
    if (s[2] > .32){
      const x = s[0], y = s[1], w = L.chars * size * st.wide, h = size * 1.25;
      const fade = Math.min(1, (s[2] - .32) / .2) * appear;
      let placed = false;
      if (L.kind !== "mark"){
        const box = [x - w/2, y - h/2, x + w/2, y + h/2];
        if (!overlaps(box, boxes) && !overlaps(box, pins)){ boxes.push(box); placed = true; }
      } else {
        /* try the name to the right, left, above and below the icon, starting
           with wherever it sat last frame. The icon may sit under a site marker
           (a marker is often the very place), but never under another label.    */
        const icon = [x - 6, y - 6, x + 6, y + 6];
        const spots = overlaps(icon, boxes) ? {} : {
          r:{ box:[x + 10, y - h/2, x + w + 14, y + h/2],           tx:12,  ty:0,            anchor:"start" },
          l:{ box:[x - w - 14, y - h/2, x - 10, y + h/2],           tx:-12, ty:0,            anchor:"end" },
          u:{ box:[x - w/2, y - h - 10, x + w/2, y - 10],           tx:0,   ty:-(h/2 + 10),  anchor:"middle" },
          d:{ box:[x - w/2, y + 10, x + w/2, y + h + 10],           tx:0,   ty:h/2 + 10,     anchor:"middle" }
        };
        const tries = (L.spot ? [L.spot] : []).concat(["r", "l", "u", "d"].filter(k => k !== L.spot));
        L.t.setAttribute("display", "none");
        for (const k of tries){
          if (!spots[k] || !fits(spots[k].box)) continue;
          boxes.push(spots[k].box, icon); L.spot = k; placed = true;
          L.t.setAttribute("display", "inline");
          L.t.setAttribute("x", spots[k].tx); L.t.setAttribute("y", spots[k].ty.toFixed(1));
          L.t.setAttribute("text-anchor", spots[k].anchor);
          break;
        }
        if (!placed && ICON_ALONE[L.where.kind]){
          if (!overlaps(icon, boxes) && !overlaps(icon, pins)){ boxes.push(icon); placed = true; }
        }
      }
      if (placed){
        target = fade;
        L.g.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
        L.t.setAttribute("font-size", size.toFixed(1));
      }
    }
    L.on = target > 0;
    L.a = reduced ? target : L.a + (target - L.a) * .18;
    if (L.a < .01) L.a = 0;
    L.g.setAttribute("opacity", L.a.toFixed(2));
  }
}

/* ===================== highlights and pulses =====================
   Places picked out by a comparison or a column. They are pinned to a
   plate like sites, so they drift with it when the period changes.
   A place with `only` set is drawn in that period alone.                */
const PULSE_MS = 3300, PULSE_CYCLE = 1100;
const globeFrame = document.querySelector(".globe-frame");
const stackedMQ = window.matchMedia("(max-width:900px)");

function periodIndex(id){ return PERIODS.findIndex(p => p.id === id); }
function periodPhrase(p){ return p.ma === 0 ? "today" : "the " + p.name + ", " + p.ma + " Ma"; }
function cancelSeq(){ clearTimeout(seqTimer); seqTimer = null; }

function clearHighlights(){
  cancelSeq();
  highlights = []; gHi.textContent = ""; activeCmp = null;
}
function setHighlights(places){
  gHi.textContent = "";
  highlights = places.map(pl => {
    const g = el("g", { display:"none" }, gHi);
    const waves = [0, 1].map(() => el("circle", { r:8, fill:"none", stroke:"#FFFFFF",
                                                  "stroke-width":1.6, opacity:0 }, g));
    el("circle", { r:8.5, fill:"#07131B", "fill-opacity":".45", stroke:"#FFFFFF",
                   "stroke-width":1.5 }, g);
    el("circle", { r:2.6, fill:"#FFFFFF" }, g);
    const label = el("text", { y:4, fill:"#FFFFFF", "font-size":"12",
                               "font-family":"IBM Plex Sans, sans-serif", stroke:"#07131B",
                               "stroke-width":3, "stroke-opacity":".7", "paint-order":"stroke" }, g);
    label.textContent = pl.short || pl.label;
    return { g, waves, label, place:pl, pulse:false };
  });
  fitLabels();
}
/* the globe is drawn in a 620-unit box; on a small screen the labels are
   enlarged so they stay readable                                          */
function fitLabels(){
  const w = svg.getBoundingClientRect().width || 620;
  labelScale = Math.max(1, Math.min(1.7, 620 / w));
  const size = Math.round(12 * Math.max(1, Math.min(1.9, 620 / w)));
  for (const h of highlights) h.label.setAttribute("font-size", size);
}
function drawHighlights(poses){
  if (!highlights.length) return;
  const age = performance.now() - pulseStart;
  const live = age >= 0 && age < PULSE_MS;
  for (const h of highlights){
    const pl = h.place, p = poses[pl.plate];
    const T = plateTransform(PLATES[pl.plate].home, p[0], p[1], p[2]);
    const s = project(T(vec(pl.lon, pl.lat)));
    const show = s[2] && (!pl.only || pl.only === PERIODS[idx].id);
    h.g.setAttribute("display", show ? "inline" : "none");
    if (!show) continue;
    h.g.setAttribute("transform", "translate(" + s[0].toFixed(1) + "," + s[1].toFixed(1) + ")");
    const left = s[0] > CX + 110;
    h.label.setAttribute("x", left ? -13 : 13);
    h.label.setAttribute("text-anchor", left ? "end" : "start");
    h.waves.forEach((w, k) => {
      if (!live || !h.pulse){ w.setAttribute("opacity", 0); return; }
      if (reduced){ w.setAttribute("r", 14 + k*7); w.setAttribute("opacity", k ? .4 : .8); return; }
      const t = (age / PULSE_CYCLE + k * .5) % 1;
      w.setAttribute("r", (8 + 24*t).toFixed(1));
      w.setAttribute("opacity", ((1 - t) * .9).toFixed(2));
    });
  }
}

/* Switch to period pi if needed, turn the globe to face the given places
   and pulse them once the plates have arrived.                           */
function showPlaces(pi, places){
  const changed = pi !== idx;
  if (changed) setPeriod(pi);
  const sum = [0, 0, 0];
  for (const pl of places){
    const p = poseOf(pl.plate, pi);
    const v = norm(plateTransform(PLATES[pl.plate].home, p[0], p[1], p[2])(vec(pl.lon, pl.lat)));
    sum[0] += v[0]; sum[1] += v[1]; sum[2] += v[2];
  }
  const c = norm(sum);
  const lon = Math.atan2(c[1], c[0]) / D;
  const lat = Math.asin(Math.max(-1, Math.min(1, c[2]))) / D;
  camFrom = [viewLon, viewLat]; camStart = performance.now();
  camTarget = [lon, Math.max(-72, Math.min(72, lat))];
  for (const h of highlights) h.pulse = places.indexOf(h.place) >= 0;
  pulseStart = performance.now() + (reduced ? 0 : changed ? DRIFT_MS : CAM_MS * .8);
  hideHint();
}
function scrollToGlobe(){
  if (!globeFrame.scrollIntoView) return;
  const r = globeFrame.getBoundingClientRect();
  if (r.top < -40 || r.top + r.height * .6 > window.innerHeight)
    globeFrame.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block:"start" });
}

/* ===================== panel modes ===================== */
const modeChips = { compare:document.getElementById("modeCompare"),
                    layers:document.getElementById("modeLayers") };
function setMode(m){
  mode = m;
  for (const k in modeChips) modeChips[k].setAttribute("aria-pressed", k === m);
}
function backButton(){ return '<button class="back">&larr; ' + esc(PERIODS[idx].name) + '</button>'; }
function refreshMode(){
  const b = panel.querySelector(".back");
  if (b) b.innerHTML = "&larr; " + esc(PERIODS[idx].name);
  if (mode === "layers"){ markCurrentLayers(); revealCurrentLayer(); }
}
function enterMode(m){
  stopPlay(); cancelSeq();
  if (mode === m){ renderPeriod(); return; }
  if (m === "compare") renderCompare(); else renderLayers(true);
  if (stackedMQ.matches && panel.scrollIntoView)
    panel.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block:"start" });
}
modeChips.compare.addEventListener("click", () => enterMode("compare"));
modeChips.layers.addEventListener("click", () => enterMode("layers"));

/* ---------- look-alikes and relatives ---------- */
function cmpSteps(c){
  const steps = [];
  for (const pl of c.places){
    const pid = pl.period || c.period;
    let s = steps.find(x => x.pid === pid);
    if (!s) steps.push(s = { pid, places:[] });
    s.places.push(pl);
  }
  return steps;
}
function renderCompare(){
  setMode("compare"); selected = null; clearHighlights();
  panel.innerHTML =
    '<div class="fade">' + backButton() +
    '<p class="kicker">Comparisons</p>' +
    '<h2 class="p-head">Look-alikes and relatives</h2>' +
    '<p class="p-body">Two places can resemble each other because they used to be one place, ' +
    'or because the same conditions produced the same result twice. Put the continents back ' +
    'where they were and the globe shows which.</p>' +
    COMPARE_GROUPS.map(g =>
      '<h3 class="grp-title">' + esc(g.title) + '</h3>' +
      '<p class="grp-sub">' + esc(g.sub) + '</p>' +
      '<ul class="cmps">' + COMPARISONS.filter(c => c.group === g.id).map(c => {
        const steps = cmpSteps(c);
        const when = steps.map(s => periodPhrase(PERIODS[periodIndex(s.pid)])).join(", then ");
        return '<li class="cmp" data-id="' + c.id + '">' +
          '<h4 class="cmp-t">' + esc(c.title) + '</h4>' +
          '<p class="cmp-b">' + esc(c.body) + '</p>' +
          '<ul class="cmp-places">' + c.places.map((pl, i) =>
            '<li><button class="place" data-i="' + i + '"><span class="pin"></span>' + esc(pl.label) +
            (steps.length > 1 ? '<span class="pw"> · ' + esc(PERIODS[periodIndex(pl.period || c.period)].name) + '</span>' : '') +
            '</button></li>').join("") + '</ul>' +
          '<div class="cmp-act"><button class="chip go">Show on globe</button>' +
          '<span class="cmp-when">Shown in ' + esc(when).replace(/^today/, "the present") + '</span></div></li>';
      }).join("") + '</ul>'
    ).join("") + '</div>';
  panel.querySelector(".back").addEventListener("click", renderPeriod);
  panel.querySelectorAll(".cmp").forEach(li => {
    const c = COMPARISONS.find(x => x.id === li.dataset.id);
    li.querySelector(".go").addEventListener("click", () => showComparison(c));
    li.querySelectorAll(".place").forEach(b =>
      b.addEventListener("click", () => showComparison(c, c.places[+b.dataset.i])));
  });
  panel.scrollTop = 0;
}

/* Inherited pairs stay marked as the plates move, so stepping through the
   timeline shows them separating. Convergent pairs are marked only in the
   period they belong to. With `one`, a single place is shown.            */
function showComparison(c, one){
  stopPlay(); cancelSeq();
  if (activeCmp !== c.id){
    setHighlights(c.places.map(pl => Object.assign({}, pl,
      { only: c.group === "convergent" ? (pl.period || c.period) : null })));
    activeCmp = c.id;
  }
  panel.querySelectorAll(".cmp").forEach(li =>
    li.classList.toggle("active", li.dataset.id === c.id));
  const live = highlights.map(h => h.place);
  const steps = one
    ? [{ pid: one.period || c.period, places:[live[c.places.indexOf(one)]] }]
    : cmpSteps(c).map(s => ({ pid:s.pid, places:s.places.map(pl => live[c.places.indexOf(pl)]) }));
  (function run(k){
    showPlaces(periodIndex(steps[k].pid), steps[k].places);
    if (k + 1 < steps.length) seqTimer = setTimeout(() => run(k + 1), DRIFT_MS + PULSE_MS + 1200);
  })(0);
  scrollToGlobe();
}

/* ---------- stratigraphic column ---------- */
const BASEMENT = "#69757F", LITH_INK = "#0B1017";
const COL_SCALE = .3, COL_MAXH = 150;      // pixels per metre; cap for very thick units
let colBuiltW = 0;

function wrapText(str, max){
  const out = []; let line = "";
  for (const w of String(str).split(" ")){
    if (line && (line + " " + w).length > max){ out.push(line); line = w; }
    else line = line ? line + " " + w : w;
  }
  if (line) out.push(line);
  return out;
}
function layerColour(L){
  return L.period ? PERIODS[periodIndex(L.period)].colour : BASEMENT;
}
function wavy(xa, xb, y, amp){
  const n = Math.max(2, Math.round(Math.abs(xb - xa) / 20)), w = (xb - xa) / n;
  let d = "";
  for (let i = 0; i < n; i++){
    const x = xa + w * i;
    d += "Q" + (x + w/2).toFixed(1) + " " + (y + (i % 2 ? -2 : 2) * amp).toFixed(1) +
         " " + (x + w).toFixed(1) + " " + y.toFixed(1);
  }
  return d;
}
/* lithology hatching: [tile width, tile height, marks] */
const LITH = {
  sandstone:  [8, 8,  '<circle cx="2" cy="2" r=".9"/><circle cx="6" cy="6" r=".9"/>'],
  shale:      [14, 6, '<path d="M1 3h8"/>'],
  limestone:  [18, 12,'<path d="M0 .5h18M0 6.5h18M4 .5v6M13 6.5v6"/>'],
  chalk:      [22, 14,'<path d="M0 .5h22M5 .5v5M16 7.5v5" stroke-opacity=".7"/>'],
  coal:       [14, 16,'<path d="M0 3h14" stroke-width="3.2"/><path d="M1 10h8"/>'],
  mixed:      [14, 12,'<circle cx="3" cy="3" r=".9"/><circle cx="10" cy="3" r=".9"/><path d="M2 9h8"/>'],
  crystalline:[16, 16,'<path d="M3 3l3 4M11 2l-3 4M4 12l4-2M12 10l2 4"/>'],
  till:       [16, 14,'<circle cx="4" cy="4" r="2" fill="none"/><circle cx="12" cy="9" r="1.3" fill="none"/><circle cx="5" cy="11" r=".8"/>']
};
function columnWidth(host){
  return Math.max(250, host.clientWidth ? Math.floor(host.clientWidth) - 2 : 340);
}

function buildColumn(){
  const host = document.getElementById("colScroll");
  if (!host) return;
  const col = COLUMNS[colIdx];
  const keep = host.scrollTop, rebuilt = host.firstChild !== null;
  const W = columnWidth(host);
  colBuiltW = W;
  const x0 = 1, colW = W < 330 ? 84 : 112, x1 = x0 + colW, lx = x1 + 18;
  const maxName = Math.max(12, Math.floor((W - lx - 4) / 6.9));
  const maxMeta = Math.max(14, Math.floor((W - lx - 4) / 6.1));

  /* measure rows; data runs bottom to top */
  const rows = col.layers.map(L => {
    const name = wrapText(L.name, maxName);
    const meta = wrapText(L.gap || L.marker ? L.note : L.age, maxMeta);
    const textH = name.length * 15 + meta.length * 13.5;
    let h, cut = false;
    if (L.gap || L.marker) h = Math.max(30, textH + 12);
    else if (L.m == null)  h = Math.max(64, textH + 12);
    else {
      h = Math.max(textH + 10, L.m * COL_SCALE);
      if (h > COL_MAXH){ h = COL_MAXH; cut = true; }
    }
    return { L, name, meta, h: Math.round(h), cut };
  });
  const H = rows.reduce((a, r) => a + r.h, 0) + 12;
  let y = H - 2;
  for (const r of rows){ y -= r.h; r.y = y; }

  let defs = "", body = "";
  for (const k in LITH)
    defs += '<pattern id="lith-' + k + '" width="' + LITH[k][0] + '" height="' + LITH[k][1] +
            '" patternUnits="userSpaceOnUse"><g fill="' + LITH_INK + '" stroke="' + LITH_INK +
            '" stroke-width="1" stroke-linecap="round">' + LITH[k][2] + '</g></pattern>';

  rows.forEach((r, i) => {
    const L = r.L, yT = r.y, yB = r.y + r.h, mid = (yT + yB) / 2;
    let rock = "";
    if (L.marker){
      rock = '<path class="rim" d="M' + x0 + ' ' + mid + 'H' + (x1 + 10) + '"/>';
    } else if (L.gap){
      rock = '<path class="gap" d="M' + x0 + ' ' + (yT + 5) + wavy(x0, x1, yT + 5, 2.2) +
             'L' + x1 + ' ' + (yB - 5) + wavy(x1, x0, yB - 5, 2.2) + 'Z"/>';
    } else {
      let fill = layerColour(L);
      if (L.to){
        defs += '<linearGradient id="lg-' + i + '" x1="0" y1="1" x2="0" y2="0">' +
                '<stop offset=".15" stop-color="' + fill + '"/><stop offset=".85" stop-color="' +
                PERIODS[periodIndex(L.to)].colour + '"/></linearGradient>';
        fill = "url(#lg-" + i + ")";
      }
      if (L.patchy){
        /* channel fills cut into the unit below */
        let below = BASEMENT;
        for (let j = i - 1; j >= 0; j--)
          if (!rows[j].L.gap && !rows[j].L.marker){ below = layerColour(rows[j].L); break; }
        rock = '<rect class="rock" x="' + x0 + '" y="' + yT + '" width="' + colW + '" height="' + r.h +
               '" fill="' + below + '"/>';
        for (const f of [[.06, .40], [.52, .94]]){
          const a = x0 + colW * f[0], b = x0 + colW * f[1];
          rock += '<path class="rock chan" d="M' + a.toFixed(1) + ' ' + (yT + 1) + 'H' + b.toFixed(1) +
                  'Q' + ((a + b) / 2).toFixed(1) + ' ' + (yT + 1 + (r.h - 5) * 2) + ' ' + a.toFixed(1) +
                  ' ' + (yT + 1) + 'Z" fill="' + fill + '"/>';
        }
      } else {
        rock = '<rect class="rock" x="' + x0 + '" y="' + yT + '" width="' + colW + '" height="' + r.h +
               '" fill="' + fill + '"/>' +
               '<rect class="lith" x="' + x0 + '" y="' + yT + '" width="' + colW + '" height="' + r.h +
               '" fill="url(#lith-' + (LITH[L.lith] ? L.lith : "mixed") + ')"/>';
      }
      rock += '<path class="seam" d="M' + x0 + ' ' + yB + 'H' + x1 + '"/>';
      if (r.cut){
        const q = colW / 8;
        rock += '<path class="cut" d="M' + x0 + ' ' + mid + 'h' + (q*3) + 'l' + (q/2) + ' -7l' + q +
                ' 14l' + (q/2) + ' -7H' + x1 + '"/>';
      }
    }
    const ty = mid - (r.name.length * 15 + r.meta.length * 13.5) / 2 + 11;
    const text =
      '<text class="l-name' + (L.gap || L.marker ? " it" : "") + '" x="' + lx + '" y="' + ty.toFixed(1) + '">' +
      r.name.map((t, k) => '<tspan x="' + lx + '" dy="' + (k ? 15 : 0) + '">' + esc(t) + '</tspan>').join("") +
      '</text><text class="l-meta" x="' + lx + '" y="' + (ty + r.name.length * 15 - 1.5).toFixed(1) + '">' +
      r.meta.map((t, k) => '<tspan x="' + lx + '" dy="' + (k ? 13.5 : 0) + '">' + esc(t) + '</tspan>').join("") +
      '</text>';
    const tick = L.marker ? "" : '<path class="tick" d="M' + (x1 + 3) + ' ' + mid + 'h10"/>';
    const label = L.name + ". " + (L.gap || L.marker ? L.note : L.age + ". " + L.thick);
    body += L.marker
      ? '<g class="layer-mark">' + rock + text + '</g>'
      : '<g class="layer' + (L.gap ? " is-gap" : "") + '" data-i="' + i + '" role="button" tabindex="0" aria-label="' +
        esc(label).replace(/"/g, "&quot;") + '">' + rock + tick + text +
        '<rect class="frame" x="' + (x0 + .5) + '" y="' + (yT + .5) + '" width="' + (colW - 1) +
        '" height="' + (r.h - 1) + '"/>' +
        '<rect class="hit" x="0" y="' + yT + '" width="' + W + '" height="' + r.h + '"/></g>';
  });

  host.innerHTML = '<svg class="column" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H +
    '" role="group" aria-label="Stratigraphic column: ' + esc(col.title) + ', oldest at the bottom"><defs>' +
    defs + '</defs>' + body + '</svg>';
  host.querySelectorAll(".layer").forEach(g => {
    const i = +g.dataset.i;
    g.addEventListener("click", () => selectLayer(i));
    g.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " "){ e.preventDefault(); selectLayer(i); }
    });
  });
  markCurrentLayers();

  /* open at the current period's layer if there is one, else at the bottom */
  if (rebuilt) host.scrollTop = keep;
  else {
    const cur = rows.find(r => r.L.period === PERIODS[idx].id || r.L.to === PERIODS[idx].id);
    host.scrollTop = cur ? Math.max(0, cur.y + cur.h / 2 - host.clientHeight / 2) : H;
  }
}
function markCurrentLayers(){
  const id = PERIODS[idx].id, layers = COLUMNS[colIdx].layers;
  panel.querySelectorAll(".layer").forEach(g => {
    const L = layers[+g.dataset.i];
    g.setAttribute("aria-current", !!L.period && (L.period === id || L.to === id));
    g.classList.toggle("sel", +g.dataset.i === activeLayer);
  });
}
/* scroll the column, not the page, until the current period's layer shows */
function revealCurrentLayer(){
  const host = document.getElementById("colScroll");
  const hit = host && host.querySelector('.layer[aria-current="true"] .hit');
  if (!hit) return;
  const y = +hit.getAttribute("y"), h = +hit.getAttribute("height");
  if (y < host.scrollTop || y + h > host.scrollTop + host.clientHeight)
    host.scrollTop = Math.max(0, y + h / 2 - host.clientHeight / 2);
}
function showColumnPlace(pi){
  const c = COLUMNS[colIdx];
  setHighlights([{ plate:c.plate, lon:c.lon, lat:c.lat, short:c.short, only:null }]);
  showPlaces(pi, [highlights[0].place]);
}

function renderLayerCard(){
  const card = document.getElementById("layerCard");
  const L = activeLayer == null ? null : COLUMNS[colIdx].layers[activeLayer];
  if (!L){
    card.innerHTML = '<p class="lc-empty">Click a layer. The globe moves to that period and marks ' +
      'where the column stands. Layer colours match the timeline beside the globe.</p>';
    return;
  }
  const p = L.period ? PERIODS[periodIndex(L.period)] : null;
  card.innerHTML =
    '<p class="kicker">' + esc(L.age) + '</p>' +
    '<h3 class="lc-name">' + esc(L.name) + '</h3>' +
    '<p class="lc-env">' + esc(L.env) + '</p>' +
    '<p class="lc-thick">' + esc(L.gap ? L.note : L.thick) + '</p>' +
    '<div class="cmp-act"><button class="chip go">Show on globe</button><span class="cmp-when">' +
    (p ? "Globe set to " + esc(periodPhrase(p)) : "Outside this timeline; the globe stays where it is") +
    '</span></div>';
  card.querySelector(".go").addEventListener("click", () => { selectLayer(activeLayer); scrollToGlobe(); });
}
function selectLayer(i){
  stopPlay(); cancelSeq();
  const L = COLUMNS[colIdx].layers[i];
  activeLayer = i;
  renderLayerCard();
  showColumnPlace(L.period ? periodIndex(L.period) : idx);
  markCurrentLayers();
}

function renderLayers(locate){
  setMode("layers"); selected = null; clearHighlights();
  const col = COLUMNS[colIdx];
  panel.innerHTML =
    '<div class="fade">' + backButton() +
    '<p class="kicker">Layers</p>' +
    '<h2 class="p-head">' + esc(col.title) + '</h2>' +
    '<p class="p-sub">' + esc(col.where) + '</p>' +
    '<p class="p-body">' + esc(col.intro) + '</p>' +
    '<div class="col-switch" role="group" aria-label="Choose a column">' +
    COLUMNS.map((c, k) => '<button class="chip" data-k="' + k + '" aria-pressed="' + (k === colIdx) + '">' +
      esc(c.short) + '</button>').join("") + '</div>' +
    '<div class="layer-card" id="layerCard" aria-live="polite"></div>' +
    '<div class="col-scroll" id="colScroll" tabindex="0" aria-label="Stratigraphic column, scrollable"></div>' +
    '<p class="col-note"><span class="scalebar" style="height:' + (100 * COL_SCALE) + 'px"></span>' +
    '<span>The bar is 100 m of rock, and the oldest layer is at the bottom. Thin layers are drawn at a ' +
    'legible minimum and the thickest are cut short with a zigzag. A wavy break is an unconformity, a ' +
    'span of time that left no rock here.</span></p></div>';
  panel.querySelector(".back").addEventListener("click", renderPeriod);
  panel.querySelectorAll(".col-switch .chip").forEach(b => b.addEventListener("click", () => {
    if (+b.dataset.k === colIdx) return;
    colIdx = +b.dataset.k; activeLayer = null; renderLayers(true);
  }));
  renderLayerCard();
  buildColumn();
  if (locate) showColumnPlace(idx);
  panel.scrollTop = 0;
}
window.addEventListener("resize", () => {
  fitLabels();
  const host = document.getElementById("colScroll");
  if (mode === "layers" && host && Math.abs(columnWidth(host) - colBuiltW) > 8) buildColumn();
});

/* ===================== period switching ===================== */
function setPeriod(next, instant){
  if (next === idx) return;
  fromIdx = idx; idx = next; tMix = 0;
  driftStart = performance.now();
  driftDur = (reduced || instant) ? 1 : DRIFT_MS;
  const p = PERIODS[idx];
  document.documentElement.style.setProperty("--accent", p.accent);
  document.getElementById("stampName").textContent = p.name;
  document.getElementById("stampAge").textContent = p.ma === 0 ? "present" : p.ma + " Ma";
  document.querySelectorAll(".seg").forEach((b, i) =>
    b.setAttribute("aria-current", i === idx ? "true" : "false"));
  revealSeg();
  buildPeriod();
  if (mode === "compare" || mode === "layers"){ selected = null; refreshMode(); }
  else renderPeriod();
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
  b.addEventListener("click", () => { stopPlay(); cancelSeq(); setPeriod(i); });
  ribbon.appendChild(b);
});

/* on a phone the timeline is a scrolling strip: keep the current period in it */
function revealSeg(){
  const cur = ribbon.children[idx];
  if (!cur || ribbon.scrollWidth <= ribbon.clientWidth) return;
  ribbon.scrollLeft = cur.offsetLeft - ribbon.offsetLeft - (ribbon.clientWidth - cur.offsetWidth) / 2;
}
revealSeg();

/* ===================== controls ===================== */
const playBtn = document.getElementById("playBtn"), playLabel = document.getElementById("playLabel");
function stopPlay(){
  playing = false; clearInterval(playTimer); playLabel.textContent = "Play through time";
  playBtn.setAttribute("aria-label", "Play through time");
}
playBtn.addEventListener("click", () => {
  if (playing){ stopPlay(); return; }
  cancelSeq();
  playing = true; playLabel.textContent = "Pause";
  if (idx === PERIODS.length - 1) setPeriod(0);
  playTimer = setInterval(() => {
    if (idx >= PERIODS.length - 1){ stopPlay(); return; }
    setPeriod(idx + 1);
  }, PLAY_MS);
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
toggle("togLabels", () => showLabels, v => showLabels = v);
toggle("togTerrain", () => showTerrain, v => { showTerrain = v; buildTerrain(); });
toggle("togSpin", () => spinning, v => spinning = v);
document.getElementById("togSpin").setAttribute("aria-pressed", spinning);

/* drag to rotate */
let px = 0, py = 0;
function hideHint(){ if (!hintGone){ hintGone = true; hint.classList.add("hide"); } }
const touches = new Map();          // active pointers, for pinch
let pinchDist = 0, pinchZoom = 1;
function touchSpread(){
  const p = Array.from(touches.values());
  return Math.hypot(p[0][0] - p[1][0], p[0][1] - p[1][1]);
}
svg.addEventListener("pointerdown", e => {
  touches.set(e.pointerId, [e.clientX, e.clientY]);
  svg.setPointerCapture(e.pointerId); hideHint();
  if (touches.size === 2){
    dragging = false; pinchDist = touchSpread() || 1; pinchZoom = zoom;
    return;
  }
  dragging = true; px = e.clientX; py = e.clientY;
  svg.classList.add("dragging");
});
svg.addEventListener("pointermove", e => {
  if (touches.has(e.pointerId)) touches.set(e.pointerId, [e.clientX, e.clientY]);
  if (touches.size === 2){ setZoom(pinchZoom * touchSpread() / pinchDist, true); return; }
  if (!dragging) return;
  const k = 380 / svg.getBoundingClientRect().width / zoom;
  viewLon -= (e.clientX - px) * 0.32 * k;
  viewLat = Math.max(-88, Math.min(88, viewLat + (e.clientY - py) * 0.32 * k));
  px = e.clientX; py = e.clientY; camTarget = null;
});
function endDrag(e){
  touches.delete(e.pointerId);
  try { svg.releasePointerCapture(e.pointerId); } catch (err) {}
  if (!dragging) return;
  dragging = false; svg.classList.remove("dragging");
}

/* ===================== zoom =====================
   Zoom scales the globe's radius, so markers and labels keep their size and
   more landmark names find room. The plain scroll wheel is left to the page;
   a trackpad pinch arrives as a wheel event with ctrlKey set.               */
const zoomOut = document.getElementById("zoomOut"), zoomReset = document.getElementById("zoomReset");
function applyZoom(){
  R = R0 * zoom;
  for (const d of discs) d[0].setAttribute("r", (R + d[1]).toFixed(1));
}
function setZoom(z, instant){
  zoomTarget = Math.max(1, Math.min(ZOOM_MAX, z));
  if (instant){ zoom = zoomTarget; applyZoom(); }
  zoomOut.disabled = zoomTarget <= 1;
  document.getElementById("zoomIn").disabled = zoomTarget >= ZOOM_MAX;
  zoomReset.hidden = zoomTarget <= 1.01;
  zoomReset.textContent = "Reset " + zoomTarget.toFixed(1).replace(".0", "") + "×";
  hideHint();
}
document.getElementById("zoomIn").addEventListener("click", () => setZoom(zoomTarget * 1.5));
zoomOut.addEventListener("click", () => setZoom(zoomTarget / 1.5));
zoomReset.addEventListener("click", () => setZoom(1));
svg.addEventListener("dblclick", e => { e.preventDefault(); setZoom(zoomTarget * 1.5); });
svg.addEventListener("wheel", e => {
  if (!e.ctrlKey && !e.metaKey) return;
  e.preventDefault();
  setZoom(zoomTarget * Math.exp(-e.deltaY * .012), true);
}, { passive:false });
svg.addEventListener("pointerup", endDrag);
svg.addEventListener("pointercancel", endDrag);
svg.addEventListener("keydown", e => {
  const step = 9 / zoom;
  if (e.key === "ArrowLeft")  { viewLon -= step; camTarget = null; e.preventDefault(); }
  if (e.key === "ArrowRight") { viewLon += step; camTarget = null; e.preventDefault(); }
  if (e.key === "ArrowUp")    { viewLat = Math.min(88, viewLat + step); camTarget = null; e.preventDefault(); }
  if (e.key === "ArrowDown")  { viewLat = Math.max(-88, viewLat - step); camTarget = null; e.preventDefault(); }
  if (e.key === "ArrowLeft" || e.key === "ArrowRight") hideHint();
  if (e.key === "+" || e.key === "=") { setZoom(zoomTarget * 1.5); e.preventDefault(); }
  if (e.key === "-" || e.key === "_") { setZoom(zoomTarget / 1.5); e.preventDefault(); }
  if (e.key === "0") { setZoom(1); e.preventDefault(); }
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
fitLabels();
buildPeriod();
renderPeriod();
requestAnimationFrame(frame);
