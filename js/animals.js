/* ===================== animals =====================
   The animals that mark each period, keyed by PERIODS id. Each one:
     genus, group      shown as "Dunkleosteus (armoured fish)"
     habitat           marine | freshwater | land | air
     environment       one sentence on where it lived
     size              a comparison a reader can picture
     matters           one sentence on why it matters for the period
     plate, lon, lat   a well-known locality, pinned to a plate at its modern
                       position so that it drifts like a site
     place             the name of that locality
     site              the title of a site in the same period that already tells
                       this animal's story, or null; the panel links to it
     img               a PhyloPic silhouette under img/animals/, or null for the
                       habitat icon. Credits are in SILHOUETTES in js/sources.js
     sources           entry numbers from js/sources.js                         */

const ANIMALS = {
  dev: [
    { genus:"Dunkleosteus", group:"armoured fish", habitat:"marine",
      environment:"It hunted in a warm, shallow sea that covered what is now Ohio, which then lay south of the equator.",
      size:"About 3.4 metres long for a typical adult and about 4.1 metres for the largest known, roughly the length of a small car.",
      matters:"It was one of the first large vertebrates at the top of a food chain, about 360 million years ago, and a 2023 study of its head armour cut the old length estimates of 5 to 10 metres to about 4.",
      plate:"NAM", lon:-81.7, lat:41.4, place:"Cleveland Shale, northeast Ohio",
      site:null, img:"img/animals/dunkleosteus.svg", sources:[7, 8] },
    { genus:"Tiktaalik", group:"lobe-finned fish close to tetrapods", habitat:"freshwater",
      environment:"It lived in shallow streams on a subtropical floodplain, in rock that now lies on Ellesmere Island.",
      size:"Up to about 2.7 metres (nine feet) long, roughly the length of a small rowing boat.",
      matters:"This 375-million-year-old fish has a mobile neck and a working wrist joint inside its fin, and it shows the order in which the features of four-legged animals arose.",
      plate:"NAM", lon:-83, lat:77, place:"Southern Ellesmere Island, Nunavut",
      site:"Tiktaalik", img:"img/animals/tiktaalik.svg", sources:[9, 10, 11] },
    { genus:"Palaeocharinus", group:"trigonotarbid arachnid", habitat:"land",
      environment:"It stalked among low plants around hot springs, and some fossils lie inside hollow plant stems.",
      size:"Body 4 to 6 millimetres long, about the length of a grain of rice.",
      matters:"Its book lungs are the oldest preserved anywhere, so this small predator was breathing air on land in the Early Devonian.",
      plate:"EUR", lon:-2.8, lat:57.4, place:"Rhynie chert, Aberdeenshire, Scotland",
      site:"Rhynie chert", img:"img/animals/palaeocharinus.svg", sources:[12, 13, 14] },
    { genus:"Tutusius", group:"early tetrapod", habitat:"marine",
      environment:"It lived in a brackish tidal estuary inside the Antarctic Circle of the time, with forest growing nearby.",
      size:"About a metre long, judged from a single shoulder bone; roughly the length of a guitar.",
      matters:"It is one of only two Devonian tetrapods known from Africa, and it shows that four-limbed animals lived at polar latitudes as well as in the tropics.",
      plate:"AFR", lon:26, lat:-33, place:"Waterloo Farm, near Makhanda, Eastern Cape",
      site:"Tetrapods outside the tropics", img:null, sources:[15, 16] },
    { genus:"Bothriolepis", group:"armoured fish", habitat:"marine",
      environment:"It lived in a brackish estuary on the southern edge of Laurussia, preserved as the Escuminac Formation at Miguasha.",
      size:"About 44 centimetres long in a reconstructed specimen, with bony armour over the front 16 centimetres; about the length of a forearm and hand.",
      matters:"It is the most abundant vertebrate at Miguasha, where 3,551 of the 7,260 specimens counted in the site museum belong to it.",
      plate:"NAM", lon:-66.37, lat:48.11, place:"Escuminac Formation, Miguasha, Quebec",
      site:null, img:"img/animals/bothriolepis.svg", sources:[17, 18] }
  ],
  car: [
    { genus:"Hylonomus", group:"early reptile", habitat:"land",
      environment:"It lived on the floor of a lycopsid rainforest on a poorly drained coastal plain, where hollow stumps trapped small animals.",
      size:"Small and lizard-like, able to shelter inside a hollow tree stump.",
      matters:"At about 315 million years old it is among the earliest known reptiles, and its bones were found inside the fossil tree stumps at Joggins.",
      plate:"NAM", lon:-64.4, lat:45.7, place:"Joggins Fossil Cliffs, Nova Scotia",
      site:"Joggins Fossil Cliffs", img:null, sources:[19] },
    { genus:"Meganeura", group:"giant dragonfly relative", habitat:"air",
      environment:"It flew over open ground beside the coal forests of what is now central France, about 300 million years ago.",
      size:"Wingspan about 70 centimetres, about the length of an adult's arm.",
      matters:"It is among the largest insects known, and it flew some 30 million years before any vertebrate glided or flew.",
      plate:"EUR", lon:2.75, lat:46.29, place:"Commentry coal basin, Allier, central France",
      site:"Giant insects", img:"img/animals/meganeura.svg", sources:[20, 21] },
    { genus:"Arthropleura", group:"giant millipede relative", habitat:"land",
      environment:"It walked through open woodland on a delta plain near the equator, ground it shared with early tetrapods.",
      size:"Up to 2.63 metres long and 55 centimetres wide, at about 50 kilograms; longer than a king-size bed.",
      matters:"It is the largest arthropod known, and the Northumberland fossil shows it reached that size in the early Carboniferous, before atmospheric oxygen peaked.",
      plate:"EUR", lon:-1.59, lat:55.45, place:"Stainmore Formation, Howick Bay, Northumberland",
      site:null, img:"img/animals/arthropleura.svg", sources:[23, 24] },
    { genus:"Tullimonstrum", group:"Tully monster", habitat:"marine",
      environment:"It swam along a swampy shoreline beside a tropical sea, where carcasses were sealed in iron carbonate nodules.",
      size:"Up to about 30 centimetres (a foot) long, the length of a school ruler.",
      matters:"Known only from Mazon Creek, about 309 to 307 million years old, it was placed with the lampreys in 2016 and outside the vertebrates in 2023, and the question is still open.",
      plate:"NAM", lon:-88.1, lat:41.4, place:"Mazon Creek, Grundy County, Illinois",
      site:"Mazon Creek", img:null, sources:[25, 26, 27] },
    { genus:"Crassigyrinus", group:"early tetrapod", habitat:"freshwater",
      environment:"It hunted in the murky water of coal swamps in what is now Scotland, about 330 million years ago.",
      size:"Two to three metres long with very short limbs, comparable to a mid-sized crocodile.",
      matters:"It is a relative of the first land vertebrates that lived wholly in water, and CT scans published in 2022 rebuilt its crushed skull with large eyes and a crocodile-like shape.",
      plate:"EUR", lon:-3.4, lat:56.1, place:"Coal swamp deposits of central Scotland",
      site:null, img:null, sources:[28, 29] },
    { genus:"Akmonistion", group:"early shark relative", habitat:"marine",
      environment:"Its carcass settled into black mud that became the shales of Bearsden, near Glasgow.",
      size:"About one metre long, roughly the length of a walking stick.",
      matters:"The Bearsden skeleton is 330 million years old and almost intact from snout to tail, which is rare for cartilage, and its last meal of fish is still inside it.",
      plate:"EUR", lon:-4.33, lat:55.92, place:"Manse Burn, Bearsden, Scotland",
      site:null, img:"img/animals/akmonistion.svg", sources:[30, 31] }
  ]
};
