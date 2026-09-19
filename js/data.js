/* ===================== the timeline =====================
   plates: [ centre longitude, centre latitude, spin (clockwise, degrees) ]
   Sites are pinned to a plate at modern lon/lat and travel with it.
   strata: one sentence on the rock typically laid down in that period,
   shown in the facts list as "Rock record".                                */

const PERIODS = [
{
  id:"cam", name:"Cambrian", ma:510, span:"538–485 million years ago",
  colour:"#7FA056", accent:"#9CBE72", view:[-30,-12],
  headline:"Gondwana is still being welded together",
  body:[
    "From 538 to 485 million years ago the continents sit scattered across the southern half of the globe. The rock that is now North America (Laurentia) lies on the equator, turned a quarter turn from the way it faces today, while Africa, South America, India, Australia and Antarctica are being welded into Gondwana.",
    "Warm shallow seas cover most continental interiors, and animals with hard parts have just appeared in them. The land above is bare rock and sand. It carries no plants and nothing taller than a bacterial crust."
  ],
  facts:[
    ["North pole","Open ocean, as it will be for most of the next 450 million years"],
    ["South pole","Near the edge of Gondwana, around what is now West Africa and northern Brazil"],
    ["Sea level","Very high; continental interiors flooded"],
    ["Land plants","None"]
  ],
  strata:"Beach sandstone, then shale, then limestone, stacked as seas advanced across bare continents; the Tapeats, Bright Angel and Muav at the bottom of the Grand Canyon are the standard example.",
    plates:{ NAM:[27.9,-2,34.2], EUR:[66.3,-54.7,19.9], SIB:[-50.7,14,68], CHI:[576.7,-10,75.1],
           IND:[187.9,-40.8,-28.4], AFR:[240.2,-77.7,58.7], SAM:[-81.5,-46.9,86.4],
           AUS:[187.2,-13.2,-89.6], ANT:[-140.7,-32.7,41.1], MAD:[189.1,-52.1,20.2] },
  ice:[],
  sites:[
    { plate:"NAM", lon:-116.5, lat:51.4, cat:"fossil",
      title:"Burgess Shale", sub:"508 million years old",
      body:"The Burgess Shale preserves soft-bodied animals with their eyes, guts and gill filaments intact, among them Anomalocaris, Opabinia and Hallucigenia. It is 508 million years old and records a time when the basic body plans of animals were still being tried out. Mud slid off the edge of a tropical carbonate platform a few degrees from the equator and buried the animals faster than they could decay. The shale now outcrops high on a ridge in Yoho National Park, British Columbia.",
      then:{ where:"Equatorial sea floor", icon:"reef",
             text:"A steep drowned reef wall in warm water a few degrees from the equator." },
      now:{ where:"Yoho National Park, British Columbia", icon:"conifer",
            text:"The same rock now sits 2,300 metres up a ridge in the Canadian Rockies, in subalpine forest of Engelmann spruce and subalpine fir, under snow much of the year." } },
    { plate:"CHI", lon:102.6, lat:24.7, cat:"fossil",
      title:"Chengjiang", sub:"518 million years old",
      body:"Chengjiang's fossils include Myllokunmingia and Haikouichthys, finger-length swimmers with a stiffening rod down the back, which places them close to the ancestry of all vertebrates. The beds are 518 million years old, ten million years older than the Burgess Shale. They formed on a quiet muddy sea floor off a small continent drifting alone in the eastern ocean, where storm mud smothered the animals again and again. The rock now forms red-earth hills above Fuxian Lake in Yunnan.",
      then:{ where:"Shallow tropical shelf", icon:"sea",
             text:"A quiet muddy sea floor on a small isolated block, repeatedly smothered by storm mud." },
      now:{ where:"Yunnan, China", icon:"broadleaf",
            text:"Red-earth hills above Fuxian Lake, subtropical and humid, with evergreen oak, pine and terraced farmland." } },
    { plate:"ANT", lon:160, lat:-84, cat:"fossil",
      title:"The first reefs, in Antarctica", sub:"Shackleton Limestone",
      body:"Archaeocyaths, cup-shaped relatives of sponges, built the first animal reefs, and some of the best preserved lie in the Shackleton Limestone of the Transantarctic Mountains. The limestone is Early Cambrian, more than 510 million years old. Reef builders need warm, clear, shallow water, so the rock itself shows that this ground lay in the tropics. It now stands about 400 kilometres from the South Pole.",
      then:{ where:"Tropical shallow sea", icon:"reef",
             text:"Clear warm water with reef mounds a few metres high, inside the tropics." },
      now:{ where:"Transantarctic Mountains", icon:"ice",
            text:"Exposed rock and ice, roughly 400 km from the South Pole. Antarctica has two native flowering plants in total, both on the peninsula, and neither grows anywhere near here." } },
    { plate:"AUS", lon:137.5, lat:-35.7, cat:"fossil",
      title:"Emu Bay Shale", sub:"Kangaroo Island",
      body:"The Emu Bay Shale is one of a handful of places where Cambrian eyes are preserved in detail. The compound eyes found here belong to Anomalocaris and hold more than 16,000 lenses each, so fast visual hunting was already under way about 514 million years ago. The animals lived in a shallow basin on the warm northern edge of Gondwana. The shale now forms cliffs above a cold southern-ocean beach on Kangaroo Island.",
      then:{ where:"Tropical Gondwanan margin", icon:"sea",
             text:"A shallow basin on the warm northern edge of Gondwana." },
      now:{ where:"Kangaroo Island, South Australia", icon:"scrub",
            text:"Cliffs above a cold southern-ocean beach, with mallee eucalypt scrub and coastal heath behind them." } },
    { plate:"AFR", lon:24, lat:-12, cat:"forest",
      title:"An empty continent", sub:"What was growing on land",
      body:"Cambrian land carried no plants. With no roots there was no soil and no riverbanks, and rivers spread into wide braided sheets across bare rock and sand. Damp hollows held crusts of cyanobacteria and green algae, and that was the whole land flora 510 million years ago. The same ground in central Africa now carries the Congo rainforest.",
      then:{ where:"Bare rock across every continent", icon:"microbe",
             text:"Coloured microbial films in wet ground; everything else scoured stone." },
      now:{ where:"Central Africa", icon:"broadleaf",
            text:"The same ground carries the Congo rainforest, with a canopy 40 metres up and about 10,000 plant species." } }
  ]
},
{
  id:"ord", name:"Ordovician", ma:445, span:"485–443 million years ago",
  colour:"#009270", accent:"#2BB894", view:[-20,-40],
  headline:"An ice sheet grows over the Sahara",
  body:[
    "From 485 to 443 million years ago Gondwana drifts across the South Pole, and the part sitting on the pole is the rock that is now the central Sahara. An ice sheet spreads over what will become Algeria, Libya, Mauritania and Niger, and the grooves its base cut into the bedrock still show in the desert.",
    "The ice locks up seawater and sea level falls. The shallow seas drain off the continents and about 85 percent of marine species die, the first of the five great mass extinctions. On land the first plants, liverwort-like and only millimetres tall, take hold in damp ground."
  ],
  facts:[
    ["North pole","Open ocean"],
    ["South pole","Under what is now the central Sahara"],
    ["Ice","A continental ice sheet across northwest Gondwana"],
    ["Land plants","Millimetre-scale, liverwort-like, in wet ground only"]
  ],
  strata:"Shelly limestone across the flooded tropics, as around Cincinnati and the Baltic coast of Estonia, and glacial tillite across North Africa at the end of the period.",
    plates:{ NAM:[-71.5,-8.1,-11.9], EUR:[-14.9,-48.4,11.9], SIB:[-78.8,16,72],
           CHI:[512.4,-13.6,28], IND:[206.5,-31,32], AFR:[232.8,-71.1,122.3],
           SAM:[-72.4,-47.9,125.7], AUS:[206.7,-3.4,-67.6], ANT:[-124.4,-25.2,99.7],
           MAD:[206.9,-42.4,110.3] },
  ice:[{ plate:"AFR", lon:2, lat:24, r:30 }],
  sites:[
    { plate:"AFR", lon:3, lat:26, cat:"ice",
      title:"The Saharan ice sheet", sub:"Hirnantian glaciation",
      body:"Glacial pavements and tillites run in a belt across North Africa, left by the Hirnantian glaciation about 445 million years ago. Kilometres of ice ground north from a dome centred close to the pole. In southern Algeria you can stand on bedrock scored by parallel grooves that point away from that dome, in a desert where it now rains a few millimetres a year.",
      then:{ where:"Polar ice cap", icon:"ice",
             text:"Kilometres of ice, grinding north from a dome centred close to the pole." },
      now:{ where:"Algeria, Libya, Mauritania", icon:"dune",
            text:"Hyper-arid desert. Date palms in oases, acacia and tamarisk along dry watercourses." } },
    { plate:"NAM", lon:-73.8, lat:42.8, cat:"event",
      title:"The first Appalachian mountains", sub:"Taconic orogeny",
      body:"The Taconic orogeny is the first of three collisions that built the Appalachians. About 450 million years ago a chain of volcanic islands in the Iapetus Ocean ran into the eastern edge of Laurentia, near the equator, and was scraped onto it. The islands crumpled against a tropical carbonate shelf and shed mud westward into a deepening trough. The deformed rock is what you walk on in the Taconic Range and the Berkshires.",
      then:{ where:"Equatorial island-arc collision", icon:"volcano",
             text:"Volcanic islands crumpling against a tropical carbonate shelf, shedding mud westward into a deepening trough." },
      now:{ where:"Eastern New York and western Massachusetts", icon:"broadleaf",
            text:"Worn-down ridges under northern hardwood forest of sugar maple, American beech and yellow birch, with hemlock in the ravines." } },
    { plate:"AFR", lon:-6, lat:31, cat:"fossil",
      title:"Fezouata Biota", sub:"Early in the period, about 478 Ma",
      body:"The Fezouata Biota is a soft-bodied fauna about 478 million years old. It includes filter-feeding relatives of Anomalocaris two metres long, Cambrian-style animals still thriving tens of millions of years after they were thought to have died out. They lived on a storm-swept muddy shelf in cold water at high southern latitude, which is unusual, because most deposits of this kind are tropical. The beds now lie in stony desert near Zagora, Morocco.",
      then:{ where:"Cold shelf sea, far south", icon:"sea",
             text:"Storm-swept muddy shelf at high southern latitude, on the margin of Gondwana." },
      now:{ where:"Zagora, Morocco", icon:"dune",
            text:"Stony desert on the edge of the Sahara, with date palm groves along the Draa valley." } },
    { plate:"AFR", lon:56, lat:21, cat:"forest",
      title:"The first land plants", sub:"Cryptospores in Oman",
      body:"Tough spore clusters in groups of four turn up in Ordovician rock in Oman, long before any recognisable plant fossil. The spores are about 455 million years old and match what liverworts produce, the earliest firm evidence of plants living out of water. The plants grew as low mats on wet sand and rock, none taller than a coin is wide. The rock now lies under the desert and gravel plains of Oman.",
      then:{ where:"Damp ground, Gondwanan margin", icon:"moss",
             text:"Low mats hugging wet sand and rock, with no roots and no vascular tissue." },
      now:{ where:"Oman", icon:"dune",
            text:"Desert and gravel plain, with frankincense trees on the escarpments and a narrow monsoon-green belt in the far south." } }
  ]
},
{
  id:"sil", name:"Silurian", ma:425, span:"443–419 million years ago",
  colour:"#B3E1B6", accent:"#B3E1B6", view:[-10,-20],
  headline:"Plants get stems, and continents start to collide",
  body:[
    "From 443 to 419 million years ago the rock that is now northern Europe (Baltica) closes on North America, and the Iapetus Ocean between them narrows. The collision pushes up the Caledonian mountains along what will become Scotland, Norway and eastern Greenland.",
    "With the ice gone, sea level rises and reefs rebuild across the tropics. On land Cooksonia appears, a leafless forking stem a few centimetres tall and the first plant with internal plumbing for water. The first fish with jaws swim offshore, and millipedes and early arachnids have left the water."
  ],
  facts:[
    ["North pole","Open ocean"],
    ["South pole","Over Gondwana, near what is now southern Africa"],
    ["Mountains rising","The Caledonides, along the closing Iapetus suture"],
    ["Tallest plant","A few centimetres"]
  ],
  strata:"Reef limestone and dolomite in the tropics: Wenlock Edge in England, the island of Gotland in Sweden, and the cap rock of Niagara Falls.",
    plates:{ NAM:[-38.9,-13,-18.8], EUR:[10.4,-34.4,28.4], SIB:[-63.9,22,62], CHI:[358.8,-16,38],
           IND:[199.7,-37.7,0.7], AFR:[237.3,-76.9,95], SAM:[-71.5,-48.9,108.4],
           AUS:[200.2,-10.1,-73.3], ANT:[-129.3,-31.1,77.4], MAD:[200,-49.1,72.7] },
  ice:[],
  sites:[
    { plate:"EUR", lon:-2.9, lat:52, cat:"forest",
      title:"Cooksonia", sub:"The first vascular plant",
      body:"Cooksonia is the first plant with vascular tissue, found in Welsh and Irish rock about 430 million years old. It stands no bigger than a thumbnail: a bare green stem forks once or twice and ends in a rounded spore capsule, with a thin strand of water-conducting cells running up the middle. Everything from a fern to a redwood is built on that strand. It grew in patches on the wet coastal flats of a small continent, Avalonia, and the rock now lies under sheep pasture in the Welsh Borders.",
      then:{ where:"Wet coastal flats, Avalonia", icon:"moss",
             text:"Patches of low forking stems on mud and sand beside the sea, with no leaves and no roots." },
      now:{ where:"Welsh Borders", icon:"broadleaf",
            text:"Sheep pasture, hedgerow, and oak and ash woodland on the old red hills." } },
    { plate:"EUR", lon:17, lat:57.5, cat:"event",
      title:"The Caledonian collision", sub:"Iapetus closes",
      body:"The Caledonian mountains rose about 425 million years ago, where Baltica swung into Laurentia and squeezed the Iapetus Ocean shut. The belt stood as high as the Himalaya does now, at about 30° south, and shed sand into basins on either side. Its eroded roots now lie in four places that used to be continuous: the Scottish Highlands, the Norwegian mountains, eastern Greenland and the northern Appalachians.",
      then:{ where:"A continental collision at about 30° south", icon:"volcano",
             text:"A rising mountain chain along a suture, shedding sand into basins on either side." },
      now:{ where:"Scandinavia and Scotland", icon:"taiga",
            text:"Worn plateaus and fjords under spruce, pine and birch in Norway; heather moor and remnant Caledonian pinewood in Scotland." } },
    { plate:"AUS", lon:148, lat:-34, cat:"fossil",
      title:"Reefs return", sub:"After the Ordovician extinction",
      body:"Tabulate and rugose corals and stromatoporoid sponges rebuilt tropical reefs after the Ordovician extinction, about 425 million years ago. Sea scorpions (eurypterids), some over two metres long, hunted the same warm, clear shelf seas, and they are the largest arthropods that have ever lived. Silurian reef limestone is quarried today from Gotland to New South Wales, where it forms hills and caves inland of the Great Dividing Range.",
      then:{ where:"Warm shelf sea", icon:"reef",
             text:"Coral and sponge reef mounds in clear, shallow, tropical water." },
      now:{ where:"New South Wales", icon:"scrub",
            text:"Limestone hills and caves inland of the Great Dividing Range, under dry eucalypt woodland." } }
  ]
},
{
  id:"dev", name:"Devonian", ma:385, span:"419–359 million years ago",
  colour:"#CB8C37", accent:"#DFA359", view:[-15,-8],
  headline:"Forests appear, and fish start walking",
  body:[
    "From 419 to 359 million years ago North America and northern Europe ride together as one continent, Laurussia, straddling the equator. Its hot, dry interior fills with rust-red sand, the Old Red Sandstone that much of Britain, Norway and the Catskills is built from.",
    "Plants grow wood and roots, and by the end of the period forests stand thirty metres tall, the height of a ten-storey building. Roots break rock into soil, and the nutrients that wash off it feed algal blooms that strip oxygen from the sea and help drive a mass extinction. In the shallows, lobe-finned fish with wrists and ribs prop themselves up among the weeds."
  ],
  facts:[
    ["North pole","Open ocean"],
    ["South pole","Over Gondwana, near what is now Argentina and southern Africa"],
    ["New that period","Wood, roots, seeds, soil and forests"],
    ["Atmosphere","Carbon dioxide falling steeply as forests spread"]
  ],
  strata:"Red desert sandstone across Laurussia, seen as the Old Red Sandstone of Britain and Norway and the Catskill Delta of New York, with reef limestone offshore.",
    plates:{ NAM:[6.2,1,33.2], EUR:[41.8,-16.3,-9], SIB:[62.8,28,40], CHI:[225.3,-14,34],
           IND:[185.6,-47,-28.6], AFR:[116.2,-88.7,9], SAM:[-61.7,-57.1,53],
           AUS:[192.7,-20,-92.2], ANT:[-136.6,-44.5,3.3], MAD:[180.9,-58.1,-20] },
  ice:[],
  sites:[
    { plate:"NAM", lon:-74.4, lat:42.4, cat:"forest",
      title:"The Gilboa forest", sub:"386 million years old",
      body:"The Gilboa forest is a stand of fossil tree stumps still rooted where they grew, 386 million years old. Quarrying for a dam in 1920 uncovered dozens of them. They belong to Eospermatopteris, a tree shaped like a giant celery stalk with a flared base and a crown of branches in place of leaves, and a nearby site at Cairo preserves Archaeopteris root systems more than eleven metres across. The trees grew on a humid tropical floodplain at about 15° south that floods buried again and again. The stumps now sit in Catskill hill country in Schoharie County, New York.",
      then:{ where:"Tropical river plain, about 15° south", icon:"fern",
             text:"A humid floodplain forest of tall branching trunks, repeatedly buried by floods." },
      now:{ where:"Schoharie County, New York", icon:"broadleaf",
            text:"Catskill hill country under maple, beech and hemlock. Some of the fossil stumps are set up in the village of Gilboa." } },
    { plate:"EUR", lon:-2.8, lat:57.4, cat:"fossil",
      title:"Rhynie chert", sub:"407 million years old",
      body:"The Rhynie chert is an entire ecosystem turned to stone cell by cell, 407 million years ago. A hot spring flooded a marshy plain with silica-rich water, and the chert preserves individual plant cells, fungal threads inside roots, springtails, mites and the oldest known insect. Low tufted plants grew around silica-crusted pools on a dry rift floor near the equator. The chert now lies under flat farmland in Aberdeenshire.",
      then:{ where:"Hot springs on an arid rift floor", icon:"moss",
             text:"Low tufted plants around silica-crusted pools, in a dry equatorial basin." },
      now:{ where:"Aberdeenshire, Scotland", icon:"grass",
            text:"Flat farmland of barley and grass leys, with a scatter of conifer shelterbelts. There is nothing to see above ground." } },
    { plate:"NAM", lon:-83, lat:77, cat:"fossil",
      title:"Tiktaalik", sub:"375 million years old",
      body:"Tiktaalik is a predator up to 2.7 metres long with gills, scales and fins, and also a neck, ribs strong enough to bear its weight, and a shoulder, elbow and wrist inside its front fin. It is 375 million years old and sits about as close to the transition from fish to four-legged animals as any fossil found so far. It lived in warm, shallow, weed-choked streams on a delta near the equator. The rock now lies on Ellesmere Island at 77° north.",
      then:{ where:"Tropical river delta near the equator", icon:"swamp",
             text:"Warm, shallow, seasonally drying channels choked with plants." },
      now:{ where:"Ellesmere Island, Nunavut", icon:"tundra",
            text:"High Arctic polar desert at 77° north. Purple saxifrage, Arctic willow a few centimetres tall, and months of darkness." } },
    { plate:"AFR", lon:26, lat:-33, cat:"fossil",
      title:"Tetrapods outside the tropics", sub:"Waterloo Farm",
      body:"Waterloo Farm in South Africa has produced four-limbed animals (tetrapods) about 360 million years old. They lived in a cold tidal estuary inside the Antarctic Circle of the time, at more than 70° south, with short winter days, a long way from the Devonian tropics. The old picture had tetrapods evolving only in warm equatorial swamps, and these fossils undercut it. The site lies in thicket and grassland near Makhanda in the Eastern Cape.",
      then:{ where:"Cold estuary, more than 70° south", icon:"sea",
             text:"A cold tidal estuary a long way south of the Devonian tropics." },
      now:{ where:"Eastern Cape, South Africa", icon:"scrub",
            text:"Thicket and grassland near Makhanda, warm-temperate, with spekboom and aloes on the slopes." } }
  ]
},
{
  id:"car", name:"Carboniferous", ma:310, span:"359–299 million years ago",
  colour:"#67A599", accent:"#7FBFB2", view:[-5,-14],
  headline:"Coal swamps on the equator, ice at the pole",
  body:[
    "From 359 to 299 million years ago Laurussia sits on the equator while Gondwana slides over the South Pole. The planet runs hot and wet at the equator, and an ice sheet that will last some seventy million years grows in the south.",
    "The equatorial forest is lycopsid trees up to fifty metres tall, with green bark and shallow forked anchors in place of roots. They fall into stagnant water and pile up as peat, which is now the coal under the eastern United States, Britain, Belgium, Germany and Poland. Oxygen reaches about 30 percent of the atmosphere, against 21 percent today, and insects grow very large."
  ],
  facts:[
    ["North pole","Open ocean"],
    ["South pole","Over southern Gondwana, under a long-lived ice sheet"],
    ["Oxygen","Around 30 percent, the highest in Earth's history"],
    ["Largest insect","Meganeura, a dragonfly relative with a 70 cm wingspan"]
  ],
  strata:"Coal cyclothems across the equatorial belt, from Pennsylvania through Britain to the Donets Basin, resting on shallow-sea limestone such as the Redwall of the Grand Canyon; glacial tillite in the south.",
    plates:{ NAM:[-10.7,14.4,8], EUR:[29.1,9.1,-16.3], SIB:[128.2,34.3,35.1], CHI:[240,0.4,8],
           IND:[52.4,-64.7,28.3], AFR:[2.4,-34.4,17.5], SAM:[-38.6,-31.9,2.5],
           AUS:[121.6,-65.6,-83.3], ANT:[-30,-78.2,-24], MAD:[34.1,-57.4,1.2] },
  ice:[{ plate:"ANT", lon:0, lat:-83, r:26 },{ plate:"AFR", lon:26, lat:-30, r:20 }],
  sites:[
    { plate:"NAM", lon:-64.4, lat:45.7, cat:"forest",
      title:"Joggins Fossil Cliffs", sub:"Nova Scotia",
      body:"At Joggins, fossil lycopsid trunks stand upright in the cliff face, buried where they grew about 315 million years ago. Hollow stumps acted as pit traps, and one held Hylonomus, among the earliest known reptiles. The forest grew on a subsiding equatorial delta that flooded and reburied it again and again. The tides of the Bay of Fundy now strip the cliff back every year and expose new trunks.",
      sources:[19,208,209,210,211,212,213],
      then:{ where:"Equatorial coastal swamp", icon:"lycopod",
             text:"A subsiding delta of peat forest, flooded and reburied again and again." },
      now:{ where:"Bay of Fundy, Nova Scotia", icon:"conifer",
            text:"Red sea cliffs under the world's highest tides, backed by Acadian forest of red spruce, balsam fir, maple and birch." } },
    { plate:"NAM", lon:-88.1, lat:41.4, cat:"fossil",
      title:"Mazon Creek", sub:"Illinois",
      body:"Mazon Creek preserves soft-bodied swamp life, including jellyfish, worms and insects, inside iron carbonate nodules that split open along the fossil. The nodules are about 309 million years old. Animals that fell into the brackish channels of an equatorial delta were sealed in mud at the edge of a coal forest. One of them, the Tully monster, is so strange that palaeontologists still argue about which part of the animal kingdom it belongs to. The beds now lie under strip-mine spoil and reclaimed prairie in Grundy County, Illinois.",
      sources:[214,215,216,217],
      then:{ where:"Equatorial delta", icon:"swamp",
             text:"Brackish channels and mudflats at the edge of a coal forest, on the equator." },
      now:{ where:"Grundy County, Illinois", icon:"grass",
            text:"Strip-mine spoil heaps and reclaimed prairie, now mostly maize, soybean and tallgrass restoration." } },
    { plate:"EUR", lon:-1.5, lat:53.5, cat:"forest",
      title:"The coal measures", sub:"Northern England",
      body:"The coal measures are cycles of sandstone, shale, seatearth and coal, repeated dozens of times as sea level rose and fell with the southern ice sheet, about 310 million years ago. Each seam is a drowned equatorial forest of lycopsid trees more than thirty-five metres tall, as high as a ten-storey building. The industrial towns of Yorkshire and the East Midlands were built on top of them.",
      sources:[218,219,220,221,222,223],
      then:{ where:"Equatorial peat forest", icon:"lycopod",
             text:"Lycopsid trees more than thirty-five metres tall, with green trunks, over an understorey of tree ferns and horsetails." },
      now:{ where:"Yorkshire and the East Midlands", icon:"grass",
            text:"Farmland and former pit villages. Oak, ash and sycamore in the hedges; the mines are closed and the spoil heaps are grassed over." } },
    { plate:"AFR", lon:28, lat:-27, cat:"ice",
      title:"The Dwyka glaciation", sub:"Karoo ice age",
      body:"The Dwyka tillite is unsorted rubble dumped by an ice sheet about 300 million years ago, resting on bedrock that the ice polished and scratched. The ice was thick enough to grind the rock beneath it while this ground lay near the South Pole. The same glacial layer appears in Brazil, India, Australia and Antarctica, and matching it across those continents was central evidence for continental drift. In South Africa it now lies under the semi-arid Karoo.",
      sources:[219,224,225,226],
      then:{ where:"Under a polar ice sheet", icon:"ice",
             text:"Continental ice, thick enough to grind and polish the bedrock beneath it." },
      now:{ where:"Northern Cape and Free State, South Africa", icon:"scrub",
            text:"Semi-arid Karoo, hot and thorny, with dwarf shrubs and sweet grasses on the plains." } },
    { plate:"EUR", lon:2.75, lat:46.29, cat:"fossil",
      title:"Giant insects", sub:"Meganeura",
      body:"Meganeura was a dragonfly relative with a wingspan of about 70 centimetres, and the millipede relative Arthropleura reached two and a half metres. Both lived about 300 million years ago. Insects breathe by diffusion through tubes, so the oxygen in the air limits their size, and at roughly 30 percent oxygen that ceiling lifts. They kept to open ground among the humid equatorial forests, with no flying vertebrates to compete with. The Meganeura fossils come from the old coal basin of Commentry in the Allier, France.",
      sources:[20,21,23,227],
      then:{ where:"Oxygen-rich equatorial forest", icon:"fern",
             text:"Clearings and river margins among humid forest, with no flying vertebrates yet to compete with." },
      now:{ where:"Commentry, Allier, France", icon:"broadleaf",
            text:"The small, worked-out coal basin of Commentry in the Allier." } }
  ]
},
{
  id:"per", name:"Permian", ma:260, span:"299–252 million years ago",
  colour:"#F04028", accent:"#F0674F", view:[10,-10],
  headline:"One continent, from pole to pole",
  body:[
    "From 299 to 252 million years ago nearly all the land is joined in one continent, Pangaea, and you could walk from the north of Siberia to the south of Antarctica without crossing salt water. Only the Chinese blocks stand apart, out in the Tethys Ocean.",
    "Monsoon rain never reaches the middle of a continent that size, and the interior holds sand seas thousands of kilometres across, preserved today as the red sandstones of the American southwest and northern Europe. In the south, Glossopteris forests cover Gondwana to within a few degrees of the pole. At the end of the period the Siberian Traps erupt, and 80 to 90 percent of all species disappear."
  ],
  facts:[
    ["North pole","Open ocean"],
    ["South pole","Over Antarctica and southern Australia"],
    ["Climate","A supercontinental monsoon with a vast dead-dry interior"],
    ["Ending","The largest mass extinction known, 252 million years ago"]
  ],
  strata:"Red dune sandstone and thick salt across Pangaea's interior, including the Coconino of Arizona, the Rotliegend of Germany and the Zechstein salt under the North Sea, with Glossopteris coal in the south.",
    plates:{ NAM:[-23.1,19.3,0], EUR:[19,26.1,-13.8], SIB:[18.5,66.2,7.5], CHI:[283.7,2,39],
           IND:[48.1,-49.5,32.1], AFR:[3.3,-24.9,5.6], SAM:[-35,-32.2,-18.6],
           AUS:[93.5,-56.2,-85.3], ANT:[13.8,-70.4,-42.1], MAD:[34.5,-43.1,-7.6] },
  ice:[],
  sites:[
    { plate:"ANT", lon:162, lat:-85, cat:"forest",
      title:"Polar forests in Antarctica", sub:"Glossopteris",
      body:"Fossil tree trunks and leaf mats of Glossopteris occur in the Transantarctic Mountains, in rock about 260 million years old. The forest grew within about 10° of the South Pole, dark for months at a time. Some Glossopteris trees dropped their leaves for the polar winter and others kept them. Their growth rings are wide and end abruptly, the mark of a plant racing through a short, intense summer. The wood now weathers out of cliffs above a two-kilometre ice sheet.",
      sources:[228,229,230,231],
      then:{ where:"About 10° from the South Pole", icon:"cycad",
             text:"Seasonal forest of tongue-leaved seed plants on a river plain, dark for months at a time." },
      now:{ where:"Transantarctic Mountains", icon:"ice",
            text:"Rock, ice and wind. The fossil wood weathers out of cliffs that sit above a two-kilometre ice sheet." } },
    { plate:"AFR", lon:24, lat:-32, cat:"fossil",
      title:"The Karoo Basin", sub:"South Africa",
      body:"The Karoo Basin holds one of the most complete records anywhere of life on land through the end-Permian extinction, 252 million years ago. Below the boundary the rock is full of dicynodonts and other therapsids, mammal ancestors with differentiated teeth; above it, about seven in every ten fossils belong to the stocky survivor Lystrosaurus. The animals lived on a cool river plain at about 60° south that dried out as the extinction approached. The rock now forms the flat-topped hills of the Great Karoo.",
      sources:[232,233,234,235],
      then:{ where:"Cool temperate river plain, about 60° south", icon:"cycad",
             text:"Broad meandering rivers across a Glossopteris floodplain, drying out as the extinction approaches." },
      now:{ where:"Great Karoo, South Africa", icon:"scrub",
            text:"Semi-desert of low shrubs and flat-topped hills, hot by day and cold at night, grazed by merino sheep." } },
    { plate:"SIB", lon:94, lat:69, cat:"event",
      title:"The Siberian Traps", sub:"252 million years ago",
      body:"The Siberian Traps are a pile of lava that covered an area the size of Western Europe, erupted over roughly a million years around 252 million years ago. On its way up the magma baked and burned through a thick basin of coal, salt and organic shale. The gases that came out, carbon dioxide and methane among them, acidified the oceans and warmed the planet, and the extinction followed. The lava now forms the stepped Putorana Plateau, cut by canyons and waterfalls.",
      sources:[236,237,238,239,240,241],
      then:{ where:"Flood basalt province", icon:"volcano",
             text:"Repeated fissure eruptions across northern Pangaea over roughly a million years." },
      now:{ where:"Putorana Plateau, Siberia", icon:"taiga",
            text:"A stepped basalt plateau cut by canyons and waterfalls, under open Dahurian larch forest on permafrost." } },
    { plate:"NAM", lon:-110, lat:38, cat:"event",
      title:"The great sand sea", sub:"Pangaea's dry western edge",
      body:"The Coconino and Cedar Mesa sandstones are dunes turned to stone, between about 290 and 275 million years old. Their cross-bedding records wind directions, and small reptiles left trackways running up the dune faces. The dune fields ran along the dry western side of Pangaea with a shallow sea beside them, and Permian dune sandstones of the same kind lie beneath the North Sea and much of northern Germany. On the Colorado Plateau the old dunes now stand as the pale band high in the walls of the Grand Canyon.",
      sources:[242,243,244,245,246,247],
      then:{ where:"Coastal desert", icon:"dune",
             text:"Dune fields on the dry western side of Pangaea, beside a shallow sea." },
      now:{ where:"Colorado Plateau", icon:"conifer",
            text:"High desert of piñon pine, juniper and sagebrush, with the old dunes standing as the pale band in the Grand Canyon's upper walls and the spires of Canyonlands." } },
    { plate:"AUS", lon:150.5, lat:-32.5, cat:"forest",
      title:"Gondwanan coal", sub:"Sydney Basin",
      body:"Glossopteris peat built the coal of the Sydney Basin about 255 million years ago. The same flora built coal in India, South Africa, South America and Antarctica, all of it at high southern latitudes, and the match was one of the original arguments for a single southern supercontinent. The Sydney swamps lay at about 65° south under low-angle, strongly seasonal light. Open-cut mines in the Hunter Valley work the same seams today.",
      sources:[219,226,248,249],
      then:{ where:"Cool temperate swamp, about 65° south", icon:"cycad",
             text:"Boggy forest of Glossopteris with a strongly seasonal, low-angle light regime." },
      now:{ where:"Hunter Valley, New South Wales", icon:"scrub",
            text:"Open eucalypt woodland, vineyards and large open-cut coal mines working the same Permian seams." } }
  ]
},
{
  id:"tri", name:"Triassic", ma:220, span:"252–201 million years ago",
  colour:"#812B92", accent:"#B061C6", view:[5,0],
  headline:"Life rebuilds, and the first dinosaurs appear",
  body:[
    "From 252 to 201 million years ago Pangaea is still whole, and it has begun to pull apart along the line that will become the Atlantic. Rift valleys open through what is now the Connecticut Valley, New Jersey and Morocco, and they fill first with lakes and then with lava.",
    "No ice lies at either pole and no grass grows anywhere; conifers, cycads, ginkgos and ferns make up the vegetation. Life takes several million years to recover from the end-Permian extinction, and the groups that emerge are new, among them the first turtles, mammals and pterosaurs. The first dinosaurs appear partway through, in what is now Argentina, and stay a minor group for the rest of the period."
  ],
  facts:[
    ["North pole","Open ocean"],
    ["South pole","Ocean off Antarctica, with no ice sheet"],
    ["First appearing","Dinosaurs, mammals, pterosaurs, turtles, crocodile ancestors"],
    ["Ending","Extinction at 201 Ma as Pangaea's rifts erupt"]
  ],
  strata:"More red beds: river, lake and salt-flat deposits such as the Moenkopi and Chinle of Arizona, the Buntsandstein of Germany and the Mercia Mudstone of England.",
    plates:{ NAM:[-31.5,24,-27.7], EUR:[8,28.1,19.9], SIB:[45.2,59.1,29.8], CHI:[205,12,24],
           IND:[48.6,-50.2,34.9], AFR:[4.1,-24.9,8], SAM:[-34.2,-31.6,-15.2],
           AUS:[94.7,-57.1,-80.5], ANT:[12.5,-70.5,-35.8], MAD:[35,-43.6,-3.4] },
  ice:[],
  sites:[
    { plate:"SAM", lon:-68, lat:-30.2, cat:"fossil",
      title:"Ischigualasto", sub:"231 million years old",
      body:"Ischigualasto holds some of the earliest well-dated dinosaurs, 231 million years old. Volcanic ash layers run through the river sediments and can be dated directly, which is why the age is so firm. Eoraptor and Herrerasaurus walked here on two legs, one to three metres long, outnumbered by the rhynchosaurs and cynodonts that shared the plain. The plain was forested and seasonal, at about 45° south. It is now wind-carved desert badlands in the rain shadow of the Andes.",
      sources:[145,147,150,250,251,252,253],
      then:{ where:"Seasonal river plain, about 45° south", icon:"fern",
             text:"Volcanic ash falling on a forested floodplain with a strong wet and dry cycle." },
      now:{ where:"Valle de la Luna, San Juan, Argentina", icon:"scrub",
            text:"Wind-carved desert badlands in the Andean rain shadow, with sparse monte scrub of creosote bush and cactus." } },
    { plate:"NAM", lon:-109.8, lat:34.9, cat:"forest",
      title:"Petrified Forest", sub:"Chinle Formation, Arizona",
      body:"The Petrified Forest is whole trunks of conifers that stood up to sixty metres tall, turned to quartz log by log about 215 million years ago. Iron and manganese colour the quartz that replaced the cell walls. Most of the logs carry one name, Araucarioxylon arizonicum, though they come from several extinct conifers, and big rivers carried them north-west across a warm humid lowland at about 10° north. The logs now lie in cold semi-arid grassland at 1,700 metres, where the only trees are junipers on the mesa tops and cottonwoods along the washes.",
      sources:[254,255,256,257,258,259,260,261,262,263],
      then:{ where:"Tropical river plain, about 10° north", icon:"conifer",
             text:"Big rivers flowing north-west across a warm humid lowland, carrying logs into sandbanks." },
      now:{ where:"Painted Desert, Arizona", icon:"grass",
            text:"Cold semi-arid grassland at 1,700 m. Blue grama, saltbush and rabbitbrush, with junipers on the mesa tops and cottonwoods along the washes." } },
    { plate:"NAM", lon:-74.5, lat:40.8, cat:"event",
      title:"Pangaea starts to split", sub:"Newark rift basins",
      body:"The Newark basins are a chain of rift valleys that opened from the Carolinas to Nova Scotia about 220 million years ago, as Pangaea began to split. Deep lakes filled them, and the lake sediments record cycles driven by the Earth's orbit. Magma pushed sideways into those sediments and cooled into a sheet of dolerite. That sheet is now the Palisades, the cliff along the Hudson opposite Manhattan.",
      sources:[264,265,266,267],
      then:{ where:"Continental rift, about 15° north", icon:"volcano",
             text:"Deep lakes between fault scarps, subtropical and strongly seasonal, with lava sheets spreading through." },
      now:{ where:"Hudson Valley and New Jersey", icon:"city",
            text:"The eroded edge of the dolerite sheet is the Palisades cliff; the basin floor behind it holds the New Jersey suburbs, under oak, tulip poplar and maple." } },
    { plate:"AFR", lon:-7, lat:31.5, cat:"event",
      title:"A lava province across four continents", sub:"CAMP, 201 Ma",
      body:"The Central Atlantic Magmatic Province is one of the most extensive flood basalt provinces known, spread over more than seven million square kilometres and erupted 201 million years ago. When the rift through central Pangaea finally tore, lava came up along the seam between Africa and North America and spread across ground that is now Morocco, Iberia, eastern North America and Brazil. The carbon dioxide it released lines up with the end-Triassic extinction, which cleared the way for dinosaurs. In Morocco the basalt now forms plateaus and gorges in the High Atlas.",
      sources:[236,267,268,269,270],
      then:{ where:"Central Pangaea rift", icon:"volcano",
             text:"Fissure eruptions along the opening seam between Africa and North America." },
      now:{ where:"High Atlas, Morocco", icon:"scrub",
            text:"Basalt plateaus and gorges above argan and juniper scrub, with snow on the summits in winter." } },
    { plate:"CHI", lon:102, lat:25, cat:"fossil",
      title:"The Tethys shallows", sub:"Marine reptiles",
      body:"The Chinese blocks preserve some of the first reptiles to return to the sea, about 245 million years ago and within a few million years of the end-Permian extinction. They include ichthyosaurs, long-necked sauropterygians and the hammer-headed plant eater Atopodentatus. The blocks stood apart east of Pangaea, ringed by warm shallow carbonate platforms. The limestone now forms the karst towers and gorges of Yunnan and Guizhou.",
      sources:[153,271,272,273],
      then:{ where:"Warm Tethyan shelf", icon:"sea",
             text:"Shallow tropical carbonate platforms on isolated blocks east of Pangaea." },
      now:{ where:"Yunnan and Guizhou, China", icon:"broadleaf",
            text:"Karst limestone towers and gorges, subtropical, with evergreen broadleaf forest and rice terraces." } }
  ]
},
{
  id:"jur", name:"Jurassic", ma:155, span:"201–145 million years ago",
  colour:"#34B2C9", accent:"#4FC6DC", view:[-15,10],
  headline:"Pangaea splits into Laurasia and Gondwana",
  body:[
    "From 201 to 145 million years ago a seaway pushes east from the young Central Atlantic, joins the Tethys and cuts Pangaea in two. North America, Europe and Asia form Laurasia in the north, and South America, Africa, India, Australia and Antarctica form Gondwana in the south. This is the only interval when both names apply at once.",
    "Sea level is high and warm shallow seas cover much of Europe, while sauropods reach their largest sizes and the first birds appear. No grass or flower exists yet: ferns cover the ground, and the canopy is conifer, cycad and ginkgo."
  ],
  facts:[
    ["North pole","Open ocean, ice-free"],
    ["South pole","Over Antarctica, forested, no ice sheet"],
    ["Laurasia","North America, Europe, Asia"],
    ["Gondwana","South America, Africa, India, Australia, Antarctica"]
  ],
  strata:"Marine clay and limestone over flooded Europe, seen in the Blue Lias and Portland stone of Dorset, and dune sandstone followed by river mud in the American west, the Navajo and the Morrison.",
    plates:{ NAM:[-31.6,41.5,-15.6], EUR:[7.2,32.6,-35], SIB:[-26.8,67.5,-7.8], CHI:[103,20,18],
           IND:[50.2,-46.1,49.2], AFR:[10.2,-19,14.2], SAM:[-26.1,-26.8,-10.7],
           AUS:[91.9,-57.1,-62.5], ANT:[16.2,-64.8,-18.1], MAD:[38.5,-38.7,10.8] },
  ice:[],
  sites:[
    { plate:"NAM", lon:-108.5, lat:40, cat:"fossil",
      title:"Morrison Formation", sub:"The classic dinosaur quarry",
      body:"The Morrison Formation is one rock unit spread across the American west, about 150 million years old, that has produced Allosaurus, Stegosaurus, Apatosaurus, Diplodocus and Brachiosaurus. The landscape was seasonally dry at about 35° north, with monsoon rains and braided rivers, and conifers grew in ribbons along the channels. There was no grass, so the open ground was fern prairie. At Dinosaur National Monument a quarry wall with some 1,500 bones stands in place under a building.",
      then:{ where:"Semi-arid floodplain, about 35° north", icon:"conifer",
             text:"Open country of ferns and horsetails with gallery forest along seasonal rivers. With no grass yet, the plains were fern prairie." },
      now:{ where:"Colorado, Utah and Wyoming", icon:"scrub",
            text:"High sagebrush steppe and badlands. At Dinosaur National Monument a quarry wall with some 1,500 bones is left in place under a building." } },
    { plate:"AFR", lon:39.5, lat:-9.9, cat:"fossil",
      title:"Tendaguru", sub:"Tanzania",
      body:"Tendaguru is a bone bed about 150 million years old on the old margin of Gondwana. The animals lived on tidal flats and lagoons behind a warm shallow sea, backed by conifer and cycad woodland. German expeditions between 1909 and 1913 moved several hundred tonnes of bone to Berlin on the heads of porters, a four-day walk to the coast. The Giraffatitan skeleton mounted from it stands thirteen metres tall, the tallest mounted dinosaur in any museum. The site now lies in miombo woodland in the Lindi Region of Tanzania.",
      then:{ where:"Coastal plain on the Gondwanan margin", icon:"cycad",
             text:"Tidal flats and lagoons behind a warm shallow sea, backed by conifer and cycad woodland." },
      now:{ where:"Lindi Region, Tanzania", icon:"broadleaf",
            text:"Miombo woodland of Brachystegia and Julbernardia inland of the Indian Ocean coast, with a long dry season." } },
    { plate:"EUR", lon:11, lat:48.9, cat:"fossil",
      title:"Solnhofen", sub:"Archaeopteryx",
      body:"The Solnhofen limestone preserves feathers, jellyfish and insect wings, and every one of the dozen or so known specimens of Archaeopteryx. It is about 150 million years old, and so fine-grained that it was used for lithographic printing. It settled in oxygen-starved lagoons between reef islands in the Tethys at about 30° north, where nothing could scavenge a carcass. The quarries in the Altmühl valley of Bavaria still work it.",
      then:{ where:"Tethyan lagoon, about 30° north", icon:"reef",
             text:"Still, salty, oxygen-poor water between reef islands in a warm shallow sea." },
      now:{ where:"Altmühl valley, Bavaria", icon:"broadleaf",
            text:"Limestone hills and river valleys under beech, spruce and Scots pine, with the quarries still working." } },
    { plate:"ANT", lon:167, lat:-84.3, cat:"fossil",
      title:"Cryolophosaurus", sub:"Mount Kirkpatrick, Antarctica",
      body:"Cryolophosaurus is a seven-metre predator with a crest running crossways over its eyes, about 190 million years old. It lived in conifer and fern forest at about 75° south. Antarctica was polar then too, and ice-free, and large dinosaurs lived there through the dark winters. The bones were dug from frozen rock at 4,000 metres on Mount Kirkpatrick in the Transantarctic Mountains.",
      then:{ where:"Polar forest, about 75° south", icon:"conifer",
             text:"Conifer and fern forest on a river plain, cool and strongly seasonal, with no permanent ice." },
      now:{ where:"Transantarctic Mountains", icon:"ice",
            text:"Frozen scree at 4,000 metres, worked in a short summer window with rock saws and jackhammers." } },
    { plate:"NAM", lon:-40, lat:36, cat:"sea",
      title:"The Atlantic opens", sub:"A new ocean",
      body:"The Central Atlantic is the oldest part of the modern ocean. It began about 190 million years ago as a narrow salty gulf between North America and Africa. Its floor grows from a mid-ocean ridge that still produces crust at roughly the speed a fingernail grows, and everything east of the North American coast and west of the African coast is younger than this seam. The ocean is now about 5,000 kilometres across at this latitude.",
      then:{ where:"A narrow new seaway", icon:"sea",
             text:"A long salty gulf between North America and Africa, widening a few centimetres a year." },
      now:{ where:"The Atlantic Ocean", icon:"sea",
            text:"Around 5,000 km across at this latitude, and still widening at about 2.5 centimetres a year." } }
  ]
},
{
  id:"cre", name:"Cretaceous", ma:90, span:"145–66 million years ago",
  colour:"#7FC64E", accent:"#95D468", view:[-30,15],
  headline:"Flowers spread, and the sea cuts North America in half",
  body:[
    "From 145 to 66 million years ago Gondwana comes apart. South America separates from Africa and the South Atlantic opens from the south upward like a zip, while India breaks away and moves north faster than any large plate before or since, leaving Madagascar behind.",
    "Sea level is the highest of the last 500 million years, and a seaway from the Arctic to the Gulf of Mexico splits North America into two islands. Chalk, the compacted skeletons of microscopic algae, settles across Europe and the American interior. Flowering plants appear early in the period and dominate by its end."
  ],
  facts:[
    ["North pole","Open ocean, ice-free; forested land nearby"],
    ["South pole","Over Antarctica, forested, no ice sheet"],
    ["Sea level","Up to 250 m above today's"],
    ["Ending","Asteroid impact at Chicxulub, 66 million years ago"]
  ],
  strata:"Chalk over drowned continents, at Dover and in the Niobrara of Kansas, with dark marine shale such as the Mancos along the interior seaway.",
    plates:{ NAM:[-76.8,53.1,1.8], EUR:[22.1,47.2,-4.5], SIB:[91,62.7,-4.7],
           CHI:[111.5,30.4,11.6], IND:[47.5,-34.4,73.8], AFR:[10,-23.1,12.3],
           SAM:[-38.5,-28.3,-31.4], AUS:[96.1,-51.9,-44.7], ANT:[28.4,-67.6,5.3],
           MAD:[37.5,-32,0] },
  ice:[],
  sites:[
    { plate:"NAM", lon:-100, lat:42, cat:"sea",
      title:"Western Interior Seaway", sub:"North America divided",
      body:"The Western Interior Seaway was a shallow sea up to 900 metres deep that ran the length of North America about 90 million years ago. Its water was warm and turbid, with no reefs and large populations of swimming predators, among them mosasaurs and the five-metre fish Xiphactinus. Dinosaur faunas on its two shores evolved separately. Its floor is now the chalk and shale under Kansas, Nebraska and the Dakotas.",
      then:{ where:"A continental sea", icon:"sea",
             text:"Warm, shallow and turbid, with no reefs but huge populations of swimming predators." },
      now:{ where:"The Great Plains", icon:"grass",
            text:"Shortgrass prairie and wheat, buffalo grass and blue grama, with the chalk standing up as the Smoky Hill badlands." } },
    { plate:"CHI", lon:120.8, lat:41.6, cat:"fossil",
      title:"Jehol Biota", sub:"Liaoning, China",
      body:"The Jehol Biota preserves feathers, skin, stomach contents and the pigment structures that carry colour, in rock about 125 million years old. Sinosauropteryx, Microraptor and the early flowering plant Archaefructus come from here, and it is the richest single source of evidence that birds are dinosaurs. Volcanic ash fell into cold deep lakes in forested uplands of conifer and ginkgo. The beds are quarried for fossils today in the dry hills of western Liaoning.",
      then:{ where:"Temperate volcanic lake district", icon:"conifer",
             text:"Cool forested uplands of conifer, ginkgo and early flowering plants, with frequent ash falls." },
      now:{ where:"Western Liaoning, China", icon:"broadleaf",
            text:"Dry hills and terraced fields, cold winters, with oak, pine and a working fossil quarry economy." } },
    { plate:"IND", lon:76, lat:18, cat:"event",
      title:"India, travelling alone", sub:"A continent in transit",
      body:"India broke from Madagascar around 88 million years ago and crossed the Tethys as an island continent. It moved up to 15 centimetres a year, about four times the rate a fingernail grows. Its plants and animals evolved in isolation for tens of millions of years, and its rivers held ancestors of the frogs and caecilians still found only in the Western Ghats. That ground is now the Deccan plateau.",
      then:{ where:"An island continent in the Tethys", icon:"palm",
             text:"Tropical and isolated, with its own dinosaurs and, in its rivers, ancestors of the frogs and caecilians still found only in the Western Ghats." },
      now:{ where:"The Deccan, India", icon:"grass",
            text:"Basalt plateau under dry deciduous woodland, teak and acacia, cotton and sorghum on the black soils." } },
    { plate:"ANT", lon:-57, lat:-64, cat:"forest",
      title:"Forests in Antarctica", sub:"James Ross Island",
      body:"Fossil leaves, wood and pollen from James Ross Island record a cool temperate rainforest about 80 million years old. Southern beech, podocarp and araucarian conifer formed the canopy, with ferns and early flowering plants beneath, and hadrosaurs and armoured dinosaurs lived among them. The Antarctic Peninsula lay at around 60° south, wet and cool, with very short winter days. It now carries ice cliffs, moss beds and lichen.",
      then:{ where:"High-latitude rainforest", icon:"conifer",
             text:"Wet and cool, with very short winter days and a canopy adapted to grow hard through a brief bright summer." },
      now:{ where:"Antarctic Peninsula", icon:"ice",
            text:"Ice cliffs, moss beds and lichen. The two native flowering plants, a hair grass and a pearlwort, are spreading a little as the peninsula warms." } },
    { plate:"EUR", lon:1.3, lat:51, cat:"sea",
      title:"The chalk sea", sub:"Northern Europe",
      body:"Chalk is made almost entirely of coccoliths, calcite plates a few thousandths of a millimetre across, shed by single-celled algae. Hundreds of metres of it settled over a drowned Europe between about 100 and 66 million years ago, at roughly a centimetre every thousand years. The water was warm, clear and far from any river mouth. The chalk now stands as the Downs and the white cliffs of southern England and northern France.",
      then:{ where:"Clear open shelf sea", icon:"sea",
             text:"Warm water far from any river mouth, clear enough for algae to bloom and settle without mud." },
      now:{ where:"Southern England and northern France", icon:"grass",
            text:"The Downs and the white cliffs. Thin alkaline soil carries chalk grassland, with wild thyme, rockrose and about thirty species of orchid." } }
  ]
},
{
  id:"pgn", name:"Paleogene", ma:50, span:"66–23 million years ago",
  colour:"#FD9A52", accent:"#FDA86C", view:[-20,35],
  headline:"A hot planet with forests at both poles",
  body:[
    "From 66 to 23 million years ago Greenland separates from Europe and the North Atlantic opens between them. The lava that erupted along the tear is now Skye, Mull, the Giant's Causeway and the Faroe Islands. India reaches Asia and the Himalaya starts to rise; weathering of the new mountains will pull carbon dioxide out of the air and help cool the planet over the following tens of millions of years.",
    "The climate is the warmest sustained interval since the dinosaurs, with no permanent ice anywhere and forests at both poles. Mammals spread into the space that the dinosaurs other than birds left empty."
  ],
  facts:[
    ["North pole","Ocean at roughly 23°C in summer, no sea ice"],
    ["South pole","Over Antarctica, still forested, glaciation from 34 Ma"],
    ["Climate","Warmest sustained interval since the dinosaurs"],
    ["Collision","India meets Asia; the Himalaya begins"]
  ],
  strata:"Marine clay and sand around the North Sea, such as the London Clay, and lake beds in the American west: the Green River shales and the pink Claron limestone of Bryce Canyon.",
    plates:{ NAM:[-91.1,47.8,-1.9], EUR:[20.5,51,-3.2], SIB:[96.8,64.4,-1], CHI:[109,26,3.5],
           IND:[71,5.9,-29.1], AFR:[13,-4.2,-8.6], SAM:[-47,-26,6.6], AUS:[121,-48,-7.9],
           ANT:[0.9,-83,0.4], MAD:[41,-28,0] },
  ice:[],
  sites:[
    { plate:"NAM", lon:-90, lat:79.4, cat:"forest",
      title:"Axel Heiberg fossil forest", sub:"Canadian High Arctic",
      body:"The Axel Heiberg fossil forest is stumps of Metasequoia up to two and a half metres across, still rooted in their soil with leaf litter on top, about 45 million years old. The wood is mummified and dry enough to burn. The trees grew on a warm, wet coastal plain at about 79° north and dropped their needles for four months of continuous darkness every year. The stumps still stick out of the frozen ground of Axel Heiberg Island, in polar desert.",
      then:{ where:"Polar swamp forest", icon:"swamp",
             text:"Dawn redwood and swamp cypress on a warm wet coastal plain, dropping their needles for the dark winter." },
      now:{ where:"Axel Heiberg Island, Nunavut", icon:"tundra",
            text:"Polar desert. A few centimetres of Arctic willow, saxifrage and moss, and the stumps still sticking out of the frozen ground." } },
    { plate:"EUR", lon:0, lat:51.5, cat:"forest",
      title:"London Clay", sub:"A tropical coast at 50° north",
      body:"The London Clay has produced thousands of fossil fruits and seeds about 50 million years old, and the list reads like Southeast Asia: palms, mangrove palm, cinnamon, magnolia and custard apple. Crocodilians and turtles lived in the estuary. The Thames basin was the muddy margin of a tropical sea at about 50° north, fringed with Nypa mangrove palm. London is built on the clay, and the Underground tunnels through it.",
      then:{ where:"Warm shallow sea and mangrove coast", icon:"palm",
             text:"A muddy tropical estuary opening into a warm shelf sea, fringed with Nypa mangrove palm." },
      now:{ where:"London", icon:"city",
            text:"London is built on it. The Underground tunnels through the clay, and it shrinks and swells enough to crack foundations in a dry summer." } },
    { plate:"EUR", lon:8.75, lat:49.9, cat:"fossil",
      title:"Messel Pit", sub:"About 48 million years old",
      body:"The Messel Pit preserves mammals complete with fur, gut contents and stomach bacteria, about 48 million years old. Bats lie with their last meal identifiable to species, and horses the size of a fox terrier are preserved pregnant. The pit was a deep crater lake ringed by warm humid forest, with stagnant bottom water and occasional releases of gas that killed animals at the surface. It is now an abandoned oil-shale quarry near Darmstadt in Hesse.",
      then:{ where:"Crater lake in subtropical forest", icon:"broadleaf",
             text:"A deep maar lake ringed by warm humid forest, occasionally releasing gas that killed animals at the surface." },
      now:{ where:"Hesse, Germany", icon:"broadleaf",
            text:"An abandoned oil-shale quarry near Darmstadt, surrounded by beech and oak woodland and farmland." } },
    { plate:"IND", lon:78, lat:30, cat:"event",
      title:"India hits Asia", sub:"The Himalaya begins",
      body:"The northern edge of India met the southern edge of Asia between about 55 and 50 million years ago. Neither could sink, so both crumpled, and the last of the Tethys was squeezed out between them. Marine limestone from that sea floor now sits near the summit of Everest, with fossil shells in it at 8,800 metres. The mountains still rise about a centimetre a year.",
      then:{ where:"A closing ocean", icon:"sea",
             text:"The last of the Tethys being squeezed out between two converging continents." },
      now:{ where:"The Himalaya", icon:"ice",
            text:"The highest mountains on Earth, still rising about a centimetre a year, with rhododendron and birch forest below the treeline and ice above it." } },
    { plate:"NAM", lon:-110, lat:41.5, cat:"forest",
      title:"Green River lakes", sub:"Wyoming, Utah, Colorado",
      body:"The Green River Formation is paper-thin annual layers laid down in three large lakes over millions of years, about 50 million years ago. Fossil palms, crocodiles and stingrays come out of them, alongside more complete fossil fish than anywhere else on Earth. The lakes were warm and subtropical, fringed with palm and sycamore and ringed by rising mountains. The basin is now cold high desert above 2,000 metres in Wyoming, Utah and Colorado.",
      then:{ where:"Subtropical lake basin", icon:"palm",
             text:"Warm lakes fringed with palm and sycamore, ringed by rising mountains." },
      now:{ where:"Green River basin, Wyoming", icon:"scrub",
            text:"Cold high desert above 2,000 m, sagebrush and greasewood, with winters well below freezing." } }
  ]
},
{
  id:"now", name:"Today", ma:0, span:"The present",
  colour:"#F9F97F", accent:"#E8E86A", view:[-30,12],
  headline:"The pieces, and where they ended up",
  body:[
    "Antarctica sits on the South Pole under an ice sheet up to 4.8 kilometres thick, and the Arctic is an ocean with a floating lid of ice. Ice at both poles is unusual: for most of the last 500 million years the Earth had ice at neither.",
    "The Atlantic is still opening at about 2.5 centimetres a year, roughly the rate a fingernail grows, while Africa pushes into Europe and India drives into Asia. Gondwana still shows in the living world. Southern beech, araucarian conifers and podocarps grow in Chile, New Zealand, Tasmania and New Guinea because the land they grew on split apart beneath them."
  ],
  facts:[
    ["North pole","Ocean, covered by drifting sea ice"],
    ["South pole","Antarctica, under roughly 2,700 m of ice"],
    ["Ice on land","About 10 percent of the land surface"],
    ["Still moving","Atlantic widening; Himalaya and Alps rising"]
  ],
  strata:"Glacial till, river gravel, peat and windblown loess on land, and fine ooze on the deep sea floor; most of it is loose sediment that has not yet hardened into rock.",
    plates:{ NAM:[-95,50,0], EUR:[15,52,0], SIB:[105,65,0], CHI:[108,28,0], IND:[79,20,0],
           AFR:[18,2,0], SAM:[-60,-20,0], AUS:[134,-25,0], ANT:[0,-83,0], MAD:[47,-19,0] },
  ice:[{ plate:"ANT", lon:0, lat:-90, r:22 }],
  sites:[
    { plate:"SAM", lon:-72.5, lat:-41.5, cat:"forest",
      title:"Valdivian rainforest", sub:"Living Gondwana",
      body:"Southern beech (Nothofagus) grows in Chile, Argentina, New Zealand, Tasmania, mainland Australia and New Guinea, and nowhere else. Its seeds do not travel far or survive salt water. The same lineage grew across southern Gondwana, Antarctica included, while the pieces were joined, and its range today maps the continent that broke up around it. In Chile it grows in the Valdivian rainforest, under three metres of rain a year.",
      then:{ where:"Gondwanan forest", icon:"conifer",
             text:"The same lineage grew across southern Gondwana, Antarctica included, when the pieces were joined." },
      now:{ where:"Los Ríos and Los Lagos, Chile", icon:"broadleaf",
            text:"Cool temperate rainforest of coigüe, ulmo and alerce, with three metres of rain a year and a fern and bamboo understorey." } },
    { plate:"AUS", lon:150.5, lat:-33.2, cat:"forest",
      title:"Wollemi pine", sub:"Found alive in 1994",
      body:"The Wollemi pine was known only as a fossil until 1994, when a park ranger abseiled into a canyon in the Blue Mountains and found fewer than a hundred trees growing. Its lineage goes back more than 100 million years, to the araucarian forests that covered southern Gondwana in the Cretaceous. The survivors grow in a single sandstone canyon with its own damp microclimate. The location is kept secret to protect the trees from introduced root pathogens.",
      then:{ where:"Cretaceous Gondwanan forest", icon:"conifer",
             text:"Part of a widespread araucarian forest across southern Gondwana." },
      now:{ where:"Wollemi National Park, New South Wales", icon:"conifer",
            text:"A single sandstone canyon with its own damp microclimate, surrounded by dry eucalypt forest." } },
    { plate:"ANT", lon:0, lat:-90, cat:"ice",
      title:"The South Pole", sub:"Under the ice",
      body:"The ice at the geographic South Pole is about 2,700 metres thick, and the bedrock beneath lies near sea level. Ice cores drilled nearby hold a continuous record of the atmosphere going back 800,000 years, in air bubbles that can be sampled directly. This continent carried Glossopteris forest in the Permian and beech and conifer rainforest in the Cretaceous. Nothing grows here now, and the nearest plants are mosses on the peninsula, 2,000 kilometres away.",
      then:{ where:"Forested, repeatedly", icon:"conifer",
             text:"This continent carried Glossopteris forest in the Permian and beech and conifer rainforest in the Cretaceous." },
      now:{ where:"Antarctic plateau", icon:"ice",
            text:"Nothing grows. Mean annual temperature around −49°C, and the nearest plants are mosses on the peninsula, 2,000 km away." } },
    { plate:"AFR", lon:15, lat:0, cat:"forest",
      title:"Congo Basin", sub:"On old Gondwanan crust",
      body:"The rock under the Congo rainforest is some of the oldest continental crust on the planet. It lay under the Karoo ice in the Carboniferous and deep inside Pangaea's dry interior in the Permian and Triassic. The forest on it now is the second largest in the world and holds about 10,000 plant species, a third of them found nowhere else.",
      then:{ where:"Glaciated, then desert", icon:"ice",
             text:"Under ice in the Carboniferous; deep inside Pangaea's arid interior in the Permian and Triassic." },
      now:{ where:"Central Africa", icon:"broadleaf",
            text:"Lowland tropical rainforest, 1,600–2,000 mm of rain a year, with a canopy 40 m up and okoumé and sapele above it." } },
    { plate:"NAM", lon:-89.5, lat:21.4, cat:"event",
      title:"Chicxulub", sub:"66 million years ago",
      body:"Chicxulub is a crater 180 kilometres across, made 66 million years ago when an asteroid about 10 kilometres wide struck a shallow sea on the southern edge of North America. The sea floor was sulphur-rich gypsum and limestone, and the vaporised sulphate blocked sunlight for years, which is part of why the impact was so lethal. The crater now lies buried under the Yucatán. At the surface it shows only as a semicircle of sinkholes (cenotes) in flat limestone under dry tropical forest.",
      then:{ where:"Shallow carbonate platform", icon:"reef",
             text:"Warm shelf sea over gypsum and limestone, on the southern edge of North America." },
      now:{ where:"Yucatán, Mexico", icon:"broadleaf",
            text:"Flat limestone plain under dry tropical forest, with the crater rim marked by a semicircle of cenotes." } }
  ]
}
];

