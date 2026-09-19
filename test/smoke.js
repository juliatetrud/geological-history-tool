/* Smoke test. Loads index.html in jsdom, runs the page's scripts in the
   order the page lists them, and checks that the globe draws and every
   panel mode renders. Run with `npm test`.

   The scripts are run through the window's VM context rather than fetched,
   so nothing touches the network and top-level const/let are shared between
   files exactly as they are between classic <script> tags in a browser.    */

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { JSDOM } = require("jsdom");

const root = path.join(__dirname, "..");
const reducedMotion = process.argv.includes("--reduced");
let failures = 0, checks = 0;
function ok(cond, msg){
  checks++;
  if (cond) console.log("  ok    " + msg);
  else { failures++; console.log("  FAIL  " + msg); }
}
const sha = o => crypto.createHash("sha256").update(JSON.stringify(o)).digest("hex").slice(0, 16);

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const dom = new JSDOM(html, {
  runScripts: "outside-only",
  pretendToBeVisual: true,
  url: "file://" + root + "/index.html"
});
const win = dom.window, doc = win.document;
win.matchMedia = q => ({
  matches: reducedMotion && /prefers-reduced-motion/.test(q), media: q,
  addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){}
});

const ctx = dom.getInternalVMContext();
const run = code => new vm.Script(code).runInContext(ctx);
const srcs = [...doc.querySelectorAll("script[src]")].map(s => s.getAttribute("src"));
const click = node => node.dispatchEvent(new win.MouseEvent("click", { bubbles:true }));
const wait = ms => new Promise(r => setTimeout(r, ms));

