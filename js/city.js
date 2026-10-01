// CITY DRIVER — world track builder (WORLD track).
// Grid city + drag strip. Instanced everything, mobile-friendly.
import * as THREE from 'three';
//
// Export: buildCity(scene) -> { colliders, spawn, dragStrip, update }
//
// Conventions: +X east, +Z south. Car heading 0 = -Z (north), per js/physics.js.

const SEED = 1337;

// Layout constants
const BLOCKS = 5;          // 5x5 blocks
const BLOCK = 60;          // block size (m)
const ROAD_W = 14;         // road width (m)
const PITCH = BLOCK + ROAD_W; // 74m
const GRID_HALF = (BLOCKS * PITCH + ROAD_W) / 2; // city extent +/-192

// Drag strip
const STRIP_X = 232;       // east of city edge (192 + 40)
const STRIP_HALF = 225;    // strip z from -225..225 => 450m
const STRIP_W = 9;         // 2 lanes

// --- deterministic RNG (mulberry32) ---
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// --- canvas texture helpers ---
function makeCanvas(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// asphalt with center dashes + edge lines (runs along V)
function roadTexture() {
  return makeCanvas(128, 128, (g, w, h) => {
    g.fillStyle = '#33363b'; g.fillRect(0, 0, w, h);
    // noise speckle
    g.fillStyle = '#3a3d42';
    for (let i = 0; i < 160; i++) g.fillRect((i * 37) % w, (i * 53) % h, 2, 2);
    // edge lines
    g.fillStyle = '#cfd3d8';
    g.fillRect(4, 0, 4, h); g.fillRect(w - 8, 0, 4, h);
    // center dashed line
    g.fillStyle = '#e8c33a';
    for (let y = 0; y < h; y += 32) g.fillRect(w / 2 - 3, y, 6, 16);
  });
}

// building facade: windows, day look — plus emissive variant (lit windows for night)
function facadeTexture() {
  return makeCanvas(128, 256, (g, w, h) => {
    g.fillStyle = '#8d97a3'; g.fillRect(0, 0, w, h);
    const cols = 5, rows = 12;
    const cw = w / cols, rh = h / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const lit = ((r * 7 + c * 13) % 17) === 0;
        g.fillStyle = lit ? '#ffe08a' : '#3b4656';
        g.fillRect(c * cw + 3, r * rh + 4, cw - 6, rh - 8);
        g.fillStyle = 'rgba(255,255,255,0.25)';
        g.fillRect(c * cw + 3, r * rh + 4, cw - 6, 3);
      }
    }
  });
}

// emissive windows: mostly dark, scattered warm lit windows
function facadeEmissiveTexture() {
  return makeCanvas(128, 256, (g, w, h) => {
    g.fillStyle = '#000000'; g.fillRect(0, 0, w, h);
    const cols = 5, rows = 12;
    const cw = w / cols, rh = h / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const lit = ((r * 7 + c * 13) % 5) === 0; // ~1/5 lit at night
        if (lit) {
          g.fillStyle = (r + c) % 3 === 0 ? '#ffd9a0' : '#fff3d0';
          g.fillRect(c * cw + 3, r * rh + 4, cw - 6, rh - 8);
        }
      }
    }
  });
}

