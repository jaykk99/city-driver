// High-detail pass for Forge car bodies (P.hd). Everything is computed from the lofted shell's own
// numbers (station curves top/belt/halfW/bottom), so it fits whatever body the design numbers produce —
// there are still no stored car shapes.
//   front: multi-element headlight clusters (projectors + LED running-light strips) or twin round lamps,
//          a framed honeycomb / bar grille, lower intakes, splitter, fog lamps, plate
//   rear:  segmented tail-light clusters (share the brake-light lens), reverse lamps, third brake light,
//          diffuser with fins, plate
//   sides: door shut lines, belt-line molding, side skirts, fuel door, side intakes (mid-engine),
//          wipers, shark-fin antenna, mud flaps (off-road)
// Local frame matches vehicle.js: +Z = front, Y up, ground at y = 0.
import * as THREE from 'three';
import { rbox, cyl, cylZ, sph, torus, tube, strut, place, meshFrom, extrudeZY } from '../geo/geo.js';
import { preset, lens, emissive, glass } from '../render/materials.js';
import { clamp, lerp } from '../core/util.js';

const hasDOM = typeof document !== 'undefined';
let honey = null, plateTex = null;
function honeycombMat() {
  if (honey) return honey;
  if (!hasDOM) return (honey = preset('black', { rough: 0.5 }));
  const c = document.createElement('canvas'); c.width = 128; c.height = 128; const g = c.getContext('2d');
  g.fillStyle = '#050506'; g.fillRect(0, 0, 128, 128);
  g.strokeStyle = '#3a3d42'; g.lineWidth = 5;
  const r = 16, h = r * Math.sqrt(3);
  for (let y = -1; y < 5; y++) for (let x = -1; x < 5; x++) {
    const cx = x * r * 3 + (y % 2 ? r * 1.5 : 0), cy = y * h / 2;
    g.beginPath(); for (let k = 0; k <= 6; k++) { const a = k * Math.PI / 3; g.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r); } g.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(6, 1.6); t.colorSpace = THREE.SRGBColorSpace;
  return (honey = new THREE.MeshStandardMaterial({ map: t, metalness: 0.5, roughness: 0.45 }));
}
function plateMat() {
  if (plateTex) return plateTex;
  if (!hasDOM) return (plateTex = preset('default', { color: '#eeeeea' }));
  const c = document.createElement('canvas'); c.width = 512; c.height = 160; const g = c.getContext('2d');
  g.fillStyle = '#f4f4ef'; g.fillRect(0, 0, 512, 160);
  g.strokeStyle = '#1f3c8a'; g.lineWidth = 8; g.strokeRect(6, 6, 500, 148);
  g.fillStyle = '#1f3c8a'; g.font = 'bold 26px Arial'; g.textAlign = 'center'; g.fillText('MANITOBA', 256, 38);
  g.fillStyle = '#16161a'; g.font = 'bold 86px Arial'; g.fillText('CTY 204', 256, 126);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return (plateTex = new THREE.MeshStandardMaterial({ map: t, roughness: 0.35, metalness: 0.25 }));
}

// rotation about Y that turns a part's +Z face to the body's outward normal (plan view) at station u, side s.
// Outline point (x = s*halfW(u), z = zOf(u)); tangent (dhw, dz); outward normal (s*dz, -dhw) at the ends.
function planYaw(shell, u, s) {
  const du = 0.003;
  const dhw = shell.halfW(Math.min(1, u + du)) - shell.halfW(Math.max(0, u - du));
  const dz = shell.zOf(u + du) - shell.zOf(u - du);
  return Math.atan2(s * dz, -dhw);
}
// local cluster coords (cluster faces its own +Z) -> body coords
function frameAt(x0, y0, z0, yaw) {
  const c = Math.cos(yaw), sn = Math.sin(yaw);
  return (lx, ly, lz) => [x0 + lx * c + lz * sn, y0 + ly, z0 - lx * sn + lz * c];
}
// last station from the nose (or tail) whose half width reaches |x|
function endU(shell, x, front) {
  const ax = Math.abs(x);
  if (front) { for (let u = 0.999; u > 0.5; u -= 0.0015) if (shell.halfW(u) >= ax) return u; return 0.5; }
  for (let u = 0.001; u < 0.5; u += 0.0015) if (shell.halfW(u) >= ax) return u; return 0.5;
}
// x of the lower body side at station u, height y (follows the lofter's side bulge)
function sideX(shell, P, u, y) {
  const hw = shell.halfW(u), yb = shell.bottom(u), bl = shell.belt(u);
  const bulge = 0.025 * (1 - (P.boxy ?? 0.55) * 0.6);
  const t = clamp((y - yb) / Math.max(0.05, bl - yb), 0, 1);
  return hw + bulge * Math.sin(Math.PI * t) * hw;
}

