// CITY DRIVER — Winnipeg-style city. 9x9 blocks on the real downtown street
// names, the Red and Assiniboine rivers meeting at The Forks, a cable-stayed
// bridge over the Red, Portage & Main towers, the arena, the Legislative
// Building with the Golden Boy, the human rights museum, the Exchange District,
// a hospital, a park, parked cars, elms, street furniture.
//
// Export: buildCity(scene, reservedLots) -> { colliders, buildings, spawn, dragStrip, update, setGlow, sun, hemi, roadLines }
import * as THREE from 'three';
import { buildOutskirts } from './outskirts.js';
import { buildCar, USE_FORGE } from './cars.js';
import { natureKit } from './forge/builders/nature.js';
import { forgeParkedGeometry } from './forgecars.js';
import { mergeGeometries as _merge } from 'three/addons/utils/BufferGeometryUtils.js';
// merge any mix of indexed / non-indexed geometries
const mergeGeometries = list => _merge(list.map(g => g.index ? g.toNonIndexed() : g));
import { BLOCKS, BLOCK, ROAD_W, PITCH, GRID_HALF, LINES, LANE, blockCenter, RED_RIVER, ASSINIBOINE, BRIDGE_Z, BRIDGE_HALF,
  STRIP_X, STRIP_HALF, SPECIAL, isSpecialBlock, districtOf, MAIN_X, PORTAGE_Z, NS_NAMES, EW_NAMES, OFFROAD, MUD_PITS, ROCKS, WORLD_HALF, RIVER_ZN, RIVER_ZS, ASSINI_XW } from './world.js';

const SEED = 20481;
function mulberry32(a){
  return function(){ a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---- wind sway (v4): shared time uniform patched into canopy material ----
const windUniforms = { uTime: { value: 0 } };
export function updateWindTime(t) { windUniforms.uTime.value = t; }
function addWind(material, strength) {
  const key = 'citywind' + strength.toFixed(3);
  material.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = windUniforms.uTime;
    sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      {
        #ifdef USE_INSTANCING
          vec3 wAnchor = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        #else
          vec3 wAnchor = vec3(modelMatrix[3][0], modelMatrix[3][1], modelMatrix[3][2]);
        #endif
        float wph = uTime * 2.1 + wAnchor.x * 0.45 + wAnchor.z * 0.38;
        float wamt = smoothstep(0.05, 0.8, position.y) * ${strength.toFixed(3)};
        transformed.x += (sin(wph) * 0.65 + sin(wph * 2.33 + 1.7) * 0.35) * wamt;
        transformed.z += cos(wph * 0.77 + 0.6) * 0.5 * wamt;
      }`
    );
  };
  material.customProgramCacheKey = () => key;
}
function makeCanvas(w, h, draw, srgb = true){
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  if(srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
function noiseFill(g, w, h, base, spread, n, size = 2){
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  for(let i = 0; i < n; i++){
    const v = (Math.random() - 0.5) * spread;
    g.fillStyle = v > 0 ? `rgba(255,255,255,${v})` : `rgba(0,0,0,${-v})`;
    g.fillRect(Math.random() * w, Math.random() * h, size, size);
  }
}

// ---------- textures ----------
function roadTexture(){
  return makeCanvas(256, 512, (g, w, h) => {
    noiseFill(g, w, h, '#2f3237', 0.16, 9000, 2);
    // tyre-polished lanes
    g.fillStyle = 'rgba(0,0,0,0.12)'; g.fillRect(w * 0.18, 0, w * 0.12, h); g.fillRect(w * 0.70, 0, w * 0.12, h);
    // cracks / patches
    g.strokeStyle = 'rgba(15,15,15,0.5)'; g.lineWidth = 1;
    for(let i = 0; i < 6; i++){ g.beginPath(); let x = Math.random() * w, y = Math.random() * h; g.moveTo(x, y); for(let k = 0; k < 6; k++){ x += (Math.random() - 0.5) * 30; y += Math.random() * 25; g.lineTo(x, y); } g.stroke(); }
    g.fillStyle = 'rgba(30,30,30,0.5)'; g.fillRect(w * 0.55, h * 0.3, 40, 60);
    // edge lines
    g.fillStyle = '#d9dcdf'; g.fillRect(10, 0, 5, h); g.fillRect(w - 15, 0, 5, h);
    // double yellow centre
    g.fillStyle = '#e3b62c'; g.fillRect(w / 2 - 7, 0, 4, h); g.fillRect(w / 2 + 3, 0, 4, h);
  });
}
function asphaltTexture(){ return makeCanvas(256, 256, (g, w, h) => noiseFill(g, w, h, '#2f3237', 0.16, 7000, 2)); }
function sidewalkTexture(){
  return makeCanvas(256, 256, (g, w, h) => {
    noiseFill(g, w, h, '#a3a59f', 0.12, 5000, 2);
    g.strokeStyle = 'rgba(60,60,60,0.35)'; g.lineWidth = 2;
    for(let i = 0; i <= w; i += 32){ g.beginPath(); g.moveTo(i, 0); g.lineTo(i, h); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(w, i); g.stroke(); }
  });
}
function grassTexture(){
  return makeCanvas(256, 256, (g, w, h) => {
    noiseFill(g, w, h, '#5a7f45', 0.22, 12000, 2);
    for(let i = 0; i < 400; i++){ g.fillStyle = `rgba(${90 + Math.random() * 40},${120 + Math.random() * 50},60,0.5)`; g.fillRect(Math.random() * w, Math.random() * h, 1, 3); }
  });
}
function waterNormal(){
  return makeCanvas(256, 256, (g, w, h) => {
    g.fillStyle = 'rgb(128,128,255)'; g.fillRect(0, 0, w, h);
    for(let i = 0; i < 900; i++){
      const x = Math.random() * w, y = Math.random() * h, r = 4 + Math.random() * 14;
      const gr = g.createRadialGradient(x, y, 0, x, y, r);
      const dx = (Math.random() - 0.5) * 70, dy = (Math.random() - 0.5) * 70;
      gr.addColorStop(0, `rgba(${128 + dx},${128 + dy},255,0.5)`); gr.addColorStop(1, 'rgba(128,128,255,0)');
      g.fillStyle = gr; g.fillRect(x - r, y - r, r * 2, r * 2);
    }
  }, false);
}

// ---------- procedural facade material ----------
// Windows are drawn in the shader from world position, so every building gets
// correctly scaled floors/bays at any size, lit windows at night and a
// storefront ground floor — one draw call per style.
function facadeMaterial(opts){
  const m = new THREE.MeshStandardMaterial({ color:0xffffff, roughness:opts.rough ?? 0.85, metalness:opts.metal ?? 0.05, envMapIntensity:opts.env ?? 0.6 });
  const u = {
    uBay:{ value:new THREE.Vector2(opts.bay, opts.floor) },
    uWin:{ value:new THREE.Vector4(...opts.win) },        // x margin, bottom, top margin, unused
    uGround:{ value:opts.ground ?? 4.4 },
    uGlassA:{ value:new THREE.Color(opts.glassA) }, uGlassB:{ value:new THREE.Color(opts.glassB) },
    uLit:{ value:new THREE.Color(0xffd08a) }, uNight:{ value:0 }, uLitFrac:{ value:opts.lit ?? 0.35 },
    uBrick:{ value:opts.brick ? 1 : 0 }, uBands:{ value:opts.bands ? 1 : 0 },
  };
  m.userData.u = u;
  m.onBeforeCompile = sh => {
    Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vFac; varying float vHash;')
      .replace('#include <project_vertex>', `#include <project_vertex>
        #ifdef USE_INSTANCING
          vec4 fw = modelMatrix * instanceMatrix * vec4(transformed, 1.0);
          vec3 fn = normalize(mat3(modelMatrix * instanceMatrix) * objectNormal);
          vHash = fract(sin(dot(vec2(instanceMatrix[3].x, instanceMatrix[3].z), vec2(12.9898, 78.233))) * 43758.5453);
        #else
          vec4 fw = modelMatrix * vec4(transformed, 1.0);
          vec3 fn = normalize(mat3(modelMatrix) * objectNormal);
          vHash = 0.37;
        #endif
        vFac = vec3(abs(fn.x) > 0.5 ? fw.z : fw.x, fw.y, fn.y > 0.5 ? 1.0 : (fn.y < -0.5 ? 2.0 : 0.0));`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        varying vec3 vFac; varying float vHash;
        uniform vec2 uBay; uniform vec4 uWin; uniform float uGround; uniform vec3 uGlassA; uniform vec3 uGlassB;
        uniform vec3 uLit; uniform float uNight; uniform float uLitFrac; uniform float uBrick; uniform float uBands;
        float fHash(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453); }`)
      .replace('void main() {', 'void main() {\n float fWin = 0.0; float fLit = 0.0;')
      .replace('#include <color_fragment>', `#include <color_fragment>
        if(vFac.z < 0.5){
          float a = vFac.x / uBay.x; float y = vFac.y;
          float fl = floor((y - uGround) / uBay.y);
          vec2 c = vec2(fract(a), fract((y - uGround) / uBay.y));
          float win = step(uWin.x, c.x) * step(c.x, 1.0 - uWin.x) * step(uWin.y, c.y) * step(c.y, 1.0 - uWin.z);
          if(uBands > 0.5) win = step(uWin.y, c.y) * step(c.y, 1.0 - uWin.z) * (0.85 + 0.15 * step(0.04, c.x));
          float h = fHash(vec3(floor(a), fl, vHash * 97.0));
          if(y < uGround){
            float g = y / uGround;
            win = step(0.07, c.x) * step(c.x, 0.93) * step(0.06, g) * step(g, 0.8);
            h = fHash(vec3(floor(a), 7.0, vHash * 31.0));
            diffuseColor.rgb *= 0.78;
          }
          if(uBrick > 0.5){
            float row = floor(y / 0.09);
            float bx = fract((vFac.x + mod(row, 2.0) * 0.12) / 0.24);
            float mortar = max(step(0.86, fract(y / 0.09)), step(0.93, bx));
            diffuseColor.rgb *= 1.0 - 0.22 * mortar + 0.08 * (fHash(vec3(floor(vFac.x / 0.24), row, 3.0)) - 0.5);
          }
          // frame shadow line under each window + floor slab line
          float sill = step(c.y, uWin.y) * step(uWin.y - 0.05, c.y) * step(0.0, y - uGround);
          diffuseColor.rgb *= 1.0 - 0.25 * sill;
          vec3 glass = mix(uGlassA, uGlassB, h);
          diffuseColor.rgb = mix(diffuseColor.rgb, glass, win);
          fWin = win;
          fLit = win * step(1.0 - uLitFrac, fHash(vec3(floor(a) + 3.0, fl, vHash * 13.0))) * (y < uGround ? 1.6 : 1.0);
        } else if(vFac.z > 0.5 && vFac.z < 1.5){
          diffuseColor.rgb = vec3(0.28, 0.29, 0.31) * (0.9 + 0.2 * vHash);
        }`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\n roughnessFactor = mix(roughnessFactor, 0.06, fWin);')
      .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\n metalnessFactor = mix(metalnessFactor, 0.85, fWin);')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n totalEmissiveRadiance += uLit * fLit * uNight * 0.55;');
  };
  return m;
}

