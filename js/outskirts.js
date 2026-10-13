// CITY DRIVER — everything outside downtown: suburbs, the Perimeter Highway,
// bridges, lakes, puddles, farmland, farms, forest and the airport.
// Mostly instanced meshes so a 3.4 km world stays phone-friendly.
import * as THREE from 'three';
import { GRID_HALF, ROAD_W, LINES, RED_RIVER, ASSINIBOINE, WORLD_HALF, SUBURB_HALF, PERIMETER, SUB_LINES,
  ROADS, AIRPORT, LAKES, PUDDLES, MUD_PATCHES, FIELDS, OFFROAD, roadAt, inRiver } from './world.js';

const std = (color, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness:0.85 }, o));
const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), P = new THREE.Vector3(), S = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
function setInst(mesh, i, x, y, z, ry, sx, sy, sz){ Q.setFromAxisAngle(UP, ry); P.set(x, y, z); S.set(sx, sy, sz); M4.compose(P, Q, S); mesh.setMatrixAt(i, M4); }
function canvasTex(w, h, draw, rep){
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  if(rep){ t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); }
  return t;
}
function noise(g, w, h, base, spread, n, size = 2){
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  for(let i = 0; i < n; i++){ const v = (Math.random() - 0.5) * spread; g.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`; g.fillRect(Math.random() * w, Math.random() * h, size, size); }
}
function rng(seed){ let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

// lots that must stay clear of houses (rivers, roads, lakes, specials)
function blocked(minX, maxX, minZ, maxZ, pad = 2){
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
  for(const [x, z] of [[minX, minZ], [maxX, minZ], [minX, maxZ], [maxX, maxZ], [cx, cz]]){
    if(inRiver(x, z)) return true;
  }
  // near a river bank
  if(maxX > RED_RIVER.minX - 8 && minX < RED_RIVER.maxX + 8) return true;
  if(maxZ > ASSINIBOINE.minZ - 8 && minZ < ASSINIBOINE.maxZ + 8 && minX < RED_RIVER.maxX) return true;
  for(const r of ROADS){
    const h = r.w / 2 + pad;
    if(r.axis === 'ns'){ if(maxX > r.at - h && minX < r.at + h && maxZ > r.from - h && minZ < r.to + h) return true; }
    else if(maxZ > r.at - h && minZ < r.at + h && maxX > r.from - h && minX < r.to + h) return true;
  }
  for(const [lx, lz, lr] of LAKES) if(Math.hypot(cx - lx, cz - lz) < lr + 14) return true;
  if(maxX > AIRPORT.minX - 30 && minX < AIRPORT.terminal.x + 60 && maxZ > AIRPORT.minZ - 30 && minZ < AIRPORT.maxZ + 30) return true;
  return false;
}

export function buildOutskirts(scene, city, addCol){
  const R = rng(4242);
  const glow = [];

  // ---------- roads (outside downtown), drawn just above the water so bridges read ----------
  const roadTex = canvasTex(128, 128, (g, w, h) => {
    noise(g, w, h, '#33363b', 0.14, 1600, 2);
    g.fillStyle = '#d9dcdf'; g.fillRect(5, 0, 3, h); g.fillRect(w - 8, 0, 3, h);
    g.fillStyle = '#e8c33a'; for(let y = 0; y < h; y += 32) g.fillRect(w / 2 - 2, y, 4, 18);
  });
  const hwyTex = canvasTex(128, 128, (g, w, h) => {
    noise(g, w, h, '#2f3236', 0.12, 1600, 2);
    g.fillStyle = '#d9dcdf'; g.fillRect(4, 0, 3, h); g.fillRect(w - 7, 0, 3, h);
    g.fillStyle = '#e8c33a'; g.fillRect(w / 2 - 4, 0, 3, h); g.fillRect(w / 2 + 1, 0, 3, h);
    g.fillStyle = '#d9dcdf'; for(let y = 0; y < h; y += 32){ g.fillRect(w * 0.25 - 1, y, 2, 16); g.fillRect(w * 0.75 - 1, y, 2, 16); }
  });
  const gravelTex = canvasTex(128, 128, (g, w, h) => {
    noise(g, w, h, '#8a7a62', 0.3, 5000, 2);
    g.fillStyle = 'rgba(70,58,42,0.35)'; g.fillRect(w * 0.22, 0, 14, h); g.fillRect(w * 0.66, 0, 14, h);
  });
  const deckM = std(0x8f9296, { roughness:0.7 }), railM = std(0xd2d6db, { metalness:0.7, roughness:0.35 });
  for(const r of ROADS){
    // clip anything inside downtown (city.js already paves it)
    const segs = [[r.from, r.to]];
    const len = r.to - r.from;
    if(len <= 0) continue;
    const tex = (r.kind === 'gravel' ? gravelTex : r.kind === 'highway' ? hwyTex : roadTex).clone();
    tex.needsUpdate = true; tex.repeat.set(1, len / (r.w * 2));
    const mat = new THREE.MeshStandardMaterial({ map:tex, roughness:r.kind === 'gravel' ? 1 : 0.88, envMapIntensity:0.3 });
    for(const [a, b] of segs){
      const m = new THREE.Mesh(new THREE.PlaneGeometry(r.w, b - a).rotateX(-Math.PI / 2), mat);
      if(r.axis === 'ns') m.position.set(r.at, 0.1, (a + b) / 2);
      else { m.rotation.y = Math.PI / 2; m.position.set((a + b) / 2, 0.1, r.at); }
      m.receiveShadow = true; scene.add(m);
    }
    // bridge decks + rails where a road crosses a river
    const crossings = [];
    if(r.axis === 'ew' && r.from < RED_RIVER.minX && r.to > RED_RIVER.maxX) crossings.push(['ew', RED_RIVER.minX - 6, RED_RIVER.maxX + 6]);
    if(r.axis === 'ns' && r.at < RED_RIVER.minX && r.from < ASSINIBOINE.minZ && r.to > ASSINIBOINE.maxZ) crossings.push(['ns', ASSINIBOINE.minZ - 6, ASSINIBOINE.maxZ + 6]);
    for(const [ax, a, b] of crossings){
      const L = b - a, mid = (a + b) / 2;
      const deck = new THREE.Mesh(new THREE.BoxGeometry(ax === 'ew' ? L : r.w + 3, 0.7, ax === 'ew' ? r.w + 3 : L), deckM);
      if(ax === 'ew') deck.position.set(mid, -0.28, r.at); else deck.position.set(r.at, -0.28, mid);
      deck.castShadow = deck.receiveShadow = true; scene.add(deck);
      for(const s of [-1, 1]){
        const off = s * (r.w / 2 + 1.2);
        const rail = new THREE.Mesh(new THREE.BoxGeometry(ax === 'ew' ? L : 0.25, 1, ax === 'ew' ? 0.25 : L).translate(0, 0.5, 0), railM);
        if(ax === 'ew'){ rail.position.set(mid, 0.1, r.at + off); addCol(a + 6, b - 6, r.at + off - 0.2, r.at + off + 0.2); }
        else { rail.position.set(r.at + off, 0.1, mid); addCol(r.at + off - 0.2, r.at + off + 0.2, a + 6, b - 6); }
        scene.add(rail);
      }
    }
  }
  // highway signs on the Perimeter
  {
    const signTex = canvasTex(512, 160, (g, w, h) => {
      g.fillStyle = '#0f6b3a'; g.fillRect(0, 0, w, h); g.strokeStyle = '#fff'; g.lineWidth = 6; g.strokeRect(8, 8, w - 16, h - 16);
      g.fillStyle = '#fff'; g.font = 'bold 56px sans-serif'; g.textAlign = 'center'; g.fillText('PERIMETER HWY', w / 2, 72);
      g.font = 'bold 34px sans-serif'; g.fillText('WINNIPEG  ·  101', w / 2, 128);
    });
    const sm = new THREE.MeshStandardMaterial({ map:signTex, roughness:0.5, emissive:0xffffff, emissiveMap:signTex, emissiveIntensity:0.15 });
    for(const [x, z, ry] of [[-PERIMETER + 18, -37, Math.PI / 2], [PERIMETER - 18, -37, -Math.PI / 2], [185, -PERIMETER + 18, 0], [185, PERIMETER - 18, Math.PI]]){
      const s = new THREE.Mesh(new THREE.PlaneGeometry(12, 3.75), sm);
      s.position.set(x, 6.5, z); s.rotation.y = ry; scene.add(s);
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 6.5, 6).translate(0, 3.25, 0), std(0x6b7280, { metalness:0.6 }));
      post.position.set(x - Math.cos(ry) * 0 + (ry === 0 || ry === Math.PI ? 9 : 0), 0, z + (ry === 0 || ry === Math.PI ? 0 : 9)); scene.add(post);
    }
  }

  // ---------- lakes (water + sandy beach ring) ----------
  const nTex = canvasTex(128, 128, (g, w, h) => {
    const img = g.createImageData(w, h);
    for(let y = 0; y < h; y++) for(let x = 0; x < w; x++){
      const v = Math.sin(x * 0.25) * 0.5 + Math.sin(y * 0.19 + x * 0.07) * 0.5;
      const i = (y * w + x) * 4; img.data[i] = 128 + v * 30; img.data[i + 1] = 128 + Math.cos(y * 0.23) * 30; img.data[i + 2] = 255; img.data[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
  }, [20, 20]);
  nTex.colorSpace = THREE.NoColorSpace;
  const waterM = new THREE.MeshStandardMaterial({ color:0x2f5f6e, roughness:0.08, metalness:0.4, normalMap:nTex, normalScale:new THREE.Vector2(0.6, 0.6), envMapIntensity:1.5, transparent:true, opacity:0.92 });
  const shallowM = new THREE.MeshStandardMaterial({ color:0x4f8a8c, roughness:0.1, metalness:0.3, normalMap:nTex, normalScale:new THREE.Vector2(0.4, 0.4), envMapIntensity:1.3, transparent:true, opacity:0.85 });
  const sandM = std(0xcdb88d, { roughness:1 });
  for(const [x, z, r] of LAKES){
    const beach = new THREE.Mesh(new THREE.CircleGeometry(r + 9, 48).rotateX(-Math.PI / 2), sandM); beach.position.set(x, 0.03, z); beach.receiveShadow = true; scene.add(beach);
    const sh = new THREE.Mesh(new THREE.CircleGeometry(r, 48).rotateX(-Math.PI / 2), shallowM); sh.position.set(x, 0.09, z); scene.add(sh);
    const dp = new THREE.Mesh(new THREE.CircleGeometry(r * 0.65, 48).rotateX(-Math.PI / 2), waterM); dp.position.set(x, 0.095, z); scene.add(dp);
    // a dock on the bigger lakes
    if(r > 80){
      const dock = new THREE.Mesh(new THREE.BoxGeometry(3, 0.3, 28), std(0x7a5a3a)); dock.position.set(x, 0.35, z - r + 6); dock.castShadow = true; scene.add(dock);
    }
  }
  // ---------- puddles (reflective, splash when driven through) ----------
  {
    const pm = new THREE.MeshStandardMaterial({ color:0x3b4b55, roughness:0.02, metalness:0.6, envMapIntensity:1.8, transparent:true, opacity:0.78 });
    const inst = new THREE.InstancedMesh(new THREE.CircleGeometry(1, 20).rotateX(-Math.PI / 2), pm, PUDDLES.length);
    PUDDLES.forEach(([x, z, r], i) => setInst(inst, i, x, 0.115, z, R() * 3, r * (1 + R() * 0.4), 1, r));
    inst.instanceMatrix.needsUpdate = true; inst.renderOrder = 2; scene.add(inst);
  }
  // ---------- farmland ----------
  const cropTex = {
    canola: canvasTex(128, 128, (g, w, h) => { noise(g, w, h, '#e0c22a', 0.25, 4000, 3); g.fillStyle = 'rgba(80,110,30,0.25)'; for(let y = 0; y < h; y += 8) g.fillRect(0, y, w, 2); }),
    wheat:  canvasTex(128, 128, (g, w, h) => { noise(g, w, h, '#c9a65a', 0.22, 4000, 2); g.fillStyle = 'rgba(120,90,40,0.25)'; for(let y = 0; y < h; y += 6) g.fillRect(0, y, w, 2); }),
    plowed: canvasTex(128, 128, (g, w, h) => { noise(g, w, h, '#5a4128', 0.3, 4000, 2); g.fillStyle = 'rgba(30,20,10,0.4)'; for(let y = 0; y < h; y += 7) g.fillRect(0, y, w, 3); }),
    hay:    canvasTex(128, 128, (g, w, h) => noise(g, w, h, '#9fae5a', 0.22, 4000, 2)),
  };
  for(const k in cropTex){ cropTex[k].wrapS = cropTex[k].wrapT = THREE.RepeatWrapping; cropTex[k].repeat.set(12, 12); }
  const cropM = {}; for(const k in cropTex) cropM[k] = std(0xffffff, { map:cropTex[k], roughness:1 });
  const bales = [];
  for(const [x0, x1, z0, z1, crop] of FIELDS){
    const m = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, z1 - z0).rotateX(-Math.PI / 2), cropM[crop]);
    m.position.set((x0 + x1) / 2, 0.02, (z0 + z1) / 2); m.receiveShadow = true;
    if(R() < 0.5) m.rotation.y = Math.PI / 2;
    scene.add(m);
    if(crop === 'hay') for(let i = 0; i < 10; i++) bales.push([x0 + 20 + R() * (x1 - x0 - 40), z0 + 20 + R() * (z1 - z0 - 40)]);
  }
  {
    const bm = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.85, 0.85, 1.4, 14).rotateZ(Math.PI / 2).translate(0, 0.85, 0), std(0xd4b25e, { roughness:1 }), Math.max(1, bales.length));
    bales.forEach(([x, z], i) => { setInst(bm, i, x, 0, z, R() * 3, 1, 1, 1); addCol(x - 0.9, x + 0.9, z - 0.9, z + 0.9); });
    bm.count = bales.length; bm.instanceMatrix.needsUpdate = true; bm.castShadow = true; scene.add(bm);
  }
  // mud patches (wet, glossy) on plowed fields + gravel roads
  {
    const mudTex = canvasTex(128, 128, (g, w, h) => noise(g, w, h, '#3b2817', 0.32, 3000, 3));
    const mm = new THREE.MeshStandardMaterial({ map:mudTex, roughness:0.22, metalness:0.15, envMapIntensity:0.9 });
    const inst = new THREE.InstancedMesh(new THREE.CircleGeometry(1, 24).rotateX(-Math.PI / 2), mm, MUD_PATCHES.length);
    MUD_PATCHES.forEach(([x, z, r], i) => setInst(inst, i, x, 0.12, z, R() * 3, r, 1, r * (0.8 + R() * 0.3)));
    inst.instanceMatrix.needsUpdate = true; inst.receiveShadow = true; scene.add(inst);
  }

  // ---------- suburbs: rows of houses ----------
  const lots = [];
  const coords = [-999, -777, -555, ...LINES, 555, 777, 999].sort((a, b) => a - b);
  for(let i = 0; i < coords.length - 1; i++) for(let j = 0; j < coords.length - 1; j++){
    const x0 = coords[i], x1 = coords[i + 1], z0 = coords[j], z1 = coords[j + 1];
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
    if(Math.abs(cx) < GRID_HALF && Math.abs(cz) < GRID_HALF) continue;     // downtown
    // a few superblocks are parks / big-box retail
    const big = (x1 - x0) > 150 && (z1 - z0) > 150;
    if(big && R() < 0.12){ lots.push({ kind:'park', x0, x1, z0, z1 }); continue; }
    if(big && R() < 0.1){ lots.push({ kind:'mall', x0, x1, z0, z1 }); continue; }
    const pw = 22, pd = 26;
    for(let x = x0 + 14; x + pw < x1 - 10; x += pw + 4) for(let z = z0 + 14; z + pd < z1 - 10; z += pd + 6){
      if(blocked(x, x + pw, z, z + pd)) continue;
      if(R() < 0.14) continue;                                                // empty yards
      lots.push({ kind:'house', x:x + pw / 2, z:z + pd / 2 });
    }
  }
  const houses = lots.filter(l => l.kind === 'house');
  const wallM = std(0xffffff, { roughness:0.9 }), roofM = std(0xffffff, { roughness:0.75 });
  const wallGeo = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const roofGeo = (() => { const g = new THREE.CylinderGeometry(0.72, 0.72, 1, 3, 1).rotateZ(Math.PI / 2).rotateX(Math.PI / 2); g.translate(0, 0.36, 0); g.scale(1, 1, 1); return g; })();
  const walls = new THREE.InstancedMesh(wallGeo, wallM, houses.length), roofs = new THREE.InstancedMesh(roofGeo, roofM, houses.length);
  const doorsM = new THREE.InstancedMesh(new THREE.PlaneGeometry(1.1, 2.1).translate(0, 1.05, 0), std(0x5b3a24, { emissive:0xffc873, emissiveIntensity:0 }), houses.length);
  const winM = new THREE.MeshStandardMaterial({ color:0x9fc7e6, roughness:0.1, metalness:0.4, emissive:0xffd9a0, emissiveIntensity:0 });
  const wins = new THREE.InstancedMesh(new THREE.PlaneGeometry(1.6, 1.1), winM, houses.length * 2);
  const garages = new THREE.InstancedMesh(new THREE.PlaneGeometry(3, 2.2).translate(0, 1.1, 0), std(0xd8d8d2), houses.length);
  const HOUSE_COLORS = [0xe8dcc4, 0xc9d6df, 0xd9c2a5, 0xb7c4ad, 0xe6e1d3, 0x9eb3c2, 0xc4a28a, 0xf0ead8];
  const ROOF_COLORS = [0x3d3f44, 0x5a4636, 0x2e3b4a, 0x6b3b30, 0x4a4a4a];
  const col = new THREE.Color();
  houses.forEach((h, i) => {
    const w = 11 + R() * 5, d = 9 + R() * 4, ht = R() < 0.3 ? 6.4 : 3.6;
    // face the nearest road
    const rd = nearestRoad(h.x, h.z);
    const ry = rd.ry;
    h.w = w; h.d = d; h.h = ht; h.ry = ry;
    setInst(walls, i, h.x, 0, h.z, ry, w, ht, d);
    col.setHex(HOUSE_COLORS[(R() * HOUSE_COLORS.length) | 0]); walls.setColorAt(i, col);
    setInst(roofs, i, h.x, ht, h.z, ry, w * 1.08, 2.4 + R() * 1.2, d * 1.08);
    col.setHex(ROOF_COLORS[(R() * ROOF_COLORS.length) | 0]); roofs.setColorAt(i, col);
    const fx = Math.sin(ry), fz = Math.cos(ry), rx = Math.cos(ry), rz = -Math.sin(ry);
    const front = d / 2 + 0.02;
    setInst(doorsM, i, h.x + fx * front - rx * 1.5, 0, h.z + fz * front - rz * 1.5, ry, 1, 1, 1);
    setInst(garages, i, h.x + fx * front + rx * 2.6, 0, h.z + fz * front + rz * 2.6, ry, 1, 1, 1);
    setInst(wins, i * 2, h.x + fx * front - rx * 3.8, 1.7, h.z + fz * front - rz * 3.8, ry, 1, 1, 1);
    setInst(wins, i * 2 + 1, h.x + fx * front - rx * 3.8, ht > 5 ? 4.6 : 1.7, h.z + fz * front - rz * 3.8 + (ht > 5 ? 0 : 0.001), ry, ht > 5 ? 1 : 0.001, 1, 1);
    // collider (axis aligned bounds of the rotated footprint)
    const ex = Math.abs(rx) * w / 2 + Math.abs(fx) * d / 2, ez = Math.abs(rz) * w / 2 + Math.abs(fz) * d / 2;
    addCol(h.x - ex, h.x + ex, h.z - ez, h.z + ez);
    city.buildings.push({ id:city.buildings.length, minX:h.x - ex, maxX:h.x + ex, minZ:h.z - ez, maxZ:h.z + ez, h:ht,
      door:{ x:h.x + fx * front - rx * 1.5, z:h.z + fz * front - rz * 1.5, nx:Math.round(fx), nz:Math.round(fz) }, house:true });
  });
  for(const m of [walls, roofs, doorsM, wins, garages]){ m.instanceMatrix.needsUpdate = true; if(m.instanceColor) m.instanceColor.needsUpdate = true; m.castShadow = m !== wins && m !== doorsM; m.receiveShadow = true; scene.add(m); }
  glow.push({ mat:winM, base:0, night:1.6 });

  function nearestRoad(x, z){
    let best = { d:Infinity, ry:0 };
    for(const r of ROADS){
      if(r.axis === 'ns'){ if(z < r.from || z > r.to) continue; const d = Math.abs(x - r.at); if(d < best.d) best = { d, ry:x < r.at ? Math.PI / 2 : -Math.PI / 2 }; }
      else { if(x < r.from || x > r.to) continue; const d = Math.abs(z - r.at); if(d < best.d) best = { d, ry:z < r.at ? 0 : Math.PI }; }
    }
    // downtown streets near the city edge
    for(const c of LINES){
      if(Math.abs(z) <= GRID_HALF + 400){ const d = Math.abs(x - c); if(d < best.d && Math.abs(z) < SUBURB_HALF) best = { d, ry:x < c ? Math.PI / 2 : -Math.PI / 2 }; }
    }
    return best;
  }

  // ---------- parks + malls ----------
  const treeSpots = [];
  for(const l of lots){
    if(l.kind === 'park'){
      for(let k = 0; k < 40; k++){ const x = l.x0 + 15 + R() * (l.x1 - l.x0 - 30), z = l.z0 + 15 + R() * (l.z1 - l.z0 - 30); if(!blocked(x - 2, x + 2, z - 2, z + 2, 0)) treeSpots.push([x, z, 0.9 + R() * 0.6]); }
    }else if(l.kind === 'mall'){
      const cx = (l.x0 + l.x1) / 2, cz = (l.z0 + l.z1) / 2, w = (l.x1 - l.x0) * 0.6, d = (l.z1 - l.z0) * 0.35;
      if(blocked(cx - w / 2, cx + w / 2, cz - d / 2 - 20, cz + d / 2, 0)) continue;
      const mall = new THREE.Mesh(new THREE.BoxGeometry(w, 12, d).translate(0, 6, 0), std(0xd8d3c7, { roughness:0.8 }));
      mall.position.set(cx, 0, cz - 20); mall.castShadow = mall.receiveShadow = true; scene.add(mall);
      const band = new THREE.Mesh(new THREE.BoxGeometry(w + 0.4, 2, d + 0.4).translate(0, 1, 0), std(0x1f6feb)); band.position.set(cx, 10, cz - 20); scene.add(band);
      const lot = new THREE.Mesh(new THREE.PlaneGeometry(w, (l.z1 - l.z0) * 0.45).rotateX(-Math.PI / 2), std(0x3a3d42, { roughness:0.95 }));
      lot.position.set(cx, 0.04, cz + d / 2 + 10); lot.receiveShadow = true; scene.add(lot);
      addCol(cx - w / 2, cx + w / 2, cz - 20 - d / 2, cz - 20 + d / 2);
      city.buildings.push({ id:city.buildings.length, minX:cx - w / 2, maxX:cx + w / 2, minZ:cz - 20 - d / 2, maxZ:cz - 20 + d / 2, h:12, door:{ x:cx, z:cz - 20 + d / 2, nx:0, nz:1 } });
    }
  }
  // street trees in the suburbs + shelter belts on the prairie + forest north-east
  for(const h of houses) if(R() < 0.55){ const a = R() * Math.PI * 2; const x = h.x + Math.cos(a) * 11, z = h.z + Math.sin(a) * 11; if(!blocked(x - 1, x + 1, z - 1, z + 1, 0)) treeSpots.push([x, z, 0.8 + R() * 0.5]); }
  for(let k = 0; k < 900; k++){
    const x = (R() - 0.5) * 2 * (WORLD_HALF - 30), z = (R() - 0.5) * 2 * (WORLD_HALF - 30);
    if(Math.max(Math.abs(x), Math.abs(z)) < PERIMETER + 30) continue;
    const forest = x > 1150 && z > 600 && z < 1100;        // forest block
    if(!forest && R() < 0.75) continue;
    if(roadAt(x, z) || inRiver(x, z)) continue;
    if(x > OFFROAD.minX - 10 && x < OFFROAD.maxX + 10 && z > OFFROAD.minZ - 10 && z < OFFROAD.maxZ + 10) continue;
    if(LAKES.some(([lx, lz, r]) => Math.hypot(x - lx, z - lz) < r + 12)) continue;
    treeSpots.push([x, z, 1 + R() * 0.8]);
  }
  for(let k = 0; k < 500; k++){ const x = 1170 + R() * 500, z = 620 + R() * 460; if(!roadAt(x, z) && !inRiver(x, z)) treeSpots.push([x, z, 1 + R() * 0.9]); }
  {
    const trunk = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.22, 0.32, 3, 6).translate(0, 1.5, 0), std(0x5a4030), treeSpots.length);
    const crown = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(2.6, 0).translate(0, 4.6, 0), std(0xffffff, { roughness:0.9, flatShading:true }), treeSpots.length);
    const greens = [0x4a7a3a, 0x3e6e34, 0x5b8a42, 0x3a6040, 0x6a8a3a];
    treeSpots.forEach(([x, z, s], i) => {
      setInst(trunk, i, x, 0, z, R() * 6, s, s, s); setInst(crown, i, x, 0, z, R() * 6, s, s * (0.9 + R() * 0.4), s);
      col.setHex(greens[(R() * greens.length) | 0]); crown.setColorAt(i, col);
    });
    for(const m of [trunk, crown]){ m.instanceMatrix.needsUpdate = true; if(m.instanceColor) m.instanceColor.needsUpdate = true; m.castShadow = true; scene.add(m); }
  }

  // ---------- farmsteads + grain elevator ----------
  {
    const barnM = std(0x9b2a22), whiteM = std(0xf0ece2), siloM = std(0xb8bec6, { metalness:0.6, roughness:0.4 });
    const farms = [[-1460, -1460], [1460, 1460], [-1460, 900], [1460, -700], [600, 1460], [-600, -1460], [1460, 200], [-200, 1460]];
    for(const [x, z] of farms){
      const barn = new THREE.Mesh(new THREE.BoxGeometry(14, 8, 20).translate(0, 4, 0), barnM); barn.position.set(x, 0, z); barn.castShadow = true; scene.add(barn);
      const roof = new THREE.Mesh(new THREE.CylinderGeometry(8.2, 8.2, 20.4, 4, 1).rotateX(Math.PI / 2).rotateZ(Math.PI / 4), std(0x3d3f44));
      roof.scale.set(1, 0.55, 1); roof.position.set(x, 8, z); scene.add(roof);
      addCol(x - 7, x + 7, z - 10, z + 10);
      for(const k of [0, 1]){
        const silo = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 16, 16).translate(0, 8, 0), siloM); silo.position.set(x + 12 + k * 7, 0, z - 6); silo.castShadow = true; scene.add(silo);
        const cap = new THREE.Mesh(new THREE.SphereGeometry(3, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), siloM); cap.position.set(x + 12 + k * 7, 16, z - 6); scene.add(cap);
        addCol(x + 9 + k * 7, x + 15 + k * 7, z - 9, z - 3);
      }
      const house = new THREE.Mesh(new THREE.BoxGeometry(10, 6, 9).translate(0, 3, 0), whiteM); house.position.set(x - 18, 0, z + 6); house.castShadow = true; scene.add(house);
      addCol(x - 23, x - 13, z + 1.5, z + 10.5);
      city.buildings.push({ id:city.buildings.length, minX:x - 23, maxX:x - 13, minZ:z + 1.5, maxZ:z + 10.5, h:6, door:{ x:x - 18, z:z + 10.5, nx:0, nz:1 }, house:true });
    }
    // prairie grain elevator by the Perimeter
    const ex = PERIMETER + 60, ez = -420;
    const el = new THREE.Mesh(new THREE.BoxGeometry(9, 26, 12).translate(0, 13, 0), std(0xb5462e)); el.position.set(ex, 0, ez); el.castShadow = true; scene.add(el);
    const top = new THREE.Mesh(new THREE.BoxGeometry(5, 8, 7).translate(0, 4, 0), std(0xb5462e)); top.position.set(ex, 26, ez); scene.add(top);
    const signT = canvasTex(256, 64, (g, w, h) => { g.fillStyle = '#b5462e'; g.fillRect(0, 0, w, h); g.fillStyle = '#fff'; g.font = 'bold 40px sans-serif'; g.textAlign = 'center'; g.fillText('POOL', w / 2, 46); });
    const sg = new THREE.Mesh(new THREE.PlaneGeometry(8, 2), new THREE.MeshStandardMaterial({ map:signT })); sg.position.set(ex - 4.55, 21, ez); sg.rotation.y = -Math.PI / 2; scene.add(sg);
    addCol(ex - 4.5, ex + 4.5, ez - 6, ez + 6);
  }

  // ---------- airport: runway, taxiway, terminal, tower ----------
  {
    const rwTex = canvasTex(64, 256, (g, w, h) => {
      noise(g, w, h, '#2b2e33', 0.1, 1200, 2);
      g.fillStyle = '#e9ecef'; for(let y = 0; y < h; y += 40) g.fillRect(w / 2 - 2, y, 4, 22);
      g.fillRect(2, 0, 3, h); g.fillRect(w - 5, 0, 3, h);
    }, [1, 12]);
    const rw = new THREE.Mesh(new THREE.PlaneGeometry(AIRPORT.maxX - AIRPORT.minX, AIRPORT.maxZ - AIRPORT.minZ).rotateX(-Math.PI / 2), std(0xffffff, { map:rwTex }));
    rw.position.set((AIRPORT.minX + AIRPORT.maxX) / 2, 0.06, (AIRPORT.minZ + AIRPORT.maxZ) / 2); rw.receiveShadow = true; scene.add(rw);
    const t = AIRPORT.terminal;
    const term = new THREE.Mesh(new THREE.BoxGeometry(40, 12, 90).translate(0, 6, 0), std(0xdfe5ec, { metalness:0.2 })); term.position.set(t.x, 0, t.z); term.castShadow = true; scene.add(term);
    const glass = new THREE.Mesh(new THREE.PlaneGeometry(88, 8), new THREE.MeshStandardMaterial({ color:0x6fa8d8, roughness:0.05, metalness:0.6, emissive:0x2a5a80, emissiveIntensity:0.4 }));
    glass.position.set(t.x - 20.05, 6, t.z); glass.rotation.y = -Math.PI / 2; scene.add(glass);
    addCol(t.x - 20, t.x + 20, t.z - 45, t.z + 45);
    city.buildings.push({ id:city.buildings.length, minX:t.x - 20, maxX:t.x + 20, minZ:t.z - 45, maxZ:t.z + 45, h:12, door:{ x:t.x - 20, z:t.z, nx:-1, nz:0 } });
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(2, 2.6, 34, 10).translate(0, 17, 0), std(0xe5e7eb)); tower.position.set(t.x + 6, 0, t.z + 70); tower.castShadow = true; scene.add(tower);
    const cab = new THREE.Mesh(new THREE.CylinderGeometry(5, 4, 4, 10).translate(0, 36, 0), new THREE.MeshStandardMaterial({ color:0x6fa8d8, roughness:0.05, metalness:0.6 })); cab.position.copy(tower.position); scene.add(cab);
    addCol(t.x + 3.5, t.x + 8.5, t.z + 67.5, t.z + 72.5);
    // a parked jet
    const jet = new THREE.Group();
    const body = new THREE.Mesh(new THREE.CylinderGeometry(2.2, 2.2, 34, 14).rotateX(Math.PI / 2), std(0xf2f4f6, { metalness:0.3, roughness:0.4 }));
    const wing = new THREE.Mesh(new THREE.BoxGeometry(34, 0.4, 6), std(0xdfe3e8)); wing.position.z = 2;
    const tail = new THREE.Mesh(new THREE.BoxGeometry(0.4, 7, 5), std(0x1f6feb)); tail.position.set(0, 4, 15);
    const nose = new THREE.Mesh(new THREE.SphereGeometry(2.2, 14, 10), std(0xf2f4f6)); nose.scale.set(1, 1, 1.6); nose.position.z = -17;
    jet.add(body, wing, tail, nose); jet.position.set(t.x - 45, 2.6, t.z - 10); jet.traverse(o => { if(o.isMesh) o.castShadow = true; }); scene.add(jet);
    addCol(t.x - 62, t.x - 28, t.z - 29, t.z + 9);
  }

  return { glow, houses:houses.length, trees:treeSpots.length };
}
