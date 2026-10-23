// Procedural, tileable PBR textures generated on a canvas (no downloads needed).
// Each kind returns { map, normalMap, roughnessMap } as THREE textures, cached.
import * as THREE from 'three';
import { rng, isMobile, clamp } from '../core/util.js';

const cache = new Map();
const SIZE = isMobile ? 256 : 512;

// ---- tileable value noise ----------------------------------------------------
function makeNoise(seed) {
  const r = rng(seed); const P = 512; const perm = new Float32Array(P * P);
  for (let i = 0; i < perm.length; i++) perm[i] = r();
  return (x, y, period) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const p = period | 0;
    const g = (a, b) => perm[(((a % p) + p) % p) * P + (((b % p) + p) % p)];
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const a = g(xi, yi), b = g(xi + 1, yi), c = g(xi, yi + 1), d = g(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  };
}
function fbmField(size, seed, baseFreq, octaves = 5, gain = 0.5, warp = 0) {
  const n = makeNoise(seed), n2 = warp ? makeNoise(seed + 77) : null;
  const out = new Float32Array(size * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let u = x / size, v = y / size;
    if (warp) { u += warp * (n2(u * 4, v * 4, 4) - 0.5); v += warp * (n2(u * 4 + 9, v * 4 + 9, 4) - 0.5); }
    let amp = 1, f = baseFreq, s = 0, norm = 0;
    for (let o = 0; o < octaves; o++) { s += amp * n(u * f, v * f, f); norm += amp; amp *= gain; f *= 2; }
    out[y * size + x] = s / norm;
  }
  return out;
}
function cellField(size, seed, cells) { // worley-ish distance to nearest feature point (tileable)
  const r = rng(seed); const pts = [];
  for (let j = 0; j < cells; j++) for (let i = 0; i < cells; i++) pts.push([(i + r()) / cells, (j + r()) / cells]);
  const out = new Float32Array(size * size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size; const ci = Math.floor(u * cells), cj = Math.floor(v * cells);
    let best = 9, second = 9;
    for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
      const ii = (ci + di + cells) % cells, jj = (cj + dj + cells) % cells; const p = pts[jj * cells + ii];
      let dx = p[0] + (ci + di - ii) / cells - u, dy = p[1] + (cj + dj - jj) / cells - v;
      const d = Math.hypot(dx, dy);
      if (d < best) { second = best; best = d; } else if (d < second) second = d;
    }
    out[y * size + x] = (second - best) * cells; // edge distance
  }
  return out;
}

// ---- canvas helpers -------------------------------------------------------------
function canvasFrom(size, fn) {
  const c = document.createElement('canvas'); c.width = c.height = size;
  const ctx = c.getContext('2d'); const img = ctx.createImageData(size, size); const d = img.data;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = (y * size + x) * 4; const [r, g, b, a] = fn(x, y, y * size + x);
    d[i] = r; d[i + 1] = g; d[i + 2] = b; d[i + 3] = a ?? 255;
  }
  ctx.putImageData(img, 0, 0); return c;
}
function normalFromHeight(h, size, strength = 2) {
  return canvasFrom(size, (x, y) => {
    const at = (a, b) => h[((b + size) % size) * size + ((a + size) % size)];
    const dx = (at(x + 1, y) - at(x - 1, y)) * strength, dy = (at(x, y + 1) - at(x, y - 1)) * strength;
    const len = Math.hypot(dx, dy, 1);
    return [(-dx / len * 0.5 + 0.5) * 255, (dy / len * 0.5 + 0.5) * 255, (1 / len * 0.5 + 0.5) * 255];
  });
}
function tex(canvas, srgb, repeat = 1) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat, repeat);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = 8; t.needsUpdate = true; return t;
}
const mix = (a, b, t) => a + (b - a) * t;
const col = (c1, c2, t) => [mix(c1[0], c2[0], t), mix(c1[1], c2[1], t), mix(c1[2], c2[2], t)];