// instance helper (no allocations per call)
const _p = new THREE.Vector3(), _q = new THREE.Quaternion(), _s = new THREE.Vector3(), _m = new THREE.Matrix4(), UP = new THREE.Vector3(0, 1, 0);
function setInst(mesh, i, x, y, z, ry, sx, sy, sz){
  _p.set(x, y, z); _q.setFromAxisAngle(UP, ry); _s.set(sx, sy, sz); _m.compose(_p, _q, _s); mesh.setMatrixAt(i, _m);
}
function hitsReserved(reserved, minX, maxX, minZ, maxZ){
  for(const r of reserved) if(maxX > r.minX && minX < r.maxX && maxZ > r.minZ && minZ < r.maxZ) return true;
  return false;
}


// ---------- Forge 3D tree shapes (falls back to the classic elm if the kit can't build) ----------
function stripGeo(g){
  g = g.index ? g.toNonIndexed() : g.clone();
  for(const k of Object.keys(g.attributes)) if(k !== 'position' && k !== 'normal') g.deleteAttribute(k);
  return g;
}
function forgeTreeKinds(){
  const classic = () => [{ trunk:new THREE.CylinderGeometry(0.2, 0.32, 3.4, 6).translate(0, 1.7, 0), crown:mergeGeometries([
      new THREE.IcosahedronGeometry(2.4, 1).translate(0, 5.2, 0).toNonIndexed(),
      new THREE.IcosahedronGeometry(1.8, 1).translate(1.5, 4.4, 0.6).toNonIndexed(),
      new THREE.IcosahedronGeometry(1.7, 1).translate(-1.3, 4.6, -0.7).toNonIndexed(),
      new THREE.IcosahedronGeometry(1.5, 1).translate(0.2, 6.6, 0.3).toNonIndexed(),
    ]), hue:0.24, light:0.26 }];
  if(!USE_FORGE) return classic();
  try{
    const out = [];
    for(const [kind, hue, light, birch] of [['trees', 0.24, 0.26, false], ['birch', 0.2, 0.34, true], ['pines', 0.3, 0.18, false]]){
      const parts = natureKit(kind);
      const trunk = parts.find(p => !p[2]), crown = parts.find(p => p[2]);
      if(!trunk || !crown) continue;
      // the game's elms are a touch bigger than Forge's park trees
      const sc = kind === 'trees' ? 1.25 : 1.05;
      out.push({ trunk:stripGeo(trunk[0]).scale(sc, sc, sc), crown:stripGeo(crown[0]).scale(sc, sc, sc), hue, light, birch });
    }
    return out.length ? out : classic();
  }catch(e){ console.warn('Forge trees failed, using classic elms', e); return classic(); }
}

