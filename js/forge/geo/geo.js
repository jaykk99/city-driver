// Geometry helpers shared by builders.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
export { mergeGeometries, mergeVertices };

// toNonIndexed() on an already non-indexed geometry just returns it (avoids console spam)
const _tni = THREE.BufferGeometry.prototype.toNonIndexed;
THREE.BufferGeometry.prototype.toNonIndexed = function () { return this.index === null ? this : _tni.call(this); };

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _s = new THREE.Vector3(), _p = new THREE.Vector3();

// Transform a geometry in place: pos [x,y,z], rot [x,y,z] radians, scale number|[x,y,z]
export function place(g, pos = [0, 0, 0], rot = [0, 0, 0], scale = 1) {
  if (!Array.isArray(rot)) rot = [0, 0, 0];
  _e.set(rot[0], rot[1], rot[2]); _q.setFromEuler(_e);
  if (typeof scale === 'number') _s.set(scale, scale, scale); else _s.set(scale[0], scale[1], scale[2]);
  _p.set(pos[0], pos[1], pos[2]); _m.compose(_p, _q, _s); g.applyMatrix4(_m); return g;
}
export const rbox = (w, h, d, r = 0.02, seg = 2) => new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2 - 1e-4, h / 2 - 1e-4, d / 2 - 1e-4));
export const box = (w, h, d) => new THREE.BoxGeometry(w, h, d);
export const cyl = (rt, rb, h, seg = 24, open = false) => new THREE.CylinderGeometry(rt, rb, h, seg, 1, open);
// cylinder along X axis (wheels, axles)
export const cylX = (r, w, seg = 24, open = false) => new THREE.CylinderGeometry(r, r, w, seg, 1, open).rotateZ(Math.PI / 2);
export const cylZ = (r, len, seg = 20, rb = r) => new THREE.CylinderGeometry(r, rb, len, seg).rotateX(Math.PI / 2);
export const sph = (r, ws = 24, hs = 16) => new THREE.SphereGeometry(r, ws, hs);
export const torus = (r, t, rs = 12, ts = 32, arc = Math.PI * 2) => new THREE.TorusGeometry(r, t, rs, ts, arc);

// Tube through points [[x,y,z],...]
export function tube(points, r = 0.02, seg = 32, rs = 8, closed = false) {
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)), closed, 'centripetal', 0.5);
  return new THREE.TubeGeometry(curve, seg, r, rs, closed);
}
// Straight tube segment between two points
export function strut(a, b, r = 0.02, rs = 8) {
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b); const len = A.distanceTo(B);
  const g = new THREE.CylinderGeometry(r, r, len, rs, 1, false);
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), B.clone().sub(A).normalize());
  g.applyQuaternion(q); const mid = A.add(B).multiplyScalar(0.5); g.translate(mid.x, mid.y, mid.z); return g;
}

// Extrude a 2D outline (points in the Z-Y plane: [z, y]) by thickness along X, centered.
export function extrudeZY(pts, thickness, bevel = 0.004, curveSeg = 8) {
  const sh = new THREE.Shape(); sh.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) sh.lineTo(pts[i][0], pts[i][1]);
  sh.closePath();
  const g = new THREE.ExtrudeGeometry(sh, { depth: Math.max(1e-4, thickness - bevel * 2), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: curveSeg });
  // shape is in XY; map X->Z, Y->Y, depth(Z)->X
  g.translate(0, 0, -(thickness - bevel * 2) / 2);
  g.rotateY(-Math.PI / 2);
  return g;
}
// Extrude an arbitrary THREE.Shape (XY) along +Z by depth (centered)
export function extrudeShape(shape, depth, bevel = 0.004, curveSeg = 12) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: Math.max(1e-4, depth - bevel * 2), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: curveSeg });
  g.translate(0, 0, -(depth - bevel * 2) / 2); return g;
}

// Lathe around X axis from profile [[r, x], ...]
export function latheX(profile, seg = 32) {
  const g = new THREE.LatheGeometry(profile.map(([r, x]) => new THREE.Vector2(r, x)), seg);
  g.rotateZ(-Math.PI / 2); return g;
}
export function latheY(profile, seg = 32) { return new THREE.LatheGeometry(profile.map(([r, y]) => new THREE.Vector2(r, y)), seg); }

