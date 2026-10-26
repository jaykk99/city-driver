// Procedural cars & trucks, built from design numbers (see cargen.js) — there are no stored car shapes:
// the silhouette, cabin, glass, arches and every detail are computed from length/height/hood/rake/... values.
// Lofted clearcoat body with wheel arches, glass greenhouse, opening hood, lights, bumpers, interior,
// engine bay, wheels and all the bolt-on parts (wings, scoops, light bars...).
// Local frame: +Z = front, +X = right, Y = up, ground at y = 0.
import * as THREE from 'three';
import { rbox, cylX, cylZ, cyl, sph, torus, tube, strut, place, meshFrom, mergeGeometries, extrudeZY } from '../geo/geo.js';
import { preset, carPaint, glass, emissive, lens } from '../render/materials.js';
import { textTexture } from '../render/textures.js';
import { buildWheel } from './wheel.js';
import { buildEngine } from './engine.js';
import { tireSize, vehicleSpec } from './vehiclesim.js';
import { profileFromDesign, designDims, upgradeOldParams } from './cargen.js';
import { monotone, clamp, lerp, smoothstep } from '../core/util.js';
import { hq } from '../render/materials.js';

const NSTATION = () => (hq() ? 160 : 96);

// ---------------------------------------------------------------- body shell
// Each station's half-section is sampled with a FIXED number of points per feature, so every ring
// index is the same feature along the car (belt line, roof edge...). Feature lines come out straight.
const SEGS = () => (hq() ? { nB: 4, nC: 5, nS: 10, nU: 20, nT: 8, nR: 5 } : { nB: 3, nC: 4, nS: 7, nU: 12, nT: 5, nR: 4 });
function bodyShell(P, d, prof, arches) {
  const L = d.L, W = d.W, H = d.H;
  const top0 = monotone(prof.top.map(([u, f]) => [u, f * H]));
  // fenders: the body must clear the tires, so low noses/decks grow a smooth fender hump over each wheel
  const top = u => { let y = top0(u); for (const f of prof.fenders || []) { const k = 1 - Math.min(1, Math.abs(u - f.u) / f.w); if (k > 0) y = Math.max(y, f.y * Math.sin(k * Math.PI / 2) ** 0.6); } return y; };
  const belt = u => lerp(prof.belt[0], prof.belt[1], u) * H;
  const roofH = H, beltMid = belt(0.5);
  const roofW = prof.roofW;
  const pw = 3 + (prof.box * 0.6 + (1 - P.round) * 0.4) * 10;
  const halfW = u => { const x = Math.abs(2 * u - 1); const f = Math.pow(Math.max(0, 1 - Math.pow(x, pw)), 1 / pw); const coke = 1 - 0.018 * Math.sin(u * Math.PI * 2.2 - 0.6) * (1 - prof.box); return W / 2 * f * coke; };
  const clear = d.clear;
  const bottom = u => clear + 0.11 * smoothstep(0.12, 0.0, u) + 0.13 * smoothstep(0.86, 1.0, u);
  const N = NSTATION(); const S = SEGS();
  const rows = { bStart: 0, cStart: S.nB, sStart: S.nB + S.nC, uStart: S.nB + S.nC + S.nS, tStart: S.nB + S.nC + S.nS + S.nU, rStart: S.nB + S.nC + S.nS + S.nU + S.nT };
  const M = rows.rStart + S.nR + 1; // half-ring points incl. both centers
  const us = []; for (let i = 0; i < N; i++) { const t = i / (N - 1); us.push(lerp(t, (1 - Math.cos(Math.PI * t)) / 2, 0.55)); }
  const pos = [];
  const ringLen = 2 * M - 2;
  const bulge = 0.025 * (1 - prof.box * 0.6);
  const zOf = u => (u - 0.5) * L;
  for (const u of us) {
    const hw = Math.max(halfW(u), 1e-4); const yt0 = top(u); const yb = Math.min(bottom(u), yt0 - 0.05);
    const yt = Math.max(yt0, yb + 0.06);
    const cf = clamp((yt - Math.min(belt(u), yt)) / Math.max(0.05, roofH - beltMid), 0, 1);
    const thw = Math.max(hw * lerp(1, roofW, cf), 1e-4);
    const rT = Math.max(0.002, Math.min(lerp(0.09 + P.round * 0.05, 0.07 + P.round * 0.06, cf), thw * 0.8, (yt - yb) * 0.4));
    const rB = Math.max(0.002, Math.min(0.07 + P.round * 0.05, hw * 0.6, (yt - yb) * 0.3));
    const bl = clamp(belt(u), yb + rB + 0.005, yt - rT - 0.002);
    const crown = 0.012 * (1 - prof.box);
    const half = [];
    for (let k = 0; k < S.nB; k++) half.push([(k / S.nB) * (hw - rB), yb]);                                   // bottom flat
    for (let k = 0; k < S.nC; k++) { const a = -Math.PI / 2 + (k / S.nC) * Math.PI / 2; half.push([hw - rB + Math.cos(a) * rB, yb + rB + Math.sin(a) * rB]); } // bottom corner
    for (let k = 0; k < S.nS; k++) { const y = lerp(yb + rB, bl, k / S.nS); const sn = Math.sin(Math.PI * (y - yb) / Math.max(0.01, bl - yb)); half.push([hw + bulge * sn * hw, y]); } // lower side up to belt
    for (let k = 0; k < S.nU; k++) { const t = k / S.nU; half.push([lerp(hw, thw, t), lerp(bl, yt - rT, t)]); }   // greenhouse side (tumblehome)
    for (let k = 0; k < S.nT; k++) { const a = (k / S.nT) * Math.PI / 2; half.push([thw - rT + Math.cos(a) * rT, yt - rT + Math.sin(a) * rT]); } // roof corner
    for (let k = 0; k <= S.nR; k++) { const t = k / S.nR; half.push([lerp(thw - rT, 0, t), yt + crown * t]); }       // roof to center
    const z = zOf(u);
    for (let j = 0; j < M; j++) pos.push(half[j][0], half[j][1], z);
    for (let j = M - 2; j >= 1; j--) pos.push(-half[j][0], half[j][1], z);
  }
  const rowOf = j => (j < M ? j : ringLen - j); // mirror index -> half-ring row
  // wheel arches: push vertices out of the arch volume (smooth lip + wheel well)
  const pushed = new Uint8Array(pos.length / 3);
  for (let v = 0; v < pos.length / 3; v++) {
    let x = pos[v * 3], y = pos[v * 3 + 1], z = pos[v * 3 + 2];
    for (const a of arches) {
      const dz = z - a.z, dy = y - a.y;
      if (y >= a.y) {
        const r = Math.hypot(dz, dy);
        if (r < a.r) { const s2 = r < 1e-5 ? 0 : a.r / r; z = a.z + dz * s2; y = a.y + (r < 1e-5 ? a.r : dy * s2); pushed[v] = 1; }
        else if (a.flare > 0 && r < a.r + 0.16 && Math.abs(x) > W * 0.32) { const k = 1 - (r - a.r) / 0.16; x += Math.sign(x) * a.flare * Math.sin(k * Math.PI / 2); }
      } else if (Math.abs(dz) < a.r) {
        z = a.z + Math.sign(dz || 1) * a.r; pushed[v] = 1;
      } else if (a.flare > 0 && Math.abs(dz) < a.r + 0.16 && Math.abs(x) > W * 0.32) { const k = 1 - (Math.abs(dz) - a.r) / 0.16; x += Math.sign(x) * a.flare * Math.sin(k * Math.PI / 2); }
    }
    pos[v * 3] = x; pos[v * 3 + 1] = y; pos[v * 3 + 2] = z;
  }
  // faces + classification (by station u and ring row)
  const cab = prof.cab; const groups = { paint: [], stripe: [], glass: [], trim: [], liner: [], hood: [], hoodStripe: [] };
  const stripeW = { racing: 0.34, single: 0.22, hood: 0.5, side: 0, none: 0 }[P.stripes] || 0;
  const hoodFront = 0.955, hoodBack = cab[3] + 0.012;
  const uB = (cab[1] + cab[2]) / 2 - 0.02;
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  for (let i = 0; i < N - 1; i++) {
    const u = (us[i] + us[i + 1]) / 2;
    for (let j = 0; j < ringLen; j++) {
      const j2 = (j + 1) % ringLen;
      const ia = i * ringLen + j, ib = i * ringLen + j2, ic = (i + 1) * ringLen + j, id = (i + 1) * ringLen + j2;
      const row = Math.min(rowOf(j), rowOf(j2));     // lower row of this quad
      const cx = Math.abs(pos[ia * 3] + pos[id * 3]) / 2;
      let g = 'paint';
      const inCabin = u > cab[0] && u < cab[3];
      const isUpper = row >= rows.uStart && row < rows.tStart;      // greenhouse side band
      const isTop = row >= rows.tStart;                             // roof corner + roof
      const isRoofFlat = row >= rows.rStart;
      if (pushed[ia] || pushed[ib] || pushed[ic] || pushed[id]) { // drop faces stretched across a wheel opening
        const qy = (pos[ia * 3 + 1] + pos[ib * 3 + 1] + pos[ic * 3 + 1] + pos[id * 3 + 1]) / 4, qz = (pos[ia * 3 + 2] + pos[ib * 3 + 2] + pos[ic * 3 + 2] + pos[id * 3 + 2]) / 4;
        let inside = false;
        for (const ar of arches) { const dz = qz - ar.z, dy = qy - ar.y; if (dy >= 0 ? Math.hypot(dz, dy) < ar.r * 0.96 : Math.abs(dz) < ar.r * 0.96) inside = true; }
        if (inside) continue;
      }
      if (pushed[ia] && pushed[ib] && pushed[ic] && pushed[id]) g = 'liner';
      else if (inCabin && isUpper) {
        const hgt = (row - rows.uStart + 0.5) / S.nU;
        const uA = lerp(cab[3], cab[2], hgt), uC = lerp(cab[0], cab[1], hgt);
        const glassy = row > rows.uStart && row < rows.tStart - 1 && u < uA - 0.012 && u > uC + 0.02 && Math.abs(u - uB) > 0.011;
        g = glassy ? 'glass' : 'trim';
        if (prof.bed && u < cab[0] + 0.03) g = 'paint';
      } else if (inCabin && isTop) {
        const onRoof = u >= cab[1] && u <= cab[2];
        const ws = u > cab[2] + 0.006 && u < cab[3] - 0.006, rg = u > cab[0] + 0.006 && u < cab[1] - 0.006;
        if (onRoof) g = row < rows.tStart + 2 ? 'trim' : 'paint';
        else if ((ws || rg) && row >= rows.tStart + 2) g = 'glass';
        else g = 'trim';
        if (prof.bed && u < cab[0] + 0.03) g = 'paint';
      }
      if (g === 'paint' && u > hoodBack && u < hoodFront && isTop && cx < W * 0.42) g = 'hood';
      if (g === 'paint' && prof.mid && u > 0.05 && u < cab[0] - 0.01 && isRoofFlat) g = 'glass';
      if (stripeW > 0 && (g === 'paint' || g === 'hood') && isTop && cx < stripeW / 2 && !(P.stripes === 'hood' && g !== 'hood')) {
        if (P.stripes !== 'racing' || cx > 0.04) g = g === 'hood' ? 'hoodStripe' : 'stripe';
      }
      if (P.stripes === 'side' && g === 'paint' && row >= rows.sStart + S.nS - 3 && row < rows.sStart + S.nS - 1) g = 'stripe';
      for (const tri of [[ia, ib, ic], [ib, id, ic]]) {
        a.fromArray(pos, tri[0] * 3); b.fromArray(pos, tri[1] * 3); c.fromArray(pos, tri[2] * 3);
        if (a.distanceToSquared(b) < 1e-12 || a.distanceToSquared(c) < 1e-12 || b.distanceToSquared(c) < 1e-12) continue;
        groups[g].push(...tri);
      }
    }
  }
  return { pos, groups, top, belt, halfW, bottom, zOf, L, W, H, us };
}