export function buildCity(scene, reserved = []){
  const rand = mulberry32(SEED);
  const colliders = [];
  const buildingInfo = [];
  const glowMats = [];
  const addCol = (minX, maxX, minZ, maxZ) => colliders.push({ minX, maxX, minZ, maxZ });

  // ---------- sky / light ----------
  scene.fog = new THREE.Fog(0xcfe0f2, 260, 950);
  const hemi = new THREE.HemisphereLight(0xc4dcff, 0x5f6e4a, 0.85);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff1dc, 1.75);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.near = 10; sun.shadow.camera.far = 480;
  const SH = 120;
  Object.assign(sun.shadow.camera, { left:-SH, right:SH, top:SH, bottom:-SH });
  sun.shadow.bias = -0.0006; sun.shadow.normalBias = 0.6;
  scene.add(sun, sun.target);
  const SUN_DX = 80, SUN_DY = 140, SUN_DZ = 55, SNAP = 16;

  // ---------- ground ----------
  const grassTex = grassTexture(); grassTex.wrapS = grassTex.wrapT = THREE.RepeatWrapping; grassTex.repeat.set(220, 220);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(WORLD_HALF * 2 + 600, WORLD_HALF * 2 + 600).rotateX(-Math.PI / 2),
    new THREE.MeshStandardMaterial({ map:grassTex, roughness:0.95, envMapIntensity:0.2 }));
  ground.receiveShadow = true;
  scene.add(ground);

  // ---------- roads ----------
  const roadLen = BLOCKS * PITCH + ROAD_W;
  const rTex = roadTexture(); rTex.wrapS = rTex.wrapT = THREE.RepeatWrapping; rTex.repeat.set(1, roadLen / (ROAD_W * 2));
  const roadMat = new THREE.MeshStandardMaterial({ map:rTex, roughness:0.88, metalness:0.02, envMapIntensity:0.35 });
  const roadGeo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
  const roads = new THREE.InstancedMesh(roadGeo, roadMat, LINES.length * 2);
  let ri = 0;
  for(const c of LINES){
    setInst(roads, ri++, c, 0.05, 0, 0, ROAD_W, 1, roadLen);
    setInst(roads, ri++, 0, 0.05, c, Math.PI / 2, ROAD_W, 1, roadLen);
  }
  roads.receiveShadow = true; roads.instanceMatrix.needsUpdate = true;
  scene.add(roads);
  // plain asphalt over every intersection (hides the centre lines)
  const aTex = asphaltTexture(); aTex.wrapS = aTex.wrapT = THREE.RepeatWrapping;
  const asphaltMat = new THREE.MeshStandardMaterial({ map:aTex, roughness:0.88, envMapIntensity:0.35 });
  const inter = new THREE.InstancedMesh(roadGeo, asphaltMat, LINES.length * LINES.length);
  let ii = 0;
  for(const x of LINES) for(const z of LINES) setInst(inter, ii++, x, 0.055, z, 0, ROAD_W, 1, ROAD_W);
  inter.receiveShadow = true; inter.instanceMatrix.needsUpdate = true;
  scene.add(inter);
  // crosswalks at every intersection
  {
    const geo = new THREE.BoxGeometry(0.6, 0.02, 3.4).translate(0, 0.01, 0);
    const spots = [];
    for(const cx of LINES) for(const cz of LINES){
      const off = ROAD_W / 2 + 1.9;
      for(const [x, z, rot] of [[cx, cz - off, 0], [cx, cz + off, 0], [cx - off, cz, 1], [cx + off, cz, 1]]){
        for(let k = -5; k <= 5; k++) spots.push(rot === 0 ? [x + k * 1.2, z, 0] : [x, z + k * 1.2, Math.PI / 2]);
      }
    }
    const cw = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ color:0xe6e8ea, roughness:0.7 }), spots.length);
    spots.forEach(([x, z, r], i) => setInst(cw, i, x, 0.06, z, r, 1, 1, 1));
    cw.receiveShadow = true; cw.instanceMatrix.needsUpdate = true;
    scene.add(cw);
  }

  // ---------- sidewalks with curbs ----------
  const swTex = sidewalkTexture(); swTex.wrapS = swTex.wrapT = THREE.RepeatWrapping; swTex.repeat.set(BLOCK / 4, BLOCK / 4);
  const swMat = new THREE.MeshStandardMaterial({ map:swTex, roughness:0.9, envMapIntensity:0.3 });
  const curbMat = new THREE.MeshStandardMaterial({ color:0x8c8e8a, roughness:0.8 });
  const nB = BLOCKS * BLOCKS;
  const sidewalks = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), swMat, nB);
  const curbs = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0), curbMat, nB * 4);
  let si = 0, ci = 0;
  const blocks = [];
  for(let bx = 0; bx < BLOCKS; bx++) for(let bz = 0; bz < BLOCKS; bz++){
    const cx = blockCenter(bx), cz = blockCenter(bz);
    blocks.push({ bx, bz, cx, cz, special:isSpecialBlock(cx, cz), district:districtOf(cx, cz) });
    setInst(sidewalks, si++, cx, 0, cz, 0, BLOCK - 0.3, 0.13, BLOCK - 0.3);
    for(const [x, z, sx, sz] of [[cx, cz - BLOCK / 2, BLOCK, 0.3], [cx, cz + BLOCK / 2, BLOCK, 0.3], [cx - BLOCK / 2, cz, 0.3, BLOCK], [cx + BLOCK / 2, cz, 0.3, BLOCK]])
      setInst(curbs, ci++, x, 0, z, 0, sx, 0.17, sz);
  }
  sidewalks.receiveShadow = true; curbs.receiveShadow = true;
  sidewalks.instanceMatrix.needsUpdate = true; curbs.instanceMatrix.needsUpdate = true;
  scene.add(sidewalks, curbs);

  // ---------- buildings: 4 facade styles ----------
  const STYLES = {
    glass:     facadeMaterial({ bay:1.6, floor:3.7, win:[0.04, 0.08, 0.06, 0], glassA:0x1d3a52, glassB:0x3d6f8f, rough:0.4, metal:0.4, env:1.0, lit:0.3 }),
    office:    facadeMaterial({ bay:3.2, floor:3.6, win:[0.12, 0.22, 0.14, 0], glassA:0x2a3c4e, glassB:0x5f7f96, bands:true, lit:0.35 }),
    brick:     facadeMaterial({ bay:3.4, floor:3.9, win:[0.24, 0.24, 0.16, 0], glassA:0x1b2329, glassB:0x3c4a52, brick:true, lit:0.3 }),
    apartment: facadeMaterial({ bay:3.6, floor:3.1, win:[0.22, 0.28, 0.2, 0], glassA:0x26323d, glassB:0x60788a, lit:0.45, ground:3.6 }),
  };
  for(const k in STYLES) glowMats.push(STYLES[k].userData.u);
  const bGeo = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const MAXB = 520;
  const bMesh = {};
  const bCount = {};
  for(const k in STYLES){
    bMesh[k] = new THREE.InstancedMesh(bGeo, STYLES[k], MAXB);
    bMesh[k].castShadow = true; bMesh[k].receiveShadow = true;
    bCount[k] = 0;
  }
  const tint = new THREE.Color();
  const roofSpots = [];
  const PALETTES = {
    glass:     [[0.55, 0.6, 0.66], [0.32, 0.36, 0.42], [0.2, 0.22, 0.26], [0.62, 0.62, 0.6]],
    office:    [[0.78, 0.77, 0.73], [0.66, 0.65, 0.62], [0.82, 0.78, 0.68], [0.55, 0.56, 0.58]],
    brick:     [[0.58, 0.3, 0.22], [0.5, 0.26, 0.2], [0.66, 0.42, 0.3], [0.45, 0.3, 0.24], [0.7, 0.58, 0.44]],
    apartment: [[0.84, 0.8, 0.7], [0.74, 0.68, 0.6], [0.6, 0.66, 0.7], [0.82, 0.72, 0.62], [0.7, 0.5, 0.42]],
  };
  // place one building (also used for named landmark towers)
  function addBuilding(style, px, pz, w, d, h, rgb, door = null){
    const mesh = bMesh[style], i = bCount[style]++;
    setInst(mesh, i, px, 0.13, pz, 0, w, h, d);
    tint.setRGB(rgb[0], rgb[1], rgb[2]);
    mesh.setColorAt(i, tint);
    roofSpots.push({ x:px, z:pz, w, d, h:h + 0.13, style });
    addCol(px - w / 2, px + w / 2, pz - d / 2, pz + d / 2);
    if(!door){
      // front door faces the nearest street
      const bcx = Math.round(px / PITCH) * PITCH, bcz = Math.round(pz / PITCH) * PITCH;
      const ox = px - bcx, oz = pz - bcz;
      let nx = 0, nz = 0;
      if(Math.abs(ox) > Math.abs(oz)) nx = ox >= 0 ? 1 : -1; else nz = oz >= 0 ? 1 : -1;
      door = { x:px + nx * (w / 2), z:pz + nz * (d / 2), nx, nz };
    }
    buildingInfo.push({ id:buildingInfo.length, minX:px - w / 2, maxX:px + w / 2, minZ:pz - d / 2, maxZ:pz + d / 2, h, door });
  }

  // ---- named towers at Portage & Main ----
  const pm = [MAIN_X, PORTAGE_Z];
  const PM_OFF = ROAD_W / 2 + 3;
  const pmTowers = [
    { style:'office', dx:-1, dz:-1, w:26, d:26, h:96, rgb:[0.33, 0.25, 0.2] },     // the tall brown tower (NW)
    { style:'glass',  dx: 1, dz:-1, w:28, d:24, h:84, rgb:[0.12, 0.13, 0.15] },    // black glass tower (NE)
    { style:'office', dx:-1, dz: 1, w:26, d:24, h:78, rgb:[0.8, 0.75, 0.62] },     // stone exchange tower (SW)
  ];
  const pmLots = [];
  for(const t of pmTowers){
    const px = pm[0] + t.dx * (PM_OFF + t.w / 2), pz = pm[1] + t.dz * (PM_OFF + t.d / 2);
    addBuilding(t.style, px, pz, t.w, t.d, t.h, t.rgb, { x:px, z:pz - t.dz * (t.d / 2), nx:0, nz:-t.dz });
    pmLots.push({ minX:px - t.w / 2 - 2, maxX:px + t.w / 2 + 2, minZ:pz - t.d / 2 - 2, maxZ:pz + t.d / 2 + 2 });
  }
  // the old bank with columns (SE corner)
  {
    const px = pm[0] + PM_OFF + 13, pz = pm[1] + PM_OFF + 12;
    landmarkBank(scene, px, pz, addCol, buildingInfo);
    pmLots.push({ minX:px - 14, maxX:px + 14, minZ:pz - 13, maxZ:pz + 13 });
  }
  const allReserved = reserved.concat(pmLots);

  // ---- regular blocks ----
  const inset = 4;
  for(const b of blocks){
    if(b.special) continue;
    const dist = b.district;
    const n = dist === 'downtown' ? (rand() < 0.5 ? 4 : 9) : dist === 'residential' ? 9 : (rand() < 0.6 ? 4 : 9);
    const cols = Math.sqrt(n), cell = (BLOCK - inset * 2) / cols;
    for(let k = 0; k < n; k++){
      const skip = rand() < (dist === 'residential' ? 0.32 : 0.2);
      const gx = k % cols, gz = Math.floor(k / cols);
      const w = cell * (0.62 + rand() * 0.3), d = cell * (0.62 + rand() * 0.3);
      const px = b.cx - (BLOCK - inset * 2) / 2 + cell * (gx + 0.5) + (rand() - 0.5) * 2;
      const pz = b.cz - (BLOCK - inset * 2) / 2 + cell * (gz + 0.5) + (rand() - 0.5) * 2;
      const r1 = rand(), r2 = rand();
      if(skip) continue;
      if(hitsReserved(allReserved, px - w / 2, px + w / 2, pz - d / 2, pz + d / 2)) continue;
      let style, h;
      if(dist === 'downtown'){ style = r1 < 0.55 ? 'glass' : 'office'; h = 28 + r2 * 62; }
      else if(dist === 'exchange'){ style = 'brick'; h = 12 + r2 * 16; }
      else if(dist === 'residential'){ style = r1 < 0.75 ? 'apartment' : 'brick'; h = 7 + r2 * 14; }
      else { style = r1 < 0.4 ? 'office' : r1 < 0.7 ? 'apartment' : r1 < 0.85 ? 'brick' : 'glass'; h = 14 + r2 * 30; }
      const pal = PALETTES[style], c = pal[(rand() * pal.length) | 0], v = 0.9 + rand() * 0.2;
      addBuilding(style, px, pz, w, d, h, [c[0] * v, c[1] * v, c[2] * v]);
    }
  }
  for(const k in bMesh){
    bMesh[k].count = bCount[k];
    bMesh[k].instanceMatrix.needsUpdate = true;
    if(bMesh[k].instanceColor) bMesh[k].instanceColor.needsUpdate = true;
    scene.add(bMesh[k]);
  }

  // ---------- rooftops: parapets, AC units, water towers, antennas ----------
  {
    const parGeo = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
    const parMat = new THREE.MeshStandardMaterial({ color:0x5b5d60, roughness:0.85 });
    const par = new THREE.InstancedMesh(parGeo, parMat, roofSpots.length * 4);
    let pi = 0;
    for(const r of roofSpots){
      const t = 0.35, hh = 0.9;
      setInst(par, pi++, r.x, r.h, r.z - r.d / 2 + t / 2, 0, r.w, hh, t);
      setInst(par, pi++, r.x, r.h, r.z + r.d / 2 - t / 2, 0, r.w, hh, t);
      setInst(par, pi++, r.x - r.w / 2 + t / 2, r.h, r.z, 0, t, hh, r.d);
      setInst(par, pi++, r.x + r.w / 2 - t / 2, r.h, r.z, 0, t, hh, r.d);
    }
    par.count = pi; par.instanceMatrix.needsUpdate = true; par.castShadow = true;
    scene.add(par);
    const acGeo = new THREE.BoxGeometry(1.8, 1.2, 1.8).translate(0, 0.6, 0);
    const acs = new THREE.InstancedMesh(acGeo, new THREE.MeshStandardMaterial({ color:0x9aa0a6, roughness:0.6, metalness:0.5 }), roofSpots.length * 2);
    let ai = 0;
    const tanks = [];
    for(const r of roofSpots){
      const nAc = 1 + Math.floor(rand() * 2);
      for(let k = 0; k < nAc; k++) setInst(acs, ai++, r.x + (rand() - 0.5) * r.w * 0.5, r.h, r.z + (rand() - 0.5) * r.d * 0.5, rand() * 3, 0.7 + rand() * 0.6, 1, 0.7 + rand() * 0.6);
      if(r.style === 'brick' && rand() < 0.45) tanks.push(r);
    }
    acs.count = ai; acs.instanceMatrix.needsUpdate = true; acs.castShadow = true;
    scene.add(acs);
    // wooden water towers on the old brick buildings
    const tankGeo = mergeGeometries([
      new THREE.CylinderGeometry(1.7, 1.7, 2.8, 12).translate(0, 4.2, 0),
      new THREE.ConeGeometry(1.9, 1.2, 12).translate(0, 6.2, 0),
      ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => new THREE.CylinderGeometry(0.1, 0.1, 2.8, 5).translate(a * 1.1, 1.4, b * 1.1)),
    ]);
    const tk = new THREE.InstancedMesh(tankGeo, new THREE.MeshStandardMaterial({ color:0x6b4a32, roughness:0.9 }), Math.max(1, tanks.length));
    tanks.forEach((r, i) => setInst(tk, i, r.x + (rand() - 0.5) * r.w * 0.3, r.h, r.z + (rand() - 0.5) * r.d * 0.3, 0, 1, 1, 1));
    tk.count = tanks.length; tk.instanceMatrix.needsUpdate = true; tk.castShadow = true;
    scene.add(tk);
  }

  // ---------- front doors (instanced) ----------
  {
    const doorTex = makeCanvas(64, 96, (g, w, h) => {
      g.fillStyle = '#20262f'; g.fillRect(0, 0, w, h);
      g.fillStyle = '#c9a45a'; g.fillRect(0, 0, w, 6); g.fillRect(0, 0, 5, h); g.fillRect(w - 5, 0, 5, h);
      g.fillStyle = '#7fb0d8'; g.fillRect(9, 12, w / 2 - 12, h - 20); g.fillRect(w / 2 + 3, 12, w / 2 - 12, h - 20);
      g.fillStyle = '#d6d6d6'; g.fillRect(w / 2 - 6, h / 2, 3, 10); g.fillRect(w / 2 + 3, h / 2, 3, 10);
    });
    const doorGeo = new THREE.PlaneGeometry(2.2, 3.0).translate(0, 1.5, 0);
    const doorMat = new THREE.MeshStandardMaterial({ map:doorTex, emissive:0xffc873, emissiveMap:doorTex, emissiveIntensity:0.2, roughness:0.4, metalness:0.3 });
    const awnGeo = new THREE.BoxGeometry(3.2, 0.12, 1.2).translate(0, 3.4, 0.55);
    const awnMat = new THREE.MeshStandardMaterial({ color:0x2b2f36, roughness:0.6 });
    const doors = new THREE.InstancedMesh(doorGeo, doorMat, Math.max(1, buildingInfo.length));
    const awns = new THREE.InstancedMesh(awnGeo, awnMat, Math.max(1, buildingInfo.length));
    buildingInfo.forEach((b, i) => {
      const rot = b.door.nx ? (b.door.nx > 0 ? Math.PI / 2 : -Math.PI / 2) : (b.door.nz > 0 ? 0 : Math.PI);
      setInst(doors, i, b.door.x + b.door.nx * 0.03, 0.13, b.door.z + b.door.nz * 0.03, rot, 1, 1, 1);
      setInst(awns, i, b.door.x, 0.13, b.door.z, rot, 1, 1, 1);
    });
    doors.count = awns.count = buildingInfo.length;
    doors.instanceMatrix.needsUpdate = true; awns.instanceMatrix.needsUpdate = true;
    awns.castShadow = true;
    scene.add(doors, awns);
    glowMats.push({ door:doorMat });
  }

  // ---------- landmarks ----------
  const landmarkReserved = [];
  const LM = { scene, addCol, buildingInfo, rand, makeCanvas, landmarkReserved, glowMats };
  landmarkArena(LM, ...SPECIAL.arena);
  landmarkLegislature(LM, ...SPECIAL.legislature);
  landmarkForks(LM, ...SPECIAL.forks);
  landmarkMuseum(LM, ...SPECIAL.museum);
  landmarkMansion(LM, ...SPECIAL.mansion);
  landmarkHospital(LM, ...SPECIAL.hospital);
  landmarkPark(LM, ...SPECIAL.park);
  landmarkStation(LM, ...SPECIAL.station);
  parkingLot(LM, ...SPECIAL.parking);

  // ---------- rivers, bridge, drag strip ----------
  const water = buildRivers(LM);
  buildBridge(LM);
  const dragStrip = buildDragStrip(LM);
  buildOffroadPark(LM);

  // ---------- trees (elms along the curbs + parks) ----------
  {
    const spots = [];
    for(const b of blocks){
      if(b.special === 'parking' || b.special === 'forks') continue;
      for(let side = 0; side < 4; side++){
        for(let t = -BLOCK / 2 + 9; t <= BLOCK / 2 - 9; t += 10 + rand() * 6){
          if(rand() < 0.35) continue;
          const o = BLOCK / 2 - 0.9;
          const [x, z] = side === 0 ? [b.cx + t, b.cz - o] : side === 1 ? [b.cx + o, b.cz + t] : side === 2 ? [b.cx + t, b.cz + o] : [b.cx - o, b.cz + t];
          if(hitsReserved(allReserved, x - 1.5, x + 1.5, z - 1.5, z + 1.5)) continue;
          let nearDoor = false;
          for(const bi of buildingInfo) if(Math.abs(bi.door.x - x) < 3.5 && Math.abs(bi.door.z - z) < 3.5){ nearDoor = true; break; }
          if(!nearDoor) spots.push([x, z, 0.85 + rand() * 0.4]);
        }
      }
    }
    // riverbank + park trees
    for(let i = 0; i < 90; i++){
      const z = -GRID_HALF + rand() * GRID_HALF * 2;
      spots.push([GRID_HALF + 4 + rand() * 9, z, 0.9 + rand() * 0.5]);
      spots.push([-GRID_HALF - 6 - rand() * 30, z, 0.9 + rand() * 0.5]);
    }
    for(let i = 0; i < 70; i++){ const x = -GRID_HALF + rand() * (GRID_HALF + RED_RIVER.minX); spots.push([x, GRID_HALF + 4 + rand() * 9, 0.9 + rand() * 0.5]); spots.push([x, -GRID_HALF - 6 - rand() * 30, 0.9 + rand() * 0.5]); }
    for(const p of LM.parkTrees || []) spots.push(p);
    // Forge 3D vegetation kit: lumpy multi-lobe elm crowns, birches and pines (instanced, game materials + wind)
    const kinds = forgeTreeKinds();
    const byKind = kinds.map(() => []);
    spots.forEach((p, i) => {
      // curb + park trees stay elms; riverbank / outskirts mix in birch and pine
      const far = Math.abs(p[0]) > GRID_HALF || Math.abs(p[1]) > GRID_HALF;
      const k = far && kinds.length > 1 ? (i % 5 === 0 ? 2 : i % 3 === 0 ? 1 : 0) % kinds.length : 0;
      byKind[k].push(p);
    });
    const leaf = new THREE.Color();
    const barkMat = new THREE.MeshStandardMaterial({ color:0x5b4331, roughness:0.95 });
    const birchMat = new THREE.MeshStandardMaterial({ color:0xe6e1d8, roughness:0.85 });
    const cMat = new THREE.MeshStandardMaterial({ color:0xffffff, roughness:0.9, flatShading:true });
    addWind(cMat, 0.06); // v4: canopies sway in the wind
    kinds.forEach((kind, k) => {
      const list = byKind[k]; if(!list.length) return;
      const trunks = new THREE.InstancedMesh(kind.trunk, kind.birch ? birchMat : barkMat, list.length);
      const canopies = new THREE.InstancedMesh(kind.crown, cMat, list.length);
      list.forEach(([x, z, s], i) => {
        const ry = rand() * 6.28;
        setInst(trunks, i, x, 0.12, z, ry, s, s, s);
        setInst(canopies, i, x, 0.12, z, ry, s, s * (0.9 + rand() * 0.25), s);
        leaf.setHSL(kind.hue + rand() * 0.06, 0.45 + rand() * 0.15, kind.light + rand() * 0.08);
        canopies.setColorAt(i, leaf);
      });
      trunks.instanceMatrix.needsUpdate = true; canopies.instanceMatrix.needsUpdate = true; canopies.instanceColor.needsUpdate = true;
      canopies.castShadow = true; trunks.castShadow = true;
      scene.add(trunks, canopies);
    });
  }

  // ---------- street lights ----------
  const lightPos = [];
  for(const c of LINES){
    for(let d = -roadLen / 2 + 25; d < roadLen / 2 - 10; d += 37){
      const side = (Math.round(d / 37) % 2 === 0) ? 1 : -1;
      if(LINES.some(l => Math.abs(l - d) < 12)) continue;    // keep intersections clear for traffic lights
      lightPos.push([c + side * (ROAD_W / 2 + 1.2), d, side, 0]);
      lightPos.push([d, c + side * (ROAD_W / 2 + 1.2), side, 1]);
    }
  }
  const poleGeo = mergeGeometries([
    new THREE.CylinderGeometry(0.1, 0.16, 8.5, 6).translate(0, 4.25, 0),
    new THREE.CylinderGeometry(0.06, 0.06, 2.4, 5).rotateZ(Math.PI / 2).translate(-1.1, 8.4, 0),
  ]);
  const poleMat = new THREE.MeshStandardMaterial({ color:0x2f343b, roughness:0.55, metalness:0.6 });
  const headGeo = new THREE.BoxGeometry(0.9, 0.18, 0.4).translate(-2.2, 8.3, 0);
  const headMat = new THREE.MeshStandardMaterial({ color:0xfff3d0, emissive:0xffd590, emissiveIntensity:0.3, roughness:0.4 });
  const poles = new THREE.InstancedMesh(poleGeo, poleMat, lightPos.length);
  const heads = new THREE.InstancedMesh(headGeo, headMat, lightPos.length);
  lightPos.forEach(([x, z, side, horiz], i) => {
    // arm reaches over the road
    const rot = horiz ? (side > 0 ? -Math.PI / 2 : Math.PI / 2) : (side > 0 ? 0 : Math.PI);
    setInst(poles, i, x, 0.12, z, rot, 1, 1, 1);
    setInst(heads, i, x, 0.12, z, rot, 1, 1, 1);
  });
  poles.instanceMatrix.needsUpdate = true; heads.instanceMatrix.needsUpdate = true;
  poles.castShadow = true;
  scene.add(poles, heads);
  const glowTex = makeCanvas(64, 64, (g) => {
    const gr = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    gr.addColorStop(0, 'rgba(255,220,150,1)'); gr.addColorStop(0.4, 'rgba(255,200,120,0.45)'); gr.addColorStop(1, 'rgba(255,190,110,0)');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  });
  const glowPos = new Float32Array(lightPos.length * 3);
  const lampWorld = new THREE.Vector3();
  lightPos.forEach(([x, z, side, horiz], i) => {
    const rot = horiz ? (side > 0 ? -Math.PI / 2 : Math.PI / 2) : (side > 0 ? 0 : Math.PI);
    lampWorld.set(-2.2, 8.2, 0).applyAxisAngle(UP, rot);
    glowPos[i * 3] = x + lampWorld.x; glowPos[i * 3 + 1] = 8.2; glowPos[i * 3 + 2] = z + lampWorld.z;
  });
  const glowGeo = new THREE.BufferGeometry(); glowGeo.setAttribute('position', new THREE.BufferAttribute(glowPos, 3));
  const glowMat = new THREE.PointsMaterial({ map:glowTex, size:6, transparent:true, opacity:0, blending:THREE.AdditiveBlending, depthWrite:false });
  const glowPts = new THREE.Points(glowGeo, glowMat); glowPts.frustumCulled = false;
  scene.add(glowPts);

  // ---------- parked cars along the curbs (simple instanced bodies) ----------
  buildParkedCars(LM, allReserved);

  // ---------- street furniture: bus shelters, benches, hydrants, bins ----------
  buildFurniture(LM, blocks, allReserved);

  // ---------- street-name signs at intersections along Portage and Main ----------
  buildStreetSigns(LM);

  // ---------- the rest of the world: suburbs, Perimeter, farms, lakes, airport ----------
  const out = buildOutskirts(scene, { buildings:buildingInfo }, addCol);
  for(const g of out.glow) glowMats.push(g);

  const spawn = { x:LINES[5] + LANE, z:120, heading:0 };

  function setGlow(f){
    for(const u of glowMats){
      if(u.uNight) u.uNight.value = f;
      if(u.door) u.door.emissiveIntensity = 0.2 + f * 1.2;
      if(u.mat) u.mat.emissiveIntensity = u.base + f * (u.night ?? 2);
    }
    headMat.emissiveIntensity = 0.3 + f * 2.2;
    glowMat.opacity = f * 0.6;
  }
  let t = 0, cullN = 0;
  function update(dt, playerPos){
    t += dt;
    const sx = Math.round(playerPos.x / SNAP) * SNAP, sz = Math.round(playerPos.z / SNAP) * SNAP;
    sun.target.position.set(sx, 0, sz);
    sun.position.set(sx + SUN_DX, SUN_DY, sz + SUN_DZ);
    sun.target.updateMatrixWorld();
    if(water) water.update(dt);
    if((cullN++ & 15) === 0) out.cull(playerPos);
  }
  update(0, spawn);

  return { colliders, buildings:buildingInfo, spawn, dragStrip, update, setGlow, sun, hemi, roadLines:LINES };
}