// ---- kinds ----------------------------------------------------------------------
const KINDS = {
  asphalt(s) {
    const h = fbmField(s, 11, 16, 5, 0.55); const sp = fbmField(s, 12, 64, 2, 0.5);
    return { color: i => { const v = 62 + h[i] * 26 + (sp[i] > 0.78 ? 14 : 0); return [v, v, v * 1.02]; }, height: h, rough: i => 225 - h[i] * 30, ns: 2 };
  },
  concrete(s) {
    const h = fbmField(s, 21, 6, 6, 0.55, 0.2); const p = fbmField(s, 22, 48, 2);
    return { color: i => { const v = 112 + h[i] * 40 - (p[i] > 0.86 ? 8 : 0); return [v, v * 0.99, v * 0.96]; }, height: h, rough: i => 200 + h[i] * 40, ns: 1.5 };
  },
  grass(s) {
    const h = fbmField(s, 31, 8, 6, 0.55, 0.3); const b = fbmField(s, 32, 96, 2, 0.6);
    return { color: i => col([46, 78, 26], [104, 132, 48], clamp(h[i] * 0.8 + b[i] * 0.5 - 0.15, 0, 1)), height: b, rough: () => 235, ns: 2.5 };
  },
  dirt(s) {
    const h = fbmField(s, 41, 8, 6, 0.55, 0.25); const pb = fbmField(s, 42, 40, 3);
    return { color: i => col([78, 58, 40], [132, 104, 74], clamp(h[i] * 1.1 - 0.05 + (pb[i] > 0.7 ? 0.2 : 0), 0, 1)), height: pb.map((v, i) => v * 0.6 + h[i] * 0.4), rough: () => 240, ns: 3 };
  },
  mud(s) {
    const h = fbmField(s, 45, 6, 6, 0.6, 0.4);
    return { color: i => col([44, 32, 22], [88, 66, 46], clamp(h[i], 0, 1)), height: h, rough: i => h[i] > 0.5 ? 120 : 60, ns: 2 };
  },
  rock(s) {
    const h = fbmField(s, 51, 5, 7, 0.58, 0.5); const c = cellField(s, 52, 7);
    return { color: i => col([84, 80, 76], [150, 144, 136], clamp(h[i] * 1.2 - 0.1, 0, 1)).map(v => v * (0.75 + Math.min(c[i], 0.25))), height: h.map((v, i) => v * 0.7 + Math.min(c[i], 0.3)), rough: () => 225, ns: 4 };
  },
  sand(s) {
    const h = fbmField(s, 61, 10, 5, 0.5); const rip = new Float32Array(s * s);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) rip[y * s + x] = 0.5 + 0.5 * Math.sin((x / s) * Math.PI * 2 * 18 + h[y * s + x] * 6);
    return { color: i => col([196, 168, 120], [226, 204, 160], h[i]), height: rip.map((v, i) => v * 0.4 + h[i] * 0.6), rough: () => 240, ns: 1.5 };
  },
  snow(s) {
    const h = fbmField(s, 71, 6, 6, 0.55);
    return { color: i => { const v = 228 + h[i] * 24; return [v * 0.96, v * 0.98, v]; }, height: h, rough: i => 140 + h[i] * 60, ns: 1.2 };
  },
  brick(s) {
    const n = fbmField(s, 81, 32, 3); const rows = 16, cols = 8;
    const hgt = new Float32Array(s * s), tint = new Float32Array(rows * cols * 2); const r = rng(8);
    for (let i = 0; i < tint.length; i++) tint[i] = r();
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      const rv = (y / s) * rows, row = Math.floor(rv), cv = (x / s) * cols + (row % 2) * 0.5, cl = Math.floor(cv);
      const fy = rv - row, fx = cv - cl; const mortar = fy < 0.08 || fx < 0.04;
      hgt[y * s + x] = mortar ? 0 : 0.8 + n[y * s + x] * 0.2;
    }
    return {
      color: i => { const y = Math.floor(i / s), x = i % s; const rv = (y / s) * rows, row = Math.floor(rv), cl = Math.floor((x / s) * cols + (row % 2) * 0.5);
        if (hgt[i] === 0) return [168, 162, 150]; const t = tint[(row * cols + (cl % cols)) % tint.length];
        return col([120, 50, 36], [172, 86, 60], t * 0.7 + n[i] * 0.4); },
      height: hgt, rough: i => hgt[i] ? 215 : 245, ns: 4 };
  },
  wood(s) {
    const n = fbmField(s, 91, 4, 4, 0.5, 0.3); const g = new Float32Array(s * s);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) { const i = y * s + x; g[i] = 0.5 + 0.5 * Math.sin((y / s) * Math.PI * 2 * 9 + n[i] * 14); }
    return { color: i => col([96, 58, 30], [170, 112, 64], g[i] * 0.7 + n[i] * 0.3), height: g, rough: i => 150 + g[i] * 60, ns: 1 };
  },
  brushed(s) {
    const h = new Float32Array(s * s); const r = rng(5); const line = new Float32Array(s); for (let y = 0; y < s; y++) line[y] = r();
    const n = fbmField(s, 101, 8, 3);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) h[y * s + x] = line[y] * 0.7 + n[y * s + x] * 0.3;
    return { color: i => { const v = 190 + h[i] * 30; return [v, v, v * 1.02]; }, height: h, rough: i => 70 + h[i] * 70, ns: 0.6 };
  },
  carbon(s) {
    const h = new Float32Array(s * s); const cells = 16;
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      const u = x / s * cells, v = y / s * cells, cu = Math.floor(u), cv = Math.floor(v);
      const twill = ((cu + cv) % 2 === 0); const f = twill ? u - cu : v - cv;
      h[y * s + x] = 0.5 + 0.5 * Math.sin(f * Math.PI) * (twill ? 1 : 0.8);
    }
    return { color: i => { const v = 18 + h[i] * 34; return [v, v, v * 1.05]; }, height: h, rough: () => 110, ns: 1.5 };
  },
  fabric(s) {
    const h = new Float32Array(s * s); const n = fbmField(s, 111, 16, 3);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) h[y * s + x] = 0.5 + 0.25 * Math.sin(x / s * Math.PI * 2 * 64) + 0.25 * Math.sin(y / s * Math.PI * 2 * 64) + n[y * s + x] * 0.2;
    return { color: i => { const v = 200 + h[i] * 40; return [v, v, v]; }, height: h, rough: () => 245, ns: 1.2 };
  },
  leather(s) {
    const c = cellField(s, 121, 40); const n = fbmField(s, 122, 12, 4);
    return { color: i => { const v = 180 + n[i] * 40; return [v, v, v]; }, height: c.map(v => Math.min(v, 0.3) * 3), rough: i => 150 + n[i] * 50, ns: 1.5 };
  },
  marble(s) {
    const n = fbmField(s, 131, 3, 6, 0.55, 0.8);
    return { color: i => { const vein = Math.pow(1 - Math.abs(Math.sin(n[i] * 18)), 12); return col([236, 233, 228], [120, 118, 116], vein); }, height: n.map(() => 0.5), rough: () => 40, ns: 0 };
  },
  tread(s) { // tire tread grooves (u = around tire, v = across)
    const h = new Float32Array(s * s);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      const u = x / s, v = y / s; const groove = Math.abs(((v * 4) % 1) - 0.5) < 0.06; const sipe = Math.abs(((u * 24 + v * 3) % 1) - 0.5) < 0.05;
      h[y * s + x] = groove ? 0 : sipe ? 0.45 : 1;
    }
    return { color: i => { const v = 26 + h[i] * 10; return [v, v, v]; }, height: h, rough: () => 235, ns: 5 };
  },
  flake(s) { // metallic paint flake normal
    const r = rng(141); const h = new Float32Array(s * s); for (let i = 0; i < h.length; i++) h[i] = r();
    return { color: () => [255, 255, 255], height: h, rough: () => 255, ns: 0.35 };
  },
  stipple(s) { // grip texture
    const r = rng(151); const h = new Float32Array(s * s); const n = fbmField(s, 152, 64, 2);
    for (let i = 0; i < h.length; i++) h[i] = n[i] > 0.55 ? 1 : 0.3 + r() * 0.1;
    return { color: () => [60, 60, 60], height: h, rough: () => 230, ns: 3 };
  },
  plaster(s) {
    const h = fbmField(s, 161, 10, 6, 0.6);
    return { color: i => { const v = 215 + h[i] * 25; return [v, v * 0.98, v * 0.95]; }, height: h, rough: () => 235, ns: 1.2 };
  },
  lava(s) {
    const h = fbmField(s, 171, 5, 6, 0.6, 0.6); const c = cellField(s, 172, 8);
    return { color: i => { const crack = c[i] < 0.08 ? 1 : 0; return crack ? [255, 120 + h[i] * 80, 20] : col([24, 18, 16], [70, 40, 30], h[i]); }, height: c.map(v => Math.min(v, 0.3) * 3), rough: i => c[i] < 0.08 ? 120 : 230, ns: 3, emissive: true };
  },
  ice(s) {
    const c = cellField(s, 181, 6); const n = fbmField(s, 182, 6, 5);
    return { color: i => col([170, 210, 236], [226, 242, 252], n[i] + (c[i] < 0.04 ? 0.3 : 0)), height: c.map(v => Math.min(v, 0.2) * 5), rough: () => 30, ns: 0.8 };
  },
  water(s) { // tileable normal map for water surfaces
    const h1 = fbmField(s, 191, 4, 6, 0.55, 0.6);
    return { color: () => [255, 255, 255], height: h1, rough: () => 0, ns: 6 };
  },
};

