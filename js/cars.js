// Car definitions + procedural builders for CITY DRIVER.
// CPM-style cars: extruded side-profile bodies (real silhouettes, cut wheel
// arches), glasshouse + painted roof, detailed 5-spoke rims, surface-mounted
// lights. Convention: car faces -Z (matches physics heading 0 = -Z).
import * as THREE from 'three';
import { buildForgeCar } from './forgecars.js';

// Forge 3D bodies are on by default; add ?classic to the URL to drive the old procedural cars.
export const USE_FORGE = !(typeof location !== 'undefined' && /[?&]classic\b/.test(location.search));

export const CAR_DEFS = [
  { id:'sport',  name:'Apex S',      desc:'Balanced coupe. Great all-rounder.', price:0,     colors:[0xc01818,0x1a5fd0,0xf2f2f2,0x14161c,0xff8c1a],
    stats:{ topSpeed:52, accel:16, handling:1.0,  grip:1.0,  nitroTime:3.2, nitroPower:1.35 } },
  { id:'muscle', name:'Brute V8',    desc:'Straight-line monster. Loose rear.', price:8500,  colors:[0x7a1010,0x0d2a6b,0x22262e,0xc7a008,0x3d0a54],
    stats:{ topSpeed:55, accel:18, handling:0.85, grip:0.85, nitroTime:3.6, nitroPower:1.45 } },
  { id:'super',  name:'Falcon X',    desc:'Exotic pace, glued to the road.',    price:22000, colors:[0xffd21f,0x18c0c0,0xc01818,0x101318,0x7a1fd0],
    stats:{ topSpeed:62, accel:20, handling:1.1,  grip:1.15, nitroTime:3.0, nitroPower:1.4 } },
  { id:'suv',    name:'Mammoth 4x4', desc:'Heavy, grippy, smashes through.',    price:15000, colors:[0x2a4d2a,0x5b6068,0x101318,0x8a5a1a,0x1a5fd0],
    stats:{ topSpeed:47, accel:14, handling:0.9,  grip:1.25, nitroTime:4.0, nitroPower:1.3 } },
  { id:'truck',  name:'Hauler Dually',desc:'Pickup torque. Slow but unstoppable.', price:12000, colors:[0x8a1a1a,0x1a3a6b,0x2e3238,0xd8d8d8,0x0f5132],
    stats:{ topSpeed:45, accel:15, handling:0.8,  grip:1.1,  nitroTime:4.2, nitroPower:1.35 } },
  { id:'track',  name:'Vortex R',    desc:'Track weapon. Max grip, max downforce.', price:35000, colors:[0x18c0c0,0xc01818,0xf2f2f2,0x14161c,0xff5a1a],
    stats:{ topSpeed:68, accel:23, handling:1.25, grip:1.35, nitroTime:2.8, nitroPower:1.5 } },
  { id:'sedan',  name:'Prairie Sedan', desc:'Comfy daily driver. Easy to handle.', price:6000, colors:[0x6b7280,0x1a3a6b,0xf2f2f2,0x7a1010,0x14161c],
    stats:{ topSpeed:48, accel:14, handling:1.0, grip:1.0, nitroTime:3.0, nitroPower:1.3 } },
  { id:'taxi',   name:'Peg City Cab', desc:'Yellow cab with a roof sign. Nimble.', price:7500, colors:[0xffc400,0xffc400,0xf2f2f2],
    stats:{ topSpeed:49, accel:15, handling:1.05, grip:1.0, nitroTime:3.0, nitroPower:1.3 }, extra:'taxi' },
  { id:'van',    name:'Delivery Van', desc:'Big box on wheels. Slow, heavy, tough.', price:9000, colors:[0xf2f2f2,0x1f6feb,0x2d6a4f,0xc01818],
    stats:{ topSpeed:42, accel:12, handling:0.8, grip:1.0, nitroTime:4.0, nitroPower:1.3 } },
  { id:'police', name:'Interceptor', desc:'Police-spec V8 with a light bar.', price:28000, colors:[0x14161c,0xf2f2f2,0x1a3a6b],
    stats:{ topSpeed:60, accel:19, handling:1.1, grip:1.15, nitroTime:3.4, nitroPower:1.4 }, extra:'police' },
  { id:'hyper',  name:'Aurora Hyper', desc:'The fastest thing in the city. Wings and all.', price:90000, colors:[0xff5e3a,0xa855f7,0x18c0c0,0xf2f2f2,0x14161c],
    stats:{ topSpeed:76, accel:27, handling:1.3, grip:1.4, nitroTime:3.2, nitroPower:1.55 } },
];
export const carDef = id => CAR_DEFS.find(c=>c.id===id) || CAR_DEFS[0];