// vertical sky gradient for scene.background
function skyTexture() {
  const t = makeCanvas(2, 256, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h);
    gr.addColorStop(0.0, '#2f6fd6');
    gr.addColorStop(0.55, '#7fb2ee');
    gr.addColorStop(0.8, '#cfe6f7');
    gr.addColorStop(1.0, '#e8f2fa');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// place an instance: compose matrix without allocating (reuses temps)
const _m = { p: null, q: null, s: null, m: null };
function setInstance(mesh, i, x, y, z, rotY, sx, sy, sz) {
  _m.p.set(x, y, z);
  _m.q.setFromAxisAngle(_m.up, rotY);
  _m.s.set(sx, sy, sz);
  _m.m.compose(_m.p, _m.q, _m.s);
  mesh.setMatrixAt(i, _m.m);
}

export function buildCity(scene) {
  const rand = mulberry32(SEED);
  _m.p = new THREE.Vector3();
  _m.q = new THREE.Quaternion();
  _m.s = new THREE.Vector3();
  _m.m = new THREE.Matrix4();
  _m.up = new THREE.Vector3(0, 1, 0);

  const colliders = [];

  // ---------- sky / fog (sky dome added by main.js; fog color follows presets) ----------
  scene.fog = new THREE.Fog(0xcfe0f2, 200, 750);

  // ---------- lights ----------
  const hemi = new THREE.HemisphereLight(0xbfd8ff, 0x6a7a5a, 0.9);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff4e0, 1.6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.near = 10;
  sun.shadow.camera.far = 400;
  const SH = 110; // shadow ortho half-extent
  sun.shadow.camera.left = -SH; sun.shadow.camera.right = SH;
  sun.shadow.camera.top = SH; sun.shadow.camera.bottom = -SH;
  sun.shadow.bias = -0.0008;
  scene.add(sun);
  scene.add(sun.target);
  // fixed sun offset relative to shadow focus (no per-frame allocation)
  const SUN_DX = 70, SUN_DY = 120, SUN_DZ = 45;
  const SNAP = 16; // snap grid for shadow focus (kills shimmer)

  // ---------- ground ----------
  const groundGeo = new THREE.PlaneGeometry(1400, 1400);
  groundGeo.rotateX(-Math.PI / 2);
  const ground = new THREE.Mesh(
    groundGeo,
    new THREE.MeshStandardMaterial({ color: 0x5d8a4a, roughness: 0.95, metalness: 0.0, envMapIntensity: 0.25 })
  );
  ground.receiveShadow = true;
  scene.add(ground);

  // ---------- roads (instanced) ----------
  // road centerlines: 6 per axis for 5x5 blocks
  const roadLines = [];
  for (let i = 0; i <= BLOCKS; i++) roadLines.push((i - BLOCKS / 2) * PITCH);
  const roadLen = BLOCKS * PITCH + ROAD_W; // 384
  const rTex = roadTexture();
  rTex.wrapS = rTex.wrapT = THREE.RepeatWrapping;
  rTex.repeat.set(1, roadLen / ROAD_W);
  const roadGeo = new THREE.PlaneGeometry(1, 1);
  roadGeo.rotateX(-Math.PI / 2);
  const roadMat = new THREE.MeshStandardMaterial({ map: rTex, roughness: 0.9, metalness: 0.05, envMapIntensity: 0.35 });
  const roads = new THREE.InstancedMesh(roadGeo, roadMat, roadLines.length * 2);
  roads.receiveShadow = true;
  let ri = 0;
  for (const c of roadLines) {
    setInstance(roads, ri++, c, 0.05, 0, 0, ROAD_W, 1, roadLen);          // along Z
    setInstance(roads, ri++, 0, 0.05, c, Math.PI / 2, ROAD_W, 1, roadLen); // along X
  }
  roads.instanceMatrix.needsUpdate = true;
  scene.add(roads);

  // ---------- sidewalks (instanced, one per block) ----------
  const swGeo = new THREE.PlaneGeometry(1, 1);
  swGeo.rotateX(-Math.PI / 2);
  const sidewalks = new THREE.InstancedMesh(
    swGeo, new THREE.MeshStandardMaterial({ color: 0x9a9da2, roughness: 0.9, metalness: 0.05, envMapIntensity: 0.3 }), BLOCKS * BLOCKS
  );
  sidewalks.receiveShadow = true;
  let si = 0;
  for (let bx = 0; bx < BLOCKS; bx++) {
    for (let bz = 0; bz < BLOCKS; bz++) {
      const cx = (bx - (BLOCKS - 1) / 2) * PITCH;
      const cz = (bz - (BLOCKS - 1) / 2) * PITCH;
      setInstance(sidewalks, si++, cx, 0.03, cz, 0, BLOCK, 1, BLOCK);
    }
  }
  sidewalks.instanceMatrix.needsUpdate = true;
  scene.add(sidewalks);

  // ---------- buildings (instanced boxes) ----------
  const bTex = facadeTexture();
  const bGeo = new THREE.BoxGeometry(1, 1, 1);
  // translate so origin at base -> scale y = height, pos y = ground
  bGeo.translate(0, 0.5, 0);
  const bMat = new THREE.MeshStandardMaterial({ map: bTex, emissiveMap: facadeEmissiveTexture(), emissive: 0xffc873, emissiveIntensity: 0.0, roughness: 0.85, metalness: 0.1, envMapIntensity: 0.4 });
  const MAXB = 110;
  const buildings = new THREE.InstancedMesh(bGeo, bMat, MAXB);
  buildings.castShadow = true;
  buildings.receiveShadow = true;
  const tint = new THREE.Color();
  const roofSpots = []; // {x,h,w,d} for rooftop props
  let bi = 0;
  const inset = 4; // setback from block edge
  const PARK_BX = 0, PARK_BZ = 0; // corner block becomes the parking lot
  for (let bx = 0; bx < BLOCKS; bx++) {
    for (let bz = 0; bz < BLOCKS; bz++) {
      const bcx = (bx - (BLOCKS - 1) / 2) * PITCH;
      const bcz = (bz - (BLOCKS - 1) / 2) * PITCH;
      const isParkingLot = (bx === PARK_BX && bz === PARK_BZ);
      const downtown = Math.abs(bx - 2) <= 1 && Math.abs(bz - 2) <= 1;
      const n = rand() < 0.75 ? 4 : 9; // 2x2 or 3x3
      const cols = Math.sqrt(n);
      const cell = (BLOCK - inset * 2) / cols;
      for (let k = 0; k < n && bi < MAXB; k++) {
        if (isParkingLot) continue; // this block is the parking lot
        if (rand() < 0.28) continue; // some lots stay empty (parks get trees)
        const gx = k % cols, gz = Math.floor(k / cols);
        const w = cell * (0.55 + rand() * 0.3);
        const d = cell * (0.55 + rand() * 0.3);
        const hMax = downtown ? 60 : 28;
        const hMin = downtown ? 18 : 10;
        const h = hMin + rand() * (hMax - hMin);
        const px = bcx - (BLOCK - inset * 2) / 2 + cell * (gx + 0.5) + (rand() - 0.5) * 2;
        const pz = bcz - (BLOCK - inset * 2) / 2 + cell * (gz + 0.5) + (rand() - 0.5) * 2;
        setInstance(buildings, bi, px, 0.03, pz, 0, w, h, d);
        // facade variety: brightness + subtle warm/cool/beige shifts
        const v = 0.82 + rand() * 0.32;
        const pick = rand();
        if (pick < 0.45) tint.setRGB(v, v * 0.97, v * 0.95);            // neutral grey
        else if (pick < 0.65) tint.setRGB(v, v * 0.90, v * 0.82);        // warm beige
        else if (pick < 0.82) tint.setRGB(v * 0.88, v * 0.95, v);        // cool blue-grey
        else tint.setRGB(v, v * 0.82, v * 0.74);                          // brick-ish
        buildings.setColorAt(bi, tint);
        roofSpots.push({ x: px, h, w, d, z: pz });
        colliders.push({
          minX: px - w / 2, maxX: px + w / 2,
          minZ: pz - d / 2, maxZ: pz + d / 2,
        });
        bi++;
      }
    }
  }
  buildings.count = bi;
  buildings.instanceMatrix.needsUpdate = true;
  if (buildings.instanceColor) buildings.instanceColor.needsUpdate = true;
  scene.add(buildings);

  // ---------- rooftop props (AC units, vents) ----------
  {
    const acGeo = new THREE.BoxGeometry(1.6, 1.1, 1.6);
    acGeo.translate(0, 0.55, 0);
    const acMat = new THREE.MeshStandardMaterial({ color: 0x8b9096, roughness: 0.7, metalness: 0.4, envMapIntensity: 0.4 });
    const spots = [];
    for (const r of roofSpots) {
      const nAc = 1 + Math.floor(rand() * 2);
      for (let k = 0; k < nAc; k++) {
        spots.push([r.x + (rand() - 0.5) * r.w * 0.5, r.h + 0.03, r.z + (rand() - 0.5) * r.d * 0.5, 0.7 + rand() * 0.7]);
      }
    }
    const acs = new THREE.InstancedMesh(acGeo, acMat, Math.max(1, spots.length));
    spots.forEach(([x, y, z, s], i) => setInstance(acs, i, x, y, z, rand() * 3.14, s, 1, s));
    acs.count = spots.length;
    acs.instanceMatrix.needsUpdate = true;
    scene.add(acs);
  }

  // ---------- parking lot (corner block): asphalt + marked bays + wheel stops ----------
  {
    const pcx = (PARK_BX - (BLOCKS - 1) / 2) * PITCH;
    const pcz = (PARK_BZ - (BLOCKS - 1) / 2) * PITCH;
    const slab = new THREE.Mesh(
      new THREE.PlaneGeometry(BLOCK, BLOCK).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ color: 0x33363b, roughness: 0.95, metalness: 0.02, envMapIntensity: 0.25 })
    );
    slab.position.set(pcx, 0.045, pcz);
    slab.receiveShadow = true;
    scene.add(slab);
    // bays: two facing rows; dividers + stops instanced
    const lineGeo = new THREE.BoxGeometry(0.14, 0.02, 5.6);
    lineGeo.translate(0, 0.01, 0);
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xe8eaec, roughness: 0.7 });
    const BAY_W = 3.0, ROWS = [-7.5, 7.5], BAYS = 12;
    const x0 = pcx - (BAYS * BAY_W) / 2;
    const nLines = ROWS.length * (BAYS + 1);
    const lines = new THREE.InstancedMesh(lineGeo, lineMat, nLines);
    const stopGeo = new THREE.BoxGeometry(1.8, 0.14, 0.16);
    stopGeo.translate(0, 0.07, 0);
    const stopMat = new THREE.MeshStandardMaterial({ color: 0x9a9da2, roughness: 0.9 });
    const stops = new THREE.InstancedMesh(stopGeo, stopMat, ROWS.length * BAYS);
    let li = 0, ti = 0;
    for (const rz of ROWS) {
      for (let b = 0; b <= BAYS; b++) {
        setInstance(lines, li++, x0 + b * BAY_W, 0.055, pcz + rz, 0, 1, 1, 1);
      }
      for (let b = 0; b < BAYS; b++) {
        setInstance(stops, ti++, x0 + b * BAY_W + BAY_W / 2, 0.055, pcz + rz + (rz < 0 ? 1.9 : -1.9), 0, 1, 1, 1);
      }
    }
    lines.count = li; lines.instanceMatrix.needsUpdate = true;
    stops.count = ti; stops.instanceMatrix.needsUpdate = true;
    scene.add(lines, stops);
    // lot label painted on asphalt
    const label = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 5).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ map: makeCanvas(256, 64, (g, w, h) => {
        g.fillStyle = '#33363b'; g.fillRect(0, 0, w, h);
        g.fillStyle = '#e8c33a'; g.font = 'bold 40px sans-serif';
        g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText('PARKING', w / 2, h / 2);
      }), roughness: 0.9, transparent: false })
    );
    label.position.set(pcx, 0.055, pcz);
    scene.add(label);
  }

  // ---------- crosswalks at the 4 central intersections ----------
  {
    const stripeGeo = new THREE.BoxGeometry(0.7, 0.02, 3.2);
    stripeGeo.translate(0, 0.01, 0);
    const stripeMat = new THREE.MeshStandardMaterial({ color: 0xdfe2e6, roughness: 0.75 });
    const spots = [];
    for (const ix of [2, 3]) for (const iz of [2, 3]) {
      const cx = roadLines[ix], cz = roadLines[iz];
      const off = ROAD_W / 2 + 2.6;
      for (const [x, z, rot] of [
        [cx, cz - off, 0], [cx, cz + off, 0],
        [cx - off, cz, 1], [cx + off, cz, 1],
      ]) {
        for (let sIdx = -2; sIdx <= 2; sIdx++) {
          spots.push(rot === 0
            ? [x + sIdx * 2.2, 0.06, z, 0]
            : [x, 0.06, z + sIdx * 2.2, Math.PI / 2]);
        }
      }
    }
    const stripes = new THREE.InstancedMesh(stripeGeo, stripeMat, spots.length);
    spots.forEach(([x, y, z, r], i) => setInstance(stripes, i, x, y, z, r, 1, 1, 1));
    stripes.instanceMatrix.needsUpdate = true;
    stripes.receiveShadow = true;
    scene.add(stripes);
  }

  // ---------- streetlights (instanced poles + heads) ----------
  const poleGeo = new THREE.CylinderGeometry(0.12, 0.16, 9, 6);
  poleGeo.translate(0, 4.5, 0);
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x3c4148, roughness: 0.6, metalness: 0.6, envMapIntensity: 0.6 });
  const headGeo = new THREE.BoxGeometry(1.6, 0.25, 0.5);
  headGeo.translate(0.6, 9, 0);
  const headMat = new THREE.MeshStandardMaterial({
    color: 0xfff2c4, emissive: 0xffd77a, emissiveIntensity: 0.35, roughness: 0.4, metalness: 0.2,
  });
  const lightPos = [];
  for (const c of roadLines) {
    for (let d = -roadLen / 2 + 25; d < roadLen / 2 - 10; d += 46) {
      const side = (Math.round(d / 46) % 2 === 0) ? 1 : -1;
      lightPos.push([c + side * (ROAD_W / 2 + 1.5), d, 0]);       // along Z road
      lightPos.push([d, c + side * (ROAD_W / 2 + 1.5), 1]);       // along X road
    }
  }
  const poles = new THREE.InstancedMesh(poleGeo, poleMat, lightPos.length);
  const heads = new THREE.InstancedMesh(headGeo, headMat, lightPos.length);
  lightPos.forEach(([x, z, horiz], i) => {
    setInstance(poles, i, x, 0, z, 0, 1, 1, 1);
    setInstance(heads, i, x, 0, z, horiz ? Math.PI / 2 : 0, 1, 1, 1);
  });
  poles.instanceMatrix.needsUpdate = true;
  heads.instanceMatrix.needsUpdate = true;
  scene.add(poles, heads);

  // ---------- trees (instanced trunks + canopies) ----------
  const treeSpots = [];
  for (let bx = 0; bx < BLOCKS; bx++) {
    for (let bz = 0; bz < BLOCKS; bz++) {
      if (bx === PARK_BX && bz === PARK_BZ) continue; // parking lot stays clear
      const bcx = (bx - (BLOCKS - 1) / 2) * PITCH;
      const bcz = (bz - (BLOCKS - 1) / 2) * PITCH;
      const n = 2 + Math.floor(rand() * 3);
      for (let k = 0; k < n; k++) {
        treeSpots.push([
          bcx + (rand() - 0.5) * (BLOCK - 8),
          bcz + (rand() - 0.5) * (BLOCK - 8),
          0.8 + rand() * 0.5,
        ]);
      }
    }
  }
  const trunkGeo = new THREE.CylinderGeometry(0.18, 0.28, 2.6, 6);
  trunkGeo.translate(0, 1.3, 0);
  const coneGeo = new THREE.ConeGeometry(1.9, 4.6, 7);
  coneGeo.translate(0, 4.4, 0);
  const trunks = new THREE.InstancedMesh(
    trunkGeo, new THREE.MeshStandardMaterial({ color: 0x6b4a2e, roughness: 0.9, envMapIntensity: 0.2 }), treeSpots.length
  );
  const canopies = new THREE.InstancedMesh(
    coneGeo, new THREE.MeshStandardMaterial({ color: 0x3e7a34, roughness: 0.85, envMapIntensity: 0.3 }), treeSpots.length
  );
  canopies.castShadow = true;
  treeSpots.forEach(([x, z, s], i) => {
    setInstance(trunks, i, x, 0.03, z, rand() * 6.28, s, s, s);
    setInstance(canopies, i, x, 0.03, z, rand() * 6.28, s, s * (0.9 + rand() * 0.3), s);
  });
  trunks.instanceMatrix.needsUpdate = true;
  canopies.instanceMatrix.needsUpdate = true;
  scene.add(trunks, canopies);

  // ---------- streetlight glow points (one draw call, additive) ----------
  const glowTex = makeCanvas(64, 64, (g, w, h) => {
    const gr = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    gr.addColorStop(0, 'rgba(255,220,150,1)');
    gr.addColorStop(0.4, 'rgba(255,200,120,0.45)');
    gr.addColorStop(1, 'rgba(255,190,110,0)');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
  });
  const glowGeo = new THREE.BufferGeometry();
  const glowPos = new Float32Array(lightPos.length * 3);
  lightPos.forEach(([x, z], i) => { glowPos[i*3]=x; glowPos[i*3+1]=8.9; glowPos[i*3+2]=z; });
  glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPos, 3));
  const glowMat = new THREE.PointsMaterial({
    map: glowTex, size: 14, transparent: true, opacity: 0.0,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
  });
  const glowPoints = new THREE.Points(glowGeo, glowMat);
  glowPoints.frustumCulled = false;
  scene.add(glowPoints);

  // ---------- distant skyline silhouette ----------
  const skyGeo = new THREE.BoxGeometry(1, 1, 1);
  skyGeo.translate(0, 0.5, 0);
  const skyMat = new THREE.MeshBasicMaterial({ color: 0x2a3a55 });
  const SKYLINE_N = 46;
  const skyline = new THREE.InstancedMesh(skyGeo, skyMat, SKYLINE_N);
  for (let i = 0; i < SKYLINE_N; i++) {
    const a = (i / SKYLINE_N) * Math.PI * 2 + rand() * 0.1;
    const r = 760 + rand() * 220;
    const w = 40 + rand() * 60, h = 60 + rand() * 130, d = 40 + rand() * 60;
    setInstance(skyline, i, Math.cos(a)*r, 0, Math.sin(a)*r, rand()*0.6, w, h, d);
  }
  skyline.instanceMatrix.needsUpdate = true;
  scene.add(skyline);

  // ---------- drag strip (east edge) ----------
  const stripLen = STRIP_HALF * 2; // 450
  const sTex = makeCanvas(128, 128, (g, w, h) => {
    g.fillStyle = '#2e3136'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#cfd3d8';
    g.fillRect(2, 0, 5, h); g.fillRect(w - 7, 0, 5, h); // edge lines
    g.fillStyle = '#e8c33a';
    for (let y = 0; y < h; y += 32) g.fillRect(w / 2 - 3, y, 6, 16); // center dashes
  });
  sTex.wrapS = sTex.wrapT = THREE.RepeatWrapping;
  sTex.repeat.set(1, stripLen / 14);
  const stripGeo = new THREE.PlaneGeometry(1, 1);
  stripGeo.rotateX(-Math.PI / 2);
  const strip = new THREE.Mesh(
    stripGeo, new THREE.MeshStandardMaterial({ map: sTex, roughness: 0.9, metalness: 0.05, envMapIntensity: 0.35 })
  );
  strip.scale.set(STRIP_W, 1, stripLen);
  strip.position.set(STRIP_X, 0.05, 0);
  strip.receiveShadow = true;
  scene.add(strip);

  // access road connecting city grid to strip (so player can drive there)
  const linkTex = roadTexture();
  linkTex.wrapS = linkTex.wrapT = THREE.RepeatWrapping;
  linkTex.repeat.set(1, (STRIP_X - GRID_HALF) / ROAD_W + 2);
  const linkLen = STRIP_X - GRID_HALF + 20;
  const link = new THREE.Mesh(
    stripGeo, new THREE.MeshStandardMaterial({ map: linkTex, roughness: 0.9, metalness: 0.05, envMapIntensity: 0.35 })
  );
  link.scale.set(linkLen, 1, ROAD_W);
  link.rotation.y = Math.PI / 2;
  link.position.set((GRID_HALF + STRIP_X) / 2, 0.05, 0);
  link.receiveShadow = true;
  scene.add(link);

  // start line: white box across both lanes at the south end
  const startLine = new THREE.Mesh(
    new THREE.PlaneGeometry(STRIP_W, 1.6).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0xf2f4f6, roughness: 0.7 })
  );
  startLine.position.set(STRIP_X, 0.07, STRIP_HALF - 8);
  scene.add(startLine);

  // barriers along both sides of the strip (instanced)
  const barGeo = new THREE.BoxGeometry(4, 1.1, 0.7);
  barGeo.translate(0, 0.55, 0);
  const barMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0.1, envMapIntensity: 0.4 });
  const barCount = Math.floor(stripLen / 9) * 2;
  const barriers = new THREE.InstancedMesh(barGeo, barMat, barCount);
  barriers.castShadow = true;
  const barTint = new THREE.Color();
  let bai = 0;
  for (let d = -STRIP_HALF + 4; d <= STRIP_HALF - 4 && bai < barCount; d += 9) {
    for (const sx of [-1, 1]) {
      setInstance(barriers, bai, STRIP_X + sx * (STRIP_W / 2 + 1.6), 0.05, d, 0, 1, 1, 1);
      barTint.setHex((bai % 2 === 0) ? 0xe8641e : 0xf2f4f6); // orange / white
      barriers.setColorAt(bai, barTint);
      bai++;
    }
  }
  barriers.count = bai;
  barriers.instanceMatrix.needsUpdate = true;
  if (barriers.instanceColor) barriers.instanceColor.needsUpdate = true;
  scene.add(barriers);
  // strip side barriers are visual only; add thin colliders? Keep visual-only
  // per contract colliders are building AABBs — strip barriers left non-colliding
  // for arcade forgiveness at 250+ km/h.

  // ---------- spawn / drag strip contract ----------
  const spawn = { x: roadLines[3], z: 120, heading: 0 }; // on a north-south road
  const dragStrip = {
    startX: STRIP_X,
    startZ: STRIP_HALF - 8,
    dirX: 0,
    dirZ: -1, // unit vector along the strip (south -> north)
    length: stripLen, // 450
  };

  // ---------- day/night glow: windows + streetlights ----------
  // f: 0 = day, 1 = full night
  function setGlow(f) {
    bMat.emissiveIntensity = f * 1.4;
    headMat.emissiveIntensity = 0.35 + f * 3.0;
    glowMat.opacity = f * 0.85;
    skyMat.color.setHex(f > 0.5 ? 0x0e1626 : 0x2a3a55);
  }

  // ---------- per-frame update: shadow camera follows player ----------
  function update(dt, playerPos) {
    const sx = Math.round(playerPos.x / SNAP) * SNAP;
    const sz = Math.round(playerPos.z / SNAP) * SNAP;
    sun.target.position.set(sx, 0, sz);
    sun.position.set(sx + SUN_DX, SUN_DY, sz + SUN_DZ);
    sun.target.updateMatrixWorld();
  }
  // initialize shadow focus at spawn
  update(0, spawn);

  return { colliders, spawn, dragStrip, update, setGlow, sun, hemi };
}