export function proceduralTexture(kind, repeat = 1) {
  const key = kind + '|' + repeat;
  if (cache.has(key)) return cache.get(key);
  const base = cache.get(kind + '|base') || (() => {
    const def = (KINDS[kind] || KINDS.concrete)(SIZE);
    const s = SIZE;
    const mapC = canvasFrom(s, (x, y, i) => def.color(i).map(v => clamp(v, 0, 255)));
    const normC = def.ns ? normalFromHeight(def.height, s, def.ns) : null;
    const roughC = canvasFrom(s, (x, y, i) => { const v = clamp(def.rough(i), 0, 255); return [v, v, v]; });
    const b = { mapC, normC, roughC, emissive: !!def.emissive };
    cache.set(kind + '|base', b); return b;
  })();
  const out = {
    map: tex(base.mapC, true, repeat),
    normalMap: base.normC ? tex(base.normC, false, repeat) : null,
    roughnessMap: tex(base.roughC, false, repeat),
    emissive: base.emissive,
  };
  cache.set(key, out); return out;
}

// Small helper textures -----------------------------------------------------------
export function radialSprite(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)', size = 64) {
  const key = 'sprite|' + inner + outer + size; if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
  const gr = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gr.addColorStop(0, inner); gr.addColorStop(1, outer); g.fillStyle = gr; g.fillRect(0, 0, size, size);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; cache.set(key, t); return t;
}