// ---- materials ----
export const paintMat = hex => new THREE.MeshPhysicalMaterial({
  color:hex, metalness:0.55, roughness:0.32,
  clearcoat:1.0, clearcoatRoughness:0.08,
  envMapIntensity:1.25,
});
export const glassMat = () => new THREE.MeshPhysicalMaterial({
  color:0x1b2735, metalness:0.85, roughness:0.05, envMapIntensity:2.2, clearcoat:1, clearcoatRoughness:0.02,
});
const chromeMat = () => new THREE.MeshStandardMaterial({ color:0xdfe3e8, metalness:1, roughness:0.22 });
const darkTrimMat = () => new THREE.MeshStandardMaterial({ color:0x14161a, metalness:0.4, roughness:0.6 });
const tireMat = () => new THREE.MeshStandardMaterial({ color:0x0c0d0f, roughness:0.95 });
const rimMat = () => new THREE.MeshStandardMaterial({ color:0xb9bec6, metalness:1, roughness:0.3 });
const brakeMat = () => new THREE.MeshStandardMaterial({ color:0x5a5e64, metalness:0.9, roughness:0.45 });
const headLensMat = () => new THREE.MeshStandardMaterial({ color:0xeaf4ff, emissive:0xcfe6ff, emissiveIntensity:2.2, roughness:0.15, metalness:0.1 });
const tailLensMat = () => new THREE.MeshStandardMaterial({ color:0x550000, emissive:0xff1a1a, emissiveIntensity:2.0, roughness:0.2 });
const plateMat = () => new THREE.MeshStandardMaterial({ color:0xe8e8e8, roughness:0.5 });

// ---- side profiles: [x, y], +X = FRONT, Y = up. Arches cut as holes. ----
const ARCH = (x, y, r) => ({ x, y, r });
const PROFILE_ALIAS = { taxi:'sedan', police:'sedan' };
const PROFILES = {
  sport: {
    W:1.86, wb:1.35, wheelR:0.34, track:1.58,
    body:[[2.2,0.28],[2.27,0.5],[2.13,0.64],[1.55,0.72],[0.85,0.78],[0.45,0.82],[-1.05,0.84],[-1.7,0.8],[-2.1,0.7],[-2.21,0.5],[-2.17,0.3],[-1.9,0.2],[1.9,0.2]],
    glass:[[0.5,0.8],[0.28,1.18],[-0.6,1.22],[-1.08,0.82]],
    roof:[[0.32,1.14],[-0.64,1.18],[-0.68,1.12],[0.28,1.08]],
    spoiler:true, splitter:true,
  },
  super: {
    W:1.96, wb:1.38, wheelR:0.335, track:1.64,
    body:[[2.26,0.24],[2.33,0.44],[2.19,0.58],[1.5,0.66],[0.7,0.72],[0.4,0.76],[-1.2,0.78],[-1.85,0.74],[-2.2,0.62],[-2.29,0.44],[-2.25,0.26],[-1.95,0.18],[1.95,0.18]],
    glass:[[0.44,0.74],[0.08,1.08],[-0.8,1.11],[-1.24,0.76]],
    roof:[[0.12,1.04],[-0.84,1.07],[-0.88,1.01],[0.08,0.98]],
    spoiler:true, splitter:true,
  },
  muscle: {
    W:1.92, wb:1.45, wheelR:0.36, track:1.60,
    body:[[2.36,0.3],[2.41,0.52],[2.23,0.68],[1.2,0.8],[0.3,0.86],[-0.2,0.88],[-1.6,0.86],[-2.2,0.78],[-2.36,0.58],[-2.33,0.34],[-2.0,0.22],[2.0,0.22]],
    glass:[[0.28,0.86],[-0.22,1.26],[-1.06,1.28],[-1.62,0.86]],
    roof:[[-0.18,1.22],[-1.1,1.24],[-1.14,1.18],[-0.22,1.16]],
    hoodScoop:true, splitter:false,
  },
  suv: {
    W:1.96, wb:1.42, wheelR:0.385, track:1.64,
    body:[[2.31,0.34],[2.35,0.58],[2.16,0.8],[1.3,0.95],[0.6,1.0],[-1.6,1.02],[-2.1,0.95],[-2.29,0.72],[-2.31,0.48],[-2.25,0.32],[-1.95,0.24],[1.95,0.24]],
    glass:[[0.58,1.0],[0.32,1.64],[-1.43,1.66],[-1.64,1.02]],
    roof:[[0.36,1.6],[-1.47,1.62],[-1.51,1.56],[0.32,1.54]],
    rails:true, splitter:false,
  },
  truck: {
    W:2.00, wb:1.58, wheelR:0.40, track:1.68,
    body:[[2.61,0.34],[2.65,0.58],[2.46,0.82],[1.55,0.95],[0.8,1.0],[0.68,1.05],[-0.55,1.08],[-0.67,1.02],[-2.3,1.0],[-2.56,0.85],[-2.61,0.55],[-2.57,0.34],[-2.2,0.24],[2.2,0.24]],
    glass:[[0.64,1.03],[0.48,1.54],[-0.42,1.58],[-0.62,1.05]],
    roof:[[0.52,1.5],[-0.46,1.54],[-0.5,1.48],[0.48,1.44]],
    bed:true, splitter:false,
  },
  sedan: {
    W:1.84, wb:1.4, wheelR:0.33, track:1.58,
    body:[[2.3,0.3],[2.34,0.5],[2.15,0.68],[1.25,0.78],[0.6,0.82],[-1.5,0.84],[-2.1,0.8],[-2.3,0.62],[-2.3,0.36],[-2.0,0.22],[2.0,0.22]],
    glass:[[0.62,0.8],[0.25,1.28],[-1.05,1.3],[-1.5,0.84]],
    roof:[[0.28,1.24],[-1.08,1.26],[-1.12,1.2],[0.24,1.18]],
    splitter:false,
  },
  van: {
    W:2.0, wb:1.6, wheelR:0.36, track:1.68,
    body:[[2.45,0.3],[2.5,0.6],[2.35,0.95],[1.6,1.1],[0.95,1.1],[0.95,2.0],[-2.45,2.0],[-2.5,1.85],[-2.5,0.35],[-2.2,0.24],[2.2,0.24]],
    glass:[[1.62,1.1],[1.05,1.95],[0.9,1.95],[0.9,1.1]],
    roof:null, splitter:false,
  },
  hyper: {
    W:2.04, wb:1.4, wheelR:0.34, track:1.72,
    body:[[2.4,0.2],[2.45,0.38],[2.2,0.5],[1.2,0.6],[0.5,0.68],[-1.3,0.74],[-2.0,0.72],[-2.35,0.6],[-2.4,0.38],[-2.3,0.2],[-2.0,0.14],[2.0,0.14]],
    glass:[[0.6,0.66],[0.0,1.0],[-0.9,1.02],[-1.4,0.74]],
    roof:[[0.04,0.97],[-0.92,0.99],[-0.95,0.93],[0.0,0.92]],
    wing:true, splitter:true, canards:true,
  },
  track: {
    W:2.02, wb:1.38, wheelR:0.335, track:1.70,
    body:[[2.28,0.22],[2.36,0.42],[2.22,0.56],[1.52,0.64],[0.72,0.7],[0.42,0.74],[-1.24,0.76],[-1.88,0.72],[-2.24,0.6],[-2.32,0.42],[-2.28,0.24],[-1.98,0.16],[1.98,0.16]],
    glass:[[0.46,0.72],[0.1,1.06],[-0.82,1.09],[-1.26,0.74]],
    roof:[[0.14,1.02],[-0.86,1.05],[-0.9,0.99],[0.1,0.96]],
    wing:true, splitter:true, canards:true,
  },
};