function shellNormals(pos, groups) {
  const all = []; for (const k in groups) all.push(...groups[k]);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(all); g.computeVertexNormals();
  return g.attributes.normal.array;
}
function geoFromIndices(pos, nor, idx) {
  const n = idx.length; const p = new Float32Array(n * 3), q = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const v = idx[i] * 3; p[i * 3] = pos[v]; p[i * 3 + 1] = pos[v + 1]; p[i * 3 + 2] = pos[v + 2]; q[i * 3] = nor[v]; q[i * 3 + 1] = nor[v + 1]; q[i * 3 + 2] = nor[v + 2]; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('normal', new THREE.BufferAttribute(q, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2)); return g;
}

// find z of the body surface at the front/back for a given |x| fraction and height (rough)
function endZ(shell, xFrac, front) {
  const target = xFrac * shell.W / 2;
  if (front) { for (let u = 1; u > 0.5; u -= 0.002) if (shell.halfW(u) >= target) return shell.zOf(u); }
  else { for (let u = 0; u < 0.5; u += 0.002) if (shell.halfW(u) >= target) return shell.zOf(u); }
  return front ? shell.L / 2 : -shell.L / 2;
}

// ---------------------------------------------------------------- main
export function buildVehicle(o, P, ctx) {
  const root = new THREE.Group(); root.name = 'Vehicle';
  P = upgradeOldParams(P);
  const frame = P.frame || 'closed';
  const dims = designDims(P);
  const spec = vehicleSpec(P);
  const d = { L: dims.L, W: dims.W, H: dims.H, clear: dims.clear };
  const wb = spec.wb;
  const tf = spec.tireF, tr = spec.tireR;
  const lift = P.lift || 0;
  const paint = carPaint({ color: P.paint, finish: P.finish, flake: P.flake });
  const stripe = carPaint({ color: P.stripeColor, finish: P.finish === 'matte' ? 'matte' : 'gloss', flake: 0 });
  const trimM = P.trim === 'chrome' ? preset('chrome') : P.trim === 'body' ? paint : preset('black', { rough: 0.35 });
  const blackPlastic = preset('black', { rough: 0.55 });
  const liner = preset('black', { rough: 0.9 });
  const glassM = glass({ tint: P.tint, color: '#7f97a8' });
  const body = new THREE.Group(); body.name = 'body'; root.add(body);
  // design wheel radius used for arch placement (stock tires)
  const designR = clamp(Math.max(tf.R, tr.R) * 0.92, 0.3, 0.55);
  const axleF = dims.axleF, axleR = dims.axleR;
  const bodyLift = lift + Math.max(0, Math.max(tf.R, tr.R) - designR) * 0.6;
  const wheelY = { f: tf.R, r: tr.R };
  const extra = []; // [geo, mat]
  let shell = null, hoodMesh = null, engineAnchor = null;

  let prof = null;
  if (frame === 'rail') buildDragster(root, body, P, d, spec, paint, extra);
  else if (frame === 'tube') buildBuggy(root, body, P, d, spec, paint, extra);
  else {
    prof = profileFromDesign(P); prof.top = prof.top.map(([u, f]) => [u, f * (u > prof.cab[0] && u < prof.cab[3] ? lerp(1, P.roof, smoothstep(0.7, 1, f)) : 1)]);
    const archR = designR + 0.045;
    const arches = [{ z: axleF, y: designR, r: archR, flare: P.flares || 0 }, { z: axleR, y: designR, r: archR, flare: P.flares || 0 }];
    const uOf = z => z / d.L + 0.5;
    prof.fenders = arches.map(a => ({ u: uOf(a.z), w: (a.r * 1.9) / d.L, y: a.y + a.r + 0.07 }));
    shell = bodyShell(P, d, prof, arches);
    const { pos, groups } = shell;
    const nor = shellNormals(pos, groups);
    const mk = (idx) => idx.length ? geoFromIndices(pos, nor, idx) : null;
    const bodyParts = [[mk(groups.paint), paint], [mk(groups.stripe), stripe], [mk(groups.glass), glassM], [mk(groups.trim), P.trim === 'body' ? paint : preset('black', { rough: 0.3 })], [mk(groups.liner), liner]];
    const bm = meshFrom(bodyParts.filter(p => p[0])); bm.name = 'shell'; body.add(bm);
    // hood (separate, hinged at the cowl)
    const hoodParts = [[mk(groups.hood), paint], [mk(groups.hoodStripe), stripe]].filter(p => p[0]);
    if (hoodParts.length) {
      const hinge = new THREE.Group(); const hz = shell.zOf(prof.cab[3] + 0.012), hy = shell.top(prof.cab[3] + 0.012);
      hinge.position.set(0, hy, hz); body.add(hinge);
      const hm = meshFrom(hoodParts); hm.position.set(0, -hy, -hz); hinge.add(hm); hinge.rotation.x = P.hoodOpen ? -0.95 : 0;
      hoodMesh = hinge; hinge.name = 'hood';
      // hood features ride on the hood
      const hoodTopY = shell.top((prof.cab[3] + 0.96) / 2), hoodMidZ = shell.zOf((prof.cab[3] + 0.96) / 2);
      const hp = [];
      if (P.hoodScoop === 'scoop') { hp.push([place(extrudeZY([[-0.32, 0], [0.22, 0], [0.22, 0.09], [-0.15, 0.03]], 0.42, 0.012), [0, hoodTopY - 0.02, hoodMidZ]), paint], [place(rbox(0.36, 0.06, 0.02, 0.008), [0, hoodTopY + 0.03, hoodMidZ + 0.225]), blackPlastic]); }
      if (P.hoodScoop === 'bulge') hp.push([place(rbox(0.62, 0.07, d.L * 0.18, 0.06, 3), [0, hoodTopY + 0.0, hoodMidZ - 0.05]), paint]);
      if (P.hoodScoop === 'shaker') { hp.push([place(cyl(0.2, 0.22, 0.12, 32), [0, hoodTopY + 0.04, hoodMidZ - 0.1]), blackPlastic], [place(rbox(0.38, 0.08, 0.22, 0.03), [0, hoodTopY + 0.12, hoodMidZ - 0.08]), paint], [place(rbox(0.3, 0.05, 0.02, 0.008), [0, hoodTopY + 0.12, hoodMidZ + 0.035]), preset('black')]); }
      if (P.hoodScoop === 'vents') for (const s of [-1, 1]) hp.push([place(rbox(0.32, 0.03, 0.22, 0.02), [s * 0.3, hoodTopY + 0.0, hoodMidZ + 0.1]), preset('black', { rough: 0.4 })]);
      if (hp.length) { const fm = meshFrom(hp); fm.position.set(0, -hy, -hz); hinge.add(fm); }
    }
    // pickup bed walls
    if (prof.bed) {
      const z0 = shell.zOf(prof.bed[0]), z1 = shell.zOf(prof.bed[1]); const yF = shell.top(0.2), yTop = d.H * 0.6 + 0.3;
      const hw = d.W / 2 - 0.03; const len = z1 - z0;
      for (const s of [-1, 1]) { extra.push([place(rbox(0.06, yTop - yF + 0.04, len, 0.025), [s * hw, (yTop + yF) / 2, (z0 + z1) / 2]), paint]); extra.push([place(rbox(0.09, 0.03, len, 0.012), [s * hw, yTop, (z0 + z1) / 2]), blackPlastic]); }
      extra.push([place(rbox(d.W - 0.06, yTop - yF + 0.04, 0.06, 0.025), [0, (yTop + yF) / 2, z0 + 0.03]), paint]);
      extra.push([place(rbox(d.W - 0.14, 0.02, len - 0.1, 0.01), [0, yF + 0.012, (z0 + z1) / 2]), preset('black', { rough: 0.8 })]);
    }
    // ---- details ----
    const zF = endZ(shell, 0.5, true), zR = endZ(shell, 0.5, false);
    const yLight = lerp(shell.bottom(1), shell.top(0.985), 0.62), yTail = lerp(shell.bottom(0), shell.top(0.015), 0.72);
    const round = P.headlights === 'round';
    for (const s of [-1, 1]) {
      const xH = s * d.W / 2 * 0.66; const zH = endZ(shell, 0.72, true) - 0.01;
      if (P.hd) { /* high-detail lights come from cardetail.js */ }
      else if (round) {
        extra.push([place(cylZ(0.09, 0.05, 32), [xH, yLight, zH]), preset('chrome')]);
        extra.push([place(sph(0.085, 24, 12), [xH, yLight, zH + 0.005], 0, [1, 1, 0.35]), lens('#fffaf0', 0.6)]);
      } else {
        const hl = rbox(0.34, 0.085, 0.07, 0.03); hl.rotateY(-s * 0.35); hl.rotateZ(s * 0.06); hl.translate(xH, yLight, zH - 0.02);
        extra.push([hl, lens('#eef4ff', 0.4)]);
        const drl = rbox(0.3, 0.012, 0.02, 0.006); drl.rotateY(-s * 0.35); drl.translate(xH, yLight - 0.05, zH + 0.005); extra.push([drl, emissive('#e6f0ff', 4)]);
      }
      // tail lights
      const xT = s * d.W / 2 * 0.7; const zT = endZ(shell, 0.78, false) + 0.012;
      if (!P.hd) { const tl = rbox(round ? 0.42 : 0.36, 0.09, 0.05, 0.025); tl.rotateY(s * 0.28); tl.translate(xT, yTail, zT); extra.push([tl, lens('#c80a0a', 0.6)]); }
      // mirrors
      const uC = prof.cab[3] - 0.02; const my = shell.belt(uC) + 0.08, mx = s * (shell.halfW(uC) + 0.08), mz = shell.zOf(uC);
      extra.push([place(rbox(0.13, 0.08, 0.12, 0.035), [mx, my, mz]), paint]);
      extra.push([place(strut([mx - s * 0.06, my - 0.02, mz], [mx - s * 0.12, my - 0.03, mz], 0.012), [0, 0, 0]), blackPlastic]);
      // door handle
      const uD = (prof.cab[1] + prof.cab[2]) / 2 + 0.03;
      extra.push([place(rbox(0.12, 0.022, 0.02, 0.008), [s * (shell.halfW(uD) + 0.012), shell.belt(uD) - 0.07, shell.zOf(uD)], [0, Math.PI / 2, 0]), trimM]);
      // race number decal
      if (P.number && P.number !== 'none') {
        const pl = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.42), new THREE.MeshPhysicalMaterial({ map: textTexture(P.number), transparent: true, roughness: 0.3, clearcoat: 1, polygonOffset: true, polygonOffsetFactor: -2 }));
        const uN = (prof.cab[1] + prof.cab[2]) / 2 - 0.02; pl.position.set(s * (shell.halfW(uN) + 0.028), lerp(shell.bottom(uN), shell.belt(uN), 0.55), shell.zOf(uN)); pl.rotation.y = s * Math.PI / 2; body.add(pl);
      }
    }
    // grille + bumpers + plates (P.hd: cardetail.js builds the full fascias instead)
    const yG = lerp(shell.bottom(1), yLight, 0.55);
    const utility = !!prof.bed || d.clear >= 0.2;
    const yBF = shell.bottom(1) + 0.08, yBR = shell.bottom(0) + 0.09;
    if (!P.hd) {
    extra.push([place(rbox(d.W * 0.5, 0.16, 0.05, 0.03), [0, yG, zF - 0.04]), preset('black', { rough: 0.45 })]);
    if (P.trim === 'chrome') extra.push([place(rbox(d.W * 0.52, 0.02, 0.055, 0.01), [0, yG + 0.08, zF - 0.035]), preset('chrome')]);
    const bumperChrome = P.trim === 'chrome' && (round || prof.box > 0.6 || utility);
    extra.push([place(rbox(d.W * 0.86, 0.1, 0.1, 0.045), [0, yBF, endZ(shell, 0.5, true) - 0.02]), bumperChrome ? preset('chrome') : (utility ? blackPlastic : paint)]);
    extra.push([place(rbox(d.W * 0.86, 0.1, 0.1, 0.045), [0, yBR, endZ(shell, 0.5, false) + 0.02]), bumperChrome ? preset('chrome') : (utility ? blackPlastic : paint)]);
    if (d.H < 1.5 && d.clear < 0.16) extra.push([place(rbox(d.W * 0.8, 0.02, 0.18, 0.01), [0, shell.bottom(1) - 0.005, zF - 0.12]), preset('carbon')]);
    const plate = new THREE.MeshStandardMaterial({ map: textTexture('FORGE 3D', { round: false, w: 512, h: 160, font: 'bold 92px Arial', fg: '#1a2a6c', bg: '#f4f4f0' }), roughness: 0.4, metalness: 0.2 });
    extra.push([place(new THREE.PlaneGeometry(0.52, 0.12), [0, yBR + 0.12, endZ(shell, 0.2, false) - 0.005], [0, Math.PI, 0]), plate]);
    }
    // wheel well liners (hide the hollow body)
    for (const a of arches) for (const s of [-1, 1]) {
      const g = new THREE.CylinderGeometry(a.r + 0.005, a.r + 0.005, 0.42, 32, 1, true, 0, Math.PI); g.rotateZ(Math.PI / 2); g.translate(s * (d.W / 2 - 0.23), a.y, a.z);
      extra.push([g, preset('black', { rough: 0.95, side: THREE.DoubleSide })]);
      extra.push([place(new THREE.PlaneGeometry(a.r * 2, a.r * 2), [s * (d.W / 2 - 0.44), a.y, a.z], [0, Math.PI / 2, 0]), preset('black', { rough: 0.95, side: THREE.DoubleSide })]);
    }
    // interior: floor, seats, steering wheel, dash
    if (P.interior) {
      const uS = (prof.cab[1] + prof.cab[2]) / 2 - 0.01; const zs = shell.zOf(uS); const yFloor = shell.bottom(uS) + 0.05; const cab = Math.min(shell.halfW(uS) * 0.42, 0.42);
      const seatM = P.rollCage ? preset('fabric', { color: '#c41818' }) : preset('leather', { color: '#2a201c' });
      extra.push([place(rbox(d.W * 0.8, 0.04, (shell.zOf(prof.cab[2]) - shell.zOf(prof.cab[1])) * 1.4, 0.01), [0, yFloor, zs]), preset('fabric', { color: '#1c1c1e' })]);
      for (const s of [-1, 1]) {
        extra.push([place(rbox(0.46, 0.12, 0.5, 0.05), [s * cab, yFloor + 0.2, zs + 0.06]), seatM]);
        const back = rbox(0.46, 0.62, 0.12, 0.05); back.rotateX(-0.22); back.translate(s * cab, yFloor + 0.52, zs - 0.18); extra.push([back, seatM]);
      }
      const zDash = shell.zOf(prof.cab[3] - 0.03); const yDash = shell.belt(prof.cab[3]) - 0.02;
      extra.push([place(rbox(d.W * 0.82, 0.16, 0.3, 0.06), [0, yDash, zDash]), preset('black', { rough: 0.6 })]);
      const sw = torus(0.17, 0.02, 10, 32); sw.rotateX(-0.35); sw.translate(-cab, yDash + 0.08, zDash - 0.22); extra.push([sw, preset('leather', { color: '#111' })]);
      extra.push([place(strut([-cab, yDash + 0.08, zDash - 0.22], [-cab, yDash - 0.02, zDash + 0.02], 0.02), [0, 0, 0]), blackPlastic]);
    }
    // roll cage
    if (P.rollCage) {
      const u1 = prof.cab[1] + 0.01, u2 = prof.cab[3] - 0.02; const z1 = shell.zOf(u1), z2 = shell.zOf(u2); const yT = shell.top((u1 + prof.cab[2]) / 2) - 0.07; const yF = shell.bottom(u1) + 0.06;
      const hw = shell.halfW(u1) * 0.78, cm = preset('metal', { color: '#2a2a2e', rough: 0.4 });
      for (const s of [-1, 1]) { extra.push([strut([s * hw, yF, z1], [s * hw * 0.9, yT, z1], 0.022), cm]); extra.push([strut([s * hw * 0.9, yT, z1], [s * hw * 0.85, yT - 0.05, z2], 0.022), cm]); extra.push([strut([s * hw * 0.85, yT - 0.05, z2], [s * hw, shell.belt(u2), z2 + 0.05], 0.022), cm]); }
      extra.push([strut([-hw * 0.9, yT, z1], [hw * 0.9, yT, z1], 0.022), cm]); extra.push([strut([-hw, yF + 0.1, z1], [hw * 0.9, yT, z1], 0.02), cm]);
    }
    // spoilers
    const uDeck = Math.max(0.03, prof.cab[0] * 0.35); const deckY = shell.top(uDeck), deckZ = shell.zOf(uDeck);
    if (P.spoiler === 'lip') extra.push([place(rbox(d.W * 0.7, 0.03, 0.12, 0.012), [0, deckY + 0.015, shell.zOf(0.02)]), preset('carbon')]);
    if (P.spoiler === 'ducktail') extra.push([place(extrudeZY([[-0.12, 0], [0.14, 0], [-0.1, 0.09]], d.W * 0.78, 0.012), [0, deckY - 0.01, shell.zOf(0.03) + 0.06]), paint]);
    if (P.spoiler === 'wing' || P.spoiler === 'gtwing' || P.spoiler === 'dragwing') {
      const big = P.spoiler !== 'wing'; const h = P.spoiler === 'dragwing' ? 0.55 : big ? 0.32 : 0.16; const span = d.W * (big ? 0.95 : 0.82);
      const wy = deckY + h, wz = deckZ - 0.05;
      const foil = extrudeZY([[-0.18, 0], [0.12, 0.015], [0.18, 0.04], [0.1, 0.055], [-0.16, 0.03]], span, 0.006); foil.rotateX(big ? 0.12 : 0.05); foil.translate(0, wy, wz); extra.push([foil, big ? preset('carbon') : paint]);
      for (const s of [-1, 1]) {
        extra.push([place(rbox(0.02, h, 0.12, 0.008), [s * span * 0.32, deckY + h / 2, wz]), big ? preset('black', { rough: 0.3 }) : paint]);
        if (big) extra.push([place(rbox(0.012, 0.16, 0.42, 0.006), [s * span / 2, wy + 0.03, wz]), preset('carbon')]);
      }
    }
    // offroad / drag extras
    const roofY = shell.top((prof.cab[1] + prof.cab[2]) / 2), roofZ1 = shell.zOf(prof.cab[2] - 0.01), roofZ0 = shell.zOf(prof.cab[1] + 0.02);
    if (P.lightBar) {
      const lb = rbox(d.W * 0.78, 0.07, 0.09, 0.02); lb.translate(0, roofY + 0.09, roofZ1 - 0.08); extra.push([lb, preset('black', { rough: 0.3 })]);
      for (let k = 0; k < 10; k++) extra.push([place(new THREE.CircleGeometry(0.026, 16), [-(d.W * 0.78) / 2 + 0.05 + k * (d.W * 0.78 - 0.1) / 9, roofY + 0.09, roofZ1 - 0.034]), emissive('#f4f8ff', 5)]);
      for (const s of [-1, 1]) extra.push([strut([s * d.W * 0.36, roofY, roofZ1 - 0.1], [s * d.W * 0.36, roofY + 0.07, roofZ1 - 0.08], 0.015), blackPlastic]);
    }
    if (P.roofRack) {
      const rm = preset('black', { rough: 0.4 }); const hw = shell.halfW((prof.cab[1] + prof.cab[2]) / 2) * prof.roofW * 0.85;
      for (const s of [-1, 1]) extra.push([strut([s * hw, roofY + 0.07, roofZ0], [s * hw, roofY + 0.07, roofZ1 - 0.15], 0.018), rm]);
      for (let k = 0; k < 4; k++) { const z = lerp(roofZ0, roofZ1 - 0.15, k / 3); extra.push([strut([-hw, roofY + 0.07, z], [hw, roofY + 0.07, z], 0.014), rm]); }
      for (const s of [-1, 1]) for (const z of [roofZ0, roofZ1 - 0.15]) extra.push([strut([s * hw, roofY, z], [s * hw, roofY + 0.07, z], 0.014), rm]);
    }
    if (P.snorkel) {
      const uC = prof.cab[3] + 0.02, x = d.W / 2 + 0.03, zc = shell.zOf(uC);
      extra.push([tube([[x, shell.belt(uC) - 0.2, zc + 0.15], [x + 0.02, shell.belt(uC) + 0.05, zc + 0.05], [x - 0.04, roofY - 0.05, zc - 0.25], [x - 0.06, roofY + 0.12, zc - 0.32]], 0.045, 24, 12), blackPlastic]);
      extra.push([place(rbox(0.12, 0.1, 0.16, 0.04), [x - 0.06, roofY + 0.17, zc - 0.3]), blackPlastic]);
    }
    if (P.bullBar) {
      const bm2 = preset('black', { rough: 0.35 }); const z = endZ(shell, 0.5, true) + 0.12, y0 = yBF - 0.05;
      extra.push([tube([[-d.W * 0.38, y0, z - 0.1], [-d.W * 0.36, y0 + 0.45, z], [d.W * 0.36, y0 + 0.45, z], [d.W * 0.38, y0, z - 0.1]], 0.03, 40, 10), bm2]);
      for (const s of [-1, 1]) extra.push([strut([s * 0.2, y0, z], [s * 0.2, y0 + 0.45, z], 0.025), bm2]);
      extra.push([strut([-d.W * 0.36, y0 + 0.12, z], [d.W * 0.36, y0 + 0.12, z], 0.025), bm2]);
    }
    if (P.sideSteps) for (const s of [-1, 1]) extra.push([place(rbox(0.16, 0.035, wb * 0.55, 0.012), [s * (d.W / 2 + 0.04), shell.bottom(0.5) + bodyLift * 0.3 + 0.02, (axleF + axleR) / 2]), preset('black', { rough: 0.4 })]);
    if (P.spareTire) {
      const sw2 = buildWheel({ R: tr.R, rimR: tr.rimR, width: tr.width, rim: P.rim, finish: P.rimFinish, rimColor: P.rimColor, tire: P.tire });
      sw2.spin.rotation.y = Math.PI / 2; sw2.spin.position.set(0, lerp(shell.bottom(0), shell.top(0.02), 0.55), endZ(shell, 0.3, false) - tr.width / 2 - 0.04); body.add(sw2.spin);
    }
    { // engine bay: the space the design actually leaves for the engine
      const bay = prof.mid ? [0.04, prof.cab[0]] : P.layout === 'rear' ? [0.03, Math.min(prof.cab[0], 0.3)] : [prof.cab[3] + 0.01, 0.965];
      const z0 = shell.zOf(bay[0]), z1 = shell.zOf(Math.max(bay[0] + 0.02, bay[1])), um = (bay[0] + bay[1]) / 2;
      engineAnchor = { z: (z0 + z1) / 2, y: shell.bottom(um) + 0.04, maxH: Math.max(0.25, shell.top(um) - shell.bottom(um) - 0.06), maxL: z1 - z0 };
    }
    // exhaust tips
    const exM = preset('chrome', { rough: 0.08 }); const zE = endZ(shell, 0.4, false) - 0.04; const yE = shell.bottom(0.02) + 0.06;
    const tips = P.exhaust === 'quad' ? [-0.62, -0.5, 0.5, 0.62] : P.exhaust === 'single' ? [0.55] : P.exhaust === 'dual' ? [-0.55, 0.55] : [];
    root.userData.exhaust = [];
    for (const t of tips) { extra.push([place(cylZ(0.042, 0.16, 20), [t * d.W / 2, yE, zE]), exM]); extra.push([place(cylZ(0.032, 0.17, 20), [t * d.W / 2, yE, zE - 0.002]), preset('black')]); root.userData.exhaust.push([t * d.W / 2, yE + bodyLift, zE - 0.08]); }
    if (P.exhaust === 'sidepipes') for (const s of [-1, 1]) { extra.push([place(cylZ(0.05, wb * 0.5, 24), [s * (d.W / 2 + 0.06), shell.bottom(0.5) + 0.08, (axleF + axleR) / 2]), exM]); root.userData.exhaust.push([s * (d.W / 2 + 0.06), shell.bottom(0.5) + 0.08 + bodyLift, (axleF + axleR) / 2 - wb * 0.25]); }
    if (P.exhaust === 'stacks') for (const s of [-1, 1]) { extra.push([place(cyl(0.055, 0.06, 0.9, 20), [s * d.W * 0.3, roofY + 0.2, shell.zOf(prof.cab[0]) - 0.05]), exM]); root.userData.exhaust.push([s * d.W * 0.3, roofY + 0.65 + bodyLift, shell.zOf(prof.cab[0]) - 0.05]); }
    if (P.exhaust === 'zoomies') root.userData.exhaust.push([d.W * 0.3, engineAnchor.y + 0.5 + bodyLift, engineAnchor.z], [-d.W * 0.3, engineAnchor.y + 0.5 + bodyLift, engineAnchor.z]);
    // wheelie bars + parachute
    if (P.wheelieBar) {
      const wm = preset('chrome'); const z0 = axleR - 0.2, z1 = endZ(shell, 0.5, false) - 0.95;
      for (const s of [-1, 1]) { extra.push([strut([s * 0.35, shell.bottom(0.1) + 0.05, z0], [s * 0.3, 0.1, z1], 0.022), wm]); extra.push([place(cylX(0.07, 0.05, 20), [s * 0.3, 0.07, z1]), preset('rubber')]); }
      extra.push([strut([-0.3, 0.1, z1], [0.3, 0.1, z1], 0.02), wm]);
    }
    if (P.parachute) extra.push([place(cyl(0.11, 0.11, 0.3, 20), [0, shell.top(0.02) - 0.1, endZ(shell, 0.2, false) - 0.12], [Math.PI / 2, 0, 0]), preset('fabric', { color: '#c41818' })]);
    if (P.underglow) {
      const ug = emissive(P.underglowColor || '#21d4ff', 6);
      for (const s of [-1, 1]) extra.push([place(rbox(0.03, 0.015, wb * 0.7, 0.006), [s * d.W * 0.38, shell.bottom(0.5) - 0.01, (axleF + axleR) / 2]), ug]);
      const L1 = new THREE.PointLight(P.underglowColor || '#21d4ff', 6, 4, 2); L1.position.set(0, shell.bottom(0.5) - 0.05, (axleF + axleR) / 2); body.add(L1);
    }
  }
  if (extra.length) { const em = meshFrom(extra); em.name = 'details'; body.add(em); }
  body.position.y = bodyLift;
  // rear squat / drag stance
  if (P.rearHeight) body.rotation.x = Math.atan2(-P.rearHeight, wb);

  // engine
  {
    const eng = buildEngine(P);
    const a = engineAnchor || root.userData.engineAnchor || { z: axleF - 0.2, y: 0.3, maxH: 0.8 };
    const sz = eng.userData.size; const fit = Math.min(a.maxH / sz[1], (d.W * 0.7) / sz[0], a.maxL ? a.maxL / sz[2] : 9, 1.15);
    eng.scale.setScalar(frame === 'rail' ? 1 : clamp(fit, 0.4, 1.15)); eng.position.set(0, a.y, a.z);
    if (frame === 'closed' && fit < 0.4) eng.visible = false; // no room under this hood (e.g. a cab-over / city car): the engine is still simulated
    body.add(eng); root.userData.engine = eng;
  }

  // wheels
  const wheels = [];
  const trackF = d.W - tf.width * 0.9 + (P.flares || 0) * 1.6 + lift * 0.25, trackR = d.W - tr.width * 0.9 + (P.flares || 0) * 1.6 + lift * 0.25;
  const wf = root.userData.wheelOverride || {};
  const axles = [{ z: wf.zf ?? axleF, front: true, t: tf, track: wf.trackF ?? trackF }, { z: wf.zr ?? axleR, front: false, t: tr, track: wf.trackR ?? trackR }];
  for (const ax of axles) for (const s of [-1, 1]) {
    const w = buildWheel({ R: ax.t.R, rimR: ax.t.rimR, width: ax.t.width, rim: ax.front && P.skinnies ? 'drag' : P.rim, finish: P.rimFinish, rimColor: P.rimColor, tire: ax.front && P.skinnies ? 'street' : P.tire, caliper: P.caliper, whiteLetters: P.whiteLetters });
    const pivot = new THREE.Group(); pivot.position.set(s * ax.track / 2, ax.t.R, ax.z);
    const flip = new THREE.Group(); if (s < 0) flip.rotation.y = Math.PI; flip.add(w.spin); pivot.add(flip);
    const cal = w.caliper; const calHolder = new THREE.Group(); calHolder.position.copy(pivot.position); if (s < 0) cal.rotation.y = Math.PI; calHolder.add(cal); root.add(calHolder);
    root.add(pivot);
    wheels.push({ pivot, caliper: calHolder, front: ax.front, side: s, radius: ax.t.R, width: ax.t.width, x: s * ax.track / 2, z: ax.z, y: ax.t.R });
  }
  // offroad suspension visuals when lifted (axles, shocks)
  if (lift > 0.06 || (prof && d.clear >= 0.24)) {
    const sm = preset('metal', { color: '#2b2b2e', rough: 0.5 }), sh = carPaint({ color: '#e8c21a', finish: 'gloss', flake: 0 });
    const parts = [];
    for (const ax of axles) {
      parts.push([strut([-ax.track / 2 + 0.12, ax.t.R, ax.z], [ax.track / 2 - 0.12, ax.t.R, ax.z], 0.05), sm]);
      parts.push([place(sph(0.14, 16, 12), [0, ax.t.R, ax.z], 0, [1, 0.9, 0.9]), sm]);
      for (const s of [-1, 1]) parts.push([strut([s * (ax.track / 2 - 0.3), ax.t.R + 0.02, ax.z + 0.12], [s * (d.W / 2 - 0.35), bodyLift + d.clear + 0.25, ax.z + 0.18], 0.035), sh]);
    }
    parts.push([strut([0, axles[1].t.R + 0.05, axles[1].z], [0, axles[0].t.R + 0.05, axles[0].z - 0.4], 0.04), sm]);
    const sus = meshFrom(parts); sus.name = 'suspension'; root.add(sus);
  }
  root.userData.vehicle = { wheels, spec, body, hood: hoodMesh, bodyLift, dims: d, axleF, axleR, frame, shell, prof, P };
  root.userData.lights = collectLights(root);
  return root;
}

