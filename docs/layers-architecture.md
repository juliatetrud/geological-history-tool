# Layers: an architecture proposal

This is a proposal only. Nothing in it has been built. It describes how GeoGlobe can take on
new layers of content, starting with the alternative-views layer and then a layer of what
historical things were happening where, without a rewrite each time.

Sections 1 and 2 describe what the code does now and the constraints that follow from it.
Sections 3 to 6 are the proposal. Section 7 lists what needs a decision before building starts.

## 1. What the tool does now

- **Time is a period index.** `idx` in `js/app.js` points into `PERIODS`, eleven keyframes from
  the Cambrian (510 Ma) to Today (0). Each keyframe carries plate poses, ice, sites and prose.
  Moving between two periods interpolates the plate poses over three seconds. There is no
  notion of a time between keyframes that the rest of the code can ask about.
- **The ribbon is eleven equal buttons.** It is drawn from `PERIODS` with no time scale, so the
  Cambrian and the Paleogene take the same height. Today is one button at the top.
- **Everything on the globe is pinned to a plate.** A marker is `{ plate, lon, lat }` in modern
  coordinates and moves with its plate's pose. `setHighlights()` and `showPlaces()` already
  draw and pulse arbitrary places, and `cmpSteps()` already runs a sequence of places across
  different periods. Comparisons use this, and the new layers can use it too.
- **The panel has modes:** `period`, `site`, `compare`, `layers` (the rock columns) and
  `animals`. Each mode is entered from a chip under the globe and rendered by its own function.
- **The word "Layers" is taken.** The chip labelled Layers opens the two stratigraphic columns.
- **Ten plates, and gaps between them.** `PLATES` outlines North America, Europe, Siberia, China,
  India, Africa, South America, Australia, Antarctica and Madagascar. Anatolia, Arabia east of
  the Red Sea, Japan, the Aegean islands, Sundaland and New Zealand have no outline. A marker at
  Göbekli Tepe, Yonaguni, Gunung Padang, Santorini or Zealandia would sit on empty ocean.
- **Sources are numbered and grouped.** `SOURCES` in `js/sources.js` carries a `group`, and
  `sources.html` lists them group by group. `js/source-tiers.js` now scores each one (see
  `docs/source-rubric.md`), but no page reads it yet.
- **No build step.** Scripts are plain `<script>` tags that share top-level constants, and the
  page runs from `file://`. The proposal keeps both.

## 2. Constraints

1. The eleven-period ribbon, the plate poses and their hashes in the smoke test stay as they are.
2. A layer is data plus one registry entry. Adding the third layer should need no change to
   `app.js` beyond what the second layer already added.
3. A number the reader sees must trace to a tier A or B source, and the data should let the
   smoke test check that.
4. Human-scale items must not pretend to a precision the globe does not have. Over the last
   20,000 years the plates move less than a kilometre, about a hundredth of a degree, so plate
   motion is invisible at that scale. Sea level and ice are what change.

## 3. A common layer schema

### 3.1 The registry

One new file, `js/layers.js`, loaded after `js/sources.js`, declares every layer:

```js
const LAYERS = [
  { id:"alt",
    name:"Other ideas",                 // chip label; see decision 1
    title:"Ideas about the map, old and new",
    kind:"claims",                      // claims | events
    categories:[                        // the verdicts, in display order
      { id:"supported",  label:"Supported" },
      { id:"precursor",  label:"Scientific precursor" },
      { id:"kernel",     label:"Kernel of truth" },
      { id:"unsupported",label:"Unsupported" },
      { id:"contradicted",label:"Contradicted" } ],
    marker:"diamond",                   // distinct from the round site markers
    file:"js/layer-alt.js" },

  { id:"hist",
    name:"History",
    title:"What was happening where",
    kind:"events",
    categories:[ { id:"settlement", label:"Settlements" }, { id:"monument", label:"Monuments" },
                 { id:"migration", label:"Migrations" }, { id:"event", label:"Events" } ],
    marker:"square",
    file:"js/layer-hist.js" }
];
```

