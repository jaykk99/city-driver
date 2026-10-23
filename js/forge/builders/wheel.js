// Wheels: tire (lathe profile + tread / mud lugs), rim styles, brake disc and caliper.
// Built for the right side (outer face at +X); left wheels get flipped by the caller.
import * as THREE from 'three';
import { latheX, cylX, rbox, torus, place, mergeGeometries, meshFrom } from '../geo/geo.js';
import { preset, carPaint } from '../render/materials.js';
import { proceduralTexture } from '../render/textures.js';
import { hq } from '../render/materials.js';

const tireMats = {};
function tireMaterial(type) {
  if (tireMats[type]) return tireMats[type];
  const t = proceduralTexture('tread', 1);
  const map = t.normalMap ? t.normalMap.clone() : null;
  if (map) { map.repeat.set(type === 'slick' ? 0 : 18, 1); map.needsUpdate = true; }
  const m = new THREE.MeshStandardMaterial({ color: 0x1b1b1d, roughness: type === 'slick' ? 0.55 : 0.88, metalness: 0, normalMap: type === 'slick' || !hq() ? null : map, normalScale: new THREE.Vector2(1.2, 1.2) });
  return tireMats[type] = m;
}
export function rimMaterial(finish, color) {
  switch (finish) {
    case 'chrome': return preset('chrome');
    case 'polished': return preset('metal', { color: '#d9dde2', rough: 0.12 });
    case 'gunmetal': return preset('metal', { color: '#4b4f55', rough: 0.3 });
    case 'gold': return preset('gold');
    case 'black': return carPaint({ color: '#141416', finish: 'gloss', flake: 0 });
    default: return carPaint({ color: color || '#c9ccd1', finish: 'metallic', flake: 0.3 });
  }
}

const SEG = () => (hq() ? 56 : 32);

// spoke from hub radius r0 to r1, widths w0 -> w1, thickness t, lying in the Y (radial) direction, extruded along X
function spokeGeo(r0, r1, w0, w1, t, curve = 0) {
  const s = new THREE.Shape(); s.moveTo(-w0 / 2, r0); s.lineTo(w0 / 2, r0); s.quadraticCurveTo(w1 / 2 + curve, (r0 + r1) / 2, w1 / 2, r1); s.lineTo(-w1 / 2, r1); s.quadraticCurveTo(-w1 / 2 + curve, (r0 + r1) / 2, -w0 / 2, r0);
  const g = new THREE.ExtrudeGeometry(s, { depth: t, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 2, curveSegments: 6 });
  g.translate(0, 0, -t / 2); g.rotateY(Math.PI / 2); // extrusion along X
  return g;
}
function around(g, n, offset = 0) { const out = []; for (let i = 0; i < n; i++) { const c = g.clone(); c.rotateX(offset + (i / n) * Math.PI * 2); out.push(c); } return mergeGeometries(out.map(x => x.index ? x.toNonIndexed() : x), false); }