/* ===================== look-alikes and relatives =====================
   Paired places that resemble each other, in two groups:
     inherited  - alike because they were once joined
     convergent - alike for other reasons
   period: the PERIODS id that best shows the comparison.
   places: pinned to a plate at modern lon/lat, like sites. `label` is used
   in the panel, `short` on the globe. A place may carry its own `period`
   when the two halves of a comparison belong to different times.
   New Zealand, Tasmania and New Guinea ride on the AUS plate and Puerto
   Rico on NAM; none of them has an outline of its own.                    */

const COMPARE_GROUPS = [
  { id:"inherited", title:"Inherited",
    sub:"Alike because they were once joined" },
  { id:"convergent", title:"Convergent",
    sub:"Alike for other reasons" }
];

const COMPARISONS = [
{
  id:"dwyka", group:"inherited", period:"car",
  sources:[226,298,305,361],
  title:"One glacial deposit on five continents",
  body:"The Dwyka tillite of South Africa is rubble dropped by an ice sheet onto bedrock that the ice had scratched. The Itararé beds of Brazil, the Talchir boulder bed of India and matching layers in Australia and Antarctica have the same makeup and the same Carboniferous to Permian age. Put the continents back together and the scratches line up as the tracks of ice spreading across one polar landmass from several centres. The resemblance is inherited, and Wegener used it as evidence for drift.",
  places:[
    { plate:"AFR", lon:24.6, lat:-28.6, label:"Dwyka tillite, South Africa", short:"Dwyka" },
    { plate:"SAM", lon:-50,  lat:-25,   label:"Itararé Group, Brazil", short:"Itararé" },
    { plate:"IND", lon:85.2, lat:21,    label:"Talchir boulder bed, India", short:"Talchir" },
    { plate:"AUS", lon:138.5,lat:-35.1, label:"Hallett Cove, South Australia", short:"Australia" },
    { plate:"ANT", lon:165,  lat:-84,   label:"Pagoda Formation, Antarctica", short:"Antarctica" }
  ]
},
{
  id:"mesosaurus", group:"inherited", period:"per",
  sources:[40,362,364],
  title:"Mesosaurus",
  body:"The Irati Formation of southern Brazil and the Mangrullo Formation of Uruguay hold Mesosaurus, an aquatic reptile usually under a metre long, in Early Permian rock. The Whitehill Formation of Namibia and South Africa holds the same animal in rock of the same age, and it is found nowhere else. It was too small a swimmer to cross an ocean. The two basins lay side by side in the interior of Gondwana, so the match is inherited.",
  places:[
    { plate:"SAM", lon:-50.5, lat:-25.5, label:"Irati Formation, Brazil", short:"Brazil" },
    { plate:"AFR", lon:18.5,  lat:-26.5, label:"Whitehill Formation, Namibia", short:"Namibia" }
  ]
},
{
  id:"lystrosaurus", group:"inherited", period:"tri",
  sources:[362,365,366,367],
  title:"Lystrosaurus",
  body:"The Karoo of South Africa, the Panchet beds of India and Coalsack Bluff in Antarctica all hold Lystrosaurus in Early Triassic rock. It was a stocky plant-eater the size of a pig and the commonest land animal of its time. A walking animal reached all three places because they were one piece of land, so the match is inherited.",
  places:[
    { plate:"AFR", lon:26,    lat:-31,   label:"Karoo Basin, South Africa", short:"Karoo" },
    { plate:"IND", lon:87,    lat:23.6,  label:"Panchet Formation, India", short:"India" },
    { plate:"ANT", lon:162.4, lat:-84.2, label:"Coalsack Bluff, Antarctica", short:"Antarctica" }
  ]
},
{
  id:"glossopteris", group:"inherited", period:"per",
  sources:[226,368,369],
  title:"Glossopteris",
  body:"Coalfields in Brazil, South Africa, Madagascar, India, Australia and Antarctica all carry Glossopteris, a Permian seed fern with tongue-shaped leaves. The plant spread over land that was joined at the time, so the match is inherited. Its coal is mined today in the tropics and the desert, and it outcrops beside polar ice.",
  places:[
    { plate:"SAM", lon:-51,   lat:-28,   label:"Paraná Basin, Brazil", short:"Brazil" },
    { plate:"AFR", lon:29,    lat:-26,   label:"Witbank coalfield, South Africa", short:"South Africa" },
    { plate:"MAD", lon:44.5,  lat:-24,   label:"Sakoa Basin, Madagascar", short:"Madagascar" },
    { plate:"IND", lon:87,    lat:23.7,  label:"Raniganj coalfield, India", short:"India" },
    { plate:"AUS", lon:150.5, lat:-32.5, label:"Sydney Basin, Australia", short:"Australia" },
    { plate:"ANT", lon:162,   lat:-85,   label:"Transantarctic Mountains", short:"Antarctica" }
  ]
},
{
  id:"caledonides", group:"inherited", period:"dev",
  sources:[358,359,360,363],
  title:"One mountain belt on both sides of the Atlantic",
  body:"The northern Appalachians, the mountains of eastern Greenland, the Scottish Highlands and the Norwegian Caledonides carry the same rock types and the same fold directions. All four were raised between the Ordovician and the Devonian, where Laurentia collided with Baltica and Avalonia. They were one mountain belt, and the Atlantic opened along its length much later and split it.",
  places:[
    { plate:"NAM", lon:-72,  lat:44, label:"Northern Appalachians", short:"Appalachians" },
    { plate:"NAM", lon:-25,  lat:72, label:"East Greenland", short:"Greenland" },
    { plate:"EUR", lon:-4.5, lat:57, label:"Scottish Highlands", short:"Scotland" },
    { plate:"EUR", lon:9,    lat:62, label:"Norwegian Caledonides", short:"Norway" }
  ]
},
{
  id:"nothofagus", group:"inherited", period:"cre",
  sources:[370,371],
  title:"Southern beech",
  body:"Southern beech (Nothofagus) grows in Chile, Tasmania, New Zealand and New Guinea, and its fossil leaves occur on the Antarctic Peninsula. Its seeds travel poorly across sea water. The forests were continuous across southern Gondwana in the Cretaceous and were carried apart as it broke up, so most of the match is inherited. DNA dating shows that the New Zealand trees crossed the Tasman Sea later.",
  places:[
    { plate:"SAM", lon:-72.5, lat:-41,   label:"Valdivian forest, Chile", short:"Chile" },
    { plate:"ANT", lon:-57,   lat:-64,   label:"Fossil leaves, Antarctic Peninsula", short:"Antarctica" },
    { plate:"AUS", lon:146.5, lat:-42,   label:"Tasmania", short:"Tasmania" },
    { plate:"AUS", lon:172,   lat:-42.5, label:"South Island, New Zealand", short:"New Zealand" },
    { plate:"AUS", lon:145,   lat:-6,    label:"New Guinea highlands", short:"New Guinea" }
  ]
},
{
  id:"redbeds", group:"inherited", period:"per",
  sources:[348,355,356,357],
  title:"Permian and Triassic red beds",
  body:"The Coconino Sandstone of Arizona, the Penrith Sandstone of northern England and the Buntsandstein of Germany are desert sandstones of Permian and Triassic age. In the Coconino and the Penrith, wind rounded and sorted the grains. The Penrith is brick red, and the Coconino stayed pale. All three formed in one desert belt in the interior of Pangaea, so the match is inherited.",
  places:[
    { plate:"NAM", lon:-112, lat:36,   label:"Coconino Sandstone, Arizona", short:"Coconino" },
    { plate:"EUR", lon:-2.7, lat:54.7, label:"Penrith Sandstone, England", short:"Penrith" },
    { plate:"EUR", lon:9.5,  lat:50.5, label:"Buntsandstein, Germany", short:"Buntsandstein" }
  ]
},
{
  id:"laterite", group:"convergent", period:"now",
  sources:[377,378],
  title:"Red soil in Puerto Rico and India",
  body:"The red soil of Puerto Rico is laterite on a Cretaceous volcanic island arc that was never part of Gondwana. The red soil of Kerala is laterite on old Gondwanan crust. Laterite forms wherever tropical heat and rain strip everything out of the soil except iron and aluminium oxides, so the match comes from similar conditions acting separately. The plants the two places share, among them mango, tamarind, breadfruit, jackfruit and flamboyán, arrived by ship in the last 500 years.",
  places:[
    { plate:"NAM", lon:-66.5, lat:18.2, label:"Puerto Rico", short:"Puerto Rico" },
    { plate:"IND", lon:76.2,  lat:11,   label:"Kerala, India", short:"Kerala" }
  ]
},
{
  id:"succulents", group:"convergent", period:"now",
  sources:[372],
  title:"Cacti and euphorbias",
  body:"The cacti of the Sonoran Desert have ribbed green stems that store water, spines, and no leaves. The succulent euphorbias of South Africa's Eastern Cape have the same build. The two families share no succulent ancestor, and each arrived at that body separately under drought.",
  places:[
    { plate:"NAM", lon:-111.5, lat:32,    label:"Sonoran Desert, Arizona", short:"Cacti" },
    { plate:"AFR", lon:25.5,   lat:-33.3, label:"Eastern Cape, South Africa", short:"Euphorbias" }
  ]
},
{
  id:"fogdeserts", group:"convergent", period:"now",
  sources:[373,374],
  title:"Atacama and Namib",
  body:"The Atacama lies on the west coast of South America at 24° south, where the cold Humboldt Current chills the air so that it carries fog and almost no rain. The Namib lies on the west coast of Africa at the same latitude, beside the cold Benguela Current, under the same fog. The resemblance comes from ocean circulation acting separately on two coasts.",
  places:[
    { plate:"SAM", lon:-70, lat:-24, label:"Atacama Desert, Chile", short:"Atacama" },
    { plate:"AFR", lon:15,  lat:-24, label:"Namib Desert, Namibia", short:"Namib" }
  ]
},
{
  id:"polar", group:"convergent", period:"ord",
  sources:[302,375,376],
  title:"Ice on the Sahara, ice on Antarctica",
  body:"At the end of the Ordovician the central Sahara lay at the South Pole under an ice sheet, and its bedrock still carries the grooves. Antarctica sits on the pole now, under ice up to 4.8 kilometres thick. Each was glaciated because of where it sat at the time, and sitting on the pole is all the two share.",
  places:[
    { plate:"AFR", lon:3, lat:26,  label:"Central Sahara", short:"Sahara", period:"ord" },
    { plate:"ANT", lon:0, lat:-90, label:"Antarctica", short:"Antarctica", period:"now" }
  ]
}
];