export function extrudeProfile(pts, width, mat, arches, bevel=0.045){
  if(arches) pts = chaikin(chaikin(pts));        // smooth, production-car curves on the body shell
  const s = new THREE.Shape();
  s.moveTo(pts[0][0], pts[0][1]);
  for(let i=1;i<pts.length;i++) s.lineTo(pts[i][0], pts[i][1]);
  s.closePath();
  for(const a of arches||[]){
    const hole = new THREE.Path();
    hole.absarc(a.x, a.y, a.r, 0, Math.PI*2, true);
    s.holes.push(hole);
  }
  const g = new THREE.ExtrudeGeometry(s, { depth:width, bevelEnabled:true, bevelThickness:bevel, bevelSize:bevel, bevelSegments:2, steps:1, curveSegments:10 });
  g.translate(0,0,-width/2);
  g.rotateY(Math.PI/2); // +X (front) -> -Z
  const m = new THREE.Mesh(g, mat);
  m.castShadow = true;
  return m;
}

// Chaikin corner-cutting: turns the polygon outline into smooth curves
function chaikin(pts){
  const out = [];
  for(let i = 0; i < pts.length; i++){
    const a = pts[i], b = pts[(i + 1) % pts.length];
    out.push([a[0] * 0.75 + b[0] * 0.25, a[1] * 0.75 + b[1] * 0.25], [a[0] * 0.25 + b[0] * 0.75, a[1] * 0.25 + b[1] * 0.75]);
  }
  return out;
}

const caliperMat = () => new THREE.MeshStandardMaterial({ color:0xc8202a, metalness:0.4, roughness:0.4 });
function makeWheel(style, wheelR, rim){
  const g = new THREE.Group();
  const tm = tireMat();
  // tread + rounded sidewalls
  const tire = new THREE.Mesh(new THREE.CylinderGeometry(wheelR, wheelR, 0.2, 26), tm);
  tire.rotation.z = Math.PI/2; tire.castShadow = true; g.add(tire);
  for(const s of [-1, 1]){
    const wall = new THREE.Mesh(new THREE.TorusGeometry(wheelR * 0.86, wheelR * 0.14, 8, 26), tm);
    wall.rotation.y = Math.PI / 2; wall.position.x = s * 0.1; g.add(wall);
  }
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(wheelR*0.5, wheelR*0.5, 0.24, 20), brakeMat());
  disc.rotation.z = Math.PI/2; g.add(disc);
  // brake caliper (doesn't spin: parented to the wheel group, counter-rotated in place)
  const cal = new THREE.Mesh(new THREE.BoxGeometry(0.1, wheelR * 0.42, wheelR * 0.22), caliperMat());
  cal.position.set(0, wheelR * 0.36, wheelR * 0.12); g.add(cal);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(wheelR*0.66, wheelR*0.05, 8, 26), rim);
  lip.rotation.y = Math.PI/2; g.add(lip);
  const spokes = new THREE.Group();
  for(let i=0;i<10;i++){
    const sp = new THREE.Mesh(new THREE.BoxGeometry(0.04, wheelR*0.62, wheelR*0.07), rim);
    sp.position.y = wheelR*0.31;
    const holder = new THREE.Group();
    holder.rotation.x = (i/10)*Math.PI*2 + (i % 2 ? 0.08 : 0);
    holder.add(sp); spokes.add(holder);
  }
  const spokes2 = spokes.clone(); spokes2.rotation.y = Math.PI;
  g.add(spokes); g.add(spokes2);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(wheelR*0.13, wheelR*0.13, 0.27, 12), chromeMat());
  hub.rotation.z = Math.PI/2; g.add(hub);
  if(style==='blackout'){ rim.color.setHex(0x17181c); }
  else if(style==='gold'){ rim.color.setHex(0xc9962e); }
  else if(style==='neon'){ rim.color.setHex(0x22e6ff); }
  return g;
}

