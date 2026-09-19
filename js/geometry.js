/* ===================== spherical geometry ===================== */
const D = Math.PI / 180;
const CX = 310, CY = 310;
let R = 268;                 // globe radius in drawing units; the zoom control changes it

function vec(lon, lat){
  const a = lon*D, b = lat*D, c = Math.cos(b);
  return [c*Math.cos(a), c*Math.sin(a), Math.sin(b)];
}
function rodrigues(v, k, ang){
  const c = Math.cos(ang), s = Math.sin(ang);
  const d = k[0]*v[0] + k[1]*v[1] + k[2]*v[2], m = 1 - c;
  return [
    v[0]*c + (k[1]*v[2] - k[2]*v[1])*s + k[0]*d*m,
    v[1]*c + (k[2]*v[0] - k[0]*v[2])*s + k[1]*d*m,
    v[2]*c + (k[0]*v[1] - k[1]*v[0])*s + k[2]*d*m
  ];
}
function norm(v){
  const n = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0]/n, v[1]/n, v[2]/n];
}
function cross(a, b){
  return [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]];
}

/* Build the rigid transform that carries a plate from its modern pose
   to (lon,lat,spin). Spin is clockwise-positive as seen from outside. */
function plateTransform(home, lon, lat, spin){
  const c0 = vec(home[0], home[1]);
  const c1 = vec(lon, lat);
  const dot = Math.max(-1, Math.min(1, c0[0]*c1[0] + c0[1]*c1[1] + c0[2]*c1[2]));
  const ang = Math.acos(dot);
  let axis = cross(c0, c1);
  const len = Math.hypot(axis[0], axis[1], axis[2]);
  axis = len < 1e-9 ? [0,0,1] : [axis[0]/len, axis[1]/len, axis[2]/len];
  const spinRad = -spin * D;
  return function(v){
    let p = rodrigues(v, c0, spinRad);
    if (ang > 1e-9) p = rodrigues(p, axis, ang);
    return p;
  };
}

/* Camera: rotate world so (viewLon, viewLat) faces the viewer at +x. */
let viewLon = -30, viewLat = 12;
function toCamera(v){
  const L = viewLon*D, F = viewLat*D;
  const cL = Math.cos(L), sL = Math.sin(L);
  const x1 =  v[0]*cL + v[1]*sL;
  const y1 = -v[0]*sL + v[1]*cL;
  const z1 =  v[2];
  const cF = Math.cos(F), sF = Math.sin(F);
  return [ x1*cF + z1*sF, y1, -x1*sF + z1*cF ];
}
/* Orthographic. Points on the far side are pushed onto the limb so
   shapes wrap around the edge instead of folding inside out. */
function project(v){
  const c = toCamera(v);
  const y = c[1], z = c[2];
  if (c[0] >= 0) return [CX + y*R, CY - z*R, true];
  const m = Math.hypot(y, z) || 1;
  return [CX + (y/m)*R, CY - (z/m)*R, false];
}
function ringPath(pts){
  let d = "", pen = false;
  for (const p of pts){
    const s = project(p);
    d += (pen ? "L" : "M") + s[0].toFixed(1) + " " + s[1].toFixed(1);
    pen = true;
  }
  return d + "Z";
}
/* small circle of given angular radius around a centre vector */
function capRing(centre, radiusDeg, steps){
  const c = norm(centre);
  let ref = Math.abs(c[2]) > 0.9 ? [1,0,0] : [0,0,1];
  const u = norm(cross(c, ref));
  const out = [];
  for (let i = 0; i <= steps; i++){
    const t = (i/steps) * Math.PI * 2;
    const k = norm([u[0]*Math.cos(t) + cross(c,u)[0]*Math.sin(t),
                    u[1]*Math.cos(t) + cross(c,u)[1]*Math.sin(t),
                    u[2]*Math.cos(t) + cross(c,u)[2]*Math.sin(t)]);
    out.push(rodrigues(c, k, radiusDeg*D));
  }
  return out;
}

