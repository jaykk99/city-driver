// Car designer: every car body is generated from continuous design numbers — no stored car shapes or models.
//  - DESIGN: the body-design parameters (ranges + defaults), shared by the editor, the schema and the agent API.
//  - profileFromDesign(P): turns the numbers into the side silhouette the body lofter sweeps (u: 0 = rear, 1 = front).
//  - designFromText(text, seed): reads a plain-English description ("long low two-door fastback, matte black,
//    twin turbo v8, 20 inch rims, lifted 4 inches") and composes the design numbers trait by trait, plus a seeded
//    variation so no two described cars come out identical.
// Pure JS, no three.js — runs in the browser editor and in the Node agent API.

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;

// ---------------------------------------------------------------- design parameters
// [key, label, min, max, default, step]
export const DESIGN = [
  ['length', 'Length', 2.4, 7.5, 4.6, 0.01, 'm'],
  ['width', 'Width', 1.3, 2.5, 1.88, 0.01, 'm'],
  ['height', 'Height', 0.9, 2.8, 1.42, 0.01, 'm'],
  ['wheelbase', 'Wheelbase (share of length)', 0.45, 0.88, 0.6, 0.005],
  ['overhangF', 'Front overhang share', 0.15, 0.85, 0.48, 0.01],
  ['clearance', 'Ground clearance', 0.05, 0.45, 0.14, 0.005, 'm'],
  ['hood', 'Hood length', 0.06, 0.5, 0.28, 0.005],
  ['windshield', 'Windshield rake', 0, 1, 0.5, 0.01],
  ['roofLength', 'Roof length', 0.03, 0.75, 0.28, 0.005],
  ['rearWindow', 'Rear glass slope (0 = upright, 1 = fastback)', 0, 1, 0.45, 0.01],
  ['noseHeight', 'Nose height', 0.22, 0.85, 0.5, 0.01],
  ['cowlHeight', 'Hood height at windshield', 0.42, 0.92, 0.7, 0.01],
  ['deckHeight', 'Trunk / deck height', 0.38, 0.92, 0.71, 0.01],
  ['tailHeight', 'Tail height', 0.3, 0.9, 0.62, 0.01],
  ['beltLine', 'Window line', 0.38, 0.82, 0.62, 0.01],
  ['tumblehome', 'Roof width (tumblehome)', 0.55, 0.99, 0.78, 0.01],
  ['boxy', 'Boxy ↔ curvy', 0, 1, 0.55, 0.01],
];
export const DESIGN_KEYS = DESIGN.map(r => r[0]);
export const DESIGN_DEFAULTS = Object.fromEntries(DESIGN.map(r => [r[0], r[4]]));
const RANGE = Object.fromEntries(DESIGN.map(r => [r[0], [r[2], r[3]]]));

export const FRAMES = ['closed', 'rail', 'tube'];       // closed body shell, rail (dragster) frame, tube (buggy) frame
export const LAYOUTS = ['front', 'mid', 'rear'];

export function clampDesign(d) {
  for (const k of DESIGN_KEYS) if (d[k] != null) d[k] = clamp(+d[k] || 0, RANGE[k][0], RANGE[k][1]);
  return d;
}

// ---------------------------------------------------------------- silhouette
// Returns { top:[[u,f]], belt:[rear,front], roofW, box, cab:[uRearGlassBase,uRoofRear,uRoofFront,uCowl], bed?, mid? }
export function profileFromDesign(P) {
  const L = P.length, H = P.height;
  const deck = P.deckHeight, cowl = P.cowlHeight, tail = Math.min(P.tailHeight, deck + 0.05), nose = Math.min(P.noseHeight, cowl);
  // windshield run from its rake angle: 0..1 -> 72°..19° from horizontal
  const wsAng = lerp(72, 19, P.windshield) * Math.PI / 180;
  let hood = clamp(P.hood, 0.06, 0.6);
  let wsRun = (H * (1 - cowl)) / Math.tan(wsAng) / L;
  let roof = P.roofLength;
  // rear glass: 0 = upright (near-vertical hatch/wagon/van back) ... 1 = fastback slope that runs almost to the tail
  const rwMin = (H * (1 - deck)) / Math.tan(88 * Math.PI / 180) / L;
  const rwMax = Math.max(rwMin, 1 - hood - wsRun - roof - 0.1);
  let rwRun = lerp(rwMin, rwMax, Math.pow(P.rearWindow, 1.6));
  // fit everything inside the body length: shrink rear glass, then roof, then windshield, then hood
  const room = () => 1 - hood - 0.02;
  if (wsRun > room() * 0.45) wsRun = room() * 0.45;
  let need = wsRun + roof + rwRun;
  if (need > room()) {
    const over = need - room();
    const takeRear = Math.min(over * (rwRun / (rwRun + roof)), Math.max(0, rwRun - 0.01));
    rwRun -= takeRear; roof -= Math.min(need - takeRear - room(), roof - 0.03);
    need = wsRun + roof + rwRun;
    if (need > room()) hood = Math.max(0.06, 1 - 0.02 - need);
  }
  const uCowl = 1 - hood, uRoofF = uCowl - wsRun, uRoofR = uRoofF - roof, uGlass = Math.max(0.012, uRoofR - rwRun);

  const pts = [[0, tail]];
  if (uGlass > 0.08) pts.push([0.035, lerp(tail, deck, 0.85)], [uGlass, deck]);
  else pts.push([uGlass, lerp(tail, deck, 0.5) + 0.02 * (uGlass > 0.03 ? 1 : 0)]);
  pts.push([uRoofR, 1], [(uRoofR + uRoofF) / 2, 1], [uRoofF, 1], [uCowl, cowl], [1 - 0.045, lerp(cowl, nose, 0.3)], [1, nose]);
  // strictly increasing u
  const top = []; for (const p of pts) { if (top.length && p[0] <= top[top.length - 1][0] + 0.006) { if (p[1] >= top[top.length - 1][1]) top[top.length - 1] = [top[top.length - 1][0], p[1]]; continue; } top.push(p); }
  const belt = [Math.min(P.beltLine, deck - 0.01), Math.min(P.beltLine, cowl - 0.01)];
  const prof = { top, belt, roofW: P.tumblehome, box: P.boxy, cab: [uGlass, uRoofR, uRoofF, uCowl] };
  if (P.bed) prof.bed = [0.015, Math.max(0.05, uGlass - 0.012)];
  if (P.layout === 'mid') prof.mid = true;
  return prof;
}