export function buildCar(idOrDef, colorHex, wheelStyle='stock'){
  const def = typeof idOrDef === 'string' ? carDef(idOrDef) : (idOrDef || CAR_DEFS[0]);
  const id = def.id || 'sport';
  if (typeof colorHex !== 'number') colorHex = (typeof def.color === 'number') ? def.color : def.colors[0];
  if(USE_FORGE){
    const fg = buildForgeCar(def, colorHex);
    if(fg){ addRoofExtras(fg, def, fg.userData.profile); return fg; }
  }
  const P = PROFILES[id] || PROFILES[PROFILE_ALIAS[id]] || PROFILES.sport;
  const group = new THREE.Group();
  const paint = paintMat(colorHex);
  const glass = glassMat(), chrome = chromeMat(), trim = darkTrimMat();

  const arches = [ARCH(P.wb, P.wheelR, P.wheelR+0.13), ARCH(-P.wb, P.wheelR, P.wheelR+0.13)];
  group.add(extrudeProfile(P.body, P.W, paint, arches));
  group.add(extrudeProfile(P.glass, P.W-0.26, glass, null, 0.03));
  if(P.roof) group.add(extrudeProfile(P.roof, P.W-0.20, paint, null, 0.02));

  const L = Math.max(...P.body.map(p=>p[0]));   // front extent (+X)
  const R = Math.min(...P.body.map(p=>p[0]));   // rear extent (-X)
  const frontZ = -L, rearZ = -R;                 // world: front=-Z
  const W2 = P.W/2;

  // ---- wheels (world space, front = -Z) ----
  const wheels = [];
  const rim = rimMat();
  for(const sz of [-1, 1]) for(const fz of [-P.wb, P.wb]){
    const w = makeWheel(wheelStyle, P.wheelR, rim);
    w.position.set(sz*P.track/2, P.wheelR, fz);
    group.add(w); wheels.push(w);
  }

  // heights of the nose and tail faces, used to place the light clusters
  const frontTop = Math.max(...P.body.filter(p => p[0] > L - 0.3).map(p => p[1]));
  const rearTop = Math.max(...P.body.filter(p => p[0] < R + 0.3).map(p => p[1]));
  const hlY = Math.max(0.45, frontTop - 0.12), tlY = Math.max(0.5, rearTop - 0.12);

  // ---- headlights: smoked housing, twin projectors, LED daytime strip ----
  const lensM = headLensMat();
  const drlM = new THREE.MeshStandardMaterial({ color:0xffffff, emissive:0xeaf4ff, emissiveIntensity:2.6 });
  const projGeo = new THREE.CylinderGeometry(0.045, 0.05, 0.05, 14).rotateX(Math.PI / 2);
  for(const s of [-1,1]){
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.14, 0.12), trim);
    housing.position.set(s*(W2-0.4), hlY, frontZ+0.04); housing.rotation.z = s * 0.06; group.add(housing);
    for(const k of [0, 1]){
      const p = new THREE.Mesh(projGeo, lensM);
      p.position.set(s*(W2-0.48 + k*0.15), hlY - 0.01, frontZ-0.03); group.add(p);
    }
    const drl = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.018, 0.03), drlM);
    drl.position.set(s*(W2-0.4), hlY + 0.06, frontZ-0.025); drl.rotation.z = s * 0.06; group.add(drl);
  }
  // ---- grille + splitter (front) ----
  const grille = new THREE.Mesh(new THREE.BoxGeometry(W2*1.1, 0.16, 0.08), trim);
  grille.position.set(0, 0.40, frontZ+0.01); group.add(grille);
  if(P.splitter){
    const sp = new THREE.Mesh(new THREE.BoxGeometry(P.W*0.92, 0.05, 0.30), trim);
    sp.position.set(0, 0.16, frontZ+0.10); group.add(sp);
  }
  if(P.hoodScoop){
    const scoop = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.09, 0.7), trim);
    scoop.position.set(0, 0.86, -(P.wb*0.55)); group.add(scoop);
  }
  if(P.canards){
    for(const s of [-1,1]){
      const c = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.03, 0.30), trim);
      c.position.set(s*(W2-0.10), 0.30, frontZ+0.12); c.rotation.z = s*0.25; group.add(c);
    }
  }
  // ---- tail lights: corner clusters + (sporty cars) a full-width light bar ----
  const tailM = tailLensMat();
  for(const s of [-1,1]){
    const cl = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.13, 0.07), tailM);
    cl.position.set(s*(W2-0.32), tlY, rearZ-0.02); group.add(cl);
    const inner = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.03, 0.075), new THREE.MeshStandardMaterial({ color:0x330000, emissive:0xff3030, emissiveIntensity:3.2 }));
    inner.position.set(s*(W2-0.32), tlY + 0.03, rearZ-0.025); group.add(inner);
    const rev = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.075),
      new THREE.MeshStandardMaterial({ color:0xdddddd, emissive:0xffffff, emissiveIntensity:0.5 }));
    rev.position.set(s*(W2-0.32), tlY - 0.045, rearZ-0.025); group.add(rev);
  }
  if(P.spoiler || P.wing || id === 'hyper' || id === 'super'){
    const bar = new THREE.Mesh(new THREE.BoxGeometry(P.W*0.5, 0.025, 0.06), tailM);
    bar.position.set(0, tlY + 0.03, rearZ-0.02); group.add(bar);
  }
  // ---- side details: chrome belt line, black pillars, door seams + handles ----
  {
    const gx = P.glass.map(p => p[0]), gy = P.glass.map(p => p[1]);
    const gFront = Math.max(...gx), gRear = Math.min(...gx), gBot = Math.min(...gy), gTop = Math.max(...gy);
    const seamM = new THREE.MeshStandardMaterial({ color:0x0a0b0d, roughness:0.6 });
    const pillarM = new THREE.MeshStandardMaterial({ color:0x0d0f12, roughness:0.35, metalness:0.4 });
    const fourDoor = ['sedan', 'taxi', 'police', 'suv'].includes(id);
    const doorFront = gFront - 0.05, doorEnd = fourDoor ? gRear + 0.1 : (gFront + gRear) / 2 - 0.1;
    for(const s of [-1, 1]){
      const xs = s * (W2 + 0.046);
      const belt = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.025, gFront - gRear - 0.15), chrome);
      belt.position.set(s * (W2 - 0.1), gBot + 0.01, -(gFront + gRear) / 2); group.add(belt);
      const pil = new THREE.Mesh(new THREE.BoxGeometry(0.02, gTop - gBot - 0.05, 0.11), pillarM);
      pil.position.set(s * (W2 - 0.12), (gTop + gBot) / 2, -((gFront + gRear) / 2 + (fourDoor ? 0.15 : -0.05))); group.add(pil);
      for(const x of fourDoor ? [doorFront, (gFront + gRear) / 2 + 0.1, doorEnd] : [doorFront, doorEnd]){
        const seam = new THREE.Mesh(new THREE.BoxGeometry(0.008, gBot - 0.3, 0.012), seamM);
        seam.position.set(xs, 0.3 + (gBot - 0.3) / 2, -x); group.add(seam);
      }
      const handle = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.025, 0.12), chrome);
      handle.position.set(xs, gBot - 0.12, -(doorEnd + 0.18)); group.add(handle);
      // side skirt
      const skirt = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.08, P.wb * 2 - P.wheelR * 2 - 0.3), trim);
      skirt.position.set(s * (W2 + 0.01), 0.24, 0); group.add(skirt);
    }
  }
  // ---- rear diffuser + exhausts ----
  const diffuser = new THREE.Mesh(new THREE.BoxGeometry(P.W*0.8, 0.14, 0.18), trim);
  diffuser.position.set(0, 0.24, rearZ-0.06); group.add(diffuser);
  for(const s of [-1,1]){
    const ex = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.055, 0.22, 12), chrome);
    ex.rotation.x = Math.PI/2;
    ex.position.set(s*0.32, 0.26, rearZ+0.06); group.add(ex);
  }
  // ---- plate (rear) ----
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.09, 0.02), plateMat());
  plate.position.set(0, 0.50, rearZ+0.005); group.add(plate);
  // ---- mirrors ----
  for(const s of [-1,1]){
    const stalk = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.03, 0.05), trim);
    stalk.position.set(s*(W2+0.03), 1.00, -(P.wb*0.42)); group.add(stalk);
    const mir = new THREE.Mesh(new THREE.BoxGeometry(0.10, 0.10, 0.16), paint);
    mir.position.set(s*(W2+0.09), 1.04, -(P.wb*0.42)); mir.castShadow = true; group.add(mir);
  }
  // ---- roof rails (suv) / bed (truck) ----
  if(P.rails){
    for(const s of [-1,1]){
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.05, 1.9), trim);
      rail.position.set(s*(W2-0.35), 1.72, 0.1); group.add(rail);
    }
  }
  if(P.bed){
    const bedIn = new THREE.Mesh(new THREE.BoxGeometry(P.W-0.5, 0.06, 2.0), trim);
    bedIn.position.set(0, 1.02, R*0.55); group.add(bedIn);
  }
  // ---- spoiler / wing: sits on the trunk lid (rear = +Z, so move forward with -Z) ----
  if(P.spoiler || P.wing){
    const big = !!P.wing;
    const sz = rearZ - (big ? 0.42 : 0.3);                       // just in from the tail
    const deckY = Math.max(...P.body.filter(p => p[0] < R + 0.75).map(p => p[1]));   // trunk height there
    const postH = big ? 0.3 : 0.1, wingY = deckY + postH;
    for(const s of [-1,1]){
      const up = new THREE.Mesh(new THREE.BoxGeometry(0.07, postH + 0.04, 0.2), big?trim:paint);
      up.position.set(s*(W2-0.45), deckY + postH / 2 - 0.02, sz); group.add(up);
    }
    const wing = new THREE.Mesh(new THREE.BoxGeometry(P.W*(big?0.92:0.82), 0.045, big?0.4:0.26), big?trim:paint);
    wing.position.set(0, wingY, sz);
    wing.rotation.x = big?-0.12:-0.05; wing.castShadow = true; group.add(wing);
    if(big) for(const s of [-1,1]){                               // end plates
      const ep = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.2, 0.44), trim);
      ep.position.set(s*P.W*0.46, wingY - 0.04, sz); group.add(ep);
    }
  }

  const flashers = addRoofExtras(group, def, P);

  group.userData = {
    flashers,
    defId:id, bodyColor:colorHex, wheels,
    frontWheels: wheels.filter(w=>w.position.z<0),
    rim, glass, paint, setBrake:(on)=>{},
    profile:P, frontZ, rearZ,
  };
  return group;
}