// =====================================================================
// landmark builders
// =====================================================================
const std = (color, o = {}) => new THREE.MeshStandardMaterial(Object.assign({ color, roughness:0.8 }, o));
function box(scene, w, h, d, mat, x, y, z, cast = true){
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0), mat);
  m.position.set(x, y, z); m.castShadow = cast; m.receiveShadow = true; scene.add(m); return m;
}
function signTex(text, bg, fg, w = 512, h = 128, font = 'bold 72px sans-serif'){
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.fillStyle = fg; g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, w / 2, h / 2 + 4);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function enterable(LM, minX, maxX, minZ, maxZ, h, door){
  LM.buildingInfo.push({ id:LM.buildingInfo.length, minX, maxX, minZ, maxZ, h, door });
}

function landmarkBank(scene, x, z, addCol, buildingInfo){
  const stone = std(0xd8cfbd, { roughness:0.7 });
  box(scene, 26, 16, 24, stone, x, 0.13, z);
  box(scene, 27, 1.4, 25, std(0xc4baa6), x, 16.1, z);
  // columns on the two street faces
  for(let i = 0; i < 6; i++){
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.62, 12, 14), stone);
    col.position.set(x - 10 + i * 4, 6.2, z - 13.3); col.castShadow = true; scene.add(col);
    const col2 = col.clone(); col2.position.set(x - 13.3, 6.2, z - 10 + i * 4); scene.add(col2);
  }
  box(scene, 26, 1.6, 2.2, stone, x, 12.2, z - 13.2);
  addCol(x - 13.5, x + 13, z - 13.5, z + 12);
  buildingInfo.push({ id:buildingInfo.length, minX:x - 13, maxX:x + 13, minZ:z - 12, maxZ:z + 12, h:16, door:{ x:x, z:z - 12, nx:0, nz:-1 } });
}

