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
  ok(srcs.join() === "js/geometry.js,js/data.js,js/app.js", "scripts load in order: " + srcs.join(", "));
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
  ok(!/!/.test(run("JSON.stringify([COMPARISONS, COLUMNS, PERIODS.map(p => p.strata)])")), "no exclamation marks in the new prose");

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

  console.log("\n" + (checks - failures) + " of " + checks + " checks passed");
  win.close();
  process.exit(failures ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