// ---- taxi sign / police light bar (shared by classic and Forge bodies) ----
function addRoofExtras(group, def, P){
  let flashers = null;
  const trim = new THREE.MeshStandardMaterial({ color:0x14161a, metalness:0.4, roughness:0.6 });
  if(def.extra === 'taxi' || def.extra === 'police'){
    const roofY = Math.max(...(P.roof || P.glass).map(p => p[1])) + 0.02;
    const roofX = (P.roof || P.glass).reduce((a, p) => a + p[0], 0) / (P.roof || P.glass).length;
    if(def.extra === 'taxi'){
      const c = document.createElement('canvas'); c.width = 128; c.height = 32;
      const g = c.getContext('2d'); g.fillStyle = '#ffd23f'; g.fillRect(0, 0, 128, 32);
      g.fillStyle = '#111'; g.font = 'bold 22px sans-serif'; g.textAlign = 'center'; g.fillText('TAXI', 64, 24);
      const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
      const sign = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.2, 0.26),
        new THREE.MeshStandardMaterial({ map:tex, emissive:0xffffff, emissiveMap:tex, emissiveIntensity:0.6 }));
      sign.position.set(0, roofY + 0.1, -roofX); sign.rotation.y = Math.PI / 2; group.add(sign);
    }else{
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 0.28), trim);
      base.position.set(0, roofY + 0.05, -roofX); group.add(base);
      const red = new THREE.MeshStandardMaterial({ color:0x550000, emissive:0xff1a1a, emissiveIntensity:2.5 });
      const blue = new THREE.MeshStandardMaterial({ color:0x000055, emissive:0x1a4dff, emissiveIntensity:2.5 });
      const l = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.12, 0.24), red); l.position.set(-0.27, roofY + 0.14, -roofX);
      const r = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.12, 0.24), blue); r.position.set(0.27, roofY + 0.14, -roofX);
      group.add(l, r);
      flashers = [red, blue];
    }
  }

  if(flashers) group.userData.flashers = flashers;
  return flashers;
}