export function camoTexture(kind) {
  const key = 'camo|' + kind; if (cache.has(key)) return cache.get(key);
  const s = 256; let palette, field;
  if (kind === 'digital') {
    palette = [[86, 92, 74], [120, 124, 98], [62, 66, 54], [150, 146, 118]];
    const n = fbmField(s, 201, 6, 3); field = (x, y) => { const bx = Math.floor(x / 8) * 8, by = Math.floor(y / 8) * 8; return n[by * s + bx]; };
  } else if (kind === 'tiger') {
    palette = [[96, 104, 70], [40, 42, 30], [140, 128, 90], [60, 70, 44]];
    const n = fbmField(s, 202, 3, 4, 0.5, 0.5); field = (x, y) => 0.5 + 0.5 * Math.sin(y / s * Math.PI * 14 + n[y * s + x] * 8);
  } else if (kind === 'desert') {
    palette = [[196, 172, 126], [160, 132, 92], [214, 196, 156], [128, 104, 72]];
    const n = fbmField(s, 203, 4, 4, 0.55, 0.4); field = (x, y) => n[y * s + x];
  } else {
    palette = [[64, 76, 44], [36, 40, 28], [96, 86, 56], [52, 60, 38]];
    const n = fbmField(s, 204, 4, 4, 0.55, 0.5); field = (x, y) => n[y * s + x];
  }
  const c = canvasFrom(s, (x, y) => { const v = field(x, y); const i = v < 0.38 ? 0 : v < 0.5 ? 1 : v < 0.62 ? 2 : 3; return palette[i]; });
  const t = tex(c, true, 1); cache.set(key, t); return t;
}

