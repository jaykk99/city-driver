// Car definitions + procedural builders for CITY DRIVER.
// CPM-style cars: extruded side-profile bodies (real silhouettes, cut wheel
// arches), glasshouse + painted roof, detailed 5-spoke rims, surface-mounted
// lights. Convention: car faces -Z (matches physics heading 0 = -Z).
import * as THREE from 'three';

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
];
export const carDef = id => CAR_DEFS.find(c=>c.id===id) || CAR_DEFS[0];

// ---- materials ----
export const paintMat = hex => new THREE.MeshPhysicalMaterial({
  color:hex, metalness:0.55, roughness:0.32,
  clearcoat:1.0, clearcoatRoughness:0.08,
  envMapIntensity:1.25,
});
export const glassMat = () => new THREE.MeshPhysicalMaterial({
  color:0x0e141c, metalness:0.9, roughness:0.08, envMapIntensity:1.6,
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
  track: {
    W:2.02, wb:1.38, wheelR:0.335, track:1.70,
    body:[[2.28,0.22],[2.36,0.42],[2.22,0.56],[1.52,0.64],[0.72,0.7],[0.42,0.74],[-1.24,0.76],[-1.88,0.72],[-2.24,0.6],[-2.32,0.42],[-2.28,0.24],[-1.98,0.16],[1.98,0.16]],
    glass:[[0.46,0.72],[0.1,1.06],[-0.82,1.09],[-1.26,0.74]],
    roof:[[0.14,1.02],[-0.86,1.05],[-0.9,0.99],[0.1,0.96]],
    wing:true, splitter:true, canards:true,
  },
};

function extrudeProfile(pts, width, mat, arches, bevel=0.045){
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

function makeWheel(style, wheelR, rim){
  const g = new THREE.Group();
  const tire = new THREE.Mesh(new THREE.CylinderGeometry(wheelR, wheelR, 0.26, 22), tireMat());
  tire.rotation.z = Math.PI/2; tire.castShadow = true; g.add(tire);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(wheelR*0.52, wheelR*0.52, 0.27, 18), brakeMat());
  disc.rotation.z = Math.PI/2; g.add(disc);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(wheelR*0.62, wheelR*0.10, 8, 22), rim);
  lip.rotation.y = Math.PI/2; g.add(lip);
  const spokes = new THREE.Group();
  for(let i=0;i<5;i++){
    const sp = new THREE.Mesh(new THREE.BoxGeometry(0.05, wheelR*0.60, wheelR*0.16), rim);
    sp.position.y = wheelR*0.30;
    const holder = new THREE.Group();
    holder.rotation.x = (i/5)*Math.PI*2;
    holder.add(sp); spokes.add(holder);
  }
  const spokes2 = spokes.clone(); spokes2.rotation.y = Math.PI;
  g.add(spokes); g.add(spokes2);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(wheelR*0.14, wheelR*0.14, 0.30, 12), chromeMat());
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
  const P = PROFILES[id] || PROFILES.sport;
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

  // ---- headlights (front, -Z) ----
  const lensM = headLensMat();
  for(const s of [-1,1]){
    const housing = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.10), trim);
    housing.position.set(s*(W2-0.42), 0.60, frontZ+0.02); group.add(housing);
    const lens = new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 10), lensM);
    lens.scale.set(1.6, 0.75, 0.7);
    lens.position.set(s*(W2-0.42), 0.60, frontZ-0.03); group.add(lens);
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
  // ---- taillight bar (rear, +Z) ----
  const tailM = tailLensMat();
  const bar = new THREE.Mesh(new THREE.BoxGeometry(P.W*0.78, 0.10, 0.06), tailM);
  bar.position.set(0, 0.66, rearZ-0.02); group.add(bar);
  for(const s of [-1,1]){
    const rev = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.06, 0.065),
      new THREE.MeshStandardMaterial({ color:0xdddddd, emissive:0xffffff, emissiveIntensity:0.6 }));
    rev.position.set(s*0.28, 0.66, rearZ-0.02); group.add(rev);
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
  // ---- spoiler / wing ----
  if(P.spoiler || P.wing){
    const big = !!P.wing;
    for(const s of [-1,1]){
      const up = new THREE.Mesh(new THREE.BoxGeometry(0.07, big?0.30:0.16, 0.24), big?trim:paint);
      up.position.set(s*(W2-0.45), 0.86+(big?0.10:0.04), rearZ+0.28); group.add(up);
    }
    const wing = new THREE.Mesh(new THREE.BoxGeometry(P.W*(big?0.92:0.80), 0.045, big?0.42:0.30), big?trim:paint);
    wing.position.set(0, (big?1.06:0.98), rearZ+0.28);
    wing.rotation.x = big?-0.12:0; wing.castShadow = true; group.add(wing);
  }

  group.userData = {
    defId:id, bodyColor:colorHex, wheels,
    frontWheels: wheels.filter(w=>w.position.z<0),
    rim, setBrake:(on)=>{},
  };
  return group;
}

export function paintCar(group, hex){
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