(async function(){
  console.log("page" + (reducedMotion ? " (prefers-reduced-motion)" : ""));
  ok(srcs.join() === "js/geometry.js,js/data.js,js/terrain.js,js/animals.js,js/sources.js,js/app.js", "scripts load in order: " + srcs.join(", "));
  ok(doc.querySelector('link[href="css/globe.css"]') !== null, "stylesheet is linked");
  ok(!/type=["']module["']/.test(html), "no ES modules, so the page runs from file://");
  for (const src of srcs) run(fs.readFileSync(path.join(root, src), "utf8"));
  await wait(80);                                   // let a frame draw

  console.log("data");
  const ids = run("PERIODS.map(p => p.id)");
  ok(ids.length === 11, "11 periods");
  ok(run("PERIODS.every(p => typeof p.strata === 'string' && p.strata.length > 40)"), "every period has a strata sentence");
  /* The plate outlines and poses were solved numerically. These hashes pin
     them; if one changes, the change should be deliberate.                */
  ok(sha(run("PERIODS.map(p => [p.id, p.plates])")) === "16463e2bb1681887", "plate poses unchanged");
  ok(sha(run("Object.keys(PLATES).map(k => [k, PLATES[k].home, PLATES[k].rings])")) === "a5e8f3d6b7d1eb3d", "plate outlines unchanged");
  ok(run(`COMPARISONS.every(c => PERIODS.some(p => p.id === c.period) &&
          COMPARE_GROUPS.some(g => g.id === c.group) && c.places.length >= 2 &&
          c.places.every(pl => PLATES[pl.plate] && isFinite(pl.lon) && isFinite(pl.lat) &&
                               (!pl.period || PERIODS.some(p => p.id === pl.period))))`),
     "comparisons reference real plates, groups and periods");
  ok(run(`COLUMNS.every(c => PLATES[c.plate] && c.layers.every(L =>
          (L.marker || L.period === null || PERIODS.some(p => p.id === L.period)) &&
          (!L.to || PERIODS.some(p => p.id === L.to)) &&
          (L.marker || L.gap || (L.env && L.thick && L.age))))`),
     "column layers reference real periods and carry env, age and thickness");
  /* house voice (see SKILL.md): no exclamation marks, no dashes used as punctuation,
     no "not just / not merely" antithesis, none of the stock vocabulary            */
  const prose = run("JSON.stringify([PERIODS.map(p => [p.headline, p.body, p.facts, p.strata, p.sites.map(s => [s.title, s.sub, s.body, s.then, s.now])]), COMPARE_GROUPS, COMPARISONS, COLUMNS, LANDMARKS, PERIOD_LABELS])") +
    doc.body.textContent;
  ok(!/!/.test(prose), "no exclamation marks in the copy");
  ok(!/\u2014| \u2013 | - /.test(prose), "no em dashes, spaced en dashes or spaced hyphens in the copy");
  const stock = prose.match(/\b(delve|tapestry|testament to|journey|unlock|harness|realm|profound|remarkable|fascinating|intricate dance|weaves together|lies at the heart|paints a picture|serves as a reminder|arguably|notably|not just|not merely|more than just|isn't just)\b/gi);
  ok(!stock, "no stock vocabulary or antithesis markers" + (stock ? ": " + stock.join(", ") : ""));
  ok(run("PERIODS.every(p => p.body.join(' ').split(/(?<=[.])\\s+/).length <= 5)"), "period descriptions run to five sentences at most");

  console.log("globe");
  const landOK = () => {
    const paths = [...doc.querySelectorAll("#gLand path")];
    const drawn = paths.filter(p => (p.getAttribute("d") || "").length > 20);
    const bad = paths.filter(p => /NaN|Infinity/.test(p.getAttribute("d") || ""));
    return { n: paths.length, drawn: drawn.length, bad: bad.length };
  };
  let land = landOK();
  ok(land.n === 13 && land.drawn >= 4 && land.bad === 0, "land paths have geometry (" + land.drawn + " of " + land.n + " rings visible)");
  ok(doc.querySelectorAll("#gMark g.mk").length === run("PERIODS[idx].sites.length"), "markers exist for the current period");
  ok(doc.querySelectorAll("#gGrid path").length > 10, "graticule drawn");
  let allGood = true;
  for (let i = 0; i < ids.length; i++){
    run("setPeriod(" + i + ", true); tMix = 1; draw();");
    land = landOK();
    const marks = doc.querySelectorAll("#gMark g.mk").length;
    if (land.bad || land.drawn < 2 || marks !== run("PERIODS[idx].sites.length")){
      allGood = false; console.log("        problem in " + ids[i], land, marks);
    }
  }
  ok(allGood, "every period draws land and markers without NaN");
  ok(doc.getElementById("togSpin").getAttribute("aria-pressed") === String(!reducedMotion),
     "auto-spin is " + (reducedMotion ? "off" : "on") + " and the toggle says so");

  console.log("terrain and zoom");
  ok(run(`Object.keys(BELTS).every(k => PERIODS.some(p => p.id === k) && BELTS[k][0][0] === -90 &&
          BELTS[k][BELTS[k].length - 1][1] === 90 &&
          BELTS[k].every((b, i, all) => BIOMES[b[2]] && b[0] < b[1] && (!i || all[i - 1][1] === b[0])))`),
     "climate belts run pole to pole without gaps and use known biomes");
  ok(run(`LANDCOVER.every(c => PLATES[c.plate] && BIOMES[c.biome] && (c.whole || c.pts.length > 2)) &&
          RIVERS.concat(LAKES).every(r => PLATES[r.plate] && r.pts.length > 1) &&
          RANGES.every(m => PLATES[m.plate] && PERIODS.some(p => p.id === m.from) && (!m.to || PERIODS.some(p => p.id === m.to))) &&
          Object.keys(SEAS).every(k => PERIODS.some(p => p.id === k) && SEAS[k].every(s => PLATES[s.plate]))`),
     "land cover, rivers, ranges and seas reference real plates and periods");
  ok(run(`Object.keys(ARID_OVERRIDES).every(k => BELTS[k] && ARID_OVERRIDES[k].every(o =>
          PLATES[o.plate] && o.pts.length > 2 && o.name && o.source))`),
     "arid overrides belong to belt periods, reference real plates and name their evidence");
  let aridKeyOK = true;
  for (const [id, want] of [["dev", true], ["ord", true], ["per", true], ["tri", true], ["car", false], ["now", false]]){
    run("setPeriod(" + ids.indexOf(id) + ", true); tMix = 1; draw();");
    const has = [...doc.querySelectorAll("#terrainKey li")].some(li => li.textContent === "Arid, from the rock record");
    if (has !== want){ aridKeyOK = false; console.log("        arid key entry in " + id + " should be " + want); }
  }
  ok(aridKeyOK, "the key names the arid override only in periods that use it");
  let terrainOK = true;
  for (let i = 0; i < ids.length; i++){
    run("setPeriod(" + i + ", true); tMix = 1; draw();");
    const ds = [...doc.querySelectorAll("#gTerrain path")].map(p => p.getAttribute("d") || "");
    const want = ids[i] === "cam" ? 1 : 3;          // the Cambrian has only its shallow seas
    if (ds.length < want || ds.some(d => /NaN/.test(d)) || !doc.querySelectorAll("#terrainKey li").length){
      terrainOK = false; console.log("        terrain problem in " + ids[i], ds.length);
    }
  }
  ok(terrainOK, "every period draws terrain and a colour key");
  ok(doc.querySelectorAll("#landClip path").length === 13 && doc.getElementById("gTerrain").getAttribute("clip-path") === "url(#landClip)", "terrain is clipped to the coastline");
  run("setPeriod(" + ids.indexOf("now") + ", true); tMix = 1; draw();");
  ok([...doc.querySelectorAll("#terrainKey li")].some(li => /Rivers/.test(li.textContent)), "today's key lists rivers");
  run("setPeriod(" + ids.indexOf("per") + ", true); tMix = 1; draw();");
  ok(![...doc.querySelectorAll("#terrainKey li")].some(li => /Rivers/.test(li.textContent)) &&
     [...doc.querySelectorAll("#terrainKey li")].some(li => /Desert/.test(li.textContent)), "the Permian key lists desert and no rivers");
  click(doc.getElementById("togTerrain"));
  run("draw();");
  ok(doc.getElementById("gTerrain").style.display === "none" && doc.getElementById("terrainKey").hidden, "Terrain toggle hides the colouring and its key");
  click(doc.getElementById("togTerrain"));
  const r0 = run("R");
  click(doc.getElementById("zoomIn"));
  run("zoom = zoomTarget; applyZoom(); draw();");
  ok(run("R") > r0 * 1.4 && !doc.getElementById("zoomReset").hidden, "zoom in enlarges the globe and offers a reset");
  ok(landOK().bad === 0, "zoomed land paths have no NaN");
  click(doc.getElementById("zoomReset"));
  run("zoom = zoomTarget; applyZoom(); draw();");
  ok(run("R") === r0 && doc.getElementById("zoomOut").disabled, "reset returns to the full globe");

  console.log("labels");
  const labelTexts = () => [...doc.querySelectorAll("#gLabel text")].map(t => t.textContent);
  run("setPeriod(" + ids.indexOf("per") + ", true); tMix = 1; draw();");
  ok(labelTexts().includes("now the Appalachian Mts."), 'Permian globe carries "now the Appalachian Mts."');
  ok(labelTexts().includes("PANGAEA") && labelTexts().includes("Tethys Ocean"), "Permian names Pangaea and the Tethys");
  run("setPeriod(" + ids.indexOf("now") + ", true); tMix = 1; draw();");
  ok(labelTexts().includes("Appalachian Mts.") && !labelTexts().some(t => /^now /.test(t)), 'today the landmarks drop the word "now"');
  ok(run("LANDMARKS.every(m => PLATES[m.plate] && /^(mountain|forest|desert|ice|region|city)$/.test(m.kind))") &&
     run("PERIODS.every(p => PERIOD_LABELS[p.id] && PERIOD_LABELS[p.id].lands.every(l => PLATES[l.plate]))"),
     "landmarks and period labels reference real plates");
  /* every ocean label must sit over open water, at least 5 degrees from land */
  const wet = run(`(function(){
    const dot = (a, b) => a[0]*b[0] + a[1]*b[1] + a[2]*b[2], bad = [];
    for (const P of PERIODS){
      const rings = [];
      for (const k of PLATE_IDS){
        const q = P.plates[k], T = plateTransform(PLATES[k].home, q[0], q[1], q[2]);
        for (const r of PLATES[k].vecs) rings.push(r.map(T));
      }
      for (const o of PERIOD_LABELS[P.id].oceans){
        const pt = vec(o.at[0], o.at[1]);
        const u = norm(cross(Math.abs(pt[2]) > .9 ? [1,0,0] : [0,0,1], pt)), w = cross(pt, u);
        let inside = false, near = 180;
        for (const r of rings){
          let ang = 0;
          for (let i = 0; i < r.length; i++){
            const a = r[i], b = r[(i + 1) % r.length];
            near = Math.min(near, Math.acos(Math.min(1, dot(a, pt))) / D);
            if (dot(a, pt) < .05 || dot(b, pt) < .05) continue;
            const ax = dot(a, u)/dot(a, pt), ay = dot(a, w)/dot(a, pt), bx = dot(b, u)/dot(b, pt), by = dot(b, w)/dot(b, pt);
            ang += Math.atan2(ax*by - ay*bx, ax*bx + ay*by);
          }
          if (Math.abs(ang) > Math.PI) inside = true;
        }
        if (inside || near < 5) bad.push(P.id + " " + o.text);
      }
    }
    return bad.join(", ");
  })()`);
  ok(wet === "", "ocean labels sit over open water" + (wet ? ": " + wet : ""));
  click(doc.getElementById("togLabels"));
  run("draw();");
  ok(doc.getElementById("gLabel").style.display === "none", "Labels toggle hides them");
  click(doc.getElementById("togLabels"));

  console.log("panel: period and site");
  const panel = doc.getElementById("panel");
  ok(panel.querySelector(".p-head") && panel.querySelectorAll(".site-btn").length > 0, "period overview renders");
  const facts = [...panel.querySelectorAll(".facts .k")].map(n => n.textContent);
  ok(facts[facts.length - 1] === "Rock record", "facts list ends with Rock record");
  click(panel.querySelector(".site-btn"));
  ok(panel.querySelector(".thennow") && run("mode") === "site", "site detail renders with then/now");
  click(panel.querySelector(".back"));
  ok(run("mode") === "period", "back returns to the overview");

  console.log("panel: comparisons");
  click(doc.getElementById("modeCompare"));
  ok(run("mode") === "compare" && doc.getElementById("modeCompare").getAttribute("aria-pressed") === "true", "Comparisons chip opens the mode");
  ok(panel.querySelectorAll(".grp-title").length === 2, "two groups");
  ok(panel.querySelectorAll(".cmp").length === run("COMPARISONS.length"), "all " + run("COMPARISONS.length") + " comparisons listed");
  click(panel.querySelector('.cmp[data-id="mesosaurus"] .go'));
  ok(run("PERIODS[idx].id") === "per", "Mesosaurus switches the globe to the Permian");
  run("tMix = 1; draw();");
  ok(doc.querySelectorAll("#gHi > g").length === 2, "two places highlighted");
  ok(panel.querySelector('.cmp[data-id="mesosaurus"]').classList.contains("active"), "active comparison is marked");
  ok(/Permian/.test(panel.querySelector('.cmp[data-id="mesosaurus"] .cmp-when').textContent), "the period is named in the panel");
  ok(run("mode") === "compare" && panel.querySelector(".cmp"), "panel stays in the mode when the period changes");
  click(panel.querySelector('.cmp[data-id="polar"] .go'));
  ok(run("PERIODS[idx].id") === "ord" && run("seqTimer !== null"), "two-period comparison starts in the Ordovician and queues the second step");
  click(panel.querySelector('.cmp[data-id="polar"] .place[data-i="1"]'));
  ok(run("PERIODS[idx].id") === "now" && run("seqTimer === null"), "clicking one place goes to its own period");
  click(doc.getElementById("modeCompare"));
  ok(run("mode") === "period" && doc.querySelectorAll("#gHi > g").length === 0, "chip toggles back and clears highlights");

  console.log("panel: layers");
  click(doc.getElementById("modeLayers"));
  ok(run("mode") === "layers" && panel.querySelector("svg.column"), "Layers chip renders an SVG column");
  const nLayers = k => run("COLUMNS[" + k + "].layers.filter(L => !L.marker).length");
  ok(panel.querySelectorAll(".layer").length === nLayers(0), "Grand Canyon: " + nLayers(0) + " clickable layers and gaps");
  ok(panel.querySelectorAll(".layer.is-gap").length === 2, "Grand Canyon shows its two unconformities");
  const coconino = [...panel.querySelectorAll(".layer")].find(g => /Coconino/.test(g.getAttribute("aria-label")));
  ok(coconino.querySelector(".rock").getAttribute("fill") === run("PERIODS.find(p => p.id === 'per').colour"), "layer colour is the timeline colour");
  click(coconino);
  ok(run("PERIODS[idx].id") === "per", "clicking the Coconino switches to the Permian");
  ok(/Coconino/.test(doc.getElementById("layerCard").textContent) && /dune/i.test(doc.getElementById("layerCard").textContent), "layer card shows name and environment");
  ok(coconino.getAttribute("aria-current") === "true" && coconino.classList.contains("sel"), "layer is marked current and selected");
  ok(doc.querySelectorAll("#gHi > g").length === 1, "column location highlighted on the globe");
  const before = run("idx");
  click([...panel.querySelectorAll(".layer")].find(g => /Vishnu/.test(g.getAttribute("aria-label"))));
  ok(run("idx") === before, "Precambrian basement leaves the period alone");
  click(panel.querySelector('.col-switch .chip[data-k="1"]'));
  ok(/Southern England/.test(panel.querySelector(".p-head").textContent), "switches to the England column");
  ok(panel.querySelectorAll(".layer").length === nLayers(1), "England: " + nLayers(1) + " layers and gaps");
  click([...panel.querySelectorAll(".layer")].find(g => /^Chalk/.test(g.getAttribute("aria-label"))));
  ok(run("PERIODS[idx].id") === "cre", "clicking the Chalk switches to the Cretaceous");
  click(doc.querySelectorAll(".seg")[3]);
  ok(run("mode") === "layers" && /Devonian/.test(panel.querySelector(".back").textContent), "timeline click keeps the column and updates the back link");
  click(panel.querySelector(".back"));
  ok(run("mode") === "period" && /Forests appear/.test(panel.textContent), "back returns to the Devonian overview");

  console.log("panel: animals");
  run("setPeriod(" + ids.indexOf("dev") + ", true); tMix = 1; draw();");
  click(doc.getElementById("modeAnimals"));
  ok(run("mode") === "animals" && panel.querySelectorAll(".animal").length === run("ANIMALS.dev.length"), "Animals chip lists the Devonian animals");
  ok(run(`Object.keys(ANIMALS).every(k => PERIODS.some(p => p.id === k) && ANIMALS[k].every(a =>
          PLATES[a.plate] && isFinite(a.lon) && isFinite(a.lat) && /^(marine|freshwater|land|air)$/.test(a.habitat) &&
          a.genus && a.group && a.environment && a.size && a.matters && a.place && a.sources.length >= 1 &&
          (!a.site || PERIODS.find(p => p.id === k).sites.some(s => s.title === a.site))))`),
     "every animal has a plate, habitat, texts and sources, and links only to a site of its own period");
  const imgs = run("[].concat(...Object.keys(ANIMALS).map(k => ANIMALS[k])).filter(a => a.img).map(a => a.img)");
  ok(imgs.every(i => fs.existsSync(path.join(root, i))) && imgs.every(i => run("SILHOUETTES.some(x => x.file === " + JSON.stringify(i) + " && /^CC0|^CC BY \\d/.test(x.licence))")),
     imgs.length + " silhouettes exist on disk and each is credited under CC0 or CC BY");
  const tik = [...panel.querySelectorAll(".animal")].find(li => /Tiktaalik/.test(li.textContent));
  click(tik.querySelector(".go"));
  run("tMix = 1; draw();");
  ok(doc.querySelectorAll("#gHi > g").length === 1 && tik.classList.contains("active"), "Show on globe marks the animal's locality");
  ok(tik.querySelector(".src a") && /sources\.html#s\d+/.test(tik.querySelector(".src a").getAttribute("href")), "each animal ends with a linked Sources line");
  click(tik.querySelector(".an-site"));
  ok(run("mode") === "site" && /Tiktaalik/.test(panel.querySelector(".p-head").textContent), "an animal links to the site that tells its story");
  click(doc.getElementById("modeAnimals"));
  click(doc.querySelectorAll(".seg")[0]);
  ok(run("mode") === "animals" && /Cambrian/.test(panel.querySelector(".p-head").textContent), "the list follows the period");
  click(panel.querySelector(".back"));

  console.log("sources");
  const nums = run("SOURCES.map(s => s.n)");
  ok(nums.length > 0 && new Set(nums).size === nums.length, nums.length + " sources, each with its own number");
  ok(run(`SOURCES.every(s => SOURCE_GROUPS.some(g => g.id === s.group) && s.authors && s.title && s.container &&
          /^https:\\/\\//.test(s.url) && /^\\d{4}-\\d{2}-\\d{2}$/.test(s.accessed) && (s.year === null || s.year > 1700))`),
     "every source has a group, authors, title, container, https link and access date");
  ok(!run("SOURCES.some(s => /wikipedia\\.org|britannica\\.com/i.test(s.url))"), "no encyclopaedia is cited");
  const cited = run(`(function(){
    const out = [];
    const take = (where, list) => (list || []).forEach(n => out.push([where, n]));
    PERIODS.forEach(p => { take("period " + p.id, p.sources); p.sites.forEach(s => take("site " + s.title, s.sources)); });
    COMPARISONS.forEach(c => take("comparison " + c.id, c.sources));
    COLUMNS.forEach(c => c.layers.forEach(L => take("layer " + L.name, L.sources)));
    if (typeof ANIMALS !== "undefined") Object.keys(ANIMALS).forEach(k => ANIMALS[k].forEach(a => take("animal " + a.genus, a.sources)));
    return out;
  })()`);
  const dangling = cited.filter(c => !nums.includes(c[1]));
  ok(dangling.length === 0, cited.length + " citations in the data all point at a listed source" +
     (dangling.length ? ": missing " + dangling.slice(0, 5).map(d => d.join(" -> ")).join("; ") : ""));
  ok(doc.querySelector('.masthead a[href="sources.html"]') !== null, "the masthead links to the sources page");
  const page = new JSDOM(fs.readFileSync(path.join(root, "sources.html"), "utf8"), { runScripts:"outside-only", url:"file://" + root + "/sources.html" });
  const pctx = page.getInternalVMContext();
  for (const src of [...page.window.document.querySelectorAll("script[src]")].map(x => x.getAttribute("src")))
    new vm.Script(fs.readFileSync(path.join(root, src), "utf8")).runInContext(pctx);
  const pdoc = page.window.document;
  ok(pdoc.querySelectorAll(".src-list li").length === nums.length && nums.every(n => pdoc.getElementById("s" + n)),
     "sources.html lists every source with a numbered anchor");
  ok([...pdoc.querySelectorAll(".src-list li a")].every(a => /^https:/.test(a.getAttribute("href"))), "every entry's title is a link");
  page.window.close();

  console.log("\n" + (checks - failures) + " of " + checks + " checks passed");
  win.close();
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
