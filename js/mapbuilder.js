// CITY DRIVER — turns a custom map (custommap.js) into a playable 3D world.
// The whole map is placed at OFFSET, far away from the city, so the city is
// beyond the camera's range while you play it.
import * as THREE from 'three';
import { TILE, TILES, THEMES, getTile, tileCenter, halfSize, surfaceAtMap } from './custommap.js';

export const OFFSET = { x:20000, z:0 };
const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), P = new THREE.Vector3(), S = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
const setInst = (m, i, x, y, z, ry, sx, sy, sz) => { Q.setFromAxisAngle(UP, ry); P.set(x, y, z); S.set(sx, sy, sz); M4.compose(P, Q, S); m.setMatrixAt(i, M4); };
const std = (color, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness:0.85 }, o));
const GROUND_COL = { grass:'#4f8a3c', sand:'#d6c08e', snow:'#e8eef4' };

export function buildCustomMap(scene, map){
  const group = new THREE.Group();
  group.position.set(OFFSET.x, 0, OFFSET.z);
  scene.add(group);
  const n = map.size, half = halfSize(map), theme = THEMES[map.theme] || THEMES.summer;
  const colliders = [];
  const addCol = (x0, x1, z0, z1) => colliders.push({ minX:x0 + OFFSET.x, maxX:x1 + OFFSET.x, minZ:z0 + OFFSET.z, maxZ:z1 + OFFSET.z });
  const R = (() => { let a = 99; return () => { a = (a * 1664525 + 1013904223) >>> 0; return a / 4294967296; }; })();

  // ---------- ground: one plane, painted per tile ----------
  const PX = 16, cv = document.createElement('canvas'); cv.width = cv.height = n * PX;
  const g = cv.getContext('2d');
  const isRoad = (i, j) => { const c = getTile(map, i, j); return c === '#' || c === 'S'; };
  for(let j = 0; j < n; j++) for(let i = 0; i < n; i++){
    const ch = getTile(map, i, j);
    let col = ch === '.' || ch === 't' || ch === '$' ? GROUND_COL[theme.ground] : TILES[ch].color;
    if(ch === 'h' || ch === 'b' || ch === 'T') col = '#5b5f66';        // pavement under buildings
    if(ch === 'r') col = TILES.d.color;
    if(ch === 'S') col = TILES['#'].color;
    g.fillStyle = col; g.fillRect(i * PX, j * PX, PX, PX);
    // texture speckle
    for(let k = 0; k < 10; k++){ const v = (Math.random() - 0.5) * 0.25; g.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`; g.fillRect(i * PX + Math.random() * PX, j * PX + Math.random() * PX, 2, 2); }
    // road markings: dashed centre line along straight runs
    if(isRoad(i, j)){
      const h = isRoad(i - 1, j) || isRoad(i + 1, j), v = isRoad(i, j - 1) || isRoad(i, j + 1);
      g.fillStyle = '#e8c33a';
      if(h && !v) g.fillRect(i * PX + 2, j * PX + PX / 2 - 1, PX / 2, 2);
      else if(v && !h) g.fillRect(i * PX + PX / 2 - 1, j * PX + 2, 2, PX / 2);
    }
    if(ch === 'm'){ g.fillStyle = 'rgba(20,12,6,0.35)'; g.fillRect(i * PX + 3, j * PX + 4, PX - 6, 3); }
  }
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  tex.magFilter = THREE.LinearFilter;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(n * TILE, n * TILE).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map:tex, roughness:0.9 }));
  ground.position.y = 0.02; ground.receiveShadow = true; group.add(ground);
  // a big apron round the map so you never see the void
  const apron = new THREE.Mesh(new THREE.PlaneGeometry(n * TILE + 2400, n * TILE + 2400).rotateX(-Math.PI / 2), std(GROUND_COL[theme.ground], { roughness:1 }));
  apron.position.y = -0.01; group.add(apron);

  // ---------- collect tiles by type ----------
  const by = {};
  for(let j = 0; j < n; j++) for(let i = 0; i < n; i++){ const ch = getTile(map, i, j); (by[ch] = by[ch] || []).push([i, j]); }
  const count = ch => (by[ch] || []).length;

  // water (shallow + deep), mud (glossy)
  const waterMat = (col, op) => new THREE.MeshStandardMaterial({ color:col, roughness:0.06, metalness:0.45, envMapIntensity:1.6, transparent:true, opacity:op });
  for(const [ch, mat, y] of [['w', waterMat(0x4f8a8c, 0.86), 0.09], ['W', waterMat(0x234f5e, 0.93), 0.095], ['m', new THREE.MeshStandardMaterial({ color:0x3b2817, roughness:0.2, metalness:0.15, envMapIntensity:1 }), 0.05]]){
    const list = by[ch] || []; if(!list.length) continue;
    const im = new THREE.InstancedMesh(new THREE.PlaneGeometry(TILE, TILE).rotateX(-Math.PI / 2), mat, list.length);
    list.forEach(([i, j], k) => { const c = tileCenter(map, i, j); setInst(im, k, c.x, y, c.z, 0, 1, 1, 1); });
    im.instanceMatrix.needsUpdate = true; im.receiveShadow = true; group.add(im);
  }

  // buildings
  const winTex = (() => {
    const c = document.createElement('canvas'); c.width = 64; c.height = 128; const x = c.getContext('2d');
    x.fillStyle = '#fff'; x.fillRect(0, 0, 64, 128);
    for(let r = 0; r < 8; r++) for(let k = 0; k < 3; k++){ x.fillStyle = '#5c6f82'; x.fillRect(6 + k * 20, 8 + r * 15, 12, 9); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const night = theme.sky === 'night';
  const BUILD = { h:{ w:9.5, col:[0xe8dcc4, 0xc9d6df, 0xd9c2a5, 0xb7c4ad] }, b:{ w:10.5, col:[0x8fa3b8, 0xd8d3c7, 0xc9a98a] }, T:{ w:11, col:[0x5d7184, 0x3d4a58, 0x8592a3] } };
  const col = new THREE.Color();
  for(const ch of ['h', 'b', 'T']){
    const list = by[ch] || []; if(!list.length) continue;
    const mat = new THREE.MeshStandardMaterial({ color:0xffffff, map:winTex, roughness:0.75, emissive:night ? 0xffd9a0 : 0x000000, emissiveMap:winTex, emissiveIntensity:night ? 0.25 : 0 });
    const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), mat, list.length);
    const roofs = ch === 'h' ? new THREE.InstancedMesh(new THREE.CylinderGeometry(0.72, 0.72, 1, 3).rotateZ(Math.PI / 2).rotateX(Math.PI / 2).translate(0, 0.36, 0), std(0x4a3a30), list.length) : null;
    list.forEach(([i, j], k) => {
      const c = tileCenter(map, i, j), w = BUILD[ch].w, h = TILES[ch].height * (0.8 + R() * 0.45);
      setInst(im, k, c.x, 0, c.z, 0, w, h, w);
      col.setHex(BUILD[ch].col[(R() * BUILD[ch].col.length) | 0]); im.setColorAt(k, col);
      if(roofs) setInst(roofs, k, c.x, h, c.z, 0, w * 1.08, 3, w * 1.08);
      addCol(c.x - w / 2, c.x + w / 2, c.z - w / 2, c.z + w / 2);
    });
    im.instanceMatrix.needsUpdate = true; if(im.instanceColor) im.instanceColor.needsUpdate = true; im.castShadow = im.receiveShadow = true; group.add(im);
    if(roofs){ roofs.instanceMatrix.needsUpdate = true; roofs.castShadow = true; group.add(roofs); }
  }
  // rocks + trees
  if(count('r')){
    const im = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(3.6, 0), std(theme.ground === 'snow' ? 0xa7adb5 : 0x8a857c, { flatShading:true, roughness:0.95 }), count('r'));
    by.r.forEach(([i, j], k) => { const c = tileCenter(map, i, j); setInst(im, k, c.x, 1.2, c.z, R() * 6, 1 + R() * 0.3, 0.65, 1 + R() * 0.3); addCol(c.x - 3.4, c.x + 3.4, c.z - 3.4, c.z + 3.4); });
    im.instanceMatrix.needsUpdate = true; im.castShadow = im.receiveShadow = true; group.add(im);
  }
  if(count('t')){
    const desert = theme.ground === 'sand', snow = theme.ground === 'snow';
    const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.25, 0.35, desert ? 6 : 3.2, 6).translate(0, desert ? 3 : 1.6, 0), std(0x5a4030), count('t'));
    const crown = new THREE.InstancedMesh(desert ? new THREE.ConeGeometry(2.4, 1.2, 7).translate(0, 6.2, 0) : new THREE.ConeGeometry(2.6, 6.5, 8).translate(0, 5.6, 0),
      std(snow ? 0xdfe8ef : desert ? 0x5f8a3a : 0x2f6b2a, { flatShading:true, roughness:0.9 }), count('t'));
    by.t.forEach(([i, j], k) => {
      const c = tileCenter(map, i, j), s = 0.85 + R() * 0.5, ox = (R() - 0.5) * 4, oz = (R() - 0.5) * 4;
      setInst(trunk, k, c.x + ox, 0, c.z + oz, R() * 6, s, s, s); setInst(crown, k, c.x + ox, 0, c.z + oz, R() * 6, s, s, s);
      addCol(c.x + ox - 0.6, c.x + ox + 0.6, c.z + oz - 0.6, c.z + oz + 0.6);
    });
    for(const m of [trunk, crown]){ m.instanceMatrix.needsUpdate = true; m.castShadow = true; group.add(m); }
  }
  // boundary barrier
  {
    const bm = std(0xd7263d, { roughness:0.6 }), wm = std(0xf2f4f6, { roughness:0.6 });
    const L = n * TILE;
    for(const [x, z, w, d] of [[0, -half - 0.5, L + 2, 1], [0, half + 0.5, L + 2, 1], [-half - 0.5, 0, 1, L + 2], [half + 0.5, 0, 1, L + 2]]){
      const segs = Math.round(Math.max(w, d) / 4);
      const im = new THREE.InstancedMesh(new THREE.BoxGeometry(w > d ? 4 : 1, 1, w > d ? 1 : 4).translate(0, 0.5, 0), bm, segs);
      for(let k = 0; k < segs; k++){
        const t = -Math.max(w, d) / 2 + 2 + k * 4;
        setInst(im, k, w > d ? x + t : x, 0, w > d ? z : z + t, 0, 1, 1, 1);
        im.setColorAt(k, col.set(k % 2 ? 0xf2f4f6 : 0xd7263d));
      }
      im.instanceMatrix.needsUpdate = true; group.add(im);
      addCol(x - w / 2, x + w / 2, z - d / 2, z + d / 2);
    }
    void wm;
  }
  // cash pickups (bills that spin)
  const cash = [];
  const billMat = new THREE.MeshStandardMaterial({ color:0x4ade80, emissive:0x1f7a3a, emissiveIntensity:0.8, side:THREE.DoubleSide, metalness:0.2, roughness:0.4 });
  for(const [i, j] of by['$'] || []){
    const c = tileCenter(map, i, j);
    const g2 = new THREE.Group();
    for(let k = 0; k < 3; k++){ const b = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.08, 0.55), billMat); b.position.y = k * 0.1; b.rotation.y = k * 0.3; g2.add(b); }
    const halo = new THREE.Mesh(new THREE.RingGeometry(1.1, 1.4, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color:0x4ade80, transparent:true, opacity:0.6, depthWrite:false }));
    halo.position.y = -0.95; g2.add(halo);
    g2.position.set(c.x, 1.1, c.z); group.add(g2);
    cash.push({ x:c.x + OFFSET.x, z:c.z + OFFSET.z, obj:g2, got:false });
  }

  let t = 0;
  return {
    map, group, colliders, cash, half, theme:map.theme,
    surfaceAt:(x, z) => surfaceAtMap(map, x - OFFSET.x, z - OFFSET.z),
    toWorld:p => ({ x:p.x + OFFSET.x, z:p.z + OFFSET.z }),
    update(dt){ t += dt; for(const c of cash) if(!c.got){ c.obj.rotation.y += dt * 2; c.obj.position.y = 1.1 + Math.sin(t * 3 + c.x) * 0.15; } },
    // collect cash within reach; returns how many were picked up
    collect(x, z){ let n2 = 0; for(const c of cash) if(!c.got && Math.hypot(c.x - x, c.z - z) < 2.6){ c.got = true; c.obj.visible = false; n2++; } return n2; },
    // minimap / full-map painter (canvas coordinates come from W/H in world space)
    painter:{
      half, cx:OFFSET.x, cz:OFFSET.z,
      paint(g2, W, H, k, vis){
        const s = TILE * k;
        for(let j = 0; j < n; j++) for(let i = 0; i < n; i++){
          const x0 = -half + i * TILE + OFFSET.x, z0 = -half + j * TILE + OFFSET.z;
          if(!vis(x0, x0 + TILE, z0, z0 + TILE)) continue;
          const ch = getTile(map, i, j);
          g2.fillStyle = ch === '.' ? GROUND_COL[theme.ground] : TILES[ch].color;
          g2.fillRect(W(x0), H(z0), s + 0.6, s + 0.6);
        }
        g2.fillStyle = '#4ade80';
        for(const c of cash) if(!c.got){ g2.beginPath(); g2.arc(W(c.x), H(c.z), 3.5, 0, Math.PI * 2); g2.fill(); }
      },
    },
    dispose(){
      scene.remove(group);
      group.traverse(o => { if(o.geometry) o.geometry.dispose(); if(o.material){ (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => { if(m.map && m.map !== winTex) m.map.dispose(); m.dispose(); }); } });
      tex.dispose(); winTex.dispose();
    },
  };
}