function landmarkArena(LM, cx, cz){
  const { scene } = LM;
  const shell = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 48).translate(0, 0.5, 0),
    std(0x2c3440, { metalness:0.6, roughness:0.3, envMapIntensity:1.2 }));
  shell.scale.set(26, 21, 23); shell.position.set(cx, 0.13, cz); shell.castShadow = true; shell.receiveShadow = true; scene.add(shell);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(1.01, 1.01, 1, 48, 1, true).translate(0, 0.5, 0),
    std(0x6aa8d8, { metalness:0.8, roughness:0.08, transparent:true, opacity:0.85, emissive:0x10304a, emissiveIntensity:0.5 }));
  glass.scale.set(26, 9, 23); glass.position.set(cx, 0.13, cz); scene.add(glass);
  const ledMat = std(0x111111, { emissive:0x3b5bff, emissiveIntensity:1.6 });
  const led = new THREE.Mesh(new THREE.CylinderGeometry(1.012, 1.012, 1, 48, 1, true).translate(0, 0.5, 0), ledMat);
  led.scale.set(26, 1.4, 23); led.position.set(cx, 15, cz); scene.add(led);
  LM.glowMats.push({ mat:ledMat, base:1.6, night:1.5 });
  const roof = new THREE.Mesh(new THREE.SphereGeometry(1, 40, 12, 0, Math.PI * 2, 0, Math.PI / 2), std(0xb8c0c8, { metalness:0.7, roughness:0.35 }));
  roof.scale.set(26, 5, 23); roof.position.set(cx, 21.1, cz); roof.castShadow = true; scene.add(roof);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(22, 4), new THREE.MeshStandardMaterial({ map:signTex('ARENA', '#0b0f1a', '#ffffff'), emissive:0xffffff, emissiveIntensity:0.4 }));
  sign.material.emissiveMap = sign.material.map;
  sign.position.set(cx, 11.5, cz + 23.2); scene.add(sign);
  LM.addCol(cx - 25, cx + 25, cz - 22, cz + 22);
  enterable(LM, cx - 25, cx + 25, cz - 22, cz + 22, 21, { x:cx, z:cz + 23, nx:0, nz:1 });
}

function landmarkLegislature(LM, cx, cz){
  const { scene } = LM;
  const stone = std(0xd9cdb1, { roughness:0.75 });
  // lawn
  const lawn = new THREE.Mesh(new THREE.PlaneGeometry(58, 58).rotateX(-Math.PI / 2), std(0x4f7d3c, { roughness:1 }));
  lawn.position.set(cx, 0.14, cz); lawn.receiveShadow = true; scene.add(lawn);
  // H-shaped building, front toward Broadway (north)
  const fz = cz - 6;
  box(scene, 44, 15, 16, stone, cx, 0.13, fz);
  box(scene, 12, 15, 34, stone, cx - 20, 0.13, fz + 4);
  box(scene, 12, 15, 34, stone, cx + 20, 0.13, fz + 4);
  box(scene, 45, 1.2, 17, std(0xc9bc9e), cx, 15.1, fz);
  // portico with columns + pediment
  for(let i = 0; i < 6; i++){
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, 11, 14), stone);
    col.position.set(cx - 7.5 + i * 3, 5.6, fz - 9.6); col.castShadow = true; scene.add(col);
  }
  box(scene, 19, 1.5, 3, stone, cx, 11.1, fz - 9.6);
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 10.5, 4, 3, 1).rotateZ(Math.PI / 2).rotateY(Math.PI / 2), stone);
  ped.scale.set(1, 1, 0.3); ped.position.set(cx, 14.6, fz - 9.6); scene.add(ped);
  // drum + dome + lantern + Golden Boy
  const drum = new THREE.Mesh(new THREE.CylinderGeometry(7, 7.4, 9, 32), stone); drum.position.set(cx, 20.6, fz); drum.castShadow = true; scene.add(drum);
  for(let i = 0; i < 16; i++){
    const a = i / 16 * Math.PI * 2;
    const col = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 8, 8), stone);
    col.position.set(cx + Math.cos(a) * 7.6, 20.6, fz + Math.sin(a) * 7.6); scene.add(col);
  }
  const dome = new THREE.Mesh(new THREE.SphereGeometry(7.4, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2), std(0x8fa39a, { metalness:0.5, roughness:0.4 }));
  dome.scale.set(1, 1.15, 1); dome.position.set(cx, 25.1, fz); dome.castShadow = true; scene.add(dome);
  const lantern = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.6, 4, 16), stone); lantern.position.set(cx, 35.6, fz); scene.add(lantern);
  const gold = std(0xffc94a, { metalness:1, roughness:0.22, emissive:0x5a3a00, emissiveIntensity:0.5 });
  const boy = new THREE.Group();
  boy.add(new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.6, 0.45).translate(0, 0.8, 0), gold));
  boy.add(new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 10).translate(0, 1.95, 0), gold));
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.3, 0.22).translate(0, 0.65, 0), gold); arm.position.set(0.45, 1.4, 0); arm.rotation.z = -0.3; boy.add(arm);
  const torch = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.6, 8), gold); torch.position.set(0.85, 2.9, 0); boy.add(torch);
  const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 1.2, 0.25).translate(0, -0.6, 0), gold); leg1.position.set(-0.15, 0.1, 0); boy.add(leg1);
  const leg2 = leg1.clone(); leg2.position.set(0.2, 0.2, 0); leg2.rotation.x = 0.6; boy.add(leg2);
  boy.position.set(cx, 38.3, fz); boy.scale.setScalar(1.4); scene.add(boy);
  // flags
  for(const s of [-1, 1]){
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 12, 6), std(0xdddddd, { metalness:0.8 })); pole.position.set(cx + s * 16, 6.1, cz - 26); scene.add(pole);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.5), std(s < 0 ? 0xd7263d : 0x1f4fbf, { side:THREE.DoubleSide })); flag.position.set(cx + s * 16 + 1.3, 11.2, cz - 26); scene.add(flag);
  }
  LM.addCol(cx - 22, cx + 22, fz - 8, fz + 8);
  LM.addCol(cx - 26, cx - 14, fz - 13, fz + 21);
  LM.addCol(cx + 14, cx + 26, fz - 13, fz + 21);
  LM.addCol(cx - 9.5, cx + 9.5, fz - 10.5, fz - 8);
  enterable(LM, cx - 22, cx + 22, fz - 10.5, fz + 8, 15, { x:cx, z:fz - 10.6, nx:0, nz:-1 });
}

function landmarkForks(LM, cx, cz){
  const { scene } = LM;
  const plaza = new THREE.Mesh(new THREE.PlaneGeometry(58, 58).rotateX(-Math.PI / 2), std(0xb9a58c, { roughness:0.95 }));
  plaza.position.set(cx, 0.14, cz); plaza.receiveShadow = true; scene.add(plaza);
  const brick = std(0x8b4a32, { roughness:0.9 });
  const roofM = std(0x3a3f44, { roughness:0.7 });
  // two old stable/market buildings with pitched roofs + a tower
  for(const [x, z] of [[cx - 10, cz - 12], [cx - 10, cz + 6]]){
    box(scene, 30, 9, 13, brick, x, 0.13, z);
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 8, 30, 3, 1).rotateZ(Math.PI / 2), roofM);
    roof.scale.set(1, 1, 0.6); roof.rotation.x = Math.PI; roof.position.set(x, 11.4, z); roof.castShadow = true; scene.add(roof);
    LM.addCol(x - 15, x + 15, z - 6.5, z + 6.5);
  }
  box(scene, 6, 24, 6, brick, cx + 10, 0.13, cz - 3);
  const clock = new THREE.Mesh(new THREE.CircleGeometry(1.8, 24), std(0xf2f2f2, { emissive:0xffffff, emissiveIntensity:0.3 }));
  clock.position.set(cx + 10, 20, cz - 6.05); clock.rotation.y = Math.PI; scene.add(clock);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(4.6, 5, 4), roofM); cap.rotation.y = Math.PI / 4; cap.position.set(cx + 10, 26.7, cz - 3); scene.add(cap);
  LM.addCol(cx + 7, cx + 13, cz - 6, cz);
  enterable(LM, cx - 25, cx + 5, cz - 18.5, cz - 5.5, 9, { x:cx - 10, z:cz - 18.6, nx:0, nz:-1 });
  // colourful WINNIPEG letters by the river
  const letters = 'WINNIPEG';
  const cols = ['#ff2e63', '#ff8c1a', '#ffd23f', '#4ade80', '#18c0c0', '#1f6feb', '#a855f7', '#ff5e3a'];
  for(let i = 0; i < letters.length; i++){
    const tex = signTex(letters[i], cols[i], '#ffffff', 128, 128, 'bold 110px sans-serif');
    const m = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 0.7), [std(cols[i]), std(cols[i]), std(cols[i]), std(cols[i]),
      new THREE.MeshStandardMaterial({ map:tex }), new THREE.MeshStandardMaterial({ map:tex })]);
    m.position.set(cx + 4 + i * 2.7 - 9, 1.75, cz + 22); m.castShadow = true; scene.add(m);
  }
  LM.addCol(cx - 7, cx + 15, cz + 21.4, cz + 22.6);
}

function landmarkMuseum(LM, cx, cz){
  const { scene } = LM;
  const stone = std(0x7c6a58, { roughness:0.9 });
  // stone "roots" — curved low walls
  for(let i = 0; i < 4; i++){
    const r = 14 + i * 3;
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(r, r + 1.5, 6 - i, 36, 1, false, i * 0.6, Math.PI * 1.1), stone);
    ring.position.set(cx, 0.13 + (6 - i) / 2, cz); ring.castShadow = true; scene.add(ring);
  }
  // glass "cloud"
  const glassM = std(0xb8d6ea, { metalness:0.9, roughness:0.05, transparent:true, opacity:0.9, envMapIntensity:1.6 });
  const cloud = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 18), glassM);
  cloud.scale.set(18, 12, 13); cloud.position.set(cx - 2, 12, cz); cloud.castShadow = true; scene.add(cloud);
  box(scene, 26, 10, 22, std(0x4a4f55, { roughness:0.6 }), cx, 0.13, cz);
  // tower of hope
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 3.4, 70, 12), glassM);
  tower.position.set(cx + 8, 35, cz + 2); tower.castShadow = true; scene.add(tower);
  const beaconM = std(0xffffff, { emissive:0xffffff, emissiveIntensity:1.2 });
  const beacon = new THREE.Mesh(new THREE.SphereGeometry(1.5, 14, 10), beaconM); beacon.position.set(cx + 8, 70.5, cz + 2); scene.add(beacon);
  LM.glowMats.push({ mat:beaconM, base:1.2, night:3 });
  LM.addCol(cx - 13, cx + 13, cz - 11, cz + 11);
  enterable(LM, cx - 13, cx + 13, cz - 11, cz + 11, 10, { x:cx, z:cz - 11, nx:0, nz:-1 });
}

