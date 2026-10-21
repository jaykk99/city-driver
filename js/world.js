// CITY DRIVER — world layout: one place for map size, street names and where
// the Winnipeg landmarks sit. Conventions: +X east, +Z south (north is -Z).

export const BLOCKS = 9;                 // 9 x 9 city blocks
export const BLOCK = 60;                 // block size (m)
export const ROAD_W = 14;                // road width (m)
export const PITCH = BLOCK + ROAD_W;     // 74 m
export const GRID_HALF = (BLOCKS * PITCH + ROAD_W) / 2;   // city edge (±340)
export const LANE = 3.5;

export const blockCenter = i => (i - (BLOCKS - 1) / 2) * PITCH;          // -296 .. 296
export const LINES = Array.from({ length:BLOCKS + 1 }, (_, i) => (i - BLOCKS / 2) * PITCH);   // road centre lines

// Street names, west -> east (N-S roads) and north -> south (E-W roads)
export const NS_NAMES = ['St James St', 'Arlington St', 'Sherbrook St', 'Balmoral St', 'Kennedy St', 'Donald St', 'Fort St', 'Main St', 'Waterfront Dr', 'Gilroy St'];
export const EW_NAMES = ['Higgins Ave', 'Logan Ave', 'Notre Dame Ave', 'Ellice Ave', 'Portage Ave', 'Graham Ave', 'St Mary Ave', 'York Ave', 'Broadway', 'Assiniboine Ave'];
export const PORTAGE_Z = LINES[4];       // -37
export const MAIN_X = LINES[7];          // 185  -> Portage & Main = (185, -37)

// Rivers: the Red runs north-south east of downtown; the Assiniboine runs
// west-east along the south edge and meets the Red at The Forks.
export const RED_RIVER = { minX:GRID_HALF + 16, maxX:GRID_HALF + 62 };          // x 356..402
export const ASSINIBOINE = { minZ:GRID_HALF + 16, maxZ:GRID_HALF + 54 };         // z 356..394
export const BRIDGE_Z = PORTAGE_Z;       // Esplanade-style bridge carries Portage over the Red
export const BRIDGE_HALF = ROAD_W / 2 + 1;

// Drag strip: across the Red, in St. Boniface
export const STRIP_X = RED_RIVER.maxX + 50;      // 452
export const STRIP_HALF = 225;

// Special blocks (no random buildings): [blockCenterX, blockCenterZ]
export const SPECIAL = {
  parking:     [blockCenter(0), blockCenter(0)],      // NW corner lot
  arena:       [blockCenter(4), blockCenter(3)],      // on Portage Ave
  legislature: [blockCenter(3), blockCenter(8)],      // Broadway, near the Assiniboine
  forks:       [blockCenter(8), blockCenter(8)],      // The Forks, at the river junction
  museum:      [blockCenter(7), blockCenter(8)],      // human rights museum next to The Forks
  mansion:     [blockCenter(0), blockCenter(8)],      // Emerald's compound (Wellington Cres-style riverside)
  hospital:    [blockCenter(0), blockCenter(2)],      // hospital (respawn point)
  park:        [blockCenter(2), blockCenter(6)],      // city park
  station:     [blockCenter(2), blockCenter(4)],      // police HQ (busted respawn)
};
export const HOSPITAL_SPAWN = { x:LINES[1] - LANE, z:blockCenter(2), heading:Math.PI };   // on Arlington beside the hospital
export const MANSION = { x:SPECIAL.mansion[0], z:SPECIAL.mansion[1] };

export function isSpecialBlock(cx, cz){
  for(const k in SPECIAL){ const [x, z] = SPECIAL[k]; if(Math.abs(x - cx) < 1 && Math.abs(z - cz) < 1) return k; }
  return null;
}
// district of a block (drives building style)
export function districtOf(cx, cz){
  if(cz <= blockCenter(2) && cx >= blockCenter(3)) return 'exchange';       // old brick warehouse district (north-east)
  if(Math.abs(cx - 110) <= 150 && Math.abs(cz) <= 120) return 'downtown';   // towers around Portage & Main
  if(Math.abs(cx) >= blockCenter(7) || Math.abs(cz) >= blockCenter(7)) return 'residential';
  return 'midtown';
}
export const streetName = (axis, i) => axis === 'ns' ? NS_NAMES[i] : EW_NAMES[i];

