/* ===================== terrain =====================
   What the land is coloured with. Everything here is schematic.

   BIOMES       colour and legend name for each kind of ground.
   BELTS        for each past period, climate belts by latitude, south to
                north: [from, to, biome]. They are fixed to the globe, so a
                continent changes colour as it drifts through them. Before the
                Devonian land plants were small and sparse, and the land stays bare.
   ARID_OVERRIDES  for a past period, regions that the rock record shows were
                arid whatever latitude they sat at. They are painted over the
                belts in their own colour, and the key says where they come from.
   LANDCOVER    today only: real forests, deserts, tundra and ice, as
                polygons of modern [lon, lat] pinned to a plate.
   RIVERS, LAKES  today only. Ancient river courses are mostly unknown.
   RANGES       mountain belts, pinned to a plate, drawn from the period in
                which they rose (`from`) until they were worn down (`to`).
   SEAS         shallow seas that flooded a continent's interior in a period.

   Shapes are clipped to the coastline, so they can overrun it freely.        */

const BIOMES = {
  bare:    { colour:"#C9A97B", name:"Bare rock, no forests yet" },
  frost:   { colour:"#B4AE9F", name:"Cold bare ground" },
  desert:  { colour:"#E2BA68", name:"Desert" },
  scrub:   { colour:"#B3B170", name:"Seasonally dry, open growth" },
  open:    { colour:"#BDB57E", name:"Grassland, scrub and farmland" },
  forestT: { colour:"#4A8A48", name:"Tropical forest" },
  forestW: { colour:"#73A25A", name:"Temperate forest" },
  forestC: { colour:"#4C7C68", name:"Cool and polar forest" },
  boreal:  { colour:"#4C7C68", name:"Boreal forest" },
  tundra:  { colour:"#A2A88E", name:"Tundra and high plateau" },
  ice:     { colour:"#EAF2F6", name:"Ice sheet" },
  /* not a belt: painted from ARID_OVERRIDES, in the colour of a red bed */
  aridRock:{ colour:"#D6905A", name:"Arid, from the rock record" }
};
const SEA_COLOUR = "#4E96B3", RIVER_COLOUR = "#5FB4DE";

const BELTS = {
  cam: [[-90, 90, "bare"]],
  ord: [[-90, -55, "frost"], [-55, 90, "bare"]],
  sil: [[-90, -60, "frost"], [-60, 90, "bare"]],
  dev: [[-90, -60, "frost"], [-60, -32, "scrub"], [-32, -15, "desert"], [-15, 12, "forestT"],
        [12, 32, "desert"], [32, 60, "scrub"], [60, 90, "frost"]],
  car: [[-90, -45, "tundra"], [-45, -30, "scrub"], [-30, -15, "desert"], [-15, 15, "forestT"],
        [15, 32, "desert"], [32, 70, "forestC"], [70, 90, "tundra"]],
  per: [[-90, -38, "forestC"], [-38, -8, "desert"], [-8, 8, "scrub"], [8, 38, "desert"],
        [38, 70, "forestC"], [70, 90, "tundra"]],
  tri: [[-90, -65, "forestC"], [-65, -40, "forestW"], [-40, -18, "desert"], [-18, 18, "scrub"],
        [18, 40, "desert"], [40, 65, "forestW"], [65, 90, "forestC"]],
  jur: [[-90, -65, "forestC"], [-65, -36, "forestW"], [-36, -12, "desert"], [-12, 12, "scrub"],
        [12, 36, "desert"], [36, 65, "forestW"], [65, 90, "forestC"]],
  cre: [[-90, -60, "forestC"], [-60, -30, "forestW"], [-30, -15, "desert"], [-15, 15, "forestT"],
        [15, 30, "desert"], [30, 60, "forestW"], [60, 90, "forestC"]],
  pgn: [[-90, -65, "forestC"], [-65, -33, "forestW"], [-33, -25, "desert"], [-25, 25, "forestT"],
        [25, 33, "desert"], [33, 65, "forestW"], [65, 90, "forestC"]]
};