The categories belong to the layer, so the alternative-views layer has verdicts and the history
layer has kinds of event, and the renderer treats both as a coloured category.

### 3.2 An item

Each layer file declares its items in one array, `LAYER_ITEMS.alt = [ ... ]`.

```js
{ id:"alt-lemuria",
  layer:"alt",
  title:"Lemuria",
  category:"precursor",                 // one of the layer's categories

  body:"One paragraph, in the voice of SKILL.md.",

  /* time, in years before 2000 CE (see 3.3) */
  when:{ claim:   { from:null, to:null, text:"\"In former ages\" (Sclater 1864)" },
         evidence:{ from:null, to:88e6, text:"Madagascar and India joined until about 88 Ma" } },

  /* places; `role` says which side of the story each one belongs to */
  places:[
    { role:"claim",    area:"lemuria",  label:"Sclater's land bridge", short:"Lemuria (claimed)" },
    { role:"evidence", plate:"MAD", lon:46.8, lat:-19.0, label:"Madagascar", short:"Madagascar" },
    { role:"evidence", plate:"IND", lon:77.0, lat:12.0,  label:"Southern India", short:"India" },
    { role:"evidence", plate:"IND", lon:57.6, lat:-20.3, label:"Mauritius, on a sunken fragment", short:"Mauritia" } ],

  claimBy:["alt-sclater-1864-lemuria"], // the proponent's own work: any tier
  sources:[281, "alt-storey-1995-science"], // the evidence: tier A or B for every number
  tier:null }                           // derived at load time; see 3.4
```

For the history layer the same shape holds, with `when.evidence` alone, `role:"evidence"` on
every place and `claimBy` left empty.

**Location rule.** An item older than about 5 Ma must give a `plate` for each place, because the
globe has to carry it. An item younger than that gives modern `lon` and `lat` and may leave
`plate` as `null`; it is drawn on the Today geometry, which is correct to within a kilometre
for anything in the last 20,000 years. A place with `plate:null` is never drawn on a deep-time
globe.

**Areas.** Some claims are areas: a sunken continent, a land bridge, a grid of lines. `area`
names an entry in `LAYER_AREAS`, a list of modern `[lon, lat]` rings, drawn as a dashed outline
with a light hatch. An area on the ocean floor has no plate and is shown on the Today globe
only, which is honest: the claims put these lands in the modern ocean.

### 3.3 One time unit

Every `from` and `to` in every layer is **calendar years before 2000 CE**, a plain number. This
is the unit the Greenland ice-core chronology uses (b2k), and it covers both ends of the tool:
`510e6` for the Cambrian and `11600` for 9600 BCE.

- Radiocarbon dates quoted as BP (before 1950) are converted by adding 50 after calibration.
- The display rule is by size: over a million years prints as Ma, 12,000 years to a million
  prints as "years ago", and under 12,000 years prints as BCE or CE. A date and its converted
  form can be shown together where a panel needs both.
- `PERIODS[i].ma` stays as it is. The layer code converts with `ma * 1e6`.

### 3.4 Sources, tiers and roles

- `sources` holds the evidence. A number is either an existing `SOURCES` number or the id of a
  new record, and new records are appended to `SOURCES` with a `layer` field when the layer is
  built. Every evidence source must be tier C or better, and each item must have at least one
  A or B evidence source.
- `claimBy` holds the works that make the claim. Any tier is allowed, because a tier D book is
  the right source for what its author wrote. The panel prints them under their own heading
  so no reader takes them for evidence.
- `tier` is not typed by hand. At load time it is set to the best tier among the item's
  evidence sources, and the panel shows it as "Evidence: tier A".
- The smoke test gains four checks: every item's category exists in its layer; every
  evidence source is C or better; every item has an A or B evidence source; and every
  `SOURCE_TIERS` record matches `tierFromScores()`.

