// Instanced vegetation & rocks: forests, palms, grass fields with wind, flowers, cacti...
import * as THREE from 'three';
import { cyl, place, mergeGeometries, tube } from '../geo/geo.js';
import { preset, Q } from '../render/materials.js';
import { rng, clamp, lerp } from '../core/util.js';
import { wind } from '../core/wind.js';

export const windMaterials = new Set();
// kept for older callers (test pages): the shared wind field now drives everything
export function updateWind(dt) { if (!wind._driven) wind.update(dt); }

// Bends vegetation downwind. The offset is worked out in WORLD space (so every instance leans the same
// way whatever its random yaw) and mapped back into the mesh's local space. Three layers: a steady lean
// that grows with wind speed, gust waves rolling across the field downwind, and a fast leaf flutter.
function windify(m, amount = 1) {
  m.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, wind.uniforms);
    sh.vertexShader = 'uniform float wTime; uniform float wStrength; uniform float wGust; uniform vec2 wDir;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
      {
        mat4 _M = modelMatrix;
        #ifdef USE_INSTANCING
          _M = modelMatrix * instanceMatrix;
        #endif
        vec3 _wp = (_M * vec4(transformed, 1.0)).xyz;
        float _s2 = max(1e-4, dot(_M[1].xyz, _M[1].xyz));
        float _hw = max(position.y, 0.0) * sqrt(_s2);
        float _ph = dot(_wp.xz, wDir) * 0.09 - wTime * (0.7 + wStrength * 0.45);
        float _wave = 0.5 + 0.5 * sin(_ph) * sin(_ph * 0.37 + 1.3);
        float _fl = sin(wTime * (2.6 + wStrength) + _wp.x * 0.9 + _wp.z * 0.7) * 0.6 + sin(wTime * 5.3 + _wp.x * 2.1) * 0.25;
        float _lean = wStrength * (0.55 + _wave * 0.6);
        float _flt = (0.25 + wStrength * 0.35) * _fl;
        vec2 _perp = vec2(-wDir.y, wDir.x);
        vec2 _o = (wDir * (_lean + _flt * 0.5) + _perp * _flt * 0.4) * ${(0.02 * amount).toFixed(4)} * _hw * (_hw + 1.5);
        float _ol = length(_o); if (_ol > _hw * 0.55) _o *= _hw * 0.55 / _ol;
        vec3 _ow = vec3(_o.x, -dot(_o, _o) / max(0.5, _hw) * 0.5, _o.y);
        transformed += (transpose(mat3(_M)) * _ow) / _s2;
      }`);
  };
  m.customProgramCacheKey = () => 'wind2_' + amount;
  windMaterials.add(m); return m;
}

function lumpy(geo, r, amt) { const p = geo.attributes.position; for (let i = 0; i < p.count; i++) { const f = 1 + (r() - 0.5) * amt; p.setXYZ(i, p.getX(i) * f, p.getY(i) * f, p.getZ(i) * f); } geo.computeVertexNormals(); return geo; }

const cache = {};
function kit(kind) {
  if (cache[kind]) return cache[kind];
  const r = rng(kind.length * 31 + 7); const bark = preset('wood', { color: '#7a5a42' });
  const leaf = (c) => windify(new THREE.MeshStandardMaterial({ color: new THREE.Color(c), roughness: 0.85, flatShading: Q.level === 'low' }), 0.6);
  let parts;
  switch (kind) {
    case 'trees': {
      const crown = mergeGeometries([0, 1, 2, 3].map(i => lumpy(new THREE.IcosahedronGeometry(1.3 - i * 0.12, 2), r, 0.35).translate((r() - 0.5) * 1.6, 4 + i * 0.7 + r() * 0.5, (r() - 0.5) * 1.6).toNonIndexed()));
      const trunk = cyl(0.14, 0.24, 4.6, 8); trunk.translate(0, 2.3, 0);
      parts = [[trunk, bark, false], [crown, leaf('#4a7a2e'), true]]; break;
    }
    case 'birch': {
      const crown = mergeGeometries([0, 1, 2].map(i => lumpy(new THREE.IcosahedronGeometry(0.9, 2), r, 0.3).translate((r() - 0.5) * 0.9, 4.5 + i * 0.9, (r() - 0.5) * 0.9).toNonIndexed()));
      const trunk = cyl(0.09, 0.14, 6, 8); trunk.translate(0, 3, 0);
      parts = [[trunk, preset('plaster', { color: '#e8e4dc' }), false], [crown, leaf('#8ab04a'), true]]; break;
    }
    case 'pines': {
      const cones = mergeGeometries([0, 1, 2, 3, 4].map(i => new THREE.ConeGeometry(2.0 - i * 0.35, 2.2, 9).translate(0, 2.2 + i * 1.25, 0).toNonIndexed()));
      const trunk = cyl(0.12, 0.2, 3, 8); trunk.translate(0, 1.5, 0);
      parts = [[trunk, bark, false], [cones, leaf('#2c5230'), true]]; break;
    }
    case 'palms': {
      const trunk = tube([[0, 0, 0], [0.3, 2.5, 0], [0.9, 5, 0], [1.6, 7, 0]], 0.18, 24, 8);
      const fr = []; for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; const pts = [[1.6, 7, 0], [1.6 + Math.cos(a) * 1.6, 7.6, Math.sin(a) * 1.6], [1.6 + Math.cos(a) * 3.0, 6.6, Math.sin(a) * 3.0]]; const g = tube(pts, 0.05, 10, 4); fr.push(g.toNonIndexed()); const blade = new THREE.PlaneGeometry(0.7, 3.2, 1, 6); const p = blade.attributes.position; for (let v = 0; v < p.count; v++) { const y = p.getY(v) + 1.6; p.setY(v, 0); p.setZ(v, y); p.setY(v, -0.12 * y * y); } blade.rotateY(-a + Math.PI / 2); blade.translate(1.6, 7.3, 0); fr.push(blade.toNonIndexed()); }
      const m = leaf('#3f7a2a'); m.side = THREE.DoubleSide;
      parts = [[trunk, preset('wood', { color: '#a08060' }), false], [mergeGeometries(fr.map(g => { for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); return g; })), m, true]]; break;
    }
    case 'deadtrees': {
      const br = [cyl(0.12, 0.22, 4.5, 7).translate(0, 2.25, 0).toNonIndexed()];
      for (let i = 0; i < 6; i++) { const y = 2 + r() * 2.3, a = r() * 6.28; br.push(tube([[0, y, 0], [Math.cos(a) * 0.8, y + 0.6, Math.sin(a) * 0.8], [Math.cos(a) * 1.6, y + 0.9 + r(), Math.sin(a) * 1.6]], 0.05, 8, 5).toNonIndexed()); }
      parts = [[mergeGeometries(br.map(g => { for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); return g; })), preset('wood', { color: '#5a4a3e' }), false]]; break;
    }
    case 'rocks': parts = [[lumpy(new THREE.IcosahedronGeometry(1, 2), r, 0.45).scale(1.2, 0.7, 1).translate(0, 0.35, 0), preset('rock', { repeat: 1 }), false]]; break;
    case 'bushes': parts = [[mergeGeometries([0, 1, 2].map(i => lumpy(new THREE.IcosahedronGeometry(0.6, 2), r, 0.3).translate((r() - 0.5) * 0.8, 0.45, (r() - 0.5) * 0.8).toNonIndexed())), leaf('#4f7a34'), true]]; break;
    case 'cactus': {
      const body = [cyl(0.25, 0.28, 3, 12).translate(0, 1.5, 0).toNonIndexed(), new THREE.SphereGeometry(0.25, 12, 8).translate(0, 3, 0).toNonIndexed(),
        tube([[0.2, 1.3, 0], [0.75, 1.3, 0], [0.75, 2.3, 0]], 0.16, 12, 8).toNonIndexed(), tube([[-0.2, 1.7, 0], [-0.65, 1.7, 0], [-0.65, 2.5, 0]], 0.14, 12, 8).toNonIndexed()];
      parts = [[mergeGeometries(body.map(g => { for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); return g; })), new THREE.MeshStandardMaterial({ color: 0x4f7a3a, roughness: 0.7 }), false]]; break;
    }
    case 'grass': case 'flowers': {
      const bl = []; for (let i = 0; i < 9; i++) { const a = r() * Math.PI, ox = (r() - 0.5) * 0.35, oz = (r() - 0.5) * 0.35, h = 0.35 + r() * 0.35;
        const g = new THREE.BufferGeometry(); const w = 0.035; const pos = [-w, 0, 0, w, 0, 0, 0, h, 0.06]; g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 0.5, 1], 2)); g.computeVertexNormals(); g.rotateY(a); g.translate(ox, 0, oz); bl.push(g); }
      const gm = windify(new THREE.MeshStandardMaterial({ color: 0x5f8a34, roughness: 0.9, side: THREE.DoubleSide }), 2.5);
      parts = [[mergeGeometries(bl), gm, true]];
      if (kind === 'flowers') { const heads = []; for (let i = 0; i < 3; i++) heads.push(new THREE.IcosahedronGeometry(0.05, 0).translate((r() - 0.5) * 0.3, 0.55 + r() * 0.15, (r() - 0.5) * 0.3).toNonIndexed()); parts.push([mergeGeometries(heads), windify(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6 }), 2.5), true, true]); }
      break;
    }
  }
  return cache[kind] = parts;
}

export function buildScatter(o, P, ctx) {
  const g = new THREE.Group(); g.name = 'Scatter';
  const r = rng(P.seed ?? 5); let n = Math.round(P.count ?? 150); const R = P.radius ?? 45;
  const kind = P.kind || 'forest';
  if (Q.level === 'low') n = Math.min(n, kind === 'grass' || kind === 'flowers' ? 1500 : 300);
  const kinds = kind === 'forest' ? ['trees', 'pines', 'birch', 'bushes', 'rocks'] : [kind];
  const buckets = new Map(kinds.map(k => [k, []]));
  const pos = o.position || [0, 0, 0];
  for (let i = 0; i < n; i++) {
    const a = r() * Math.PI * 2, d = Math.sqrt(r()) * R; const x = Math.cos(a) * d, z = Math.sin(a) * d;
    const k = kind === 'forest' ? kinds[Math.min(kinds.length - 1, Math.floor(Math.pow(r(), 1.3) * kinds.length))] : kind;
    let y = 0; if (P.onGround !== false && ctx.groundAt) { const gy = ctx.groundAt(pos[0] + x, pos[2] + z); if (gy != null) y = gy - pos[1]; }
    if (ctx.waterAt && ctx.waterAt(pos[0] + x, pos[2] + z, pos[1] + y) && k !== 'rocks') continue;
    buckets.get(k).push([x, y, z, lerp(P.minScale ?? 0.7, P.maxScale ?? 1.4, r()), r() * Math.PI * 2, r()]);
  }
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0), col = new THREE.Color();
  for (const [k, list] of buckets) {
    if (!list.length) continue;
    for (const [geo, mat, leafy, flower] of kit(k)) {
      const im = new THREE.InstancedMesh(geo, mat, list.length);
      list.forEach(([x, y, z, s, rot, h], i) => {
        q.setFromAxisAngle(up, rot); sv.setScalar(s * (k === 'grass' || k === 'flowers' ? 1.4 : 1)); m4.compose(new THREE.Vector3(x, y - 0.05, z), q, sv); im.setMatrixAt(i, m4);
        if (leafy) { if (flower) col.setHSL(h, 0.75, 0.6); else col.setHSL(0.22 + h * 0.08 + (k === 'trees' ? (h - 0.5) * 0.05 : 0), 0.5 + h * 0.2, 0.75 + h * 0.4); im.setColorAt(i, col); }
      });
      im.castShadow = !(k === 'grass' || k === 'flowers'); im.receiveShadow = true; im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); g.add(im);
    }
    if (['trees', 'pines', 'birch', 'palms', 'deadtrees', 'cactus', 'rocks'].includes(k)) (g.userData.colliders ||= []).push(...list.map(([x, y, z, s]) => ({ c: [x, y + (k === 'rocks' ? 0.4 : 2) * s, z], h: k === 'rocks' ? [1.1 * s, 0.5 * s, 1 * s] : [0.25 * s, 2 * s, 0.25 * s] })));
  }
  g.userData.rebuildOnMove = P.onGround !== false;
  return g;
}

// City Driver: expose the vegetation kit so the game can instance Forge trees with its own materials.
// Returns [[geometry, material, windy], ...] (shared, cached — clone before mutating).
export function natureKit(kind) { return kit(kind); }