/* Each entry names its evidence in `source`, which is for maintainers and is
   not shown. Shapes are modern [lon, lat] pinned to a plate, like LANDCOVER. */
const ARID_OVERRIDES = {
  ord: [
    { plate:"AFR", name:"North Africa, polar desert at the ice margin",
      source:"Hirnantian tillites and glacial pavements from Mauritania to Libya; outwash sands beyond them",
      pts:[[-17,12],[-17,21],[-12,28],[-4,35],[10,37],[20,32],[30,31],[35,24],[39,15],[43,11],[40,2],[30,-3],[18,-5],[9,-1],[3,5],[-5,4.5],[-13,8]] },
    { plate:"AFR", name:"Arabia, polar desert at the ice margin",
      source:"Late Ordovician glacial valleys of the Sarah Formation, Saudi Arabia",
      pts:[[35,29],[38,22],[43,13],[50,13],[56,18],[59,23],[57,25],[48,29],[41,31]] }
  ],
  dev: [
    { plate:"EUR", name:"Old Red Sandstone continent, Britain",
      source:"Old Red Sandstone: red river, lake and dune sandstones; Rhynie at about 25 degrees south, arid to semi-arid",
      pts:[[-7,50],[-2,50.5],[1.5,52],[-1,58.5],[-5.5,58.5],[-7,55],[-10,54],[-9,51]] },
    { plate:"EUR", name:"Old Red Sandstone continent, Scandinavia",
      source:"Old Red Sandstone basins of western Norway and the Baltic",
      pts:[[4,58],[10,57],[18,56],[30,58],[34,64],[30,70],[20,70],[12,66],[5,62]] },
    { plate:"NAM", name:"Old Red Sandstone continent, eastern North America",
      source:"Catskill Delta red beds, from the Appalachian basin to the Maritimes",
      pts:[[-84,36],[-76,36],[-68,43],[-58,47],[-56,52],[-64,52],[-74,47],[-82,43]] },
    { plate:"NAM", name:"Old Red Sandstone continent, East Greenland",
      source:"Devonian red beds of East Greenland",
      pts:[[-30,69],[-21,70],[-19,75],[-26,78],[-30,74]] }
  ],
  per: [
    { plate:"NAM", name:"Pangaean sand sea, American southwest",
      source:"Coconino, De Chelly and Cedar Mesa dune sandstones",
      pts:[[-118,42],[-104,42],[-100,34],[-104,29],[-112,30],[-117,34]] },
    { plate:"EUR", name:"Pangaean sand sea, Britain and Germany",
      source:"Penrith Sandstone and Rotliegend dune sandstones; Zechstein salt",
      pts:[[-7,50],[0,49],[8,48],[15,49.5],[16,54],[8,56],[0,58],[-6,58],[-8,54]] }
  ],
  tri: [
    { plate:"EUR", name:"Pangaean interior, Britain and Germany",
      source:"Sherwood Sandstone, Buntsandstein and the salt of the Mercia Mudstone",
      pts:[[-7,50],[0,49],[8,48],[15,49.5],[16,54],[8,56],[0,58],[-6,58],[-8,54]] }
  ]
};