export function paintCar(group, hex){
  if(group.userData.forge && group.userData.paint){ group.userData.paint.color.setHex(hex); group.userData.bodyColor = hex; return; }
  const target = new THREE.Color(hex);
  group.traverse(o=>{
    if(o.isMesh && o.material && o.material.isMeshPhysicalMaterial &&
       o.material.color && Math.abs(o.material.color.getHex()-group.userData.bodyColor)<2 && !o.material.emissiveIntensity){
      o.material.color.copy(target);
    }
  });
  group.userData.bodyColor = hex;
}

export function setWheelStyle(group, style){
  const m = group.userData.rim;
  if(!m) return;
  if(style==='blackout') m.color.setHex(0x17181c);
  else if(style==='gold') m.color.setHex(0xc9962e);
  else if(style==='neon') m.color.setHex(0x22e6ff);
  else m.color.setHex(0xb9bec6);
}

export function effectiveStats(idOrDef, upgrades){
  const def = typeof idOrDef === 'string' ? carDef(idOrDef) : (idOrDef || CAR_DEFS[0]);
  const base = def.stats;
  const u = upgrades||{};
  const lv = k => u[k]||0;
  return {
    topSpeed: base.topSpeed * (1 + 0.055*lv('engine')),
    accel:    base.accel    * (1 + 0.09*lv('engine') + 0.12*lv('turbo')),
    handling: base.handling * (1 + 0.06*lv('suspension')),
    grip:     base.grip     * (1 + 0.07*lv('tires')),
    nitroTime:  base.nitroTime  + 0.5*lv('nitro'),
    nitroPower: base.nitroPower * (1 + 0.08*lv('nitro')),
  };
}

