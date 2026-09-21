# Source authenticity rubric

A method for deciding how far a source can be trusted, and what it may be used to support.
It applies to every layer of GeoGlobe: the existing periods, sites, animals, comparisons and
columns, the alternative-views layer, and any layer added later.

The rubric scores a source on nine dimensions, adds the scores, and converts the total into a
tier from A to E. The tier then limits what the source may support: a number, a sentence of
framing, or only the fact that somebody made a claim.

## 1. What gets scored

Score a source **against the point it is cited for**. Most sources are cited for one point
and get one record. A source cited for two different points can earn two different scores.
Philip Sclater's 1864 paper is a sound record of what Sclater proposed, and a superseded source
on whether a sunken continent joined Madagascar to India. The first use scores well and the
second is capped (see the gates in section 4).

A score describes the source as it was published. It does not describe the claim. A tier A
paper can be wrong, and the corroboration and recency dimensions exist to catch that case.

## 2. The nine dimensions

Each dimension scores 0, 1 or 2.

| Key | Dimension | 2 | 1 | 0 |
| --- | --- | --- | --- | --- |
| `prov` | Provenance | Named publisher and named author or responsible body; stable location (DOI, ISBN, report number, institutional URL) | Publisher known, but the author is unnamed or the location is unstable (a mirror, a reposted copy, an archive capture) | Anonymous, or the origin cannot be traced |
| `exp` | Author expertise in the field of the claim | Author trained in, and publishing in, the field the claim sits in | Expertise in a neighbouring field, or a professional communicator writing directly from named experts | No relevant expertise shown |
| `rev` | Peer or editorial review | Peer review: a refereed journal, a refereed monograph or special publication, a survey or agency series with formal technical review | Editorial review: museum and agency web content, university news offices, newspapers and magazines, trade publishers | None: self-published, a personal site, a blog, a forum post, a preprint |
| `data` | Primary data or direct observation | Reports the author's own observations, measurements, excavation, survey or dataset | Synthesises primary work closely: a review article, a survey compilation, a textbook, a curator's summary of a collection | Restates others' conclusions without data |
| `cite` | Citations to checkable sources | Full references that a reader can find and check | Names sources loosely, or links one paper | No sources given |
| `corr` | Independent replication or corroboration | The point has been independently confirmed, or agrees with several independent lines of evidence | Some support; or a single study that later work has not contradicted | Unconfirmed after testing, or contradicted by later work |
| `meth` | Stated methods | Methods described well enough to repeat | Methods partly described | Methods not described |
| `coi` | Conflicts of interest | None apparent | An institutional interest: a press release promoting the institution's own finding, a tourism or heritage body promoting its site, a commercial publisher marketing a book | A direct stake in the conclusion: selling a product, tours or a book series built on the claim, or advocacy for the conclusion |
| `rec` | Recency relative to the field | Current on the point cited; or the original record, when the point is historical (who said what, and when) | Older, and broadly consistent with current work, though superseded in detail | Superseded on the point cited |

Notes on applying them:

- **Expertise is field-specific.** A geophysicist writing about pyramid construction scores 1,
  and a journalist quoting archaeologists scores 1. A lawyer or a novelist writing about
  Pleistocene sea level scores 0.
- **Recency is relative to the field.** Alfred Wegener's 1915 book is the original record of
  what Wegener argued and scores 2 for that. It scores 1 as evidence for continental drift,
  because the mechanism he proposed was replaced.
- **Retractions and expressions of concern.** A retracted paper scores 0 on `corr` and 0 on
  `rec` for the retracted claim. It remains a valid record that the claim was published.
- **Primary data in historical work.** For a claim about what somebody wrote, the original text
  is the primary data. A 1911 book quoted for its own words scores 2 on `data`.

## 3. From total to tier

The nine scores add to a total from 0 to 18.

| Tier | Total | What usually lands here |
| --- | --- | --- |
| **A** | 15 to 18 | Peer-reviewed or institutional primary work: journal papers, refereed monographs, survey maps and memoirs, ICS and agency datasets |
| **B** | 10 to 14 | Reputable secondary work: survey and agency explainers, museum and park pages written by curators, university teaching pages, textbooks, review chapters, heritage-body assessments |
| **C** | 7 to 9 | Quality journalism and science press, including university and museum press releases |
| **D** | 4 to 6 | Advocacy, popular books, self-published work |
| **E** | 0 to 3 | Anonymous, commercial or unverifiable sources |

## 4. Gates

A gate caps the tier whatever the total. Apply every gate that fits and keep the lowest cap.

1. **A needs review and data.** Tier A requires `rev` 2 and `data` at least 1. A source that
   misses either is capped at B.
2. **No review, no B.** A source with `rev` 0 is capped at C if the author has field expertise
   (`exp` 2), and at D otherwise. This puts an expert's preprint or personal site at C and a
   self-published book at D.
3. **Direct stake.** A source with `coi` 0 is capped at D.
4. **Untraceable.** A source with `prov` 0 is tier E.
5. **Superseded or contradicted on the point cited.** A source with `corr` 0 or `rec` 0 is
   capped at D for that point. It can still record that the claim was made.