## 4. The time-scale problem

All of human history sits inside the Today button. The last 20,000 years are 0.004 percent of
the ribbon's 510 million years, and the last 5,000 are a quarter of that. A proportional ribbon
would give them less than a pixel.

### 4.1 Proposal: a second strip that opens from Today

The main ribbon stays exactly as it is. The Today segment gains a small expand control, a
chevron at its edge. Opening it slides out a **second strip** beside the ribbon on a wide
screen, and beneath it on a phone, drawn with the same segment style.

The strip has two scales, switched by two chips at its head:

**Last 20,000 years.** Segments follow the official units of the ICS chart, so the colours come
from the same source as the main ribbon:

| Segment | Span (years before 2000 CE) | Note |
| --- | --- | --- |
| Last Glacial Maximum | 26,500 to 19,000 | Ice sheets at their largest (Clark et al. 2009); sea level lowest, about 120 to 134 m below today |
| Deglaciation | 19,000 to 11,700 | Late Pleistocene; includes meltwater pulse 1A and the Younger Dryas |
| Greenlandian | 11,700 to 8,236 | First Holocene age |
| Northgrippian | 8,236 to 4,250 | Sea level close to today by the end |
| Meghalayan | 4,250 to now | Third Holocene age |

Within the strip the segments are proportional to time, because at this scale that is the
point. A thin marker line runs through the strip at each stop the globe can show. The stops follow
the sea-level table in the research: 21, 20, 15, 14, 12, 10, 8 and 6 thousand years ago, and today.
Stops at 4 and 2 thousand years ago can be added if the history layer needs them; sea level at both
is within a metre or two of today's.

**Last 5,000 years.** The same strip, rescaled to 3000 BCE to today, with stops every 500
years. At this scale nearly the whole strip is Meghalayan, so the segment colours give way to
century ticks, and the stops are what the reader uses.

The strip is a `tablist` like the ribbon, reachable by keyboard, and the Play button plays
through its stops when it is open. Closing the strip returns to the Today keyframe.

### 4.2 State: from an index to a time

`idx` stays, because every existing mode reads it. A second variable is added:

```js
let tYears = 0;              // years before 2000 CE; 0 unless the strip is open
let scale = "deep";          // deep | 20k | 5k
```

