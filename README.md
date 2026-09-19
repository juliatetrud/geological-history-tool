# GeoGlobe

An interactive globe of the last half billion years. Drag it, step through eleven
geological periods from the Cambrian to today, and watch the continents travel.
Markers pin fossil beds, forests, ice sheets and tectonic events to the ground they
sit on, and each one describes the place then and what grows there now.

It is a teaching tool. It is written in plain JavaScript and SVG, has no build step
and no runtime dependencies beyond two Google Fonts, and runs from a folder on disk.

## What is in it

- **The globe.** An orthographic sphere with ten rigid plates. Period colours follow
  the International Commission on Stratigraphy timescale, and the page accent follows
  the colour of the current period.
- **Labels on the globe.** Capitals give the name a continent had at the time (Laurentia,
  Gondwana, Pangaea), italics name the oceans of the time (Iapetus, Tethys, Panthalassa),
  and small labels mark modern landmarks on the ground they now occupy: in the Permian,
  "now the Appalachian Mts." sits beside "now the Atlas Mts." in the middle of Pangaea.
  A name is tried on each side of its point; if none is free, the icon stays without it.
  A toggle turns all labels off.
- **Terrain.** Land is coloured by what grew on it. Before the Devonian it is bare rock. From
  the Devonian on, the colours follow climate belts fixed to the globe, so a continent changes
  colour as it drifts from one latitude to another. Where the rocks show a region was arid
  whatever its latitude, as with the Old Red Sandstone continent, it is painted red-brown and
  the key labels it "Arid, from the rock record". Today's globe shows actual forests, deserts,
  tundra, ice, rivers and lakes. Mountain ranges appear in the period that raised them, and
  pale blue patches are shallow seas over a continent's interior. A key under the globe names
  the colours in use.
- **Zoom.** Use the + and − buttons or keys, pinch on a touch screen or trackpad, or double-click.
  The plain scroll wheel is left to the page. Zooming in makes room for more landmark names.
- **The timeline** runs down the left of the globe, youngest at the top like a rock column.
- **Sites.** About fifty clickable places, each with a then/now panel.
- **Comparisons.** Pairs and sets of places that look alike, sorted into *inherited*
  (alike because they were once joined, such as the Dwyka, Itararé and Talchir glacial
  beds) and *convergent* (alike for other reasons, such as the Atacama and the Namib).
  Each one turns the globe to the places involved and pulses them. Inherited places
  stay marked as you move through the timeline, so you can watch them separate.
- **Layers.** Two stratigraphic columns, the Grand Canyon with the Grand Staircase and
  southern England from Somerset to Dover, drawn in the same colours as the timeline.
  Click a layer to see where that ground was when the rock was laid down.
  Unconformities are drawn as wavy breaks.
- **Rock record.** Each period's fact list ends with the kind of rock typically being
  laid down at the time and where to see it.

## Run it locally

Open `index.html` in a browser. That is all.

The scripts are ordinary `<script>` tags loaded in order, not ES modules, so the page
works from `file://` as well as from a web server.

## Tests

```
npm install
npm test
```

`test/smoke.js` loads the page in jsdom and checks that land paths have geometry in
every period, markers exist, the globe labels appear, all four panel modes render, the comparisons and columns
drive the globe, and the plate outlines and poses still match their recorded hashes.
`node test/smoke.js --reduced` runs the same checks with `prefers-reduced-motion` set.
jsdom is a devDependency only; nothing from `node_modules` is used by the site.

## Layout

```
index.html          page structure
css/globe.css       all styles
js/geometry.js      spherical maths, plate outlines (PLATES), icon drawings (ICONS)
js/data.js          PERIODS, COMPARISONS, COLUMNS, LANDMARKS, PERIOD_LABELS: all content
js/terrain.js       BIOMES, BELTS, LANDCOVER, RIVERS, LAKES, RANGES, SEAS: what colours the land
js/sources.js       SOURCES: every reference, numbered; SILHOUETTES: image credits
js/app.js           runtime: drawing, camera, panel modes, controls
sources.html        the numbered reference list (rendered by js/sources-page.js)
test/smoke.js       jsdom smoke test
test/links.js       checks that every source link resolves (npm run links; needs the network)
.github/workflows/pages.yml   test, then deploy the repo root to GitHub Pages
```

## How the reconstruction works