const LANDCOVER = [
  /* ice first, so that anything drawn later can sit on top of it */
  { plate:"ANT", whole:true, biome:"ice" },
  { plate:"NAM", biome:"ice", pts:[[-45,61.5],[-40,65],[-28,69],[-23,72],[-24,77],[-33,82],[-48,82],[-60,80],[-58,76],[-53,69],[-50,64]] },

  /* tundra and high plateau */
  { plate:"NAM", biome:"tundra", pts:[[-168,66],[-165,68],[-155,71],[-125,70],[-110,68],[-95,69],[-82,67],[-92,63],[-95,58],[-78,62],[-62,58],[-64,55],[-75,57],[-90,58],[-100,61],[-125,66],[-145,68],[-162,66]] },
  { plate:"SIB", biome:"tundra", pts:[[60,70],[70,73],[80,76],[95,78],[110,76],[130,72],[140,73],[160,70],[176,70],[178,65],[165,65],[150,68],[130,69],[110,69],[90,68],[70,66],[60,67]] },
  { plate:"EUR", biome:"tundra", pts:[[14,68],[20,70],[30,70],[40,70],[42,66],[30,68.5],[20,68.5]] },
  { plate:"CHI", biome:"tundra", pts:[[78,36],[85,35],[92,32],[97,28],[100,30],[102,35],[95,38],[85,37]] },

  /* boreal forest */
  { plate:"NAM", biome:"boreal", pts:[[-165,62],[-150,60],[-130,56],[-120,52],[-100,50],[-85,47],[-70,47],[-58,50],[-60,54],[-75,56],[-90,57],[-100,60],[-125,65],[-145,67],[-162,66]] },
  { plate:"EUR", biome:"boreal", pts:[[6,59],[12,58],[22,59],[32,57],[45,56],[52,57],[50,64],[42,66],[30,68],[20,68],[12,64]] },
  { plate:"SIB", biome:"boreal", pts:[[46,56],[52,56],[70,55],[90,52.5],[110,53],[128,51],[138,50],[142,53],[150,59],[160,61],[165,64],[150,67],[130,68],[110,68],[90,67],[70,65],[55,62]] },

  /* temperate forest */
  { plate:"NAM", biome:"forestW", pts:[[-95,31],[-83,30],[-76,35],[-70,42],[-67,45],[-75,47],[-85,46],[-92,44],[-95,38]] },
  { plate:"NAM", biome:"forestW", pts:[[-124,40],[-125,49],[-132,55],[-128,56],[-121,49],[-121,41]] },
  { plate:"EUR", biome:"forestW", pts:[[-4,44],[2,43],[9,44.5],[16,45],[26,45],[30,50],[32,56],[24,58],[12,56],[5,52],[-2,48]] },
  { plate:"EUR", biome:"forestW", pts:[[-5,50.5],[1,51.5],[-1,55],[-5,56]] },
  { plate:"CHI", biome:"forestW", pts:[[108,23],[118,25],[121,30],[119,35],[112,34],[106,30]] },
  { plate:"CHI", biome:"forestW", pts:[[122,41],[128,42],[132,44],[130,46],[124,46]] },
  { plate:"SAM", biome:"forestW", pts:[[-74,-37],[-71,-37],[-71,-46],[-75,-50],[-75,-45]] },
  { plate:"AUS", biome:"forestW", pts:[[147,-38.5],[150,-37],[153,-31],[152,-28],[150,-31],[147,-35],[144,-37]] },
  { plate:"IND", biome:"forestW", pts:[[76,31],[82,28.5],[88,27],[88,26.3],[82,27.4],[77,29.5]] },

  /* tropical forest */
  { plate:"SAM", biome:"forestT", pts:[[-78,2],[-70,8],[-60,8],[-52,4],[-46,-2],[-50,-10],[-60,-15],[-70,-14],[-77,-8]] },
  { plate:"SAM", biome:"forestT", pts:[[-40,-14],[-41,-22],[-48,-27],[-52,-26],[-47,-18]] },
  { plate:"NAM", biome:"forestT", pts:[[-97,16],[-92,18],[-88,21],[-87,19],[-91,16]] },
  { plate:"AFR", biome:"forestT", pts:[[9,4],[18,6],[28,4],[30,-3],[26,-8],[16,-7],[10,-3]] },
  { plate:"AFR", biome:"forestT", pts:[[-13,9],[-8,8],[-2,8],[4,7],[8,5],[4,5],[-4,5],[-8,4.3]] },
  { plate:"MAD", biome:"forestT", pts:[[49,-13],[50,-16],[49,-23],[47.5,-24],[48,-17]] },
  { plate:"CHI", biome:"forestT", pts:[[97,27],[100,22],[100,14],[104,10],[109,11],[108,18],[106,22],[110,22],[104,26]] },
  { plate:"IND", biome:"forestT", pts:[[73,16],[76,9],[77.5,9],[75,15],[74,19]] },
  { plate:"IND", biome:"forestT", pts:[[88,27],[92,28],[95,26],[92,22],[89,23]] },
  { plate:"AUS", biome:"forestT", pts:[[143,-13],[146,-18],[149,-22],[151,-25],[150,-26],[146,-20],[143,-16]] },

  /* desert */
  { plate:"AFR", biome:"desert", pts:[[-17,21],[-12,28],[-5,33],[8,34],[12,32],[22,31],[32,30],[35,24],[37,18],[30,15],[15,14],[0,16],[-10,17],[-16,17]] },
  { plate:"AFR", biome:"desert", pts:[[35,29],[38,22],[43,13],[50,13],[56,18],[59,23],[57,25],[48,29],[41,31]] },
  { plate:"AFR", biome:"desert", pts:[[12,-17],[14,-22],[16,-29],[19,-31],[24,-28],[26,-23],[22,-19],[15,-17]] },
  { plate:"AFR", biome:"desert", pts:[[40,11],[43,12],[51,12],[48,5],[43,3],[41,6]] },
  { plate:"AUS", biome:"desert", pts:[[114,-22],[116,-30],[124,-32.5],[131,-31.5],[138,-32],[142,-29],[142,-22],[138,-18],[130,-18],[122,-19]] },
  { plate:"NAM", biome:"desert", pts:[[-118,35],[-114,37],[-108,36],[-103,31],[-102,25],[-106,23],[-111,26],[-115,31]] },
  { plate:"SAM", biome:"desert", pts:[[-71,-18],[-69,-18],[-68.5,-27],[-70.5,-30],[-71.5,-25]] },
  { plate:"SAM", biome:"desert", pts:[[-69,-38],[-63,-40],[-65,-45],[-67,-50],[-70,-51],[-71,-44]] },
  { plate:"CHI", biome:"desert", pts:[[78,37],[84,41],[92,42.5],[102,44],[112,44],[112,40],[103,38],[92,37],[84,36.5]] },
  { plate:"IND", biome:"desert", pts:[[68,24],[70,22],[74,25],[75,29],[72,29],[69,27]] }
];