/* ===================== plate outlines ===================== */
/* Coordinates are modern longitude / latitude, simplified. */
const PLATES = {
  NAM:{ name:"North America", home:[-95,50], rings:[
    [[-168,66],[-166,60],[-158,56],[-152,58],[-140,60],[-132,55],[-125,49],[-124,40],
     [-117,32],[-110,24],[-105,20],[-97,16],[-92,18],[-88,21],[-86,21],[-89,29],
     [-83,29],[-80,25],[-81,31],[-76,35],[-70,42],[-66,45],[-60,47],[-53,47],
     [-56,52],[-64,50],[-62,58],[-78,62],[-95,57],[-92,63],[-82,67],[-95,69],
     [-110,68],[-125,70],[-135,69],[-155,71],[-165,68]],
    [[-45,60],[-42,62],[-30,68],[-22,70],[-20,74],[-25,78],[-33,83],[-45,83],
     [-58,82],[-68,80],[-60,76],[-55,69],[-52,64]]
  ]},
  EUR:{ name:"Baltica / Europe", home:[15,52], rings:[
    [[-9,44],[-9,38],[-6,36],[0,39],[4,43],[9,44],[13,38],[16,41],[19,40],[24,41],
     [28,41],[30,45],[37,45],[40,44],[42,48],[48,50],[52,56],[50,62],[42,66],
     [40,70],[30,70],[26,71],[20,70],[14,68],[12,65],[10,59],[7,58],[5,60],
     [8,63],[4,62],[0,58],[-2,54],[-5,50],[-2,48],[-4,46]],
    [[-6,50],[-2,51],[1,52],[-1,58],[-5,58],[-6,55],[-10,54],[-8,51]]
  ]},
  SIB:{ name:"Siberia", home:[105,65], rings:[
    [[48,50],[55,52],[62,54],[72,54],[82,52],[92,52],[100,52],[110,53],[120,52],
     [128,50],[135,45],[142,46],[145,52],[152,58],[160,60],[168,60],[178,65],
     [176,70],[160,70],[140,73],[130,72],[110,76],[95,78],[80,76],[70,73],
     [60,70],[52,67],[46,62],[44,55]]
  ]},
  CHI:{ name:"China blocks", home:[108,28], rings:[
    [[78,36],[85,35],[92,32],[97,28],[100,22],[100,14],[104,10],[109,11],[110,18],
     [114,22],[118,24],[122,30],[120,36],[124,40],[126,43],[132,44],[130,46],
     [122,46],[112,45],[100,44],[90,42],[82,40]]
  ]},
  IND:{ name:"India", home:[79,20], rings:[
    [[68,24],[70,21],[73,16],[76,9],[78,8],[80,13],[84,19],[87,21],[89,22],
     [92,22],[95,26],[92,28],[88,27],[82,26],[77,30],[72,28],[68,26]]
  ]},
  AFR:{ name:"Africa", home:[18,2], rings:[
    [[-17,15],[-17,21],[-12,27],[-4,35],[10,37],[20,32],[30,31],[34,28],[35,23],
     [39,15],[43,12],[51,12],[48,4],[42,-1],[40,-10],[36,-18],[33,-26],[28,-32],
     [20,-35],[18,-32],[14,-22],[12,-17],[9,-1],[3,6],[-4,5],[-8,4],[-13,9],[-16,12]],
    [[35,29],[38,22],[43,13],[50,13],[56,18],[59,23],[57,25],[48,29],[41,31]]
  ]},
  SAM:{ name:"South America", home:[-60,-20], rings:[
    [[-81,7],[-77,9],[-72,12],[-64,11],[-60,8],[-52,5],[-50,0],[-44,-3],[-38,-5],
     [-35,-8],[-39,-14],[-41,-20],[-48,-26],[-54,-34],[-57,-38],[-62,-39],
     [-64,-43],[-68,-51],[-71,-55],[-75,-52],[-73,-45],[-71,-36],[-71,-25],
     [-70,-18],[-76,-14],[-80,-5],[-81,0],[-79,4]]
  ]},
  AUS:{ name:"Australia", home:[134,-25], rings:[
    [[113,-22],[113,-27],[115,-34],[119,-35],[124,-33],[129,-32],[134,-33],
     [137,-35],[140,-38],[144,-38],[147,-38],[150,-37],[153,-31],[153,-25],
     [148,-20],[143,-13],[139,-11],[137,-12],[132,-12],[128,-14],[124,-16],[118,-20]]
  ]},
  ANT:{ name:"Antarctica", home:[0,-83], rings:[
    [[-60,-63],[-55,-66],[-45,-70],[-30,-72],[-15,-71],[0,-70],[15,-70],[30,-68],
     [45,-67],[60,-67],[75,-67],[90,-66],[105,-66],[120,-66],[135,-67],[150,-70],
     [165,-74],[178,-78],[-175,-80],[-160,-78],[-150,-76],[-140,-75],[-130,-74],
     [-120,-74],[-110,-74],[-100,-74],[-90,-73],[-80,-73],[-72,-72],[-66,-70],[-62,-67]]
  ]},
  MAD:{ name:"Madagascar", home:[47,-19], rings:[
    [[44,-12],[49,-13],[50,-16],[50,-22],[47,-25],[45,-25],[43,-22],[43,-16]]
  ]}
};
const PLATE_IDS = Object.keys(PLATES);
for (const id of PLATE_IDS){
  const p = PLATES[id];
  p.vecs = p.rings.map(r => r.map(pt => vec(pt[0], pt[1])));
}