Each continent is a rigid plate: a simplified modern coastline stored as longitude and
latitude and converted once to unit vectors on a sphere. A plate's position in a given
period is a *pose* of three numbers, `[centre longitude, centre latitude, spin]`. The
transform spins the plate about its own modern centre, then carries that centre along
a great circle to its new position (two Rodrigues rotations, in `plateTransform`).
Moving between periods interpolates the pose, so you are watching the same pieces of
crust travel rather than new shapes being drawn.

The poses were not placed by eye. Gondwana (Africa, South America, India, Australia,
Antarctica, Madagascar) and Laurasia were first fitted as assemblies, so that their
pieces stay locked together for as long as they were joined. The pose of each plate
or assembly in each period was then solved numerically against paleolatitude evidence:
where the pole was, which margins were tropical, where the ice and the coal were.

Sites, comparison places and column locations are pinned to a plate at their modern
coordinates and carried through the same transform, which is why a fossil bed drifts
with the ground it sits in.

**Positions are schematic**, and more so the further back you go. Before about
200 million years ago there is no surviving ocean floor to measure, and reconstructions
rest on paleomagnetism, which gives latitude but not longitude, and on matching rocks
and fossils. Published models differ. This one follows the broad consensus rather than
any single model, and is not a source for distances or for plate boundaries.

Please do not edit `PLATES` or the `plates` poses in `PERIODS` casually. The smoke test
pins both with a hash so that any change is a deliberate one.

## Adding content

All content lives in `js/data.js`. Prose follows the voice guide in
`.claude/skills/geological-writing-voice/SKILL.md`, which Claude Code also loads as a skill
in this project, and the smoke test checks its mechanical rules.

### A site

Add an object to the `sites` array of a period. Coordinates are **modern** longitude
and latitude; the plate carries the site to where it was.

```js
{ plate:"NAM",                 // NAM EUR SIB CHI IND AFR SAM AUS ANT MAD
  lon:-116.5, lat:51.4,        // modern position, degrees; west and south negative
  cat:"fossil",                // fossil | forest | event | ice | sea  (marker colour)
  title:"Burgess Shale",
  sub:"508 million years old",
  body:"One paragraph.",
  then:{ where:"Equatorial sea floor", icon:"reef", text:"One or two sentences." },
  now: { where:"Yoho National Park, British Columbia", icon:"conifer", text:"..." } }
```

`icon` is a key of `ICONS` in `js/geometry.js`: `bare microbe moss lycopod fern conifer
cycad broadleaf palm grass scrub dune ice tundra taiga sea reef volcano city swamp`.

### A period field