// Text / number decal (race numbers, signs)
export function textTexture(text, { fg = '#111', bg = 'rgba(255,255,255,0.95)', round = true, w = 256, h = 256, font = 'bold 170px Arial' } = {}) {
  const key = 'text|' + text + fg + bg + w + h + font; if (cache.has(key)) return cache.get(key);
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; if (round) { g.beginPath(); g.arc(w / 2, h / 2, Math.min(w, h) * 0.48, 0, Math.PI * 2); g.fill(); } else g.fillRect(0, 0, w, h); }
  g.fillStyle = fg; g.font = font; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, w / 2, h / 2 + 8);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; cache.set(key, t); return t;
}

// Building façade (window grid) — returns {map, emissiveMap, roughnessMap}
export function facadeTexture(kind, seed = 1, litFrac = 0.4) {
  const key = 'facade|' + kind + '|' + seed + '|' + litFrac; if (cache.has(key)) return cache.get(key);
  const W = 256, H = 512; const r = rng(seed + 300);
  const cols = kind === 'glass' ? 8 : kind === 'warehouse' ? 4 : 6, rows = kind === 'warehouse' ? 4 : 8;
  const base = document.createElement('canvas'); base.width = W; base.height = H; const g = base.getContext('2d');
  const em = document.createElement('canvas'); em.width = W; em.height = H; const ge = em.getContext('2d');
  const ro = document.createElement('canvas'); ro.width = W; ro.height = H; const gr = ro.getContext('2d');
  const wall = { office: '#b9b4ab', glass: '#3c4a56', apartment: '#c9b8a0', brick: '#8c4a36', house: '#d8ccb4', shop: '#c8c2b8', warehouse: '#8f959b', tower: '#9aa2aa' }[kind] || '#b9b4ab';
  g.fillStyle = wall; g.fillRect(0, 0, W, H); ge.fillStyle = '#000'; ge.fillRect(0, 0, W, H); gr.fillStyle = '#e0e0e0'; gr.fillRect(0, 0, W, H);
  if (kind === 'brick') { const b = proceduralTexture('brick').map.image; g.globalAlpha = 0.9; for (let y = 0; y < H; y += b.height / 2) for (let x = 0; x < W; x += b.width / 2) g.drawImage(b, x, y, b.width / 2, b.height / 2); g.globalAlpha = 1; }
  const cw = W / cols, rh = H / rows; const mx = kind === 'glass' ? 0.04 : 0.18, my = kind === 'glass' ? 0.06 : 0.22;
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const x = i * cw + cw * mx, y = j * rh + rh * my, w = cw * (1 - 2 * mx), h = rh * (1 - 2 * my) * (kind === 'shop' && j === rows - 1 ? 1.2 : 1);
    const sky = 60 + r() * 50; g.fillStyle = kind === 'glass' ? `rgb(${70 + r() * 20},${95 + r() * 20},${118 + r() * 25})` : `rgb(${sky * 0.55},${sky * 0.7},${sky * 0.85})`;
    g.fillRect(x, y, w, h);
    if (kind !== 'glass') { g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(x, y, w, h * 0.12); g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x + w / 2 - 1, y, 2, h); }
    gr.fillStyle = '#202020'; gr.fillRect(x, y, w, h);
    if (r() < litFrac) { const warm = r(); ge.fillStyle = warm < 0.7 ? `rgb(255,${200 + r() * 40},${130 + r() * 50})` : `rgb(${180 + r() * 40},${210 + r() * 30},255)`; ge.globalAlpha = 0.55 + r() * 0.45; ge.fillRect(x, y, w, h); ge.globalAlpha = 1; }
  }
  if (kind === 'glass') { g.fillStyle = 'rgba(200,210,220,0.35)'; for (let i = 0; i <= cols; i++) g.fillRect(i * cw - 1.5, 0, 3, H); for (let j = 0; j <= rows; j++) g.fillRect(0, j * rh - 1.5, W, 3); }
  const mk = (c, srgb) => { const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace; t.anisotropy = 8; return t; };
  const out = { map: mk(base, true), emissiveMap: mk(em, true), roughnessMap: mk(ro, false), cols, rows };
  cache.set(key, out); return out;
}