// =====================================================================
// THE BIG MAP — downtown (±340) sits in the middle of a world 5x as wide
// (±1700): suburbs out to ±1000, the Perimeter Highway ring at ±1250, and
// prairie farmland, lakes, forest and the off-road park beyond it.
// =====================================================================
export const WORLD_HALF = 1700;
export const SUBURB_HALF = 1000;
export const PERIMETER = 1250, PERIM_W = 22;
export const ARTERIAL_W = 16, GRAVEL_W = 9;
export const SUB_LINES = [-999, -777, -555, 555, 777, 999];        // suburban arterials (both axes)
export const COUNTRY_LINES = [-1500, 1500];                         // gravel section roads
export const RIVER_ZN = -WORLD_HALF, RIVER_ZS = WORLD_HALF;         // the Red runs the full map
export const ASSINI_XW = -WORLD_HALF;                               // the Assiniboine comes in from the west

// Every road outside downtown as axis-aligned strips: { axis:'ns'|'ew', at, from, to, w, kind }
// (downtown's own grid is drawn by city.js; these continue it outward)
export const ROADS = (() => {
  const r = [];
  const add = (axis, at, from, to, w, kind, name) => r.push({ axis, at, from, to, w, kind, name });
  // downtown streets carry on through the suburbs
  for(const c of LINES){
    add('ns', c, -SUBURB_HALF, -GRID_HALF, ROAD_W, 'street'); add('ns', c, GRID_HALF, SUBURB_HALF, ROAD_W, 'street');
    add('ew', c, -SUBURB_HALF, -GRID_HALF, ROAD_W, 'street'); add('ew', c, GRID_HALF, SUBURB_HALF, ROAD_W, 'street');
  }
  for(const c of SUB_LINES){
    add('ns', c, -SUBURB_HALF, SUBURB_HALF, ARTERIAL_W, 'arterial');
    add('ew', c, -SUBURB_HALF, SUBURB_HALF, ARTERIAL_W, 'arterial');
  }
  // Portage Ave and Main St run all the way out of town
  add('ew', PORTAGE_Z, -WORLD_HALF, -SUBURB_HALF, ARTERIAL_W, 'highway', 'Portage Ave');
  add('ew', PORTAGE_Z, SUBURB_HALF, WORLD_HALF, ARTERIAL_W, 'highway', 'Portage Ave');
  add('ns', MAIN_X, -WORLD_HALF, -SUBURB_HALF, ARTERIAL_W, 'highway', 'Main St');
  add('ns', MAIN_X, SUBURB_HALF, WORLD_HALF, ARTERIAL_W, 'highway', 'Main St');
  // the Perimeter Highway ring
  add('ns', -PERIMETER, -PERIMETER, PERIMETER, PERIM_W, 'highway', 'Perimeter Hwy');
  add('ns', PERIMETER, -PERIMETER, PERIMETER, PERIM_W, 'highway', 'Perimeter Hwy');
  add('ew', -PERIMETER, -PERIMETER, PERIMETER, PERIM_W, 'highway', 'Perimeter Hwy');
  add('ew', PERIMETER, -PERIMETER, PERIMETER, PERIM_W, 'highway', 'Perimeter Hwy');
  // arterials reach the Perimeter
  for(const c of [-555, 555]){
    add('ns', c, -PERIMETER, -SUBURB_HALF, ARTERIAL_W, 'arterial'); add('ns', c, SUBURB_HALF, PERIMETER, ARTERIAL_W, 'arterial');
    add('ew', c, -PERIMETER, -SUBURB_HALF, ARTERIAL_W, 'arterial'); add('ew', c, SUBURB_HALF, PERIMETER, ARTERIAL_W, 'arterial');
  }
  // gravel section roads out in the farmland
  for(const c of COUNTRY_LINES){
    add('ns', c, -WORLD_HALF, WORLD_HALF, GRAVEL_W, 'gravel');
    add('ew', c, -WORLD_HALF, WORLD_HALF, GRAVEL_W, 'gravel');
  }
  return r;
})();

// airport (runway is paved) — north-west, inside the Perimeter like the real one
export const AIRPORT = { minX:-1180, maxX:-1060, minZ:-1180, maxZ:-560, terminal:{ x:-1010, z:-640 } };

// ---------- water ----------
// lakes [x, z, radius]: deep in the middle, shallow round the edge
export const LAKES = [[1420, -1450, 150], [-1430, 1420, 170], [-700, 760, 70], [700, -760, 55], [1100, 1150, 90]];
// street puddles (shallow, just splash) — scattered over downtown and the suburbs
export const PUDDLES = (() => {
  const out = []; let a = 12345;
  const rnd = () => { a = (a * 1103515245 + 12345) & 0x7fffffff; return a / 0x7fffffff; };
  const all = LINES.concat(SUB_LINES);
  for(let i = 0; i < 90; i++){
    const along = all[(rnd() * all.length) | 0], s = -980 + rnd() * 1960, side = (rnd() - 0.5) * 8;
    const r = 1.6 + rnd() * 2.4;
    out.push(rnd() < 0.5 ? [along + side, s, r] : [s, along + side, r]);
  }
  return out;
})();

