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

// ---------- off-road park (west of the city, open prairie) ----------
export const OFFROAD = { minX:-680, maxX:-390, minZ:-250, maxZ:250 };
// mud pits [x, z, radius]
export const MUD_PITS = [[-470, -150, 18], [-560, -40, 24], [-450, 70, 16], [-620, 140, 20], [-520, 200, 14], [-610, -190, 17]];
// rocks [x, z, size] — solid
export const ROCKS = [[-430, -210, 3.2], [-505, -95, 4], [-600, -110, 3.5], [-480, 10, 2.8], [-650, 30, 4.5], [-540, 120, 3.4],
  [-420, 180, 3], [-660, -230, 3.8], [-575, 225, 3.1], [-505, -205, 2.6], [-640, 205, 2.9], [-455, 125, 2.4]];

// surface under a point: 'road' (all paved city), 'grass', 'dirt' (off-road park), 'mud'
export function surfaceAt(x, z){
  for(const [mx, mz, r] of MUD_PITS) if((x - mx) * (x - mx) + (z - mz) * (z - mz) < r * r) return 'mud';
  if(x >= OFFROAD.minX && x <= OFFROAD.maxX && z >= OFFROAD.minZ && z <= OFFROAD.maxZ) return 'dirt';
  if(Math.abs(x) <= GRID_HALF && Math.abs(z) <= GRID_HALF){
    // lawns: park / Legislature / mansion grounds (but not their edge roads)
    const i = Math.round(x / PITCH + (BLOCKS - 1) / 2), j = Math.round(z / PITCH + (BLOCKS - 1) / 2);
    const k = (i >= 0 && i < BLOCKS && j >= 0 && j < BLOCKS) ? isSpecialBlock(blockCenter(i), blockCenter(j)) : null;
    if((k === 'park' || k === 'legislature' || k === 'mansion') && Math.abs(x - blockCenter(i)) < BLOCK / 2 - 4 && Math.abs(z - blockCenter(j)) < BLOCK / 2 - 4) return 'grass';
    return 'road';
  }
  // bridge + drag strip + its access road are paved
  if(Math.abs(z - BRIDGE_Z) <= ROAD_W / 2 + 1 && x > 0 && x < STRIP_X + 10) return 'road';
  if(Math.abs(x - STRIP_X) <= 8 && Math.abs(z) <= STRIP_HALF + 10) return 'road';
  return 'grass';
}

// how a car drives on a surface given its off-road rating (tuning.js buildStats().offroad)
export function surfaceGrip(surface, offroad = 0.5, snorkel = false){
  const o = Math.min(1, offroad);
  switch(surface){
    case 'grass': return { name:surface, speed:0.55 + 0.45 * o, grip:0.6 + 0.4 * o, drag:0.008 * (1 - o) };
    case 'dirt':  return { name:surface, speed:0.6 + 0.4 * o, grip:0.55 + 0.45 * o, drag:0.006 * (1 - o) };
    case 'mud':   return { name:surface, speed:Math.min(1, (0.2 + 0.62 * o) * (snorkel ? 1.15 : 1)), grip:0.42 + 0.45 * o, drag:0.05 * (1.1 - o) };
    default:      return { name:'road', speed:1, grip:1, drag:0 };
  }
}