const RIVERS = [
  { plate:"SAM", name:"Amazon",      pts:[[-73,-4.5],[-68,-3.5],[-60,-3.2],[-55,-2.3],[-50.5,-0.8]] },
  { plate:"SAM", name:"Paraná",      pts:[[-51,-20],[-54.5,-25],[-58.5,-28],[-60,-32.5],[-58.4,-34]] },
  { plate:"NAM", name:"Mississippi", pts:[[-95,47],[-91.5,43],[-90.5,38.5],[-90,35],[-91,31],[-89.5,29.3]] },
  { plate:"NAM", name:"Missouri",    pts:[[-112,46.5],[-104,47.5],[-100,44],[-96,41],[-90.5,38.7]] },
  { plate:"NAM", name:"Mackenzie",   pts:[[-114,61],[-121,62],[-126,65],[-134,68.5]] },
  { plate:"NAM", name:"St Lawrence", pts:[[-79,43.5],[-75,45],[-71,47],[-66,49]] },
  { plate:"NAM", name:"Yukon",       pts:[[-135,61],[-141,64.5],[-150,65.5],[-158,64],[-164,62.7]] },
  { plate:"NAM", name:"Colorado",    pts:[[-106,40],[-110,38],[-112,36.3],[-114.5,35],[-114.8,32]] },
  { plate:"AFR", name:"Nile",        pts:[[33,0.5],[31.5,6],[32.5,15.6],[33.5,19],[31,22],[32.8,26],[31.2,30],[31,31.4]] },
  { plate:"AFR", name:"Congo",       pts:[[26,-9],[25.5,0.5],[19,0.5],[16,-3],[12.5,-6]] },
  { plate:"AFR", name:"Niger",       pts:[[-10,10],[-5,14],[-1,16.8],[3,13],[6,8.5],[6,4.5]] },
  { plate:"AFR", name:"Zambezi",     pts:[[23,-13],[25.8,-17.9],[31,-16],[36,-18.5]] },
  { plate:"AFR", name:"Orange",      pts:[[28.5,-29],[24,-29.5],[19,-28.7],[16.5,-28.6]] },
  { plate:"EUR", name:"Danube",      pts:[[8.5,48],[14,48.3],[19,47.6],[20.5,44.8],[25,43.8],[29.5,45.2]] },
  { plate:"EUR", name:"Rhine",       pts:[[9.5,47],[7.6,47.6],[8.2,50],[6,51.8],[4.2,52]] },
  { plate:"EUR", name:"Volga",       pts:[[33,57],[40,57.5],[44,56.3],[49,55.8],[48.5,52],[45,49]] },
  { plate:"SIB", name:"Ob",          pts:[[84,52],[78,57],[69,61],[66,66.5]] },
  { plate:"SIB", name:"Yenisei",     pts:[[92,52],[91,58],[88,62],[84,70]] },
  { plate:"SIB", name:"Lena",        pts:[[107,54],[115,59.5],[128,62],[127,70.5]] },
  { plate:"SIB", name:"Amur",        pts:[[110,50.5],[120,53.3],[127,50.5],[134,48.5],[140,53]] },
  { plate:"CHI", name:"Yangtze",     pts:[[92,34],[99,29],[104.5,28.8],[111,30.5],[117,31],[121.5,31.4]] },
  { plate:"CHI", name:"Yellow",      pts:[[98,35],[104,36],[108,40.5],[111,38],[113.5,35],[118.5,37.5]] },
  { plate:"CHI", name:"Mekong",      pts:[[96,32],[99.5,25],[101,20],[104.5,17],[105.5,12],[106.3,10]] },
  { plate:"IND", name:"Ganges",      pts:[[78.5,30.5],[80,27],[83,25.4],[87.5,25],[89.5,23]] },
  { plate:"IND", name:"Indus",       pts:[[73.5,31.5],[71,29.5],[69.5,27],[68.2,24.5]] },
  { plate:"AUS", name:"Murray",      pts:[[150,-27],[146,-30],[143,-34],[139.5,-35.3]] }
];