/* ===================== biome vignettes ===================== */
/* Tiny silhouettes reused across sites; drawn on a 40 x 56 stage. */
const ICONS = {
  bare:    '<path d="M2 54h36M8 54c2-6 6-9 9-9s7 3 9 9M24 54c1-4 4-6 7-6s6 2 7 6" fill="none" stroke="CC" stroke-width="1.6" stroke-linecap="round"/>',
  microbe: '<path d="M2 52h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><ellipse cx="12" cy="47" rx="8" ry="4" fill="CC" opacity=".55"/><ellipse cx="27" cy="49" rx="7" ry="3" fill="CC" opacity=".35"/>',
  moss:    '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M8 54c0-5 2-8 4-8s4 3 4 8M20 54c0-7 2-10 4-10s4 3 4 10M30 54c0-4 2-6 3-6s3 2 3 6" fill="none" stroke="CC" stroke-width="1.5" stroke-linecap="round"/>',
  lycopod: '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M14 54V16M27 54V26" stroke="CC" stroke-width="2.2" stroke-linecap="round"/><path d="M14 16l-7-8M14 16l7-8M14 20l-6-6M14 20l6-6M27 26l-5-6M27 26l5-6" fill="none" stroke="CC" stroke-width="1.5" stroke-linecap="round"/>',
  fern:    '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M20 54V28" stroke="CC" stroke-width="2" stroke-linecap="round"/><path d="M20 28c-6-2-10-7-11-13 7 1 11 5 11 11M20 28c6-2 10-7 11-13-7 1-11 5-11 11" fill="CC" opacity=".7"/>',
  conifer: '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M20 54V44" stroke="CC" stroke-width="2.4"/><path d="M20 8l9 16h-18zM20 20l11 16h-22zM20 32l13 14h-26z" fill="CC" opacity=".85"/>',
  cycad:   '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M20 54V32" stroke="CC" stroke-width="3.2" stroke-linecap="round"/><path d="M20 32C12 30 6 24 4 16c9 1 15 7 16 14M20 32c8-2 14-8 16-16-9 1-15 7-16 14M20 30c-4-6-5-13-3-20 5 6 6 13 3 20" fill="CC" opacity=".75"/>',
  broadleaf:'<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M20 54V34" stroke="CC" stroke-width="2.6" stroke-linecap="round"/><path d="M20 36c-9 0-14-6-14-12S11 10 20 10s14 8 14 14-5 12-14 12z" fill="CC" opacity=".8"/>',
  palm:    '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M19 54c0-14 1-24 3-32" fill="none" stroke="CC" stroke-width="2.4" stroke-linecap="round"/><path d="M22 20c-7-4-13-3-17 2 6-1 11 0 16 2M22 20c7-4 13-3 17 2-6-1-11 0-16 2M22 20c-2-7 0-12 5-15-2 5-3 10-2 15" fill="CC" opacity=".75"/>',
  grass:   '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M7 54c1-9 3-14 5-17M14 54c0-11 2-17 4-21M22 54c0-10 2-16 5-19M30 54c0-8 2-12 4-15" fill="none" stroke="CC" stroke-width="1.6" stroke-linecap="round"/>',
  scrub:   '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><circle cx="11" cy="44" r="7" fill="CC" opacity=".6"/><circle cx="26" cy="47" r="5.5" fill="CC" opacity=".45"/><path d="M11 54v-6M26 54v-4" stroke="CC" stroke-width="1.4"/>',
  dune:    '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M2 54c6-12 12-16 18-12s10 2 18-6v18z" fill="CC" opacity=".45"/>',
  ice:     '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M2 54l10-22 8 10 7-16 11 28z" fill="CC" opacity=".55"/><path d="M12 32l3 6 5-9" fill="none" stroke="CC" stroke-width="1.3"/>',
  tundra:  '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M2 50c8-3 14-3 20 0s12 3 16 1" fill="none" stroke="CC" stroke-width="1.5"/><circle cx="10" cy="46" r="2.4" fill="CC" opacity=".7"/><circle cx="24" cy="45" r="2" fill="CC" opacity=".55"/><circle cx="33" cy="47" r="1.8" fill="CC" opacity=".5"/>',
  taiga:   '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M11 12l7 30H4zM28 22l6 20H22z" fill="CC" opacity=".75"/>',
  sea:     '<path d="M2 38c5-4 8-4 13 0s8 4 13 0 8-4 10-1M2 46c5-4 8-4 13 0s8 4 13 0 8-4 10-1M2 54c5-4 8-4 13 0s8 4 13 0" fill="none" stroke="CC" stroke-width="1.6" stroke-linecap="round"/>',
  reef:    '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M10 54V38c0-4 4-4 4 0v6M14 44c0-5 5-5 5 0v10M24 54V40c0-4 4-4 4 0v4M28 44c0-4 4-4 4 0v10" fill="none" stroke="CC" stroke-width="1.8" stroke-linecap="round"/>',
  volcano: '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M4 54l12-26h8l12 26z" fill="CC" opacity=".55"/><path d="M17 28c1-6 3-9 3-14M23 28c0-5 2-8 4-12" fill="none" stroke="CC" stroke-width="1.5" stroke-linecap="round"/>',
  city:    '<path d="M2 54h36" stroke="CC" stroke-width="1.6" stroke-linecap="round"/><path d="M6 54V32h8v22M18 54V22h8v32M30 54V38h6v16" fill="CC" opacity=".5"/>',
  swamp:   '<path d="M2 50c5-3 8-3 13 0s8 3 13 0 8-3 10-1" fill="none" stroke="CC" stroke-width="1.5"/><path d="M12 50V26M26 50V32" stroke="CC" stroke-width="2.2" stroke-linecap="round"/><path d="M12 26l-6-6M12 26l6-6M26 32l-5-5M26 32l5-5" fill="none" stroke="CC" stroke-width="1.5" stroke-linecap="round"/>'
};
function iconSVG(key, colour){
  const body = (ICONS[key] || ICONS.bare).split("CC").join(colour);
  return '<svg viewBox="0 0 40 56" aria-hidden="true">' + body + '</svg>';
}
