// BAR BRAWL — turns a scenario layout (maps.js) into a lit 3D room.
import * as THREE from 'three';

function floorTexture(f){
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d');
  const hex = n => '#' + n.toString(16).padStart(6, '0');
  const jitter = (n, k) => { const r = ((n >> 16) & 255) * k, gg = ((n >> 8) & 255) * k, b = (n & 255) * k; return `rgb(${r | 0},${gg | 0},${b | 0})`; };
  switch(f.kind){
    case 'planks': case 'deck':
      for(let y = 0; y < 8; y++){
        g.fillStyle = hex(y % 2 ? f.c1 : f.c2); g.fillRect(0, y * 16, 128, 16);
        g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(0, y * 16, 128, 1);
        const off = (y * 37) % 128; g.fillRect(off, y * 16, 1, 16);
        if(f.kind === 'deck'){ g.fillStyle = 'rgba(0,0,0,.5)'; g.fillRect((off + 20) % 128, y * 16 + 7, 2, 2); g.fillRect((off + 84) % 128, y * 16 + 7, 2, 2); }
      }
      break;
    case 'disco': {
      const cols = [f.c1, f.c2, f.c3, f.c4];
      for(let x = 0; x < 4; x++) for(let y = 0; y < 4; y++){ g.fillStyle = hex(cols[(x + y * 3) % 4]); g.fillRect(x * 32 + 1, y * 32 + 1, 30, 30); }
      break;
    }
    case 'concrete':
      g.fillStyle = hex(f.c1); g.fillRect(0, 0, 128, 128);
      for(let k = 0; k < 400; k++){ g.fillStyle = jitter(f.c2, 0.8 + Math.random() * 0.4); g.fillRect(Math.random() * 128, Math.random() * 128, 2, 2); }
      g.fillStyle = 'rgba(0,0,0,.25)'; g.fillRect(0, 0, 128, 1); g.fillRect(0, 0, 1, 128);
      break;
    case 'sand':
      g.fillStyle = hex(f.c1); g.fillRect(0, 0, 128, 128);
      for(let k = 0; k < 700; k++){ g.fillStyle = jitter(f.c2, 0.85 + Math.random() * 0.3); g.fillRect(Math.random() * 128, Math.random() * 128, 2, 2); }
      break;
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.magFilter = THREE.NearestFilter;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function buildRoom(scene, L, quality = 1){
  const root = new THREE.Group(); scene.add(root);
  scene.background = new THREE.Color(L.fog);
  scene.fog = new THREE.Fog(L.fog, 14, Math.max(L.w, L.d) * 1.6);
  const lam = c => new THREE.MeshLambertMaterial({ color:c });

  // floor
  const ft = floorTexture(L.floor); ft.repeat.set(L.w / (L.floor.kind === 'disco' ? 4 : 3), L.d / (L.floor.kind === 'disco' ? 4 : 3));
  const floorMat = new THREE.MeshLambertMaterial({ map:ft });
  if(L.floor.kind === 'disco'){ floorMat.emissive = new THREE.Color(0xffffff); floorMat.emissiveMap = ft; floorMat.emissiveIntensity = 0.35; }
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(L.w, L.d).rotateX(-Math.PI / 2), floorMat);
  floor.receiveShadow = true; root.add(floor);

  // walls (+ wainscot trim), ceiling
  const wallMat = lam(L.wall), trimMat = lam(L.trim);
  const H = L.h;
  for(const [x, z, w, d] of [[0, -L.d / 2, L.w, 0.2], [0, L.d / 2, L.w, 0.2], [-L.w / 2, 0, 0.2, L.d], [L.w / 2, 0, 0.2, L.d]]){
    const m = new THREE.Mesh(new THREE.BoxGeometry(w + 0.2, H, d + 0.2), wallMat); m.position.set(x + Math.sign(x) * 0.1, H / 2, z + Math.sign(z) * 0.1); m.receiveShadow = true; root.add(m);
    const t = new THREE.Mesh(new THREE.BoxGeometry(w + 0.25, 1.0, d + 0.25), trimMat); t.position.set(x + Math.sign(x) * 0.1, 0.5, z + Math.sign(z) * 0.1); root.add(t);
  }
  if(L.ceil != null){
    const c = new THREE.Mesh(new THREE.PlaneGeometry(L.w, L.d).rotateX(Math.PI / 2), lam(L.ceil)); c.position.y = H; root.add(c);
    // ceiling beams
    for(let x = -L.w / 2 + 2; x < L.w / 2; x += 4){ const b = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, L.d), trimMat); b.position.set(x, H - 0.15, 0); root.add(b); }
  } else {
    // arena: crowd stands (blocky spectators) above the wall
    const crowd = new THREE.InstancedMesh(new THREE.BoxGeometry(0.5, 0.8, 0.5), new THREE.MeshLambertMaterial(), 400);
    const cc = new THREE.Color(), mm = new THREE.Matrix4(); let n = 0;
    for(let i = 0; i < 400; i++){
      const side = i % 4, t = ((i >> 2) / 100) * 2 - 1, row = (i >> 2) % 3;
      const x = side < 2 ? t * L.w / 2 : (side === 2 ? -1 : 1) * (L.w / 2 + 1 + row);
      const z = side < 2 ? (side === 0 ? -1 : 1) * (L.d / 2 + 1 + row) : t * L.d / 2;
      mm.makeTranslation(x, H + 0.4 + row * 0.7, z); crowd.setMatrixAt(n, mm);
      crowd.setColorAt(n++, cc.setHSL(Math.random(), 0.5, 0.45));
    }
    crowd.count = n; root.add(crowd);
    root.userData.crowd = crowd;
  }

  // furniture
  const geoBox = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const mats = new Map(); const matFor = (c, glow) => { const k = c + ':' + (glow || 0); let m = mats.get(k); if(!m){ m = lam(c); if(glow){ m.emissive = new THREE.Color(glow); m.emissiveIntensity = 0.6; } mats.set(k, m); } return m; };
  for(const s of L.solids.concat(L.deco)){
    const m = new THREE.Mesh(geoBox, matFor(s.c, s.glow));
    m.position.set(s.x, s.y, s.z); m.scale.set(s.w, s.h, s.d);
    m.castShadow = s.h > 0.3; m.receiveShadow = true; root.add(m);
  }

  // light: ambient + hemi + a few hanging lamps (point lights are capped for phones)
  const B = L.bright ?? 1;
  root.add(new THREE.HemisphereLight(0xfff4e8, L.ambient, 1.6 * B));
  root.add(new THREE.AmbientLight(0xffffff, 0.35 * B));
  const sun = new THREE.DirectionalLight(L.light, 1.1); sun.position.set(6, 12, 4);
  sun.castShadow = quality > 0; sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left:-L.w / 2, right:L.w / 2, top:L.d / 2, bottom:-L.d / 2, near:1, far:40 });
  root.add(sun, sun.target);
  const maxPts = quality > 0 ? 4 : 2;
  const lamps = [];
  L.lamps.forEach(([x, z], i) => {
    const shade = new THREE.Mesh(new THREE.ConeGeometry(0.35, 0.3, 4, 1, true), new THREE.MeshLambertMaterial({ color:0x222222, emissive:L.light, emissiveIntensity:0.5, side:THREE.DoubleSide }));
    shade.position.set(x, H - (L.ceil == null ? -1 : 0.9), z); root.add(shade);
    const cord = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.9, 0.02), lam(0x111111)); cord.position.set(x, H - 0.45, z); if(L.ceil != null) root.add(cord);
    if(i < maxPts){ const p = new THREE.PointLight(L.light, 30, 16, 1.2); p.position.set(x, H - 1.2, z); root.add(p); lamps.push(p); }
  });

  // disco ball + coloured spinning spots
  let ball = null; const spots = [];
  if(L.discoBall){
    ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.6, 1), new THREE.MeshLambertMaterial({ color:0xdddddd, emissive:0x777777, flatShading:true }));
    ball.position.set(0, H - 1.0, 0); root.add(ball);
    for(const c of [0xff2a7a, 0x2affd0, 0xffd23f]){ const s = new THREE.SpotLight(c, 40, 22, 0.45, 0.4, 1); s.position.set(0, H - 1.1, 0); root.add(s, s.target); spots.push(s); }
  }

  let t = 0;
  return {
    root,
    update(dt){
      t += dt;
      if(ball){ ball.rotation.y += dt * 0.8; spots.forEach((s, i) => { const a = t * (0.7 + i * 0.25) + i * 2.1; s.target.position.set(Math.cos(a) * 6, 0, Math.sin(a * 1.3) * 6); }); floorMat.emissiveIntensity = 0.25 + 0.2 * Math.max(0, Math.sin(t * 8)); }
      if(root.userData.crowd && ((t * 10) | 0) % 2 === 0){ const c = root.userData.crowd; c.position.y = Math.abs(Math.sin(t * 6)) * 0.06; }
      lamps.forEach((p, i) => { p.intensity = 30 + Math.sin(t * 3 + i) * 1.2; });
    },
    dispose(){ scene.remove(root); },
  };
}