/* ===================== stratigraphic columns =====================
   layers run bottom to top. Each layer:
     name, age (label), period (PERIODS id, or null if off this timeline),
     to (optional younger PERIODS id when a unit spans two periods),
     env (one sentence), thick (note), m (metres used for drawing),
     lith: sandstone | shale | limestone | chalk | coal | mixed | crystalline | till
   Other entries:
     { gap:true, ... }    an unconformity, drawn as a wavy break
     { marker:true, ... } a labelled line with no thickness
   patchy:true draws the unit as channel fills cut into the one below.      */

const COLUMNS = [
{
  id:"canyon", title:"Grand Canyon and Grand Staircase", short:"Grand Canyon",
  where:"Arizona and Utah", plate:"NAM", lon:-112, lat:36.5,
  intro:"The canyon wall runs from Precambrian basement at the river to Permian limestone at the rim. North of the rim the Grand Staircase carries on upward through the Mesozoic to the pink cliffs of Bryce Canyon.",
  layers:[
    { name:"Vishnu Schist and Zoroaster Granite", age:"Precambrian, about 1,750 million years old",
      sources:[355,379,381],
      period:null, lith:"crystalline", m:null,
      env:"Dark schist shot through with pink granite. It is the root of a mountain range that was heated and squeezed deep in the crust and then worn flat, and it is older than anything on this globe's timeline.",
      thick:"Basement; the base is not exposed" },
    { gap:true, name:"Great Unconformity", age:"Precambrian to Cambrian", period:null,
      sources:[355,380],
      note:"About 1.2 billion years missing",
      env:"Cambrian beach sand lies directly on the worn-down basement. Whatever was laid down in between was eroded away before the sea returned." },
    { name:"Tapeats Sandstone", age:"Cambrian", period:"cam", lith:"sandstone", m:60,
      sources:[355,356,379],
      env:"Coarse brown sandstone with pebbly layers at its base. It is beach and nearshore sand, laid down as the sea advanced across bare rock.",
      thick:"About 60 m; with the two units above, about 300 m" },
    { name:"Bright Angel Shale", age:"Cambrian", period:"cam", lith:"shale", m:110,
      sources:[355,356,382],
      env:"Green and purple shale with thin sandstone beds, marked by trilobite tracks and worm burrows. It settled as offshore mud when the water deepened.",
      thick:"About 110 m" },
    { name:"Muav Limestone", age:"Cambrian", period:"cam", lith:"limestone", m:130,
      sources:[355,356],
      env:"Thin-bedded grey limestone. It is lime mud from clear water further from shore, the last stage of the same advancing sea.",
      thick:"About 130 m" },
    { gap:true, name:"Ordovician and Silurian absent", age:"Ordovician and Silurian", period:"ord",
      sources:[356,379],
      note:"More than 100 million years missing",
      env:"No rock of either period survives here. The region stood at or above sea level, and anything laid down was stripped off again." },
    { name:"Temple Butte Formation", age:"Devonian", period:"dev", lith:"limestone", m:20, patchy:true,
      sources:[355,356],
      env:"Purplish dolomite and sandstone filling channels cut into the top of the Muav. Tides ran through those channels, and the unit is patchy in the eastern canyon and thickens to the west.",
      thick:"A few metres to 30 m in the east; over 100 m in the west" },
    { name:"Redwall Limestone", age:"Early Carboniferous", period:"car", lith:"limestone", m:150,
      sources:[355,356,379,382],
      env:"Grey limestone packed with crinoids, corals and brachiopods, stained red by iron washed down from the layers above. It built up on the floor of a shallow tropical sea.",
      thick:"About 150 m, forming a sheer cliff" },
    { name:"Supai Group", age:"Late Carboniferous to Permian", period:"car", to:"per", lith:"mixed", m:300,
      sources:[355,356,379],
      env:"Red mudstone and sandstone in alternating ledges and slopes. It records a low coastal plain of river sand and the first dunes, laid down as the sea withdrew.",
      thick:"About 300 m" },
    { name:"Hermit Shale", age:"Permian", period:"per", lith:"shale", m:90,
      sources:[355,356,382],
      env:"Soft red siltstone and mudstone with seed fern and conifer fossils. A river floodplain laid it down.",
      thick:"About 90 m" },
    { name:"Coconino Sandstone", age:"Permian", period:"per", lith:"sandstone", m:100,
      sources:[355,356,382],
      env:"Pale, clean quartz sandstone in sweeping cross-beds. It is a field of desert dunes, and reptiles left trackways walking up the dune faces.",
      thick:"About 100 m" },
    { name:"Toroweap and Kaibab formations", age:"Permian", period:"per", lith:"limestone", m:200,
      sources:[355,356,379,382],
      env:"Cream limestone with chert nodules and sea shells. A shallow sea returned over the dunes and laid it down, and the Kaibab now forms the canyon rim.",
      thick:"About 200 m together" },
    { marker:true, name:"Canyon rim",
      sources:[355,387],
      note:"Younger layers are stripped off here and survive to the north, in the Grand Staircase" },
    { name:"Moenkopi and Chinle formations", age:"Triassic", period:"tri", lith:"mixed", m:400,
      sources:[384,385,387],
      env:"Red mudstone below, banded purple and grey clay above. Tidal flats gave way to a river plain whose buried logs became the petrified wood of the Painted Desert.",
      thick:"Several hundred metres; drawn as 400 m" },
    { name:"Navajo Sandstone", age:"Jurassic", period:"jur", lith:"sandstone", m:500,
      sources:[383,386,387],
      env:"White and pink sandstone in cross-beds many metres tall. It is one of the largest dune fields known, and it now forms the cliffs of Zion.",
      thick:"Up to 600 m at Zion" },
    { name:"Dakota Sandstone and Mancos Shale", age:"Cretaceous", period:"cre", lith:"shale", m:300,
      sources:[387,388],
      env:"Tan beach sandstone under dark grey marine shale. The Western Interior Seaway flooded the region and laid both down.",
      thick:"About 300 m" },
    { name:"Claron Formation", age:"Paleogene", period:"pgn", lith:"limestone", m:300,
      sources:[387,388,389],
      env:"Pink and white limestone with mudstone. It settled in lakes and streams on a basin floor near sea level, and it weathers into the hoodoos of Bryce Canyon.",
      thick:"Up to 300 m" }
  ]
},
{
  id:"england", title:"Southern England, Somerset to Dover", short:"Southern England",
  where:"Somerset, Dorset, the Weald and the Thames basin", plate:"EUR", lon:0, lat:51,
  sources:[357,400,403],
  intro:"Travelling east from the Mendip Hills to the Kent coast you cross younger and younger rock. Stacked in order, the layers record a drift from south of the equator to 51° north.",
  layers:[
    { name:"Old Red Sandstone", age:"Devonian", period:"dev", lith:"sandstone", m:500,
      sources:[395,400,402,403],
      env:"Red and purple sandstone with pebble beds. Rivers carried it south from the new Caledonian mountains across a dry plain south of the equator.",
      thick:"Hundreds of metres in the Mendips; kilometres in Wales" },
    { name:"Carboniferous Limestone", age:"Early Carboniferous", period:"car", lith:"limestone", m:900,
      sources:[396],
      env:"Grey limestone full of corals and crinoids, the rock of Cheddar Gorge and the Avon Gorge. It built up in a clear tropical sea.",
      thick:"About 900 m in the Mendips" },
    { name:"Coal Measures", age:"Late Carboniferous", period:"car", lith:"coal", m:2000,
      sources:[397,399,403],
      env:"Repeated cycles of sandstone, shale and coal. Each coal seam is one equatorial swamp forest on a river delta, drowned and then rebuilt.",
      thick:"More than 2,000 m in the Somerset coalfield; not drawn to scale" },
    { gap:true, name:"Variscan unconformity", age:"Latest Carboniferous to Permian", period:"per",
      sources:[398],
      note:"Tens of millions of years missing",
      env:"The Carboniferous rocks were folded into mountains as Pangaea assembled, and then eroded. The desert beds above lie across their upturned edges." },
    { name:"Sherwood Sandstone and Mercia Mudstone", age:"Permian to Triassic", period:"per", to:"tri", lith:"sandstone", m:450,
      sources:[348,350,351,357,398],
      env:"Red dune and river sandstone under red mudstone with salt and gypsum. Dunes and flash floods in the interior of Pangaea gave way to drying salt lakes.",
      thick:"Several hundred metres; over 1,000 m in the deepest basins" },
    { name:"Blue Lias", age:"Early Jurassic", period:"jur", lith:"limestone", m:30,
      sources:[181,390,408],
      env:"Alternating bands of grey limestone and dark shale. It is the floor of a muddy sea, and it holds the ichthyosaurs and ammonites of Lyme Regis.",
      thick:"About 30 m at Lyme Regis" },
    { name:"Oxford Clay, Portland and Purbeck beds", age:"Middle Jurassic to earliest Cretaceous", period:"jur", lith:"mixed", m:300,
      sources:[392,393,394,411],
      env:"Grey clay under white limestone. A shallow sea laid down the clay and then the limestone, and the sequence ends in coastal lagoons with dinosaur footprints.",
      thick:"A few hundred metres in Dorset" },
    { name:"Wealden beds", age:"Early Cretaceous", period:"cre", lith:"shale", m:800,
      sources:[391,410],
      env:"Sand and clay in thick alternating units. Rivers spread them over a plain where Iguanodon lived, a dinosaur first described from teeth found in Sussex.",
      thick:"Up to 850 m in the Weald; not drawn to scale" },
    { name:"Chalk", age:"Late Cretaceous", period:"cre", lith:"chalk", m:400,
      sources:[352,407],
      env:"Soft white limestone made of coccoliths, with bands of flint. It settled as ooze in a clear open sea over a drowned Europe, and it forms the cliffs at Dover.",
      thick:"Up to about 560 m in Hampshire and Sussex" },
    { gap:true, name:"Top of the Chalk eroded", age:"Latest Cretaceous to early Paleogene", period:"pgn",
      sources:[352,401,406],
      note:"More than 10 million years missing",
      env:"The sea floor was lifted and worn down before Paleogene sand and clay covered it. The end of the Cretaceous is missing here." },
    { name:"London Clay", age:"Paleogene", period:"pgn", lith:"shale", m:150,
      sources:[353,401,405,409],
      env:"Stiff blue-grey clay that weathers brown. It is the mud of a tropical sea margin, and it holds the fossil fruits of palms and mangroves.",
      thick:"Up to 150 m" },
    { gap:true, name:"Most of the last 30 million years absent", age:"Late Paleogene to Quaternary", period:null,
      sources:[401],
      note:"About 30 million years missing",
      env:"Southern England stood as land for most of this time, gently folded by the same squeeze that raised the Alps. It was being eroded, so no rock records it." },
    { name:"Glacial till and river gravels", age:"Quaternary", period:"now", lith:"till", m:15,
      sources:[404],
      env:"Stony clay and sheets of flint gravel. Ice reached the northern edge of London and pushed the Thames south into its present valley, which the river lined with gravel terraces.",
      thick:"A few metres to a few tens of metres" }
  ]
}
];

