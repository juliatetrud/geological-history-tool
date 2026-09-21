# Alternative views: research

Research for a GeoGlobe layer that sets older and alternative ideas about the map beside what the
evidence says. Nothing here is built. Every source is scored with `docs/source-rubric.md`, and the
scored records are in `docs/alt-views-sources.json`.

## 1. Summary

31 entries: Supported 8, Scientific precursor 2, Kernel of truth 4, Unsupported 7, Contradicted 10.

196 sources: 100 tier A, 53 tier B, 15 tier C, 28 tier D, 0 tier E. Every number in a "What the
evidence says" section rests on a tier A or B source. Tier C sources appear only as framing, and tier
D sources only as the record of what a proponent wrote.

| Section | Entry | Verdict |
| --- | --- | --- |
| 3 | Land bridges and sunken continents | Scientific precursor |
| 3 | Lemuria (Sclater's sunken continent) | Scientific precursor |
| 3 | Expanding Earth | Contradicted |
| 3 | Wegener's continental drift | Supported |
| 3 | Zealandia | Supported |
| 3 | Mauritia and the Kerguelen Plateau | Supported |
| 4 | Atlantis in the mid-Atlantic | Contradicted |
| 4 | The Richat Structure as Atlantis | Contradicted |
| 4 | Mu, the lost Pacific continent | Contradicted |
| 4 | Kumari Kandam, the drowned Tamil homeland | Kernel of truth |
| 4 | Ram Setu (Adam's Bridge) as a built causeway | Unsupported |
| 4 | The Gulf of Khambhat "submerged city" | Unsupported |
| 5 | Earth crust displacement | Kernel of truth |
| 5 | Antarctica as Atlantis | Contradicted |
| 5 | The Piri Reis map and an ice-free Queen Maud Land | Contradicted |
| 5 | Younger Dryas impact and a lost Ice Age civilisation | Unsupported |
| 6 | Pyramids on both sides of the Atlantic | Contradicted |
| 6 | Megaliths across Europe and beyond | Kernel of truth |
| 6 | Ley lines | Unsupported |
| 6 | Global site-alignment grids | Unsupported |
| 6 | Gunung Padang, West Java | Contradicted |
| 6 | The Bosnian pyramids, Visoko | Contradicted |
| 7 | Post-glacial sea-level rise since the Last Glacial Maximum | Supported |
| 7 | Doggerland | Supported |
| 7 | Sundaland | Supported |
| 7 | Beringia | Supported |
| 7 | The Black Sea flood debate | Kernel of truth |
| 7 | Göbekli Tepe as the work of a lost civilisation | Unsupported |
| 7 | Bimini Road | Contradicted |
| 7 | Yonaguni Monument | Unsupported |
| 7 | Pavlopetri (contrast: a drowned town) | Supported |

## 2. Method

**Scope.** Ideas that make a claim about geography, continents, sea level or ancient sites. Nine
entries were added to the brief's list because they fit it and sharpen it. Zealandia and Mauritia are
real sunken continental crust, the evidence that Lemuria and the land bridges point toward. The
Richat Structure is the most widely shared recent placement of Atlantis. The Younger Dryas impact
hypothesis is the event that later lost-civilisation claims rest on. Gunung Padang, the Bosnian
pyramids, Ram Setu, the Gulf of Khambhat and Pavlopetri are sites where a claim can be set against a
dated excavation or survey.

**Sources.** Every source was fetched and read for the point it is cited for. Historical and
proponent texts were read in scans of the originals (Project Gutenberg, the Internet Archive, the
Biodiversity Heritage Library) wherever they could be reached. German quotations are given verbatim
with a working translation in square brackets. A quotation that could not be checked against a
fetched text is marked "(paraphrase)".

**Verdicts.** One of five per entry:

- **Supported**: the evidence confirms it.
- **Scientific precursor**: a real hypothesis held by scientists, later replaced.
- **Kernel of truth**: a real phenomenon, exaggerated or misread.
- **Unsupported**: tested or examined, and no evidence found for it.
- **Contradicted**: the evidence shows something incompatible with it.

**Dates.** BCE and CE for human history; ka (thousand years ago) and Ma (million years ago) for
geological time. Radiocarbon ages are given as calibrated calendar ages where the source gives them,
and marked where it does not.

**Coordinates.** Modern longitude and latitude in decimal degrees, west and south negative. Most are
representative points read from a map, and they are marked as such in the entries. They are for
placing markers and should be checked against a gazetteer before release. Plate ids are given in
section 8 for places that map to one of the ten plates in `js/geometry.js`.

**Each entry** gives the claim in its proponent's words, who made it and when, what the evidence
says, the time mismatch, where the claim and the evidence sit on the globe and the timeline, the
places, and the open questions left after this pass.

## 3. Older scientific arrangements

Ideas that scientists held and tested, and the real sunken continents that the tests turned up.

---

### Land bridges and sunken continents

**Verdict:** Scientific precursor

**The claim.** "We call this mass Gondwana-Land, after the ancient Gondwana flora which is common to all its parts; it corresponds to a large extent with the Lemuria of zoologists" (Eduard Suess, *The Face of the Earth* vol. 1, English translation 1904 of *Das Antlitz der Erde* vol. 1, 1885, p. 596) [alt-suess-1885-gondwana-land]. Continents on either side of today's oceans once stood joined by broad tracts of land, and those tracts later sank to the ocean floor. Suess wrote that the Indian Ocean formed "by subsidence within the tabular mass" of Gondwana-Land (p. 596) [alt-suess-1885-gondwana-land].

**Who and when.** Suess named Gondwana-Land, after the Gondwana plant beds of India, in the first volume of *Das Antlitz der Erde*, which appeared in 1885 [alt-suess-1885-gondwana-land]. By 1920 Wegener could list the bridges that most specialists accepted: a North Atlantic link that broke in the Ice Age, a South America to Africa link that broke in the Eocene, a "lemurische" bridge from Madagascar to India that broke in the Lower Eocene, and a "gondwanische" bridge from Africa and Madagascar to Australia, probably through Antarctica, that broke in the Early to Middle Jurassic [alt-wegener-1920-land-bridges]. In 1932 the GSA Bulletin printed two long defences of land connections side by side. Charles Schuchert placed himself in the school of Suess, which held that parts of the ocean floor could once have been land ("The writer belongs in the last-named school") [alt-schuchert-1932-gondwana-bridges]. Bailey Willis accepted granitic continents and basaltic ocean floors in isostatic balance, and proposed narrow "isthmian links" on the model of the Isthmus of Panama in place of broad sunken continents [alt-willis-1932-isthmian-links].

**What the evidence says.** The bridges answered a real observation. The same fossil plants and animals turn up on continents that oceans now separate. Suess described one Gondwana flora common to Africa, Madagascar and peninsular India [alt-suess-1885-gondwana-land], and *Glossopteris* leaves occur in regions that are now polar [alt-usgs-tde-historical].

The mechanism failed on physics. Crust under the oceans is about 5 km thick; continental crust averages about 30 km [alt-usgs-tde-inside]. Thick, light continental crust floats high on the mantle, and a slab of it cannot sink to the deep-sea floor while it keeps its thickness. Wegener set out this argument from isostasy in 1920: shelf bridges can flood and re-emerge, he wrote, and only the sinking of land bridges to the deep-sea floor fails ("Nur das Versinken von Landbrücken bis zum Tiefseeboden ist es, was ... der Kritik nicht standzuhalten vermag") [alt-wegener-1920-land-bridges]. He added the water problem that Willis and Penck had raised. If broad bridges were raised without other ground sinking to compensate, the shrunken ocean basins could not hold the oceans' water [alt-wegener-1920-land-bridges].

Ocean-floor surveys after the 1950s closed the question. The floors between the matching continents are young basalt made at mid-ocean ridges [alt-usgs-tde-developing]. Very little sea floor anywhere is older than 150 million years [alt-noaa-sos-seafloor-age], and the oldest ocean crust still in place in the Pacific is 130 to 167 Ma [alt-hauff-2003-gcubed]. Drift carried the fossil-bearing rocks apart, so the matching fossils need no bridge [alt-usgs-tde-historical].

Specific causeways have been tested one at a time. Geological and geophysical data show open sea between Madagascar and Antarctica through the whole Late Cretaceous, and rule out a causeway from Antarctica to India across the Kerguelen Plateau [alt-ali-krause-2011-jbiogeog]. For Madagascar's land vertebrates, 26 of 30 lineages are best explained by crossings over water between 69 Ma and today, and two by descent from animals already on the land when Gondwana split [alt-ali-hedges-2024-annrev].

**Time mismatch.** Claim (land-bridge consensus summarised by Wegener, 1920): the Madagascar to India bridge broke in the Lower Eocene, though it still allowed limited exchange of animals until the Miocene [alt-wegener-1920-land-bridges]. Evidence: Madagascar and India rifted apart about 88 Ma (mean 87.6 ± 0.6 Ma) [alt-storey-1995-science]. Claim: the Indian Ocean formed by subsidence of Gondwana-Land. Evidence: Madagascar moved away from Africa by sea-floor spreading that began in the Middle Jurassic [alt-rabinowitz-1983-science].

**On the globe.** Claim: broad land strips across the South Atlantic, the western Indian Ocean and the Southern Ocean, standing where the ocean floor is now. Evidence: those areas are ocean floor made at spreading ridges, about 5 km of basaltic crust [alt-usgs-tde-inside] [alt-usgs-tde-developing]. At the times the bridges were supposed to exist, the continents themselves lay closer together, joined along their rifted margins. Timeline: the claimed bridges last until the Eocene; on the reconstruction the Madagascar to India gap opens at about 88 Ma [alt-storey-1995-science].

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Gondwana region, central India | 79.0 | 22.5 | both | Plant beds that gave Gondwana-Land its name |
| Karoo Basin, South Africa | 22.5 | -32.3 | both | Gondwana flora; matched to Brazil by Wegener |
| Paraná Basin, southern Brazil | -51.0 | -24.0 | both | Matching Permian strata and fossils |
| South Atlantic, representative point | -15.0 | -15.0 | claimed | Claimed South America to Africa bridge; now ocean floor |
| Western Indian Ocean between Madagascar and India | 60.0 | -5.0 | claimed | Claimed "lemurische" bridge |
| Isthmus of Panama | -79.5 | 9.0 | claimed | Willis's model for an isthmian link |

**Open questions.** The brief names *Mesosaurus* as a matching fossil. I could not reach a tier A or B source for its distribution in this pass (only museum blog and encyclopaedia pages), so it is left out of the entry. Schuchert's and Willis's 1932 papers were read only as publisher previews and section summaries; their exact arguments and maps need the full PDFs. Place coordinates are representative points from standard geography and are not tied to a source.

---

### Lemuria (Sclater's sunken continent)

**Verdict:** Scientific precursor

**The claim.** "In Madagascar and the Mascarene Islands we have existing relics of this great continent, for which as the original focus of the 'Stirps Lemurum,' I should propose the name Lemuria!" (Philip Lutley Sclater, "The mammals of Madagascar", *Quarterly Journal of Science* 1, April 1864, p. 219) [alt-sclater-1864-lemuria]. Lemurs and their relatives live in Madagascar, Africa and India but not in the lands between, so a large continent once joined these places and later broke up and sank.

**Who and when.** Sclater, Secretary of the Zoological Society of London, reasoned from the family he called Lemuridae, which in 1864 included the lorises of Africa and India. He concluded that "some land-connection must have existed in former ages between Madagascar and India", placed Lemuria across parts of the Atlantic and Indian Oceans, and proposed the name (pp. 218 to 219) [alt-sclater-1864-lemuria]. Ernst Haeckel took up the continent and made it "the probable cradle of the human race" (*The History of Creation* vol. 1, English translation 1876, p. 361) [alt-haeckel-1876-history-of-creation]. Helena Blavatsky made Lemuria the "third Continent" of her scheme of root races, citing Sclater, and wrote that it had "wholly disappeared beneath the waters of the Pacific" (*The Secret Doctrine* vol. 2, 1888, p. 7) [alt-blavatsky-1888-secret-doctrine]. W. Scott-Elliot's *The Lost Lemuria* (1904) printed two maps in which Lemuria at its largest "nearly girdled the globe", from near the Cape Verde Islands through Africa and Australia to the Society Islands; he assigned the older map to the Permian through Jurassic and the younger to the Cretaceous and Eocene [alt-scott-elliot-1904-lost-lemuria]. In 1920 Wegener recast Lemuria in drift terms: "Um Lemuria zu rekonstruieren, brauchen wir dagegen nur die Falten von Hochasien zu glätten, wodurch Vorderindien schon von selbst zur Berührung mit Madagaskar ... gebracht wird" [To reconstruct Lemuria we need only smooth out the folds of High Asia, which by itself brings India into contact with Madagascar] (p. 10) [alt-wegener-1920-lemuria-reinterpreted].

**What the evidence says.** Sclater was right that Madagascar and India were once joined. They were neighbours inside Gondwana, and they split along Madagascar's east coast about 88 Ma. Lavas and dikes along that 1,500 km rifted margin give a mean argon-argon age of 87.6 ± 0.6 Ma [alt-storey-1995-science]. Madagascar had already pulled away from Africa by sea-floor spreading that began in the Middle Jurassic and ended in the Early Cretaceous [alt-rabinowitz-1983-science]. The join between Madagascar and India was the two landmasses themselves, side by side, with no extra continent in between.

The lemurs arrived long after the split. DNA shows that all living Madagascar lemurs descend from a single ancestor, and that lemurs and the lorises of Africa and Asia share an African ancestor [alt-yoder-1996-pnas]. Molecular dating puts the start of the lemur radiation at about 62 to 65 Ma in nearly all analyses [alt-yoder-yang-2004-molecol], more than 20 million years after India had left. Madagascar has been an island since 85 Ma, separated from Africa by 430 km of water today, and most of its land-vertebrate lineages crossed that water between 69 Ma and the present [alt-ali-hedges-2024-annrev]. Reconstructed Palaeogene ocean currents flowed east from Mozambique and Tanzania toward Madagascar, which would carry rafts of vegetation the right way; the same study found the evidence inconsistent with a land bridge [alt-ali-huber-2010-nature].

A real piece of continent does lie under part of the area Sclater drew. Mauritius and the Mascarene Plateau sit on fragments of old continental crust, split from Madagascar as India pulled away (see the Mauritia entry) [alt-torsvik-2013-ngeo] [alt-ashwal-2017-ncomms]. These fragments are thin ribbons buried under volcanic rock, and they separated at the same time India did.

**Time mismatch.** Claim (Sclater 1864): a connection "in former ages", before Africa took its present shape; the lemur stock lived on it [alt-sclater-1864-lemuria]. Claim (Scott-Elliot 1904): Lemuria existed from the Permian into the Eocene [alt-scott-elliot-1904-lost-lemuria]. Evidence: Madagascar and India separated about 88 Ma [alt-storey-1995-science]; the lemur lineage began about 62 to 65 Ma [alt-yoder-yang-2004-molecol], after Madagascar was already an island [alt-ali-hedges-2024-annrev].

**On the globe.** Claim (Sclater): a continent over the western Indian Ocean and parts of the Atlantic, from Madagascar and the Mascarenes to India. Claim (Blavatsky): from Madagascar to Ceylon and Sumatra and on to Australia, now under the Pacific. Claim (Scott-Elliot): an equatorial belt from West Africa to the central Pacific. Evidence: the western Indian Ocean is ocean floor made as Madagascar left Africa and India left Madagascar [alt-rabinowitz-1983-science] [alt-storey-1995-science], with slivers of continental crust under the Mascarene Plateau [alt-torsvik-2013-ngeo]. At 90 Ma on the globe, India should sit against Madagascar's east coast. Timeline: the claimed continent lasts until lemurs spread; the evidenced split is at about 88 Ma, and lemurs arrive later over water.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Madagascar, centre | 46.9 | -19.0 | both | Home of the lemurs; Sclater's relic of Lemuria |
| East coast of Madagascar, representative point | 48.5 | -18.0 | evidence | Rifted margin where India separated about 88 Ma |
| Southern India | 77.0 | 11.0 | both | Sclater's eastern end; Madagascar's neighbour in Gondwana |
| Sri Lanka | 80.7 | 7.9 | claimed | Blavatsky's "Ceylon" |
| Sumatra | 101.0 | 0.0 | claimed | Blavatsky's eastern limit |
| Mauritius | 57.6 | -20.3 | both | Named by Sclater as a relic; real continental fragment beneath |
| Mozambique Channel | 41.5 | -18.0 | evidence | 430 km water gap crossed by rafting ancestors |
| Cape Verde Islands | -23.6 | 15.1 | claimed | Western end of Scott-Elliot's older map |
| Society Islands | -149.8 | -17.5 | claimed | Eastern end of Scott-Elliot's older map |

**Open questions.** Two separate claims share this name. Sclater's Lemuria was a zoologist's hypothesis and fits "Scientific precursor". The Theosophical Lemuria of Blavatsky and Scott-Elliot, with its root races and Pacific extent, would take "Contradicted" if the layer shows it as its own entry. The page number of the Blavatsky quotation is partly illegible in the scan; p. 7 matches the standard pagination of vol. 2. The page for the Scott-Elliot quotation could not be fixed from the OCR (it falls around pp. 14 to 15). Published estimates for the arrival of the lemur ancestor vary between studies; the 62 to 65 Ma figure is the age of the lemur radiation, and arrival could be somewhat earlier. Haeckel's claim about human origins is not assessed here.

---

### Expanding Earth

**Verdict:** Contradicted

**The claim.** Continents are "als Bruchstücke der in sich geschlossenen Haut einer Kugel aufzufassen ..., deren Durchmesser nur ungefähr halb so groß wie der Durchmesser des heutigen Erdballs ist" [to be understood as fragments of the closed skin of a sphere whose diameter is only about half that of the present globe] (Ott Christoph Hilgenberg, *Vom wachsenden Erdball*, 1933, opening section) [alt-hilgenberg-1933-wachsender-erdball]. The continents once covered the whole surface of a smaller Earth. The planet has grown since, and the oceans opened as gaps between the pieces, so no ocean floor needs to be destroyed anywhere.

**Who and when.** Hilgenberg, who wrote that he did not belong to the ranks of professional geologists or geophysicists, published the idea himself in Berlin in 1933 [alt-hilgenberg-1933-wachsender-erdball]. S. Warren Carey, founding professor of geology at the University of Tasmania, introduced his own case for expansion in the proceedings of the Continental Drift Symposium he convened in Hobart in March 1956, published in 1958 [alt-quilty-banks-2003-carey-memoir]. By 1961 Carey was proposing a 45 per cent increase in the Earth's surface area since the Palaeozoic, and László Egyed a radius increase of 0.4 to 0.8 mm a year [alt-cox-doell-1961-nature]. Carey set out the full argument in *The Expanding Earth* (Elsevier, 1976), and in 1979 co-founded the Expanding Earth Exchange, which promoted expansion and argued that subduction does not happen (paraphrase) [alt-quilty-banks-2003-carey-memoir].

**What the evidence says.** Palaeomagnetism gives a direct test. Rocks record the angle of the Earth's magnetic field where they formed, and on a smaller globe two sites a fixed distance apart would span a larger arc. Cox and Doell proposed the test in 1961 [alt-cox-doell-1961-nature]. Estimates of the Earth's past radius from palaeomagnetic data for the last 400 million years limit any expansion to less than 0.8 per cent, too little for any expansion theory [alt-mcelhinny-1978-nature].

Subduction removes the need for growth. Harry Hess reasoned that if new crust forms at the ridges, old crust must be destroyed elsewhere; he proposed that ocean floor descends into the deep trenches around the Pacific, which explains why the Earth does not get bigger as the sea floor spreads [alt-usgs-tde-developing]. The age of the ocean floor fits that picture. Very little sea floor is older than 150 million years, because the oldest is carried down under other plates [alt-noaa-sos-seafloor-age]; the oldest Pacific crust still in place, now in front of the Mariana and Izu-Bonin trenches, is 130 to 167 Ma [alt-hauff-2003-gcubed].

Space geodesy measures the radius today. Combining satellite laser ranging, radio astronomy (VLBI), GPS and DORIS satellite tracking, Wu and colleagues found that the Earth's mean radius is not changing to within a measurement uncertainty of 0.2 mm a year, about the thickness of two sheets of paper [alt-wu-2011-grl]. One study using station heights and gravity data reported a rise of 0.17 to 0.24 mm a year [alt-shen-2011-anngeo]. Both results sit far below the rate a halved diameter would require: at 0.24 mm a year, 400 million years would add about 100 km to a radius of 6,371 km (calculated from [alt-shen-2011-anngeo]).

**Time mismatch.** Claim (Carey, as recorded in 1961): Earth's surface area grew by 45 per cent since the Palaeozoic [alt-cox-doell-1961-nature]. Evidence: over the past 400 million years the radius changed by less than 0.8 per cent [alt-mcelhinny-1978-nature]. Claim (Egyed, as recorded in 1961): radius growing 0.4 to 0.8 mm a year [alt-cox-doell-1961-nature]. Evidence: no change within 0.2 mm a year today [alt-wu-2011-grl], with one contrary estimate of up to 0.24 mm a year [alt-shen-2011-anngeo].

**On the globe.** Claim: on a globe of half today's diameter, all continents fit together with no oceans between them; the Pacific opens as the globe grows. Evidence: the globe keeps its present radius through the whole Cambrian to present span within palaeomagnetic error [alt-mcelhinny-1978-nature]. The Pacific floor is consumed at trenches as fast as it forms [alt-usgs-tde-developing]. Timeline: the claim has the radius growing through the Mesozoic and Cenozoic; the evidence shows a constant radius for at least 400 million years.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Berlin | 13.4 | 52.5 | claimed | Where Hilgenberg published in 1933 |
| Hobart, University of Tasmania | 147.3 | -42.9 | claimed | Carey's base; 1956 symposium |
| Mariana Trench | 142.2 | 11.3 | evidence | Subduction zone where old Pacific floor goes down |
| Pigafetta Basin (ODP Site 801), representative point | 156.4 | 18.6 | evidence | Oldest in-place Pacific ocean crust |
| Pacific Ocean, centre | -150.0 | 0.0 | both | Claimed to open by growth; evidence shows consumption at trenches |

**Open questions.** Carey's own words in the 1958 symposium volume and *The Expanding Earth* (1976) could not be reached (the scan is lending-restricted), so his view is paraphrased from the Academy memoir and from Cox and Doell. Hilgenberg's page number is not fixed; the quotation is from the opening section of the book. The ODP Site 801 coordinates are approximate and were not checked against the drilling report. The 100 km figure is my arithmetic from Shen et al.'s rate and is labelled as such.

---

### Wegener's continental drift

**Verdict:** Supported

**The claim.** "Wir nehmen also an, daß die nordamerikanische Kontinentalscholle früher dicht neben der europäischen gelegen, ja mit ihr eine einzige Scholle gebildet hat, daß diese große Scholle sich spaltete und die beiden Teile sich im Laufe der Zeiten weiter und weiter voneinander entfernten" [We therefore assume that the North American continental block once lay close beside the European one, indeed formed a single block with it, that this large block split and the two parts moved further and further apart over time] (Alfred Wegener, *Die Entstehung der Kontinente und Ozeane*, 2nd ed., 1920, p. 10) [alt-wegener-1920-drift-claim]. The continents move sideways as well as up and down. They were once joined and have drifted apart, which explains the matching coastlines, rocks and fossils without sunken bridges.

**Who and when.** Wegener, a meteorologist and geophysicist, gave the first talks on 6 January 1912 in Frankfurt and 10 January 1912 in Marburg, published the idea in *Geologische Rundschau* and *Petermanns Mitteilungen* in 1912, and expanded it into the first edition of his book in 1915 [alt-wegener-1920-drift-claim] [alt-usgs-tde-historical]. A revised second edition followed in 1920 [alt-wegener-1920-drift-claim]. Alexander Du Toit in South Africa and Émile Argand in Switzerland supported him, while most geologists kept to fixed continents and land bridges [alt-ucmp-wegener]. The weak point was the mechanism: Wegener had the continents plough through the ocean floor, and Harold Jeffreys argued that solid rock could not do this without breaking up [alt-usgs-tde-historical].

**What the evidence says.** Palaeomagnetism gave the first physical measurement of drift. Through the 1950s, magnetised rocks from different continents traced apparent polar wander paths that only agree if the continents have moved relative to one another, broadly as Wegener proposed [alt-frankel-2012-drift-controversy-v2].

The ocean floor supplied the mechanism. Harry Hess published "History of ocean basins" in 1962 [alt-hess-1962-ocean-basins], proposing that new crust forms at mid-ocean ridges, spreads away like a conveyor belt and descends into the trenches [alt-usgs-tde-developing]. Fred Vine and Drummond Matthews published their study of magnetic anomalies over ocean ridges in *Nature* in September 1963 [alt-vine-matthews-1963-nature]. The rocks at ridge crests are young and grow older with distance, and stripes of normal and reversed magnetisation run parallel to the ridges on both sides, as spreading during reversals of the magnetic field would produce [alt-usgs-tde-developing]. By the late 1960s almost all geologists accepted plate tectonics [alt-ucmp-wegener].

Plate tectonics kept Wegener's arrangement and replaced his mechanism. Continents do not plough through the sea floor; continent and ocean floor ride together as rigid plates [alt-ucmp-wegener]. The Mid-Atlantic Ridge spreads at about 2.5 cm a year, close to the rate a fingernail grows [alt-usgs-tde-understanding]. Wegener's reading of Lemuria as India pressed against Madagascar [alt-wegener-1920-lemuria-reinterpreted] matches the modern reconstruction, in which the two split about 88 Ma [alt-storey-1995-science].

**Time mismatch.** None in the arrangement or its broad timing. USGS gives Wegener's start for the break-up of Pangaea as around 200 Ma, and the current range as about 225 to 200 Ma [alt-usgs-tde-historical]. The disagreement was over the mechanism.

**On the globe.** Claim and evidence agree on the arrangement: one supercontinent, Pangaea, whose pieces moved to their present places. The difference for the layer is the moving surface. In Wegener's model only the continents move; in plate tectonics whole plates, including ocean floor, move, and new ocean floor is added at ridges [alt-ucmp-wegener] [alt-usgs-tde-developing]. Timeline: 1912 first publication; 1915 book; 1950s palaeomagnetism; 1962 Hess; 1963 Vine and Matthews; late 1960s general acceptance.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Frankfurt am Main | 8.7 | 50.1 | claimed | First talk, 6 January 1912 |
| Marburg | 8.8 | 50.8 | claimed | Second talk, 10 January 1912 |
| Karoo Basin, South Africa | 22.5 | -32.3 | both | Strata matched with Brazil |
| Paraná Basin (Santa Catarina), Brazil | -50.5 | -27.0 | both | Strata matched with the Karoo |
| Mid-Atlantic Ridge, representative point | -30.0 | 25.0 | evidence | Spreading about 2.5 cm a year |

**Open questions.** The 1912 papers and the 1915 first edition were not read directly; the 1920 second edition is cited, and its note 30 records the 1912 dates. The Hess (1962) and Vine and Matthews (1963) papers were reachable only as bibliographic records, so their content is described through USGS *This Dynamic Earth*. Frankel's history was consulted only through the publisher's description. The "late 1960s" date for general acceptance rests on a tier C page and needs an A or B source before it is shown as a date. The UCMP page (tier C) states a specific rate Wegener proposed for the separation of North America and Europe; the number is left out because no A or B source for it was found. Which ridge Vine and Matthews surveyed was not verified.

---

### Zealandia

**Verdict:** Supported

**The claim.** "Zealandia was formerly part of Gondwana. Today it is 94% submerged, mainly as a result of widespread Late Cretaceous crustal thinning" (Nick Mortimer and others, "Zealandia: Earth's hidden continent", *GSA Today*, 2017, abstract) [alt-mortimer-2017-gsatoday]. New Zealand and New Caledonia are the high points of a continent of 4.9 million square km, most of which lies under the sea.

**Who and when.** Bruce Luyendyk first proposed the name Zealandia in 1995, for New Zealand, the Chatham Rise, the Campbell Plateau and the Lord Howe Rise [alt-mortimer-2017-gsatoday]. Mortimer and ten co-authors from New Zealand, Australian and New Caledonian survey and university groups made the case for continent status in 2017 [alt-mortimer-2017-gsatoday].

**What the evidence says.** The authors apply four tests for a continent: it stands high relative to the surrounding ocean floor; it holds varied silica-rich igneous, metamorphic and sedimentary rocks; its crust is thicker and seismically slower than oceanic crust; and it covers more than 1 million square km within well-defined limits [alt-mortimer-2017-gsatoday]. Zealandia passes all four. It covers 4.9 million square km, about the area of Greater India, and its crust is 10 to 30 km thick over most of its extent and over 40 km under parts of the South Island [alt-mortimer-2017-gsatoday].

It sank by stretching. In the Late Cretaceous, about 105 to 85 Ma, Zealandia's crust thinned before Gondwana broke apart, and thin crust rides lower on the mantle [alt-mortimer-2017-gsatoday]. Its most common elevation is now about 1,100 m below sea level; Aoraki / Mount Cook, at 3,724 m, is the highest point [alt-mortimer-2017-gsatoday]. The difference from the old land bridges lies in the crust. Zealandia's crust is 10 to 30 km thick over most of its area [alt-mortimer-2017-gsatoday], against an average of about 30 km for continents and about 5 km under the oceans [alt-usgs-tde-inside]. Thinned continental crust can settle below sea level and stay there. A full-thickness continent sinking to the deep-sea floor is what isostasy rules out [alt-wegener-1920-land-bridges].

**Time mismatch.** None. The claim and the evidence are the same study.

**On the globe.** A mostly submerged continent in the southwest Pacific, from New Caledonia in the north to the Campbell Plateau in the south, with New Zealand as its largest emergent part [alt-mortimer-2017-gsatoday]. On the globe it should be drawn as continental crust, shelf-coloured and below sea level. Timeline: attached to Gondwana until the Late Cretaceous; thinned about 105 to 85 Ma; then split away [alt-mortimer-2017-gsatoday].

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Zealandia, representative centre | 170.0 | -40.0 | both | 4.9 million square km, about 94% submerged |
| Aoraki / Mount Cook | 170.1 | -43.6 | evidence | Highest point, 3,724 m |
| New Caledonia | 165.6 | -21.3 | evidence | Emergent northern part |
| Lord Howe Rise, representative point | 162.0 | -30.0 | evidence | Submerged northwest part |
| Campbell Plateau, representative point | 171.0 | -51.0 | evidence | Submerged southern part |
| Chatham Islands | -176.5 | -44.0 | evidence | On the Chatham Rise |

**Open questions.** Coordinates for the submerged plateaus are representative points and were not taken from the paper's figures. Later work may have refined the 2017 area and boundary; this pass read only the 2017 paper.

---

### Mauritia and the Kerguelen Plateau

**Verdict:** Supported

**The claim.** "We show that Mauritius and the adjacent Mascarene Plateau may overlie a Precambrian microcontinent that we call Mauritia" (Trond Torsvik and others, "A Precambrian microcontinent in the Indian Ocean", *Nature Geoscience*, 2013, abstract) [alt-torsvik-2013-ngeo]. Slivers of ancient continental crust from the join between Madagascar and India lie buried beneath young volcanic islands and plateaus in the western Indian Ocean.

**Who and when.** Torsvik and nine co-authors proposed Mauritia in 2013 from zircons in Mauritian beach sands and from gravity data [alt-torsvik-2013-ngeo]. Lewis Ashwal, Michael Wiedenbeck and Torsvik confirmed it in 2017 with zircons taken directly from Mauritian rock [alt-ashwal-2017-ncomms]. Continental rock on the Kerguelen Plateau was established by Ocean Drilling Program Leg 183, whose synthesis appeared in 2003 [alt-frey-2003-odp183-synthesis].

**What the evidence says.** Mauritius is a volcanic island. Its lavas erupted in phases from 9.0 Ma to 0.03 Ma above the plume now under Réunion [alt-ashwal-2017-ncomms]. Zircon, a mineral that survives melting and keeps its age, turns up in those young lavas with ages of 660 to 840 Ma and more than 1,971 Ma [alt-torsvik-2013-ngeo]. A 5.7 Ma trachyte on the island holds zircons 2.5 to 3.0 billion years old [alt-ashwal-2017-ncomms]. The rising magma picked these grains up from old continental crust beneath the island. Their age pattern matches central-east Madagascar, now about 700 km to the west [alt-ashwal-2017-ncomms].

Gravity data show a continuous band of thick crust running in an arc from Mauritius north to the Seychelles [alt-torsvik-2013-ngeo]. The Seychelles are the one part above water: a continental fragment of 40,000 to 45,000 square km with crust about 33 km thick [alt-ashwal-2017-ncomms]. About 84 Ma, as the Mascarene Basin opened, India broke away from Madagascar together with most of Mauritia and the Seychelles and Laxmi Ridge [alt-ashwal-2017-ncomms]. Shifts of the spreading ridge between 83.5 and 61 Ma cut Mauritia into a ribbon of fragments, and plume volcanism later buried most of them [alt-torsvik-2013-ngeo].

The Kerguelen Plateau, far to the southeast, holds another buried piece. Its lavas erupted from about 119 Ma to about 34 Ma on igneous crust about 20 km thick, and much of the plateau stood above sea level while they erupted: sediments on top of the lavas contain wood, fern remains and land pollen [alt-frey-2003-odp183-synthesis]. At Site 1137 on Elan Bank, under 1,016 m of water, the drill recovered clasts of garnet-biotite gneiss with Proterozoic zircon and monazite in a conglomerate between lava flows, showing that fragments of continental crust lie within the plateau [alt-frey-2003-odp183-synthesis] [alt-iodp-exp183-site1137]. The plateau did not serve as a land bridge between India and Antarctica [alt-ali-krause-2011-jbiogeog].

**Time mismatch.** None for the Mauritia claim itself. Set against Lemuria, the dates differ: the fragments left Madagascar about 84 Ma and were broken up by 61 Ma [alt-ashwal-2017-ncomms] [alt-torsvik-2013-ngeo], before the lemur lineage began about 62 to 65 Ma [alt-yoder-yang-2004-molecol].

**On the globe.** Real continental crust below the sea at the Mascarene Plateau, from Mauritius to the Seychelles, and within the Kerguelen Plateau at Elan Bank. This is the crust beneath where Sclater drew Lemuria. It is a chain of narrow buried slivers; it never formed a land surface joining Madagascar to India after the two separated. At 90 Ma the fragments sit in the join between eastern Madagascar and India; at 84 Ma they ride away with India; by 61 Ma they are strung out along the Mascarene Plateau [alt-ashwal-2017-ncomms] [alt-torsvik-2013-ngeo].

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Mauritius | 57.6 | -20.3 | evidence | Archaean zircons in 5.7 Ma trachyte |
| Cargados Carajos Shoals | 59.6 | -16.6 | evidence | Part of the Southern Mascarene Plateau |
| Saya de Malha Bank, representative point | 61.0 | -10.5 | evidence | Part of the Southern Mascarene Plateau |
| Seychelles (Mahé) | 55.5 | -4.6 | evidence | Emergent continental fragment |
| Réunion | 55.5 | -21.1 | evidence | Active plume whose lavas cover Mauritia |
| Laxmi Ridge, representative point | 67.0 | 17.5 | evidence | Possible continental sliver off western India |
| Central-east Madagascar | 48.0 | -19.0 | evidence | Source crust matched by Mauritian zircons |
| Elan Bank, ODP Site 1137 | 68.1 | -56.8 | evidence | Continental gneiss clasts; 1,016 m water depth |
| Kerguelen Islands | 69.3 | -49.3 | evidence | Emergent part of the Kerguelen Plateau |

**Open questions.** The Laxmi Ridge may be thinned continental crust or entirely igneous; Ashwal and others list it as a less clear example [alt-ashwal-2017-ncomms]. The size of Mauritia as a whole is not stated in the sources read. The Saya de Malha, Cargados Carajos and Laxmi Ridge coordinates are representative points from standard geography. The Elan Bank water depth comes from the ODP site description found by search and should be checked against the Leg 183 Initial Reports before it is shown.

## 4. Lost lands

Continents and cities said to lie under the sea.

---

### Atlantis in the mid-Atlantic

**Verdict:** Contradicted

**The claim.** "the island was larger than Libya and Asia put together ... in a single day and night of misfortune ... the island of Atlantis in like manner disappeared in the depths of the sea." (Plato, *Timaeus*, tr. Benjamin Jowett, Stephanus 24e to 25d) [alt-plato-timaeus-jowett]. "That there once existed in the Atlantic Ocean, opposite the mouth of the Mediterranean Sea, a large island, which was the remnant of an Atlantic continent, and known to the ancient world as Atlantis." (Ignatius Donnelly, *Atlantis: The Antediluvian World*, 1882, p. 1) [alt-donnelly-1882]. In Plato's account an island empire lay in the Atlantic in front of the Pillars of Heracles (the Strait of Gibraltar) and sank during earthquakes and floods. Donnelly read the account as history and placed the island on the ridge that soundings had found down the middle of the Atlantic.

**Who and when.** Plato tells the story in the *Timaeus* and in the unfinished *Critias*. His speaker Critias says it came from the Athenian lawgiver Solon, who heard it from Egyptian priests, and dates the war to "nine thousand ... years" before (Plato, *Critias*, Stephanus 108e) [alt-plato-critias-jowett]. Solon was archon at Athens in 594 BCE [alt-adams-csun-solon]. Ignatius Donnelly published *Atlantis: The Antediluvian World* with Harper & Brothers, New York, in 1882 [alt-donnelly-1882]. In his chapter "The Testimony of the Sea" he took the deep-sea soundings of the ships *Dolphin*, *Gazelle*, *Hydra*, *Porcupine* and *Challenger* as showing "the backbone of the ancient continent which once occupied the whole of the Atlantic Ocean", with the Azores, St Paul's Rocks, Ascension and Tristan da Cunha as its surviving peaks (p. 46 onward) [alt-donnelly-1882].

**What the evidence says.** The ridge Donnelly described is the Mid-Atlantic Ridge, part of a mountain range on the ocean floor more than 50,000 km long. Rocks at its crest are very young and grow progressively older away from it, and alternating magnetic stripes run parallel to it on both flanks [alt-usgs-tde-developing]. Magma rises at the crest and makes new oceanic crust, so the ridge is the seam where the ocean floor is still being built. Iceland straddles the ridge, and between 1975 and 1984 rifting there opened the ground by about 7 m [alt-usgs-tde-understanding].

The Atlantic has widened at an average of about 2.5 cm a year along the ridge, 25 km in a million years, and grew from a narrow inlet into the present ocean over the past 100 to 200 million years [alt-usgs-tde-understanding]. A reanalysis of magnetic anomalies and fracture zones off northwest Africa puts the first oceanic crust between North America and northwest Africa at 190 Ma, in the Early Jurassic, with very slow spreading at first [alt-labails-2010-epsl]. The global crustal age grid shows Early Jurassic ocean floor in the Central Atlantic [alt-seton-2020-g3-atlantic]. Oceanic crust is generally about 5 km thick and continental crust averages about 30 km [alt-usgs-tde-inside]. The rise that Donnelly's soundings traced is this ridge of young oceanic crust, with the continents' thick crust confined to either side of the basin.

The candidate most often proposed by scientists for a real event behind the story lies in the Aegean. In 1939 the archaeologist Spyridon Marinatos argued in *Antiquity* that a volcanic catastrophe on Thera (Santorini) had destroyed Minoan Crete [alt-marinatos-1939-antiquity]. Reviewing the volcanologist Walter Friedrich's book on Santorini in 2000, the volcanologist R. S. J. Sparks wrote that "there is at least a plausible case for linking Santorini with the legend of Atlantis" [alt-sparks-2000-geolmag]. The eruption buried an olive tree alive on Santorini, and radiocarbon wiggle-matching of its rings dates the eruption to 1627 to 1600 BCE [alt-friedrich-2006-science]. Radiocarbon dates from across the Aegean also place it in the late 17th century BCE [alt-manning-2006-science]. Archaeological synchronisms with Egypt had put it in the mid 16th to early 15th century BCE, and an annual tree-ring radiocarbon record published in 2018 shifts the calibrated range toward the 16th century BCE [alt-pearson-2018-sciadv]. The date of the eruption is still debated within about a century and a half. Either way it falls near 1600 BCE, about 8,000 years after the date Plato gives.

**Time mismatch.** Claim: the island sank 9,000 years before Solon, about 9600 BCE (11.6 ka) counting from his archonship in 594 BCE. Evidence: the Atlantic Ocean floor began forming about 190 Ma and has been widening at the ridge ever since. The Thera eruption, the proposed real event, dates to 1627 to 1600 BCE by radiocarbon, or into the 16th century BCE on newer calibration.

**On the globe.** Claim: an island continent in the Atlantic west of the Strait of Gibraltar, with the Azores, St Paul's Rocks, Ascension and Tristan da Cunha as its peaks, sinking in about 9600 BCE. Evidence: a spreading ridge of young basalt with oceanic crust getting older toward both continents, and the whole basin opening from 190 Ma. The Thera candidate sits in the Aegean at about 1600 BCE, inside the Mediterranean.

**Places.**
| Place | Modern lon | Modern lat | Role | Note |
| --- | --- | --- | --- | --- |
| Strait of Gibraltar (Pillars of Heracles) | -5.6 | 36.0 | claimed | Plato puts Atlantis "in front of" the straits |
| Azores, Mid-Atlantic Ridge | -28.0 | 38.5 | both | Donnelly's surviving peak; volcanic islands on the ridge |
| St Paul's Rocks | -29.3 | 0.9 | claimed | Donnelly's surviving peak |
| Ascension Island | -14.4 | -7.9 | claimed | Donnelly's surviving peak |
| Tristan da Cunha | -12.3 | -37.1 | claimed | Donnelly's surviving peak |
| Iceland (Krafla) | -16.8 | 65.7 | evidence | ridge exposed on land, rifting 1975 to 1984 |
| Santorini (Thera) | 25.4 | 36.4 | evidence | Late Bronze Age eruption, proposed kernel |
| Knossos, Crete | 25.2 | 35.3 | evidence | Minoan centre in Marinatos's 1939 argument |

**Open questions.** Stephanus section numbers are the standard references for these passages but are not printed in the Gutenberg Jowett edition; Perseus refused automated fetches, so the numbers were not checked against a fetched text. A composition date for the *Timaeus* and *Critias* (often given as c. 360 BCE) was not confirmed from a fetched A or B source and is left out. Friedrich's book *Fire in the Sea* (Cambridge University Press, 2000) was not fetched; only Sparks's review of it was. Marinatos's 1939 paper does not mention Atlantis; his explicit link to Atlantis came later (reported as a 1948 lecture and a 1950 paper), which I could not fetch.

---

### The Richat Structure as Atlantis

**Verdict:** Contradicted

**The claim.** "the Richat Structure located in Mauritania Africa, also commonly referred to as the Eye of the Sahara, or the Eye of Africa ... is the most likely location for the lost city of Atlantis." (Jimmy Corsetti, Bright Insight, *The Lost City of Atlantis: Hidden in Plain Sight?*, YouTube video description, 4 September 2018) [alt-corsetti-2018-youtube]. The claim matches the concentric rings of the Richat Structure to the rings of land and water that Plato describes around the royal city: "two of land and three of water ... each having its circumference equidistant every way from the centre" (Plato, *Critias*, Stephanus 113d) [alt-plato-critias-rings].

**Who and when.** The YouTube channel Bright Insight, run by Jimmy Corsetti, posted the video on 4 September 2018; it had about 5.0 million views when fetched [alt-corsetti-2018-youtube]. Science journalism has since reported the idea as a claim held by proponents of Atlantis, and quoted the archaeologist Ken Feder: "together, modern archaeology and geology provide an unambiguous verdict ... There was no great civilization called Atlantis." [alt-livescience-2024-richat].

**What the evidence says.** The Richat Structure is a dome at least 40 km across in Late Proterozoic to Ordovician sedimentary rock on the Adrar plateau of Mauritania. Erosion has cut the tilted beds into three nested rings of ridges (cuestas) that dip outward. Its centre holds a limestone and dolomite shelf around a siliceous breccia a kilometre across, cut by basaltic ring dikes, kimberlite and alkaline volcanic rock [alt-matton-2005-geology]. The breccia formed when hot fluids dissolved the carbonate rock and it collapsed, and Cretaceous feldspar in the cavity fills ties that to the magmatism [alt-matton-2005-geology].

The rock has two stages. Argon dating and chemistry of the ring-shaped gabbros point to sills intruded between 230 and 200 Ma, matching the Central Atlantic Magmatic Province that erupted as the Atlantic began to rift; about 100 million years later an alkaline intrusion (carbonatites dated at 99 Ma) pushed the rocks up into the 40 km dome, and erosion then planed it to the flat bullseye seen from orbit [alt-abdeina-2024-lithos]. Carbonatite ages of 85 ± 5 and 99 ± 5 Ma are reported for the complex [alt-iugs-richat]. The rings are the eroded edges of rock layers hundreds of millions of years old.

The structure stands on the Sahara plateau, with the peak of its outer rim about 485 m above sea level [alt-esa-2004-richat]. At the Last Glacial Maximum global sea level fell to about 134 m below present, and it rose through the main deglaciation from about 16.5 to 8.2 ka [alt-lambeck-2014-pnas]. At the date Plato gives, the sea stood lower than today, several hundred metres below the Richat rim. The Sahara itself was different then. Dust in marine sediment off Cap Blanc, Mauritania, records the African Humid Period from 14.8 to 5.5 ka, when the Sahara was nearly completely vegetated and held many perennial lakes [alt-demenocal-2000-qsr].

Plato's city is small by comparison. He gives the ring widths as three, three, two, two and one stadia around a central island five stadia across (Plato, *Critias*, Stephanus 115d to 116a) [alt-plato-critias-rings], which adds up to 27 stadia from edge to edge. The Richat dome is 40 km across [alt-matton-2005-geology].

**Time mismatch.** Claim: a ringed city destroyed about 9600 BCE (11.6 ka), 9,000 years before Solon. Evidence: gabbro sills 230 to 200 Ma, doming about 100 Ma, erosion since. The wet Sahara of the African Humid Period lasted from 14.8 to 5.5 ka, and the sea never reached the plateau during that time.

**On the globe.** Claim: the royal city of Atlantis at 21.0 N, 11.5 W in the western Sahara, with an Atlantic shore nearby. Evidence: an eroded igneous dome on a plateau about 485 m above sea level, with its rock formed 230 to 200 Ma and domed about 100 Ma. On the timeline, the greening of the Sahara (14.8 to 5.5 ka) is the real environmental change at the date the claim uses.

**Places.**
| Place | Modern lon | Modern lat | Role | Note |
| --- | --- | --- | --- | --- |
| Richat Structure (Guelb er Richat) | -11.5 | 21.0 | both | coordinates from the IUGS geoheritage entry |
| Cap Blanc, off ODP Site 658 | -17.1 | 20.8 | evidence | dust record of the African Humid Period (headland used as proxy for the core site) |
| Strait of Gibraltar | -5.6 | 36.0 | claimed | Plato's reference point for Atlantis |

**Open questions.** The length of Plato's stadion varies by source; I found no A or B source to convert 27 stadia to kilometres, so the entry gives the stadia only. ESA gives the diameter as 50 km while Matton et al., IUGS and Abdeina et al. give about 40 km; the entry uses 40 km. I did not fetch the video itself, only its description; further details attributed to Corsetti in search summaries (for example salt deposits and an 11,600-year date) were not verified and are left out. The distance from the Richat Structure to the present coast was not taken from a source.

---

### Mu, the lost Pacific continent

**Verdict:** Contradicted

**The claim.** "A line between Easter Island and the Fijis formed its southern boundary. It was over 5,000 miles from east to west, and over 3,000 miles from north to south." (James Churchward, *The Lost Continent of Mu*, 1926, p. 22) [alt-churchward-1926]. Churchward described a continent in the middle of the Pacific, running from north of Hawaii south to Easter Island and Fiji, which he wrote had been "obliterated by terrific earthquakes and submersion 12,000 years ago" (pp. 5 to 6) [alt-churchward-1926].

**Who and when.** The name comes out of attempts to read the Maya codex now in Madrid. The Abbé Brasseur de Bourbourg found one part of it (which he named the Troano) in Madrid in 1864, published it, and gave an interlinear translation. Writing in 1882, Daniel Brinton noted that Brasseur himself later stated he had started at the end of the codex, read the lines in the wrong direction, and meant his translations only as experiments [alt-brinton-1882-troano]. Augustus Le Plongeon built on the Troano. In *Queen Moo and the Egyptian Sphinx* (copyright 1896) he wrote that plates in it describe "the cataclysm that caused the submersion of ten countries, among which the 'Land of Mu,' that large island probably called 'Atlantis' by Plato" (2nd ed. 1900, Introduction, p. xli) [alt-leplongeon-1896]. Le Plongeon put his Land of Mu in the Atlantic. James Churchward's *The Lost Continent of Mu* (William Edwin Rudge, New York, 1926) moved Mu to the Pacific. He said his account rested on "certain ancient Naacal tablets which I discovered in India many years ago" and cited the Troano Manuscript as confirming the "Land of Mu" (Preface; p. 21) [alt-churchward-1926].

**What the evidence says.** The Troano and the Cortesianus are two parts of one Maya book, the Madrid or Tro-Cortesian Codex, held by the Museo de América in Madrid and dated to the 15th century [alt-museodeamerica-madrid]. Specialists read it as about 250 almanacs keyed to the 260-day ritual calendar, covering rain ceremonies, agriculture, deer hunting and trapping, and year-end rituals, with astronomical content such as a run of solar eclipses; surviving Maya codices are generally dated to the Late Postclassic, about 1250 to 1520 CE [alt-vail-aveni-2004-madrid]. Cyrus Thomas's 1882 study for the US government already read the Troano as chiefly a ritual calendar [alt-thomas-1882-troano]. None of this work finds an account of a drowned land.

The Pacific floor where Churchward drew Mu is oceanic crust. That crust is generally about 5 km thick against an average of about 30 km under continents [alt-usgs-tde-inside], and the ocean averages about 3,682 m deep [alt-noaa-ocean-depth]. The global age grid built from magnetic anomalies shows Pacific crust running from the present ridges back to a Jurassic triangle in the western Pacific [alt-seton-2020-g3-pacific].

The Hawaiian Islands and the Emperor Seamounts record the Pacific plate moving over a hotspot. The oldest rocks on Kauai are about 5.5 million years old and the oldest exposed rocks on the Big Island are less than 0.7 million years old [alt-usgs-tde-hotspots]. Along the chain, age increases with distance from the active hotspot at a steady 57 ± 2 km per million years between about 57 and 25 Ma; volcanism at the bend began by 47.5 Ma, and the oldest Emperor Seamounts are about 82 Ma [alt-oconnor-2013-g3]. Another dating study puts the start of the bend near Kimmei Seamount at about 50 Ma [alt-sharp-clague-2006-science]. The islands inside Churchward's outline are volcanoes built on ocean floor one after another over tens of millions of years, each one older the farther it has ridden from the hotspot.

**Time mismatch.** Claim: Mu sank 12,000 years ago. Evidence: the islands in the claimed area are hotspot volcanoes whose ages run from less than 0.7 Ma (Big Island) through 5.5 Ma (Kauai) to about 82 Ma (the oldest Emperor Seamounts), on oceanic crust that reaches back to the Jurassic. The Madrid Codex that the idea started from dates to the Late Postclassic, about 1250 to 1520 CE.

**On the globe.** Claim: a continent over 5,000 miles east to west, from north of Hawaii to a southern edge between Easter Island and Fiji, sinking 12,000 years ago. Evidence: ocean floor about 3.7 km deep on average, oceanic crust about 5 km thick, and hotspot chains whose volcanoes young toward the southeast (Hawaii) over tens of millions of years.

**Places.**
| Place | Modern lon | Modern lat | Role | Note |
| --- | --- | --- | --- | --- |
| Hawaii (Big Island) | -155.5 | 19.6 | both | Churchward's northern area; youngest end of the chain, under 0.7 Ma |
| Kauai | -159.5 | 22.1 | evidence | oldest rocks about 5.5 Ma |
| Kimmei Seamount, Hawaiian-Emperor bend | 171.6 | 33.7 | evidence | bend began about 47.5 to 50 Ma |
| Detroit Seamount, northern Emperor chain | 167.6 | 51.0 | evidence | among the oldest Emperor Seamounts, about 82 Ma |
| Easter Island | -109.4 | -27.1 | claimed | Churchward's southeastern corner |
| Fiji | 178.0 | -17.8 | claimed | Churchward's southern boundary |
| Pigafetta Basin, western Pacific | 156.0 | 18.0 | evidence | area of Jurassic Pacific crust (representative point) |
| Museo de America, Madrid | -3.7 | 40.4 | evidence | where the Madrid (Tro-Cortesian) Codex is held |
| Chichen Itza, Yucatan | -88.6 | 20.7 | claimed | Le Plongeon's field site |

**Open questions.** The ages cited for Detroit Seamount and the Pigafetta Basin are summarised from O'Connor et al. (oldest Emperor Seamounts about 82 Ma) and Seton et al. (Jurassic Pacific triangle); the representative coordinates for these two points were not taken from those papers and should be checked. Churchward says the Troano was "now in the British Museum"; the Museo de America gives its location as Madrid. I did not find a fetched A or B source that traces Churchward's Naacal tablets; there is no record of them beyond his book.

---

### Kumari Kandam, the drowned Tamil homeland

**Verdict:** Kernel of truth

**The claim.** "It extended in length from today's Cape Comorin to the island of Kerguelen [in the Indian Ocean], and from the island of Madagascar to the Sunda Islands which include Sumatra, Java and other islands." (V. G. Suryanarayana Sastri, 1903, p. 62, as translated in Ramaswamy 2000) [alt-ramaswamy-2000-sastri-quote]. Kumari Nadu or Kumari Kandam was a Tamil land south of Cape Comorin (Kanyakumari), divided into "forty-nine territories" between the rivers Pahruli and Kumari, home to the ancient Tamil academies and Pandyan kings, and seized by the ocean [alt-ramaswamy-2000-jas].

**Who and when.** The historian Sumathi Ramaswamy traces the idea through printed sources. European naturalists proposed Lemuria in the mid-1860s; the idea reached colonial India by the 1870s, and Tamil scholars took it up in the 1890s [alt-ramaswamy-2000-jas]. They drew on medieval commentaries that tell of land lost to the sea (Adiyarkkunallar's commentary on the *Cilappatikaram*, published 1892, and a commentary on the *Iraiyanar Akapporul*, published 1883) and on verses from the *Kalittokai* and *Purananuru*, all first printed in the closing decades of the nineteenth century [alt-ramaswamy-2000-jas]. The name Kumari Nadu appears from 1903 in Suryanarayana Sastri's history of Tamil, used as a University of Madras textbook from 1908. The earliest documented use of "Kumari Kandam" for the homeland that Ramaswamy found is in University of Madras lectures of 1926, and the term spread from the mid-1950s [alt-ramaswamy-2000-jas]. Maps appeared from 1916, a school textbook of 1951 carried one, and a state-produced documentary on Kumari Kandam followed in 1981 [alt-ramaswamy-2000-jas]. Ramaswamy's book-length study is *The Lost Land of Lemuria: Fabulous Geographies, Catastrophic Histories* (University of California Press, 2004) [alt-ramaswamy-2004-ucpress].

**What the evidence says.** South of India the sea floor is oceanic crust made at spreading ridges during the Cretaceous and later. The ridge that separated Greater India from Australia and Antarctica reached the southern tip of India at about 126 Ma, and seafloor spreading between India and Madagascar ran from about 94 to 84 Ma as India pulled away [alt-gibbons-2013-jgr]. Oceanic crust is generally about 5 km thick and continental crust about 30 km [alt-usgs-tde-inside]. No block of continental crust lies between India, Madagascar and Australia that could have carried the land in the 1903 description.

The coast did lose land to the sea, on a smaller scale. Global sea level stood about 134 m below present at the Last Glacial Maximum and rose mainly between about 16.5 and 8.2 ka [alt-lambeck-2014-pnas]. The Palk Strait between India and Sri Lanka averages only 9 to 12 m deep today, and in the Gulf of Mannar the floor slopes gently to about 36 m before dropping away to great depths [alt-dandabathula-2024-scirep]. Seismic profiles show buried river channels running across the Palk Strait into the Gulf of Mannar. During the last glacial period the strait held freshwater, seawater began to enter at about 8.5 ka, and the channels were buried by about 7.0 ka [alt-dubey-2023-quatres]. In the driest seasons of the last glacial stage people could walk between India and Sri Lanka, and the strait has not been crossable without boats for the last 7,000 years or so except during minor falls in sea level [alt-dubey-2023-quatres].

The real drowned land south and east of the Tamil coast is this shallow shelf joining India to Sri Lanka, flooded between about 8.5 and 7 ka. It is a small fraction of a continent reaching Madagascar, Kerguelen and the Sunda Islands.

**Time mismatch.** Claim: a Tamil continent swallowed by the ocean "thousands of years ago" in the era of the ancient academies. Evidence: the ocean floor south of India formed from about 126 Ma onward; the only land drowned near Tamil Nadu in human times is the Palk Strait shelf, flooded from about 8.5 ka and closed to walking by about 7 ka.

**On the globe.** Claim: a landmass from Kanyakumari south to Kerguelen (49 S) and from Madagascar east to Sumatra and Java, or in other versions to Australia. Evidence: deep Indian Ocean floor of Cretaceous and younger oceanic crust; at the Last Glacial Maximum, exposed shelf joining India and Sri Lanka across the Palk Strait and the Gulf of Mannar margin, drowned by about 7 ka.

**Places.**
| Place | Modern lon | Modern lat | Role | Note |
| --- | --- | --- | --- | --- |
| Kanyakumari (Cape Comorin) | 77.5 | 8.1 | claimed | northern shore of the lost land in all versions |
| Indian Ocean south of India | 77.5 | 0.0 | claimed | representative point for the claimed continent |
| Kerguelen Islands | 69.5 | -49.3 | claimed | southern limit in the 1903 text |
| Madagascar | 46.9 | -18.8 | claimed | western limit |
| Sumatra | 101.0 | 0.0 | claimed | eastern limit (Sunda Islands) |
| Palk Strait | 79.8 | 10.0 | evidence | 9 to 12 m deep; dry land at the Last Glacial Maximum |
| Gulf of Mannar | 79.0 | 8.5 | evidence | shelf to about 36 m, then deep water |
| Adam's Bridge | 79.3 | 9.3 | evidence | shoal chain on the former land link |

**Open questions.** I could not read the 2004 book itself (Internet Archive holds it only for lending); the entry rests on Ramaswamy's 2000 *Journal of Asian Studies* article, which she describes as part of that book. The 1903 quotation is Ramaswamy's English translation from the Tamil; I did not see the Tamil original. Gibbons et al. give the ridge arrival at the southern tip of Greater India, which is the reconstructed plate edge; the age of the oceanic crust immediately south of Sri Lanka was not taken from a fetched source.

---

### Ram Setu (Adam's Bridge) as a built causeway

**Verdict:** Unsupported

**The claim.** (paraphrase) From 2002, websites circulated NASA orbital images of Adam's Bridge as evidence that the shoals are the remains of a man-made bridge, identified with the causeway that Rama's army built to Lanka in the *Ramayana*; in 2007 claims attributed to NASA said the structure had been carbon dated as 1.7 million years old [alt-hess-2002-via-dna]. No verbatim proponent text was fetched.

**Who and when.** The images and the claim spread online in 2002, when NASA official Mark Hess said that "the images reproduced on the websites may well be ours, but their interpretation is certainly not ours" [alt-hess-2002-via-dna]. The dispute became national politics when the Sethusamudram shipping canal project proposed dredging through the area. In 2007 the Archaeological Survey of India told the Supreme Court there was no historical or scientific evidence that the Ram Setu is a human-made bridge; the government withdrew the affidavit after protests [alt-scroll-2022-ramsetu]. A Discovery Channel programme in 2017 suggested it could be man-made, and in 2018 the government told the Supreme Court it would seek another canal route [alt-scroll-2022-ramsetu]. In December 2022 Earth Sciences Minister Jitendra Singh told Parliament that satellite imagery "cannot provide direct information about the origin and age" of the structure [alt-scroll-2022-ramsetu].

**What the evidence says.** Adam's Bridge is a chain of shoals about 29 km long from Dhanushkodi on the Indian side to Talaimannar on Mannar Island, Sri Lanka [alt-dandabathula-2024-scirep]; a NASA ASTER caption gives 48 km for the chain of limestone shoals and describes it as a former land bridge [alt-jpl-2021-adams-bridge]. A laser bathymetry model from ICESat-2 shows it as a submarine continuation of Dhanushkodi and Talaimannar, about 1 km³ in volume, with 99.98 percent of it under water [alt-dandabathula-2024-scirep]. Its long axis lies across the wave approach from both seas, and its two flanks slope differently, which the authors read as more wave-driven material arriving from the Gulf of Mannar side [alt-dandabathula-2024-scirep]. Borings along it found 7 to 9 m of sand over Holocene conglomerate or calcareous sandstone, with coral in all stages of decay at some sites [alt-dandabathula-2024-scirep].

The shoals sit on the shelf that joined India and Sri Lanka. Buried river channels cross beneath them; the Palk Strait held freshwater through the last glacial period, seawater began entering at about 8.5 ka, and the channels were buried by about 7.0 ka [alt-dubey-2023-quatres]. The same study suggests that in the early to mid Holocene people crossing shallow estuarine patches would have needed rafts or "artificial structures (such as bandh/bridge)" [alt-dubey-2023-quatres]. That is an inference about what crossing would have required. It reports no structure found. None of the fetched geological or bathymetric studies reports cut stone, mortar or other construction.

**Time mismatch.** Claim: a causeway built in the age of the *Ramayana*; one widely reported version, attributed to NASA, gave 1.7 million years. Evidence: the ridge rests on Holocene rock and coral under 7 to 9 m of sand, on a land link that the sea flooded between about 8.5 and 7 ka. NASA's spokesman said in 2007 he was not aware of any carbon dating [alt-hess-2002-via-dna].

**On the globe.** Claim: a built causeway from Rameswaram to Mannar. Evidence: a natural ridge of sand, calcareous rock and coral about 29 km long (48 km in NASA's caption), 99.98 percent submerged, on a shelf that was dry land at the Last Glacial Maximum and drowned by about 7 ka.

**Places.**
| Place | Modern lon | Modern lat | Role | Note |
| --- | --- | --- | --- | --- |
| Adam's Bridge (centre of NASA ASTER scene) | 79.3 | 9.3 | both | coordinates from the JPL caption |
| Dhanushkodi, Pamban (Rameswaram) Island | 79.4 | 9.2 | both | Indian end of the shoal chain |
| Talaimannar, Mannar Island | 79.7 | 9.1 | both | Sri Lankan end |
| Palk Strait | 79.8 | 10.0 | evidence | 9 to 12 m deep, buried river channels |

**Open questions.** The DNA India article that quotes Hess (2002) and Braukus (2007) shows a 2013 page date while describing 2007 events; the original 2002 NASA statement was not fetched. I found no fetched A or B source with direct radiocarbon or luminescence ages for the shoal sediments themselves; figures circulating online (4,000 to 7,000 years for corals, 500 to 600 years for dunes, 18,400 years from cores) come from press reports and encyclopedia summaries and are not used. The two lengths (29 km and 48 km) probably measure different end points; I did not resolve this.

---

### The Gulf of Khambhat "submerged city"

**Verdict:** Unsupported

**The claim.** "The whole model of the origins of civilisation with which archaeologists have been working will have to be remade from scratch." (Graham Hancock, quoted in BBC News Online, "Lost city 'could rewrite history'", 19 January 2002) [alt-hancock-2002-bbc-quote]. The claim is that sonar found the geometric remains of a city under 30 to 40 m of water in the Gulf of Khambhat (Cambay), and that dredged debris dated it to about 7500 BCE, making it older than any known city [alt-bbc-2002-cambay].

**Who and when.** The National Institute of Ocean Technology (NIOT) picked up regular sonar patterns during survey work on pollution [alt-bbc-2002-cambay]. In May 2001 Murli Manohar Joshi, Union Minister for Human Resource Development and for Ocean Development, announced an ancient underwater settlement about 9,500 years old [alt-frontline-2002-bavadam]. BBC News reported in January 2002 that debris had been "carbon dated and found to be nearly 9,500 years old", and quoted Hancock [alt-bbc-2002-cambay]. A note in the *Journal of the Geological Society of India* in June 2002 placed the finds at 30 to 40 m depth, 20 to 40 km west of Hazira near Surat, and gave 7500 BCE from radiocarbon dates on a wooden piece [alt-nigam-hashimi-2002-jgsi-claim].

**What the evidence says.** The finds were a piece of wood about 25 cm long, potsherds, stones presumed to be tools, fossil bone and a tooth. A mechanical dredge brought them up. No archaeologist or diver saw the site, and no underwater photographs were taken [alt-frontline-2002-bavadam]. Archaeologists interviewed at the time objected on method: D. P. Agrawal said the two laboratories that dated the wood gave about 7,500 and 5,500 years, and that wood of that age is expected on a drowned landscape; Jaya Menon said the age of a dredged object cannot date a site; K. V. Raman, who examined the finds, said most were naturally rolled pebbles [alt-frontline-2002-bavadam]. At the British Museum, Justin Morris said much more work was needed and noted the error margins of radiocarbon dating [alt-bbc-2002-cambay].

The landscape did drown. Global sea level stood about 134 m below present at the Last Glacial Maximum and rose about 12 m per thousand years through the main deglaciation, from about 16.5 to 8.2 ka [alt-lambeck-2014-pnas]. A sea-level curve for the western Indian margin places the shore at 30 to 40 m below present at about 9.5 ka, the depth of the finds [alt-nigam-hashimi-2002-jgsi-sealevel]. Wood, river gravel and bone of that age on this sea floor fit a flooded river plain. Linking them to a city needs finds from a secure context, and none has been published from a controlled excavation in the sources fetched.

**Time mismatch.** Claim: a city of about 7500 BCE (9.5 ka). Evidence: the only date is on a dredged piece of wood (reported as about 9,500 years old, with a second laboratory giving about 5,500 years), which dates the wood. The seabed at 30 to 40 m was dry land at about 9.5 ka and flooded as sea level rose.

**On the globe.** Claim: a city about 8 km long (five miles) and 3 km wide (two miles) in the Gulf of Khambhat at 30 to 40 m depth, 20 to 40 km west of Hazira. Evidence: a drowned river plain that the sea covered after about 9.5 ka, with dredged natural and possibly human material and no excavated structures.

**Places.**
| Place | Modern lon | Modern lat | Role | Note |
| --- | --- | --- | --- | --- |
| Gulf of Khambhat site area, west of Hazira | 72.3 | 21.1 | both | 20 to 40 km west of Hazira at 30 to 40 m depth (representative point) |
| Hazira, near Surat | 72.6 | 21.1 | evidence | reference point given for the site |

**Open questions.** Michael Witzel's chapter "Rama's realm" in *Archaeological Fantasies* (Routledge, 2006) and S. Kathiroli's 2004 report in the *Journal of Indian Ocean Archaeology* were not fetched. H. K. Gupta's 2002 note in the *Journal of the Geological Society of India*, which announced the finds, was not fetched; its content is known here only as quoted by Nigam and Hashimi. Nigam and Hashimi's note supports the settlement reading; it is cited here only for the claim's details and for the regional sea-level curve (Hashimi et al. 1995), which I did not fetch separately. The survey year is unclear: the BBC (January 2002) and Frontline (March 2002) both say the site was found "last year", which would be 2001, yet the ministerial announcement was in May 2001; secondary summaries give December 2000. The two laboratory ages for the wood (about 7,500 and 5,500 years) are reported only in Frontline, quoting D. P. Agrawal. The site's precise coordinates were not published in the sources fetched. The BBC's city dimensions (five miles by two miles) are reported claim figures and are converted here without a source for the extent.

## 5. Pole shifts, Antarctica and old maps

Claims that the crust moved fast enough for people to see it, and the evidence offered for them.

---

### Earth crust displacement

**Verdict:** Kernel of truth

**The claim.** "This book will present evidence that the last shift of the earth's crust (the lithosphere) took place in recent time, at the close of the last ice age, and that it was the cause of the improvement in climate." (Charles H. Hapgood, *The Path of the Pole*, 1970, Author's Note) [alt-hapgood-1970-path]. Hapgood proposed that the whole outer shell of the Earth slides over the interior as one piece, pushed by the weight of off-centre polar ice caps, so that continents move tens of degrees of latitude toward or away from the poles in a few thousand years.

**Who and when.** Charles H. Hapgood set out the idea in *Earth's Shifting Crust* (Pantheon, 1958), with a foreword by Albert Einstein, who wrote that Hapgood's first letter "electrified me" and that "The only doubtful assumption is that the earth's crust can be moved easily enough over the inner layers" (Einstein, foreword to *Earth's Shifting Crust*, 1958, pp. 1 to 2) [alt-einstein-1958-foreword]. In that book Hapgood put the last displacement at "no less than 2,000 miles of latitude in a period of about 10,000 years at the end of the North American ice age" (*Earth's Shifting Crust*, 1958, p. 340) [alt-hapgood-1958-esc]. *The Path of the Pole* (Chilton, 1970) revised the argument and placed the North Pole in Hudson Bay, "approximately in Latitude 60° North and Longitude 83° West," moving to its present place "in a gradual motion that began 18,000 or 17,000 years ago and was completed by about 12,000 years ago" (Author's Note) [alt-hapgood-1970-path]. Rand and Rose Flem-Ath (1995) and Graham Hancock (1995) carried the idea to a wide readership (see the next entry) [alt-hancock-1995-fingerprints].

**What the evidence says.** The pole does move across the Earth's surface. Paleomagnetic poles from rocks of many ages, once the drift of each plate is removed, show that the solid Earth as a whole has rotated relative to its spin axis. Geophysicists call this true polar wander [alt-besse-courtillot-2002-jgr] [alt-torsvik-2012-esr-tpw]. Besse and Courtillot found that it runs in episodes: long standstills, then tracks lasting a few tens of millions of years at 30 to 50 km per million years, adding up to about 30 degrees over the last 200 million years. They found "no convincing evidence for episodes of superfast TPW" [alt-besse-courtillot-2002-jgr]. Torsvik and colleagues, working from 626 poles, identified four Mesozoic episodes between 250 and 100 Ma with rates of 0.45 to 0.8 degrees per million years, and found the cumulative true polar wander since the Late Carboniferous close to zero [alt-torsvik-2012-esr-tpw].

The lithosphere also turns slightly over the mantle beneath it, the motion closest to Hapgood's picture of a sliding shell. Torsvik and colleagues estimate this net rotation at about 0.12 degrees per million years averaged over the last 150 million years, with a peak of 0.33 degrees per million years between 60 and 50 Ma [alt-torsvik-2012-esr-netrotation]. The fastest episode anyone has proposed, an Early to Middle Cambrian event in which the lithosphere and mantle together turned about 90 degrees, is spread across millions of years of Cambrian time and remains debated [alt-kirschvink-1997-science].

Hapgood's last shift moved about 29 degrees of latitude in about 10,000 years. That is roughly 32 meters a year. True polar wander at its fastest measured rate moves the surface a few centimeters a year, about as fast as a fingernail grows, so Hapgood's rate is several thousand times faster than anything recorded in the rocks [alt-hapgood-1958-esc] [alt-torsvik-2012-esr-tpw] [alt-besse-courtillot-2002-jgr].

The ice of East Antarctica records no such move. The EPICA core from Dome C holds a continuous climate record back about 800,000 years, through eight glacial cycles [alt-epica-2004-nature] [alt-jouzel-2007-science]. Ice in the Allan Hills blue ice area has been dated directly to about 6 million years [alt-shackleton-2025-pnas]. Paleomagnetic data put the South Pole close to East Antarctica since about 230 Ma [alt-torsvik-2012-esr-antarctica].

**Time mismatch.** Claim: the last crustal shift began 18,000 or 17,000 years ago and ended about 12,000 years ago (Hapgood 1970), or ran from about 18,000 to 8,000 years ago (Hapgood 1958, p. 249). Evidence: true polar wander episodes last a few tens of millions of years at under 1 degree per million years; the most recent fast episode Torsvik and colleagues identify ended by about 100 Ma.

**On the globe.** Claim: at about 17 ka the North Pole sat in Hudson Bay (60°N, 83°W), and before about 50 ka in the Greenland Sea (73°N, 10°E); North America then slid about 30 degrees south. Evidence: at 17 ka the geographic pole and the continents sat within a fraction of a degree of today's positions, since even fast true polar wander moves less than 1 degree in a million years; the reconstruction for 17 ka is the present-day map. On the timeline: claimed shift 17 to 12 ka; evidenced true polar wander episodes between 250 and 100 Ma.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Hudson Bay pole | -83.0 | 60.0 | claimed | Hapgood's North Pole of the last glaciation (1970) |
| Greenland Sea pole | 10.0 | 73.0 | claimed | Hapgood's pole before about 50 ka (1970) |
| EPICA Dome C | 123.4 | -75.1 | evidence | 800,000-year continuous ice core; coordinates approximate, not from a cited source |
| Allan Hills blue ice area | 159.7 | -76.7 | evidence | ice dated to about 6 Ma; coordinates approximate, not from a cited source |

**Open questions.** The Kirschvink et al. (1997) Cambrian event is contested, and its duration is not stated in the abstract I could read; I have not given a number for it. Coordinates for Dome C and Allan Hills are standard gazetteer values and still need an A/B source if they are shown as numbers. I did not find a peer-reviewed paper written as a direct response to Hapgood; the evidence above addresses his claim without naming him.

---

### Antarctica as Atlantis

**Verdict:** Contradicted

**The claim.** "But new discoveries prove that parts of Antarctica were free of ice thousands of years ago, recent history by the geological clock." (Rand and Rose Flem-Ath, outline of *When the Sky Fell*, as quoted in Graham Hancock, *Fingerprints of the Gods*, 1995, ch. 50, p. 446) [alt-flemath-1995-via-hancock]. The Flem-Aths proposed that Plato's Atlantis stood on Antarctica, then at temperate latitudes, and that a Hapgood-style crustal shift at the end of the last ice age carried the continent to the pole, where ice buried the civilisation.

**Who and when.** Rand and Rose Flem-Ath published *When the Sky Fell: In Search of Atlantis* in 1995 (Stoddart, Canada; St. Martin's Press, New York), building on Hapgood's crust displacement [alt-flemath-1995-via-hancock]. Graham Hancock received their outline by letter and adopted the idea in Part VIII of *Fingerprints of the Gods* (1995): "According to the earth-crust displacement theory, large parts of Antarctica were positioned outside the Antarctic circle prior to 15,000 bc and thus could have been inhabited, with a climate and resources suitable for the development of civilization." (ch. 51, p. 451) [alt-hancock-1995-fingerprints]. Hancock summarised Hapgood's version as Antarctica sitting "some 2000 miles further north" until "the eleventh millennium bc" (ch. 50, p. 446) [alt-hancock-1995-fingerprints].

**What the evidence says.** An ice sheet formed on Antarctica about 34 million years ago as atmospheric carbon dioxide fell. Sediment cycles from a drill core in the western Ross Sea record a smaller ice sheet from 34 Ma and a continent-scale sheet reaching the coast by about 32.8 Ma [alt-galeotti-2016-science]. Its size has varied since then; its presence has not.

Ice cores give a direct count. The Dome C core on the East Antarctic plateau holds a continuous record reaching back about 800,000 years [alt-jouzel-2007-science] [alt-epica-2004-nature]. Blue ice at Allan Hills, where old ice is brought up to the surface, has been dated to about 6 million years using argon in trapped air [alt-shackleton-2025-pnas]. In Queen Maud Land itself, the EPICA core at Kohnen station (75.0°S, 0.1°E) is 2,774 m long, and ice at 450 m depth is already about 7,000 years old [alt-wilhelms-2014-pangaea] [alt-oerter-2004-annglac]. A synthesis of geological data from around the continent maps the ice sheet's grounding line at 20, 15, 10 and 5 ka, showing ice retreating from the continental shelf toward today's margins after the Last Glacial Maximum [alt-raised-2014-qsr].

Antarctica's position is fixed by paleomagnetism. The South Pole has stayed close to East Antarctica since about 230 Ma [alt-torsvik-2012-esr-antarctica], and true polar wander moves the pole less than 1 degree per million years [alt-torsvik-2012-esr-tpw]. A move of 2,000 miles (about 29 degrees) would take tens of millions of years at those rates.

**Time mismatch.** Claim: Antarctica lay about 2,000 miles farther north and partly ice-free until about 15,000 to 11,000 BCE (about 17 to 13 ka). Evidence: an ice sheet has covered Antarctica since about 34 Ma; the Dome C ice spans the last 800,000 years without a break; the continent has sat over the South Pole since about 230 Ma.

**On the globe.** Claim: Antarctica about 30 degrees north of its present position, its Atlantic-facing coast at temperate latitudes, until about 13 ka. Evidence: Antarctica centred on the South Pole under an ice sheet at 13 ka, as today, and at the pole since the Late Triassic. On the timeline: claimed displacement about 13 ka; evidenced ice sheet onset about 34 Ma.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Antarctica (continent centre) | 0.0 | -90.0 | both | claimed site of Atlantis; evidence: at the pole since about 230 Ma |
| EPICA Dome C | 123.4 | -75.1 | evidence | 800,000-year continuous ice record; coordinates approximate |
| Kohnen station, Queen Maud Land | 0.1 | -75.0 | evidence | EDML core, 2,774 m long |
| Allan Hills blue ice area | 159.7 | -76.7 | evidence | ice about 6 Ma; coordinates approximate |
| Ross Sea drill site (Galeotti et al.) | 165.0 | -77.0 | evidence | 34 to 31 Ma glacial cycles; position approximate, the paper gives the exact core site |

**Open questions.** I could not read *When the Sky Fell* itself (the Internet Archive copy is lending-only), so the Flem-Aths' words come through Hancock's reproduction of their outline, and their date for the catastrophe (often reported as 9600 BCE, following Plato) is unverified. The book's placement of an Atlantean city on a particular part of Antarctica is also unverified. The deep age of the EDML core (about 150 ka at depth) appears in secondary summaries; I could not open the 2006 *Nature* paper to confirm it, so it is left out.

---

### The Piri Reis map and an ice-free Queen Maud Land

**Verdict:** Contradicted

**The claim.** "Unbelievable as it may appear, the evidence nevertheless indicates that some ancient people explored the coasts of Antarctica when its coasts were free of ice." (Charles H. Hapgood, *Maps of the Ancient Sea Kings*, 1966, Preface) [alt-hapgood-1966-seakings]. Hapgood argued that the southern coast on the 1513 Piri Reis map shows the Princess Martha Coast of Queen Maud Land as it was before ice covered it, copied from source maps drawn by a lost seafaring civilisation.

**Who and when.** The map was drawn by the Ottoman admiral Piri Reis at Gelibolu (Gallipoli) in 1513 and found in the Topkapı Palace Library in 1929 [alt-mcintosh-2000-inscriptions] [alt-unesco-2016-piri-reis]. Captain Arlington H. Mallery first suggested that it showed Antarctica before the ice; Hapgood credits him in the book's dedication [alt-hapgood-1966-seakings]. Hapgood developed the case with his students and printed a 1960 letter from U.S. Air Force cartographers endorsing it [alt-hapgood-1966-seakings]. Erich von Däniken and Graham Hancock repeated the argument, Hancock in Part I of *Fingerprints of the Gods* (1995) [alt-hancock-1995-fingerprints] [alt-mcintosh-2000-southern].

**What the evidence says.** The map is a parchment fragment 87 cm long, kept in the Topkapı Palace Museum Library (Revan Köşkü 1633); the surviving piece is thought to be about a third of the original world map [alt-unesco-2016-piri-reis]. Piri Reis wrote on it how he made it. His note, placed on South America, says he compiled it from about twenty charts and world maps: eight older charts, one Arabic map of India, four new Portuguese maps, and "a map drawn by Qulunbu in the western region," which is Columbus [alt-mcintosh-2000-inscriptions]. The map's New World coasts carry place names given by Columbus and by the Portuguese in 1501 and 1502 [alt-mcintosh-2000-southern] [alt-unesco-2016-piri-reis].

The inscriptions written on the southern land describe it as hot, with large serpents, and sighted by Portuguese ships. McIntosh, a historian of cartography, reads these notes as information about Brazil and about the Portuguese sighting of Tristan da Cunha in 1506, copied from Portuguese sources [alt-mcintosh-2000-southern]. A southern continent joined to South America appears on other maps of the same years, including the Portuguese Lopo Homem map of about 1519 to 1521 and Juan Vespucci's map of 1524. It follows the old Greek and Ptolemaic idea of a southern landmass, Terra Australis, drawn to balance the northern continents [alt-mcintosh-2000-southern]. UNESCO's register entry describes the map as among the earliest works showing Terra Australis [alt-unesco-2016-piri-reis].

When McIntosh redrew the Piri Reis southern coast on the same polar projection as the Swithinbank map of western Queen Maud Land that Mallery and Hapgood used, the two outlines matched only superficially. The Piri Reis map also shows none of the mountains and valleys along the seismic profile that Mallery claimed it recorded [alt-mcintosh-2000-southern].

Queen Maud Land has been under the Antarctic ice sheet far longer than people have existed. The ice sheet formed about 34 Ma [alt-galeotti-2016-science]. At Kohnen station in Queen Maud Land the ice is 2,774 m thick and already about 7,000 years old at 450 m depth [alt-wilhelms-2014-pangaea] [alt-oerter-2004-annglac]. Around the continent, grounded ice extended onto the continental shelf at 20 ka and had retreated toward today's coast by the 5 ka time slice [alt-raised-2014-qsr].

**Time mismatch.** Claim: the coast was mapped ice-free by an ancient civilisation; Hapgood suggested the Princess Martha Coast voyages "may have been made as recently as about 1000 b.c." and Ross Sea mapping at least 6,000 years ago (*Maps of the Ancient Sea Kings*, ch. on the Antarctic maps) [alt-hapgood-1966-seakings]. Evidence: the map was compiled in 1513 from charts of the 1490s to 1500s and older Mediterranean charts; the Queen Maud Land coast has been under ice since the Antarctic ice sheet formed about 34 Ma.

**On the globe.** Claim: the southern coast on the map is the Princess Martha Coast of Queen Maud Land (about 70°S, 0 to 20°W), mapped ice-free. Evidence: the map's southern land is the imagined Terra Australis joined to the Brazilian coast of South America, with notes about Brazil and Tristan da Cunha; the real Queen Maud Land coast was ice-covered through the whole human era. On the timeline: claimed source maps from 1000 BCE or earlier; evidenced compilation 1513 CE.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Topkapı Palace Museum Library, Istanbul | 29.0 | 41.0 | evidence | where the map is kept (Revan Köşkü 1633) |
| Gelibolu (Gallipoli) | 26.7 | 40.4 | evidence | where Piri Reis drew the map in 1513 |
| Princess Martha Coast, Queen Maud Land | -10.0 | -70.5 | claimed | coast Hapgood identified; representative point, approximate |
| Tristan da Cunha | -12.3 | -37.1 | evidence | McIntosh's reading of the note on the southern land |
| Kohnen station, Queen Maud Land | 0.1 | -75.0 | evidence | ice core site, ice 2,774 m thick |

**Open questions.** The brief mentions the explanation that the southern coast bends east to fit the edge of the parchment. McIntosh's book, as I read it, explains the southern land through Portuguese sources and the Terra Australis tradition; I did not find the "bent to fit the parchment" argument in an A or B source, so it is left out. Svat Soucek's *Piri Reis and Turkish Mapmaking after Columbus* (Khalili Collections, 1996) exists but I could not read it. UNESCO's nomination says Piri Reis "consulted thirty-four old maps," while McIntosh's translation of the same inscription gives "about twenty"; the difference comes from how the listed maps are counted. Coordinates in the Places table are gazetteer values.

---

### Younger Dryas impact and a lost Ice Age civilisation

**Verdict:** Unsupported

**The claim.** "A global disaster of such magnitude at exactly the time I suggested in Fingerprints of the Gods does not prove the existence of a lost civilization of the Ice Age but does at least provide us with a mechanism large enough, if such a civilization did exist, to have obliterated it almost entirely from human memory." (Graham Hancock, *Magicians of the Gods*, 2015, ch. 5; Hancock's dashes replaced with commas) [alt-hancock-2015-magicians]. Hancock takes the Younger Dryas impact hypothesis, which proposes that fragments of a comet struck or exploded over North America about 12,800 years ago, and uses it as the event that destroyed an advanced civilisation of the last ice age.

**Who and when.** Richard Firestone, Allen West, James Kennett and co-authors proposed the impact in *PNAS* in 2007. They reported a carbon-rich layer at about 50 Clovis-age sites in North America, dated to about 12.9 ka, and hypothesised that one or more extraterrestrial objects exploded over northern North America, triggering the Younger Dryas cooling and contributing to megafaunal extinctions and the end of the Clovis culture [alt-firestone-2007-pnas]. Hancock adopted the hypothesis in *Magicians of the Gods* (2015), writing that fragments "some more than a mile (2.4 kilometers) in diameter, hit the earth" (ch. 4) and that "an advanced civilization was lost to history" (ch. 9) [alt-hancock-2015-magicians].

**What the evidence says.** The Younger Dryas cold interval itself is well dated. In the Greenland ice cores it appears as Greenland Stadial 1, from 12,896 ± 4 to 11,703 ± 4 years before 2000 CE [alt-holliday-2023-esr-chronology]. Its end, counted in annual layers of the NGRIP ice core, is the formal base of the Holocene at 11,700 years before 2000 CE [alt-walker-2009-jqs]. The leading explanation for the cooling is a weakening of the Atlantic overturning circulation after fresh meltwater, including the drainage of glacial Lake Agassiz, poured into the North Atlantic [alt-holliday-2023-esr-chronology].

The impact explanation for that cooling is disputed. Pinter and colleagues (2011) reviewed the twelve markers offered in 2007 and reported that none had been confirmed by later analyses as evidence of an impact [alt-pinter-2011-esr]. Holliday and twelve co-authors (2023) reviewed the whole body of work: no crater dates to the start of the Younger Dryas, the proposed markers are microscopic and most also form by ordinary processes on Earth, few sites are dated precisely to 12.9 ka, and the plant, landscape and archaeological records show no continent-wide catastrophe; they recommend rejecting the hypothesis [alt-holliday-2023-esr-critique]. Sweatman, Powell and West (2024) replied in the same journal that dozens of studies have replicated key evidence and that the refutation does not stand [alt-sweatman-2024-esr]. The question stays open in the journal literature: a 2023 review recommends rejection, and a 2024 reply in the same journal defends the hypothesis.

The lost-civilisation extension is a separate claim. Hancock himself writes that the impact evidence "does not prove the existence of a lost civilization of the Ice Age" [alt-hancock-2015-magicians]. None of the sources above, on either side of the impact debate, report physical traces of an advanced Ice Age civilisation [alt-firestone-2007-pnas] [alt-holliday-2023-esr-critique] [alt-sweatman-2024-esr].

**Time mismatch.** None for the cold interval: Hancock's 12,800 years ago and 9600 BCE (about 11,600 years ago) fall at the start and end of Greenland Stadial 1 (12,896 to 11,703 years before 2000 CE). The disagreement concerns the cause of the cooling and the existence of the civilisation, not the dates.

**On the globe.** Claim: comet fragments struck the North American ice sheet about 12.8 ka, and an advanced civilisation somewhere on Earth was destroyed. Evidence: the Younger Dryas cooling (12.9 to 11.7 ka) is recorded in Greenland ice and across the North Atlantic region; no crater of that age has been identified; no location for the proposed civilisation is established. On the timeline: the claim and the evidence agree on 12.9 to 11.7 ka for the cold interval. The layer could mark the interval as evidenced and the impact as contested.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Northern North America, Laurentide ice sheet | -85.0 | 55.0 | claimed | proposed centre of the airbursts or impacts; representative point |
| NGRIP drill site, Greenland | -42.3 | 75.1 | evidence | annual-layer record of the Younger Dryas and the Holocene base; coordinates approximate |
| Lake Agassiz basin | -97.0 | 50.0 | evidence | meltwater source linked to the cooling; representative point |

**Open questions.** I could not open the full text or publisher abstract of Pinter et al. (2011); the statement attributed to it rests on the abstract as indexed by the search engine and on its bibliographic record, and should be checked against the paper before use. I read Holliday et al. (2023) from the journal pre-proof copy hosted on a proponent website (cosmictusk.com); the citation points to the journal DOI. Hancock ties the event to Göbekli Tepe in *Magicians of the Gods*; that site belongs with another group's entries and is not covered here. A related airburst paper on Tall el-Hammam (Bunch et al. 2021, *Scientific Reports*) was retracted in 2025; it concerns a different event and I did not use it.

## 6. Monuments, alignments and site claims

Claims that monuments on different continents are connected.

---

### Pyramids on both sides of the Atlantic

**Verdict:** Contradicted

**The claim.** "Were not the pyramids of Egypt and America imitations of similar structures in Atlantis?" (Ignatius Donnelly, *Atlantis: The Antediluvian World*, 1882, Part IV, ch. V, "The Pyramid, the Cross, and the Garden of Eden") [alt-donnelly-1882-pyramid]. Donnelly argued that pyramids in Egypt and in Mexico share a form, an orientation to the cardinal points and a burial use, and that these shared traits came from one source culture on a lost Atlantic land. Later popular writers extended the idea to Nubia and to the claim that the continents themselves were once joined when the pyramids were built.

**Who and when.** Donnelly, a Minnesota politician, set out the argument in 1882. The same chapter states "We find the pyramid on both sides of the Atlantic, with its four sides pointing, like the arms of the Cross, to the four cardinal points" [alt-donnelly-1882-pyramid]. He drew on earlier comparisons of Cholula and Teotihuacan with Egyptian and Mesopotamian monuments that he quoted from nineteenth-century travellers [alt-donnelly-1882-pyramid]. The later "joined continents" form of the claim could not be traced to a specific fetched text (see Open questions).

**What the evidence says.** Egypt's first pyramid is the Step Pyramid of Djoser at Saqqara, the centre of the earliest stone structure in Egypt [alt-met-old-kingdom]. The Metropolitan Museum dates Djoser's reign to about 2649 to 2630 BCE [alt-met-old-kingdom], and a radiocarbon chronology built from 211 measurements on short-lived plants puts the start of his reign between 2691 and 2625 BCE [alt-bronk-ramsey-2010-science]. The Great Pyramid at Giza belongs to Khufu, who reigned about 2551 to 2528 BCE [alt-met-old-kingdom]. Each Egyptian pyramid marked a king's tomb within a complex of temples and a causeway [alt-met-old-kingdom].

The Nubian pyramids are steep-sided royal tombs of the kingdom of Kush [alt-unesco-napatan-1073]. At el-Kurru they cover the burials of the Kushite kings who ruled Egypt as its 25th Dynasty, about 750 to 664 BCE [alt-kelsey-el-kurru]; the royal cemetery later moved to Nuri [alt-lipscomb-nuri], which UNESCO lists with Kurru inside the Napatan period, 900 to 270 BCE [alt-unesco-napatan-1073]. From the 3rd century BCE most royal burials were at Meroë, where about a hundred pyramids stand in two clusters, and the Kushite state lasted to the 4th century CE [alt-unesco-meroe-1336]. These tombs were built roughly 1,900 to 3,000 years after Djoser's, by a state that ruled Egypt for part of that time and revived Egyptian script and the worship of Amun [alt-unesco-napatan-1073] [alt-kelsey-el-kurru].

In Mesoamerica the pyramids are platforms of earth and rubble. The pyramid at La Venta (Complex C) is an earthen mound more than 30 m high built of clay [alt-gillespie-volk-2014]. La Venta grew into a temple town between 1150 and 800 BCE and peaked between 800 and 500 BCE [alt-rust-sharer-1988-science]; its apogee is dated about 800 to 400 BCE on uncalibrated radiocarbon [alt-gillespie-volk-2014]. The Sun Pyramid at Teotihuacan was built in the first century CE according to one analysis [alt-sload-2015-laa] and between 170 and 310 CE according to the excavators of the 2008 to 2011 tunnels [alt-sugiyama-2013-laa]. Cholula's Great Pyramid grew in four major stages and at least nine smaller modifications, from the Terminal Formative to the Early Postclassic [alt-mccafferty-1996-am]. At Teotihuacan the excavators found a tunnel cut beneath the pyramid for ritual use, possibly including royal burials or offerings [alt-sugiyama-2013-laa].

These dates spread across about three thousand years, from Djoser's reign to the Sun Pyramid, with La Venta's mound older than any Nubian pyramid. The construction differs as well: cut stone around burial chambers in Egypt and Nubia, clay fill at La Venta, and platforms enlarged stage by stage in the Mexican highlands [alt-met-old-kingdom] [alt-gillespie-volk-2014] [alt-mccafferty-1996-am].

**Time mismatch.** Claim: Egyptian and American pyramids copy structures on a land that joined or lay between the continents. Evidence: the Central Atlantic began opening about 190 Ma [alt-labails-2010-epsl]; the South Atlantic had oceanic crust forming by about 131 Ma [alt-bird-hall-2016-gji] and Africa and South America separated fully by about 103 Ma [alt-heine-2013-se]. The oldest pyramid is about 4.7 ka (Djoser, 2691 to 2625 BCE) [alt-bronk-ramsey-2010-science]. The ocean is about 40,000 times older than the oldest pyramid.

**On the globe.** Claim: one source culture on a landmass in the Atlantic, with pyramids on the facing shores. Evidence: at every pyramid date the Atlantic had been open ocean for more than 100 million years [alt-heine-2013-se]; the pyramids sit where they are today, on opposite sides of it. Timeline: claimed a single ancestral date before the Egyptian pyramids; evidenced Egypt 2691 to 2528 BCE, Kush from about 750 BCE to the 4th century CE, La Venta 1150 to 400 BCE, Teotihuacan 1st to 4th century CE, Cholula Terminal Formative to Early Postclassic.

**Places.**

| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
|---|---|---|---|---|
| Saqqara, Step Pyramid of Djoser | 31.2 | 29.9 | both | First Egyptian pyramid, reign from 2691 to 2625 BCE |
| Giza, Great Pyramid | 31.1 | 30.0 | both | Khufu, about 2551 to 2528 BCE |
| El-Kurru, Sudan | 31.8 | 18.4 | evidence | 25th Dynasty royal pyramids, about 750 to 664 BCE |
| Nuri, Sudan | 31.9 | 18.6 | evidence | Napatan royal cemetery after el-Kurru |
| Meroë, Sudan | 33.7 | 16.9 | evidence | Royal burials from 3rd century BCE to 4th century CE |
| La Venta, Tabasco | -94.0 | 18.1 | evidence | Clay pyramid more than 30 m high, 1150 to 400 BCE |
| Teotihuacan, Sun Pyramid | -98.8 | 19.7 | both | 1st century CE or 170 to 310 CE |
| Cholula, Great Pyramid | -98.3 | 19.1 | both | Four stages, Terminal Formative to Early Postclassic |

**Open questions.** Calendar dates for Cholula's stages were not in the fetched abstract; only period names are given. A calendar date for the La Venta pyramid itself (the brief's "c. 900 BCE mound") was not found in an A or B source; the site chronology is used instead. The specific twentieth-century books that say the continents were joined when the pyramids were built were not identified or read. Coordinates are representative points and were not checked against a gazetteer.

---

### Megaliths across Europe and beyond

**Verdict:** Kernel of truth

**The claim.** "These people, according to my theory, were colonists from Atlantis" (Ignatius Donnelly, *Atlantis: The Antediluvian World*, 1882, Part V, ch. VI, "The African Colonies") [alt-donnelly-1882-dolmens]. Donnelly wrote this of the dolmen-builders of North Africa and Europe, after summarising General Faidherbe's view that the dolmens of both continents were built by one people [alt-donnelly-1882-dolmens]. The popular claim holds that stone chambers, standing stones and dolmens from Brittany to Korea are the work of a single seafaring megalith culture, or of survivors from a lost civilisation.

**Who and when.** Nineteenth-century diffusionists, Donnelly among them, grouped dolmens across Europe, North Africa, India and America as one tradition; Donnelly noted that Faidherbe had not explained dolmens in "Hindostan" and America, and supplied Atlantis as the link [alt-donnelly-1882-dolmens]. The idea that megaliths spread along European coasts also runs through professional archaeology, where it has been tested with radiocarbon [alt-schulz-paulsson-2019-pnas].

**What the evidence says.** Bettina Schulz Paulsson modelled 2,410 radiocarbon results from megalithic, premegalithic and contemporary non-megalithic contexts [alt-schulz-paulsson-2019-pnas]. Premegalithic monuments appear only in northwest France, where the first burial at Passy died between 5061 and 4858 cal BC [alt-schulz-paulsson-2019-pnas]. Megalithic graves in northwest France emerged between 4794 and 3986 cal BC, most probably within 200 to 300 years, and the first building phase of the Tumulus St Michel at Carnac dates to 4782 to 4594 cal BC [alt-schulz-paulsson-2019-pnas]. The tradition then spread in three phases along the Atlantic and Mediterranean coasts and finally to Scandinavia, and the pattern fits transfer by sea [alt-schulz-paulsson-2019-pnas].

Dates within the chain step later with distance from Brittany. The Carnac megaliths were built across the Neolithic, about 5000 to 2300 BCE [alt-unesco-carnac-1725]. Coldrum in Kent dates to 3971 to 3805 cal BC [alt-schulz-paulsson-2019-pnas]. At Stonehenge the circular ditch was dug about 3000 BCE and the stone circle raised about 2500 BCE [alt-english-heritage-stonehenge]. Within Europe, then, the evidence supports one connected tradition carried by people in boats over about two thousand years.

Korea holds the densest set of dolmens anywhere, with more than 50,000 recorded [alt-kim-2025-jar] and over 440 at Gochang and more than 500 at Hwasun alone [alt-unesco-korea-dolmens-977]. Korean dolmen building began in the middle of the Early Mumun period, which runs 1500 to 800 BCE [alt-kim-2025-jar]. UNESCO describes dolmens as prominent in Neolithic and Bronze Age cultures across the world during the 2nd and 1st millennia BCE [alt-unesco-korea-dolmens-977]. The Korean tombs were built by Bronze Age rice and millet farmers on the far side of Eurasia, three thousand years after the first Breton graves [alt-kim-2025-jar] [alt-schulz-paulsson-2019-pnas]. A capstone on upright slabs is the simplest way to roof a grave with large stones, and farming societies on different continents arrived at it separately.

**Time mismatch.** Claim: one megalith culture. Evidence: Europe's chain starts in northwest France 4794 to 3986 cal BC [alt-schulz-paulsson-2019-pnas]; Korean dolmens start in the middle of the Early Mumun, 1500 to 800 BCE [alt-kim-2025-jar]. No lost-civilisation date applies; all of these fall in the Holocene.

**On the globe.** Claim: one network joining Atlantic Europe to East Asia. Evidence: a dated coastal chain from Brittany to Iberia, the Mediterranean, the British Isles and Scandinavia, with arrows running outward from the Gulf of Morbihan; Korean dolmens form a separate cluster with no dated links across Eurasia. Timeline: Europe from about 4800 cal BC; Korea from the second half of the 2nd millennium BCE.

**Places.**

| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
|---|---|---|---|---|
| Carnac and Gulf of Morbihan | -3.1 | 47.6 | both | Origin area; Tumulus St Michel 4782 to 4594 cal BC |
| Passy, Paris Basin | 3.4 | 48.2 | evidence | Premegalithic necropolis, 5061 to 4858 cal BC |
| Coldrum, Kent | 0.4 | 51.3 | evidence | 3971 to 3805 cal BC |
| Stonehenge | -1.8 | 51.2 | both | Ditch about 3000 BCE, stone circle about 2500 BCE |
| Gochang dolmens | 126.6 | 35.4 | both | Over 440 dolmens |
| Hwasun dolmens | 126.9 | 34.9 | both | More than 500 dolmens |
| Ganghwa dolmens | 126.5 | 37.7 | both | Island group |

**Open questions.** A radiocarbon date for the earliest Korean dolmen was not found; the period boundary is used. Passy coordinates are approximate.

---

### Ley lines

**Verdict:** Unsupported

**The claim.** "What really matters in this book is whether it is a humanly designed fact, an accidental coincidence, or a 'mare's nest,' that mounds, moats, beacons, and mark stones fall into straight lines throughout Britain" (Alfred Watkins, *The Old Straight Track*, 1925, Preface) [alt-watkins-1925-ost]. Watkins held that prehistoric people laid out straight sighting lines across the country for travel and trade, and that later markers kept to them. John Michell later presented the same lines as channels of an energy in the earth known to ancient peoples worldwide (paraphrase) [alt-michell-1969-view].

**Who and when.** Watkins, a Hereford businessman, photographer and antiquarian, set out the idea in a 1921 lecture to the Woolhope Naturalists' Field Club, printed as *Early British Trackways* in 1922, where he wrote "The sighting line was called the ley or lay" and invited readers to test "whether moats, mounds and churches do not line up in straight lines with a hill peak at one end" [alt-watkins-1922-trackways]. He expanded it in *The Old Straight Track*, first published on 29 October 1925 [alt-watkins-1925-ost]. John Michell's *The View Over Atlantis* (1969) recast leys as earth-energy lines and carried them into the counterculture [alt-michell-1969-view].

**What the evidence says.** Watkins's markers include parish churches, moats and wayside crosses as well as prehistoric mounds [alt-watkins-1922-trackways]. He dated the mounds to the Neolithic himself and wrote that "the real dating of the leys and when the system fell into decay is for future investigation" [alt-watkins-1922-trackways]. His explanation for the later markers was that churches and crosses were placed on older sighting points [alt-watkins-1922-trackways], which leaves the alignments themselves to be tested against chance.

Simon Broadbent tested the idea statistically in 1980. He counted triads of sites whose largest angle lies within a small acceptance angle of 180 degrees and derived the number of such near-straight triads expected from sites scattered at random [alt-broadbent-1980-jrssa]. Applied to 52 megalithic sites in Cornwall, the alignments found by ley hunters were consistent with the overall density of the sites [alt-broadbent-1980-jrssa]. Straight lines through three or four points are expected in any dense scatter, and the count rises steeply as sites are added or the line is allowed to be wider.

Michell's energy version is often tested in the field by dowsing. The largest controlled dowsing study, run in a barn near Munich in 1987 and 1988, screened about 500 candidate dowsers and ran 843 double-blind tests with the 43 best [alt-enright-1999-si]. Their guesses of a hidden water pipe's position were indistinguishable from chance on re-analysis [alt-enright-1999-si] [alt-enright-1995-naturwiss]. The original experimenters read a few individual results as successes [alt-enright-1999-si].

**Time mismatch.** Claim: leys laid out in the Neolithic and followed by later builders. Evidence: Watkins's lines mix prehistoric mounds with churches, moats and crosses, and Broadbent found that a random scatter of sites at the same density produces as many near-straight lines [alt-watkins-1922-trackways] [alt-broadbent-1980-jrssa]. No date for the lines themselves has been established.

**On the globe.** Claim: straight lines across the British landscape joining ancient sites. Evidence: the same sites, with alignment counts matching a random scatter of equal density. Timeline: claimed Neolithic origin; evidenced markers from prehistoric to medieval.

**Places.**

| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
|---|---|---|---|---|
| Hereford and the Wye valley | -2.7 | 52.1 | claimed | Watkins's home ground, where he mapped his first leys |
| West Cornwall | -5.5 | 50.1 | evidence | Broadbent's test set of 52 megalithic sites |

**Open questions.** *Ley Lines in Question* (Williamson and Bellamy, 1983) could not be read; only its catalogue record was reached [alt-williamson-bellamy-1983], so none of its findings are cited. Michell's text could not be read, and the paraphrase of his claim is unverified; the 1969 first-edition date comes from general knowledge and a later printing's catalogue record. No controlled test of dowsing along leys specifically was found. The dates of Watkins's churches and moats are not tied to an A or B source here. Watkins's 1925 text was read in the 1948 fourth edition; the preface is dated August 1925.

---

### Global site-alignment grids

**Verdict:** Unsupported

**The claim.** The planetary grid is "anchored to the north and south axial poles and the Great Pyramid at Gizeh" (William Becker and Bethe Hagens, "The Planetary Grid: A New Synthesis", c. 1984) [alt-becker-hagens-grid]. Becker and Hagens proposed that a geometric net of great circles, built from an icosahedron and a dodecahedron, runs through the Great Pyramid and links ancient sites, seismic zones, weather systems and migration routes.

**Who and when.** Ivan Sanderson plotted a set of global anomaly zones in the late 1960s and early 1970s; Christopher Bird named the "Planetary Grid" in a *New Age Journal* article of May 1975; three Russian writers (Goncharov, Morozov and Makarov) published a crystal-shaped Earth grid; and Becker and Hagens, a professor of industrial design and a professor of anthropology, combined these with a Buckminster Fuller polyhedron from 1983 [alt-becker-hagens-grid]. Their version uses 121 great circles through 4,862 points [alt-becker-hagens-grid].

**What the evidence says.** A net of many great circles covers much of the globe. A calculation for this note, from the grid's own numbers: a band 50 km either side of one great circle covers about 0.8 percent of Earth's surface, and 121 such bands, allowing for overlap, cover roughly 60 percent. With 4,862 grid points as well, most places on Earth lie close to some line or node, and a site list of thousands will include many that fall "on" the grid by chance. The same reasoning Broadbent applied to Cornish sites [alt-broadbent-1980-jrssa] applies at global scale.

Site positions also move. Plates travel at rates from under 2.5 cm a year at the Arctic Ridge to more than 15 cm a year at the East Pacific Rise [alt-usgs-dynamic-earth-rates]. At the slowest of those rates, a point moves about 110 m in the 4,500 years since Khufu's pyramid was built [alt-usgs-dynamic-earth-rates] [alt-met-old-kingdom]. Across geological time the shifts reach thousands of kilometres: 2.5 cm a year sustained for 190 million years adds up to about 4,750 km [alt-usgs-dynamic-earth-rates], and the Atlantic did not exist before about 190 Ma [alt-labails-2010-epsl]. A grid tied to Giza and the modern poles matches the present arrangement of continents only.

**Time mismatch.** Claim: a planet-wide energy or construction grid that ancient builders followed. Evidence: the sites cited (Giza, Stonehenge, Teotihuacan) were built between about 3000 BCE and 300 CE by unconnected societies [alt-met-old-kingdom] [alt-english-heritage-stonehenge] [alt-sugiyama-2013-laa], on continents whose relative positions changed by thousands of kilometres since about 190 Ma [alt-labails-2010-epsl].

**On the globe.** Claim: great circles and nodes on the present globe, fixed to Giza and the poles. Evidence: a dense net of 121 great circles passes within 50 km of most of the surface; drawn on a Jurassic or Cretaceous globe the same sites fall in unrelated places. Timeline: claimed timeless; evidenced as a geometry of the present plate configuration.

**Places.**

| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
|---|---|---|---|---|
| Giza | 31.1 | 30.0 | claimed | Grid anchor point |
| Stonehenge | -1.8 | 51.2 | claimed | Often cited as a grid site |
| Teotihuacan | -98.8 | 19.7 | claimed | Often cited as a grid site |

**Open questions.** Sources are thin. No peer-reviewed test of the Becker-Hagens grid was found. The coverage percentages above are this note's own arithmetic from the grid's stated numbers; they have not been published and should be checked before use. The original venue of the Becker-Hagens article (reportedly *Pursuit*, 1984) was not verified; the text was read in an Internet Archive mirror with OCR errors, and the quoted phrase was checked against that text. Which specific sites Becker and Hagens place on great circles with Stonehenge and Teotihuacan was not extracted.

---

### Gunung Padang, West Java

**Verdict:** Contradicted

**The claim.** "Unit 3 is estimated to have been constructed during the remarkable timeframe of 25 000 to 14 000 BCE" (Danny Hilman Natawidjaja and others, "Geo-archaeological prospecting of Gunung Padang buried prehistoric pyramid in West Java, Indonesia", *Archaeological Prospection*, 2023, section 3.4) [alt-natawidjaja-2023-arp]. The authors argued that the terraced hilltop sits on a buried, multi-phase pyramid with hidden chambers, begun in the last glacial period.

**Who and when.** A team led by geologist Natawidjaja surveyed the site with drilling, trenching and geophysics from 2011 to 2014 and published online on 20 October 2023 [alt-natawidjaja-2023-arp]. The paper sets the site against the drowning of Sundaland as sea level rose over the last 15,000 years [alt-natawidjaja-2023-arp]. The journal retracted it on 18 March 2024 by agreement of the editors-in-chief, Eileen Ernenwein and Gregory Tsokas, and John Wiley & Sons; all authors disagreed with the retraction [alt-arp-2024-retraction].

**What the evidence says.** The retraction notice states that "the radiocarbon dating was applied to soil samples that were not associated with any artifacts or features that could be reliably interpreted as anthropogenic or 'man-made'", and that the interpretation of a pyramid "built 9000 or more years ago is incorrect" [alt-arp-2024-retraction]. The paper's oldest dates came from organic soil taken from between weathered rock fragments in drill cores, such as 22,750 ± 120 BP at 7.5 m depth [alt-natawidjaja-2023-arp]. Dated soil records when the soil formed; it does not date a wall unless something ties the two together.

The terraces are cut into a promontory on an extinct volcano, and their stones are prismatic andesite columns, a shape the rock took naturally as it cooled [alt-powell-2024-archaeology]. Archaeologist Lutfi Yondri excavated beneath the terrace walls and dated charcoal found under them: 1986 ± 110 BP under Terrace I, reported as about 117 BCE; 2014 ± 30 BP under Terrace II, about 47 BCE; and 1845 ± 100 BP under Terrace IV, reported as about 45 BCE [alt-yondri-2017-gunung-padang]. He concluded that the terraces were built over at least three generations around the last two centuries BCE [alt-yondri-2017-gunung-padang].

**Time mismatch.** Claim: construction from 25,000 to 14,000 BCE (about 27 to 16 ka). Evidence: charcoal sealed beneath the terrace walls dates to about the 2nd to 1st century BCE, roughly 2.1 ka [alt-yondri-2017-gunung-padang]; the retracted paper's older dates come from natural soils [alt-arp-2024-retraction].

**On the globe.** Claim: a pyramid on the Sundaland landmass during the Last Glacial Maximum. Evidence: a terraced sanctuary built on a volcanic hill in the last centuries BCE, long after Sundaland's lowlands had flooded. Timeline: claimed 25,000 BCE; evidenced about 117 to 45 BCE for the terrace walls.

**Places.**

| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
|---|---|---|---|---|
| Gunung Padang, Cianjur, West Java | 107.1 | -7.0 | both | Five stone terraces; walls dated about 117 to 45 BCE |

**Open questions.** Yondri reports 1845 ± 100 BP as calibrating to about 45 BCE; a conventional age of 1845 BP would normally calibrate to the early centuries CE, so this figure may carry a typographical or calibration error and should be checked against his 2014 Purbawidya article, which could not be downloaded. The Yondri monograph was read in an Internet Archive copy. Site coordinates are approximate. The Sundaland sea-level history belongs to the Sundaland entry and is not sourced here.

---

### The Bosnian pyramids, Visoko

**Verdict:** Contradicted

**The claim.** "With its height of over 220 meters is the tallest pyramid in the World" (Archaeological Park: Bosnian Pyramid of the Sun Foundation, "Pyramid of the Sun", website) [alt-osmanagic-foundation]. The foundation says the hill is coated with concrete blocks, and that "layers of soil that cover the pyramid is approx. 12.000 years old. It makes this pyramid oldest pyramid on the Planet" [alt-osmanagic-foundation].

**Who and when.** Semir Osmanagić, a Bosnian businessman, declared in 2005 that pyramid-shaped hills near Visoko were built by a previously unknown civilisation, and set up a foundation to excavate them [alt-bohannon-2006-science]. He described a "supercivilization" that flourished in Bosnia 12,000 years ago [alt-bohannon-2006-science]. In December 2006 the European Association of Archaeologists published an open letter to the Bosnian government calling the project "a cruel hoax on an unsuspecting public [which] has no place in the world of genuine science" [alt-bohannon-2006-science].

**What the evidence says.** Visoko sits in the Sarajevo-Zenica Basin, which filled with lake and river sediment in the Miocene [alt-sant-2018-palaeo3]. The upper part of that fill, a sequence of lake carbonates, silts, sands and conglomerates, dates to between 17.2 and 15 Ma [alt-sant-2018-palaeo3]. Geologists from the University of Tuzla cored Visočica in 2006 and found the same alternating conglomerate, clay and sandstone as other hills in the area [alt-woodard-2009-smithsonian]. Boston University geologist Robert Schoch described the layers as tilted and fractured by tectonic stress, with sandstone and conglomerate beds broken into blocks [alt-schoch-bosnia].

Paul Heinrich, an archaeological geologist at Louisiana State University, compared the hill's shape to the ridges of tilted strata called flatirons, which are common in the western United States [alt-woodard-2009-smithsonian]. The "blocks" exposed by digging are sandstone and conglomerate beds broken by tectonic stress and gravity [alt-schoch-bosnia] [alt-woodard-2009-smithsonian].

**Time mismatch.** Claim: a pyramid built about 12,000 years ago (12 ka). Evidence: the rock of the basin was laid down as lake and river sediment about 17 to 15 Ma [alt-sant-2018-palaeo3], more than a thousand times older, and later tilted and eroded into its present shape.

**On the globe.** Claim: a 220 m artificial pyramid in central Bosnia. Evidence: a natural hill of tilted Miocene lake sediment in the Sarajevo-Zenica Basin. Timeline: claimed 12 ka; evidenced deposition 17.2 to 15 Ma, then uplift and erosion.

**Places.**

| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
|---|---|---|---|---|
| Visočica hill, Visoko | 18.2 | 44.0 | both | Claimed "Pyramid of the Sun"; Miocene basin sediment |

**Open questions.** The EAA letter itself was not fetched; its wording is taken from the *Science* news report. The Sant et al. 2018 dates apply to the basin succession; a date for the specific beds exposed on Visočica was not found. The rubric keeps the Schoch and Smithsonian descriptions at tier C, so the geological description rests on them for framing only, with Sant et al. 2018 for the ages. Coordinates are approximate.

## 7. Real drowned and ancient landscapes

The science that several of the claims draw on, and three sites that claims have grown around. The sea-level entry comes first because the other entries, and the architecture in docs/layers-architecture.md, depend on its table.

---

### Post-glacial sea-level rise since the Last Glacial Maximum

**Verdict:** Supported

**The claim.** "The esl reaches its lowest value of ∼134 m at the end of this interval, corresponding to ∼52 × 10⁶ km³ more grounded ice" (Lambeck, Rouby, Purcell, Sun & Sambridge, *Sea level and global ice volumes from the Last Glacial Maximum to the Holocene*, PNAS, 2014, results item ii; "esl" is ice-equivalent sea level) [alt-lambeck-2014-pnas]. At the peak of the last ice age so much water was locked in ice sheets that the global ocean stood well over 100 m lower than today. It rose in stages as the ice melted, fastest between about 16.5 and 8.2 ka, and has changed by only a few metres in the last 6000 years.

**Who and when.** Estimates of about 120 m come from oxygen isotopes in deep-sea foraminifera and from drowned coral reefs, especially the Barbados record of Richard Fairbanks and co-workers; Peltier and Fairbanks (2006) put the post-LGM rise "very close to the widely supported estimate of 120 m" [alt-peltier-fairbanks-2006-qsr]. Clark and colleagues (2009) used 5704 radiocarbon and exposure ages to date the Last Glacial Maximum (LGM) itself [alt-clark-2009-science]. Lambeck and colleagues (2014) inverted about 1000 sea-level observations from sites far from the former ice sheets and corrected them for the Earth's isostatic response, giving the ice-equivalent global curve used for the table below [alt-lambeck-2014-pnas].

**What the evidence says.** Nearly all ice sheets stood at their maximum positions from 26.5 ka to 19 to 20 ka. Northern Hemisphere deglaciation began 19 to 20 ka as northern summer insolation increased [alt-clark-2009-science]. Peltier and Fairbanks place the LGM at about 26 ka, some 5000 years earlier than the conventional 21 ka [alt-peltier-fairbanks-2006-qsr].

The size of the lowstand depends on how the observations are corrected. Lambeck and colleagues find the global ice-equivalent sea level reached its lowest value of about 134 m below present at the end of the interval 29 to 21 ka, and note that the frequently cited 125 m "is usually based on observations uncorrected for isostatic effects" [alt-lambeck-2014-pnas]. Peltier and Fairbanks, working from Barbados, put the rise at very close to 120 m [alt-peltier-fairbanks-2006-qsr]. The lowstand therefore lies between about 120 and 134 m below present, depending on the method.

The main phase of melting ran from about 16.5 to 8.2 ka at an average of about 12 m per thousand years [alt-lambeck-2014-pnas]. Meltwater pulse 1A broke that average. Corals drilled off Tahiti show it began no earlier than 14,650 years ago and ended before 14,310 years ago, with a local rise of 12 to 22 m (most probably 14 to 18 m) and a global rate above 40 mm per year [alt-deschamps-2012-nature]. That rate is about four centimetres a year, the length of a thumb, sustained for three centuries. Lambeck's global curve puts the pulse at about 20 m in about 500 years from 14.5 ka [alt-lambeck-2014-pnas]; a separate inversion from six sites gives 17.9 m (15.7 to 20.2 m) in 500 years [alt-lin-2021-natcomms]; the Sunda Shelf mangrove record shows as much as 16 m within 300 years, 14.6 to 14.3 ka [alt-hanebuth-2000-science]. The rise slowed from 12.5 to 11.5 ka (the Younger Dryas) and then ran at about 15 m per thousand years from 11.4 to 8.2 ka [alt-lambeck-2014-pnas].

After 8.2 ka the rate fell. The total global rise over the last 6.7 ka was about 4 m, about 3 m of it between 6.7 and 4.2 ka, with a further rise of 1 m or less until the modern rise began 100 to 150 years ago [alt-lambeck-2014-pnas].

**Approximate global (ice-equivalent) sea level relative to today.** Values are rounded to the nearest 5 m (to 1 m for 6 ka) and are read from the adopted curve in Lambeck et al. (2014, Fig. 4) and checked against the interval totals in its text. They carry about ±5 m of reading and model uncertainty before 8 ka [alt-lambeck-2014-table].

| Age | Years before present | Global sea level vs today | Basis in the source |
| --- | --- | --- | --- |
| 21 ka | 21,000 | about -134 m (lowest) | Stated in text [alt-lambeck-2014-pnas]. Peltier & Fairbanks give about -120 m [alt-peltier-fairbanks-2006-qsr] |
| 20 ka | 20,000 | about -130 m | Onset of deglaciation 21 to 20 ka; curve read from Fig. 4 [alt-lambeck-2014-table] |
| 15 ka | 15,000 | about -100 m | Near-constant about 18 to 16.5 ka, then a rise of about 25 m to 15 ka [alt-lambeck-2014-table] |
| 14 ka | 14,000 | about -80 m | After meltwater pulse 1A of about 20 m [alt-lambeck-2014-table] |
| 12 ka | 12,000 | about -60 m | About 20 m rise 14 to 12.5 ka, then the Younger Dryas slowdown [alt-lambeck-2014-table] |
| 10 ka | 10,000 | about -40 m | About 15 m per ka from 11.4 ka [alt-lambeck-2014-table] |
| 8 ka | 8,000 | about -10 to -15 m | Fig. 4 inset [alt-lambeck-2014-table] |
| 6 ka | 6,000 | about -3 m | About 4 m total rise over the last 6.7 ka [alt-lambeck-2014-pnas] |
| today | 0 | 0 m | |

Relative sea level at any one coast differs from this global curve. The Earth's crust and gravity field respond to the shifting load of ice and water (glacial isostatic adjustment), so the same meltwater pulse raised sea level by a modelled 14 m at Barbados and 20 m at Tahiti [alt-lambeck-2014-pnas]. On the Sunda Shelf the local record starts at -116 m at 21 ka, stands at -51 m at 10 ka, reaches today's level at 6 ka and peaks about 5 m above it at 4.2 ka before falling back [alt-sathiamurthy-voris-2006-tnh]. Near the former ice sheets (the North Sea, the Bering Strait) the difference is larger, and modelling of the Bering Strait flooding needs gravitationally self-consistent sea-level simulations to match the observations [alt-pico-2020-sciadv].

**Time mismatch.** None.

**On the globe.** A coastline for each time slice can be drawn by cutting present-day bathymetry at the table value. This gives a first approximation of exposed shelves: Sunda, Sahul, Beringia, the North Sea, the Yellow Sea and the Persian Gulf. It ignores local isostatic and tectonic movement and post-glacial sediment infill, so the shoreline near the former ice sheets will be the least accurate. Timeline: the lowstand spans roughly 26.5 to 19 ka; the fastest rise falls at 14.65 to 14.31 ka; the modern coastline is essentially in place by 6 ka.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Barbados | -59.6 | 13.2 | evidence | Coral sea-level record (Fairbanks; Peltier & Fairbanks 2006). (map reading) |
| Tahiti | -149.4 | -17.7 | evidence | IODP Expedition 310 corals dating meltwater pulse 1A. (map reading) |
| Sunda Shelf | 107.0 | 2.0 | evidence | Mangrove record of meltwater pulse 1A (Hanebuth et al. 2000). (map reading) |
| Bonaparte Gulf, NW Australia | 128.5 | -13.5 | evidence | Key LGM and early deglaciation data in Lambeck et al. 2014. (map reading) |

**Open questions.** The table values are read from a published figure and from interval totals, not taken from a data table. Lambeck et al. (2014) publish the curve numerically in SI Appendix Table S3, which could not be downloaded (the PNAS and PMC supplement links were blocked). The architecture should import Table S3 directly if it can be obtained. The two ends of the lowstand range (about 120 m from Peltier & Fairbanks 2006, about 134 m from Lambeck et al. 2014) reflect different isostatic corrections and are both A-tier; the layer should show the range.

---

### Doggerland

**Verdict:** Supported

**The claim.** "Around 8150 BP, the Storegga tsunami struck North-west Europe." (Walker, Gaffney, Fitch, Muru, Fraser, Bates & Bates, *A great wave: the Storegga tsunami and the end of Doggerland?*, Antiquity, 2020, abstract) [alt-walker-2020-antiquity]. The floor of the southern North Sea was a lowland plain of rivers, lakes and woodland where Late Palaeolithic and Mesolithic people lived. Rising sea level broke it into islands and drowned it during the early Holocene.

**Who and when.** Clement Reid wrote in 1913 that drowned peats in British waters should preserve the remains of "ancient races of man, sealed up with his weapons and tools" (quoted in Gaffney, Thomson & Fitch 2007) [alt-gaffney-2007-mapping-doggerland]. The antler point dredged in 1931 by the trawler *Colinda* and Harry Godwin's work on the associated moorlog (peat) in 1933 proved the deposits were terrestrial [alt-gaffney-2007-mapping-doggerland]. The North Sea Palaeolandscapes Project (Gaffney, Thomson & Fitch, *Mapping Doggerland*, 2007) mapped more than 23,000 km² of the buried landscape using 3D seismic data released by the oil industry [alt-gaffney-2007-mapping-doggerland]. The European Research Council project Europe's Lost Frontiers, based at the University of Bradford, ran from December 2015 to November 2021 and added coring and sedimentary ancient DNA [alt-cordis-lost-frontiers].

**What the evidence says.** The seismic surveys show river channels, estuaries and lake basins buried beneath the modern seabed. The Southern North Sea Megasurvey used by the 2007 project covers more than 23,000 km² and combines more than 60 original 3D surveys [alt-gaffney-2007-mapping-doggerland]. That is an area about the size of Wales.

Finds from the seabed confirm people lived there. The barbed antler point from the Leman and Ower Banks, about 53°10'N, 2°E, came up in a block of peat in September 1931. A radiocarbon date obtained in 1988 (OxA-1950, 11,740 ± 150 BP) places it at about 11,950 to 11,300 cal BC, older than the Mesolithic age first assumed [alt-norfolk-hes-leman-ower]. Barbed bone points washed up on the Dutch coast from Doggerland sediments give uncalibrated radiocarbon ages between 9.5 and 7.3 ka ¹⁴C BP; two of ten were made from human bone [alt-dekker-2020-jasrep]. Around the Brown Bank, a sand ridge nearly 30 km long whose crest lies 16 m below sea level, fishermen have trawled up mammoth, reindeer and bison bones and Mesolithic tools and human remains. The land surface there drowned sometime between 10 and 8 ka [alt-missiaen-2020-brown-bank].

The flooding was progressive. By 9000 cal BP the plain had broken into pieces, and the upland that is now the Dogger Bank stood as Dogger Island, which survived for about another millennium [alt-walker-2020-antiquity]. Global sea level rose by 1 to 4 m between 8400 and 8200 cal BP. When the Storegga tsunami struck, about 8150 years ago (about 6200 BCE), Dogger Island had probably shrunk to a shallow sand bank [alt-walker-2020-antiquity]. Cores from the southern North Sea contain the first tsunami deposits found there, and sedimentary DNA shows the land recovered afterwards; the authors conclude the tsunami "was neither universally catastrophic, nor was it a final flooding event for the Dogger Bank or the Dogger Littoral" [alt-walker-2020-antiquity]. Around 7000 cal BP the last of Dogger Island had probably gone under, leaving a handful of islands [alt-walker-2020-antiquity].

**Time mismatch.** None. A popular version has the Storegga tsunami drowning Doggerland in one event. Evidence: the plain was already fragmented by 9000 cal BP; the tsunami at about 8150 cal BP was followed by recovery, and the remaining islands drowned by rising sea level around 7000 cal BP [alt-walker-2020-antiquity].

**On the globe.** Evidence: dry land across the southern North Sea joining Britain to the continent at the LGM, shrinking through the early Holocene, an archipelago after the 8.2 ka event, and gone by about 7000 cal BP. Timeline markers: Leman and Ower point about 13.9 to 13.3 ka (11,950 to 11,300 cal BC); Dogger Island by 9000 cal BP; Storegga tsunami about 8150 cal BP; last islands about 7000 cal BP.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Leman and Ower Banks | 2.0 | 53.2 | evidence | Antler point find, 1931; position from the Norfolk Heritage Explorer record |
| Dogger Bank | 2.5 | 54.8 | evidence | Former Dogger Island, drowned about 7000 cal BP. (map reading) |
| Brown Bank | 3.3 | 52.6 | evidence | Trawled Mesolithic finds and human remains. (map reading) |
| Storegga slide, off Møre, Norway | 5.0 | 63.5 | evidence | Source of the tsunami. (map reading) |

**Open questions.** The Brown Bank abstract (Missiaen et al.) is a conference poster abstract hosted by the Flanders Marine Institute; its year is inferred from the survey dates it describes (2018 and 2019, with surveys planned for 2020) and should be confirmed. A 2026 PNAS paper from the Bradford group on early tree colonisation of southern Doggerland was found but could not be read (HTTP 403), so it is not cited. The Storegga slide position is a map reading.

---

### Sundaland

**Verdict:** Supported

**The claim.** "The exposed shelf formed a large land mass (Sunda Land) connecting the islands of Borneo, Java, and Sumatra with continental Asia during the LGM" (Sathiamurthy & Voris, *Maps of Holocene Sea Level Transgression and Submerged Lakes on the Sunda Shelf*, 2006, p. 1 to 2) [alt-sathiamurthy-voris-2006-tnh]. The shallow shelf under the South China Sea, the Java Sea and the Gulf of Thailand was a lowland that joined the Malay Peninsula, Sumatra, Java and Borneo to mainland Asia whenever sea level fell far enough.

**Who and when.** Harold Voris (Field Museum) mapped Pleistocene shorelines of the Sunda and Sahul shelves from bathymetric contours in 2000 [alt-voris-2000-jbiogeog]. Till Hanebuth, Karl Stattegger and Pieter Grootes dated the Sunda Shelf sea-level record from mangrove and shallow-water sediments in 2000 [alt-hanebuth-2000-science]. Edlic Sathiamurthy and Voris mapped the Holocene flooding stage by stage in 2006 [alt-sathiamurthy-voris-2006-tnh].

Popular claims use this landscape. Stephen Oppenheimer, a physician and geneticist, argued in *Eden in the East* (1998) that the post-glacial flooding of the shelf drove a dispersal that seeded civilisation elsewhere: "As the sea rolled in, there was a mass emigration from the sinking continent." (Oppenheimer, as reproduced on the Bradshaw Foundation book page) [alt-oppenheimer-1998-bradshaw]. Arysio Nunes dos Santos, a Brazilian nuclear physicist, placed Plato's Atlantis on the shelf: "Geology afforded the correct, irrefutable answer: down under the South China Sea, that is where." (Santos, *Atlantis: The Lost Continent Finally Found*, website atlan.org, 1997 to 2005) [alt-santos-atlan-org]. Those claims concern what people did on the shelf; the drowning of the shelf itself is not in dispute.

**What the evidence says.** Present-day depth contours show the old shorelines and drowned river valleys. Voris (2000) drew them at 10, 20, 30, 40, 50, 75, 100 and 120 m and found that over the last 250,000 years sea level stood at or below 40 m below present for more than half of the time, while the full lowstands were brief [alt-voris-2000-jbiogeog].

At the terminal LGM (21 ka) local sea level on the shelf stood at -116 m [alt-sathiamurthy-voris-2006-tnh]. At that level the land above sea level in the mapped region measured about 4.7 million km², against about 2.3 million km² today, so about 2.37 million km² of shelf was dry [alt-sathiamurthy-voris-2006-tnh]. The added land is a little smaller than Argentina.

The flooding followed the global sequence with local timing. Sea level rose slowly to -114 m by 19 ka, then to -96 m by 14.6 ka. Between 14.6 and 14.3 ka it jumped from -96 to -80 m. It reached -64 m by 13.1 ka, stood at -51 m at 10 ka, reached today's level at 6 ka, peaked at +5 m at 4.2 ka and fell back to the modern level by about 1 ka [alt-sathiamurthy-voris-2006-tnh] [alt-hanebuth-2000-science]. The Sunda record of meltwater pulse 1A, as much as 16 m within 300 years, is one of the main constraints on the global event [alt-hanebuth-2000-science].

**Time mismatch.** Oppenheimer's dispersal from a flooded Sundaland is dated in the publisher's description to "the end of the last Ice Age"; the shelf flooded in steps from about 19 ka to 6 ka [alt-sathiamurthy-voris-2006-tnh]. Santos places Atlantis at Plato's date of about 11,600 years ago; between 11 and 10 ka Sunda Shelf sea level stood at roughly -56 to -51 m and the lowland was already shrinking [alt-sathiamurthy-voris-2006-tnh]. Neither claim is dated precisely enough to set against a single evidenced date.

**On the globe.** Evidence: at 21 ka a continuous lowland from the Malay Peninsula across to Borneo, Sumatra and Java; land drowns progressively from 19 to 6 ka, with a +5 m highstand at 4.2 ka. Claim (Santos): Atlantis on the shelf under the South China Sea. Claim (Oppenheimer): a flooded homeland whose people spread to China, India, Mesopotamia and Egypt.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Sunda Shelf (central) | 107.0 | 2.0 | both | Exposed plain; Santos's Atlantis. (map reading) |
| Java Sea | 111.0 | -5.0 | evidence | Drowned lowland between Java and Borneo. (map reading) |
| Gulf of Thailand | 102.0 | 9.0 | evidence | Drowned lowland. (map reading) |

**Open questions.** The dates at which each island became separated from the mainland (for example, when the Java Sea or the Karimata Strait flooded) were not found stated in the sources read; they depend on sill depths that would have to be taken from the Sathiamurthy & Voris maps (the PDF downloaded incompletely, and only the text of the first pages and Table 1 could be read). Oppenheimer's words are taken from the Bradshaw Foundation page, which labels them as his; they were not checked against the printed book (the Internet Archive copy is lending-only).

---

### Beringia

**Verdict:** Supported

**The claim.** "The presently shallow (∼53 m) strait was exposed during the sea level lowstand of the last glacial period, which permitted human migration across a land bridge today referred to as the Bering Land Bridge." (Jakobsson et al., *Post-glacial flooding of the Bering Land Bridge dated to 11 cal ka BP based on new geophysical and sediment records*, Climate of the Past, 2017, abstract) [alt-jakobsson-2017-cp]. When sea level fell below the Bering Strait sill, Siberia and Alaska were joined by a broad plain. The first people to reach the Americas crossed it, and may have lived on it for thousands of years before moving south.

**Who and when.** The Beringian standstill hypothesis was set out from mitochondrial DNA by Tamm and colleagues in 2007 [alt-tamm-2007-plosone]; Hoffecker, Elias and O'Rourke argued in *Science* in 2014 that people lived on the land bridge from about 25,000 to 15,000 years ago, drawing on pollen and plant fossils in sediment cores that show shrub tundra with spruce, birch, willow and alder (as described in the University of Utah release) [alt-utah-2014-release].

**What the evidence says.** The Bering Strait is about 53 m deep today [alt-jakobsson-2017-cp], and global sea level fell about 130 m at the LGM [alt-pico-2020-sciadv]. A nutrient proxy for Pacific water in the Arctic shows the strait was flooded from 46 ka until 35.7 ka (+3.3/-2.4 ka), so the land bridge opened only about 10,000 years before the LGM [alt-farmer-2022-pnas].

The reopening came late in the deglaciation. A core from Herald Canyon on the Chukchi shelf shows a shift from a near-shore setting to Pacific-influenced open marine conditions at about 11 cal ka BP, after the Younger Dryas [alt-jakobsson-2017-cp]. Other records suggest an earlier phase. Pico, Mitrovica and Mix reconcile the two by modelling sea level with the gravitational and crustal effects of the retreating ice; the fit requires substantial melting of the Cordilleran and western Laurentide ice sheets from 13,000 to 11,500 years ago [alt-pico-2020-sciadv].

The genetic evidence points to a pause. Tamm and colleagues found that the ancestors of Native Americans "paused when they reached Beringia", while founder lineages differentiated from their Asian sister clades, and then spread rapidly south [alt-tamm-2007-plosone]. Ancient mitochondrial genomes give an isolation of about 2.4 to 9 thousand years and entry into the Americas around 16.0 ka [alt-llamas-2016-sciadv]. Y-chromosome data give a standstill of 2.7 or 4.6 thousand years and entry south of the ice sheets after 19.5 ka [alt-pinotti-2019-currbiol].

Footprints at White Sands National Park, New Mexico, bracketed by seed layers dated to about 23 to 21 thousand years ago, show people were already south of the ice sheets during the LGM [alt-bennett-2021-science]. Radiocarbon dates on terrestrial pollen and luminescence dates from the same layers confirmed the original ages [alt-pigati-2023-science]. That places people in North America while the land bridge was still dry and the ice sheets near their maximum.

**Time mismatch.** None in the scientific proposition. The duration of the standstill is still debated: estimates run from about 2.4 to 9 thousand years in mitochondrial studies [alt-llamas-2016-sciadv] to 2.7 or 4.6 thousand years in Y-chromosome work [alt-pinotti-2019-currbiol], and the White Sands dates [alt-bennett-2021-science] [alt-pigati-2023-science] require people south of the ice by 23 to 21 ka.

**On the globe.** Evidence: dry land across the Bering Strait from about 35.7 ka until about 11 cal ka BP; the strait sill is about 53 m deep, so it floods when global sea level passes roughly -50 m (about 11 to 12 ka on the global curve, with regional adjustment). Timeline markers: land bridge opens about 35.7 ka; White Sands footprints 23 to 21 ka; Bering Strait reopens about 11 cal ka BP.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Bering Strait | -168.9 | 65.8 | evidence | Sill about 53 m deep. (map reading) |
| Herald Canyon, Chukchi Sea | -175.0 | 72.5 | evidence | Core dating reopening to about 11 cal ka BP. (map reading) |
| White Sands National Park | -106.3 | 32.8 | evidence | LGM-age human footprints. (map reading) |

**Open questions.** The *Science* perspective by Hoffecker, Elias and O'Rourke (2014) could not be read; its content is taken from the University of Utah press release (tier C), and no number in this entry rests on that release alone. The flooding threshold of about -50 m global is inferred from the modern sill depth and ignores the regional sea-level adjustment that Pico et al. model; the architecture should use their reconstruction if a data file is available.

---

### The Black Sea flood debate

**Verdict:** Kernel of truth

**The claim.** "When the Mediterranean rose to the Bosporus sill at 7,150 yr BP, saltwater poured through this spillway to refill the lake and submerge, catastrophically, more than 100,000 km2 of its exposed continental shelf." (Ryan, Pitman, Major, Shimkus, Moskalenko, Jones and others, *An abrupt drowning of the Black Sea shelf*, Marine Geology, 1997, abstract) [alt-ryan-1997-margeo]. During the last glaciation the Black Sea was a freshwater lake whose surface stood far below its outlet. When the rising Mediterranean reached the Bosporus sill, seawater poured in and flooded the exposed shelf within a short time; Ryan and Pitman linked this to flood stories, including Noah's.

**Who and when.** William Ryan and Walter Pitman (Lamont-Doherty) and colleagues proposed the catastrophic flood in 1997, suggesting it may have accelerated the spread of early farmers into Europe [alt-ryan-1997-margeo]. They popularised the idea in the book *Noah's Flood* (1998). Ryan and colleagues revised the timing in 2003 and maintained that "the flood hypothesis for the connecting event best fits the full set of observations" [alt-ryan-2003-areps]. Ali Aksu, Richard Hiscott and colleagues argued from 2002 for persistent outflow and a gradual reconnection [alt-aksu-2002-gsatoday], and restated it in a 2022 review [alt-aksu-hiscott-2022-esr]. Valentina Yanko-Hombach and colleagues argued for a gradual, oscillating rise [alt-yanko-hombach-2006-egu] and edited the 2007 volume *The Black Sea Flood Question* [alt-yanko-hombach-2007-book]. Liviu Giosan and colleagues constrained the pre-connection lake level from the Danube delta in 2009 [alt-giosan-2009-qsr].

**What the evidence says.** Several points are agreed. The Black Sea becomes marine only when the ocean rises above its straits, the Bosporus (about 35 m deep today) and the Dardanelles (about 70 m) [alt-giosan-2009-qsr]. Faunal and geochemical records converge on a rapid change from a fresh-to-brackish lake to the ocean-connected sea around 9400 years ago (about 8400 ¹⁴C years BP) [alt-giosan-2009-qsr]. The date in the 1997 paper, 7150 yr BP, is a radiocarbon age [alt-ryan-1997-margeo]; the revised date of about 8.4 ka cited in the debate is also in radiocarbon years and corresponds to about 9.4 thousand calendar years [alt-giosan-2009-qsr] [alt-yanko-hombach-2006-egu].

The disagreement is over the size of the jump. Ryan and colleagues had the level rising at least 50 m in a few years from about 90 m or more below present [alt-giosan-2009-qsr]. Deltaic deposits in the Danube delta, dated on articulated mollusc shells, put the lake just before reconnection at about 30 m below present sea level, and the authors conclude that if a flood happened at all, the rise and the flooded area were much smaller than first proposed [alt-giosan-2009-qsr].

Aksu and colleagues, using about 7500 line-km of seismic profiles, 65 cores and 43 radiocarbon dates from the Marmara Sea and northern Aegean, found 10 to 11 thousand years of low surface salinity there. They attribute it to continuous Black Sea outflow, and a delta south of the Bosporus exit was built by strong outflow from about 10 to 9 ka. They explain the sudden appearance of Mediterranean molluscs by the slow establishment of two-way flow [alt-aksu-2002-gsatoday]. Their 2022 review holds to a gradual reconnection [alt-aksu-hiscott-2022-esr]. Yanko-Hombach and colleagues reconstruct a lake that rose from about -140 m to -50 m between 16 and 13 ka and to about -20 m by 11 ka, dropped to about -50 m during the Younger Dryas, and rose only gradually to about -20 m after reconnection at about 9.5 ka. They find no change in the archaeological record of the Pontic region that could be linked to a catastrophic flood [alt-yanko-hombach-2006-egu].

The reconnection and the drowning of part of the shelf are real. The size and speed of the rise remain disputed, and the evidence summarised here favours a smaller or more gradual rise than the 1997 proposal. No source read here supports a link to the biblical story.

**Time mismatch.** Claim (1997): catastrophic flooding at 7150 radiocarbon years BP (about 7.5 to 7.6 thousand calendar years). Evidence: marine reconnection around 9400 calendar years ago (about 8400 ¹⁴C BP), accepted by the 2003 revision of the hypothesis [alt-giosan-2009-qsr]. The 1997 date is superseded by the flood hypothesis's own authors.

**On the globe.** Claim: a lake about 90 to 100 m or more below present, its shelf (more than 100,000 km²) flooded in a few years. Evidence: a lake around -30 m (Danube delta) to about -50 m (Yanko-Hombach) before reconnection, with a smaller flooded area. The layer can show two shorelines for about 9.4 ka and label the range. Timeline: reconnection about 9.4 ka (calendar).

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Bosporus | 29.1 | 41.1 | both | Sill about 35 m deep. (map reading) |
| Danube delta | 29.6 | 45.2 | evidence | Constrains pre-reconnection level to about -30 m. (map reading) |
| NW Black Sea shelf | 31.5 | 45.0 | claimed | Shelf Ryan et al. proposed as catastrophically drowned. (map reading) |
| Marmara Sea | 28.0 | 40.7 | evidence | Record of persistent outflow (Aksu et al.). (map reading) |

**Open questions.** Only the abstract of the Aksu & Hiscott 2022 review was reachable. The 2007 Yanko-Hombach volume was not read; it is cited only for its existence and editors. *Noah's Flood* (Ryan & Pitman 1998) was not read and is not quoted. The calibrated equivalent of 7150 ¹⁴C BP is given as "about 7.5 to 7.6 ka" following Aksu et al.'s "ca. 7.5 ka" for the same event; a formal calibration was not run.

---

### Göbekli Tepe as the work of a lost civilisation

**Verdict:** Unsupported

**The claim.** "To me it very strongly speaks of a lost civilisation, transferring their technology, their skills, their knowledge to hunter gatherers" (Graham Hancock, quoting his Netflix series *Ancient Apocalypse*, episode 5, in *Gobekli Tepe: Gradual evolution? Or transfer of technology? Or both?*, grahamhancock.com, 14 April 2024) [alt-hancock-2024-website]. Göbekli Tepe is too sophisticated to have been invented by hunter-gatherers without a long prior history. Its builders learned from survivors of an advanced Ice Age civilisation destroyed in cataclysms between 12,800 and 11,600 years ago.

**Who and when.** Hancock set out the thesis in *Magicians of the Gods* (2015); the publisher's description states that "an advanced civilization that flourished during the Ice Age was destroyed in the global cataclysms between 12,800 and 11,600 years ago" and that survivors "settled at key locations", a list that begins with Göbekli Tepe [alt-hachette-magicians-2015]. Andrew Collins's *Göbekli Tepe: Genesis of the Gods* (Bear & Company, 2014, introduction by Hancock) argues the site was built in response to a global cataclysm and that "it was the Watchers of the Book of Enoch and the Anunnaki gods of Sumerian tradition who created it" (publisher's description) [alt-collins-2014-innertraditions]. Hancock repeated the claim in *Ancient Apocalypse* (2022) [alt-hancock-2024-website].

**What the evidence says.** Göbekli Tepe is a tell in Şanlıurfa province, south-east Turkey, about 90 km east of the Euphrates, excavated since 1995 with the German Archaeological Institute (DAI) running the research project [alt-clare-2020-dai]. It was inscribed on the UNESCO World Heritage List in 2018 [alt-clare-2020-dai]. The site dates to about 9500 to 8000 calBC [alt-clare-2020-dai]. The round-oval enclosures with T-shaped pillars belong to the Pre-Pottery Neolithic A (PPNA, about 9500 to 8700 calBC), and rectangular buildings to the Early Pre-Pottery Neolithic B (EPPNB, about 8700 to 8200 calBC), with the two now known to overlap in time [alt-clare-2020-dai]. In geological terms, 9500 to 8200 BCE is about 11.45 to 10.15 ka.

The excavators describe the builders from what the site contains. The central pillars of Enclosure D stand about 5.5 m tall and carry carved arms, hands, belts and loincloths; a geophysical survey suggests at least 20 enclosures [alt-dietrich-2012-antiquity]. "Since neither domesticated plants nor animals are known from the site", the people who built it were hunter-gatherers [alt-dietrich-2012-antiquity]. Upper Mesopotamia is also where wild einkorn and emmer wheat grow and where their domestication has been located [alt-dietrich-2012-antiquity]. The excavators place it among other PPNA and early PPNB sites of the region with special buildings, such as Mureybet, Jerf el Ahmar, Tell 'Abr 3 and Tell Qaramel, all of the second half of the tenth and the ninth millennia calBC [alt-dietrich-2012-antiquity].

How the buildings were used is a live scientific debate. Klaus Schmidt interpreted the site as a mountain sanctuary without houses [alt-dietrich-2012-antiquity]. Edward Banning (2011) argued that the evidence for purely ritual buildings is equivocal and that the buildings "may actually be houses, albeit ones that are rich in symbolic content" [alt-banning-2011-curranth]. Excavations from 2015 to 2019 found PPNA round houses, EPPNB rectangular domestic buildings with a sub-floor burial of at least three individuals, lithic assemblages typical of domestic contexts, and a rock-cut pit 8 m across and 2.8 m deep that may have been a rainwater cistern. The DAI team concludes that "a revision of the popular scientific view is now unavoidable" [alt-clare-2020-dai]. That debate concerns temples versus houses. It concerns the builders' way of life, and every position in it treats them as local Pre-Pottery Neolithic communities.

No source read here reports artefacts, materials or technology at Göbekli Tepe that fall outside the regional Epipalaeolithic and Neolithic record, or any trace of an earlier advanced culture.

**Time mismatch.** Claim: a lost civilisation destroyed 12,800 to 11,600 years ago, whose survivors transmitted knowledge to Göbekli Tepe's builders. Evidence: construction begins in the PPNA, about 9500 calBC (about 11.45 ka), and the site is used until about 8000 calBC (about 10 ka) by hunter-forager communities [alt-clare-2020-dai] [alt-dietrich-2012-antiquity]. The dates of the site agree in both accounts; the claimed source civilisation has no dated evidence.

**On the globe.** Claim: Göbekli Tepe as one node in a world-wide network of survivor settlements (Baalbek, Giza, Sumer, Mexico, Peru, Indonesia) [alt-hachette-magicians-2015]. Evidence: a local PPNA to EPPNB site, 37.2°N 38.9°E, within the region where wild cereals were first domesticated. Timeline: claimed cataclysms 12.8 and 11.6 ka; evidenced construction from about 11.45 ka.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Göbekli Tepe | 38.9 | 37.2 | both | UNESCO coordinates N37 13 23.7, E38 55 20.5 [alt-unesco-whc-1572] |
| Karacadağ | 39.8 | 37.7 | evidence | Einkorn domestication area cited by Dietrich et al. 2012. (map reading) |

**Open questions.** The *Magicians of the Gods* text itself was not reachable (Internet Archive lending copy); Hancock is quoted from his own website and the publisher's description. Collins's position is taken from his publisher's description, not from the book. Radiocarbon dates for the enclosures were not re-examined here beyond the DAI ranges; Clare (2020) notes earlier dates on fill are mixed because the fill slid in from higher parts of the mound.

---

### Bimini Road

**Verdict:** Contradicted

**The claim.** "And Poseidia will be among the first portions of Atlantis to rise again. Expect it in sixty-eight and sixty-nine ('68 and '69); not so far away!" (Edgar Cayce, reading 958-3, 28 June 1940, in *Atlantis, Vol. 1: A compilation of extracts from the Edgar Cayce readings*, Edgar Cayce Foundation) [alt-cayce-958-3]. A line of rectangular limestone blocks in shallow water off North Bimini, Bahamas, is a road or wall built by Atlanteans, and its discovery fulfilled Cayce's prediction.

**Who and when.** In earlier readings Cayce linked Atlantis to Bimini: reading 996-1 (14 August 1926) calls Bimini "the highest portion left above the waves of once a great continent", and reading 440-5 (20 December 1933) places temples of Poseidia "near what is known as Bimini, off the coast of Florida" [alt-cayce-958-3]. The stone rows were identified in the 1960s and linked to Cayce's readings; J. Manson Valentine publicised the connection [alt-shinn-2004-si]. The Cayce Foundation funded further investigation by Edward Zink [alt-shinn-2004-si].

**What the evidence says.** Eugene Shinn, then running a U.S. Geological Survey field station near Miami, cored the blocks in the mid-1970s in about fifteen feet (4.6 m) of water. The first cores showed the stones are beachrock, beach sand and shell cemented by aragonite within a few years near mid-tide level, the same rock forming on Bimini's swimming beach today [alt-shinn-2004-si]. To test whether blocks had been moved, the team took oriented cores from adjacent stones. X-radiographs of the sawn cores showed the bedding in every stone dipping the same way, toward deep water, and layers of rounded pebbles could be traced from one stone to the next; the stones are still lying where they formed [alt-shinn-2004-si]. No artefacts or other evidence of construction were found at the site [alt-shinn-2004-si].

Radiocarbon dates on the cores, measured at the University of Miami, give whole-rock ages of 2780 ± 70, 3500 ± 80 and 3350 ± 90 ¹⁴C years BP, shells 3510 ± 70, and the cement 2750 ± 80, 2770 ± 80 and 2840 ± 70 ¹⁴C years BP [alt-calvert-1979-radiocarbon]. The shells are older than the cement that binds them, as expected when older beach debris is cemented in place. The cement dates show the beachrock formed about 2800 radiocarbon years ago. Shinn and Marshall McKusick reported ages of 2000 to 4000 years in *Nature* in 1980 [alt-shinn-2004-si]. The blocks sit in about 4.6 m of water; on the global curve, sea level has risen by only about 1 m since 4.2 ka [alt-lambeck-2014-pnas], so the local submergence of a 2800-year-old beach reflects regional relative sea-level history, which is not quantified here.

The rectangular shape comes from the way beachrock breaks. After a beach erodes and the slab is exposed, the rock layers, usually about a foot thick, crack like old concrete into pieces up to twelve feet long [alt-shinn-2004-si]. John Gifford and Mahlon Ball studied the site for the National Geographic Society and published it as submerged beachrock in 1980 [alt-shinn-2004-si].

**Time mismatch.** Claim: remains of Atlantis, which Plato's account would place about 11,600 years ago, expected to "rise" in 1968 and 1969. Evidence: beachrock cemented about 2800 radiocarbon years ago from shells about 3500 radiocarbon years old [alt-calvert-1979-radiocarbon]. At 11.6 ka global sea level stood roughly 50 to 60 m lower [alt-lambeck-2014-table] and the site was dry land well back from any shore.

**On the globe.** Claim: an Atlantean road or harbour wall at Poseidia, off Bimini. Evidence: a natural beachrock outcrop about 4.6 m deep, parallel to the West Bimini shoreline, formed on a late Holocene beach. Timeline: claimed about 11.6 ka; evidenced about 2.8 ka (radiocarbon).

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Bimini Road, off North Bimini | -79.3 | 25.8 | both | (map reading) |

**Open questions.** The brief gave Cayce's prediction as 1938; the Cayce Foundation text dates reading 958-3 to 28 June 1940. The discovery date of 2 September 1968 by Valentine and others appears only in secondary web sources; Shinn (2004) says "the early 1960s". Neither date could be confirmed from an A or B source. The Calvert et al. (1979) date list prints the core location as 26°0'N, 77°30'W, which does not fall at Bimini (about 79.3°W); it is probably a misprint. Gifford & Ball (1980), McKusick & Shinn (1980, *Nature* 287: 11 to 12), Shinn (1978, *Sea Frontiers*), Harrison (1971, *Nature* 230: 287 to 289) and Shinn (2009, IAS Special Publication 41) could not be fetched; they are described here only through Shinn (2004) and the date list.

---

### Yonaguni Monument

**Verdict:** Unsupported

**The claim.** "The largest structure looks like a complicated, monolithic, stepped pyramid that rises from a depth of 25 meters" (Masaaki Kimura, University of the Ryukyus, quoted by Julian Ryall in *National Geographic*, 19 September 2007) [alt-ryall-2007-natgeo]. Terraced rock formations off the south coast of Yonaguni, the westernmost island of Japan, are the remains of a city built by people, including castles, a stadium, roads and water channels.

**Who and when.** Masaaki Kimura, a marine geologist at the University of the Ryukyus, has argued since the 1990s that the formations are artificial. He dates them to about 5000 years ago and proposes they sank in an earthquake about 2000 years ago, and he identifies ten structures off Yonaguni and five near Okinawa [alt-ryall-2007-natgeo]. Robert Schoch, a geologist at Boston University who dived at the site, concluded "I'm not convinced that any of the major features or structures are manmade steps or terraces, but that they're all natural" [alt-ryall-2007-natgeo].

**What the evidence says.** The Geological Survey of Japan map of the island shows it built of the Miocene Yaeyama Group, overlain by the Pleistocene Ryukyu Group limestones [alt-yazaki-1982-gsj]. The youngest Yaeyama unit, the Aragabana (Arakawabana) Formation, crops out on the south-east coast and is an alternation of sandstone and shale more than 300 m thick [alt-yazaki-1982-gsj]. The rocks are cut by two fault systems into horsts, grabens and tilted blocks, and the Yaeyama beds dip 10 to 30° east on the east side of the island [alt-yazaki-1982-gsj]. A 2020 study of the island's geosites describes wave-cut platforms formed in the sandstone and fault scarps shaped by normal faulting and jointing [alt-ogata-2020-ejgeo].

Bedded sandstone crossed by joints and faults breaks into flat steps with straight edges and right-angled faces. Schoch's explanation rests on this: "It's basic geology and classic stratigraphy for sandstones, which tend to break along planes" [alt-ryall-2007-natgeo]. The monument shows the same rock and structures as the island's coastal cliffs and platforms.

Sea level constrains when the site could have been dry. Kimura describes the main structure as rising from a depth of 25 m [alt-ryall-2007-natgeo]; no A or B survey of its depth was found. Global sea level stood about 40 m lower at 10 ka and about 10 to 15 m lower at 8 ka [alt-lambeck-2014-table], so if the island has not moved vertically, rock at that depth would have been land before roughly 9 ka and awash as the sea rose past it. At Kimura's date of about 5000 years ago global sea level was within a few metres of today [alt-lambeck-2014-pnas], so his account needs about 25 m of local subsidence in the last 2000 years. No A or B source read here measures vertical motion at Yonaguni over that period.

No peer-reviewed geological or archaeological study read here supports an artificial origin. Tier A and B sources on the monument itself are thin: the geology is well documented for the island, but the case for and against human shaping of the specific formation rests on Kimura's and Schoch's statements as reported in journalism.

**Time mismatch.** Claim: built about 5000 years ago, sunk about 2000 years ago [alt-ryall-2007-natgeo]. Evidence: the rock is Miocene sandstone and shale (Middle Miocene in the Geological Survey of Japan account) [alt-yazaki-1982-gsj], and the formation would have been dry land before about 9 ka if the island has not moved vertically [alt-lambeck-2014-table].

**On the globe.** Claim: a drowned city with a stepped pyramid off southern Yonaguni. Evidence: jointed and faulted Miocene Yaeyama Group sandstone on a tectonically active island, the same rock as the coastal cliffs. Timeline: claimed construction about 5 ka; the rock is Miocene; possible exposure above sea level before about 9 ka.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Yonaguni Monument, off Arakawabana | 123.0 | 24.4 | both | (map reading) |

**Open questions.** Kimura's own publications (in Japanese) were not reached, so the claim is represented through a 2007 *National Geographic* article (tier C). Schoch's own written assessment was not fetched; his view is taken from the same article. The brief describes the rock as Early Miocene; the Geological Survey of Japan explanatory text (Yazaki 1982) calls the Yaeyama Group Middle Miocene, and its lowest unit contains *Praeorbulina glomerosa curva*, a foraminifer from around the Early to Middle Miocene boundary. A modern age for the Aragabana Formation was not found. Vertical tectonic motion at Yonaguni over the Holocene was not found in an A or B source.

---

### Pavlopetri (contrast: a drowned town)

**Verdict:** Supported

**The claim.** "In 1967 Nic Flemming of the Institute of Oceanography, University of Southampton, discovered submerged ruins just off the coast" of south-east Laconia (University of Nottingham, Pavlopetri Underwater Archaeology Project, *Project background*) [alt-nottingham-pavlopetri-background]. Pavlopetri is a real prehistoric town whose streets, buildings and graves now lie in shallow water. It is included as a contrast: this is what a drowned settlement looks like when archaeologists survey it.

**Who and when.** Flemming found the site in 1967, and a Cambridge University team surveyed it over six weeks in 1968 using a fixed grid and hand tapes [alt-nottingham-pavlopetri-background]. The University of Nottingham's Pavlopetri Underwater Archaeology Project resurveyed it from 2009 [alt-nottingham-pavlopetri-2009].

**What the evidence says.** The remains cover about 300 by 150 m in one to four metres of water. The 1968 survey recorded at least fifteen buildings made up of rooms, courtyards, streets, two chamber tombs and at least thirty-seven cist graves [alt-nottingham-pavlopetri-background]. In 2009 a sector-scan sonar and shore-based total stations recorded the known buildings and found more than 9000 m² of new ones, including a large rectangular hall and a street lined with buildings [alt-nottingham-pavlopetri-2009].

The finds date the town. Pottery indicates occupation throughout the Bronze Age from at least 3000 BC to 1100 BC, and Final Neolithic pottery shows activity from at least the mid-fourth millennium BC [alt-nottingham-pavlopetri-2009]. Surface finds from the first survey ran from the Early to Late Bronze Age (about 2800 to 1180 BC), with most visible structures thought to be Mycenaean (1650 to 1180 BC) [alt-nottingham-pavlopetri-background]. The site has what the Bimini and Yonaguni formations lack: walls of set stones, room plans, tombs, graves and datable pottery in place.

Its depth also fits the sea-level record. Global sea level rose about 3 m between 6.7 and 4.2 ka and by 1 m or less after that [alt-lambeck-2014-pnas]. A town occupied from about 5.5 ka to about 3.1 ka and now at one to four metres depth needs only a few metres of relative sea-level rise, which a combination of late Holocene sea-level rise and local land movement could supply. The local cause is not established here (see Open questions).

**Time mismatch.** None.

**On the globe.** Evidence: a Bronze Age coastal town at the west end of the Bay of Vatika, opposite Elaphonisos, south-east Laconia, now 1 to 4 m under water. Timeline: activity from the mid-fourth millennium BC (about 5.5 ka), Bronze Age town about 3000 to 1100 BC.

**Places.**
| Place | Modern lon | Modern lat | Role (claimed / evidence / both) | Note |
| --- | --- | --- | --- | --- |
| Pavlopetri, Bay of Vatika | 23.0 | 36.5 | evidence | (map reading) |

**Open questions.** The cause and date of Pavlopetri's submergence were not established from a source read here. The Nottingham project lists the question as a research aim. A 2024 paper by Kolaiti and Mourtzas on late Holocene transgression in Vatika Bay addresses it but could not be read; secondary summaries attribute most of the relative rise to co-seismic subsidence, which remains unverified here. The peer-reviewed project chapter (Henderson, Gallou, Flemming & Spondylis 2011, in *Submerged Prehistory*, Oxbow) was not fetched.

## 8. Places and plates

Every place in the entries above, with the plate it rides on in `js/geometry.js`. "Inside" means the
point falls inside the plate outline. "Coast" means it falls within two degrees of the outline, which
covers islands and shelves drawn slightly offshore. "None" means no outline covers it.

A missing plate does not matter for places younger than a few million years, which the layer draws on
today's globe at their modern coordinates (see `docs/layers-architecture.md`, section 3.2). It does
matter for four groups of deep-time evidence places, which need a plate before they can be shown
moving:

- **Mauritius, the Mascarene Plateau and the Seychelles** (Mauritia) left Madagascar with India
  about 84 Ma. Riding on IND is the closer fit; MAD is the other option.
- **Zealandia** (New Zealand, New Caledonia, Lord Howe Rise, Campbell Plateau): the README already
  has New Zealand riding on AUS, with no outline.
- **Kerguelen Plateau and Elan Bank**: ANT is the nearest fit.
- **Sri Lanka**: IND.

The Isthmus of Panama is matched to SAM only because it lies within two degrees of that outline. It
belongs to neither of the ten plates.

| Section | Entry | Place | Lon | Lat | Role | Plate | How assigned |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3 | Land bridges and sunken continents | Gondwana region, central India | 79.0 | 22.5 | both | IND | inside |
| 3 | Land bridges and sunken continents | Karoo Basin, South Africa | 22.5 | -32.3 | both | AFR | inside |
| 3 | Land bridges and sunken continents | Paraná Basin, southern Brazil | -51.0 | -24.0 | both | SAM | inside |
| 3 | Land bridges and sunken continents | South Atlantic, representative point | -15.0 | -15.0 | claimed | none | no outline; nearest is AFR 20° away |
| 3 | Land bridges and sunken continents | Western Indian Ocean between Madagascar and India | 60.0 | -5.0 | claimed | none | no outline; nearest is MAD 14° away |
| 3 | Land bridges and sunken continents | Isthmus of Panama | -79.5 | 9.0 | claimed | SAM | coast, 1.1° |
| 3 | Lemuria (Sclater's sunken continent) | Madagascar, centre | 46.9 | -19.0 | both | MAD | inside |
| 3 | Lemuria (Sclater's sunken continent) | East coast of Madagascar, representative point | 48.5 | -18.0 | evidence | MAD | inside |
| 3 | Lemuria (Sclater's sunken continent) | Southern India | 77.0 | 11.0 | both | IND | inside |
| 3 | Lemuria (Sclater's sunken continent) | Sri Lanka | 80.7 | 7.9 | claimed | none | no outline; nearest is IND 3° away |
| 3 | Lemuria (Sclater's sunken continent) | Sumatra | 101.0 | 0.0 | claimed | none | no outline; nearest is CHI 10° away |
| 3 | Lemuria (Sclater's sunken continent) | Mauritius | 57.6 | -20.3 | both | none | no outline; nearest is MAD 7° away |
| 3 | Lemuria (Sclater's sunken continent) | Mozambique Channel | 41.5 | -18.0 | evidence | MAD | coast, 1.4° |
| 3 | Lemuria (Sclater's sunken continent) | Cape Verde Islands | -23.6 | 15.1 | claimed | none | no outline; nearest is AFR 6° away |
| 3 | Lemuria (Sclater's sunken continent) | Society Islands | -149.8 | -17.5 | claimed | none | no outline; nearest is NAM 56° away |
| 3 | Expanding Earth | Berlin | 13.4 | 52.5 | claimed | EUR | inside |
| 3 | Expanding Earth | Hobart, University of Tasmania | 147.3 | -42.9 | claimed | none | no outline; nearest is AUS 5° away |
| 3 | Expanding Earth | Mariana Trench | 142.2 | 11.3 | evidence | none | no outline; nearest is AUS 23° away |
| 3 | Expanding Earth | Pigafetta Basin (ODP Site 801), representative point | 156.4 | 18.6 | evidence | none | no outline; nearest is SIB 31° away |
| 3 | Expanding Earth | Pacific Ocean, centre | -150.0 | 0.0 | both | none | no outline; nearest is NAM 46° away |
| 3 | Wegener's continental drift | Frankfurt am Main | 8.7 | 50.1 | claimed | EUR | inside |
| 3 | Wegener's continental drift | Marburg | 8.8 | 50.8 | claimed | EUR | inside |
| 3 | Wegener's continental drift | Karoo Basin, South Africa | 22.5 | -32.3 | both | AFR | inside |
| 3 | Wegener's continental drift | Paraná Basin (Santa Catarina), Brazil | -50.5 | -27.0 | both | SAM | inside |
| 3 | Wegener's continental drift | Mid-Atlantic Ridge, representative point | -30.0 | 25.0 | evidence | none | no outline; nearest is AFR 12° away |
| 3 | Zealandia | Zealandia, representative centre | 170.0 | -40.0 | both | none | no outline; nearest is AUS 15° away |
| 3 | Zealandia | Aoraki / Mount Cook | 170.1 | -43.6 | evidence | none | no outline; nearest is AUS 16° away |
| 3 | Zealandia | New Caledonia | 165.6 | -21.3 | evidence | none | no outline; nearest is AUS 12° away |
| 3 | Zealandia | Lord Howe Rise, representative point | 162.0 | -30.0 | evidence | none | no outline; nearest is AUS 8° away |
| 3 | Zealandia | Campbell Plateau, representative point | 171.0 | -51.0 | evidence | none | no outline; nearest is AUS 19° away |
| 3 | Zealandia | Chatham Islands | -176.5 | -44.0 | evidence | none | no outline; nearest is ANT 36° away |
| 3 | Mauritia and the Kerguelen Plateau | Mauritius | 57.6 | -20.3 | evidence | none | no outline; nearest is MAD 7° away |
| 3 | Mauritia and the Kerguelen Plateau | Cargados Carajos Shoals | 59.6 | -16.6 | evidence | none | no outline; nearest is MAD 9° away |
| 3 | Mauritia and the Kerguelen Plateau | Saya de Malha Bank, representative point | 61.0 | -10.5 | evidence | none | no outline; nearest is MAD 12° away |
| 3 | Mauritia and the Kerguelen Plateau | Seychelles (Mahé) | 55.5 | -4.6 | evidence | none | no outline; nearest is MAD 11° away |
| 3 | Mauritia and the Kerguelen Plateau | Réunion | 55.5 | -21.1 | evidence | none | no outline; nearest is MAD 5° away |
| 3 | Mauritia and the Kerguelen Plateau | Laxmi Ridge, representative point | 67.0 | 17.5 | evidence | none | no outline; nearest is IND 4° away |
| 3 | Mauritia and the Kerguelen Plateau | Central-east Madagascar | 48.0 | -19.0 | evidence | MAD | inside |
| 3 | Mauritia and the Kerguelen Plateau | Elan Bank, ODP Site 1137 | 68.1 | -56.8 | evidence | none | no outline; nearest is ANT 10° away |
| 3 | Mauritia and the Kerguelen Plateau | Kerguelen Islands | 69.3 | -49.3 | evidence | none | no outline; nearest is ANT 18° away |
| 4 | Atlantis in the mid-Atlantic | Strait of Gibraltar (Pillars of Heracles) | -5.6 | 36.0 | claimed | EUR | coast, 0.2° |
| 4 | Atlantis in the mid-Atlantic | Azores, Mid-Atlantic Ridge | -28.0 | 38.5 | both | none | no outline; nearest is EUR 15° away |
| 4 | Atlantis in the mid-Atlantic | St Paul's Rocks | -29.3 | 0.9 | claimed | none | no outline; nearest is SAM 10° away |
| 4 | Atlantis in the mid-Atlantic | Ascension Island | -14.4 | -7.9 | claimed | none | no outline; nearest is AFR 13° away |
| 4 | Atlantis in the mid-Atlantic | Tristan da Cunha | -12.3 | -37.1 | claimed | none | no outline; nearest is AFR 25° away |
| 4 | Atlantis in the mid-Atlantic | Iceland (Krafla) | -16.8 | 65.7 | evidence | none | no outline; nearest is NAM 5° away |
| 4 | Atlantis in the mid-Atlantic | Santorini (Thera) | 25.4 | 36.4 | evidence | none | no outline; nearest is EUR 5° away |
| 4 | Atlantis in the mid-Atlantic | Knossos, Crete | 25.2 | 35.3 | evidence | none | no outline; nearest is AFR 4° away |
| 4 | The Richat Structure as Atlantis | Richat Structure (Guelb er Richat) | -11.5 | 21.0 | both | AFR | inside |
| 4 | The Richat Structure as Atlantis | Cap Blanc, off ODP Site 658 | -17.1 | 20.8 | evidence | AFR | coast, 0.1° |
| 4 | The Richat Structure as Atlantis | Strait of Gibraltar | -5.6 | 36.0 | claimed | EUR | coast, 0.2° |
| 4 | Mu, the lost Pacific continent | Hawaii (Big Island) | -155.5 | 19.6 | both | none | no outline; nearest is NAM 36° away |
| 4 | Mu, the lost Pacific continent | Kauai | -159.5 | 22.1 | evidence | none | no outline; nearest is NAM 34° away |
| 4 | Mu, the lost Pacific continent | Kimmei Seamount, Hawaiian-Emperor bend | 171.6 | 33.7 | evidence | none | no outline; nearest is SIB 26° away |
| 4 | Mu, the lost Pacific continent | Detroit Seamount, northern Emperor chain | 167.6 | 51.0 | evidence | none | no outline; nearest is SIB 9° away |
| 4 | Mu, the lost Pacific continent | Easter Island | -109.4 | -27.1 | claimed | none | no outline; nearest is SAM 32° away |
| 4 | Mu, the lost Pacific continent | Fiji | 178.0 | -17.8 | claimed | none | no outline; nearest is AUS 25° away |
| 4 | Mu, the lost Pacific continent | Pigafetta Basin, western Pacific | 156.0 | 18.0 | evidence | none | no outline; nearest is SIB 31° away |
| 4 | Mu, the lost Pacific continent | Museo de America, Madrid | -3.7 | 40.4 | evidence | EUR | inside |
| 4 | Mu, the lost Pacific continent | Chichen Itza, Yucatan | -88.6 | 20.7 | claimed | NAM | inside |
| 4 | Kumari Kandam, the drowned Tamil homeland | Kanyakumari (Cape Comorin) | 77.5 | 8.1 | claimed | IND | coast, 0.1° |
| 4 | Kumari Kandam, the drowned Tamil homeland | Indian Ocean south of India | 77.5 | 0.0 | claimed | none | no outline; nearest is IND 8° away |
| 4 | Kumari Kandam, the drowned Tamil homeland | Kerguelen Islands | 69.5 | -49.3 | claimed | none | no outline; nearest is ANT 18° away |
| 4 | Kumari Kandam, the drowned Tamil homeland | Madagascar | 46.9 | -18.8 | claimed | MAD | inside |
| 4 | Kumari Kandam, the drowned Tamil homeland | Sumatra | 101.0 | 0.0 | claimed | none | no outline; nearest is CHI 10° away |
| 4 | Kumari Kandam, the drowned Tamil homeland | Palk Strait | 79.8 | 10.0 | evidence | IND | coast, 0.9° |
| 4 | Kumari Kandam, the drowned Tamil homeland | Gulf of Mannar | 79.0 | 8.5 | evidence | IND | coast, 0.7° |
| 4 | Kumari Kandam, the drowned Tamil homeland | Adam's Bridge | 79.3 | 9.3 | evidence | IND | coast, 0.7° |
| 4 | Ram Setu (Adam's Bridge) as a built causeway | Adam's Bridge (centre of NASA ASTER scene) | 79.3 | 9.3 | both | IND | coast, 0.7° |
| 4 | Ram Setu (Adam's Bridge) as a built causeway | Dhanushkodi, Pamban (Rameswaram) Island | 79.4 | 9.2 | both | IND | coast, 0.8° |
| 4 | Ram Setu (Adam's Bridge) as a built causeway | Talaimannar, Mannar Island | 79.7 | 9.1 | both | IND | coast, 1.2° |
| 4 | Ram Setu (Adam's Bridge) as a built causeway | Palk Strait | 79.8 | 10.0 | evidence | IND | coast, 0.9° |
| 4 | The Gulf of Khambhat "submerged city" | Gulf of Khambhat site area, west of Hazira | 72.3 | 21.1 | both | IND | inside |
| 4 | The Gulf of Khambhat "submerged city" | Hazira, near Surat | 72.6 | 21.1 | evidence | IND | inside |
| 5 | Earth crust displacement | Hudson Bay pole | -83.0 | 60.0 | claimed | NAM | inside |
| 5 | Earth crust displacement | Greenland Sea pole | 10.0 | 73.0 | claimed | none | no outline; nearest is EUR 4° away |
| 5 | Earth crust displacement | EPICA Dome C | 123.4 | -75.1 | evidence | ANT | inside |
| 5 | Earth crust displacement | Allan Hills blue ice area | 159.7 | -76.7 | evidence | ANT | inside |
| 5 | Antarctica as Atlantis | Antarctica (continent centre) | 0.0 | -90.0 | both | none | no outline; nearest is ANT 10° away |
| 5 | Antarctica as Atlantis | EPICA Dome C | 123.4 | -75.1 | evidence | ANT | inside |
| 5 | Antarctica as Atlantis | Kohnen station, Queen Maud Land | 0.1 | -75.0 | evidence | ANT | inside |
| 5 | Antarctica as Atlantis | Allan Hills blue ice area | 159.7 | -76.7 | evidence | ANT | inside |
| 5 | Antarctica as Atlantis | Ross Sea drill site (Galeotti et al.) | 165.0 | -77.0 | evidence | ANT | inside |
| 5 | The Piri Reis map and an ice-free Queen Maud Land | Topkapı Palace Museum Library, Istanbul | 29.0 | 41.0 | evidence | EUR | coast, 0.7° |
| 5 | The Piri Reis map and an ice-free Queen Maud Land | Gelibolu (Gallipoli) | 26.7 | 40.4 | evidence | EUR | coast, 0.6° |
| 5 | The Piri Reis map and an ice-free Queen Maud Land | Princess Martha Coast, Queen Maud Land | -10.0 | -70.5 | claimed | ANT | coast, 0.2° |
| 5 | The Piri Reis map and an ice-free Queen Maud Land | Tristan da Cunha | -12.3 | -37.1 | evidence | none | no outline; nearest is AFR 25° away |
| 5 | The Piri Reis map and an ice-free Queen Maud Land | Kohnen station, Queen Maud Land | 0.1 | -75.0 | evidence | ANT | inside |
| 5 | Younger Dryas impact and a lost Ice Age civilisation | Northern North America, Laurentide ice sheet | -85.0 | 55.0 | claimed | NAM | inside |
| 5 | Younger Dryas impact and a lost Ice Age civilisation | NGRIP drill site, Greenland | -42.3 | 75.1 | evidence | NAM | inside |
| 5 | Younger Dryas impact and a lost Ice Age civilisation | Lake Agassiz basin | -97.0 | 50.0 | evidence | NAM | inside |
| 6 | Pyramids on both sides of the Atlantic | Saqqara, Step Pyramid of Djoser | 31.2 | 29.9 | both | AFR | inside |
| 6 | Pyramids on both sides of the Atlantic | Giza, Great Pyramid | 31.1 | 30.0 | both | AFR | inside |
| 6 | Pyramids on both sides of the Atlantic | El-Kurru, Sudan | 31.8 | 18.4 | evidence | AFR | inside |
| 6 | Pyramids on both sides of the Atlantic | Nuri, Sudan | 31.9 | 18.6 | evidence | AFR | inside |
| 6 | Pyramids on both sides of the Atlantic | Meroë, Sudan | 33.7 | 16.9 | evidence | AFR | inside |
| 6 | Pyramids on both sides of the Atlantic | La Venta, Tabasco | -94.0 | 18.1 | evidence | NAM | inside |
| 6 | Pyramids on both sides of the Atlantic | Teotihuacan, Sun Pyramid | -98.8 | 19.7 | both | NAM | inside |
| 6 | Pyramids on both sides of the Atlantic | Cholula, Great Pyramid | -98.3 | 19.1 | both | NAM | inside |
| 6 | Megaliths across Europe and beyond | Carnac and Gulf of Morbihan | -3.1 | 47.6 | both | EUR | coast, 0.4° |
| 6 | Megaliths across Europe and beyond | Passy, Paris Basin | 3.4 | 48.2 | evidence | EUR | inside |
| 6 | Megaliths across Europe and beyond | Coldrum, Kent | 0.4 | 51.3 | evidence | EUR | inside |
| 6 | Megaliths across Europe and beyond | Stonehenge | -1.8 | 51.2 | both | EUR | inside |
| 6 | Megaliths across Europe and beyond | Gochang dolmens | 126.6 | 35.4 | both | none | no outline; nearest is CHI 5° away |
| 6 | Megaliths across Europe and beyond | Hwasun dolmens | 126.9 | 34.9 | both | none | no outline; nearest is CHI 5° away |
| 6 | Megaliths across Europe and beyond | Ganghwa dolmens | 126.5 | 37.7 | both | none | no outline; nearest is CHI 3° away |
| 6 | Ley lines | Hereford and the Wye valley | -2.7 | 52.1 | claimed | EUR | inside |
| 6 | Ley lines | West Cornwall | -5.5 | 50.1 | evidence | EUR | coast, 0.0° |
| 6 | Global site-alignment grids | Giza | 31.1 | 30.0 | claimed | AFR | inside |
| 6 | Global site-alignment grids | Stonehenge | -1.8 | 51.2 | claimed | EUR | inside |
| 6 | Global site-alignment grids | Teotihuacan | -98.8 | 19.7 | claimed | NAM | inside |
| 6 | Gunung Padang, West Java | Gunung Padang, Cianjur, West Java | 107.1 | -7.0 | both | none | no outline; nearest is AUS 16° away |
| 6 | The Bosnian pyramids, Visoko | Visočica hill, Visoko | 18.2 | 44.0 | both | EUR | inside |
| 7 | Post-glacial sea-level rise since the Last Glacial Maximum | Barbados | -59.6 | 13.2 | evidence | none | no outline; nearest is SAM 4° away |
| 7 | Post-glacial sea-level rise since the Last Glacial Maximum | Tahiti | -149.4 | -17.7 | evidence | none | no outline; nearest is NAM 56° away |
| 7 | Post-glacial sea-level rise since the Last Glacial Maximum | Sunda Shelf | 107.0 | 2.0 | evidence | none | no outline; nearest is CHI 8° away |
| 7 | Post-glacial sea-level rise since the Last Glacial Maximum | Bonaparte Gulf, NW Australia | 128.5 | -13.5 | evidence | AUS | coast, 0.2° |
| 7 | Doggerland | Leman and Ower Banks | 2.0 | 53.2 | evidence | EUR | inside |
| 7 | Doggerland | Dogger Bank | 2.5 | 54.8 | evidence | EUR | inside |
| 7 | Doggerland | Brown Bank | 3.3 | 52.6 | evidence | EUR | inside |
| 7 | Doggerland | Storegga slide, off Møre, Norway | 5.0 | 63.5 | evidence | EUR | coast, 1.1° |
| 7 | Sundaland | Sunda Shelf (central) | 107.0 | 2.0 | both | none | no outline; nearest is CHI 8° away |
| 7 | Sundaland | Java Sea | 111.0 | -5.0 | evidence | none | no outline; nearest is CHI 16° away |
| 7 | Sundaland | Gulf of Thailand | 102.0 | 9.0 | evidence | none | no outline; nearest is CHI 2° away |
| 7 | Beringia | Bering Strait | -168.9 | 65.8 | evidence | NAM | coast, 0.4° |
| 7 | Beringia | Herald Canyon, Chukchi Sea | -175.0 | 72.5 | evidence | none | no outline; nearest is NAM 5° away |
| 7 | Beringia | White Sands National Park | -106.3 | 32.8 | evidence | NAM | inside |
| 7 | The Black Sea flood debate | Bosporus | 29.1 | 41.1 | both | EUR | coast, 0.7° |
| 7 | The Black Sea flood debate | Danube delta | 29.6 | 45.2 | evidence | EUR | inside |
| 7 | The Black Sea flood debate | NW Black Sea shelf | 31.5 | 45.0 | claimed | EUR | inside |
| 7 | The Black Sea flood debate | Marmara Sea | 28.0 | 40.7 | evidence | EUR | coast, 0.3° |
| 7 | Göbekli Tepe as the work of a lost civilisation | Göbekli Tepe | 38.9 | 37.2 | both | none | no outline; nearest is AFR 6° away |
| 7 | Göbekli Tepe as the work of a lost civilisation | Karacadağ | 39.8 | 37.7 | evidence | none | no outline; nearest is EUR 6° away |
| 7 | Bimini Road | Bimini Road, off North Bimini | -79.3 | 25.8 | both | NAM | coast, 0.7° |
| 7 | Yonaguni Monument | Yonaguni Monument, off Arakawabana | 123.0 | 24.4 | both | none | no outline; nearest is CHI 4° away |
| 7 | Pavlopetri (contrast: a drowned town) | Pavlopetri, Bay of Vatika | 23.0 | 36.5 | evidence | none | no outline; nearest is EUR 4° away |

## 9. Open questions across the entries

Each entry ends with its own open questions. These are the ones that affect more than one entry, or
that must be settled before anything is shown to readers.

- **Coordinates.** Most places are representative points read from a map. Check every one against a
  gazetteer before it becomes a marker.
- **The sea-level table** (first entry of section 7) was read from Lambeck et al. 2014, figure 4, and
  checked against the totals the paper gives for each interval. It carries about 5 m of uncertainty.
  The paper's numeric curve (supplementary table S3) could not be downloaded; import it directly
  before building coastlines.
- **Corrections to the brief.** Edgar Cayce's Atlantis reading is 958-3, dated 28 June 1940, not
  1938. The revised Black Sea date of "8.4 ka" is in radiocarbon years, about 9.4 ka in calendar
  years. The Geological Survey of Japan gives the Yaeyama Group at Yonaguni as Middle Miocene, not
  Early Miocene. The A source read for Madagascar leaving Africa (Rabinowitz et al. 1983) gives the
  Middle Jurassic, and the brief's figure of about 160 Ma was not confirmed at tier A or B. The
  Central Atlantic began to open at about 190 Ma (Labails et al. 2010), earlier than the brief's 180.
- **Numbers that are calculations.** Two figures are this research's own arithmetic from sourced
  numbers, labelled where they appear: about 100 km of radius growth over 400 million years at the
  highest measured rate (Expanding Earth), and the share of the globe within 50 km of a
  Becker-Hagens great circle (Global site-alignment grids). Neither should be shown as a sourced figure.
- **Texts not reached.** Carey's 1958 and 1976 books, the Flem-Aths' *When the Sky Fell*, Michell's
  *The View Over Atlantis*, Ramaswamy's 2004 book, Hancock's *Magicians of the Gods*, Kimura's own
  writing on Yonaguni, and several papers read only as abstracts or records (Hess 1962, Vine and
  Matthews 1963, Pinter et al. 2011, Hoffecker et al. 2014, Gifford and Ball 1980). Where these are
  cited, the entry says what was read.
- **Thin sources.** No peer-reviewed test of the global grids was found. Tier A or B sources on the
  Yonaguni formation itself are few. No fetched A or B source dates the Ram Setu shoals directly.
- **A date on tier C only.** The "late 1960s" acceptance of plate tectonics rests on a tier C page in
  this pass and needs an A or B source before it is shown as a date.
- **Lemuria has two versions.** Sclater's 1864 hypothesis is a scientific precursor. The Theosophical
  Lemuria of Blavatsky and Scott-Elliot, a Pacific continent of root races, would be Contradicted if
  the layer gives it its own entry.

## 10. Source records

196 records. The full records, with dimension scores, links and access dates, are in
`docs/alt-views-sources.json`. Scores are in the order prov, exp, rev, data, cite, corr, meth, coi, rec.

| id | Author, year | Tier | Total | Scores | Cited for |
| --- | --- | --- | --- | --- | --- |
| alt-abdeina-2024-lithos | Abdeina, E. H., Jourdan, F., Chazot, G., Bertrand, H. and Le, 2024 | A | 17 | 222221222 | Gabbro sills intruded 230 to 200 Ma (CAMP); 99 Ma carbonatites; alkaline doming about 100 Myr later made the 40 km dome; erosion since |
| alt-adams-csun-solon | Adams, John Paul (California State University, Northridge), n.d. | B | 13 | 221112022 | Solon was archon at Athens in 594 BCE |
| alt-aksu-2002-gsatoday | Aksu, A. E., Hiscott, R. N., Mudie, P. J., Rochon, A., Kamin, 2002 | A | 17 | 222221222 | Gradual reconnection; 10-11 kyr of low Marmara surface salinity; Bosporus-exit delta active 10 to 9 ka; 7500 line-km seismic, 65 cores, 43 dates |
| alt-aksu-hiscott-2022-esr | Aksu, A. E., Hiscott, R. N., 2022 | A | 15 | 222121122 | The gradual-reconnection position restated in 2022 |
| alt-ali-hedges-2024-annrev | Ali, J. R.; Hedges, S. B., 2024 | A | 16 | 222122122 | Madagascar has been an island since 85 Mya, 430 km from Africa; 26 of 30 land-vertebrate lineages arrived by overwater dispersal between 69 and 0 Mya; two are G |
| alt-ali-huber-2010-nature | Ali, J. R.; Huber, M., 2010 | A | 17 | 222221222 | Palaeogene surface currents flowed east from Mozambique and Tanzania toward Madagascar, making rafting possible; evidence is inconsistent with a land bridge |
| alt-ali-krause-2011-jbiogeog | Ali, J. R.; Krause, D. W., 2011 | A | 17 | 222122222 | Geophysical and bathymetric evidence rules out Late Cretaceous land causeways from Madagascar and India to Antarctica (Gunnerus Ridge, Kerguelen Plateau); Conra |
| alt-arp-2024-retraction | Archaeological Prospection editors (E. Ernenwein, G. Tsokas), 2024 | B | 14 | 221112122 | Retraction and its stated reason: dated soils not associated with anthropogenic features |
| alt-ashwal-2017-ncomms | Ashwal, L. D.; Wiedenbeck, M.; Torsvik, T. H., 2017 | A | 18 | 222222222 | Archaean zircons 2.5 to 3.0 Ga in a 5.7 Ma trachyte on Mauritius; crust of central-east Madagascar affinity, now about 700 km west; Mascarene Basin opened about |
| alt-banning-2011-curranth | Banning, E. B., 2011 | A | 16 | 222122122 | Scientific alternative: the buildings may be houses rich in symbolic content |
| alt-bbc-2002-cambay | Housden, Tom, 2002 | C | 10 | 211011022 | How the Khambhat claim was reported: 36 m depth, city five by two miles, debris dated nearly 9,500 years, discovered by NIOT; response of Justin Morris (British |
| alt-becker-hagens-grid | Becker, W., Hagens, B., 1984 | D | 8 | 100210112 | What Becker and Hagens proposed: grid anchored to the poles and the Great Pyramid; 121 great circles, 4,862 points |
| alt-bennett-2021-science | Bennett, M. R., Bustos, D., Pigati, J. S., et al., 2021 | A | 17 | 222221222 | White Sands footprints bracketed by seed layers dated about 23 to 21 ka |
| alt-besse-courtillot-2002-jgr | Besse, J. and Courtillot, V., 2002 | A | 16 | 222221221 | True polar wander is episodic, 30 to 50 km/Myr in fast tracks, about 30 degrees total in 200 Myr, no superfast episodes |
| alt-bird-hall-2016-gji | Bird, D. E., Hall, S. A., 2016 | A | 17 | 222221222 | Seafloor spreading in the South Atlantic by magnetochrons M4 to M0 (~131 to ~125 Ma) |
| alt-blavatsky-1888-secret-doctrine | Blavatsky, H. P., 1888 | D | 9 | 201211002 | What Blavatsky wrote about Lemuria as the 'third Continent' (vol. 2, p. 7) |
| alt-bohannon-2006-science | Bohannon, J., 2006 | C | 10 | 211011022 | Framing: EAA open letter (Dec 2006) calling the project a cruel hoax; Osmanagić's 2005 declaration and claimed 12,000-year-old civilisation |
| alt-brinton-1882-troano | Brinton, Daniel G., 1882 | B | 13 | 121122022 | That Brasseur de Bourbourg found the Troano in Madrid in 1864, published a translation, and later said he had begun at the wrong end, read in the wrong directio |
| alt-broadbent-1980-jrssa | Broadbent, S. R., 1980 | A | 17 | 222221222 | Triad statistic for near-linear points; 52 Cornish megalithic sites' leys consistent with the sites' density distribution |
| alt-bronk-ramsey-2010-science | Bronk Ramsey, C., Dee, M. W., Rowland, J. M., et al., 2010 | A | 18 | 222222222 | Reign of Djoser began 2691 to 2625 BCE (211 radiocarbon measurements, Bayesian model) |
| alt-calvert-1979-radiocarbon | Calvert, P. M., Introne, D. S., Stipp, J. J., 1979 | A | 16 | 222212122 | Bimini Atlantis series UM-1359 to UM-1365: whole rock 2780-3500, shells 3510, cement 2750-2840 14C yr BP; cores from blocks at -4.6 m collected 1977 by E. Shinn |
| alt-cayce-958-3 | Cayce, E. / Edgar Cayce Foundation, 1940 | D | 8 | 200210012 | What Cayce said: Poseidia to rise in 1968-69 (958-3, 28 June 1940); Bimini as remnant of Atlantis (996-1, 1926; 440-5, 1933) |
| alt-churchward-1926 | Churchward, James, 1926 | D | 8 | 201201002 | What Churchward claimed: a Pacific continent from north of Hawaii to Easter Island and Fiji, over 5,000 by 3,000 miles, sunk 12,000 years ago; based on 'Naacal  |
| alt-clare-2020-dai | Clare, L., 2020 | B | 14 | 221221112 | Site dates about 9500 to 8000 calBC; PPNA about 9500-8700 and EPPNB about 8700-8200 calBC; domestic buildings, burial, rock-cut cistern; revision of the temple  |
| alt-clark-2009-science | Clark, P. U., Dyke, A. S., Shakun, J. D., Carlson, A. E., Cl, 2009 | A | 18 | 222222222 | LGM timing: ice sheets at maximum 26.5 to 19-20 ka; NH deglaciation onset 19-20 ka |
| alt-collins-2014-innertraditions | Collins, A. / Bear & Company (Inner Traditions), 2014 | D | 6 | 201100002 | What Collins claims: built in response to a global cataclysm by the Watchers of Enoch and the Anunnaki |
| alt-cordis-lost-frontiers | European Commission CORDIS, 2021 | C | 10 | 211001122 | Project existence, host (University of Bradford), dates (Dec 2015 to Nov 2021) and aims |
| alt-corsetti-2018-youtube | Corsetti, Jimmy, 2018 | D | 5 | 200001002 | That Corsetti claimed in September 2018 that the Richat Structure is the most likely location of Atlantis; view count about 5.0 million when fetched |
| alt-cox-doell-1961-nature | Cox, A.; Doell, R. R., 1961 | A | 17 | 222222221 | Record of the expansion proposals in circulation in 1961: Carey's 45 per cent increase in Earth's area since the Palaeozoic and Egyed's 0.4 to 0.8 mm per year r |
| alt-dandabathula-2024-scirep | Dandabathula, G., Ghosh, K., Hari, R., Sharma, J., Sharma, A, 2024 | A | 17 | 222221222 | Adam's Bridge about 29 km, submarine continuation of Dhanushkodi and Talaimannar, about 1 km3, 99.98% submerged; Palk Strait 9 to 12 m average depth; Gulf of Ma |
| alt-dekker-2020-jasrep | Dekker, J., Sinet-Mathiot, V., Spithoven, M., Smit, B., Wilc, 2021 | A | 17 | 222221222 | Barbed points from Doggerland dated 9.5 to 7.3 ka 14C BP; two of ten made of human bone |
| alt-demenocal-2000-qsr | deMenocal, P., Ortiz, J., Guilderson, T., Adkins, J., Sarnth, 2000 | A | 17 | 222222221 | African Humid Period 14.8 to 5.5 cal ka BP, when the Sahara was nearly completely vegetated with many perennial lakes (ODP Site 658C off Cap Blanc) |
| alt-deschamps-2012-nature | Deschamps, P., Durand, N., Bard, E., Hamelin, B., Camoin, G., 2012 | A | 18 | 222222222 | MWP-1A timing 14,650 to 14,310 years ago; 12 to 22 m at Tahiti; >40 mm/yr |
| alt-dietrich-2012-antiquity | Dietrich, O., Heun, M., Notroff, J., Schmidt, K., Zarnkow, M, 2012 | A | 15 | 222221121 | Layer III PPNA enclosures and Layer II PPNB buildings; central pillars about 5.5 m; at least 20 enclosures; no domesticated plants or animals; regional comparan |
| alt-donnelly-1882 | Donnelly, Ignatius, 1882 | D | 9 | 201211002 | What Donnelly claimed: an Atlantic continent opposite the Mediterranean, with ridge soundings as its backbone |
| alt-donnelly-1882-dolmens | Donnelly, I., 1882 | D | 9 | 201210012 | What Donnelly wrote about the dolmen-builders of Africa and Europe as colonists from Atlantis |
| alt-donnelly-1882-pyramid | Donnelly, I., 1882 | D | 9 | 201210012 | What Donnelly wrote about pyramids on both sides of the Atlantic |
| alt-dubey-2023-quatres | Dubey, K. M., Chaubey, A. K., Gaur, A. S. and Joglekar, M. V, 2023 | A | 17 | 222221222 | Buried channels across the Palk Strait; freshwater reservoir in the last glacial; seawater from about 8.5 ka; channels buried by about 7.0 ka; walkable link in  |
| alt-einstein-1958-foreword | Einstein, A., 1958 | B | 11 | 211201022 | What Einstein wrote in the foreword (pp. 1 to 2) |
| alt-english-heritage-stonehenge | English Heritage, 2026 | B | 12 | 221112012 | Stonehenge: henge ditch about 3000 BC; stone circle about 2500 BC |
| alt-enright-1995-naturwiss | Enright, J. T., 1995 | A | 16 | 212221222 | Peer-reviewed version of the Munich dowsing re-analysis (bibliographic record only) |
| alt-enright-1999-si | Enright, J. T., 1999 | B | 11 | 211111112 | Munich barn dowsing tests: ~500 candidates, 43 selected, 843 tests; results indistinguishable from chance |
| alt-epica-2004-nature | EPICA community members, 2004 | A | 17 | 222222221 | Dome C ice core gives a climate record for the past 740,000 years |
| alt-esa-2004-richat | European Space Agency, 2004 | B | 10 | 211101022 | Outer rim peak about 485 m above sea level; uplift and erosion origin |
| alt-farmer-2022-pnas | Farmer, J. R., Pico, T., Underwood, O. M., et al., 2023 | A | 17 | 222221222 | Bering Strait flooded from 46 ka until 35.7 (+3.3/-2.4) ka |
| alt-firestone-2007-pnas | Firestone, R. B., West, A., Kennett, J. P., et al., 2007 | A | 17 | 222221222 | What the impact hypothesis proposed in 2007 and on what evidence (not whether an impact occurred) |
| alt-flemath-1995-via-hancock | Flem-Ath, R. and Flem-Ath, R., 1995 | D | 7 | 101111002 | What the Flem-Aths proposed, in their own words as reproduced by Hancock (Fingerprints of the Gods, ch. 50, p. 446) |
| alt-frankel-2012-drift-controversy-v2 | Frankel, H. R., 2012 | A | 15 | 222122022 | The palaeomagnetic case for drift built up in the 1950s: apparent polar wander paths showed the continents had moved relative to one another, broadly as Wegener |
| alt-frey-2003-odp183-synthesis | Frey, F. A.; Coffin, M. F.; Wallace, P. J.; Weis, D., 2003 | A | 16 | 222122122 | Kerguelen Plateau lavas erupted from about 119 Ma to about 34 Ma on igneous crust about 20 km thick; much of the plateau stood above sea level (wood, fern and p |
| alt-friedrich-2006-science | Friedrich, W. L., Kromer, B., Friedrich, M., Heinemeier, J.,, 2006 | A | 16 | 222221221 | Olive tree buried by Minoan tephra wiggle-matched to 1627 to 1600 BCE (95.4%) |
| alt-frontline-2002-bavadam | Bavadam, Lyla, 2002 | C | 9 | 111011022 | May 2001 announcement by Murli Manohar Joshi; finds dredged, no divers or photographs; archaeologists' objections (Agrawal, Menon, Raman, Ratnagar); two labs ga |
| alt-gaffney-2007-mapping-doggerland | Gaffney, V., Thomson, K., Fitch, S. (eds), 2007 | B | 16 | 221222221 | Seismic mapping of more than 23,000 km2 of the buried landscape; history of research (Reid 1913; Colinda find 1931; Godwin 1933) |
| alt-galeotti-2016-science | Galeotti, S., DeConto, R., Naish, T., et al., 2016 | A | 18 | 222222222 | An ice sheet formed on Antarctica about 34 Ma; continental-scale ice reaching the coast by about 32.8 Ma |
| alt-gibbons-2013-jgr | Gibbons, A. D., Whittaker, J. M. and Muller, R. D., 2013 | A | 17 | 222221222 | Ridge separating Greater India from Australia-Antarctica reached the southern tip of India about 126 Ma; India-Madagascar seafloor spreading about 94 to 84 Ma,  |
| alt-gillespie-volk-2014 | Gillespie, S. D., Volk, M., 2014 | A | 16 | 222121222 | La Venta apogee ca. 800-400 BC (uncalibrated); earthen pyramid (Complex C) over 30 m high; clay architecture |
| alt-giosan-2009-qsr | Giosan, L., Filip, F., Constatinescu, S., 2009 | A | 17 | 222221222 | Reconnection about 9400 years ago (about 8400 14C BP); pre-reconnection level about -30 m from the Danube delta; Bosphorus about 35 m, Dardanelles about 70 m de |
| alt-hachette-magicians-2015 | Hancock, G. / Hachette UK (Coronet), 2015 | D | 6 | 201100002 | What Magicians of the Gods claims: an advanced Ice Age civilisation destroyed 12,800 to 11,600 years ago; survivors settled at Gobekli Tepe and elsewhere |
| alt-haeckel-1876-history-of-creation | Haeckel, E., 1876 | B | 13 | 211212022 | What Haeckel wrote about Lemuria as the probable cradle of the human race (pp. 360-361) |
| alt-hancock-1995-fingerprints | Hancock, G., 1995 | D | 8 | 101211002 | What Hancock wrote about Antarctica, crust displacement and the ancient maps (Part I; ch. 50, p. 446; ch. 51, p. 451) |
| alt-hancock-2002-bbc-quote | Housden, Tom (quoting Hancock, Graham), 2002 | D | 6 | 201001002 | Graham Hancock's words on the Khambhat finds |
| alt-hancock-2015-magicians | Hancock, G., 2015 | D | 9 | 101221002 | What Hancock wrote about the Younger Dryas comet and the lost civilisation (ch. 4, ch. 5, ch. 9) |
| alt-hancock-2024-website | Hancock, G., 2024 | D | 7 | 200210002 | What Hancock claims: Gobekli Tepe reflects technology transfer from a lost civilisation (quoting Ancient Apocalypse ep. 5, 2022) |
| alt-hanebuth-2000-science | Hanebuth, T., Stattegger, K., Grootes, P. M., 2000 | A | 17 | 222222221 | Sunda Shelf sea-level record; MWP-1A up to 16 m within 300 years (14.6 to 14.3 ka) |
| alt-hapgood-1958-esc | Hapgood, C. H. (with J. H. Campbell), 1958 | D | 11 | 201221102 | What Hapgood proposed in 1958: size, speed and date of the last crustal displacement (pp. 91, 249, 340) |
| alt-hapgood-1966-seakings | Hapgood, C. H., 1966 | D | 10 | 101221102 | What Hapgood claimed about the Piri Reis map, Queen Maud Land and the dates of the source maps (Preface; Antarctic maps chapter; Ohlmeyer letter) |
| alt-hapgood-1970-path | Hapgood, C. H., 1970 | D | 10 | 101221102 | What Hapgood proposed in 1970: Hudson Bay and Greenland Sea poles, shift 18 to 12 ka (Author's Note) |
| alt-hauff-2003-gcubed | Hauff, F.; Hoernle, K.; Schmidt, A., 2003 | A | 18 | 222222222 | The oldest in-place Pacific ocean crust, drilled in front of the Mariana and Izu-Bonin trenches, is 130 to 167 Ma |
| alt-heine-2013-se | Heine, C., Zoethout, J., Müller, R. D., 2013 | A | 17 | 222221222 | South Atlantic rifting from ~140 Ma; break-up ~113 Ma in the south; final separation ~103 Ma in the equatorial Atlantic |
| alt-hess-1962-ocean-basins | Hess, H. H., 1962 | A | 16 | 222122122 | Publication record: Hess's 1962 paper that introduced seafloor spreading |
| alt-hess-2002-via-dna | DNA Web Team (quoting NASA officials Mark Hess, 2002, and Mi, 2007 | C | 8 | 201001022 | That websites used NASA images from 2002 to claim a man-made bridge; that a 1.7-million-year carbon date was attributed to NASA; NASA's statements that orbital  |
| alt-hilgenberg-1933-wachsender-erdball | Hilgenberg, O. C., 1933 | D | 8 | 200210012 | What Hilgenberg proposed: continents as fragments of a closed shell on a globe about half the present diameter (opening section) |
| alt-holliday-2023-esr-chronology | Holliday, V. T., Daulton, T. L., Bartlein, P. J., et al., 2023 | A | 16 | 222122122 | Greenland Stadial 1 spans 12,896 +/- 4 to 11,703 +/- 4 yr b2k (GICC05, after Rasmussen et al. 2006); AMOC weakening and Lake Agassiz drainage as the working exp |
| alt-holliday-2023-esr-critique | Holliday, V. T., Daulton, T. L., Bartlein, P. J., et al., 2023 | A | 15 | 222121122 | No crater of Younger Dryas age; markers microscopic and mostly terrestrial in origin; few sites precisely dated; no continent-wide catastrophe; recommends rejec |
| alt-iodp-exp183-site1137 | International Ocean Discovery Programme (IODP3), 2024 | B | 15 | 221212122 | Coordinates of ODP Site 1137 on Elan Bank: 56.83305 S, 68.09345 E |
| alt-iugs-richat | Asrat, Asfawossen and Jebrak, Michel (IUGS), n.d. | B | 12 | 221111022 | Carbonatite ages 85 +/- 5 and 99 +/- 5 Ma; diameter about 40 km; coordinates 21.00 N, 11.52 W |
| alt-jakobsson-2017-cp | Jakobsson, M., Pearce, C., Cronin, T. M., et al., 2017 | A | 17 | 222221222 | Bering Strait about 53 m deep; reopening about 11 cal ka BP from Herald Canyon core |
| alt-jouzel-2007-science | Jouzel, J., Masson-Delmotte, V., Cattani, O., et al., 2007 | A | 18 | 222222222 | Continuous EPICA Dome C deuterium record back about 800,000 years |
| alt-jpl-2021-adams-bridge | NASA Jet Propulsion Laboratory, 2021 | B | 10 | 211101022 | Adam's Bridge is a 48 km chain of limestone shoals, formerly a land bridge; scene centre 9.3 N, 79.3 E |
| alt-kelsey-el-kurru | Kelsey Museum of Archaeology, University of Michigan (projec, 2026 | B | 11 | 221101022 | El-Kurru royal pyramid burials of the kings of Kush who ruled Egypt as its 25th Dynasty (ca. 750-664 BCE) |
| alt-kim-2025-jar | Kim, J., Conte, M., Oh, Y., 2025 | A | 16 | 222122122 | Korean dolmen building began in the middle of the Early Mumun (1500-800 BC); more than 50,000 dolmens recorded |
| alt-kirschvink-1997-science | Kirschvink, J. L., Ripperdan, R. L. and Evans, D. A., 1997 | A | 16 | 222221221 | Proposal of a roughly 90 degree Early to Middle Cambrian true polar wander event |
| alt-labails-2010-epsl | Labails, C., Olivet, J.-L., Aslanian, D. and Roest, W. R., 2010 | A | 17 | 222221222 | Oceanic accretion in the Central Atlantic began at 190 Ma (Late Sinemurian), very slowly at first; Central Atlantic opening began in the Late Sinemurian, 190 Ma |
| alt-lambeck-2014-pnas | Lambeck, K., Rouby, H., Purcell, A., Sun, Y. and Sambridge, , 2014 | A | 18 | 222222222 | Global sea level about 134 m below present at the LGM (29 to 21 ka); main deglaciation 16.5 to 8.2 ka at about 12 m per ka; LGM lowstand about -134 m; deglaciat |
| alt-lambeck-2014-table | Lambeck, K., Rouby, H., Purcell, A., Sun, Y., Sambridge, M., 2014 | A | 17 | 222222122 | Approximate global sea level at 20, 15, 14, 12, 10, 8 and 6 ka, read from Fig. 4 and checked against interval totals in the text |
| alt-leplongeon-1896 | Le Plongeon, Augustus, 1896 | D | 8 | 200211002 | What Le Plongeon claimed: the Troano manuscript recounts the submersion of the Land of Mu, which he equated with Plato's Atlantis |
| alt-lin-2021-natcomms | Lin, Y., Hibbert, F. D., Whitehouse, P. L., Woodroffe, S. A., 2021 | A | 17 | 222221222 | MWP-1A global mean rise 17.9 m (15.7 to 20.2 m) in 500 years |
| alt-lipscomb-nuri | Lipscomb University archaeology program (Nuri Archaeological, 2026 | C | 8 | 211001012 | Framing only: Taharqa moved the royal cemetery from el-Kurru to Nuri |
| alt-livescience-2024-richat | Pare, Sascha, 2024 | C | 10 | 211011022 | That proponents claim the Richat Structure is Plato's Atlantis, and archaeologist Ken Feder's response |
| alt-llamas-2016-sciadv | Llamas, B., Fehren-Schmitz, L., Valverde, G., et al., 2016 | A | 17 | 222221222 | Isolation in eastern Beringia about 2.4 to 9 kyr; entry via coastal route around 16.0 ka |
| alt-manning-2006-science | Manning, S. W., Bronk Ramsey, C., Kutschera, W., Higham, T.,, 2006 | A | 16 | 222221221 | Regional radiocarbon data place the Thera eruption in the late 17th century BCE |
| alt-marinatos-1939-antiquity | Marinatos, Spyridon, 1939 | A | 15 | 122221122 | That Marinatos proposed in 1939 that a Thera eruption destroyed Minoan Crete |
| alt-matton-2005-geology | Matton, G., Jebrak, M. and Lee, J. K. W., 2005 | A | 18 | 222222222 | Richat is a dome at least 40 km across in Late Proterozoic to Ordovician rock; three nested cuesta rings; Cretaceous alkaline complex with hydrothermal karst br |
| alt-mccafferty-1996-am | McCafferty, G. G., 1996 | A | 15 | 222221121 | First building stage Terminal Formative; four major stages; final stage Early Postclassic |
| alt-mcelhinny-1978-nature | McElhinny, M. W.; Taylor, S. R.; Stevenson, D. J., 1978 | A | 18 | 222222222 | Palaeomagnetic palaeoradius estimates for the past 400 Myr limit any expansion of the Earth to less than 0.8% |
| alt-mcintosh-2000-inscriptions | McIntosh, G. C., 2000 | A | 17 | 222222122 | Translation of the map's inscriptions: drawn at Gelibolu in 1513; compiled from about twenty charts including Portuguese maps and a map by Columbus (pp. 15 to 1 |
| alt-mcintosh-2000-southern | McIntosh, G. C., 2000 | A | 16 | 222221122 | The Southern Continent: inscriptions about heat, serpents and Portuguese sighting; Terra Australis tradition; poor fit to the Queen Maud Land coast; Mallery-Hap |
| alt-met-old-kingdom | Metropolitan Museum of Art, 2026 | B | 12 | 211112022 | Djoser r. ca. 2649-2630 BC, Step Pyramid at Saqqara first pyramid; Khufu r. ca. 2551-2528 BC; pyramid marks the king's tomb |
| alt-michell-1969-view | Michell, J., 1969 | D | 5 | 101000012 | That Michell published The View Over Atlantis; content paraphrased, not read |
| alt-missiaen-2020-brown-bank | Missiaen, T., Fitch, S., Muru, M., Harding, R., Fraser, A., , 2020 | B | 12 | 221101122 | Brown Bank ridge nearly 30 km long, crest 16 m below sea level; land inundated between 10 and 8 ka; trawled Pleistocene fauna, Mesolithic tools and human remain |
| alt-mortimer-2017-gsatoday | Mortimer, N.; Campbell, H. J.; Tulloch, A. J.; King, P. R.; , 2017 | A | 16 | 222122122 | Zealandia: 4.9 million square km, about 94% submerged, crust 10 to 30 km thick over most of it, thinned in the Late Cretaceous (about 105 to 85 Ma) before Gondw |
| alt-museodeamerica-madrid | Museo de America, Ministerio de Cultura (Spain), n.d. | B | 11 | 211102022 | The Troano and Cortesianus are one codex held at the Museo de America, Madrid (inv. 70300), dated to the 15th century, from Yucatan |
| alt-natawidjaja-2023-arp | Natawidjaja, D. H., Bachtiar, A., Nurhandoko, B. E. B., et a, 2023 | D | 13 | 212220220 | What the authors claimed: Unit 3 built 25,000 to 14,000 BCE; dated organic soils |
| alt-nigam-hashimi-2002-jgsi-claim | Nigam, R. and Hashimi, N. H., 2002 | B | 13 | 122121022 | Reported details of the claim: finds at 30 to 40 m depth, 20 to 40 km west of Hazira near Surat; 7500 BCE from radiocarbon dates on a wooden piece |
| alt-nigam-hashimi-2002-jgsi-sealevel | Nigam, R. and Hashimi, N. H., 2002 | B | 14 | 122122121 | West Indian margin sea-level curve (Hashimi et al. 1995) places the shore at 30 to 40 m below present at about 9.5 ka |
| alt-noaa-ocean-depth | NOAA National Ocean Service, n.d. | B | 11 | 211102022 | Average ocean depth about 3,682 m |
| alt-noaa-sos-seafloor-age | NOAA, 2024 | B | 12 | 211112022 | Very little of the sea floor is older than 150 million years; the oldest is subducted |
| alt-norfolk-hes-leman-ower | Norfolk Historic Environment Service (P. Watkins), 2014 | B | 12 | 221111022 | Discovery Sept 1931; OxA-1950 11,740 +/- 150 BP, c. 11,950 to 11,300 cal BC; location 53 deg 10 min N, 2 deg E |
| alt-nottingham-pavlopetri-2009 | University of Nottingham, Department of Archaeology, 2010 | B | 13 | 221111122 | 2009 survey methods; >9000 m2 of new buildings; occupation from at least 3000 BC to 1100 BC and Final Neolithic from mid-4th millennium BC |
| alt-nottingham-pavlopetri-background | University of Nottingham, Department of Archaeology, 2013 | B | 12 | 221111022 | Discovery 1967 (Flemming); 1968 Cambridge survey; remains 300 x 150 m at 1 to 4 m depth; buildings, streets, tombs, 37 cist graves; c. 2800 to 1180 BC |
| alt-oconnor-2013-g3 | O'Connor, J. M., Steinberger, B., Regelous, M., Koppers, A. , 2013 | A | 18 | 222222222 | Age increases with distance from the Hawaiian hotspot at 57 +/- 2 km/Myr between about 57 and 25 Ma; bend volcanism from at least 47.5 Ma; oldest Emperor Seamou |
| alt-oerter-2004-annglac | Oerter, H., Graf, W., Meyer, H. and Wilhelms, F., 2004 | A | 16 | 222221221 | Kohnen station site (75 deg 00 min S, 0 deg 04 min E); ice about 7,000 years old at 450 m depth |
| alt-ogata-2020-ejgeo | Ogata, T., Otsubo, M., Itoh, H., 2020 | A | 16 | 222221122 | Surface geology Yaeyama Group (Neogene Miocene) and Ryukyu Group; wave-cut platforms in sandstone; normal faults and joints |
| alt-oppenheimer-1998-bradshaw | Oppenheimer, S. (as reproduced by the Bradshaw Foundation), 1998 | D | 7 | 111100012 | What Oppenheimer claimed: flooding of Sundaland caused a dispersal that seeded civilisations to the west |
| alt-osmanagic-foundation | Archaeological Park: Bosnian Pyramid of the Sun Foundation (, 2026 | D | 6 | 200200002 | What the foundation claims: over 220 m, concrete blocks, soil about 12,000 years old |
| alt-pearson-2018-sciadv | Pearson, C. L., Brewer, P. W., Brown, D., Heaton, T. J., Hod, 2018 | A | 17 | 222221222 | Annual tree-ring radiocarbon shifts the calibrated Thera range toward the 16th century BCE; archaeological dating mid 16th to early 15th century BCE |
| alt-peltier-fairbanks-2006-qsr | Peltier, W. R., Fairbanks, R. G., 2006 | A | 17 | 222222221 | Post-LGM eustatic rise very close to 120 m; LGM at about 26 ka |
| alt-pico-2020-sciadv | Pico, T., Mitrovica, J. X., Mix, A. C., 2020 | A | 17 | 222221222 | LGM global sea level about -130 m; two-phase Bering flooding reconciled with GIA modelling; Cordilleran/western Laurentide melting 13,000 to 11,500 years ago |
| alt-pigati-2023-science | Pigati, J. S., Springer, K. B., Honke, J. S., et al., 2023 | A | 18 | 222222222 | Pollen 14C and OSL ages confirm the 23 to 21 ka footprint chronology |
| alt-pinotti-2019-currbiol | Pinotti, T., Bergstrom, A., Geppert, M., et al., 2019 | A | 17 | 222221222 | Standstill of 2.7 or 4.6 kyr; entry south of the ice sheet after 19.5 kya |
| alt-pinter-2011-esr | Pinter, N., Scott, A. C., Daulton, T. L., Podoll, A., Koeber, 2011 | A | 15 | 222121122 | Later analyses failed to confirm the twelve lines of evidence offered for the impact |
| alt-plato-critias-jowett | Plato; Jowett, B. (tr.), 1998 | B | 12 | 211202022 | What Plato wrote: the war nine thousand years before, told via Solon |
| alt-plato-critias-rings | Plato; Jowett, B. (tr.), 1998 | B | 12 | 211202022 | What Plato wrote about the concentric rings of the royal city and their widths in stadia |
| alt-plato-timaeus-jowett | Plato; Jowett, B. (tr.), 1998 | B | 12 | 211202022 | What Plato wrote about Atlantis: location beyond the Pillars of Heracles, size, sinking in a single day and night |
| alt-powell-2024-archaeology | Powell, E. A., 2024 | C | 9 | 211001022 | Framing: five terraces on an extinct volcano; natural columnar-jointed andesite; how the retraction was received |
| alt-quilty-banks-2003-carey-memoir | Quilty, P. G.; Banks, M. R., 2003 | B | 14 | 222121022 | Carey's career: Continental Drift Symposium held March 1956, published 1958, where he introduced Earth expansion; The Expanding Earth (Elsevier, 1976); the Expa |
| alt-rabinowitz-1983-science | Rabinowitz, P. D.; Coffin, M. F.; Falvey, D., 1983 | A | 17 | 222222221 | Madagascar moved south away from Africa starting in the Middle Jurassic; sea-floor spreading in the western Somali Basin ceased in the Early Cretaceous |
| alt-raised-2014-qsr | RAISED Consortium (Bentley, M. J. et al.), 2014 | A | 16 | 222122122 | Grounding-line maps of the Antarctic Ice Sheet at 20, 15, 10 and 5 ka, showing deglaciation from the continental shelf |
| alt-ramaswamy-2000-jas | Ramaswamy, Sumathi, 2000 | A | 17 | 222222122 | History of the Kumari Nadu / Kumari Kandam idea: Lemuria from the 1860s, Tamil uptake from the 1890s, Kumari Nadu from 1903, 'Kumari Kandam' first documented 19 |
| alt-ramaswamy-2000-sastri-quote | Ramaswamy, Sumathi (quoting Suryanarayana Sastri, V. G.), 2000 | A | 17 | 222222122 | The 1903 Tamil description of Kumari Nadu's extent (Cape Comorin to Kerguelen, Madagascar to the Sunda Islands), in Ramaswamy's translation |
| alt-ramaswamy-2004-ucpress | Ramaswamy, Sumathi, 2004 | A | 17 | 222222122 | Book-length scholarly history of Lemuria and Kumari Kandam (bibliographic record only) |
| alt-rust-sharer-1988-science | Rust, W. F., Sharer, R. J., 1988 | A | 16 | 222221221 | La Venta grew into a temple-town 1150-800 B.C.; local peak 800-500 B.C. |
| alt-ryall-2007-natgeo | Ryall, J. (National Geographic News), 2007 | C | 9 | 211001022 | Kimura's claims (stepped pyramid from 25 m depth; about 5000 years old; sank about 2000 years ago) and Schoch's natural-origin statement |
| alt-ryan-1997-margeo | Ryan, W. B. F., Pitman, W. C., Major, C. O., Shimkus, K., Mo, 1997 | A | 17 | 222221222 | What Ryan et al. proposed in 1997: catastrophic flooding at 7150 yr BP (radiocarbon), >100,000 km2 of shelf drowned |
| alt-ryan-2003-areps | Ryan, W. B. F., Major, C. O., Lericolais, G., Goldstein, S. , 2003 | A | 15 | 222121122 | Revised flood hypothesis maintained as best fit in 2003 |
| alt-sant-2018-palaeo3 | Sant, K., Andrić, N., Mandic, O., et al., 2018 | A | 17 | 222221222 | Basin fill of lacustrine carbonates, silts, sands and conglomerates dated 17.2 to 15 Ma; extension from ~18.4 Ma |
| alt-santos-atlan-org | Santos, A. N. dos, 2005 | D | 6 | 200200002 | What Santos claimed: Atlantis lies under the South China Sea |
| alt-sathiamurthy-voris-2006-tnh | Sathiamurthy, E., Voris, H. K., 2006 | A | 17 | 222221222 | Sunda Shelf relative sea level stages 21 ka to 1 ka (-116 m at 21 ka, -51 m at 10 ka, 0 at 6 ka, +5 m at 4.2 ka); exposed area at -116 m |
| alt-schoch-bosnia | Schoch, R. M., 2006 | C | 12 | 220201122 | Framing: Visočica and Pljesevica made of tilted Miocene sandstone, clay, mudstone, siltstone and conglomerate; blocks are naturally fractured beds |
| alt-schuchert-1932-gondwana-bridges | Schuchert, C., 1932 | A | 15 | 222121122 | Schuchert's stated position among the schools of permanence and subsidence (opening paragraph) |
| alt-schulz-paulsson-2019-pnas | Schulz Paulsson, B., 2019 | A | 16 | 222121222 | Megalithic graves emerged in NW France 4794-3986 cal BC (most probably within 200-300 years); three phases of spread by sea; 2,410 dates |
| alt-sclater-1864-lemuria | Sclater, P. L., 1864 | B | 15 | 221212122 | What Sclater proposed and in what words (p. 219) |
| alt-scott-elliot-1904-lost-lemuria | Scott-Elliot, W., 1904 | D | 9 | 201211002 | What Scott-Elliot wrote about the extent and age of Lemuria on his maps |
| alt-scroll-2022-ramsetu | Deuskar, Nachiket, 2022 | C | 10 | 211011022 | History of the dispute: Sethusamudram project, 2007 ASI affidavit and its withdrawal, 2017 Discovery programme, 2018 government position, 2022 statement in Parl |
| alt-seton-2020-g3-atlantic | Seton, M., Muller, R. D., Zahirovic, S. et al., 2020 | A | 18 | 222222222 | Early Jurassic ocean floor present in the Central and Equatorial Atlantic |
| alt-seton-2020-g3-pacific | Seton, M., Muller, R. D., Zahirovic, S. et al., 2020 | A | 18 | 222222222 | Pacific ocean crust reaches back to a Jurassic triangle in the western Pacific; mean age of ocean crust 64.2 Myr |
| alt-shackleton-2025-pnas | Shackleton, S., Hishamunda, V., Davidge, L., et al., 2025 | A | 17 | 222221222 | Allan Hills ice directly dated (40Ar deficit) to about 6 Ma; oldest continuous core 800 ka |
| alt-sharp-clague-2006-science | Sharp, W. D. and Clague, D. A., 2006 | A | 17 | 222221222 | Hawaiian-Emperor bend began near Kimmei Seamount about 50 Ma |
| alt-shen-2011-anngeo | Shen, W.; Sun, R.; Chen, W.; Zhang, Z.; Li, J.; Han, J., 2011 | A | 17 | 222221222 | A contrary estimate: surface rising at 0.24 +/- 0.04 mm per year from ITRF2008 station heights, and 0.17 to 0.21 mm per year from gravity data |
| alt-shinn-2004-si | Shinn, E. A., 2004 | B | 15 | 221122122 | Coring of the Bimini stones; oriented cores show consistent bedding dip toward deep water; beachrock identical to modern beach; 14C ages 2000 to 4000 years (McK |
| alt-sload-2015-laa | Sload, R., 2015 | A | 17 | 222221222 | Sun Pyramid construction began in the first century A.D.; later dates reflect ritual and modification |
| alt-sparks-2000-geolmag | Sparks, R. S. J., 2000 | C | 11 | 221011022 | A volcanologist's judgement that there is 'at least a plausible case' linking Santorini with the Atlantis legend |
| alt-storey-1995-science | Storey, M.; Mahoney, J. J.; Saunders, A. D.; Duncan, R. A.; , 1995 | A | 18 | 222222222 | Madagascar and India broke apart about 88 Ma: 17 argon-argon ages from the 1,500 km rifted east margin of Madagascar average 87.6 +/- 0.6 Ma |
| alt-suess-1885-gondwana-land | Suess, E., 1885 | B | 16 | 221222122 | What Suess wrote when naming Gondwana-Land (p. 596), and his view that the Indian Ocean formed by subsidence within it |
| alt-sugiyama-2013-laa | Sugiyama, N., Sugiyama, S., Sarabia G., A., 2013 | A | 17 | 222221222 | Sun Pyramid dated A.D. 170-310 and tunnel A.D. 140-240; three construction stages |
| alt-sweatman-2024-esr | Sweatman, M. B., Powell, J. L. and West, A., 2024 | B | 13 | 212121112 | That proponents contest the 2023 refutation and cite replications |
| alt-tamm-2007-plosone | Tamm, E., Kivisild, T., Reidla, M., et al., 2007 | A | 18 | 222222222 | Original statement of the Beringian standstill from mtDNA |
| alt-thomas-1882-troano | Thomas, Cyrus, 1882 | B | 13 | 121212121 | That the Troano was read in 1882 as chiefly a ritual or religious calendar |
| alt-torsvik-2012-esr-antarctica | Torsvik, T. H., Van der Voo, R., Preeden, U., et al., 2012 | A | 18 | 222222222 | The South Pole has remained close to East Antarctica since about 230 Ma (p. 334) |
| alt-torsvik-2012-esr-netrotation | Torsvik, T. H., Van der Voo, R., Preeden, U., et al., 2012 | A | 16 | 222221221 | Lithospheric net rotation averaging about 0.12 deg/Myr over 150 Myr, peak 0.33 deg/Myr at 60 to 50 Ma (p. 356 to 357) |
| alt-torsvik-2012-esr-tpw | Torsvik, T. H., Van der Voo, R., Preeden, U., et al., 2012 | A | 17 | 222222221 | Four Mesozoic TPW episodes 250 to 100 Ma at 0.45 to 0.8 deg/Myr; cumulative TPW near zero since the Late Carboniferous; 626 poles |
| alt-torsvik-2013-ngeo | Torsvik, T. H.; Amundsen, H.; Hartz, E. H.; Corfu, F.; Kuszn, 2013 | A | 18 | 222222222 | Zircons 660 to 840 Ma and more than 1,971 Ma in Mauritian beach-sand lavas; gravity inversion shows thick crust from Mauritius to the Seychelles; Mauritia separ |
| alt-ucmp-wegener | University of California Museum of Paleontology, 1997 | C | 9 | 111101022 | How Wegener's theory was received (Chamberlin's criticism, Du Toit and Argand as supporters) and that plate tectonics was accepted by almost all geologists by t |
| alt-unesco-2016-piri-reis | General Directorate of Cultural Heritage and Museums, Minist, 2016 | B | 10 | 211111012 | Map found in the Topkapı Palace Library in 1929; Revan Köşkü no. 1633; parchment 87 cm long; surviving part about one third; among the earliest maps showing Ter |
| alt-unesco-carnac-1725 | UNESCO World Heritage Centre, 2025 | B | 12 | 221111022 | Carnac megaliths built during the Neolithic, c. 5000-2300 BCE |
| alt-unesco-korea-dolmens-977 | UNESCO World Heritage Centre, 2000 | B | 12 | 221111022 | Korean dolmens are funerary monuments; dolmens worldwide mostly 2nd and 1st millennia BCE; >440 and >500 dolmens at Gochang and Hwasun |
| alt-unesco-meroe-1336 | UNESCO World Heritage Centre, 2011 | B | 12 | 221111022 | Kush a power 8th c. BCE-4th c. CE; Meroe site of most royal burials from 3rd c. BCE; pyramid tombs |
| alt-unesco-napatan-1073 | UNESCO World Heritage Centre, 2003 | B | 12 | 221111022 | Napatan 900-270 BC and Meroitic 270 BC-350 AD cultures; pyramids of Kurru and Nuri, steep angles, 9th c. BC-4th c. AD funerary tradition |
| alt-unesco-whc-1572 | UNESCO World Heritage Centre, 2018 | B | 12 | 221111022 | Coordinates N37 13 23.671 E38 55 20.51; inscription 2018 |
| alt-usgs-dynamic-earth-rates | Kious, W. J., Tilling, R. I. (USGS), 1996 | B | 13 | 222112021 | Spreading rates from under 2.5 cm/yr (Arctic Ridge) to over 15 cm/yr (East Pacific Rise) |
| alt-usgs-tde-developing | Kious, W. J.; Tilling, R. I. (USGS), 1996 | B | 13 | 222112021 | Hess and Dietz: seafloor spreading from ridges and consumption at trenches, which explains why the Earth does not get bigger; symmetric magnetic stripes and you |
| alt-usgs-tde-historical | Kious, W. J.; Tilling, R. I. (USGS), 1996 | B | 13 | 222112021 | Wegener's two articles of 1912; Glossopteris fossils in now-polar regions; Jeffreys's objection that continents could not plough through the ocean floor; Pangae |
| alt-usgs-tde-hotspots | U.S. Geological Survey (Kious, W. J. and Tilling, R. I.), 1996 | B | 13 | 222112021 | Oldest rocks on Kauai about 5.5 Ma; oldest exposed rocks on the Big Island under 0.7 Ma; chain made by the Pacific plate over a hotspot |
| alt-usgs-tde-inside | Kious, W. J.; Tilling, R. I. (USGS), 1996 | B | 13 | 222112021 | Oceanic crust is about 5 km thick; continental crust averages about 30 km; Oceanic crust about 5 km thick; continental crust averages about 30 km |
| alt-usgs-tde-understanding | Kious, W. J.; Tilling, R. I. (USGS), 1996 | B | 13 | 222112021 | Spreading on the Mid-Atlantic Ridge averages about 2.5 cm per year (25 km per million years); Mid-Atlantic Ridge spreading about 2.5 cm/yr; Atlantic grew over 1 |
| alt-utah-2014-release | University of Utah (via ScienceDaily), 2014 | C | 9 | 211011012 | Framing: Hoffecker et al. argued people lived on the land bridge about 25,000 to 15,000 years ago amid shrub tundra |
| alt-vail-aveni-2004-madrid | Vail, Gabrielle and Aveni, Anthony (eds), 2004 | A | 16 | 222122122 | Madrid Codex holds about 250 almanacs organised on the 260-day ritual calendar (rain ceremonies, agriculture, hunting, year-end rites, eclipses); extant Maya co |
| alt-vine-matthews-1963-nature | Vine, F. J.; Matthews, D. H., 1963 | A | 16 | 222122122 | Publication record: Vine and Matthews's 1963 paper on magnetic anomalies over ocean ridges |
| alt-voris-2000-jbiogeog | Voris, H. K., 2000 | A | 17 | 222222221 | Shoreline maps at 10 to 120 m contours; sea level at or below -40 m for more than half of the last 250 kyr |
| alt-walker-2009-jqs | Walker, M., Johnsen, S., Rasmussen, S. O., et al., 2009 | A | 18 | 222222222 | Base of the Holocene (end of the Younger Dryas / GS-1) at 11,700 yr b2k, maximum counting error 99 yr, ratified by IUGS |
| alt-walker-2020-antiquity | Walker, J., Gaffney, V., Fitch, S., Muru, M., Fraser, A., Ba, 2020 | A | 17 | 222221222 | Storegga tsunami c. 8150 BP; Dogger Island by 9000 cal BP; 1 to 4 m global rise 8400 to 8200 cal BP; last islands gone c. 7000 cal BP; tsunami not the final flo |
| alt-watkins-1922-trackways | Watkins, A., 1922 | D | 12 | 211210122 | What Watkins proposed in 1922 (sighting lines called leys) |
| alt-watkins-1925-ost | Watkins, A., 1925 | D | 11 | 111210122 | What Watkins asked in the 1925 preface |
| alt-wegener-1920-drift-claim | Wegener, A., 1920 | B | 16 | 221222122 | What Wegener proposed (continents once joined, split and drifted apart) and his own account that the first two publications appeared in 1912 and the first editi |
| alt-wegener-1920-land-bridges | Wegener, A., 1920 | B | 16 | 221222122 | Wegener's summary of the land-bridge consensus (including the 'lemurische' bridge said to break in the Lower Eocene) and his argument that isostasy forbids brid |
| alt-wegener-1920-lemuria-reinterpreted | Wegener, A., 1920 | B | 16 | 221222122 | Wegener's statement that Lemuria can be reconstructed by smoothing the folds of High Asia, which brings India against Madagascar (p. 10) |
| alt-wilhelms-2014-pangaea | Wilhelms, F. et al., 2014 | B | 15 | 221211222 | EDML drill site at 75.0025 S, 0.0684 E; recovered core 2,774 m long |
| alt-williamson-bellamy-1983 | Williamson, T., Bellamy, L., 1983 | B | 11 | 221111021 | That a book-length examination of ley claims by a landscape historian exists (1983); content not read |
| alt-willis-1932-isthmian-links | Willis, B., 1932 | A | 15 | 222121122 | Willis's framework: granitic continents, basaltic ocean floors in isostatic equilibrium, permanence, and narrow isthmian links modelled on Panama |
| alt-woodard-2009-smithsonian | Woodard, C., 2009 | C | 10 | 211011022 | Framing: University of Tuzla cores showed alternating conglomerate, clay and sandstone; 'flatirons' comparison by P. Heinrich (LSU) |
| alt-wu-2011-grl | Wu, X.; Collilieux, X.; Altamimi, Z.; Vermeersen, B. L. A.; , 2011 | A | 18 | 222222222 | Combining SLR, VLBI, GPS and DORIS data, the Earth's mean radius is not changing to within a 1-sigma uncertainty of 0.2 mm per year |
| alt-yanko-hombach-2006-egu | Yanko-Hombach, V., Gilbert, A. S., Dolukhanov, P., 2006 | B | 13 | 221121022 | The gradual/oscillating position: lake -140 to -50 m 16-13 ka, about -20 m by 11 ka, about -50 m in the YD, gradual rise to about -20 m after reconnection at ab |
| alt-yanko-hombach-2007-book | Yanko-Hombach, V., Gilbert, A. S., Panin, N., Dolukhanov, P., 2007 | B | 14 | 222121022 | Existence and editors of the 2007 volume |
| alt-yazaki-1982-gsj | Yazaki, K., 1982 | A | 16 | 222221221 | Yonaguni built of the Middle Miocene Yaeyama Group; Aragabana Formation sandstone-shale alternation >300 m on the SE coast; faulted horst-graben pattern; dips 1 |
| alt-yoder-1996-pnas | Yoder, A. D.; Cartmill, M.; Ruvolo, M.; Smith, K.; Vilgalys,, 1996 | A | 17 | 222222221 | All living Malagasy lemurs descend from one ancestor; lemurs and the Afro-Asian lorises (Strepsirrhini) share an African ancestor |
| alt-yoder-yang-2004-molecol | Yoder, A. D.; Yang, Z., 2004 | A | 16 | 222221221 | Molecular age of the lemur clade: about 62 to 65 Ma in nearly all analyses |
| alt-yondri-2017-gunung-padang | Yondri, L., 2017 | B | 13 | 121221112 | Charcoal beneath terrace walls: 1986±110 BP (Terrace I, ~117 BC), 2014±30 BP (Terrace II, ~47 BC), 1845±100 BP (Terrace IV, ~45 BC as reported) |