6. **Restatement only.** A source with `data` 0, which restates others' conclusions without
   data or a close synthesis of it, is capped at C. This is the gate that keeps journalism and
   press releases at C however carefully they are written.

## 5. What each tier may support

| Tier | May support on its own | May not support |
| --- | --- | --- |
| A | Any factual claim, including numbers, dates and positions | |
| B | Any factual claim, including numbers, dates and positions | |
| C | Framing: context, who found something, what a place is like today, how a finding was received | A number, a date, a position or a measurement, unless an A or B source for the same number is cited beside it |
| D | Evidence that a claim exists, who made it, and in what words | Any statement that the claim is true |
| E | Evidence that a claim exists, and only when no D or better record of it can be found | Anything else |

Further rules:

- **Numbers need A or B.** Every number the reader sees (an age, a size, a depth, a rate, a
  latitude) must trace to at least one A or B source. A tier C source cited beside it is
  allowed for framing.
- **Quoting proponents.** When a panel quotes a proponent, cite the proponent's own work, even
  when it is tier D or E. A secondary description of the claim is second best. A proponent's
  work is never cited for anything other than what the proponent said.
- **Disagreement among A sources.** Report the range and cite both ends. Do not pick one.
- **Role belongs to the citation.** The same source can support a number in one panel and
  framing in another. The tier belongs to the source; the role belongs to the place where it
  is cited.

## 6. Typical scores

These profiles are starting points. Adjust any dimension that the particular source earns
differently, and say why in the justification line.

| Kind of source | prov | exp | rev | data | cite | corr | meth | coi | rec | Total | Tier |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Research paper in a refereed journal | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 2 | 17 | A |
| Review paper, refereed monograph, special publication | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 2 | 2 | 16 | A |
| Survey map, memoir or open-file report | 2 | 2 | 2 | 2 | 2 | 1 | 2 | 2 | 1 | 16 | A |
| Survey or agency explainer (USGS *This Dynamic Earth*, BGS) | 2 | 2 | 2 | 1 | 1 | 2 | 0 | 2 | 1 | 13 | B |
| Textbook or scholarly reference chapter | 2 | 2 | 2 | 1 | 2 | 2 | 0 | 2 | 1 | 14 | B |
| Museum or park page written by curators or staff scientists | 2 | 2 | 1 | 1 | 1 | 1 | 0 | 2 | 2 | 12 | B |
| Museum or agency page by education or communications staff | 2 | 1 | 1 | 1 | 0 | 1 | 0 | 2 | 2 | 10 | B |
| Heritage-body site assessment (IUCN, IUGS) | 2 | 2 | 1 | 1 | 1 | 1 | 0 | 2 | 2 | 12 | B |
| University or museum press release on its own finding | 2 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 2 | 9 | C |
| Science journalism (The Conversation, Smithsonian, New Scientist) | 2 | 1 | 1 | 0 | 1 | 1 | 0 | 2 | 2 | 10 | C (gate 6) |
| Science news aggregator (rewritten press releases) | 2 | 0 | 1 | 0 | 1 | 1 | 0 | 2 | 2 | 9 | C |
| Local council or tourism page | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 1 | 2 | 7 | C |
| Popular book by a non-specialist with a thesis to sell | 2 | 0 | 1 | 0 | 1 | 0 | 0 | 0 | 2 | 6 | D |
| Self-published book or personal website | 2 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 5 | D |
| Anonymous web page, video or forum post | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 2 | 3 | E |

A careful journalism piece can reach 10 on the total, and gate 6 still holds it at C. Give it
`exp` 2 only when the writer is a specialist in the field, as when researchers write up their
own work for The Conversation. An article of that kind that reports the authors' own data
scores `data` 1, escapes gate 6, and can reach B.

## 7. The record format

Each scored source has a record. For a source already in `js/sources.js`, the record is keyed by
the source number, and the bibliographic fields stay in `SOURCES` so they are not written twice:

```js
// js/source-tiers.js
const SOURCE_TIERS = {
  12: { tier:"B", prov:2, exp:2, rev:1, data:1, cite:1, corr:1, meth:0, coi:2, rec:2,
        note:"University of Aberdeen teaching resource written by Rhynie chert researchers." },
  ...
};
```

A new source, not yet in `SOURCES`, carries its bibliographic fields in the record:

```js
{ id:"alt-sclater-1864",
  title:"The mammals of Madagascar",
  author:"Sclater, P. L.",
  year:1864,
  url:"https://...",
  accessed:"2026-09-21",
  tier:"B", prov:2, exp:2, rev:1, data:2, cite:1, corr:2, meth:1, coi:2, rec:2,
  note:"Original paper; cited only for what Sclater proposed and when.",
  point:"What Sclater proposed" }
```

The `point` field is required when a source is cited for a claim that it only records (gate 5)
or when it has two records. `tierFromScores()` in `js/source-tiers.js` recomputes the tier from
the nine scores and the gates, so a test can check that no record's tier has drifted from its
scores.

When the Sources page shows tiers, it reads `SOURCE_TIERS[n].tier` and prints the letter beside
the entry, with the note as its title text.

