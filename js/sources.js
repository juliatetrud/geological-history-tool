/* ===================== sources =====================
   Every reference the tool cites. Entries are numbered once and keep their
   number; sites, animals, comparisons, layers and periods point at them with
   `sources:[12, 34]`, and sources.html lists them by group.

   An entry:
     n         its number, never reused
     group     one of SOURCE_GROUPS
     authors   people, or the organisation that published it
     year      null for an undated web page
     title, container (journal and pages, publisher, or website)
     url       a DOI link where there is one
     accessed  the date the link was last checked

   Sourcing rules: peer-reviewed papers and monographs first, then geological
   surveys, museums, park services and universities. Science press is used for
   framing only, never as the sole source for a number. No encyclopaedias,
   blogs, content farms or dealers.                                          */

const SOURCE_GROUPS = [
  { id:"method",      title:"Reconstruction method" },
  { id:"periods",     title:"Periods" },
  { id:"sites",       title:"Sites" },
  { id:"animals",     title:"Animals" },
  { id:"comparisons", title:"Comparisons" },
  { id:"layers",      title:"Layers" },
  { id:"terrain",     title:"Terrain" },
  { id:"data",        title:"Data, fonts and silhouettes" }
];

const SOURCES = [
  { n:1, group:"data", authors:"Cohen, K. M.; Finney, S. C.; Gibbard, P. L.; Fan, J.-X.", year:2013,
    title:"The ICS International Chronostratigraphic Chart",
    container:"Episodes 36(3): 199–204. Period boundaries follow the chart as updated",
    url:"https://doi.org/10.18814/epiiugs/2013/v36i3/002", accessed:"2026-09-19" },
  { n:2, group:"data", authors:"International Commission on Stratigraphy", year:2024,
    title:"International Chronostratigraphic Chart, v2024/12",
    container:"stratigraphy.org. Source of the period dates and of the period colours used in the timeline and the rock columns",
    url:"https://stratigraphy.org/chart", accessed:"2026-09-19" },
  { n:3, group:"data", authors:"Production Type", year:null,
    title:"Newsreader",
    container:"Typeface, served by Google Fonts under the SIL Open Font License 1.1",
    url:"https://fonts.google.com/specimen/Newsreader", accessed:"2026-09-19" },
  { n:4, group:"data", authors:"IBM; Bold Monday", year:null,
    title:"IBM Plex Sans",
    container:"Typeface, served by Google Fonts under the SIL Open Font License 1.1",
    url:"https://fonts.google.com/specimen/IBM+Plex+Sans", accessed:"2026-09-19" },
  { n:5, group:"data", authors:"SIL International", year:2007,
    title:"SIL Open Font License, version 1.1",
    container:"openfontlicense.org",
    url:"https://openfontlicense.org/", accessed:"2026-09-19" },
  { n:6, group:"data", authors:"Tetrud, J.", year:2026,
    title:"GeoGlobe licence: MIT for code, CC BY 4.0 for content",
    container:"github.com/juliatetrud/geological-history-tool",
    url:"https://github.com/juliatetrud/geological-history-tool/blob/main/LICENSE", accessed:"2026-09-19" }
];

/* PhyloPic silhouettes used in the Animals panel, one line per image.
   Only CC0 and CC BY images are used. */
const SILHOUETTES = [];

function sourceByNumber(n){ return SOURCES.find(s => s.n === n); }
function sourceCitation(s){
  return s.authors + (s.year ? " (" + s.year + "). " : ". ") + s.title + ". " + s.container + ".";
}