// physical numbers the simulator and wheel placement need
export function designDims(P) {
  const L = P.length, W = P.width, H = P.height;
  const wb = L * P.wheelbase;
  const front = (L - wb) * P.overhangF;
  const frame = P.frame || 'closed';
  return {
    L, W, H, wb, clear: P.clearance,
    axleF: L / 2 - front, axleR: L / 2 - front - wb,
    cg: frame === 'rail' ? 0.32 : H * 0.33 + P.clearance * 0.4,
    cd: frame === 'closed' ? 0.5 + 0.35 * P.boxy + 0.25 * clamp((H - 1.2) / 0.9, 0, 1) : 0.9,
  };
}

// ---------------------------------------------------------------- old saved scenes
// Scenes saved before the designer stored a body "style" name; translate those numbers once so they still load.
const OLD = {
  muscle: [4.78, 1.94, 1.34, 0.58, 0.13, 0.33, 0.45, 0.21, 0.78, 0.52, 0.78, 0.76, 0.64, 0.61, 0.76, 0.62],
  sports: [4.45, 1.88, 1.24, 0.58, 0.11, 0.31, 0.75, 0.16, 0.85, 0.38, 0.64, 0.73, 0.6, 0.57, 0.74, 0.55],
  supercar: [4.62, 2.0, 1.14, 0.58, 0.1, 0.27, 0.85, 0.13, 0.8, 0.4, 0.6, 0.8, 0.66, 0.59, 0.7, 0.5, 'mid'],
  sedan: [4.86, 1.86, 1.45, 0.59, 0.14, 0.29, 0.6, 0.3, 0.6, 0.5, 0.73, 0.72, 0.64, 0.62, 0.78, 0.6],
  hatch: [4.2, 1.8, 1.46, 0.62, 0.13, 0.27, 0.6, 0.47, 0.15, 0.48, 0.7, 0.8, 0.55, 0.61, 0.8, 0.62],
  wagon: [4.92, 1.86, 1.5, 0.58, 0.14, 0.27, 0.6, 0.57, 0.08, 0.48, 0.71, 0.72, 0.58, 0.61, 0.82, 0.65],
  pickup: [5.7, 2.02, 1.9, 0.62, 0.24, 0.34, 0.45, 0.17, 0.03, 0.52, 0.7, 0.6, 0.58, 0.6, 0.88, 0.85, 'front', true],
  suv: [4.95, 1.98, 1.8, 0.6, 0.21, 0.29, 0.5, 0.57, 0.1, 0.52, 0.73, 0.75, 0.6, 0.58, 0.86, 0.85],
  jeep: [4.35, 1.9, 1.86, 0.57, 0.26, 0.38, 0.15, 0.53, 0.02, 0.5, 0.63, 0.7, 0.6, 0.61, 0.94, 0.96],
  van: [5.3, 2.02, 2.12, 0.63, 0.17, 0.14, 0.55, 0.73, 0.05, 0.42, 0.62, 0.6, 0.56, 0.51, 0.92, 0.9],
};
export function upgradeOldParams(P) {
  if (!P || P.length != null || !P.style) return P;
  const out = { ...P }; const s = P.style;
  if (s === 'dragster') Object.assign(out, { frame: 'rail', length: 7.6, width: 1.2, height: 1.1, wheelbase: 0.84, clearance: 0.07 });
  else if (s === 'buggy') Object.assign(out, { frame: 'tube', length: 3.9, width: 2.0, height: 1.75, wheelbase: 0.7, clearance: 0.32 });
  else {
    const v = OLD[s] || OLD.muscle;
    const keys = ['length', 'width', 'height', 'wheelbase', 'clearance', 'hood', 'windshield', 'roofLength', 'rearWindow', 'noseHeight', 'cowlHeight', 'deckHeight', 'tailHeight', 'beltLine', 'tumblehome', 'boxy'];
    keys.forEach((k, i) => { out[k] = v[i]; });
    out.length *= P.lengthScale || 1; out.width *= P.widthScale || 1; out.height *= P.heightScale || 1; out.wheelbase *= P.wheelbase || 1;
    out.frame = 'closed'; out.layout = v[16] || 'front'; out.bed = !!v[17];
    out.headlights = s === 'muscle' || s === 'jeep' ? 'round' : 'slim';
  }
  delete out.style; delete out.lengthScale; delete out.widthScale; delete out.heightScale;
  return clampDesign(out);
}