// Loft: sections along Z. Each station {z, rx, ry, cy, cx?, n?(superellipse exponent)}; returns closed-ish smooth tube capped at the ends.
export function loftZ(stations, radial = 24, capEnds = true) {
  const pos = [], idx = []; const N = stations.length;
  for (let i = 0; i < N; i++) {
    const s = stations[i]; const n = s.n || 2;
    for (let j = 0; j < radial; j++) {
      const t = (j / radial) * Math.PI * 2; const c = Math.cos(t), sn = Math.sin(t);
      const ex = 2 / n; const x = Math.sign(c) * Math.pow(Math.abs(c), ex) * s.rx, y = Math.sign(sn) * Math.pow(Math.abs(sn), ex) * s.ry;
      pos.push((s.cx || 0) + x, (s.cy || 0) + y, s.z);
    }
  }
  for (let i = 0; i < N - 1; i++) for (let j = 0; j < radial; j++) {
    const a = i * radial + j, b = i * radial + (j + 1) % radial, c = (i + 1) * radial + j, d = (i + 1) * radial + (j + 1) % radial;
    idx.push(a, c, b, b, c, d);
  }
  if (capEnds) {
    const c0 = pos.length / 3; const s0 = stations[0]; pos.push(s0.cx || 0, s0.cy || 0, s0.z);
    for (let j = 0; j < radial; j++) idx.push(c0, j, (j + 1) % radial);
    const c1 = pos.length / 3; const sl = stations[N - 1]; pos.push(sl.cx || 0, sl.cy || 0, sl.z); const base = (N - 1) * radial;
    for (let j = 0; j < radial; j++) idx.push(c1, base + (j + 1) % radial, base + j);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}

// NACA 4-digit symmetric-ish airfoil wing: span along +X from x0, chord along Z (leading edge at +z)
export function wingGeometry({ span = 4, rootChord = 1.4, tipChord = 0.9, sweep = 0, dihedral = 0, thickness = 0.12, stations = 10, chordSamples = 14, z0 = 0, y0 = 0, x0 = 0, chordFrom = 0, chordTo = 1, mirror = false }) {
  const pos = [], idx = [];
  const prof = [];
  for (let k = 0; k <= chordSamples; k++) { const t = chordFrom + (chordTo - chordFrom) * (1 - Math.cos((k / chordSamples) * Math.PI)) / 2; prof.push(t); }
  const yt = x => 5 * thickness * (0.2969 * Math.sqrt(x) - 0.126 * x - 0.3516 * x * x + 0.2843 * x ** 3 - 0.1036 * x ** 4);
  const ring = prof.length * 2 - 2;
  for (let i = 0; i <= stations; i++) {
    const s = i / stations; const chord = rootChord + (tipChord - rootChord) * s;
    const tipRound = i === stations ? 0.15 : 1;
    const x = x0 + span * s; const le = z0 - Math.tan(sweep) * span * s; const y = y0 + Math.tan(dihedral) * span * s;
    const pts = [];
    for (let k = 0; k < prof.length; k++) pts.push([prof[k], yt(prof[k]) * tipRound]);
    for (let k = prof.length - 2; k >= 1; k--) pts.push([prof[k], -yt(prof[k]) * tipRound]);
    for (const [t, h] of pts) pos.push(mirror ? -x : x, y + h * chord, le - t * chord);
  }
  for (let i = 0; i < stations; i++) for (let j = 0; j < ring; j++) {
    const a = i * ring + j, b = i * ring + (j + 1) % ring, c = (i + 1) * ring + j, d = (i + 1) * ring + (j + 1) % ring;
    if (mirror) idx.push(a, b, c, b, d, c); else idx.push(a, c, b, b, c, d);
  }
  // root cap
  const c0 = pos.length / 3; pos.push(mirror ? -x0 : x0, y0, z0 - rootChord * (chordFrom + chordTo) / 2);
  for (let j = 0; j < ring; j++) mirror ? idx.push(c0, (j + 1) % ring, j) : idx.push(c0, j, (j + 1) % ring);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}

// merge list of [geometry, materialIndex] into one geometry with groups
export function mergeGroups(list) {
  const byMat = new Map();
  for (const [g, mi] of list) { if (!g) continue; const gg = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(gg.attributes)) if (!['position', 'normal', 'uv'].includes(k)) gg.deleteAttribute(k); if (!gg.attributes.uv) gg.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(gg.attributes.position.count * 2), 2)); if (!byMat.has(mi)) byMat.set(mi, []); byMat.get(mi).push(gg); }
  const mats = [...byMat.keys()].sort((a, b) => a - b); const parts = []; const groups = [];
  let start = 0;
  for (const mi of mats) { const m = mergeGeometries(byMat.get(mi), false); parts.push(m); groups.push([start, m.attributes.position.count, mi]); start += m.attributes.position.count; }
  const out = mergeGeometries(parts, false); out.clearGroups(); for (const [s, c, mi] of groups) out.addGroup(s, c, mi);
  return out;
}

// Build a Mesh from a list of [geometry, material] pairs (merged by material for few draw calls)
export function meshFrom(pairs, { cast = true, receive = true } = {}) {
  const mats = []; const list = [];
  for (const [g, m] of pairs) { if (!g || !m) continue; let i = mats.indexOf(m); if (i < 0) { mats.push(m); i = mats.length - 1; } list.push([g, i]); }
  if (!list.length) return new THREE.Group();
  const geo = mergeGroups(list); const mesh = new THREE.Mesh(geo, mats.length === 1 ? mats[0] : mats);
  if (mats.length === 1) geo.clearGroups();
  mesh.castShadow = cast; mesh.receiveShadow = receive; return mesh;
}

export function ensureUV(g) { if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); return g; }
