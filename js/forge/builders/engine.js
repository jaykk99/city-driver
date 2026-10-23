// Procedural engine model: block, heads, valve covers, intake, turbos / supercharger / roots blower,
// headers, pulleys, radiator. Origin = bottom center, crank along Z (front = +Z).
import * as THREE from 'three';
import { rbox, cyl, cylZ, cylX, torus, tube, place, meshFrom } from '../geo/geo.js';
import { preset, carPaint } from '../render/materials.js';
import { CYL } from './vehiclesim.js';

export function buildEngine(P) {
  const type = P.engine || 'v8'; const n = CYL[type] ?? 8; const ind = P.induction || 'na';
  const g = new THREE.Group(); g.name = 'Engine';
  const blockM = carPaint({ color: P.engineColor || '#2b5fb3', finish: 'gloss', flake: 0 });
  const vcM = { chrome: preset('chrome'), black: preset('black', { rough: 0.35 }), red: carPaint({ color: '#b01515', finish: 'gloss', flake: 0 }), blue: carPaint({ color: '#1d4fb5', finish: 'gloss', flake: 0 }), carbon: preset('carbon') }[P.valveCovers] || preset('chrome');
  const alu = preset('brushed'), dark = preset('black', { rough: 0.6 }), chrome = preset('chrome'), rubber = preset('rubber');
  const header = ind === 'na' ? preset('chrome', { rough: 0.15 }) : preset('metal', { color: '#4a4440', rough: 0.45 });
  const wire = new THREE.MeshStandardMaterial({ color: 0xc81414, roughness: 0.5 });
  const pairs = [];
  const add = (geo, m) => pairs.push([geo, m]);

  if (type === 'electric') {
    add(place(cylZ(0.2, 0.5, 32), [0, 0.25, 0]), alu);
    add(place(rbox(0.6, 0.18, 0.45, 0.03), [0, 0.55, -0.05]), dark);
    for (let i = 0; i < 3; i++) add(tube([[0.18 - i * 0.05, 0.5, 0.15], [0.12 - i * 0.04, 0.42, 0.25], [0.05 - i * 0.03, 0.3, 0.26]], 0.018, 16, 8), new THREE.MeshStandardMaterial({ color: 0xff7a00, roughness: 0.5 }));
    add(place(rbox(0.7, 0.05, 0.6, 0.02), [0, 0.67, -0.05]), preset('plastic', { color: '#d8d8d8' }));
    g.add(meshFrom(pairs)); g.userData.size = [0.7, 0.7, 0.6]; return g;
  }

  const isV = type.startsWith('v'); const isRot = type === 'rotary';
  const perBank = isV ? n / 2 : n; const L = isRot ? 0.42 : 0.16 + perBank * 0.085; const W = isV ? 0.52 : isRot ? 0.44 : 0.3; const H = isV ? 0.36 : 0.42;
  // block + oil pan + bellhousing
  add(place(rbox(W, H, L, 0.03), [0, 0.12 + H / 2, 0]), blockM);
  add(place(rbox(W * 0.8, 0.12, L * 0.9, 0.02), [0, 0.06, -0.02]), dark);
  add(place(cylZ(0.24, 0.16, 32, 0.3), [0, 0.28, -L / 2 - 0.08]), alu);
  // heads + valve covers
  const topY = 0.12 + H;
  const bankPos = isV ? [[-1, 0.42], [1, -0.42]] : [[0, 0]];
  const headCenters = [];
  for (const [side, ang] of bankPos) {
    const x = isV ? side * W * 0.34 : 0; const y = topY + 0.04;
    const head = place(rbox(isV ? 0.2 : 0.24, 0.1, L * 0.96, 0.02), [0, 0, 0], [0, 0, ang]); head.translate(x, y, 0); add(head, blockM);
    const vcv = place(rbox(isV ? 0.18 : 0.22, 0.07, L * 0.92, 0.03), [0, 0.07, 0], [0, 0, 0]); vcv.rotateZ(ang); vcv.translate(x + Math.sin(-ang) * 0.06, y + Math.cos(ang) * 0.02, 0); add(vcv, vcM);
    // ribs on the cover
    for (let k = 0; k < 4; k++) { const rb = rbox(0.012, 0.02, L * 0.8, 0.005); rb.translate(-0.06 + k * 0.04, 0.115, 0); rb.rotateZ(ang); rb.translate(x + Math.sin(-ang) * 0.06, y + Math.cos(ang) * 0.02, 0); add(rb, vcM); }
    headCenters.push([x, y, side]);
    // headers: one primary per cylinder, sweeping out and down to a collector
    const outX = isV ? side * (W * 0.5 + 0.1) : W * 0.5 + 0.1;
    for (let c = 0; c < perBank; c++) {
      const z = -L / 2 + 0.08 + c * (L - 0.16) / Math.max(1, perBank - 1);
      const sx = isV ? side : 1;
      add(tube([[x + sx * 0.08, y - 0.05, z], [outX, y - 0.06, z], [outX + sx * 0.06, y - 0.2, z * 0.7], [outX + sx * 0.05, 0.12, -L * 0.15]], 0.022, 18, 8), header);
    }
    add(place(cylZ(0.045, 0.25, 12), [outX + (isV ? side : 1) * 0.05, 0.1, -L * 0.3]), header);
    // spark plug wires (classic V)
    if (isV && ind !== 'twinturbo' && !isRot) for (let c = 0; c < perBank; c++) {
      const z = -L / 2 + 0.08 + c * (L - 0.16) / Math.max(1, perBank - 1);
      add(tube([[x + side * 0.1, y + 0.03, z], [x + side * 0.04, y + 0.16, z * 0.6], [0.0, topY + 0.2, L / 2 - 0.05]], 0.006, 14, 5), wire);
    }
  }
  // intake / induction
  if (ind === 'blower') {
    const bw = W * 0.62, bh = 0.24, bl = L * 0.85;
    add(place(rbox(bw * 1.1, 0.05, bl * 1.05, 0.01), [0, topY + 0.1, 0]), alu); // intake plate
    add(place(rbox(bw, bh, bl, 0.05), [0, topY + 0.12 + bh / 2, 0]), preset('chrome', { rough: 0.12 }));
    for (let k = 0; k < 7; k++) add(place(rbox(bw + 0.02, 0.012, 0.015, 0.004), [0, topY + 0.17 + k * 0.028, bl / 2 + 0.005]), alu);
    // bug catcher scoop
    const sy = topY + 0.12 + bh;
    add(place(rbox(bw * 0.95, 0.16, bl * 0.55, 0.04), [0, sy + 0.08, -0.02]), alu);
    add(place(rbox(bw * 0.85, 0.12, 0.02, 0.01), [0, sy + 0.09, bl * 0.28]), dark);
    // belt drive
    add(place(cylZ(0.07, 0.04, 24), [0, topY + 0.2, L / 2 + 0.1]), alu);
    add(place(cylZ(0.09, 0.04, 24), [0, 0.3, L / 2 + 0.1]), alu);
    add(place(rbox(0.05, topY - 0.08, 0.035, 0.012), [0, (topY + 0.28) / 2, L / 2 + 0.1]), rubber);
  } else if (ind === 'turbo' || ind === 'twinturbo') {
    const sides = ind === 'twinturbo' && isV ? [-1, 1] : [1];
    for (const s of sides) {
      const tx = s * (W * 0.5 + 0.18), ty = 0.42, tz = L * 0.15;
      add(place(torus(0.075, 0.04, 12, 24), [tx, ty, tz], [0, Math.PI / 2, 0]), preset('metal', { color: '#6a625c', rough: 0.5 }));
      add(place(cylX(0.06, 0.1, 24), [tx + s * 0.05, ty, tz]), alu);
      add(place(cylX(0.065, 0.07, 24), [tx - s * 0.05, ty, tz]), preset('metal', { color: '#5a524c', rough: 0.55 }));
      add(tube([[tx + s * 0.1, ty, tz], [tx + s * 0.12, ty + 0.18, tz + 0.15], [s * 0.1, topY + 0.18, L / 2 + 0.08], [0, topY + 0.18, L / 2 - 0.05]], 0.035, 24, 10), alu);
    }
    add(place(rbox(W * 0.7, 0.12, L * 0.75, 0.03), [0, topY + 0.12, 0]), alu); // plenum
    add(place(cylZ(0.05, 0.08, 20), [0, topY + 0.14, L * 0.42]), alu);
    // intercooler at the front
    add(place(rbox(0.75, 0.32, 0.06, 0.01), [0, 0.32, L / 2 + 0.42]), preset('metal', { color: '#3a3c40', rough: 0.4 }));
    for (let k = 0; k < 12; k++) add(place(rbox(0.7, 0.006, 0.065, 0.002), [0, 0.18 + k * 0.024, L / 2 + 0.42]), alu);
  } else if (ind === 'supercharger') {
    add(place(rbox(W * 0.7, 0.12, L * 0.75, 0.03), [0, topY + 0.12, 0]), alu);
    const sx = W * 0.5 + 0.1;
    add(place(torus(0.08, 0.045, 12, 24), [sx, 0.5, L / 2 + 0.02], [0, 0, 0]), alu);
    add(place(cylZ(0.07, 0.08, 24), [sx, 0.5, L / 2 + 0.05]), alu);
    add(tube([[sx, 0.58, L / 2 + 0.05], [sx * 0.6, topY + 0.2, L / 2], [0, topY + 0.16, L * 0.3]], 0.04, 20, 10), alu);
  } else {
    // NA: intake manifold + round air cleaner (or ITBs on inline / rotary)
    add(place(rbox(W * 0.55, 0.1, L * 0.7, 0.03), [0, topY + 0.09, 0]), alu);
    if (isV) {
      add(place(cyl(0.2, 0.2, 0.08, 40), [0, topY + 0.2, 0]), preset('chrome'));
      add(place(cyl(0.21, 0.21, 0.015, 40), [0, topY + 0.245, 0]), preset('chrome'));
      add(place(cyl(0.19, 0.19, 0.06, 40, true), [0, topY + 0.19, 0]), preset('fabric', { color: '#d64545' }));
    } else {
      for (let c = 0; c < perBank; c++) { const z = -L / 2 + 0.08 + c * (L - 0.16) / Math.max(1, perBank - 1); add(place(cylX(0.035, 0.18, 16), [-W * 0.4, topY + 0.03, z]), alu); add(place(cylX(0.045, 0.03, 16), [-W * 0.4 - 0.1, topY + 0.03, z]), chrome); }
    }
  }
  // accessories: pulleys, alternator, belt, radiator + fan
  add(place(cylZ(0.085, 0.04, 28), [0, 0.28, L / 2 + 0.04]), alu);
  add(place(cylZ(0.06, 0.035, 24), [W * 0.38, 0.46, L / 2 + 0.04]), alu);
  add(place(cylZ(0.065, 0.1, 24), [W * 0.38, 0.46, L / 2 - 0.02]), preset('metal', { color: '#8c8f94' }));
  add(place(cylZ(0.05, 0.035, 24), [-W * 0.32, 0.5, L / 2 + 0.04]), alu);
  add(tube([[0, 0.195, L / 2 + 0.06], [W * 0.38 + 0.06, 0.46, L / 2 + 0.06], [0, 0.6, L / 2 + 0.06], [-W * 0.32 - 0.05, 0.5, L / 2 + 0.06], [0, 0.195, L / 2 + 0.06]], 0.008, 48, 6, true), rubber);
  add(place(rbox(0.72, 0.42, 0.05, 0.01), [0, 0.38, L / 2 + 0.3]), preset('metal', { color: '#2c2e31', rough: 0.5 }));
  add(place(cylZ(0.17, 0.04, 32, 0.17), [0, 0.38, L / 2 + 0.25]), dark);
  for (let k = 0; k < 6; k++) { const b = rbox(0.03, 0.14, 0.008, 0.004); b.translate(0, 0.08, 0); b.rotateZ(k * Math.PI / 3); b.translate(0, 0.38, L / 2 + 0.22); add(b, dark); }
  // battery
  add(place(rbox(0.24, 0.2, 0.18, 0.015), [-W * 0.5 - 0.22, 0.3, L * 0.3]), preset('plastic', { color: '#1d1d22' }));
  const mesh = meshFrom(pairs); g.add(mesh);
  g.userData.size = [W + 0.4, topY + 0.4, L + 0.6];
  return g;
}