function collectLights(root) { return {}; }

// ---------------------------------------------------------------- special bodies
function buildDragster(root, body, P, d, spec, paint, extra) {
  const L = d.L, tr = spec.tireR;
  const rail = preset('chrome', { rough: 0.15 });
  const zr = -L / 2 + 0.9, zf = L / 2 - 0.4;
  root.userData.wheelOverride = { zf, zr, trackF: 0.95, trackR: 1.25 };
  for (const s of [-1, 1]) {
    extra.push([tube([[s * 0.32, 0.38, zr], [s * 0.3, 0.32, zr + 2], [s * 0.18, 0.24, zf - 0.6], [s * 0.1, 0.24, zf + 0.1]], 0.028, 40, 10), rail]);
    extra.push([tube([[s * 0.3, 0.75, zr + 0.2], [s * 0.25, 0.62, zr + 1.6], [s * 0.15, 0.36, zf - 1.5]], 0.022, 30, 8), rail]);
  }
  for (let k = 0; k < 9; k++) { const z = lerp(zr + 0.2, zf - 0.4, k / 8); const w = lerp(0.62, 0.22, k / 8); extra.push([strut([-w / 2, 0.3, z], [w / 2, 0.3, z], 0.018), rail]); }
  // driver cage + nose
  const zc = zr + 1.2;
  for (const s of [-1, 1]) { extra.push([strut([s * 0.3, 0.38, zc - 0.3], [s * 0.22, 1.05, zc], 0.025), rail]); extra.push([strut([s * 0.22, 1.05, zc], [s * 0.28, 0.4, zc + 0.6], 0.025), rail]); }
  extra.push([strut([-0.22, 1.05, zc], [0.22, 1.05, zc], 0.025), rail]);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.4, 24).rotateX(Math.PI / 2), paint); nose.position.set(0, 0.26, zf + 0.6); body.add(nose);
  const shell = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 2.6, 8, 20).rotateX(Math.PI / 2), paint); shell.scale.set(1, 0.55, 1); shell.position.set(0, 0.32, (zc + zf) / 2 - 0.4); body.add(shell);
  const seat = new THREE.Mesh(rbox(0.42, 0.5, 0.5, 0.06), preset('fabric', { color: '#111' })); seat.position.set(0, 0.6, zc - 0.05); body.add(seat);
  // big rear wing
  const wing = extrudeZY([[-0.45, 0], [0.4, 0.03], [0.45, 0.09], [0.35, 0.12], [-0.4, 0.06]], 1.6, 0.01); wing.rotateX(0.5); wing.translate(0, 1.75, zr - 0.5); extra.push([wing, paint]);
  for (const s of [-1, 1]) { extra.push([place(rbox(0.02, 0.9, 0.9, 0.01), [s * 0.8, 1.6, zr - 0.45]), paint]); extra.push([strut([s * 0.35, 0.7, zr], [s * 0.6, 1.55, zr - 0.4], 0.025), rail]); }
  root.userData.engineAnchor = { z: zr + 0.55, y: 0.35, maxH: 0.9 };
  root.userData.exhaust = [];
  for (const s of [-1, 1]) for (let k = 0; k < 4; k++) { const z = zr + 0.38 + k * 0.1; extra.push([strut([s * 0.3, 0.7, z], [s * 0.5, 0.9, z + 0.05], 0.025), rail]); root.userData.exhaust.push([s * 0.5, 0.92, z + 0.05]); }
}