// ---------------------------------------------------------------- text -> design
const COLORS = {
  red: '#c0141c', crimson: '#a3111e', maroon: '#5e0e14', burgundy: '#64101e', wine: '#5a1020', cherry: '#b0101e',
  orange: '#ff5a00', amber: '#ff9a00', yellow: '#f2c400', gold: '#c9a227', mustard: '#c99a1e', lime: '#8fd400', green: '#1f7a3a',
  'british racing green': '#0e3b26', 'forest green': '#1d4a2c', 'army green': '#4c5640', olive: '#5d6332', mint: '#8fe3c0', teal: '#0f7c80',
  turquoise: '#19b3b0', cyan: '#18c6e6', 'baby blue': '#8cc4ec', 'sky blue': '#5aa7e8', blue: '#1f4fd1', 'royal blue': '#2848b8',
  navy: '#121f45', 'dark blue': '#16244f', 'midnight blue': '#141a33', purple: '#5b2a9a', violet: '#7a3ad0', plum: '#5a2648',
  pink: '#f06aa0', 'hot pink': '#ff2d8a', magenta: '#d4148a', white: '#f2f2f0', cream: '#efe4c8', beige: '#d8c8a4',
  tan: '#b89a6a', sand: '#c9b07a', brown: '#5a3820', bronze: '#8a5a2a', copper: '#b2622e', silver: '#c4c9cf', grey: '#6d7278',
  gray: '#6d7278', gunmetal: '#3a3f45', charcoal: '#2c2f33', graphite: '#33363b', black: '#111214',
};
const FINISHES = { matte: 'matte', flat: 'matte', satin: 'satin', pearl: 'pearl', pearlescent: 'pearl', chrome: 'chrome', candy: 'candy', metallic: 'metallic', gloss: 'gloss', glossy: 'gloss', carbon: 'carbon' };