// ---- free skin editor: paint, rims, stripes, underglow, window tint ----
const TINT_COLORS = { clear:0x5a6e84, dark:0x1b2735, limo:0x05070a };
export function applyCarSkin(group, paintHex, skin){
  const u = group.userData;
  if(typeof paintHex === 'number' && u.paint){ u.paint.color.setHex(paintHex); u.bodyColor = paintHex; }
  if(!skin) return group;
  if(u.rim) u.rim.color.setHex(skin.rims);
  if(u.glass) u.glass.color.setHex(TINT_COLORS[skin.tint] ?? TINT_COLORS.dark);
  // rebuild the decal parts
  if(u.skinParts){ group.remove(u.skinParts); u.skinParts.traverse(o => { if(o.isMesh){ o.geometry.dispose(); } }); }
  const parts = new THREE.Group();
  u.skinParts = parts;
  group.add(parts);
  const P = u.profile;
  if(P && skin.stripes !== 'none'){
    const sm = new THREE.MeshPhysicalMaterial({ color:skin.stripe, metalness:0.4, roughness:0.35, clearcoat:1, clearcoatRoughness:0.1 });
    if(skin.stripes === 'side'){
      const len = (u.rearZ - u.frontZ) * 0.86, mid = (u.rearZ + u.frontZ) / 2;
      const y = P.wheelR + 0.22;
      for(const s of [-1, 1]){
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.09, len), sm);
        b.position.set(s * (P.W / 2 + 0.05), y, mid);
        parts.add(b);
      }
    }else{
      const offs = skin.stripes === 'dual' ? [-0.22, 0.22] : [0];
      const w = skin.stripes === 'dual' ? 0.16 : 0.34;
      for(const ox of offs){
        for(const pts of [P.body, P.roof]){
          if(!pts) continue;
          const m = extrudeProfile(pts, w, sm, null, 0.045);
          m.castShadow = false;
          m.scale.set(1, 1.012, 1.004);
          m.position.set(ox, 0.006, 0);
          parts.add(m);
        }
      }
    }
  }
  if(skin.glow != null && P){
    const gm = new THREE.MeshBasicMaterial({ color:skin.glow, transparent:true, opacity:0.75,
      blending:THREE.AdditiveBlending, depthWrite:false, map:glowTexture() });
    const len = (u.rearZ - u.frontZ) + 1.2;
    const g = new THREE.Mesh(new THREE.PlaneGeometry(P.W + 1.4, len).rotateX(-Math.PI / 2), gm);
    g.position.set(0, 0.07, (u.rearZ + u.frontZ) / 2);
    g.renderOrder = 2;
    parts.add(g);
  }
  if(u.build) applyBuildVisual(group, u.build);   // keep new decals lifted with the body
  return group;
}

let _glowTex = null;
function glowTexture(){
  if(_glowTex) return _glowTex;
  const c = document.createElement('canvas'); c.width = 64; c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 64, 4, 32, 64, 62);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.55, 'rgba(255,255,255,0.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.save(); g.scale(1, 1); g.fillStyle = gr; g.fillRect(0, 0, 64, 128); g.restore();
  _glowTex = new THREE.CanvasTexture(c);
  return _glowTex;
}