function landmarkMansion(LM, cx, cz){
  const { scene } = LM;
  const lawn = new THREE.Mesh(new THREE.PlaneGeometry(58, 58).rotateX(-Math.PI / 2), std(0x3f7a33, { roughness:1 }));
  lawn.position.set(cx, 0.14, cz); lawn.receiveShadow = true; scene.add(lawn);
  const white = std(0xf1ede4, { roughness:0.6 });
  // house
  box(scene, 30, 10, 16, white, cx, 0.13, cz + 6);
  box(scene, 12, 13, 18, white, cx, 0.13, cz + 6);
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 10, 32, 4, 1).rotateZ(Math.PI / 2).rotateY(0), std(0x22252b));
  roof.scale.set(1, 0.5, 0.9); roof.position.set(cx, 12.6, cz + 6); roof.rotation.x = Math.PI / 4; scene.add(roof);
  for(let i = 0; i < 4; i++){ const col = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 9, 12), white); col.position.set(cx - 4.5 + i * 3, 4.6, cz - 3.2); col.castShadow = true; scene.add(col); }
  box(scene, 13, 1, 3, white, cx, 9.1, cz - 3);
  // pool
  const pool = new THREE.Mesh(new THREE.PlaneGeometry(12, 6).rotateX(-Math.PI / 2), std(0x18a0d8, { roughness:0.05, metalness:0.2, emissive:0x0a3a5a, emissiveIntensity:0.4 }));
  pool.position.set(cx + 16, 0.16, cz - 14); scene.add(pool);
  // gold E over the door — it's Emerald's place
  const emblem = new THREE.Mesh(new THREE.PlaneGeometry(3, 3), new THREE.MeshStandardMaterial({ map:signTex('E', '#0f9d58', '#ffd23f', 128, 128, 'bold 100px serif'), emissive:0x0f9d58, emissiveIntensity:0.3 }));
  emblem.position.set(cx, 10.5, cz - 3.05); emblem.rotation.y = Math.PI; scene.add(emblem);
  // compound walls with a gate on the north side
  const wallM = std(0xcfc8b8, { roughness:0.8 });
  const h = 2.6, o = 27;
  box(scene, 54, h, 0.6, wallM, cx, 0.13, cz + o); LM.addCol(cx - 27, cx + 27, cz + o - 0.3, cz + o + 0.3);
  box(scene, 0.6, h, 54, wallM, cx - o, 0.13, cz); LM.addCol(cx - o - 0.3, cx - o + 0.3, cz - 27, cz + 27);
  box(scene, 0.6, h, 54, wallM, cx + o, 0.13, cz); LM.addCol(cx + o - 0.3, cx + o + 0.3, cz - 27, cz + 27);
  box(scene, 21, h, 0.6, wallM, cx - 16.5, 0.13, cz - o); LM.addCol(cx - 27, cx - 6, cz - o - 0.3, cz - o + 0.3);
  box(scene, 21, h, 0.6, wallM, cx + 16.5, 0.13, cz - o); LM.addCol(cx + 6, cx + 27, cz - o - 0.3, cz - o + 0.3);
  LM.addCol(cx - 15, cx + 15, cz - 2, cz + 14);
  enterable(LM, cx - 15, cx + 15, cz - 2, cz + 14, 10, { x:cx, z:cz - 2, nx:0, nz:-1 });
}

function landmarkHospital(LM, cx, cz){
  const { scene } = LM;
  const white = std(0xe8ecef, { roughness:0.5 });
  box(scene, 40, 26, 26, white, cx, 0.13, cz);
  box(scene, 18, 8, 10, white, cx - 8, 0.13, cz + 18);
  // window bands
  const band = std(0x2c4a63, { metalness:0.6, roughness:0.15 });
  for(let f = 0; f < 6; f++) box(scene, 40.2, 1.4, 26.2, band, cx, 3.2 + f * 3.8, cz, false);
  const cross = signTex('H', '#d7263d', '#ffffff', 128, 128, 'bold 110px sans-serif');
  for(const [x, z, ry] of [[cx, cz - 13.05, Math.PI], [cx + 20.05, cz, Math.PI / 2]]){
    const s = new THREE.Mesh(new THREE.PlaneGeometry(5, 5), new THREE.MeshStandardMaterial({ map:cross, emissive:0xffffff, emissiveMap:cross, emissiveIntensity:0.5 }));
    s.position.set(x, 22, z); s.rotation.y = ry; scene.add(s);
  }
  LM.addCol(cx - 20, cx + 20, cz - 13, cz + 13);
  LM.addCol(cx - 17, cx + 1, cz + 13, cz + 23);
  enterable(LM, cx - 20, cx + 20, cz - 13, cz + 13, 26, { x:cx + 20, z:cz, nx:1, nz:0 });
}

// Police HQ: concrete block with a blue stripe, lit POLICE signs, a flag,
// and a side lot with three parked cruisers. Busted players respawn curbside.
function landmarkStation(LM, cx, cz){
  const { scene } = LM;
  const concrete = std(0x9aa3ad, { roughness:0.7 });
  const dark = std(0x2b3440, { roughness:0.6 });
  const glass = std(0x1d3a55, { metalness:0.7, roughness:0.15 });
  const plaza = new THREE.Mesh(new THREE.PlaneGeometry(56, 56).rotateX(-Math.PI / 2), std(0x6b7076, { roughness:1 }));
  plaza.position.set(cx, 0.12, cz); plaza.receiveShadow = true; scene.add(plaza);
  // HQ block
  box(scene, 34, 13, 20, concrete, cx - 6, 0.12, cz - 8);
  box(scene, 34.2, 1.6, 20.2, std(0x1d4fd8, { roughness:0.5, emissive:0x1d4fd8, emissiveIntensity:0.25 }), cx - 6, 8.2, cz - 8, false);
  // glass entrance (faces +x, toward the road) + canopy
  box(scene, 0.6, 6, 10, glass, cx + 11.2, 0.12, cz - 8, false);
  box(scene, 6, 0.5, 12, dark, cx + 13.5, 5.6, cz - 8);
  for(const col of [-4, 4]){ const c = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 5.6, 10), dark); c.position.set(cx + 15.5, 2.9, cz - 8 + col); c.castShadow = true; scene.add(c); }
  // lit POLICE signs, front and back
  const sign = signTex('POLICE', '#0b1e3a', '#ffffff');
  for(const [x, ry] of [[cx + 11.35, Math.PI / 2], [cx - 23.35, -Math.PI / 2]]){
    const s = new THREE.Mesh(new THREE.PlaneGeometry(14, 2.6),
      new THREE.MeshStandardMaterial({ map:sign, emissive:0xffffff, emissiveMap:sign, emissiveIntensity:0.55 }));
    s.position.set(x, 10.6, cz - 8); s.rotation.y = ry; scene.add(s);
  }
  // flag pole
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 9, 8), dark);
  pole.position.set(cx + 8, 4.6, cz + 14); pole.castShadow = true; scene.add(pole);
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.6), std(0x1d4fd8, { side:THREE.DoubleSide, roughness:0.9 }));
  flag.position.set(cx + 9.4, 8.2, cz + 14); scene.add(flag);
  // cruiser lot
  const lot = new THREE.Mesh(new THREE.PlaneGeometry(24, 18).rotateX(-Math.PI / 2), std(0x3c4046, { roughness:1 }));
  lot.position.set(cx - 14, 0.13, cz + 16); lot.receiveShadow = true; scene.add(lot);
  const stripeM = std(0xd8d8d8, { roughness:1 });
  for(let i = 0; i < 3; i++){
    const st = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 7).rotateX(-Math.PI / 2), stripeM);
    st.position.set(cx - 22 + i * 8, 0.14, cz + 16); scene.add(st);
    const cruiser = buildCar('police', [0x14161c, 0xf2f2f2, 0x1a3a6b][i]);
    cruiser.position.set(cx - 22 + i * 8, 0, cz + 16); cruiser.rotation.y = Math.PI / 2;
    scene.add(cruiser);
  }
  LM.addCol(cx - 23, cx + 11, cz - 18, cz + 2);        // HQ block
  LM.addCol(cx - 26, cx - 2, cz + 7, cz + 25);         // cruiser lot
  LM.addCol(cx + 7.6, cx + 8.4, cz + 13.6, cz + 14.4); // flag pole
  LM.addCol(cx + 15.2, cx + 15.8, cz - 12.4, cz - 3.6); // canopy columns
}

function landmarkPark(LM, cx, cz){
  const { scene, rand } = LM;
  const lawn = new THREE.Mesh(new THREE.PlaneGeometry(58, 58).rotateX(-Math.PI / 2), std(0x4f8a3e, { roughness:1 }));
  lawn.position.set(cx, 0.14, cz); lawn.receiveShadow = true; scene.add(lawn);
  const path = std(0xc8b99a, { roughness:1 });
  for(const r of [0, Math.PI / 2]){ const p = new THREE.Mesh(new THREE.PlaneGeometry(58, 3).rotateX(-Math.PI / 2), path); p.rotation.z = 0; p.rotateY(r); p.position.set(cx, 0.15, cz); scene.add(p); }
  const fountain = new THREE.Mesh(new THREE.CylinderGeometry(5, 5.4, 1, 28), std(0xb8b4ac)); fountain.position.set(cx, 0.6, cz); scene.add(fountain);
  const water = new THREE.Mesh(new THREE.CircleGeometry(4.6, 28).rotateX(-Math.PI / 2), std(0x3aa0c8, { roughness:0.05, metalness:0.3 })); water.position.set(cx, 1.12, cz); scene.add(water);
  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.6, 3, 10), std(0xb8b4ac)); spout.position.set(cx, 2.5, cz); scene.add(spout);
  LM.addCol(cx - 5.2, cx + 5.2, cz - 5.2, cz + 5.2);
  LM.parkTrees = [];
  for(let i = 0; i < 22; i++){
    const a = rand() * Math.PI * 2, r = 9 + rand() * 18;
    const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
    if(Math.abs(x - cx) < 2.5 || Math.abs(z - cz) < 2.5) continue;
    LM.parkTrees.push([x, z, 1 + rand() * 0.4]);
  }
}

function parkingLot(LM, cx, cz){
  const { scene } = LM;
  const slab = new THREE.Mesh(new THREE.PlaneGeometry(BLOCK, BLOCK).rotateX(-Math.PI / 2), std(0x34373c, { roughness:0.95 }));
  slab.position.set(cx, 0.14, cz); slab.receiveShadow = true; scene.add(slab);
  const lineGeo = new THREE.BoxGeometry(0.14, 0.02, 5.6);
  const lineMat = std(0xe8eaec);
  const lines = new THREE.InstancedMesh(lineGeo, lineMat, 60);
  let li = 0;
  for(const rz of [-12, 0, 12]) for(let b = 0; b <= 15; b++) if(li < 60) setInst(lines, li++, cx - 24 + b * 3.2, 0.16, cz + rz, 0, 1, 1, 1);
  lines.count = li; lines.instanceMatrix.needsUpdate = true; scene.add(lines);
}