// Adds the detail mesh to `body`. mats: { paint, tail } — the exact material objects the car uses,
// so the game's per-car material swap (paint color, brake lights) still reaches the new parts.
export function addCarDetail(v, body, mats) {
  const { shell, prof, P, dims } = v;
  if (!shell || !prof) return null;
  const W = dims.W, H = dims.H, cab = prof.cab;
  const out = [];
  const paint = mats.paint, tailM = mats.tail || lens('#c80a0a', 0.6);
  const gloss = preset('black', { rough: 0.18 }), satin = preset('black', { rough: 0.5 }), rubber = preset('rubber');
  const chrome = preset('chrome'), trimM = P.trim === 'chrome' ? chrome : gloss;
  const carbon = preset('carbon');
  const drl = emissive('#eaf3ff', 3.2), headLens = lens('#f4f8ff', 0.9), amber = lens('#ff9a1a', 0.5);
  const reverse = lens('#f7f7f2', 0.15), clearCover = glass({ tint: 0.02, color: '#dfe9f5' });
  const utility = !!prof.bed || dims.clear >= 0.2;
  const mid = !!prof.mid;
  const round = P.headlights === 'round';
  const low = H < 1.36;

  // ------------------------------------------------------------ FRONT
  const uNose = 0.995;
  const yBot = shell.bottom(uNose), yTopN = shell.top(uNose);
  const faceH = Math.max(0.2, yTopN - yBot);
  const yHead = lerp(yBot, shell.top(0.975), low ? 0.66 : 0.62);
  for (const s of [-1, 1]) {
    const xC = s * W / 2 * (round ? 0.6 : 0.63);
    const u = endU(shell, Math.abs(xC) + 0.17, true), z = shell.zOf(u);
    const yaw = planYaw(shell, u, s);
    const pitch = Math.atan2(shell.top(u) - shell.top(Math.min(0.999, u + 0.02)), 0.02 * shell.L) * 0.6;
    const at = frameAt(xC, yHead, z, yaw);
    if (round) {
      const quad = P.quadLights;
      const lamps = quad ? [-0.11, 0.1] : [0];
      for (const off of lamps) {
        const r = quad ? 0.075 : 0.095;
        out.push([place(torus(r, 0.016, 8, 28), at(off, 0, 0.0), [0, yaw, 0]), chrome]);
        out.push([place(cylZ(r * 0.98, 0.07, 28), at(off, 0, -0.035), [0, yaw, 0]), gloss]);
        out.push([place(sph(r * 0.92, 24, 10), at(off, 0, -0.01), [0, yaw, 0], [1, 1, 0.38]), headLens]);
        out.push([place(sph(r * 0.32, 14, 8), at(off, 0, 0.01), [0, yaw, 0], [1, 1, 0.5]), drl]);
      }
    } else {
      const w = clamp(W * 0.22, 0.34, 0.46), h = low ? 0.1 : 0.13;
      const hous = rbox(w, h, 0.16, 0.03); hous.rotateX(pitch); hous.rotateY(yaw);
      const p0 = at(0, 0, -0.06); hous.translate(p0[0], p0[1], p0[2]); out.push([hous, gloss]);
      const refl = rbox(w * 0.9, h * 0.72, 0.02, 0.02); refl.rotateX(pitch); refl.rotateY(yaw); const pr = at(0, -0.004, 0.022); refl.translate(pr[0], pr[1], pr[2]); out.push([refl, chrome]);
      // two projector modules
      for (const k of [-0.24, 0.12]) {
        const px = k * w * (s > 0 ? 1 : -1);
        out.push([place(cylZ(h * 0.34, 0.05, 20), at(px, -0.004, 0.035), [pitch, yaw, 0]), chrome]);
        out.push([place(sph(h * 0.3, 18, 10), at(px, -0.004, 0.058), [pitch, yaw, 0], [1, 1, 0.45]), headLens]);
      }
      // LED running-light strip along the top edge + an L down the outer side
      const st = rbox(w * 0.96, 0.014, 0.02, 0.006); st.rotateX(pitch); st.rotateY(yaw); const p1 = at(0, h * 0.36, 0.03); st.translate(p1[0], p1[1], p1[2]); out.push([st, drl]);
      // (no outer vertical strip: on curvy noses it pokes out of the fender)
      // amber side marker
      out.push([place(rbox(0.08, 0.025, 0.02, 0.008), at(s * w * 0.42, -h * 0.38, 0.03), [0, yaw, 0]), amber]);
      const cv = rbox(w + 0.02, h + 0.02, 0.03, 0.03); cv.rotateX(pitch); cv.rotateY(yaw); const p3 = at(0, 0, 0.05); cv.translate(p3[0], p3[1], p3[2]); out.push([cv, clearCover]);
    }
  }
  // grille
  {
    const gw = utility ? W * 0.62 : mid ? W * 0.5 : round ? W * 0.62 : W * 0.44;
    const gh = utility ? faceH * 0.42 : mid ? 0.1 : faceH * 0.3;
    const yG = utility ? lerp(yBot, yTopN, 0.55) : mid ? yBot + 0.12 : lerp(yBot, yHead, 0.55);
    const uG = endU(shell, gw * 0.5, true); const zG = shell.zOf(uG);
    const grill = new THREE.PlaneGeometry(gw, gh); grill.translate(0, yG, zG - 0.004);
    // wrap the grille plane around the nose: push its corners back where the outline curves away
    const pa = grill.attributes.position; for (let i = 0; i < pa.count; i++) { const x = pa.getX(i); pa.setZ(i, shell.zOf(endU(shell, Math.abs(x) + 0.01, true)) + 0.006); }
    out.push([grill, utility ? satin : honeycombMat()]);
    // frame
    const fr = (P.trim === 'chrome' || utility) ? chrome : gloss;
    const zf = zG + 0.016;
    out.push([tube([[-gw / 2, yG + gh / 2, shell.zOf(endU(shell, gw / 2, true))], [0, yG + gh / 2 + 0.01, zf], [gw / 2, yG + gh / 2, shell.zOf(endU(shell, gw / 2, true))]], 0.014, 24, 6), fr]);
    out.push([tube([[-gw / 2, yG - gh / 2, shell.zOf(endU(shell, gw / 2, true))], [0, yG - gh / 2, zf], [gw / 2, yG - gh / 2, shell.zOf(endU(shell, gw / 2, true))]], 0.012, 24, 6), fr]);
    if (utility) for (let k = 1; k < 4; k++) { const y = yG - gh / 2 + gh * k / 4; out.push([tube([[-gw / 2, y, shell.zOf(endU(shell, gw / 2, true))], [0, y, zf + 0.01], [gw / 2, y, shell.zOf(endU(shell, gw / 2, true))]], 0.012, 24, 6), fr]); }
  }
  // lower fascia: side intakes, splitter, fog lamps / steel bumper
  if (utility) {
    const zB = shell.zOf(endU(shell, W * 0.42, true)) + 0.06, yB = yBot + 0.03;
    out.push([place(rbox(W * 0.94, 0.16, 0.16, 0.03), [0, yB, zB]), P.trim === 'chrome' ? chrome : satin]);
    for (const s of [-1, 1]) {
      out.push([place(cylZ(0.05, 0.05, 16), [s * W * 0.32, yB + 0.01, zB + 0.07]), chrome]);
      out.push([place(sph(0.046, 14, 8), [s * W * 0.32, yB + 0.01, zB + 0.095], 0, [1, 1, 0.4]), headLens]);
      out.push([place(torus(0.04, 0.012, 6, 14), [s * W * 0.18, yB - 0.09, zB + 0.03], [0, Math.PI / 2, 0]), preset('default', { color: '#c41818', rough: 0.4 })]);
    }
    out.push([place(rbox(W * 0.6, 0.02, 0.5, 0.01), [0, dims.clear + 0.02, zB - 0.4]), preset('metal', { color: '#5a5d61', rough: 0.4 })]);
  } else {
    for (const s of [-1, 1]) {
      const x = s * W * (mid ? 0.32 : 0.34), u = endU(shell, Math.abs(x) + 0.08, true);
      const z = shell.zOf(u), y = yBot + 0.1;
      const yaw = planYaw(shell, u, s);
      const iw = mid ? 0.32 : 0.26, ih = mid ? 0.14 : 0.1;
      out.push([place(rbox(iw, ih, 0.08, 0.025), [x, y, z - 0.03], [0, yaw, 0]), honeycombMat()]);
      out.push([place(rbox(iw + 0.03, 0.016, 0.09, 0.006), [x, y + ih / 2, z - 0.025], [0, yaw, 0]), gloss]);
      if (!mid && !low) { out.push([place(cylZ(0.035, 0.03, 14), [x, y, z + 0.01], [0, yaw, 0]), chrome]); out.push([place(sph(0.03, 12, 8), [x, y, z + 0.02], [0, yaw, 0], [1, 1, 0.4]), headLens]); }
    }
    const zS = shell.zOf(endU(shell, W * 0.36, true)) - 0.02;
    out.push([place(extrudeZY([[-0.2, 0], [0.06, 0], [0.04, 0.025], [-0.2, 0.03]], W * 0.86, 0.006), [0, yBot - 0.035, zS]), low ? carbon : satin]);
  }
  // front plate (not on exotics)
  if (!mid) { const uP = endU(shell, 0.3, true); out.push([place(new THREE.PlaneGeometry(0.5, 0.11), [0, yBot + (utility ? 0.2 : 0.05), shell.zOf(uP) + (utility ? 0.16 : 0.01)]), plateMat()]); }

  // ------------------------------------------------------------ REAR
  const uTail = 0.006;
  const yRB = shell.bottom(uTail), yRT = shell.top(0.02);
  const yTail = lerp(yRB, yRT, utility ? 0.7 : 0.74);
  for (const s of [-1, 1]) {
    const xC = s * W / 2 * (utility ? 0.84 : 0.66);
    const u = endU(shell, Math.abs(xC) + (utility ? 0.06 : 0.14), false), z = shell.zOf(u);
    const yaw = planYaw(shell, u, s);
    const tw = utility ? 0.12 : clamp(W * 0.2, 0.32, 0.42), th = utility ? 0.42 : low ? 0.09 : 0.11;
    const at = frameAt(xC, yTail, z, yaw);
    out.push([place(rbox(tw + 0.02, th + 0.02, 0.1, 0.02), at(0, 0, -0.03), [0, yaw, 0]), gloss]);
    out.push([place(rbox(tw, th, 0.06, 0.02), at(0, 0, 0.0), [0, yaw, 0]), tailM]);
    // light-pipe bars inside the lens (share the brake lens so they flare when braking)
    const bars = utility ? 4 : 3;
    for (let k = 0; k < bars; k++) {
      const g = utility ? rbox(tw * 0.7, 0.018, 0.02, 0.006) : rbox(tw * 0.86, 0.012, 0.02, 0.005);
      const ly = utility ? -th / 2 + th * (k + 0.5) / bars : -th * 0.3 + th * 0.3 * k;
      out.push([place(g, at(0, ly, 0.032), [0, yaw, 0]), tailM]);
    }
    out.push([place(rbox(utility ? tw * 0.7 : 0.08, utility ? 0.05 : th * 0.5, 0.02, 0.006), at(utility ? 0 : -s * tw * 0.32, utility ? -th / 2 + 0.03 : 0, 0.034), [0, yaw, 0]), reverse]);
  }
  if (P.tailBar && !utility) { const u = endU(shell, 0.05, false); out.push([place(rbox(W * 0.48, 0.016, 0.02, 0.006), [0, yTail + 0.02, shell.zOf(u) - 0.02]), tailM]); }
  // third brake light on top of the rear glass / cab
  { const u3 = utility ? cab[0] + 0.004 : cab[1] - 0.008; out.push([place(rbox(0.32, 0.02, 0.03, 0.008), [0, shell.top(u3) - 0.035, shell.zOf(u3) - 0.01]), tailM]); }
  // diffuser / rear bumper
  if (utility) {
    const zB = shell.zOf(endU(shell, W * 0.42, false)) - 0.05;
    out.push([place(rbox(W * 0.92, 0.15, 0.14, 0.03), [0, yRB + 0.02, zB]), P.trim === 'chrome' ? chrome : satin]);
    out.push([place(rbox(0.1, 0.08, 0.12, 0.01), [0, yRB - 0.06, zB - 0.05]), preset('metal', { color: '#3a3a3e' })]);
    out.push([place(new THREE.PlaneGeometry(0.5, 0.11), [0, yRB + 0.17, zB - 0.075], [0, Math.PI, 0]), plateMat()]);
  } else {
    const zD = shell.zOf(endU(shell, W * 0.3, false));
    out.push([place(rbox(W * 0.74, 0.07, 0.3, 0.02), [0, yRB - 0.005, zD + 0.16]), satin]);
    for (let k = -2; k <= 2; k++) out.push([place(rbox(0.01, 0.07, 0.24, 0.004), [k * W * 0.1, yRB - 0.02, zD + 0.12]), satin]);
    const uP = endU(shell, 0.3, false); out.push([place(new THREE.PlaneGeometry(0.5, 0.11), [0, lerp(yRB, yTail, 0.45), shell.zOf(uP) - 0.008], [0, Math.PI, 0]), plateMat()]);
  }

  // ------------------------------------------------------------ SIDES
  const uF = (v.axleF / shell.L) + 0.5, uR = (v.axleR / shell.L) + 0.5; // wheel centers as stations
  const archU = (0.36 + 0.05) / shell.L;
  for (const s of [-1, 1]) {
    // side skirt between the arches
    const u0 = uR + archU * 1.25, u1 = uF - archU * 1.25;
    if (u1 > u0) {
      const pts = []; for (let k = 0; k <= 8; k++) { const u = lerp(u0, u1, k / 8); pts.push([s * (sideX(shell, P, u, shell.bottom(u) + 0.04) + 0.004), shell.bottom(u) + 0.025, shell.zOf(u)]); }
      out.push([tube(pts, 0.035, 16, 6), utility ? satin : (low ? carbon : satin)]);
    }
    // door shut lines (front edge, rear edge) + belt molding
    const twoDoor = !(P.roofLength > 0.4) || low;
    const dF = cab[3] - 0.012, dR = twoDoor ? lerp(cab[0], cab[1], 0.6) : lerp(cab[0], cab[1], 0.35);
    const doorLines = twoDoor ? [dF, dR] : [dF, (cab[1] + cab[2]) / 2 - 0.01, dR];
    for (const u of doorLines) {
      if (u < u0 - 0.02 || u > u1 + 0.06) continue;
      const pts = []; const yb = shell.bottom(u) + 0.07, yt = shell.belt(u) - 0.012;
      for (let k = 0; k <= 6; k++) { const y = lerp(yb, yt, k / 6); pts.push([s * (sideX(shell, P, u, y) + 0.0015), y, shell.zOf(u)]); }
      out.push([tube(pts, 0.0045, 10, 4), gloss]);
    }
    { // belt-line window molding
      const pts = []; const a = cab[0] + 0.02, b = cab[3] - 0.02;
      for (let k = 0; k <= 10; k++) { const u = lerp(a, b, k / 10); pts.push([s * (shell.halfW(u) + 0.002), shell.belt(u) + 0.004, shell.zOf(u)]); }
      out.push([tube(pts, 0.008, 24, 5), trimM]);
    }
    if (mid) { // side intake ahead of the rear wheel
      const u = uR + archU * 1.6; const y = lerp(shell.bottom(u), shell.belt(u), 0.6);
      out.push([place(rbox(0.06, 0.16, 0.42, 0.03), [s * (sideX(shell, P, u, y) - 0.012), y, shell.zOf(u) + 0.12], [0, 0, -s * 0.12]), honeycombMat()]);
    }
    if (dims.clear >= 0.2) { // mud flaps behind each wheel
      for (const u of [uF, uR]) out.push([place(rbox(0.26, 0.26, 0.012, 0.004), [s * (shell.halfW(u) - 0.16), dims.clear + 0.08, shell.zOf(u) - 0.5]), rubber]);
    }
  }
  // fuel door (right rear quarter)
  { const u = uR + archU * 1.4; const y = lerp(shell.bottom(u), shell.belt(u), 0.78);
    const x = sideX(shell, P, u, y) + 0.004; out.push([place(cyl(0.065, 0.065, 0.008, 20), [x, y, shell.zOf(u)], [0, 0, Math.PI / 2]), paint]);
    out.push([place(torus(0.066, 0.004, 4, 20), [x, y, shell.zOf(u)], [0, Math.PI / 2, 0]), gloss]); }
  // wipers on the cowl
  if (!utility || true) {
    const u = cab[3] + 0.006, y = shell.top(u) + 0.012, z = shell.zOf(u);
    for (const s of [-1, 1]) out.push([strut([s * W * 0.04 - W * 0.12, y, z], [s * W * 0.04 + W * 0.16, y + 0.012, z - 0.03], 0.007, 5), satin]);
  }
  // shark-fin antenna at the back of the roof
  if (!prof.bed) { const u = cab[1] + 0.02; out.push([place(extrudeZY([[-0.08, 0], [0.08, 0], [-0.05, 0.06]], 0.035, 0.008), [0, shell.top(u) - 0.004, shell.zOf(u)]), utility ? satin : paint]); }

  const m = meshFrom(out); m.name = 'detailHD';
  body.add(m);
  return m;
}