// ---- tuning parts on the model: lift, tire size, offset, slicks, off-road + drag parts ----
// b = { rideHeight, tireScale, offset, slicks, adder, body:[...] } (see tuning.js buildStats / main.applyBuildVisual)
export function applyBuildVisual(group, b){
  const u = group.userData, P = u.profile;
  if(!P) return group;
  b = b || {};
  const ts = b.tireScale || 1, off = b.offset || 0;
  const lift = (b.rideHeight || 0) + (ts - 1) * P.wheelR;
  // remember stock positions once
  for(const c of group.children){
    if(c === u.buildParts) continue;
    if(c.userData.p0 === undefined) c.userData.p0 = c.position.clone();
  }
  for(const c of group.children){
    if(c === u.buildParts || !c.userData.p0) continue;
    const p0 = c.userData.p0;
    if(u.wheels.includes(c)){
      const rear = p0.z > 0;
      c.scale.set(ts * (b.slicks && rear ? 1.45 : 1) * (ts > 1.15 ? 1.15 : 1), ts, ts);
      c.position.set(Math.sign(p0.x) * (Math.abs(p0.x) + off + (ts - 1) * 0.12), P.wheelR * ts, p0.z);
    }else c.position.set(p0.x, p0.y + lift, p0.z);
  }
  // rebuild the bolt-on parts
  if(u.buildParts){ group.remove(u.buildParts); u.buildParts.traverse(o => { if(o.isMesh) o.geometry.dispose(); }); }
  const parts = new THREE.Group(); parts.position.y = lift;
  u.buildParts = parts; group.add(parts);
  const has = id => (b.body || []).includes(id);
  const W2 = P.W / 2, frontZ = u.frontZ, rearZ = u.rearZ;
  const L = -frontZ, R = -rearZ;
  const hoodY = Math.max(...P.body.filter(p => p[0] > L - 1.4 && p[0] < L - 0.3).map(p => p[1]));
  const roofPts = P.roof || P.glass;
  const roofY = Math.max(...roofPts.map(p => p[1])), roofX = roofPts.reduce((a, p) => a + p[0], 0) / roofPts.length;
  const steel = new THREE.MeshStandardMaterial({ color:0x1c1e22, metalness:0.7, roughness:0.45 });
  const chromeM = new THREE.MeshStandardMaterial({ color:0xdfe3e8, metalness:1, roughness:0.2 });
  const tube = (len, r, mat = steel) => new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 10), mat);
  const add = (m, x, y, z, rx = 0, ry = 0, rz = 0) => { m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; parts.add(m); return m; };

  if(has('bullbar')){
    add(tube(P.W * 0.9, 0.05), 0, 0.42, frontZ - 0.16, 0, 0, Math.PI / 2);
    add(tube(P.W * 0.62, 0.045), 0, 0.82, frontZ - 0.14, 0, 0, Math.PI / 2);
    for(const s of [-1, 1]) add(tube(0.45, 0.045), s * P.W * 0.3, 0.62, frontZ - 0.15);
    add(new THREE.Mesh(new THREE.BoxGeometry(P.W * 0.95, 0.2, 0.16), steel), 0, 0.32, frontZ - 0.06);
  }
  if(has('winch')){
    add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.16, 0.18), steel), 0, 0.36, frontZ - 0.2);
    add(tube(0.36, 0.06, new THREE.MeshStandardMaterial({ color:0x8a6d2a, roughness:0.7 })), 0, 0.36, frontZ - 0.21, 0, 0, Math.PI / 2);
  }
  if(has('snorkel')){
    const x = W2 + 0.05, z = -(L - 1.2);
    add(tube(Math.max(0.4, roofY - 0.55), 0.055), x, 0.55 + (roofY - 0.55) / 2, z);
    add(new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.12, 0.2), steel), x, roofY + 0.04, z - 0.06);
  }
  if(has('rack')){
    const rz = -roofX;
    for(const s of [-1, 1]) add(tube(1.3, 0.025), s * (W2 - 0.25), roofY + 0.1, rz, Math.PI / 2);
    for(const k of [-0.5, 0, 0.5]) add(tube(P.W - 0.45, 0.022), 0, roofY + 0.1, rz + k, 0, 0, Math.PI / 2);
    for(const s of [-1, 1]) for(const k of [-0.6, 0.6]) add(tube(0.12, 0.02), s * (W2 - 0.25), roofY + 0.05, rz + k);
  }
  if(has('lightbar')){
    const lb = new THREE.MeshStandardMaterial({ color:0xffffff, emissive:0xeaf6ff, emissiveIntensity:2.8 });
    add(new THREE.Mesh(new THREE.BoxGeometry(P.W * 0.72, 0.1, 0.1), steel), 0, roofY + 0.18, -roofX - 0.55);
    add(new THREE.Mesh(new THREE.BoxGeometry(P.W * 0.68, 0.06, 0.03), lb), 0, roofY + 0.18, -roofX - 0.61);
    u.lightbar = true;
  }else u.lightbar = false;
  if(has('flares')){
    const fm = new THREE.MeshStandardMaterial({ color:0x111214, roughness:0.75 });
    for(const w of u.wheels){
      const f = new THREE.Mesh(new THREE.TorusGeometry(P.wheelR * ts + 0.1, 0.06, 6, 16, Math.PI), fm);
      f.scale.set(1, 1, 2.2);
      add(f, w.position.x + Math.sign(w.position.x) * 0.06, P.wheelR * ts - lift, w.position.z, 0, Math.PI / 2, 0);
    }
  }
  if(has('skid')) add(new THREE.Mesh(new THREE.BoxGeometry(P.W * 0.7, 0.04, 1.0), new THREE.MeshStandardMaterial({ color:0x9aa3ad, metalness:0.8, roughness:0.35 })), 0, 0.12, frontZ + 0.6);
  if(has('wing')){
    const wy = roofY + 0.05, wz = rearZ - 0.35;
    for(const s of [-1, 1]) add(new THREE.Mesh(new THREE.BoxGeometry(0.05, wy - 0.6, 0.3), steel), s * (W2 - 0.4), 0.6 + (wy - 0.6) / 2, wz);
    add(new THREE.Mesh(new THREE.BoxGeometry(P.W * 1.02, 0.05, 0.55), steel), 0, wy, wz, -0.18);
    for(const s of [-1, 1]) add(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.3, 0.6), steel), s * P.W * 0.51, wy - 0.06, wz);
  }
  if(has('wheelie')){
    for(const s of [-1, 1]) add(tube(1.4, 0.03, chromeM), s * 0.35, 0.3 - lift * 0.5, rearZ + 0.7, Math.PI / 2 - 0.12);
    for(const s of [-1, 1]){
      const wh = add(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.05, 12), steel), s * 0.35, 0.07 - lift, rearZ + 1.38, 0, 0, Math.PI / 2);
      wh.castShadow = false;
    }
  }
  // power adders that show: a blower through the hood, an intercooler behind the grille
  if(b.adder === 'roots' || b.adder === 'centri'){
    const bm = new THREE.MeshStandardMaterial({ color:0xc9cfd6, metalness:0.55, roughness:0.3, emissive:0x22262b, emissiveIntensity:0.6 });
    const bz = -(L - 0.95);
    add(new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.22, 0.6), bm), 0, hoodY + 0.12, bz);
    for(let i = 0; i < 6; i++) add(new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.02, 0.04), bm), 0, hoodY + 0.12 + (i - 2.5) * 0.03, bz - 0.31);
    add(new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.14, 0.34), new THREE.MeshStandardMaterial({ color:0xc8202a, metalness:0.4, roughness:0.4 })), 0, hoodY + 0.3, bz + 0.05);
  }else if(b.adder && b.adder !== 'none'){
    add(new THREE.Mesh(new THREE.BoxGeometry(P.W * 0.6, 0.18, 0.05), new THREE.MeshStandardMaterial({ color:0x2a2d33, metalness:0.6, roughness:0.4 })), 0, 0.42, frontZ + 0.03);
  }
  u.build = b;
  return group;
}
