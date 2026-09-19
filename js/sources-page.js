/* Renders sources.html from js/sources.js. */
(function(){
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const day = iso => {
    const m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const p = iso.split("-");
    return +p[2] + " " + m[+p[1] - 1] + " " + p[0];
  };
  const host = document.getElementById("sourceList");
  const nav = document.getElementById("sourceNav");
  let html = "", links = "";
  for (const g of SOURCE_GROUPS){
    const list = SOURCES.filter(s => s.group === g.id).sort((a, b) => a.n - b.n);
    if (!list.length && g.id !== "data") continue;
    links += '<a class="chip" href="#g-' + g.id + '">' + esc(g.title) + '</a>';
    html += '<section class="src-group" id="g-' + g.id + '"><h2>' + esc(g.title) + '</h2><ol class="src-list">' +
      list.map(s =>
        '<li id="s' + s.n + '" value="' + s.n + '"><span class="src-n">' + s.n + '</span><span>' +
        esc(s.authors) + (s.year ? " (" + s.year + ")." : ".") +
        ' <a href="' + esc(s.url) + '" rel="noopener">' + esc(s.title) + '</a>. ' + esc(s.container) +
        '. <span class="src-acc">Accessed ' + day(s.accessed) + '.</span></span></li>').join("") + '</ol>';
    if (g.id === "data" && SILHOUETTES.length){
      html += '<h3>Silhouettes from PhyloPic</h3><ul class="src-sil">' + SILHOUETTES.map(x =>
        '<li><a href="' + esc(x.imagePage) + '" rel="noopener">' + esc(x.genus) + '</a>' +
        (x.note ? " (" + esc(x.note) + ")" : "") + ', by ' + esc(x.contributor || "an uncredited contributor") +
        ', <a href="' + esc(x.licenceUrl) + '" rel="noopener">' + esc(x.licence) + '</a>.</li>').join("") + '</ul>';
    }
    html += '</section>';
  }
  host.innerHTML = html;
  nav.innerHTML = links;
  document.getElementById("sourceCount").textContent = SOURCES.length;
  /* a link such as sources.html#s12 arrives before the list exists */
  if (location.hash){
    const target = document.getElementById(location.hash.slice(1));
    if (target){ target.scrollIntoView(); target.classList.add("hit"); }
  }
  window.addEventListener("hashchange", () => {
    document.querySelectorAll(".src-list li.hit").forEach(li => li.classList.remove("hit"));
    const t = document.getElementById(location.hash.slice(1));
    if (t) t.classList.add("hit");
  });
})();