function seededRandom(seed) {
  let a = (seed >>> 0) || 0x9e3779b9;
  return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
export function hashText(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

const has = (t, re) => re.test(t);
const add = (d, k, v) => { d[k] = (d[k] ?? DESIGN_DEFAULTS[k]) + v; };
const mul = (d, k, v) => { d[k] = (d[k] ?? DESIGN_DEFAULTS[k]) * v; };

// Body-type words set the structure; everything after only nudges it, so words combine freely
// ("lifted wagon", "long low pickup", "boxy supercar", "tiny 6-wheel-looking van"...).
const BODY_RULES = [
  [/\b(pick-?up|pickup truck|ute|truck)\b/, d => Object.assign(d, { bed: true, length: 5.5, height: 1.86, clearance: 0.23, hood: 0.3, windshield: 0.32, roofLength: 0.16, rearWindow: 0.03, deckHeight: 0.6, tailHeight: 0.57, noseHeight: 0.55, cowlHeight: 0.7, beltLine: 0.6, tumblehome: 0.88, boxy: 0.82, wheelbase: 0.62, width: 2.0 })],
  [/\b(mini ?van|people carrier|mpv)\b/, d => Object.assign(d, { length: 5.0, height: 1.78, hood: 0.18, windshield: 0.72, roofLength: 0.62, rearWindow: 0.1, deckHeight: 0.6, tailHeight: 0.52, cowlHeight: 0.58, noseHeight: 0.45, beltLine: 0.56, tumblehome: 0.86, boxy: 0.6, clearance: 0.16, wheelbase: 0.6 })],
  [/\b(van|bus|panel van|delivery)\b(?!.*mini)/, d => Object.assign(d, { length: 5.3, height: 2.1, hood: 0.13, windshield: 0.5, roofLength: 0.74, rearWindow: 0.02, deckHeight: 0.56, tailHeight: 0.5, cowlHeight: 0.6, noseHeight: 0.42, beltLine: 0.52, tumblehome: 0.93, boxy: 0.9, clearance: 0.17, wheelbase: 0.63, width: 2.02 })],
  [/\b(suv|crossover|sport utility)\b/, d => Object.assign(d, { length: 4.85, height: 1.78, clearance: 0.21, hood: 0.27, windshield: 0.48, roofLength: 0.55, rearWindow: 0.12, deckHeight: 0.6, tailHeight: 0.55, cowlHeight: 0.72, noseHeight: 0.53, beltLine: 0.58, tumblehome: 0.86, boxy: 0.8, width: 1.98 })],
  [/\b(jeep|crawler|rock crawler|utility vehicle|military)\b/, d => Object.assign(d, { length: 4.3, height: 1.86, clearance: 0.27, hood: 0.36, windshield: 0.12, roofLength: 0.52, rearWindow: 0.02, deckHeight: 0.6, tailHeight: 0.6, cowlHeight: 0.62, noseHeight: 0.6, beltLine: 0.61, tumblehome: 0.95, boxy: 0.97, overhangF: 0.45, wheelbase: 0.6, headlights: 'round' })],
  [/\b(wagon|estate|shooting brake|touring)\b/, d => Object.assign(d, { roofLength: 0.55, rearWindow: 0.08, deckHeight: 0.6, tailHeight: 0.58, height: Math.max(d.height ?? 1.42, 1.48), length: Math.max(d.length ?? 4.6, 4.85) })],
  [/\b(hatch|hatchback|kammback|hot hatch)\b/, d => Object.assign(d, { length: Math.min(d.length ?? 4.6, 4.2), roofLength: 0.44, rearWindow: 0.18, deckHeight: 0.56, tailHeight: 0.52, height: Math.max(d.height ?? 1.42, 1.45), hood: 0.25, wheelbase: 0.62 })],
  [/\b(fastback|sportback|liftback)\b/, d => Object.assign(d, { rearWindow: 0.9, roofLength: Math.min(d.roofLength ?? 0.28, 0.2), deckHeight: 0.74 })],
  [/\b(notchback|sedan|saloon|trunk)\b/, d => Object.assign(d, { rearWindow: 0.48, roofLength: 0.3, deckHeight: 0.72, height: Math.max(d.height ?? 1.42, 1.45), length: Math.max(d.length ?? 4.6, 4.8) })],
  [/\b(super ?car|hyper ?car|exotic|mid-?engine|mid engined?)\b/, d => Object.assign(d, { layout: 'mid', height: 1.12, length: 4.6, width: 2.0, noseHeight: 0.38, cowlHeight: 0.6, deckHeight: 0.8, tailHeight: 0.66, windshield: 0.88, rearWindow: 0.82, roofLength: 0.14, hood: 0.27, beltLine: 0.55, tumblehome: 0.7, boxy: 0.42, clearance: 0.1, overhangF: 0.47 })],
  [/\b(rear-?engine|rear engined?)\b/, d => Object.assign(d, { layout: 'rear', hood: Math.min(d.hood ?? 0.28, 0.22) })],
  [/\b(sports car|sports coupe|coupe|coupé|gt car|grand tourer)\b/, d => Object.assign(d, { height: Math.min(d.height ?? 1.42, 1.28), roofLength: Math.min(d.roofLength ?? 0.28, 0.18), windshield: Math.max(d.windshield ?? 0.5, 0.72), rearWindow: Math.max(d.rearWindow ?? 0.45, 0.7), noseHeight: 0.4, cowlHeight: 0.64, clearance: 0.11 })],
  [/\b(muscle|pony car|hot ?rod)\b/, d => Object.assign(d, { hood: 0.34, width: 1.95, height: Math.min(d.height ?? 1.42, 1.34), noseHeight: 0.54, cowlHeight: 0.78, deckHeight: 0.76, tumblehome: 0.76, boxy: 0.62 })],
  [/\b(roadster|convertible|cabrio|spyder|spider|speedster)\b/, d => Object.assign(d, { roofChop: 0.72, height: Math.min(d.height ?? 1.42, 1.25), roofLength: 0.12 })],
  [/\b(limo|limousine|stretch(ed)?)\b/, d => Object.assign(d, { length: 6.6, roofLength: 0.55, wheelbase: 0.74 })],
  [/\b(micro ?car|city car|kei car|smart car|bubble car)\b/, d => Object.assign(d, { length: 2.7, width: 1.6, height: 1.52, hood: 0.12, roofLength: 0.42, rearWindow: 0.05, deckHeight: 0.56, tailHeight: 0.55, wheelbase: 0.68, boxy: 0.35 })],
  [/\b(dragster|rail dragster|top fuel|funny rail)\b/, d => Object.assign(d, { frame: 'rail', length: 7.6, width: 1.2, height: 1.1, wheelbase: 0.84, clearance: 0.07 })],
  [/\b(dune buggy|buggy|sand ?rail|trophy truck frame|tube frame|go-?kart)\b/, d => Object.assign(d, { frame: 'tube', length: 3.9, width: 2.0, height: 1.75, wheelbase: 0.7, clearance: 0.32 })],
];

// modifiers: [regex, fn(design, match)]
const MOD_RULES = [
  // proportions
  [/\b(very|super|extra) long\b/, d => mul(d, 'length', 1.18)], [/\blong\b(?! hood| roof| deck| nose)/, d => mul(d, 'length', 1.08)],
  [/\b(short|compact|small|tiny|mini)\b(?! hood| roof| deck| nose)/, d => { mul(d, 'length', 0.86); mul(d, 'wheelbase', 1.04); }],
  [/\b(wide|widebody|wide-?body|fat)\b/, d => { mul(d, 'width', 1.08); d.flares = Math.max(d.flares || 0, 0.07); }],
  [/\bnarrow\b/, d => mul(d, 'width', 0.9)],
  [/\b(low|lowrider|low-?slung|slammed|lowered|stanced)\b/, d => { mul(d, 'height', 0.92); d.clearance = Math.min(d.clearance ?? 0.14, 0.09); d.lift = Math.min(d.lift || 0, -0.04); }],
  [/\b(tall|high roof|high-?roof)\b/, d => mul(d, 'height', 1.1)],
  [/\b(long|big|huge|enormous) hood\b/, d => add(d, 'hood', 0.08)], [/\b(short|stubby|tiny) hood|cab-?over|cab forward\b/, d => add(d, 'hood', -0.12)],
  [/\b(long|big) (roof|cabin)\b/, d => add(d, 'roofLength', 0.12)], [/\b(short|small|tight) (roof|cabin)|bubble roof|canopy\b/, d => add(d, 'roofLength', -0.08)],
  [/\b(long|big) (deck|trunk|boot)\b/, d => add(d, 'roofLength', -0.05)],
  [/\b(sloped|sloping|raked|swept) (windshield|windscreen)\b/, d => add(d, 'windshield', 0.25)], [/\b(upright|flat|vertical) (windshield|windscreen)\b/, d => add(d, 'windshield', -0.35)],
  [/\b(wedge|doorstop|angular|origami)\b/, d => { d.noseHeight = 0.32; add(d, 'tailHeight', 0.08); add(d, 'deckHeight', 0.06); d.boxy = 0.92; d.round = 0.05; add(d, 'windshield', 0.25); }],
  [/\b(boxy|square|blocky|brick|slab)\b/, d => { d.boxy = 0.95; d.round = 0.08; add(d, 'tumblehome', 0.08); }],
  [/\b(curvy|rounded|bubbly|bulbous|organic|soft)\b/, d => { d.boxy = 0.15; d.round = 0.95; add(d, 'tumblehome', -0.06); }],
  [/\b(sleek|aero|aerodynamic|slippery|teardrop|streamlined)\b/, d => { add(d, 'windshield', 0.2); add(d, 'rearWindow', 0.25); add(d, 'noseHeight', -0.1); d.boxy = Math.min(d.boxy ?? 0.55, 0.4); }],
  [/\b(high|tall) (nose|front)\b/, d => add(d, 'noseHeight', 0.15)], [/\b(low|pointy|sharp|shark) (nose|front)\b/, d => add(d, 'noseHeight', -0.15)],
  [/\b(high|tall) (tail|rear|deck)\b/, d => { add(d, 'tailHeight', 0.1); add(d, 'deckHeight', 0.08); }],
  [/\b(chopped|chop top|chop-?top)\b/, d => { d.roofChop = 0.78; }],
  [/\b(high|tall) (window|greenhouse)|big windows\b/, d => add(d, 'beltLine', -0.1)], [/\b(slit|small|narrow) windows|high beltline\b/, d => add(d, 'beltLine', 0.1)],
  [/\b(4|four)[- ]door\b/, d => add(d, 'roofLength', 0.05)], [/\b(2|two)[- ]door\b/, d => add(d, 'roofLength', -0.03)],
  [/\b(short|stubby) overhangs?\b/, d => add(d, 'wheelbase', 0.06)], [/\b(long) overhangs?\b/, d => add(d, 'wheelbase', -0.07)],
  // era / style details
  [/\b(classic|vintage|retro|old ?school|antique|19[2-7]\d|[2-7]0'?s)\b/, d => { d.trim = 'chrome'; d.headlights = 'round'; d.rim = d.rim || 'steelie'; }],
  [/\b(modern|futuristic|cyber|concept|electric|ev|tesla-like)\b/, d => { d.trim = 'black'; d.headlights = 'slim'; }],
  [/\bround (head)?lights\b/, d => { d.headlights = 'round'; }], [/\b(slim|thin|led|pop-?up) (head)?lights\b/, d => { d.headlights = 'slim'; }],
  [/\bchrome (trim|bumpers?)\b/, d => { d.trim = 'chrome'; }], [/\b(blacked out|murdered out|black trim|chrome delete)\b/, d => { d.trim = 'black'; d.rimFinish = 'black'; }],
  [/\btinted|limo tint|dark windows\b/, d => { d.tint = 0.9; }],
  // stance & offroad
  [/\b(offroad|off-road|off road|overland|overlanding|trail|mud|baja|prerunner|pre-runner)\b/, d => { d.clearance = Math.max(d.clearance ?? 0.14, 0.24); d.tire = 'allterrain'; d.sidewall = 65; d.drive = d.drive || '4wd'; d.travel = 0.32; }],
  [/\b(lifted|lift kit|jacked up|monster)\b/, d => { d.lift = Math.max(d.lift || 0, d.clearance >= 0.2 ? 0.28 : 0.18); d.sidewall = Math.max(d.sidewall || 40, 65); d.tire = d.tire === 'street' || !d.tire ? 'allterrain' : d.tire; }],
  [/\bmonster truck\b/, d => { d.lift = 0.6; d.rimSize = 22; d.tireWidthF = 455; d.tireWidthR = 455; d.sidewall = 90; d.tire = 'mud'; }],
  [/\braked|nose down|rake\b/, d => { d.rearHeight = 0.08; }],
  // performance
  [/\b(race ?car|racing|track car|race car|gt3|time attack|rally)\b/, d => { d.rollCage = true; d.tire = 'slick'; d.spoiler = d.spoiler || 'gtwing'; d.weightReduction = 0.15; d.clearance = Math.min(d.clearance ?? 0.14, 0.09); }],
  [/\brally\b/, d => { d.tire = 'allterrain'; d.clearance = 0.18; d.drive = 'awd'; d.lightBar = true; d.spoiler = 'wing'; }],
  [/\b(drag car|drag racer|pro ?mod|pro ?stock|drag)\b/, d => { d.tire = 'slick'; d.skinnies = true; d.wheelieBar = true; d.parachute = true; d.rim = 'drag'; d.tireWidthR = 455; d.rearHeight = 0.06; d.trans = 'auto'; }],
  [/\b(drift|drifter|drift car)\b/, d => { d.drive = 'rwd'; d.flares = 0.08; d.spoiler = 'wing'; d.tire = 'sport'; }],
  [/\b(luxury|limousine|executive|elegant)\b/, d => { d.trim = 'chrome'; d.finish = 'metallic'; d.rim = 'multispoke'; d.trans = 'auto'; }],
  [/\b(cop|police|patrol)\b/, d => { d.paint = d.paint || '#111214'; d.lightBar = true; d.bullBar = true; }],
  [/\btaxi\b/, d => { d.paint = d.paint || '#f2c400'; }],
  // parts
  [/\bgt ?wing|big wing|huge wing\b/, d => { d.spoiler = 'gtwing'; }], [/\bducktail\b/, d => { d.spoiler = 'ducktail'; }], [/\blip spoiler|lip\b/, d => { d.spoiler = d.spoiler || 'lip'; }],
  [/\b(spoiler|wing)\b/, d => { d.spoiler = d.spoiler || 'wing'; }], [/\bno (spoiler|wing)\b/, d => { d.spoiler = 'none'; }],
  [/\bshaker\b/, d => { d.hoodScoop = 'shaker'; }], [/\b(hood|bonnet) ?scoop|scoop\b/, d => { d.hoodScoop = d.hoodScoop || 'scoop'; }],
  [/\bcowl|bulge\b/, d => { d.hoodScoop = d.hoodScoop || 'bulge'; }], [/\b(hood|bonnet) vents|vented hood\b/, d => { d.hoodScoop = 'vents'; }],
  [/\broll ?cage\b/, d => { d.rollCage = true; }], [/\blight ?bar\b/, d => { d.lightBar = true; }], [/\broof ?rack|roof basket\b/, d => { d.roofRack = true; }],
  [/\bsnorkel\b/, d => { d.snorkel = true; }], [/\b(bull ?bar|push ?bar|grille guard|ranch hand)\b/, d => { d.bullBar = true; }],
  [/\bspare (tire|tyre|wheel)\b/, d => { d.spareTire = true; }], [/\b(side ?steps|running boards|nerf bars|rock sliders)\b/, d => { d.sideSteps = true; }],
  [/\bwheelie ?bars?\b/, d => { d.wheelieBar = true; }], [/\bparachute|chute\b/, d => { d.parachute = true; }],
  [/\bunder ?glow|neon\b/, d => { d.underglow = true; }], [/\bopen hood|hood open|hood up\b/, d => { d.hoodOpen = true; }],
  [/\bno interior|gutted|stripped\b/, d => { d.interior = false; d.weightReduction = 0.2; }],
  [/\bfender flares|flares|box(ed)? flares|overfenders\b/, d => { d.flares = Math.max(d.flares || 0, 0.1); }],
  [/\bracing stripes?|rally stripes?|twin stripes?\b/, d => { d.stripes = 'racing'; }], [/\bside stripes?|pinstripe\b/, d => { d.stripes = 'side'; }],
  [/\b(single|center|centre) stripe\b/, d => { d.stripes = 'single'; }], [/\bhood stripe\b/, d => { d.stripes = 'hood'; }],
  // exhaust
  [/\bside ?pipes|side exit\b/, d => { d.exhaust = 'sidepipes'; }], [/\bquad (exhaust|tips|pipes)\b/, d => { d.exhaust = 'quad'; }],
  [/\bstacks|smoke ?stacks|stack pipes\b/, d => { d.exhaust = 'stacks'; }], [/\bzoomies\b/, d => { d.exhaust = 'zoomies'; }], [/\bsingle (exhaust|pipe|tip)\b/, d => { d.exhaust = 'single'; }],
  // wheels & tires
  [/\bbeadlocks?\b/, d => { d.rim = 'beadlock'; }], [/\bdeep ?dish\b/, d => { d.rim = 'deepdish'; }], [/\bsteel(ie)?s?\b|steel wheels/, d => { d.rim = 'steelie'; d.rimFinish = 'painted'; }],
  [/\bmesh (wheels|rims)|bbs\b|wire (wheels|rims)|wire-?spoke/, d => { d.rim = 'mesh'; }], [/\bturbine\b/, d => { d.rim = 'turbine'; }], [/\bmulti-?spoke\b/, d => { d.rim = 'multispoke'; }],
  [/\b(5|five)-?spoke\b/, d => { d.rim = 'fivespoke'; }], [/\bsplit-?spoke|10-?spoke\b/, d => { d.rim = 'split'; }], [/\bdrag (wheels|rims)|weld\b/, d => { d.rim = 'drag'; }],
  [/\bgold (wheels|rims)\b/, d => { d.rimFinish = 'gold'; }], [/\bblack (wheels|rims)\b/, d => { d.rimFinish = 'black'; }], [/\bchrome (wheels|rims)\b/, d => { d.rimFinish = 'chrome'; }],
  [/\bslicks?\b/, d => { d.tire = 'slick'; }], [/\bmud(ders| tires| terrain)?\b/, d => { d.tire = 'mud'; d.sidewall = Math.max(d.sidewall || 40, 70); }],
  [/\ball[- ]terrains?|a\/t\b/, d => { d.tire = 'allterrain'; }], [/\bwhite ?letters?|raised white\b/, d => { d.whiteLetters = true; }],
  [/\b(big|huge|giant) (wheels|rims|tires)\b/, d => { d.rimSize = Math.max(d.rimSize || 18, 22); }], [/\b(small|little) (wheels|rims)\b/, d => { d.rimSize = 15; }],
  [/\bskinnies|skinny front\b/, d => { d.skinnies = true; }],
  // drivetrain
  [/\bawd|all[- ]wheel\b/, d => { d.drive = 'awd'; }], [/\b4wd|4x4|four[- ]wheel drive\b/, d => { d.drive = '4wd'; d.lowRange = true; }],
  [/\bfwd|front[- ]wheel drive\b/, d => { d.drive = 'fwd'; }], [/\brwd|rear[- ]wheel drive\b/, d => { d.drive = 'rwd'; }],
  [/\bmanual|stick shift|stick\b/, d => { d.trans = 'manual'; }], [/\bautomatic|auto trans\b/, d => { d.trans = 'auto'; }], [/\bsequential|paddle\b/, d => { d.trans = 'sequential'; }],
  // engine
  [/\bv-?8\b/, d => { d.engine = 'v8'; }], [/\bv-?6\b/, d => { d.engine = 'v6'; }], [/\bv-?10\b/, d => { d.engine = 'v10'; }], [/\bv-?12\b/, d => { d.engine = 'v12'; }],
  [/\b(i-?4|inline[- ]?4|inline[- ]four|four[- ]cylinder|4[- ]cyl(inder)?)\b/, d => { d.engine = 'i4'; }], [/\b(i-?6|inline[- ]?6|inline[- ]six|straight[- ]six)\b/, d => { d.engine = 'i6'; }],
  [/\brotary|wankel\b/, d => { d.engine = 'rotary'; d.displacement = 1.3; d.revLimit = 9000; }],
  [/\b(electric|ev|battery|tesla-like)\b/, d => { d.engine = 'electric'; d.exhaust = 'none'; }],
  [/\btwin[- ]?turbo\b/, d => { d.induction = 'twinturbo'; d.boost = 14; }], [/\b(turbo|turbocharged)\b(?!.*twin)/, d => { d.induction = d.induction || 'turbo'; d.boost = d.boost || 14; }],
  [/\b(supercharged|supercharger)\b/, d => { d.induction = 'supercharger'; d.boost = 10; }], [/\b(blower|blown|roots)\b/, d => { d.induction = 'blower'; d.boost = 18; d.hoodScoop = d.hoodScoop || 'none'; }],
  [/\b(nitrous|nos|n2o)\b/, d => { d.nitrous = d.nitrous || '150'; }],
];

const NUM = '(\\d+(?:\\.\\d+)?)';
const NUM_RULES = [
  [new RegExp(NUM + "\\s*(m|meters?|metres?|ft|feet|foot|')\\s*(long|in length)"), (d, m) => { d.length = toM(m[1], m[2]); }],
  [new RegExp(NUM + "\\s*(m|meters?|metres?|ft|feet|foot|')\\s*wide"), (d, m) => { d.width = toM(m[1], m[2]); }],
  [new RegExp(NUM + "\\s*(m|meters?|metres?|ft|feet|foot|')\\s*(tall|high)"), (d, m) => { d.height = toM(m[1], m[2]); }],
  [new RegExp(NUM + '\\s*(inch|in|"|”)\\s*lift'), (d, m) => { d.lift = clamp(+m[1] * 0.0254, -0.08, 0.6); }],
  [new RegExp('lift(ed)?\\s*' + NUM + '\\s*(inch|inches|in|"|”)'), (d, m) => { d.lift = clamp(+m[2] * 0.0254, -0.08, 0.6); }],
  [new RegExp(NUM + '\\s*(inch|in|"|”)?\\s*(rims|wheels)'), (d, m) => { const r = Math.round(+m[1]); if (r >= 13 && r <= 26) d.rimSize = r; }],
  [new RegExp(NUM + '\\s*(l|liter|litre)\\b'), (d, m) => { d.displacement = clamp(+m[1], 1, 10); }],
  [new RegExp(NUM + '\\s*(psi)'), (d, m) => { d.boost = clamp(+m[1], 0, 50); d.induction = d.induction || 'turbo'; }],
  [new RegExp(NUM + '\\s*(?:-|\\s)?(speed|gear)'), (d, m) => { const g = Math.round(+m[1]); if (g >= 3 && g <= 10) d.gears = g; }],
  [new RegExp('(?:number|no\\.?|#)\\s*(\\d{1,2})(?![0-9a-f])'), (d, m) => { d.number = String(+m[1]); }],
  [new RegExp(NUM + '\\s*(kg|kilos?)'), (d, m) => { d.weight = clamp(+m[1], 500, 4500); }],
  [new RegExp(NUM + '\\s*(lbs?|pounds)'), (d, m) => { d.weight = clamp(+m[1] * 0.4536, 500, 4500); }],
  [new RegExp(NUM + '\\s*(hp|horsepower|bhp)'), (d, m) => { d._hp = +m[1]; }],
];
function toM(v, unit) { v = +v; return /^(ft|feet|foot|')$/.test(unit) ? v * 0.3048 : v; }

// small, structured variation so two descriptions with the same words still differ
const JITTER = { length: 0.12, width: 0.04, height: 0.04, wheelbase: 0.015, hood: 0.025, windshield: 0.06, roofLength: 0.03, rearWindow: 0.06,
  noseHeight: 0.04, cowlHeight: 0.025, deckHeight: 0.025, tailHeight: 0.03, beltLine: 0.02, tumblehome: 0.02, boxy: 0.06 };

export function designFromText(text, seed, { base = {}, vary = true } = {}) {
  const t = ' ' + String(text || '').toLowerCase().replace(/[,;.!?()]/g, ' ').replace(/\s+/g, ' ') + ' ';
  const d = { ...base };
  let rt = t; for (const n of Object.keys(COLORS)) if (n.includes(' ')) rt = rt.replace(new RegExp('\\b' + n + '\\b', 'g'), ' ');
  for (const [re, fn] of BODY_RULES) if (has(rt, re)) fn(d);
  for (const [re, fn] of MOD_RULES) { const m = rt.match(re); if (m) fn(d, m); }
  for (const [re, fn] of NUM_RULES) { const m = rt.match(re); if (m) fn(d, m); }
  // color: longest color name wins; "<color> and <color>" -> body + stripe
  const names = Object.keys(COLORS).sort((a, b) => b.length - a.length);
  const found = []; let rest = t;
  for (const n of names) { const re = new RegExp('\\b' + n + '\\b'); const m = rest.match(re); if (m) { found.push([m.index, n]); rest = rest.replace(re, ' '.repeat(n.length)); } }
  found.sort((a, b) => a[0] - b[0]);
  const hex = t.match(/#([0-9a-f]{6})\b/); if (hex) found.unshift([0, '#' + hex[1]]);
  const colorOf = n => n.startsWith('#') ? n : COLORS[n];
  const rims = found.find(([i, n]) => /^\s*(wheels|rims)/.test(t.slice(i + n.length)));
  const nonRim = found.filter(f => f !== rims);
  if (nonRim[0] && !d.paint) d.paint = colorOf(nonRim[0][1]);
  if (nonRim[1]) d.stripeColor = colorOf(nonRim[1][1]);
  if (rims) { d.rimColor = colorOf(rims[1]); d.rimFinish = d.rimFinish === 'gold' ? 'gold' : 'painted'; }
  if (nonRim[1] && !d.stripes && /\bstripe/.test(t)) d.stripes = 'racing';
  for (const [w, f] of Object.entries(FINISHES)) if (new RegExp('\\b' + w + '\\b').test(t) && !/chrome (trim|bumper|wheels|rims)/.test(t)) { d.finish = f; break; }
  // sensible coupling between what was asked
  if (d.bed && d.drive == null && d.clearance >= 0.22) d.drive = '4wd';
  if (d.frame === 'rail') Object.assign(d, { induction: d.induction || 'blower', tire: 'slick', skinnies: true, spoiler: 'dragwing', parachute: true, exhaust: 'zoomies', rollCage: false });
  if (d.frame === 'tube') Object.assign(d, { rollCage: true, tire: d.tire || 'allterrain', sidewall: Math.max(d.sidewall || 40, 70), travel: 0.45 });
  if (d.layout === 'mid' && d.drive == null) d.drive = 'awd';
  if (d.tire === 'mud' || d.tire === 'allterrain') { d.rimSize = d.rimSize || 18; d.tireWidthF = d.tireWidthF || 305; d.tireWidthR = d.tireWidthR || 305; }
  // scale the cabin-ish things for heavy/light bodies
  const L = d.length ?? DESIGN_DEFAULTS.length, H = d.height ?? DESIGN_DEFAULTS.height, W = d.width ?? DESIGN_DEFAULTS.width;
  if (d.weight == null) d.weight = Math.round(clamp(L * W * H * (d.frame === 'closed' || !d.frame ? 120 : 75) * (d.bed ? 1.05 : 1), 600, 3800) / 10) * 10;
  if (d._hp) Object.assign(d, engineForHp(d._hp, d)); delete d._hp;
  if (vary) {
    const r = seededRandom(seed ?? hashText(t));
    for (const [k, amt] of Object.entries(JITTER)) { const v = d[k] ?? DESIGN_DEFAULTS[k]; d[k] = k === 'length' ? v * (1 + (r() - 0.5) * amt * 0.5) : v + (r() - 0.5) * 2 * amt; }
    if (!d.paint) d.paint = '#' + [r(), r(), r()].map(x => Math.round(40 + x * 190).toString(16).padStart(2, '0')).join('');
  }
  d.frame = d.frame || 'closed'; d.layout = d.layout || 'front';
  if (d.roofChop) { d.roof = d.roofChop; delete d.roofChop; }
  for (const k of DESIGN_KEYS) if (d[k] == null) d[k] = DESIGN_DEFAULTS[k];
  clampDesign(d);
  for (const k of DESIGN_KEYS) d[k] = Math.round(d[k] * 1000) / 1000;
  d.describe = String(text || '').slice(0, 400);
  return d;
}

// pick displacement / induction / tune to land near a requested horsepower (rough, deterministic)
function engineForHp(hp, d) {
  const eng = d.engine || (hp > 650 ? 'v8' : hp > 350 ? 'v8' : hp > 220 ? 'v6' : 'i4');
  if (eng === 'electric') return { engine: eng, displacement: clamp(hp / 115, 1, 10) };
  const perL = { i4: 1, i6: 1, v6: 1, v8: 1, v10: 1, v12: 1, rotary: 2 }[eng] || 1;
  const maxDisp = { i4: 2.5, i6: 3.5, v6: 4.0, v8: 7.5, v10: 8.4, v12: 7.0, rotary: 2.6 }[eng] || 6;
  let ind = d.induction || 'na', disp = d.displacement, stage = 0;
  const naHpPerL = 72; // what the sim gives per litre roughly at stage 0
  if (!disp) disp = clamp(hp / naHpPerL / perL, 1, maxDisp);
  let mult = hp / (disp * perL * naHpPerL);
  if (mult > 1.25 && ind === 'na') ind = mult > 2 ? 'twinturbo' : 'turbo';
  let boost = 0;
  if (ind !== 'na') { boost = clamp((mult - 1) / 0.86 * 14.7, 4, 45); }
  else stage = clamp(Math.round((mult - 1) / 0.12), 0, 4);
  return { engine: eng, displacement: Math.round(disp * 10) / 10, induction: ind, boost: Math.round(boost * 2) / 2, stage };
}

// a fresh random design (for a "surprise me" button)
export function randomDesign(seed = Math.floor(Math.random() * 1e9)) {
  const r = seededRandom(seed);
  const d = {};
  for (const [k, , lo, hi] of DESIGN) d[k] = lerp(lo, hi, r());
  // keep it a plausible car: tie the extremes together
  d.length = lerp(3.2, 5.8, r()); d.height = lerp(1.05, 2.0, r()); d.width = lerp(1.65, 2.1, r());
  d.wheelbase = lerp(0.55, 0.7, r()); d.clearance = lerp(0.08, d.height > 1.6 ? 0.3 : 0.18, r());
  d.hood = lerp(0.12, 0.4, r()); d.roofLength = lerp(0.1, 0.55, r());
  d.cowlHeight = lerp(0.55, 0.8, r()); d.noseHeight = lerp(0.32, d.cowlHeight, r()); d.deckHeight = lerp(0.55, 0.82, r()); d.tailHeight = lerp(0.45, d.deckHeight, r());
  d.beltLine = Math.min(d.cowlHeight, d.deckHeight) - lerp(0.03, 0.12, r());
  d.bed = r() < 0.12; d.layout = r() < 0.15 ? 'mid' : 'front'; d.frame = 'closed';
  d.paint = '#' + [r(), r(), r()].map(x => Math.round(30 + x * 200).toString(16).padStart(2, '0')).join('');
  d.headlights = r() < 0.3 ? 'round' : 'slim';
  clampDesign(d); for (const k of DESIGN_KEYS) d[k] = Math.round(d[k] * 1000) / 1000;
  d.describe = ''; return d;
}