/* ===================== labels on the globe =====================
   LANDMARKS are modern features pinned to a plate at their modern lon/lat.
   In a past period each is labelled with what that ground is now ("now the
   Appalachian Mts."); today it carries its plain name. `name` is written so
   that it reads after the word "now". Order is priority: when labels would
   overlap, earlier entries win, and the first LANDMARK_TOP are always placed first.
     kind: mountain | forest | desert | ice | region | city
   When a name will not fit, mountains, forests, deserts and ice keep their icon.

   PERIOD_LABELS are the names of the time itself:
     lands  - what a continent was called then, pinned to a plate
     oceans - fixed at [lon, lat] for that period; the smoke test checks
              that each one sits over open water                            */

const LANDMARK_TOP = 11;
const LANDMARKS = [
  /* placed first (LANDMARK_TOP of them) */
  /* New York goes first: placed second, its point would sit under the Appalachians' name */
  { plate:"NAM", lon:-74,   lat:40.7, kind:"city",     name:"New York" },
  { plate:"NAM", lon:-82.5, lat:35.8, kind:"mountain", name:"the Appalachian Mts." },
  { plate:"SAM", lon:-62,   lat:-5,   kind:"forest",   name:"the Amazon rainforest" },
  { plate:"IND", lon:84,    lat:28,   kind:"mountain", name:"the Himalaya" },
  { plate:"AFR", lon:21,    lat:0,    kind:"forest",   name:"the Congo rainforest" },
  { plate:"AFR", lon:12,    lat:22,   kind:"desert",   name:"the Sahara" },
  { plate:"SAM", lon:-69,   lat:-17,  kind:"mountain", name:"the Andes" },
  { plate:"NAM", lon:-106,  lat:39.5, kind:"mountain", name:"the Rocky Mts." },
  { plate:"SIB", lon:100,   lat:62,   kind:"forest",   name:"the Siberian taiga" },
  { plate:"EUR", lon:10,    lat:46.5, kind:"mountain", name:"the Alps" },
  { plate:"ANT", lon:165,   lat:-82,  kind:"mountain", name:"the Transantarctic Mts." },

  /* North America */
  { plate:"NAM", lon:-112.1,lat:36.1, kind:"region",   name:"the Grand Canyon" },
  { plate:"NAM", lon:-95,   lat:56,   kind:"forest",   name:"the Canadian boreal forest" },
  { plate:"NAM", lon:-40,   lat:72,   kind:"ice",      name:"the Greenland ice sheet" },
  { plate:"NAM", lon:-100,  lat:41,   kind:"region",   name:"the Great Plains" },
  { plate:"NAM", lon:-85,   lat:45,   kind:"region",   name:"the Great Lakes" },
  { plate:"NAM", lon:-119,  lat:37.5, kind:"mountain", name:"the Sierra Nevada" },
  { plate:"NAM", lon:-123.5,lat:47.5, kind:"forest",   name:"the Pacific Northwest rainforest" },
  { plate:"NAM", lon:-110.5,lat:44.6, kind:"region",   name:"Yellowstone" },
  { plate:"NAM", lon:-151,  lat:63,   kind:"mountain", name:"the Alaska Range" },
  { plate:"NAM", lon:-112,  lat:31,   kind:"desert",   name:"the Sonoran Desert" },
  { plate:"NAM", lon:-90,   lat:29.5, kind:"region",   name:"the Mississippi delta" },
  { plate:"NAM", lon:-89,   lat:20,   kind:"region",   name:"the Yucatán" },
  { plate:"NAM", lon:-105,  lat:25,   kind:"mountain", name:"the Sierra Madre" },
  { plate:"NAM", lon:-99.1, lat:19.4, kind:"city",     name:"Mexico City" },
  { plate:"NAM", lon:-118.2,lat:34,   kind:"city",     name:"Los Angeles" },
  { plate:"NAM", lon:-78,   lat:53,   kind:"region",   name:"the Canadian Shield" },
  { plate:"NAM", lon:-56,   lat:49,   kind:"region",   name:"Newfoundland" },
  { plate:"NAM", lon:-124,  lat:41,   kind:"forest",   name:"the redwood forests" },

  /* South America */
  { plate:"SAM", lon:-69.5, lat:-24,  kind:"desert",   name:"the Atacama" },
  { plate:"SAM", lon:-69,   lat:-45,  kind:"region",   name:"Patagonia" },
  { plate:"SAM", lon:-44,   lat:-21,  kind:"forest",   name:"Brazil's Atlantic Forest" },
  { plate:"SAM", lon:-62,   lat:5,    kind:"mountain", name:"the Guiana Highlands" },
  { plate:"SAM", lon:-57,   lat:-17,  kind:"region",   name:"the Pantanal" },
  { plate:"SAM", lon:-62,   lat:-35,  kind:"region",   name:"the Pampas" },
  { plate:"SAM", lon:-72.5, lat:-41,  kind:"forest",   name:"the Valdivian rainforest" },
  { plate:"SAM", lon:-46.6, lat:-23.5,kind:"city",     name:"São Paulo" },
  { plate:"SAM", lon:-68,   lat:-54,  kind:"region",   name:"Tierra del Fuego" },

  /* Africa, Arabia and Madagascar */
  { plate:"AFR", lon:22,    lat:-23,  kind:"desert",   name:"the Kalahari" },
  { plate:"AFR", lon:-4,    lat:32,   kind:"mountain", name:"the Atlas Mts." },
  { plate:"AFR", lon:31.2,  lat:30,   kind:"city",     name:"Cairo" },
  { plate:"AFR", lon:39,    lat:10,   kind:"mountain", name:"the Ethiopian Highlands" },
  { plate:"AFR", lon:35,    lat:-2.5, kind:"region",   name:"the Serengeti" },
  { plate:"AFR", lon:47,    lat:22,   kind:"desert",   name:"Arabia" },
  { plate:"AFR", lon:15,    lat:-24,  kind:"desert",   name:"the Namib" },
  { plate:"AFR", lon:-7,    lat:6.5,  kind:"forest",   name:"the West African rainforest" },
  { plate:"AFR", lon:29,    lat:-29.5,kind:"mountain", name:"the Drakensberg" },
  { plate:"AFR", lon:23,    lat:-32,  kind:"region",   name:"the Karoo" },
  { plate:"AFR", lon:0,     lat:14.5, kind:"region",   name:"the Sahel" },
  { plate:"AFR", lon:32,    lat:24,   kind:"region",   name:"the Nile valley" },
  { plate:"AFR", lon:18.5,  lat:-33.9,kind:"city",     name:"Cape Town" },
  { plate:"AFR", lon:6.5,   lat:5,    kind:"region",   name:"the Niger delta" },
  { plate:"MAD", lon:47,    lat:-19,  kind:"region",   name:"Madagascar" },

  /* Europe */
  { plate:"EUR", lon:-4.5,  lat:57,   kind:"mountain", name:"the Scottish Highlands" },
  { plate:"EUR", lon:-0.1,  lat:51.5, kind:"city",     name:"London" },
  { plate:"EUR", lon:15,    lat:63,   kind:"region",   name:"Scandinavia" },
  { plate:"EUR", lon:0.5,   lat:42.7, kind:"mountain", name:"the Pyrenees" },
  { plate:"EUR", lon:2.4,   lat:48.9, kind:"city",     name:"Paris" },
  { plate:"EUR", lon:24,    lat:47,   kind:"mountain", name:"the Carpathians" },
  { plate:"EUR", lon:-4,    lat:40,   kind:"region",   name:"Spain" },
  { plate:"EUR", lon:13,    lat:42.5, kind:"mountain", name:"the Apennines" },
  { plate:"EUR", lon:45,    lat:60,   kind:"forest",   name:"the Russian taiga" },
  { plate:"EUR", lon:23.8,  lat:52.7, kind:"forest",   name:"Białowieża Forest" },
  { plate:"EUR", lon:37.6,  lat:55.7, kind:"city",     name:"Moscow" },
  { plate:"EUR", lon:7,     lat:61,   kind:"region",   name:"the Norwegian fjords" },
  { plate:"EUR", lon:8.2,   lat:48.2, kind:"forest",   name:"the Black Forest" },
  { plate:"EUR", lon:42.5,  lat:43.5, kind:"mountain", name:"the Caucasus" },
  { plate:"EUR", lon:22,    lat:39.5, kind:"region",   name:"Greece" },
  { plate:"EUR", lon:-8,    lat:53,   kind:"region",   name:"Ireland" },

  /* Siberia */
  { plate:"SIB", lon:59,    lat:58,   kind:"mountain", name:"the Ural Mts." },
  { plate:"SIB", lon:108,   lat:53.5, kind:"region",   name:"Lake Baikal" },
  { plate:"SIB", lon:160,   lat:56,   kind:"mountain", name:"Kamchatka" },
  { plate:"SIB", lon:88,    lat:50,   kind:"mountain", name:"the Altai Mts." },
  { plate:"SIB", lon:110,   lat:72,   kind:"region",   name:"the Siberian tundra" },
  { plate:"SIB", lon:75,    lat:61,   kind:"region",   name:"the West Siberian Plain" },
  { plate:"SIB", lon:130,   lat:67,   kind:"mountain", name:"the Verkhoyansk Range" },

  /* China and Southeast Asia */
  { plate:"CHI", lon:103,   lat:16,   kind:"forest",   name:"the rainforest of Southeast Asia" },
  { plate:"CHI", lon:89,    lat:33.5, kind:"region",   name:"Tibet" },
  { plate:"CHI", lon:104,   lat:43,   kind:"desert",   name:"the Gobi" },
  { plate:"CHI", lon:116.4, lat:39.9, kind:"city",     name:"Beijing" },
  { plate:"CHI", lon:110.3, lat:25.3, kind:"region",   name:"the Guilin karst" },
  { plate:"CHI", lon:83,    lat:39,   kind:"desert",   name:"the Taklamakan" },
  { plate:"CHI", lon:105,   lat:30.5, kind:"region",   name:"the Sichuan Basin" },
  { plate:"CHI", lon:109,   lat:37,   kind:"region",   name:"the Loess Plateau" },
  { plate:"CHI", lon:105.8, lat:10.2, kind:"region",   name:"the Mekong delta" },
  { plate:"CHI", lon:81,    lat:42,   kind:"mountain", name:"the Tian Shan" },

  /* India */
  { plate:"IND", lon:75.5,  lat:13,   kind:"forest",   name:"the Western Ghats" },
  { plate:"IND", lon:77,    lat:19,   kind:"region",   name:"the Deccan" },
  { plate:"IND", lon:77.2,  lat:28.6, kind:"city",     name:"Delhi" },
  { plate:"IND", lon:71,    lat:27,   kind:"desert",   name:"the Thar Desert" },
  { plate:"IND", lon:89,    lat:22,   kind:"forest",   name:"the Sundarbans" },
  { plate:"IND", lon:83,    lat:25.5, kind:"region",   name:"the Ganges plain" },

  /* Australia, with New Zealand and New Guinea riding along */
  { plate:"AUS", lon:124,   lat:-26,  kind:"desert",   name:"the Australian outback" },
  { plate:"AUS", lon:149,   lat:-30,  kind:"mountain", name:"the Great Dividing Range" },
  { plate:"AUS", lon:131,   lat:-25.3,kind:"region",   name:"Uluru" },
  { plate:"AUS", lon:147,   lat:-18,  kind:"region",   name:"the Great Barrier Reef" },
  { plate:"AUS", lon:145,   lat:-16,  kind:"forest",   name:"the Queensland rainforest" },
  { plate:"AUS", lon:151.2, lat:-33.9,kind:"city",     name:"Sydney" },
  { plate:"AUS", lon:129,   lat:-31,  kind:"desert",   name:"the Nullarbor" },
  { plate:"AUS", lon:126,   lat:-16.5,kind:"region",   name:"the Kimberley" },
  { plate:"AUS", lon:146.5, lat:-42,  kind:"forest",   name:"the forests of Tasmania" },
  { plate:"AUS", lon:142,   lat:-5.5, kind:"forest",   name:"the New Guinea rainforest" },
  { plate:"AUS", lon:172,   lat:-42.5,kind:"region",   name:"New Zealand" },

  /* Antarctica */
  { plate:"ANT", lon:90,    lat:-78,  kind:"ice",      name:"the East Antarctic ice sheet" },
  { plate:"ANT", lon:-62,   lat:-68,  kind:"mountain", name:"the Antarctic Peninsula" },
  { plate:"ANT", lon:-100,  lat:-79,  kind:"ice",      name:"the West Antarctic ice sheet" },
  { plate:"ANT", lon:-175,  lat:-81,  kind:"ice",      name:"the Ross Ice Shelf" },
  { plate:"ANT", lon:167,   lat:-77.5,kind:"mountain", name:"Mount Erebus" }
];

