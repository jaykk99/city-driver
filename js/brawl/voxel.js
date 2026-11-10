// BAR BRAWL — voxel geometry: characters built from little cubes, the way
// Paint the Town Red does it. Each body part is one merged BufferGeometry of
// only the exposed cube faces, with per-vertex colours (one draw call a part).
import * as THREE from 'three';

export const V = 0.075;        // voxel edge (m)

// voxels: Map "x,y,z" -> colour hex. ox/oy/oz shift the origin (in voxels).
export function voxelGeometry(vox, ox = 0, oy = 0, oz = 0, s = V){
  const pos = [], col = [], nor = [];
  const c = new THREE.Color();
  const FACES = [
    [1, 0, 0, [[1, 0, 0], [1, 1, 0], [1, 1, 1], [1, 0, 1]]],
    [-1, 0, 0, [[0, 0, 1], [0, 1, 1], [0, 1, 0], [0, 0, 0]]],
    [0, 1, 0, [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]]],
    [0, -1, 0, [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]]],
    [0, 0, 1, [[1, 0, 1], [1, 1, 1], [0, 1, 1], [0, 0, 1]]],
    [0, 0, -1, [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]]],
  ];
  for(const [key, hex] of vox){
    const [x, y, z] = key.split(',').map(Number);
    c.setHex(hex);
    // tiny per-voxel shade jitter so flat colours read as voxels
    const j = 0.92 + (((x * 73856093) ^ (y * 19349663) ^ (z * 83492791)) & 15) / 100;
    for(const [nx, ny, nz, quad] of FACES){
      if(vox.has((x + nx) + ',' + (y + ny) + ',' + (z + nz))) continue;
      const v = quad.map(([a, b, d]) => [(x + a + ox) * s, (y + b + oy) * s, (z + d + oz) * s]);
      for(const i of [0, 1, 2, 0, 2, 3]){
        pos.push(...v[i]); nor.push(nx, ny, nz); col.push(c.r * j, c.g * j, c.b * j);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.computeBoundingSphere();
  return g;
}

const K = (x, y, z) => x + ',' + y + ',' + z;
function fill(vox, x0, y0, z0, w, h, d, cf){
  for(let x = x0; x < x0 + w; x++) for(let y = y0; y < y0 + h; y++) for(let z = z0; z < z0 + d; z++){
    const c = typeof cf === 'function' ? cf(x - x0, y - y0, z - z0) : cf;
    if(c != null) vox.set(K(x, y, z), c);
  }
}

// ---------- body parts (front = +z) ----------
const DARK = 0x1a1010, WHITE = 0xf4f4f4, MOUTH = 0x6a1a1a;

function headVox(o){
  const v = new Map();
  fill(v, 0, 0, 0, 6, 6, 6, o.skin);
  // face
  if(o.shades){ for(let x = 1; x <= 4; x++) v.set(K(x, 3, 5), DARK); }
  else { v.set(K(1, 3, 5), WHITE); v.set(K(4, 3, 5), WHITE); v.set(K(1, 3, 5), DARK); v.set(K(4, 3, 5), DARK); v.set(K(2, 3, 5), o.skin); }
  if(o.eyepatch){ v.set(K(4, 3, 5), DARK); v.set(K(4, 4, 5), DARK); for(let x = 0; x < 6; x++) v.set(K(x, 4, 5), x === 4 ? DARK : v.get(K(x, 4, 5))); }
  v.set(K(2, 1, 5), MOUTH); v.set(K(3, 1, 5), MOUTH);
  if(o.hair != null){
    fill(v, 0, 5, 0, 6, 1, 6, o.hair);
    fill(v, 0, 2, 0, 6, 3, 1, o.hair);                 // back
    for(const x of [0, 5]) fill(v, x, 4, 1, 1, 1, 3, o.hair);
  }
  if(o.afro) fill(v, -1, 5, -1, 8, 3, 7, o.hair || 0x222222);
  if(o.beard != null){
    fill(v, 0, 0, 5, 6, 2, 1, (x, y) => (y === 1 && (x === 2 || x === 3)) ? MOUTH : o.beard);
    for(const x of [0, 5]) fill(v, x, 0, 3, 1, 3, 2, o.beard);
    fill(v, 1, -1, 4, 4, 1, 2, o.beard);
  }
  switch(o.hat){
    case 'bandana': fill(v, 0, 5, 0, 6, 1, 6, o.hatC); fill(v, 0, 4, 0, 6, 1, 6, (x, y, z) => (z === 5 || z === 0 || x === 0 || x === 5) ? o.hatC : null); v.set(K(2, 4, -1), o.hatC); v.set(K(3, 3, -1), o.hatC); break;
    case 'cap': fill(v, 0, 6, 0, 6, 1, 6, o.hatC); fill(v, 1, 5, 6, 4, 1, 2, o.hatC); break;
    case 'cowboy': fill(v, -2, 6, -2, 10, 1, 10, o.hatC); fill(v, 0, 7, 0, 6, 2, 6, o.hatC); fill(v, 0, 7, 0, 6, 1, 6, (x, y, z) => (x === 0 || x === 5 || z === 0 || z === 5) ? 0x2a1a0e : o.hatC); break;
    case 'tricorn': fill(v, -1, 6, -1, 8, 1, 8, o.hatC); fill(v, 0, 7, 0, 6, 2, 6, o.hatC); v.set(K(2, 8, 6), 0xf0f0f0); v.set(K(3, 8, 6), 0xf0f0f0); break;
    case 'helmet': fill(v, -1, 3, -1, 8, 4, 8, (x, y, z) => (z === 7 && y < 3 && x > 0 && x < 7) ? null : o.hatC); fill(v, 3, 7, -1, 2, 2, 7, 0xb02020); break;
  }
  return v;
}

function torsoVox(o){
  const v = new Map();
  const shirt = o.shirt == null ? o.skin : o.shirt;
  fill(v, 0, 0, 0, 8, 9, 4, (x, y, z) => {
    if(y === 0) return 0x2a1a10;                                       // belt
    if(o.stripes && y % 2 === 0) return o.stripes;
    if(o.vest != null && (z === 0 || x <= 1 || x >= 6) && y >= 1) return o.vest;
    if(o.shirt == null && y >= 1) return (x === 3 || x === 4) && y > 4 ? o.skin : o.skin;
    return shirt;
  });
  if(o.badge) v.set(K(5, 6, 3), 0xffd23f);
  if(o.guard){ v.set(K(2, 7, 3), 0xffd23f); }
  return v;
}

function armVox(o){
  const v = new Map();
  const sleeve = o.shirt == null ? o.skin : (o.vest != null && o.vest === o.shirt ? o.vest : o.shirt);
  fill(v, 0, 0, 0, 3, 9, 3, (x, y) => y >= 6 ? (o.stripes && y === 7 ? o.stripes : sleeve) : o.skin);
  return v;
}

function legVox(o){
  const v = new Map();
  fill(v, 0, 0, 0, 4, 10, 4, (x, y, z) => y < 2 ? o.shoe : o.pants);
  v.set(K(1, 0, 4), o.shoe); v.set(K(2, 0, 4), o.shoe);               // toe
  return v;
}

const geoCache = new Map();
function cached(key, make){ let g = geoCache.get(key); if(!g){ g = make(); geoCache.set(key, g); } return g; }

export const BODY_MAT = new THREE.MeshLambertMaterial({ vertexColors:true });

// Build a voxel person. Returns { group, parts, pivots, palette }.
// group origin = feet centre, faces +z. Parts: head torso armL armR legL legR.
export function buildPerson(o){
  const key = JSON.stringify(o);
  const geo = {
    head:  cached(key + 'h', () => voxelGeometry(headVox(o), -3, 0, -3)),
    torso: cached(key + 't', () => voxelGeometry(torsoVox(o), -4, 0, -2)),
    arm:   cached(key + 'a', () => voxelGeometry(armVox(o), -1.5, -9, -1.5)),
    leg:   cached(key + 'l', () => voxelGeometry(legVox(o), -2, -10, -2)),
  };
  const group = new THREE.Group();
  const mk = (g, x, y, z) => { const piv = new THREE.Group(); piv.position.set(x * V, y * V, z * V); const m = new THREE.Mesh(g, BODY_MAT); m.castShadow = true; piv.add(m); group.add(piv); return piv; };
  const pivots = {
    legL:  mk(geo.leg, -2, 10, 0),
    legR:  mk(geo.leg, 2, 10, 0),
    torso: mk(geo.torso, 0, 10, 0),
    head:  mk(geo.head, 0, 19, 0),
    armL:  mk(geo.arm, -5.5, 18.6, 0),
    armR:  mk(geo.arm, 5.5, 18.6, 0),
  };
  const palette = {
    head:[o.skin, o.skin, o.hair ?? o.skin, o.beard ?? o.skin],
    torso:[o.shirt ?? o.skin, o.vest ?? o.shirt ?? o.skin, o.stripes ?? o.shirt ?? o.skin],
    armL:[o.skin, o.shirt ?? o.skin], armR:[o.skin, o.shirt ?? o.skin],
    legL:[o.pants, o.pants, o.shoe], legR:[o.pants, o.pants, o.shoe],
  };
  return { group, pivots, palette };
}

// ---------- first-person hands ----------
export function buildFist(skin = 0xf1c27d, sleeve = 0x2a2a2a){
  const v = new Map();
  fill(v, 0, 0, 0, 4, 4, 5, skin);
  for(let x = 0; x < 4; x++) v.set(K(x, 3, 4), 0xd8a868 === skin ? skin : skin);
  fill(v, 0, 0, -6, 4, 4, 6, sleeve);
  return new THREE.Mesh(voxelGeometry(v, -2, -2, -2.5, 0.05), BODY_MAT);
}

// ---------- weapon models (grip at origin, pointing +y) ----------
const wMatCache = new Map();
const lam = c => { let m = wMatCache.get(c); if(!m){ m = new THREE.MeshLambertMaterial({ color:c }); wMatCache.set(c, m); } return m; };
const glassMat = c => { const k = 'g' + c; let m = wMatCache.get(k); if(!m){ m = new THREE.MeshLambertMaterial({ color:c, transparent:true, opacity:0.75 }); wMatCache.set(k, m); } return m; };
function bx(g, w, h, d, c, x, y, z, glass){ const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), glass ? glassMat(c) : lam(c)); m.position.set(x, y, z); m.castShadow = true; g.add(m); return m; }