function buildRivers(LM){
  const { scene } = LM;
  const nTex = waterNormal(); nTex.wrapS = nTex.wrapT = THREE.RepeatWrapping; nTex.repeat.set(30, 30);
  const mat = new THREE.MeshStandardMaterial({ color:0x35585a, roughness:0.12, metalness:0.35, normalMap:nTex, normalScale:new THREE.Vector2(0.7, 0.7), envMapIntensity:1.4 });
  const bankM = std(0x6b5a44, { roughness:1 });
  const stoneM = std(0x9a958c, { roughness:0.9 });
  const ZN = RIVER_ZN, ZS = RIVER_ZS, XW = ASSINI_XW;
  // Red River (north-south)
  const redLen = ZS - ZN;
  const red = new THREE.Mesh(new THREE.PlaneGeometry(RED_RIVER.maxX - RED_RIVER.minX, redLen).rotateX(-Math.PI / 2), mat);
  red.position.set((RED_RIVER.minX + RED_RIVER.maxX) / 2, 0.08, (ZN + ZS) / 2); scene.add(red);
  // Assiniboine (west-east)
  const assLen = RED_RIVER.minX - XW;
  const ass = new THREE.Mesh(new THREE.PlaneGeometry(assLen, ASSINIBOINE.maxZ - ASSINIBOINE.minZ).rotateX(-Math.PI / 2), mat);
  ass.position.set((XW + RED_RIVER.minX) / 2, 0.08, (ASSINIBOINE.minZ + ASSINIBOINE.maxZ) / 2); scene.add(ass);
  // muddy banks + stone river walk on the city side
  const bank = (w, d, x, z) => { const b = new THREE.Mesh(new THREE.PlaneGeometry(w, d).rotateX(-Math.PI / 2), bankM); b.position.set(x, 0.07, z); scene.add(b); };
  bank(6, redLen, RED_RIVER.minX - 1, (ZN + ZS) / 2); bank(6, redLen, RED_RIVER.maxX + 1, (ZN + ZS) / 2);
  bank(assLen, 6, (XW + RED_RIVER.minX) / 2, ASSINIBOINE.minZ - 1); bank(assLen + 80, 6, (XW + RED_RIVER.maxX) / 2, ASSINIBOINE.maxZ + 1);
  const walkW = new THREE.Mesh(new THREE.BoxGeometry(3, 0.5, redLen), stoneM); walkW.position.set(RED_RIVER.minX - 4.5, 0.25, (ZN + ZS) / 2); walkW.receiveShadow = true; scene.add(walkW);
  // rivers are open: drive (or wade) in if you dare — deep water slows you to a crawl
  let t = 0;
  return { update(dt){ t += dt; nTex.offset.set(t * 0.004, -t * 0.012); } };
}

function buildBridge(LM){
  const { scene } = LM;
  const x0 = RED_RIVER.minX - 4, x1 = RED_RIVER.maxX + 4, len = x1 - x0, mid = (x0 + x1) / 2;
  const deckM = std(0x8f9296, { roughness:0.7 });
  const roadTex = asphaltTexture(); roadTex.wrapS = roadTex.wrapT = THREE.RepeatWrapping; roadTex.repeat.set(len / 8, 2);
  const deck = new THREE.Mesh(new THREE.BoxGeometry(len, 0.6, BRIDGE_HALF * 2 + 4), deckM);
  deck.position.set(mid, -0.24, BRIDGE_Z); deck.receiveShadow = true; deck.castShadow = true; scene.add(deck);
  const top = new THREE.Mesh(new THREE.PlaneGeometry(len, ROAD_W).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map:roadTex, roughness:0.88 }));
  top.position.set(mid, 0.075, BRIDGE_Z); top.receiveShadow = true; scene.add(top);
  // rails (colliders keep you on the deck)
  const railM = std(0xd9dde2, { metalness:0.8, roughness:0.3 });
  for(const s of [-1, 1]){
    box(scene, len, 1.1, 0.25, railM, mid, 0.07, BRIDGE_Z + s * (BRIDGE_HALF + 1.5));
    LM.addCol(x0 + 4, x1 - 4, BRIDGE_Z + s * (BRIDGE_HALF + 1.5) - 0.2, BRIDGE_Z + s * (BRIDGE_HALF + 1.5) + 0.2);
  }
  // single leaning pylon with fanned cables (cable-stayed look)
  const pyM = std(0xeef0f2, { roughness:0.4, metalness:0.3 });
  const pylon = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.3, 58, 10).translate(0, 29, 0), pyM);
  pylon.position.set(mid, 0, BRIDGE_Z - BRIDGE_HALF - 2.4); pylon.rotation.z = -0.08; pylon.castShadow = true; scene.add(pylon);
  const tip = new THREE.Vector3(mid - Math.sin(0.08) * 57, 57, BRIDGE_Z - BRIDGE_HALF - 2.4);
  const pts = [];
  for(let i = 1; i <= 7; i++) for(const s of [-1, 1]){
    const ax = mid + s * i * (len / 16), az = BRIDGE_Z - BRIDGE_HALF - 1.4;
    pts.push(tip.x, tip.y - i * 2.2, tip.z, ax, 0.6, az);
  }
  const cg = new THREE.BufferGeometry(); cg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  scene.add(new THREE.LineSegments(cg, new THREE.LineBasicMaterial({ color:0xdfe3e8 })));
  // link roads from the city edge to the bridge and on to the drag strip
  const rTex = roadTexture(); rTex.wrapS = rTex.wrapT = THREE.RepeatWrapping;
  const linkA0 = GRID_HALF, linkA1 = x0, linkB0 = x1, linkB1 = STRIP_X;
  for(const [a, b] of [[linkA0, linkA1], [linkB0, linkB1]]){
    const t = rTex.clone(); t.needsUpdate = true; t.repeat.set(1, (b - a) / (ROAD_W * 2));
    const r = new THREE.Mesh(new THREE.PlaneGeometry(ROAD_W, b - a).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map:t, roughness:0.88 }));
    r.rotation.y = Math.PI / 2; r.position.set((a + b) / 2, 0.05, BRIDGE_Z); r.receiveShadow = true; scene.add(r);
  }
  // cathedral ruin facade across the river (St. Boniface)
  const stone = std(0xc2b8a3, { roughness:0.9 });
  const cx = RED_RIVER.maxX + 30, cz = BRIDGE_Z + 70;
  const facade = new THREE.Shape();
  facade.moveTo(-14, 0); facade.lineTo(14, 0); facade.lineTo(14, 22); facade.lineTo(0, 30); facade.lineTo(-14, 22); facade.closePath();
  const hole = new THREE.Path(); hole.absarc(0, 17, 6, 0, Math.PI * 2, true); facade.holes.push(hole);
  const door = new THREE.Path(); door.moveTo(-3, 0.5); door.lineTo(3, 0.5); door.lineTo(3, 7); door.absarc(0, 7, 3, 0, Math.PI, false); door.lineTo(-3, 0.5); facade.holes.push(door);
  const fm = new THREE.Mesh(new THREE.ExtrudeGeometry(facade, { depth:2, bevelEnabled:false }), stone);
  fm.position.set(cx, 0, cz); fm.rotation.y = -Math.PI / 2; fm.castShadow = true; scene.add(fm);
  LM.addCol(cx - 1, cx + 2.5, cz - 14, cz + 14);
}

function buildDragStrip(LM){
  const { scene } = LM;
  const len = STRIP_HALF * 2;
  const tex = roadTexture(); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(1, len / 18);
  const strip = new THREE.Mesh(new THREE.PlaneGeometry(9, len).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map:tex, roughness:0.9 }));
  strip.position.set(STRIP_X, 0.05, 0); strip.receiveShadow = true; scene.add(strip);
  const start = new THREE.Mesh(new THREE.PlaneGeometry(9, 1.6).rotateX(-Math.PI / 2), std(0xf2f4f6)); start.position.set(STRIP_X, 0.07, STRIP_HALF - 8); scene.add(start);
  const barGeo = new THREE.BoxGeometry(4, 1.1, 0.7).translate(0, 0.55, 0);
  const n = Math.floor(len / 9) * 2;
  const bars = new THREE.InstancedMesh(barGeo, std(0xffffff, { roughness:0.6 }), n);
  const c = new THREE.Color();
  let bi = 0;
  for(let d = -STRIP_HALF + 4; d <= STRIP_HALF - 4 && bi < n; d += 9) for(const s of [-1, 1]){
    setInst(bars, bi, STRIP_X + s * (4.5 + 1.6), 0.05, d, 0, 1, 1, 1);
    c.setHex(bi % 2 ? 0xf2f4f6 : 0xe8641e); bars.setColorAt(bi, c); bi++;
  }
  bars.count = bi; bars.instanceMatrix.needsUpdate = true; bars.instanceColor.needsUpdate = true; bars.castShadow = true;
  scene.add(bars);
  return { startX:STRIP_X, startZ:STRIP_HALF - 8, dirX:0, dirZ:-1, length:len };
}

function buildParkedCars(LM, reserved){
  const { scene, rand } = LM;
  // a generic sedan silhouette for parked cars (instanced: body tinted, glass/wheels dark)
  const prof = new THREE.Shape();
  const P = [[2.25, 0.35], [2.28, 0.62], [1.4, 0.78], [0.6, 0.82], [-1.5, 0.84], [-2.2, 0.76], [-2.28, 0.4], [-2.0, 0.28], [2.0, 0.28]];
  prof.moveTo(P[0][0], P[0][1]); for(const p of P.slice(1)) prof.lineTo(p[0], p[1]); prof.closePath();
  const body = new THREE.ExtrudeGeometry(prof, { depth:1.78, bevelEnabled:true, bevelThickness:0.05, bevelSize:0.05, bevelSegments:2 });
  body.translate(0, 0, -0.89); body.rotateY(Math.PI / 2);
  const gp = new THREE.Shape(); const G = [[0.62, 0.8], [0.25, 1.28], [-1.05, 1.3], [-1.5, 0.84]];
  gp.moveTo(G[0][0], G[0][1]); for(const p of G.slice(1)) gp.lineTo(p[0], p[1]); gp.closePath();
  const glass = new THREE.ExtrudeGeometry(gp, { depth:1.56, bevelEnabled:false }); glass.translate(0, 0, -0.78); glass.rotateY(Math.PI / 2);
  const wheels = [];
  for(const sx of [-0.82, 0.82]) for(const sz of [-1.38, 1.38]) wheels.push(new THREE.CylinderGeometry(0.33, 0.33, 0.24, 14).rotateZ(Math.PI / 2).translate(sx, 0.33, sz));
  const dark = mergeGeometries([glass, ...wheels]);
  // Forge 3D parked cars: three real body styles (sedan / SUV / coupe) instead of one extruded silhouette
  const shapes = [{ body, dark }];
  if(USE_FORGE){
    for(const id of ['sedan', 'suv', 'sport']){
      const g = forgeParkedGeometry(id);
      if(g && g.paint && g.dark) shapes.push({ body:g.paint, dark:g.dark });
    }
    if(shapes.length > 1) shapes.shift();          // drop the classic silhouette when Forge built fine
  }
  const spots = [];
  const roadLen = BLOCKS * PITCH + ROAD_W;
  for(const c of LINES){
    for(const s of [-1, 1]){
      for(let d = -roadLen / 2 + 14; d < roadLen / 2 - 14; d += 6.4){
        if(LINES.some(l => Math.abs(l - d) < 14)) continue;
        if(rand() < 0.62) continue;
        // N-S road: cars at x = c + s*6, facing along z;  E-W road: z = c + s*6
        if(rand() < 0.5) spots.push([c + s * 5.9, d, s > 0 ? Math.PI : 0]);
        else spots.push([d, c + s * 5.9, s > 0 ? -Math.PI / 2 : Math.PI / 2]);
      }
    }
  }
  const keep = spots.filter(([x, z]) => !hitsReserved(reserved, x - 3, x + 3, z - 3, z + 3) && !(Math.abs(x - (LINES[5] + LANE)) < 8 && z > 60 && z < 200));
  const bodyMat = new THREE.MeshPhysicalMaterial({ color:0xffffff, metalness:0.55, roughness:0.32, clearcoat:1, clearcoatRoughness:0.1, side:THREE.DoubleSide });
  const darkMat = new THREE.MeshStandardMaterial({ color:0x111418, metalness:0.6, roughness:0.25, side:THREE.DoubleSide });
  const cols = [0xc01818, 0x1a5fd0, 0xf2f2f2, 0x14161c, 0x6b7280, 0x2d6a4f, 0xc7a008, 0x7a1010, 0xd9d9d9, 0x0d2a6b];
  const col = new THREE.Color();
  const byShape = shapes.map(() => []);
  keep.forEach((k, i) => byShape[(rand() * shapes.length) | 0].push(k));
  shapes.forEach((sh, si) => {
    const list = byShape[si]; if(!list.length) return;
    const bodies = new THREE.InstancedMesh(sh.body, bodyMat, list.length);
    const darks = new THREE.InstancedMesh(sh.dark, darkMat, list.length);
    list.forEach(([x, z, r], i) => {
      setInst(bodies, i, x, 0, z, r, 1, 1, 1); setInst(darks, i, x, 0, z, r, 1, 1, 1);
      col.setHex(cols[(rand() * cols.length) | 0]); bodies.setColorAt(i, col);
      const along = Math.abs(Math.sin(r)) > 0.5;           // rotated to run along x
      if(along) LM.addCol(x - 2.3, x + 2.3, z - 1, z + 1); else LM.addCol(x - 1, x + 1, z - 2.3, z + 2.3);
    });
    bodies.instanceMatrix.needsUpdate = true; darks.instanceMatrix.needsUpdate = true; bodies.instanceColor.needsUpdate = true;
    bodies.castShadow = true; bodies.receiveShadow = true;
    scene.add(bodies, darks);
  });
}

