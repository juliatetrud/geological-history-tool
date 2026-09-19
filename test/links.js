/* Link check for js/sources.js. Run with `npm run links`. It needs the network,
   so it is not part of `npm test` or of the deploy.

   A DOI is checked against the doi.org handle API, because publishers often
   refuse automated requests to the article page itself. Any other link must
   answer a GET with a 2xx or 3xx status.                                      */

const fs = require("fs"), path = require("path"), vm = require("vm");
const ctx = vm.createContext({});
new vm.Script(fs.readFileSync(path.join(__dirname, "..", "js", "sources.js"), "utf8") +
  ";globalThis.OUT = { SOURCES, SILHOUETTES };").runInContext(ctx);
const { SOURCES, SILHOUETTES } = ctx.OUT;
const UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15";

async function check(url){
  const doi = url.match(/^https:\/\/doi\.org\/(.+)$/);
  try {
    if (doi){
      const r = await fetch("https://doi.org/api/handles/" + doi[1], { signal: AbortSignal.timeout(25000) });
      const j = await r.json();
      return j.responseCode === 1 ? "ok" : "doi not found";
    }
    const r = await fetch(url, { headers:{ "User-Agent":UA, "Accept":"text/html,*/*" }, redirect:"follow",
                                 signal: AbortSignal.timeout(30000) });
    return r.status < 400 ? "ok" : "HTTP " + r.status;
  } catch (e){
    /* Node ships fewer intermediate certificates than a browser; ask curl before failing */
    try {
      const code = require("child_process").execFileSync("curl", ["-s", "-o", "/dev/null", "-L", "-A", UA,
        "-w", "%{http_code}", "--max-time", "30", url]).toString();
      if (+code >= 200 && +code < 400) return "ok";
    } catch (e2) {}
    return "error: " + (e.cause && e.cause.code || e.name);
  }
}

(async function(){
  const jobs = SOURCES.map(s => ({ label:"[" + s.n + "] " + s.title, url:s.url }))
    .concat(SILHOUETTES.map(x => ({ label:"silhouette " + x.genus, url:x.imagePage })));
  let bad = 0;
  for (let i = 0; i < jobs.length; i += 8){
    const batch = jobs.slice(i, i + 8);
    const res = await Promise.all(batch.map(j => check(j.url)));
    res.forEach((r, k) => { if (r !== "ok"){ bad++; console.log("  FAIL  " + r + "  " + batch[k].label + "\n        " + batch[k].url); } });
  }
  console.log((jobs.length - bad) + " of " + jobs.length + " links resolve");
  process.exit(bad ? 1 : 0);
})();