const LAKES = [
  { plate:"NAM", name:"Lake Superior",          pts:[[-92,46.7],[-88,48.7],[-85,47.8],[-85,46.6],[-88,46.7]] },
  { plate:"NAM", name:"Lakes Michigan and Huron", pts:[[-87.8,41.7],[-86.5,45.8],[-84.5,46],[-80.5,45.5],[-82,43],[-84,43.8],[-86,42]] },
  { plate:"NAM", name:"Lakes Erie and Ontario", pts:[[-83.3,41.7],[-79,42.8],[-76.3,43.6],[-79.5,43.4],[-81,42.2]] },
  { plate:"AFR", name:"Lake Victoria",          pts:[[31.8,-0.5],[34,0.2],[34.5,-1.5],[33,-2.8],[31.8,-2]] },
  { plate:"SIB", name:"Lake Baikal",            pts:[[104,51.6],[106.5,52.5],[109.8,55.6],[108.5,55.2],[105.5,52.8]] }
];

/* from / to are PERIODS ids, inclusive; `to` defaults to today */
const RANGES = [
  { plate:"NAM", name:"Appalachians",        from:"ord", pts:[[-86,33.5],[-82.5,35.8],[-79,38.5],[-76,41],[-73,43.5],[-69,46],[-65,48]] },
  { plate:"EUR", name:"Caledonides, Scotland", from:"sil", pts:[[-5.5,56.3],[-4,58]] },
  { plate:"EUR", name:"Caledonides, Norway", from:"sil", pts:[[6,59],[8,62],[13,66],[18,69]] },
  { plate:"NAM", name:"Caledonides, Greenland", from:"sil", pts:[[-24,70],[-22,74],[-22,78]] },
  { plate:"EUR", name:"Variscan mountains",  from:"car", to:"jur", pts:[[-8,43],[-3,45.5],[3,46],[8,48.5],[13,50.5],[17,50]] },
  { plate:"AFR", name:"Mauritanides",        from:"car", to:"tri", pts:[[-15,17],[-13,23],[-10,28]] },
  { plate:"SIB", name:"Urals",               from:"per", pts:[[58,51],[59,56],[60,61],[62,65],[66,68]] },
  { plate:"AFR", name:"Cape Fold Belt",      from:"per", pts:[[18.5,-32.5],[20,-33.7],[24,-33.6],[27,-33]] },
  { plate:"AUS", name:"Great Dividing Range", from:"cre", pts:[[145,-17],[147,-22],[150,-27],[151,-31],[149,-35],[146.5,-37.5]] },
  { plate:"SAM", name:"Andes",               from:"cre", pts:[[-72,9],[-77,1],[-78,-6],[-75,-13],[-69,-18],[-68.5,-24],[-70,-32],[-71,-40],[-73,-48],[-70,-54]] },
  { plate:"NAM", name:"Rocky Mountains",     from:"cre", pts:[[-135,62],[-128,57],[-120,52],[-114,47],[-110,43],[-106,39],[-105.5,35]] },
  { plate:"NAM", name:"Sierra Nevada",       from:"cre", pts:[[-122,41],[-120,38.5],[-118,35.5]] },
  { plate:"AFR", name:"Drakensberg",         from:"cre", pts:[[28,-31],[29.5,-29],[30.5,-25.5]] },
  { plate:"SIB", name:"Verkhoyansk Range",   from:"cre", pts:[[128,64],[130,67],[133,70]] },
  { plate:"IND", name:"Himalaya",            from:"pgn", pts:[[73,34],[77,32],[81,30],[85,28.2],[89,27.6],[93,28],[96,28.5]] },
  { plate:"CHI", name:"Kunlun",              from:"pgn", pts:[[78,36],[85,35.5],[92,35],[100,35]] },
  { plate:"CHI", name:"Tian Shan",           from:"pgn", pts:[[78,41.5],[82,42],[88,43]] },
  { plate:"EUR", name:"Alps",                from:"pgn", pts:[[6,44.5],[8,46],[11,47],[14.5,47.2]] },
  { plate:"EUR", name:"Pyrenees",            from:"pgn", pts:[[-1.8,43],[0.5,42.7],[3,42.5]] },
  { plate:"EUR", name:"Carpathians",         from:"now", pts:[[18,49],[22,48.5],[25.5,47],[25,45.5],[22.5,45]] },
  { plate:"EUR", name:"Apennines",           from:"now", pts:[[9,44.3],[12,43],[14,41.5],[16,40]] },
  { plate:"EUR", name:"Caucasus",            from:"pgn", pts:[[38,44],[42,43],[46,41.5]] },
  { plate:"AFR", name:"Atlas",               from:"pgn", pts:[[-9,30.5],[-5,32],[0,34],[6,35.5],[10,36]] },
  { plate:"NAM", name:"Alaska Range",        from:"now", pts:[[-155,61.5],[-150,63],[-144,62.5]] },
  { plate:"NAM", name:"Sierra Madre",        from:"pgn", pts:[[-108,29],[-105,24],[-101,19.5]] },
  { plate:"ANT", name:"Transantarctic Mountains", from:"pgn", pts:[[162,-72],[160,-77],[165,-82],[180,-85]] },
  { plate:"AFR", name:"East African highlands", from:"now", pts:[[38,14],[39,9],[36,4],[36,-3],[34,-9]] }
];