// ---------- off-road park (prairie, west of the Perimeter) ----------
export const OFFROAD = { minX:-1690, maxX:-1330, minZ:80, maxZ:640 };
const ox = x => OFFROAD.minX + x * (OFFROAD.maxX - OFFROAD.minX), oz = z => OFFROAD.minZ + z * (OFFROAD.maxZ - OFFROAD.minZ);
// mud pits [x, z, radius]
export const MUD_PITS = [[ox(0.2), oz(0.15), 22], [ox(0.55), oz(0.3), 30], [ox(0.3), oz(0.55), 20], [ox(0.75), oz(0.65), 26],
  [ox(0.45), oz(0.85), 18], [ox(0.85), oz(0.2), 21], [ox(0.12), oz(0.8), 17]];
// rocks [x, z, size] — solid
export const ROCKS = [[ox(0.08), oz(0.05), 3.2], [ox(0.4), oz(0.12), 4], [ox(0.65), oz(0.1), 3.5], [ox(0.92), oz(0.42), 2.8],
  [ox(0.18), oz(0.38), 4.5], [ox(0.6), oz(0.48), 3.4], [ox(0.88), oz(0.88), 3], [ox(0.05), oz(0.95), 3.8], [ox(0.62), oz(0.92), 3.1],
  [ox(0.33), oz(0.72), 2.6], [ox(0.78), oz(0.8), 2.9], [ox(0.5), oz(0.62), 2.4]];
// farmland: fields [minX, maxX, minZ, maxZ, crop] — crops: canola, wheat, plowed (muddy), hay
export const FIELDS = (() => {
  const out = [], crops = ['canola', 'wheat', 'plowed', 'hay', 'wheat', 'plowed'];
  let k = 0;
  for(let gx = -WORLD_HALF + 20; gx < WORLD_HALF - 20; gx += 220){
    for(let gz = -WORLD_HALF + 20; gz < WORLD_HALF - 20; gz += 220){
      const cx = gx + 110, cz = gz + 110;
      if(Math.max(Math.abs(cx), Math.abs(cz)) < PERIMETER + 140) { k++; continue; }   // only outside the Perimeter
      const fx0 = gx + 14, fx1 = gx + 206, fz0 = gz + 14, fz1 = gz + 206;
      if(fx1 > OFFROAD.minX - 20 && fx0 < OFFROAD.maxX + 20 && fz1 > OFFROAD.minZ - 20 && fz0 < OFFROAD.maxZ + 20){ k++; continue; }
      if(LAKES.some(([lx, lz, r]) => lx + r + 12 > fx0 && lx - r - 12 < fx1 && lz + r + 12 > fz0 && lz - r - 12 < fz1)){ k++; continue; }
      out.push([gx + 14, gx + 206, gz + 14, gz + 206, crops[k++ % crops.length]]);
    }
  }
  return out;
})();
// extra mud: soggy patches on plowed fields + along gravel roads
export const MUD_PATCHES = (() => {
  const out = [];
  for(const f of FIELDS) if(f[4] === 'plowed'){ out.push([(f[0] + f[1]) / 2, (f[2] + f[3]) / 2, 40]); out.push([f[0] + 40, f[2] + 50, 18]); }
  for(const c of COUNTRY_LINES) for(const s of [-1300, -800, -300, 300, 800, 1300]){ out.push([c + 3, s, 9]); out.push([s, c - 3, 9]); }
  return out;
})();

// ---------- road / river lookups (pure) ----------
export function roadAt(x, z){
  for(const r of ROADS){
    if(r.axis === 'ns'){ if(Math.abs(x - r.at) <= r.w / 2 && z >= r.from - r.w / 2 && z <= r.to + r.w / 2) return r; }
    else if(Math.abs(z - r.at) <= r.w / 2 && x >= r.from - r.w / 2 && x <= r.to + r.w / 2) return r;
  }
  return null;
}
export function inRiver(x, z){
  if(x >= RED_RIVER.minX && x <= RED_RIVER.maxX) return true;
  if(z >= ASSINIBOINE.minZ && z <= ASSINIBOINE.maxZ && x <= RED_RIVER.minX) return true;
  return false;
}
const inDisc = (x, z, list) => { for(const d of list){ const dx = x - d[0], dz = z - d[1]; if(dx * dx + dz * dz < d[2] * d[2]) return d; } return null; };