## 8. Checking a source in practice

1. Find who published it and who wrote it. If neither can be found, stop: it is tier E.
2. Find what kind of thing it is (paper, report, museum page, press release, book, web page)
   and start from the matching profile in section 6.
3. Read the part that supports the point. Check that it says what the tool says it says.
4. Adjust each dimension that differs from the profile.
5. Search for later work on the same point. A retraction, a correction or a later paper that
   contradicts it changes `corr` and `rec`.
6. Apply the gates, record the tier and write one line saying why.

## 9. The existing sources, scored

All 515 entries in `js/sources.js` were scored in September 2026 and the records are in
`js/source-tiers.js`. The brief for this work gave the count as 465; the file holds 515.

Each source started from the profile in section 6 for its kind and was adjusted where it earned
a different score. The 308 sources with a DOI are refereed papers, chapters and monographs, and
were scored from the paper or review profile; the sourcing pass recorded in `CORRECTIONS.md`
had already checked each one against the claim it supports. The 207 without a DOI were
classified one by one from their publisher, author and page type.

| Tier | Sources |
| --- | --- |
| A | 324 |
| B | 166 |
| C | 25 |
| D | 0 |
| E | 0 |

### Sources below tier B

All 25 are tier C. Twenty-two are press releases or news stories in which a university or
museum reports its own researchers' finding, one is a museum's About page, one is a council
page, and one is a news aggregator. The old sourcing rule placed university and museum pages in
its second tier, which admitted these; the rubric separates a curator's page (B) from a press
release (C).

Every tier C source that is cited sits beside at least one A or B source in the same item. Two
are cited by nothing: they are listed on the Sources page and support no text.

| n | Source | Cited in | A or B beside it | Status |
| --- | --- | --- | --- | --- |
| 10, 11 | University of Chicago news, 2022 and 2008 | Tiktaalik (animals, Devonian) | 9 (Daeschler et al. 2006) | **Fails.** The 2.7 m length rests on these two pages alone; `CORRECTIONS.md` records that no Tiktaalik paper reached gave a length |
| 198, 199 | Berkeley News 2021; Jackson School news 2021 | Quetzalcoatlus (animals, Cretaceous) | 197 (NPS Big Bend) | **Probably fails.** The finding that it launched by jumping and fed by wading is reported through these press releases; the 2021 monograph itself is not cited |
| 154 | Field Museum blog 2016 | Atopodentatus (animals, Triassic) | 153 | **Probably fails.** "About the size of a crocodile, as the Field Museum describes it" is a size comparison with no A or B source |
| 16 | Wits University news 2018 | Tutusius (animals, Devonian) | 15 (Gess and Ahlberg 2018) | Check that the paper gives the length of about a metre |
| 127 | Museum Wales news 2007 | Didymograptus (animals, Ordovician) | 126 (BGS) | Check the source of "named in 1881" |
| 8 | Cleveland Museum blog 2025 | Dunkleosteus | 7 | Framing; lengths are from Engelman 2023 |
| 27 | Field Museum blog 2016 | Tullimonstrum | 25, 26 | Framing |
| 29 | NHM London news 2023 | Crassigyrinus | 28 | Framing |
| 31 | University of Glasgow news 2001 | Akmonistion | 30 | Framing |
| 35 | University of Washington news 2020 | Lystrosaurus (Permian) | 34 | Framing |
| 63 | Western Washington University news 2010 | Gastornis | 61, 62, 64 | Framing |
| 129 | Jackson School news 2020 | Kampecaris | 128, 130 | Framing; the 425 Ma date is from the papers |
| 141 | Dudley Council | Calymene | 111, 140 | Framing (the Dudley Bug and the coat of arms) |
| 143, 144 | University of Washington FAQ 2020; Field Museum blog | Lystrosaurus (Triassic) | 34, 142 | Framing |
| 156 | NHM Utah 2022 | Shonisaurus | 155 | Framing |
| 158 | University of Birmingham news 2015 | Metoposaurus | 157 | Framing |
| 161, 162 | BYU Geology; UAB news 2018 | Caelestiventus | 159, 160 | Framing |
| 186 | Sternberg Museum, About | Xiphactinus | 184, 185 | Framing |
| 211 | Carleton University news | Joggins Fossil Cliffs | 19, 208, 209, 210, 212, 213 | Framing |
| 223 | National Coal Mining Museum news | The coal measures | 218 to 222 | Framing |
| 43 | Sci.News 2025 | Not cited | | Listed but supports nothing; remove or cite |
| 22 | The Conversation (France) 2018, by the researchers | Not cited | | Scores B, since the authors report their own work; listed but supports nothing |

"Fails" rows come from the item text and `CORRECTIONS.md`. "Check" rows have a number whose
A or B source was not identified. "Framing" rows sit beside the paper that describes the
specimen or site, which is the natural source for the item's numbers. In this pass the rows
were read against the item text, but the A and B sources were not reopened to confirm each
number. A later pass should confirm every number in these items against its A or B source
and record the result in `CORRECTIONS.md`.