function buildBuggy(root, body, P, d, spec, paint, extra) {
  const tube_ = carPaint({ color: P.paint, finish: 'gloss', flake: 0 });
  const W = d.W * 0.62, L = d.L * 0.85, y0 = 0.45 + d.clear * 0.5;
  const pts = (x, y, z) => [x, y, z];
  const loops = [[-L / 2 + 0.3, 0.55, 0.35], [-L * 0.1, 1.25, 0.5], [L * 0.15, 1.2, 0.48], [L / 2 - 0.25, 0.5, 0.3]];
  for (const s of [-1, 1]) {
    extra.push([tube(loops.map(([z, h, w]) => pts(s * W * w / 0.5 * 0.5, y0 + h - 0.5, z)), 0.03, 48, 10), tube_]);
    extra.push([strut([s * W * 0.5, y0, -L / 2 + 0.3], [s * W * 0.5, y0, L / 2 - 0.25], 0.03), tube_]);
  }
  for (const [z, h, w] of loops) { extra.push([strut([-W * w, y0 + h - 0.5, z], [W * w, y0 + h - 0.5, z], 0.028), tube_]); extra.push([strut([-W * 0.5, y0, z], [W * 0.5, y0, z], 0.028), tube_]); }
  extra.push([place(rbox(W * 0.95, 0.02, L * 0.55, 0.01), [0, y0 - 0.02, 0]), preset('metal', { color: '#3a3a3a', rough: 0.4 })]);
  for (const s of [-1, 1]) { extra.push([place(rbox(0.45, 0.1, 0.45, 0.05), [s * 0.28, y0 + 0.08, -0.05]), preset('fabric', { color: '#141414' })]); const b = rbox(0.45, 0.6, 0.1, 0.05); b.rotateX(-0.25); b.translate(s * 0.28, y0 + 0.4, -0.3); extra.push([b, preset('fabric', { color: '#141414' })]); }
  extra.push([place(torus(0.16, 0.02, 10, 32), [-0.28, y0 + 0.55, 0.38], [-0.6, 0, 0]), preset('leather', { color: '#111' })]);
  root.userData.engineAnchor = { z: -L / 2 + 0.5, y: y0 - 0.05, maxH: 0.75 };
  root.userData.wheelOverride = { zf: L / 2 - 0.2, zr: -L / 2 + 0.25, trackF: d.W, trackR: d.W };
  root.userData.exhaust = [[0.25, y0 + 0.3, -L / 2 - 0.05]];
}

export { vehicleSpec };