// Iris texture for eyes
export function irisTexture(hex) {
  const key = 'iris|' + hex; if (cache.has(key)) return cache.get(key);
  const s = 256, c = document.createElement('canvas'); c.width = c.height = s; const g = c.getContext('2d');
  g.fillStyle = '#f4f1ec'; g.fillRect(0, 0, s, s);
  const rI = s * 0.22; const cx = s / 2, cy = s / 2;
  const grd = g.createRadialGradient(cx, cy, rI * 0.2, cx, cy, rI);
  grd.addColorStop(0, '#000'); grd.addColorStop(0.32, '#000'); grd.addColorStop(0.36, hex); grd.addColorStop(0.85, hex); grd.addColorStop(1, '#1a120c');
  g.fillStyle = grd; g.beginPath(); g.arc(cx, cy, rI, 0, Math.PI * 2); g.fill();
  g.strokeStyle = 'rgba(255,255,255,0.12)'; g.lineWidth = 1.2; const r = rng(hex.length);
  for (let a = 0; a < 90; a++) { const t = a / 90 * Math.PI * 2 + r() * 0.05; g.beginPath(); g.moveTo(cx + Math.cos(t) * rI * 0.36, cy + Math.sin(t) * rI * 0.36); g.lineTo(cx + Math.cos(t) * rI * 0.92, cy + Math.sin(t) * rI * 0.92); g.stroke(); }
  g.fillStyle = 'rgba(255,255,255,0.9)'; g.beginPath(); g.arc(cx - rI * 0.3, cy - rI * 0.32, rI * 0.11, 0, Math.PI * 2); g.fill();
  const vg = g.createRadialGradient(cx, cy, s * 0.3, cx, cy, s * 0.5); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(150,60,50,0.35)');
  g.fillStyle = vg; g.fillRect(0, 0, s, s);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; cache.set(key, t); return t;
}

export function gradientRamp(steps = 3) {
  const key = 'ramp|' + steps; if (cache.has(key)) return cache.get(key);
  const data = new Uint8Array(steps); for (let i = 0; i < steps; i++) data[i] = Math.round(40 + (i / (steps - 1)) * 215);
  const t = new THREE.DataTexture(data, steps, 1, THREE.RedFormat); t.minFilter = t.magFilter = THREE.NearestFilter; t.needsUpdate = true;
  cache.set(key, t); return t;
}

export function blockTexture() {
  if (cache.has('block')) return cache.get('block');
  const s = 16; const r = rng(9);
  const c = canvasFrom(s, (x, y) => { const edge = x === 0 || y === 0 || x === s - 1 || y === s - 1; const v = edge ? 170 : 220 + r() * 35; return [v, v, v]; });
  const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestMipmapNearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  cache.set('block', t); return t;
}