function buildFurniture(LM, blocks, reserved){
  const { scene, rand } = LM;
  const shelters = [], benches = [], hydrants = [], bins = [];
  for(const b of blocks){
    if(b.special === 'parking') continue;
    for(let side = 0; side < 4; side++){
      const o = BLOCK / 2 - 2.6;
      const t = (rand() - 0.5) * 30;
      const [x, z, r] = side === 0 ? [b.cx + t, b.cz - o, 0] : side === 1 ? [b.cx + o, b.cz + t, Math.PI / 2] : side === 2 ? [b.cx + t, b.cz + o, Math.PI] : [b.cx - o, b.cz + t, -Math.PI / 2];
      if(hitsReserved(reserved, x - 2, x + 2, z - 2, z + 2)) continue;
      const k = rand();
      if(k < 0.18) shelters.push([x, z, r]); else if(k < 0.45) benches.push([x, z, r]); else if(k < 0.7) bins.push([x, z, r]);
      if(rand() < 0.4) hydrants.push([b.cx + (side % 2 ? (side === 1 ? 1 : -1) * (BLOCK / 2 - 1) : (rand() - 0.5) * 40), b.cz + (side % 2 ? (rand() - 0.5) * 40 : (side === 0 ? -1 : 1) * (BLOCK / 2 - 1)), 0]);
    }
  }
  const make = (geo, mat, list, cast = true) => {
    const m = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length));
    list.forEach(([x, z, r], i) => setInst(m, i, x, 0.13, z, r, 1, 1, 1));
    m.count = list.length; m.instanceMatrix.needsUpdate = true; m.castShadow = cast; scene.add(m);
  };
  // transit shelter: frame + roof + glass back
  const shelterGeo = mergeGeometries([
    new THREE.BoxGeometry(3.6, 0.12, 1.6).translate(0, 2.5, 0),
    ...[[-1.7, -0.7], [1.7, -0.7], [-1.7, 0.7], [1.7, 0.7]].map(([a, b]) => new THREE.BoxGeometry(0.08, 2.5, 0.08).translate(a, 1.25, b)),
    new THREE.BoxGeometry(2.6, 0.08, 0.4).translate(0, 0.5, 0.45),
  ]);
  make(shelterGeo, std(0x1f4f9f, { metalness:0.6, roughness:0.4 }), shelters);
  const glassM = new THREE.MeshStandardMaterial({ color:0x9fc9e8, transparent:true, opacity:0.35, roughness:0.05, metalness:0.5 });
  make(new THREE.PlaneGeometry(3.4, 2.2).translate(0, 1.3, 0.72), glassM, shelters, false);
  const benchGeo = mergeGeometries([new THREE.BoxGeometry(1.8, 0.08, 0.5).translate(0, 0.48, 0), new THREE.BoxGeometry(1.8, 0.45, 0.07).translate(0, 0.8, 0.24),
    new THREE.BoxGeometry(0.08, 0.48, 0.45).translate(-0.8, 0.24, 0), new THREE.BoxGeometry(0.08, 0.48, 0.45).translate(0.8, 0.24, 0)]);
  make(benchGeo, std(0x6b4a2e), benches);
  make(mergeGeometries([new THREE.CylinderGeometry(0.17, 0.2, 0.75, 10).translate(0, 0.37, 0), new THREE.SphereGeometry(0.19, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2).translate(0, 0.75, 0),
    new THREE.CylinderGeometry(0.06, 0.06, 0.5, 6).rotateZ(Math.PI / 2).translate(0, 0.5, 0)]), std(0xc8202a, { roughness:0.5 }), hydrants);
  make(new THREE.CylinderGeometry(0.3, 0.27, 0.95, 10).translate(0, 0.47, 0), std(0x2d4f3a, { roughness:0.7 }), bins);
}

function buildStreetSigns(LM){
  const { scene } = LM;
  const signMat = name => {
    const c = document.createElement('canvas'); c.width = 256; c.height = 48;
    const g = c.getContext('2d'); g.fillStyle = '#0e6b3a'; g.fillRect(0, 0, 256, 48);
    g.strokeStyle = '#fff'; g.lineWidth = 3; g.strokeRect(3, 3, 250, 42);
    g.fillStyle = '#fff'; g.font = 'bold 28px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(name, 128, 26);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
    return new THREE.MeshStandardMaterial({ map:t, side:THREE.DoubleSide });
  };
  const poleM = std(0x3a3f45, { metalness:0.6 });
  const mats = {};
  const get = n => mats[n] || (mats[n] = signMat(n));
  // one sign post per intersection corner (NE), showing both street names
  for(let ix = 0; ix < LINES.length; ix++) for(let iz = 0; iz < LINES.length; iz++){
    if(ix !== 7 && iz !== 4 && !(ix % 3 === 1 && iz % 3 === 1)) continue;     // Main St, Portage Ave + a few others
    const x = LINES[ix] + ROAD_W / 2 + 1.0, z = LINES[iz] - ROAD_W / 2 - 1.0;
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 3.4, 6), poleM); pole.position.set(x, 1.82, z); scene.add(pole);
    const a = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.45), get(NS_NAMES[ix])); a.position.set(x, 3.4, z); a.rotation.y = Math.PI / 2; scene.add(a);
    const b = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.45), get(EW_NAMES[iz])); b.position.set(x, 3.0, z); scene.add(b);
  }
}

// ---------- Prairie Off-Road Park: dirt, mud pits, rocks, trail markers ----------
function buildOffroadPark(LM){
  const { scene } = LM;
  const W = OFFROAD.maxX - OFFROAD.minX, D = OFFROAD.maxZ - OFFROAD.minZ;
  const cx = (OFFROAD.minX + OFFROAD.maxX) / 2, cz = (OFFROAD.minZ + OFFROAD.maxZ) / 2;
  const dirtTex = LM.makeCanvas(256, 256, (g, w, h) => {
    noiseFill(g, w, h, '#7a5b3c', 0.22, 9000, 2);
    g.strokeStyle = 'rgba(60,40,22,0.35)'; g.lineWidth = 3;
    for(let i = 0; i < 18; i++){ g.beginPath(); const y = Math.random() * h; g.moveTo(0, y); g.bezierCurveTo(w * 0.3, y + 20, w * 0.6, y - 20, w, y + 6); g.stroke(); }
  });
  dirtTex.wrapS = dirtTex.wrapT = THREE.RepeatWrapping; dirtTex.repeat.set(W / 16, D / 16);
  const dirt = new THREE.Mesh(new THREE.PlaneGeometry(W, D).rotateX(-Math.PI / 2), std(0xffffff, { map:dirtTex, roughness:1 }));
  dirt.position.set(cx, 0.025, cz); dirt.receiveShadow = true; scene.add(dirt);
  // mud pits: wet, glossy, dark
  const mudTex = LM.makeCanvas(128, 128, (g, w, h) => noiseFill(g, w, h, '#3d2a1a', 0.3, 3000, 3));
  const mudMat = new THREE.MeshStandardMaterial({ map:mudTex, color:0xffffff, roughness:0.25, metalness:0.15, envMapIntensity:0.9 });
  for(const [x, z, r] of MUD_PITS){
    const m = new THREE.Mesh(new THREE.CircleGeometry(r, 28).rotateX(-Math.PI / 2), mudMat);
    m.position.set(x, 0.035, z); m.receiveShadow = true; scene.add(m);
    const rim = new THREE.Mesh(new THREE.RingGeometry(r, r + 1.6, 28).rotateX(-Math.PI / 2), std(0x5a4128, { roughness:1 }));
    rim.position.set(x, 0.033, z); scene.add(rim);
  }
  // rocks (solid)
  const rockMat = std(0x8a857c, { roughness:0.95, flatShading:true });
  for(const [x, z, sz] of ROCKS){
    const r = new THREE.Mesh(new THREE.DodecahedronGeometry(sz, 0), rockMat);
    r.scale.set(1, 0.65, 1.1); r.rotation.set(LM.rand() * 3, LM.rand() * 3, LM.rand() * 3);
    r.position.set(x, sz * 0.35, z); r.castShadow = r.receiveShadow = true; scene.add(r);
    LM.addCol(x - sz * 0.9, x + sz * 0.9, z - sz * 0.9, z + sz * 0.9);
  }
  // trail markers + hay bales around the loop
  const postMat = std(0xff8c1a), hayMat = std(0xd9b45a, { roughness:1 });
  for(let i = 0; i < 28; i++){
    const a = i / 28 * Math.PI * 2;
    const x = cx + Math.cos(a) * (W * 0.38), z = cz + Math.sin(a) * (D * 0.4);
    box(scene, 0.15, 1.2, 0.15, postMat, x, 0, z, false);
    if(i % 4 === 0){
      const hb = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.75, 1.5, 14).rotateZ(Math.PI / 2), hayMat);
      hb.position.set(x + 3, 0.75, z); hb.castShadow = true; scene.add(hb);
      LM.addCol(x + 2.2, x + 3.8, z - 0.75, z + 0.75);
    }
  }
  // entrance sign facing the city
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(14, 3.5),
    new THREE.MeshStandardMaterial({ map:signTex('PRAIRIE OFF-ROAD PARK', '#2d1d10', '#ffb347', 1024, 256, 'bold 84px sans-serif'), roughness:0.6 }));
  const sz = OFFROAD.minZ + 6;
  sign.position.set((OFFROAD.minX + OFFROAD.maxX) / 2, 5, sz - 2); scene.add(sign);
  for(const s of [-1, 1]) box(scene, 0.4, 5, 0.4, std(0x4a3a2a), (OFFROAD.minX + OFFROAD.maxX) / 2 + s * 6.6, 0, sz - 2);
}