// surface under a point:
// road | gravel | grass | crop | dirt | mud | puddle | water (shallow) | deep (rivers, lake middles)
export function surfaceAt(x, z){
  // downtown (paved) except the park lawns
  if(Math.abs(x) <= GRID_HALF && Math.abs(z) <= GRID_HALF){
    if(inDisc(x, z, PUDDLES)) return 'puddle';
    const i = Math.round(x / PITCH + (BLOCKS - 1) / 2), j = Math.round(z / PITCH + (BLOCKS - 1) / 2);
    const k = (i >= 0 && i < BLOCKS && j >= 0 && j < BLOCKS) ? isSpecialBlock(blockCenter(i), blockCenter(j)) : null;
    if((k === 'park' || k === 'legislature' || k === 'mansion') && Math.abs(x - blockCenter(i)) < BLOCK / 2 - 4 && Math.abs(z - blockCenter(j)) < BLOCK / 2 - 4) return 'grass';
    return 'road';
  }
  // roads + bridges win over water
  const rd = roadAt(x, z);
  if(rd){ if(rd.kind === 'gravel') return inDisc(x, z, MUD_PATCHES) ? 'mud' : 'gravel'; return inDisc(x, z, PUDDLES) ? 'puddle' : 'road'; }
  if(Math.abs(z - BRIDGE_Z) <= ROAD_W / 2 + 1 && x > 0 && x < STRIP_X + 10) return 'road';
  if(Math.abs(x - STRIP_X) <= 8 && Math.abs(z) <= STRIP_HALF + 10) return 'road';
  if(x >= AIRPORT.minX && x <= AIRPORT.maxX && z >= AIRPORT.minZ && z <= AIRPORT.maxZ) return 'road';
  if(inRiver(x, z)) return 'deep';
  for(const [lx, lz, r] of LAKES){ const d = Math.hypot(x - lx, z - lz); if(d < r * 0.65) return 'deep'; if(d < r) return 'water'; }
  if(inDisc(x, z, MUD_PITS) || inDisc(x, z, MUD_PATCHES)) return 'mud';
  if(x >= OFFROAD.minX && x <= OFFROAD.maxX && z >= OFFROAD.minZ && z <= OFFROAD.maxZ) return 'dirt';
  for(const f of FIELDS) if(x >= f[0] && x <= f[1] && z >= f[2] && z <= f[3]) return f[4] === 'plowed' ? 'dirt' : 'crop';
  return 'grass';
}
// how deep a car sits in water (for the visual "sink" + splash size)
export const WATER_DEPTH = { deep:0.62, water:0.28, puddle:0.02 };
export const isWet = s => s === 'deep' || s === 'water' || s === 'puddle';

// how a car drives on a surface given its off-road rating (tuning.js buildStats().offroad)
export function surfaceGrip(surface, offroad = 0.5, snorkel = false){
  const o = Math.min(1, offroad);
  switch(surface){
    case 'gravel': return { name:surface, speed:0.85 + 0.15 * o, grip:0.78 + 0.22 * o, drag:0 };
    case 'grass':  return { name:surface, speed:0.55 + 0.45 * o, grip:0.6 + 0.4 * o, drag:0.008 * (1 - o) };
    case 'crop':   return { name:surface, speed:0.45 + 0.45 * o, grip:0.6 + 0.35 * o, drag:0.012 * (1 - o) };
    case 'dirt':   return { name:surface, speed:0.6 + 0.4 * o, grip:0.55 + 0.45 * o, drag:0.006 * (1 - o) };
    case 'mud':    return { name:surface, speed:Math.min(1, (0.2 + 0.62 * o) * (snorkel ? 1.15 : 1)), grip:0.42 + 0.45 * o, drag:0.05 * (1.1 - o) };
    case 'sand':   return { name:surface, speed:0.62 + 0.38 * o, grip:0.6 + 0.35 * o, drag:0.01 * (1 - o) };
    case 'snow':   return { name:surface, speed:0.8 + 0.2 * o, grip:0.35 + 0.35 * o, drag:0.004 };
    case 'puddle': return { name:surface, speed:0.97, grip:0.85, drag:0.004 };
    case 'water':  return { name:surface, speed:Math.min(0.85, (0.32 + 0.4 * o) * (snorkel ? 1.2 : 1)), grip:0.55 + 0.3 * o, drag:0.04 };
    case 'deep':   return { name:surface, speed:(0.12 + 0.18 * o) * (snorkel ? 1.6 : 1), grip:0.4 + 0.2 * o, drag:0.09 };
    default:       return { name:'road', speed:1, grip:1, drag:0 };
  }
}