const SEAS = {
  cam: [
    { plate:"NAM", name:"Sea over Laurentia", pts:[[-125,52],[-115,35],[-100,30],[-88,32],[-82,38],[-78,45],[-85,52],[-100,58],[-118,60]] },
    { plate:"SIB", name:"Sea over Siberia",   pts:[[90,58],[110,56],[125,60],[120,68],[100,70],[88,65]] },
    { plate:"AUS", name:"Sea over Australia", pts:[[125,-18],[138,-16],[140,-28],[135,-32],[128,-28]] }
  ],
  ord: [
    { plate:"NAM", name:"Sea over Laurentia", pts:[[-125,52],[-115,35],[-100,30],[-88,32],[-82,38],[-78,45],[-85,52],[-100,58],[-118,60]] },
    { plate:"EUR", name:"Sea over Baltica",   pts:[[10,56],[20,55],[32,56],[40,60],[30,62],[18,60]] },
    { plate:"SIB", name:"Sea over Siberia",   pts:[[90,58],[110,56],[125,60],[120,68],[100,70],[88,65]] }
  ],
  sil: [
    { plate:"NAM", name:"Sea over Laurentia", pts:[[-120,50],[-112,36],[-100,31],[-88,33],[-83,40],[-88,50],[-104,57]] },
    { plate:"EUR", name:"Sea over Baltica",   pts:[[10,56],[20,55],[32,56],[40,60],[30,62],[18,60]] }
  ],
  dev: [
    { plate:"NAM", name:"Kaskaskia Sea",      pts:[[-120,55],[-112,40],[-100,35],[-90,37],[-84,42],[-90,50],[-105,58]] },
    { plate:"EUR", name:"Sea over the Russian Platform", pts:[[30,50],[45,50],[50,58],[40,62],[30,58]] }
  ],
  car: [
    { plate:"NAM", name:"Midcontinent sea",   pts:[[-115,45],[-108,35],[-98,32],[-92,38],[-98,45]] },
    { plate:"EUR", name:"Sea over the Russian Platform", pts:[[30,50],[45,50],[50,58],[40,62],[30,58]] }
  ],
  per: [
    { plate:"EUR", name:"Zechstein Sea",      pts:[[-2,54],[5,52],[14,52],[20,54],[12,57],[3,57]] },
    { plate:"NAM", name:"Permian Basin sea",  pts:[[-106,34],[-101,30.5],[-99,33],[-103,36]] }
  ],
  tri: [
    { plate:"EUR", name:"Muschelkalk Sea",    pts:[[4,48],[12,48],[18,51],[10,53],[5,51]] }
  ],
  jur: [
    { plate:"EUR", name:"Sea over Europe",    pts:[[-5,44],[5,43.5],[16,45],[28,46],[36,50],[30,56],[14,56],[4,58],[-3,55],[-5,50]] },
    { plate:"NAM", name:"Sundance Sea",       pts:[[-125,62],[-115,50],[-108,42],[-104,44],[-110,55],[-118,64]] }
  ],
  cre: [
    { plate:"NAM", name:"Western Interior Seaway", pts:[[-128,69],[-112,55],[-106,45],[-104,35],[-99,28],[-94,29],[-96,40],[-98,50],[-105,60],[-115,68]] },
    { plate:"EUR", name:"Chalk sea",          pts:[[-5,44],[5,43.5],[16,45],[28,46],[38,50],[32,57],[14,57],[4,59],[-4,56],[-6,50]] },
    { plate:"AFR", name:"Trans-Saharan Seaway", pts:[[-2,33],[8,34],[12,28],[8,18],[6,8],[2,7],[3,18],[0,26]] },
    { plate:"AUS", name:"Eromanga Sea",       pts:[[138,-18],[145,-20],[146,-28],[140,-30],[135,-26]] }
  ],
  pgn: [
    { plate:"EUR", name:"North Sea and Paris basins", pts:[[-1,51],[3,49],[8,52],[14,53.5],[10,55],[2,53]] },
    { plate:"SIB", name:"West Siberian Sea",  pts:[[62,54],[72,54],[78,62],[72,70],[64,68]] },
    { plate:"NAM", name:"Mississippi Embayment", pts:[[-98,29],[-90,30],[-88,35],[-91,37],[-95,33]] }
  ],
  now: []
};