export function buildWheel({ R, rimR, width, rim = 'fivespoke', finish = 'polished', rimColor, tire = 'sport', caliper = '#c01818', whiteLetters = false, beefy = false }) {
  const spin = new THREE.Group(); spin.name = 'wheel';
  const seg = SEG();
  const tm = tireMaterial(tire);
  const lugDepth = tire === 'mud' ? 0.028 : tire === 'allterrain' ? 0.014 : 0;
  const Rc = R - lugDepth;
  const bulge = Math.min(0.03, (Rc - rimR) * 0.18);
  const sh = Math.min(0.035, width * 0.14, (Rc - rimR) * 0.35);
  const w2 = width / 2;
  const prof = [[rimR * 0.985, -w2 * 0.86], [rimR + (Rc - rimR) * 0.3, -w2 - bulge], [rimR + (Rc - rimR) * 0.72, -w2 - bulge * 0.7], [Rc - sh * 0.6, -w2 + sh * 0.15],
    [Rc, -w2 + sh], [Rc + (tire === 'slick' ? 0.004 : 0), 0], [Rc, w2 - sh], [Rc - sh * 0.6, w2 - sh * 0.15], [rimR + (Rc - rimR) * 0.72, w2 + bulge * 0.7], [rimR + (Rc - rimR) * 0.3, w2 + bulge], [rimR * 0.985, w2 * 0.86]];
  const tireGeo = latheX(prof, seg);
  const parts = [[tireGeo, tm]];
  if (lugDepth > 0) {
    const n = tire === 'mud' ? 22 : 30; const lugs = [];
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      for (const side of [-1, 1]) {
        const off = side * width * 0.24 + (i % 2 ? 0.02 : -0.02) * side;
        const g = rbox(width * (tire === 'mud' ? 0.4 : 0.3), lugDepth * 2, tire === 'mud' ? 0.085 : 0.05, 0.008, 1);
        g.rotateY(side * (tire === 'mud' ? 0.35 : 0.2)); g.translate(off, Rc + lugDepth * 0.4, 0); g.rotateX(a + (side > 0 ? Math.PI / n : 0)); lugs.push(g.toNonIndexed());
        if (tire === 'mud') { const s = rbox(0.03, 0.06, 0.07, 0.008, 1); s.translate(side * (w2 + 0.005), Rc - 0.035, 0); s.rotateX(a); lugs.push(s.toNonIndexed()); }
      }
    }
    parts.push([mergeGeometries(lugs, false), tm]);
  }
  if (whiteLetters) { const ring = new THREE.RingGeometry(rimR + (R - rimR) * 0.45, rimR + (R - rimR) * 0.58, seg); ring.rotateY(Math.PI / 2); ring.translate(w2 + bulge * 0.9 + 0.002, 0, 0); parts.push([ring, preset('plastic', { color: '#f2f2f2', rough: 0.6 })]); }

  // rim
  const rm = rimMaterial(finish, rimColor);
  const lipW = rim === 'deepdish' || rim === 'drag' ? width * 0.42 : width * 0.12;
  const faceX = w2 - lipW;
  parts.push([latheX([[rimR * 0.97, -w2 * 0.85], [rimR * 0.9, -w2 * 0.6], [rimR * 0.9, faceX - 0.01], [rimR * 0.97, faceX]], seg), rm]);
  parts.push([place(torus(rimR * 0.985, 0.012, 8, seg), [w2 * 0.86, 0, 0], [0, Math.PI / 2, 0]), rm]);
  if (lipW > 0.04) parts.push([latheX([[rimR * 0.82, faceX], [rimR * 0.99, w2 * 0.86]], seg), rimMaterial(finish === 'painted' || finish === 'black' ? 'polished' : finish)]);
  const hubR = rimR * 0.24, faceR = rimR * (lipW > 0.04 ? 0.84 : 0.93);
  const t = 0.032;
  const face = [];
  switch (rim) {
    case 'multispoke': face.push(around(spokeGeo(hubR * 0.9, faceR, 0.04, 0.022, t), 10)); break;
    case 'split': { const sp = mergeGeometries([spokeGeo(hubR * 0.9, faceR, 0.032, 0.02, t).rotateX(0.07).toNonIndexed(), spokeGeo(hubR * 0.9, faceR, 0.032, 0.02, t).rotateX(-0.07).toNonIndexed()], false); face.push(around(sp, 5)); break; }
    case 'mesh': face.push(around(spokeGeo(hubR, faceR, 0.018, 0.012, t * 0.7, 0.03), 12), around(spokeGeo(hubR, faceR, 0.018, 0.012, t * 0.7, -0.03), 12, Math.PI / 12)); break;
    case 'deepdish': face.push(around(spokeGeo(hubR * 0.9, faceR, 0.05, 0.035, t), 8)); break;
    case 'drag': face.push(around(spokeGeo(hubR * 0.9, faceR, 0.05, 0.016, t, 0.012), 5)); break;
    case 'turbine': { const b = spokeGeo(hubR * 0.8, faceR, 0.05, 0.03, 0.01); b.rotateY(0.6); face.push(around(b, 16)); face.push(latheX([[faceR, faceX - 0.005], [hubR, faceX - 0.02]], seg)); break; }
    case 'beadlock': case 'steelie': {
      const s = new THREE.Shape(); s.absarc(0, 0, faceR, 0, Math.PI * 2, false);
      const holes = rim === 'beadlock' ? 8 : 6;
      for (let i = 0; i < holes; i++) { const a = (i / holes) * Math.PI * 2; const h = new THREE.Path(); const rr = rim === 'beadlock' ? faceR * 0.16 : faceR * 0.12; h.absarc(Math.cos(a) * faceR * 0.6, Math.sin(a) * faceR * 0.6, rr, 0, Math.PI * 2, true); s.holes.push(h); }
      const g = new THREE.ExtrudeGeometry(s, { depth: 0.012, bevelEnabled: true, bevelSize: 0.005, bevelThickness: 0.005, bevelSegments: 2, curveSegments: 20 });
      g.rotateY(Math.PI / 2); g.translate(faceX - 0.02, 0, 0); face.push(g);
      if (rim === 'beadlock') {
        parts.push([place(latheX([[rimR * 0.96, w2 * 0.8], [rimR * 1.01, w2 * 0.8], [rimR * 1.01, w2 * 0.98], [rimR * 0.96, w2 * 0.98]], seg), [0, 0, 0]), rimMaterial('black')]);
        const bolts = []; for (let i = 0; i < 24; i++) { const a = (i / 24) * Math.PI * 2; const b = cylX(0.008, 0.012, 6); b.translate(w2 * 0.99, Math.cos(a) * rimR * 0.985, Math.sin(a) * rimR * 0.985); bolts.push(b.toNonIndexed()); }
        parts.push([mergeGeometries(bolts, false), preset('chrome')]);
      }
      break;
    }
    default: face.push(around(spokeGeo(hubR * 0.9, faceR, 0.07, 0.045, t), 5));
  }
  for (const f of face) { f.translate(rim === 'beadlock' || rim === 'steelie' || rim === 'turbine' ? 0 : faceX - t * 0.3, 0, 0); parts.push([f, rm]); }
  parts.push([place(cylX(hubR, 0.05, 32), [faceX - 0.01, 0, 0]), rm]);
  parts.push([place(cylX(hubR * 0.45, 0.02, 24), [faceX + 0.02, 0, 0]), preset('chrome')]);
  const nuts = []; for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; const nn = cylX(0.011, 0.025, 6); nn.translate(faceX + 0.012, Math.cos(a) * hubR * 0.7, Math.sin(a) * hubR * 0.7); nuts.push(nn.toNonIndexed()); }
  parts.push([mergeGeometries(nuts, false), preset('chrome')]);
  // brake disc (spins)
  parts.push([place(cylX(rimR * 0.8, 0.026, seg), [-w2 * 0.15, 0, 0]), preset('metal', { color: '#7c7f84', rough: 0.35 })]);
  parts.push([place(cylX(rimR * 0.36, 0.05, 24), [-w2 * 0.15, 0, 0]), preset('metal', { color: '#4a4c50', rough: 0.5 })]);
  const mesh = meshFrom(parts); spin.add(mesh);
  // caliper (does not spin)
  const cal = new THREE.Mesh(place(rbox(0.06, rimR * 0.5, rimR * 0.34, 0.02), [-w2 * 0.15 + 0.035, 0, 0]), carPaint({ color: caliper, finish: 'gloss', flake: 0 }));
  cal.position.set(0, rimR * 0.52, -rimR * 0.35); cal.rotation.x = -0.6; cal.castShadow = true;
  const calG = new THREE.Group(); calG.add(cal); calG.name = 'caliper';
  return { spin, caliper: calG };
}