const OLD_LANDS = [
  { plate:"NAM", lon:-98, lat:50, text:"Laurentia" },
  { plate:"EUR", lon:32,  lat:58, text:"Baltica" },
  { plate:"SIB", lon:105, lat:64, text:"Siberia" },
  { plate:"AFR", lon:20,  lat:5,  text:"Gondwana" },
  { plate:"CHI", lon:108, lat:30, text:"China blocks" }
];
const MODERN_LANDS = [
  { plate:"NAM", lon:-100, lat:48,  text:"North America" },
  { plate:"SAM", lon:-58,  lat:-12, text:"South America" },
  { plate:"AFR", lon:20,   lat:8,   text:"Africa" },
  { plate:"EUR", lon:22,   lat:51,  text:"Europe" },
  { plate:"SIB", lon:95,   lat:58,  text:"Asia" },
  { plate:"IND", lon:79,   lat:22,  text:"India" },
  { plate:"AUS", lon:134,  lat:-25, text:"Australia" },
  { plate:"ANT", lon:60,   lat:-80, text:"Antarctica" }
];
const PANGAEA = [
  { plate:"AFR", lon:14,  lat:11, text:"Pangaea" },
  { plate:"CHI", lon:108, lat:30, text:"China blocks" }
];

const PERIOD_LABELS = {
  cam:{ lands:OLD_LANDS,
        oceans:[{ at:[3,-34], text:"Iapetus Ocean" }, { at:[140,50], text:"Panthalassa" }] },
  ord:{ lands:OLD_LANDS,
        oceans:[{ at:[-39,-29], text:"Iapetus Ocean" }, { at:[50,40], text:"Panthalassa" }] },
  sil:{ lands:OLD_LANDS,
        oceans:[{ at:[-1,-55], text:"Rheic Ocean" }, { at:[105,40], text:"Panthalassa" }] },
  dev:{ lands:[{ plate:"NAM", lon:-92, lat:54, text:"Laurussia" }, OLD_LANDS[2], OLD_LANDS[3], OLD_LANDS[4]],
        oceans:[{ at:[-15,-33], text:"Rheic Ocean" }, { at:[99,-28], text:"Paleo-Tethys" },
                { at:[-90,60], text:"Panthalassa" }] },
  car:{ lands:[{ plate:"NAM", lon:-92, lat:54, text:"Laurussia" }, OLD_LANDS[2], OLD_LANDS[3], OLD_LANDS[4]],
        oceans:[{ at:[72,2], text:"Paleo-Tethys" }, { at:[-110,50], text:"Panthalassa" }] },
  per:{ lands:PANGAEA,
        oceans:[{ at:[66,5], text:"Paleo-Tethys" }, { at:[-175,5], text:"Panthalassa" }] },
  tri:{ lands:PANGAEA,
        oceans:[{ at:[69,-4], text:"Tethys Ocean" }, { at:[135,5], text:"Panthalassa" }] },
  jur:{ lands:[{ plate:"NAM", lon:-92, lat:52, text:"Laurasia" }, { plate:"AFR", lon:20, lat:0, text:"Gondwana" }],
        oceans:[{ at:[81,-16], text:"Tethys Ocean" }, { at:[-145,-10], text:"Panthalassa" }] },
  cre:{ lands:MODERN_LANDS,
        oceans:[{ at:[-14,-19], text:"South Atlantic" }, { at:[-30,27], text:"North Atlantic" },
                { at:[76,0], text:"Tethys Ocean" }, { at:[-160,-10], text:"Pacific Ocean" }] },
  pgn:{ lands:MODERN_LANDS,
        oceans:[{ at:[-41,28], text:"Atlantic Ocean" }, { at:[77,-36], text:"Indian Ocean" },
                { at:[23,33], text:"Tethys, closing" }, { at:[-165,-5], text:"Pacific Ocean" }] },
  now:{ lands:MODERN_LANDS,
        oceans:[{ at:[-140,5], text:"Pacific Ocean" }, { at:[-38,30], text:"Atlantic Ocean" },
                { at:[78,-22], text:"Indian Ocean" }, { at:[100,-57], text:"Southern Ocean" },
                { at:[170,82], text:"Arctic Ocean" }] }
};