Each period has `id`, `name`, `ma`, `span`, `colour` (ICS), `accent`, `view`
(the camera's starting longitude and latitude), `headline`, `body`, `facts`,
`strata` (the "Rock record" sentence), `plates`, `ice` and `sites`.

### A landmark or a label

```js
// LANDMARKS: a modern feature, pinned to a plate. `name` reads after the word "now".
{ plate:"NAM", lon:-82.5, lat:35.8, kind:"mountain", name:"the Appalachian Mts." }
//   kind: mountain | forest | desert | ice | region | city   (the small icon)

// PERIOD_LABELS[periodId].lands: what a continent was called then
{ plate:"AFR", lon:20, lat:5, text:"Gondwana" }

// PERIOD_LABELS[periodId].oceans: fixed at [lon, lat] in that period's globe
{ at:[66, 5], text:"Tethys Ocean" }
```

Landmarks earlier in the list win when labels collide, and the first `LANDMARK_TOP`
are always placed first. `npm test` checks that every ocean label sits over open water.

### Terrain

`js/terrain.js` holds everything that colours the land. Shapes are lists of modern
`[lon, lat]` pinned to a plate, and they are clipped to the coastline, so they can overrun it.

```js
BELTS.per = [[-90, -38, "forestC"], [-38, -8, "desert"], ...]   // south to north, no gaps
ARID_OVERRIDES.dev = [{ plate:"EUR", name:"...", source:"Old Red Sandstone ...", pts:[...] }]
                                                                  // arid whatever the belt; `source` names the evidence
{ plate:"SAM", biome:"forestT", pts:[[-78,2],[-70,8], ...] }      // LANDCOVER, today only
{ plate:"AFR", name:"Nile", pts:[[33,0.5],[31.5,6], ...] }        // RIVERS and LAKES, today only
{ plate:"SIB", name:"Urals", from:"per", pts:[...] }              // RANGES; optional to:"jur"
SEAS.cre = [{ plate:"NAM", name:"Western Interior Seaway", pts:[...] }]
```

### A comparison

```js
{ id:"mesosaurus",
  group:"inherited",           // inherited | convergent
  period:"per",                // the period id that shows it best
  title:"Mesosaurus",
  body:"Two or three sentences.",
  places:[
    { plate:"SAM", lon:-50.5, lat:-25.5, label:"Irati Formation, Brazil", short:"Brazil" },
    { plate:"AFR", lon:18.5,  lat:-26.5, label:"Whitehill Formation, Namibia", short:"Namibia" }
  ] }
```

`label` appears in the panel and `short` on the globe. A place can carry its own
`period` when the two halves of a comparison belong to different times (see the
Sahara and Antarctica entry); the globe then shows them one after the other.

### A column layer

Layers run **bottom to top**.

```js
{ name:"Coconino Sandstone",
  age:"Permian",               // label shown under the name
  period:"per",                // period id; null if older than the timeline
  to:"tri",                    // optional: unit spans into a younger period
  lith:"sandstone",            // sandstone shale limestone chalk coal mixed crystalline till
  m:100,                       // metres, used for drawing; null draws a fixed block
  env:"One sentence on the environment.",
  thick:"About 100 m" }

{ gap:true, name:"Great Unconformity", age:"Precambrian to Cambrian",
  period:null, note:"About 1 billion years missing", env:"One or two sentences." }

{ marker:true, name:"Canyon rim", note:"A labelled line with no thickness." }
```

Thickness is drawn at 0.3 pixels per metre. Thin layers are held to a height that fits
their label, and anything over 500 m is cut short and marked with a zigzag.

## Sources

Every site, animal, comparison, rock layer and period carries `sources:[12, 34]`, a list of
entry numbers from `js/sources.js`. The panel shows them as a "Sources" line, and each
number links to its entry on `sources.html`. To cite something new, append an entry to
`SOURCES` with the next unused number (numbers are never reused), then add that number to
the item. `npm test` fails if an item cites a number that does not exist, and
`npm run links` checks that every link still resolves.

The sourcing rules are: peer-reviewed papers and monographs first; then geological surveys,
museums, park services and universities; science press for framing only and never as the
sole source for a number. No encyclopaedias, blogs, content farms or dealers. A claim that
cannot be traced to the first two kinds of source is removed.

## Accessibility

Markers, layers and places are keyboard reachable, and the globe turns with the arrow
keys. With `prefers-reduced-motion` the globe does not auto-spin, period changes and
camera moves are instant, and the location pulse is a static ring.

## Caveats

- Coastlines are modern ones. Real coastlines of the past sat far inland of these
  edges, because shallow seas flooded most continental interiors for much of the time.
- Ten plates stand in for a much more complicated picture. Britain rides with Europe
  although Scotland began on Laurentia. New Zealand, Tasmania and New Guinea ride on
  the Australian plate and Puerto Rico on the North American plate, and none of them
  has an outline.
- Each period is shown at a single moment (for example the Carboniferous at 310 Ma),
  so a rock unit from early or late in a period is shown on a globe that is some
  tens of millions of years off.
- Layer thicknesses are approximate and vary from place to place. The columns are
  composites: no single cliff shows every layer.
- Ice sheets are drawn as simple circles.
- Terrain is schematic. Past climates are drawn as belts of latitude, which ignores
  rain shadows, monsoons and the distance from the sea. `ARID_OVERRIDES` corrects the
  belts in a few regions where the rock record is clear, and only there. Ancient rivers are not drawn,
  because their courses are mostly unknown. Shallow seas are rough outlines of the
  best-known ones, and many others are left out.
- The coastlines are simple polygons, and zooming in shows it.

## Credits

Concept, research and text by Julia Tetrud. Period colours are those of the
International Commission on Stratigraphy's International Chronostratigraphic Chart.
Typefaces are Newsreader and IBM Plex Sans, served by Google Fonts under the SIL Open
Font License. The refactor into a repository and the Comparisons and Layers features
were built with Claude Code.

## Licence

Code is released under the **MIT License**. Content, meaning the texts, the
comparisons and columns, the plate outlines and poses, and the icon drawings, is
released under **Creative Commons Attribution 4.0 International (CC BY 4.0)**.
See [LICENSE](LICENSE).