When `scale` is `deep`, `tYears` is `PERIODS[idx].ma * 1e6` and nothing changes. When the strip
is open, `idx` is pinned to Today (so plate poses, sites and labels are Today's), and `tYears`
moves between stops. Layer items are filtered by `tYears` in both cases: an item shows when its
claim or evidence span overlaps the window around the current time. The window is the
current period's span on the main ribbon, and the current segment on the strip.

### 4.3 What the globe shows at human scales

**Coastlines move.** Sea level is read from a curve, and the globe draws the continental shelf
that the lower sea exposes as extra land.

- `js/sealevel.js` holds the global mean sea level curve as `[yearsBefore2000, metres]` pairs
  (the table in the first entry of section 7 of `docs/alt-views-research.md`, to be replaced by
  the numeric curve from Lambeck et al. 2014 once it is obtained), and a set of shoreline rings,
  one for each of the depths -130, -120, -100, -80, -60, -40, -20 and -10 metres.
- The rings are traced once from a public bathymetry grid (ETOPO 2022 or GEBCO), simplified to
  about a quarter of a degree, and committed as data. The tracing script lives in `tools/` and
  is run by hand; the site itself still has no build step. At that simplification the full
  set should be around 150 to 300 KB, to be measured.
- At a given `tYears` the globe reads the sea level from the curve, draws the ring for the
  nearest depth at or below it as exposed land (in the pale land colour, with a thin dotted
  edge where today's coast is), and cross-fades between rings as the time moves. Doggerland,
  Sundaland, Beringia, the Sahul shelf joining Australia to New Guinea, and the land bridge
  between India and Sri Lanka appear and drown in the right order.
- The panel states the sea level in metres with its source, and says plainly that it is the
  global mean. Relative sea level differed from place to place, by tens of metres near the
  old ice sheets, and the globe does not model that.

**Ice sheets change.** The Laurentide, Cordilleran and Fennoscandian ice sheets are drawn from
published outlines at a few stops (for example Dalton et al. 2020 for North America and Hughes
et al. 2016 for Eurasia), in place of the circles used for deep time. The ice stays drawn
under the shelf land, since the ice sat on land that is now both.

**Terrain is simplified.** Today's forests and deserts are wrong for 20,000 years ago, when
tundra and steppe covered much of Europe and the Sahara had its own history. On the strip,
the land cover is switched off and the land is drawn in one neutral colour, with ice and
exposed shelf distinct. A vegetation map for the Last Glacial Maximum could be added later as
its own data, with its own sources.

**Labels.** "Now the ..." landmark labels stay, since they are the reader's anchor. Places on
the strip use modern names first.

**At the 5,000-year scale** the global sea level is within a few metres of today's, so the
globe keeps today's coastlines and the strip changes only which items are shown. The panel
says so, rather than implying a change the data does not show.

### 4.4 Missing land

Anatolia, Arabia, Japan, the Aegean, Sundaland, New Guinea and New Zealand have no outlines.
The human-scale layers need them, because many of their places are there. Two options:

- **Today-only outlines.** Add rings for these lands that are drawn only when `idx` is Today,
  with no pose, and are hidden in deep time. This is cheap and does not touch the pinned
  plate data.
- **New plates.** Add them to `PLATES` with poses in every period. This is the correct model and
  a large piece of work, since each pose must be solved against the evidence as the others
  were, and it changes the hashes the smoke test pins.

The first is enough for the two layers proposed here. See decision 3.

## 5. Toggling layers, the panel and the Sources page

### 5.1 Toggles

A new control group, **Layers**, sits beside Show, with one chip per registered layer, off by
default. A layer that is on:

- draws its markers on the globe in its own shape, coloured by category, alongside the site
  markers, for whatever time is showing;
- adds a short section to the period panel, "Other ideas in this period", listing its items
  that overlap the current time, each linking to the item;
- is remembered in `localStorage`, guarded by `try`, so a returning reader sees the layers
  they left on.

Several layers can be on at once. Markers from different layers differ by shape as well as
colour, so the key under the globe can name them.

### 5.2 The panel

Each layer also has a list view, entered from its chip's menu or from the period panel, in the
same form as Comparisons: items grouped by category, each with a Show on globe button. The
list view is one generic function that reads the registry, so a new layer adds no new panel
code.

An item opens in a panel with a fixed order:

1. Category (verdict) as the kicker, then the title.
2. **The idea.** The short quotation and who made it, with `claimBy` sources.
3. **The evidence.** The body, with `sources` and the evidence tier.
4. **The dates.** One line for each side: "Claimed: about 11,600 years ago. Evidence: the
   Atlantic began to open about 190 million years ago." Where the two differ by more than a
   factor of ten, the line gives the factor as the one anchor.
5. **Places.** The claim places and the evidence places as two lists of buttons.

For a history item, sections 2 and 4 collapse to a single date line.

### 5.3 The Sources page

`sources.html` groups by layer first and by group second:

- **The globe**: today's groups (Reconstruction method, Periods, Sites, Animals, Comparisons,
  Layers, Terrain, Data).
- **Other ideas**: *Evidence* and *Works that make the claims*, as two subheadings, so a
  proponent's book is never listed among the evidence.
- **History**, and each later layer, in the same form.

Each entry shows its tier letter in a small badge before the title, with the justification as
its tooltip. A row of chips at the top filters by tier. Source numbers remain global and are
never reused, so a link such as `sources.html#s512` keeps working whatever layer the source
belongs to.

## 6. Showing a claim against the evidence

The layer is useful if the globe can show the two side by side in both space and time.

### 6.1 On the globe

- **Claim places** are drawn as hollow dashed rings, **evidence places** as solid markers.
  Where one claim and one evidence place belong together (Atlantis in the mid-Atlantic, and the
  Thera eruption on Santorini), a dashed great-circle arc joins them.
- **Claimed areas** (Lemuria, Mu, Kumari Kandam, a sunken bridge) are dashed outlines with a
  light hatch over the modern ocean, since that is where the claims put them.
- **Show on globe** runs a two-step sequence, using `showPlaces()` as Comparisons do: first the
  claim at its claimed time, then the evidence at its evidenced time. For Lemuria that means the
  hatched bridge across today's Indian Ocean, then a drift back to the Cretaceous, where the
  globe shows Madagascar and India actually joined, and separating at about 88 Ma. For land
  bridges it means the Permian globe, where the Glossopteris coalfields sit side by side with no
  bridge needed. The comparison is made by the reconstruction the tool already has.
- Evidence places pinned to a plate stay marked as the plates move, as inherited comparisons
  do, so stepping through the timeline shows them separating.

### 6.2 On the timeline

- Two ticks are drawn when an item is open: a hollow tick at the claimed date, a solid tick at
  the evidenced date, each on whichever strip holds it.
- When the two sit on different scales, as with a claim of 11,600 years ago and an ocean that
  opened 190 million years ago, the claim tick sits on the 20,000-year strip and the evidence
  tick on the main ribbon, and a bracket from the Today segment to the strip connects them. The
  panel gives the factor between them once.
- An undated claim (Mu, most ley lines) has no tick, and the date line says "Not dated by its
  proponents".

## 7. Decisions needed before building

1. **The tab name.** The working name is "Conspiracy". Several entries are not conspiracies in
   any sense: Wegener's drift was right, Zealandia and Doggerland are real, and Sclater and
   Carey were scientists testing hypotheses. The label would also sit badly with the voice
   rule against mocking proponents. A neutral name such as "Other ideas" or "Claims and
   evidence" fits every entry. Your call.
2. **"Layers" is already a chip.** Either rename the rock columns (for example "Rock columns")
   and use Layers for the new control group, or call the new groups something else.
3. **Missing land.** Today-only outlines for Anatolia, Arabia, Japan, the Aegean, Sundaland, New
   Guinea and New Zealand (quick, recommended), or full new plates with poses (slow, changes
   the pinned hashes). Separately, four groups of deep-time evidence places have no plate and need
   one to move with: Mauritia and the Seychelles (IND suggested), Zealandia (AUS, as the README
   already has it), Kerguelen and Elan Bank (ANT) and Sri Lanka (IND). The research, section 8,
   lists every place with its plate.
4. **Bathymetry data.** Adding traced shoreline rings means adding a data-preparation script in
   `tools/` and a few hundred KB of committed data from ETOPO or GEBCO. The site stays
   build-free, but the repo gains a script that needs Python and a downloaded grid.
5. **Global sea level only.** The globe would draw the global mean curve and say so. Modelling
   regional sea level would need a glacial isostatic adjustment model and is out of scope
   unless you want it.
6. **The time unit.** Years before 2000 CE for every stored date, with Ma, "years ago" and
   BCE/CE chosen by size for display. This is a convention to fix once.
7. **Tiers on the Sources page.** Whether to show the letter to readers, or keep it as a
   maintainer check only. Showing it is the more open choice, and will mark 25 existing
   entries C.
8. **Existing sources that fall below B.** Tiktaalik's 2.7 m length rests on two university
   press pages, which the rubric now rates C. Before building, either find an A or B source for
   the length or drop the number. The rubric moves university and museum press releases from
   the second tier of the old sourcing rules to C, which is a policy change and yours to
   approve. The full list is at the end of `docs/source-rubric.md`.