export function buildWeaponModel(id, w){
  const g = new THREE.Group();
  const md = w.model;
  if(!md) return g;
  switch(id){
    case 'stool':
      bx(g, 0.4, 0.08, 0.4, 0x8b1a1a, 0, 0.62, 0);
      for(const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) bx(g, 0.05, 0.6, 0.05, 0x6b4423, x * 0.15, 0.3, z * 0.15);
      g.userData.upright = true; break;
    case 'chair':
      bx(g, 0.45, 0.06, 0.45, 0x7a5230, 0, 0.46, 0);
      bx(g, 0.45, 0.5, 0.06, 0x7a5230, 0, 0.74, -0.2);
      for(const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) bx(g, 0.05, 0.46, 0.05, 0x5a3a20, x * 0.19, 0.23, z * 0.19);
      g.userData.upright = true; break;
    case 'bottle': case 'brokenbottle':
      bx(g, 0.08, id === 'bottle' ? 0.2 : 0.12, 0.08, 0x2f6b2a, 0, 0.1, 0, true);
      if(id === 'bottle') bx(g, 0.035, 0.1, 0.035, 0x2f6b2a, 0, -0.05, 0, true);
      else for(const k of [-1, 1]) bx(g, 0.02, 0.07, 0.02, 0x7fbf77, k * 0.025, 0.19, 0, true);
      break;
    case 'mug':
      bx(g, 0.13, 0.17, 0.13, 0xf0d890, 0, 0.08, 0, true); bx(g, 0.1, 0.03, 0.1, 0xffffff, 0, 0.17, 0); bx(g, 0.03, 0.1, 0.06, 0xf0d890, 0.08, 0.08, 0, true); break;
    case 'guitar':
      bx(g, 0.06, 0.55, 0.04, 0x5a3a1a, 0, 0.27, 0); bx(g, 0.34, 0.4, 0.09, 0xc0402a, 0, 0.7, 0); bx(g, 0.1, 0.1, 0.1, 0x222222, 0, 0.7, 0.03); break;
    case 'dynamite':
      for(const k of [-1, 0, 1]) bx(g, 0.05, 0.2, 0.05, 0xd02a2a, k * 0.05, 0.1, 0); bx(g, 0.01, 0.08, 0.01, 0xdddddd, 0, 0.24, 0); break;
    case 'cannonball': { const m = new THREE.Mesh(new THREE.IcosahedronGeometry(0.12, 0), lam(0x1a1a1a)); m.position.y = 0.12; g.add(m); break; }
    case 'shotgun': case 'revolver': case 'flintlock': case 'rifle': case 'tommy':
      // gun: grip down, barrel forward (-z in the hand frame, handled by holder)
      bx(g, md.w, md.len * 0.6, md.w * 1.4, md.hc, 0, md.len * 0.3 - 0.05, 0.03);
      bx(g, md.head[0], md.head[1], md.head[2], md.headC, 0, md.len * 0.55, -md.head[2] / 2 + 0.06);
      if(id === 'tommy') bx(g, 0.09, 0.09, 0.09, 0x222222, 0, md.len * 0.35, -0.12);
      g.userData.gun = true; break;
    default:
      bx(g, md.w, md.len, md.w, md.hc, 0, md.len / 2 - 0.06, 0, md.glass);
      bx(g, md.head[0], md.head[1], md.head[2], md.headC, 0, md.len + md.head[1] / 2 - 0.06, md.head[2] > 0.1 && id !== 'pan' && id !== 'weight' ? md.head[2] / 3 : 0, md.glass);
  }
  return g;
}
