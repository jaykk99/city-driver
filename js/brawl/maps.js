// BAR BRAWL — scenario layouts. Pure data (no three.js) so tests can check
// that every spawn and pickup sits inside the room and off the furniture.
//
// Coordinates: metres, room centred on 0,0, +y up. A "solid" is an AABB box
// { x, z, w, d, h, y=0, c } you can't walk through and can stand things on.
// "deco" boxes are visual only. Pickups are weapon ids lying around.

const box = (x, z, w, d, h, c, y = 0, extra) => Object.assign({ x, z, w, d, h, c, y }, extra || {});

// ---------- furniture kits (each returns { solids, deco, pickups }) ----------
function kit(){ return { solids:[], deco:[], pickups:[] }; }
function merge(into, k){ into.solids.push(...k.solids); into.deco.push(...k.deco); into.pickups.push(...k.pickups); return into; }

function barCounter(x, z, len, alongX, wood = 0x5a3520, top = 0x3a2010){
  const k = kit();
  const w = alongX ? len : 0.9, d = alongX ? 0.9 : len;
  k.solids.push(box(x, z, w, d, 1.05, wood));
  k.deco.push(box(x, z, w + 0.1, d + 0.1, 0.06, top, 1.05));
  // bottles and mugs on top
  const n = Math.floor(len / 0.9);
  for(let i = 0; i < n; i++){
    const t = -len / 2 + 0.45 + i * 0.9;
    const px = alongX ? x + t : x, pz = alongX ? z : z + t;
    k.pickups.push({ w:i % 3 === 1 ? 'mug' : 'bottle', x:px, z:pz, y:1.11 });
  }
  return k;
}
function backShelf(x, z, len, alongX){
  const k = kit();
  const w = alongX ? len : 0.4, d = alongX ? 0.4 : len;
  k.solids.push(box(x, z, w, d, 2.4, 0x3a2414));
  for(const y of [0.9, 1.5, 2.1]) k.deco.push(box(x, z, w + 0.04, d + 0.04, 0.04, 0x2a180c, y));
  // a rainbow of liquor bottles (decor)
  const n = Math.floor(len / 0.22);
  const cols = [0x2f6b2a, 0x8a4a12, 0x6a1a1a, 0xc9a23a, 0x2a3a6a, 0xdddddd];
  for(const y of [0.94, 1.54, 2.14]) for(let i = 0; i < n; i++){
    const t = -len / 2 + 0.11 + i * 0.22;
    k.deco.push(box(alongX ? x + t : x, alongX ? z : z + t, 0.09, 0.09, 0.28, cols[(i * 7 + y * 10) % cols.length | 0], y));
  }
  return k;
}
function table(x, z, round = false, c = 0x6b4423){
  const k = kit();
  k.solids.push(box(x, z, round ? 1 : 1.3, round ? 1 : 0.9, 0.78, c));
  k.pickups.push({ w:'bottle', x:x + 0.2, z, y:0.84 });
  k.pickups.push({ w:'chair', x:x - (round ? 0.95 : 1.1), z, y:0 });
  k.pickups.push({ w:'chair', x:x + (round ? 0.95 : 1.1), z:z + 0.1, y:0 });
  return k;
}
function poolTable(x, z){
  const k = kit();
  k.solids.push(box(x, z, 2.5, 1.4, 0.85, 0x3a2010));
  k.deco.push(box(x, z, 2.2, 1.1, 0.04, 0x1f6b35, 0.85));
  k.pickups.push({ w:'cue', x:x, z:z + 1.0, y:0 }, { w:'cue', x:x + 0.4, z:z - 1.0, y:0 });
  return k;
}
function stools(x, z, n, alongX, gap = 0.9){
  const k = kit();
  for(let i = 0; i < n; i++){
    const t = -((n - 1) * gap) / 2 + i * gap;
    k.pickups.push({ w:'stool', x:alongX ? x + t : x, z:alongX ? z : z + t, y:0 });
  }
  return k;
}
function crate(x, z, s = 1, c = 0x8b6b3a){ const k = kit(); k.solids.push(box(x, z, s, s, s, c)); return k; }
function barrel(x, z, c = 0x6b4423){ const k = kit(); k.solids.push(box(x, z, 0.8, 0.8, 1.1, c, 0, { barrel:true })); return k; }

// ---------- scenarios ----------
// enemy outfit: skin, shirt, pants, hair, hat, beard, vest, shoe; boss = scale + hp multiplier
const SKINS = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac, 0x5c3a21];

function bikerBar(){
  const L = { id:'biker', name:'Biker Bar', blurb:'Leather, beer and broken bottles. The Hellhounds want you out.',
    w:24, d:18, h:4.2, floor:{ c1:0x4a3020, c2:0x3e281a, kind:'planks' }, wall:0x5a2a1e, trim:0x2a1208, ceil:0x1a120c,
    light:0xffb060, ambient:0x5a4030, fog:0x1a100a, lamps:[[-6, -3], [0, 0], [6, 3], [-6, 5], [6, -5]],
    player:[0, 7, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:18, maxActive:9, outfits:'biker', weapons:{ fists:4, bottle:3, chain:2, knuckles:2, bat:1, knife:1, wrench:1 } },
    boss:{ name:'BIG MIKE', outfit:'bikerBoss', weapon:'sledge', scale:1.35, hp:3.2 } };
  merge(L, barCounter(-4, -6, 9, true));
  merge(L, backShelf(-4, -8.4, 9, true));
  merge(L, stools(-4, -5, 8, true, 1.05));
  merge(L, poolTable(5, -4));
  merge(L, poolTable(5, 2));
  merge(L, table(-6, 1)); merge(L, table(-2, 3, true)); merge(L, table(-7, 5, true));
  L.solids.push(box(10.6, 7.6, 1.2, 1.2, 1.9, 0xb02020, 0, { glow:0xff5030 }));   // jukebox
  L.pickups.push({ w:'bat', x:9.5, z:-8, y:0 }, { w:'crowbar', x:-10.5, z:7, y:0 }, { w:'pan', x:-1, z:-6, y:1.11 }, { w:'knife', x:-7, z:-6, y:1.11 },
    { w:'axe', x:11, z:-1, y:0 }, { w:'spikedbat', x:-11, z:-2, y:0 }, { w:'shotgun', x:-8.1, z:-6, y:1.11 }, { w:'dynamite', x:2, z:8, y:0 });
  return L;
}

function disco(){
  const L = { id:'disco', name:'Disco', blurb:'Saturday night fever. Everyone on the floor wants a piece of you.',
    w:22, d:22, h:5, floor:{ c1:0xff2a7a, c2:0x2a8aff, c3:0xffd23f, c4:0x30e070, kind:'disco' }, wall:0x2a1040, trim:0x6a20a0, ceil:0x0a0418,
    light:0xff60d0, ambient:0x402060, fog:0x0a0418, lamps:[[-5, -5], [5, -5], [-5, 5], [5, 5]], discoBall:true,
    player:[0, 8, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:20, maxActive:10, outfits:'disco', weapons:{ fists:5, bottle:2, mug:1, micstand:1, knife:1, guitar:1 } },
    boss:{ name:'DISCO KING', outfit:'discoBoss', weapon:'katana', scale:1.25, hp:3 } };
  // DJ booth + stage
  L.solids.push(box(0, -9.6, 8, 2, 0.6, 0x1a1a2a));
  L.solids.push(box(0, -9.6, 2.4, 1, 1.4, 0x333344, 0.6, { glow:0x40ffff }));
  L.pickups.push({ w:'guitar', x:-3, z:-9.6, y:0.6 }, { w:'micstand', x:2.5, z:-9.6, y:0.6 }, { w:'micstand', x:-1.5, z:-9.2, y:0.6 });
  merge(L, barCounter(9.6, 0, 10, false, 0x30204a, 0x8040c0));
  merge(L, stools(8.6, 0, 8, false, 1.15));
  for(const [x, z] of [[-8, -4], [-8, 1], [-8, 6]]) merge(L, table(x, z, true, 0x40206a));
  L.pickups.push({ w:'bat', x:-10, z:-9, y:0 }, { w:'knuckles', x:9.6, z:4, y:1.11 }, { w:'pan', x:9.6, z:-4, y:1.11 }, { w:'tommy', x:-10, z:9, y:0 }, { w:'tknives', x:10, z:9.5, y:0 });
  return L;
}

function prison(){
  const L = { id:'prison', name:'Prison', blurb:'Riot in cell block C. Inmates and guards — nobody is on your side.',
    w:26, d:20, h:5, floor:{ c1:0x8a8a84, c2:0x7e7e78, kind:'concrete' }, wall:0x9aa09a, trim:0x5a605a, ceil:0x4a4e4a,
    light:0xe8f0ff, ambient:0x505860, fog:0x202428, bright:0.55, lamps:[[-8, 0], [0, 0], [8, 0], [0, -6], [0, 6]],
    player:[0, 0, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:22, maxActive:10, outfits:'prison', weapons:{ fists:4, shiv:3, baton:2, weight:1, dumbbell:1, knife:1, pan:1 } },
    boss:{ name:'THE WARDEN', outfit:'warden', weapon:'shotgun', scale:1.3, hp:3 } };
  // two rows of cells with bars (bars are deco, cell side walls solid)
  for(const side of [-1, 1]){
    for(let i = 0; i < 5; i++){
      const x = -10 + i * 5, z = side * 8.2;
      L.solids.push(box(x - 2.4, z, 0.25, 3.6, 3, 0x9aa09a));
      L.deco.push(box(x, z - side * 1.8, 4.6, 0.06, 0.06, 0x333333, 2.9));
      for(let b = -2; b <= 2; b++) if(b !== 0) L.deco.push(box(x + b * 0.9, z - side * 1.8, 0.06, 0.06, 2.9, 0x333333));
      L.solids.push(box(x + 1.2, z + side * 0.9, 1.8, 0.8, 0.6, 0x6a6a6a));   // bunk
      L.pickups.push({ w:i % 2 ? 'shiv' : 'dumbbell', x:x - 1, z:z + side * 0.6, y:0 });
    }
  }
  // weight benches in the middle + canteen tables
  for(const x of [-7, 7]){ L.solids.push(box(x, 0, 1.6, 0.6, 0.5, 0x333333)); L.pickups.push({ w:'weight', x:x - 1.3, z:0.6, y:0 }, { w:'weight', x:x + 1.3, z:-0.6, y:0 }, { w:'dumbbell', x:x, z:1.1, y:0 }); }
  L.solids.push(box(0, -3, 4, 1, 0.78, 0x777777)); L.solids.push(box(0, 3, 4, 1, 0.78, 0x777777));
  L.pickups.push({ w:'pan', x:-1, z:-3, y:0.84 }, { w:'mug', x:1, z:3, y:0.84 }, { w:'knife', x:1.2, z:-3, y:0.84 }, { w:'baton', x:12, z:0, y:0 }, { w:'shovel', x:-12, z:0.5, y:0 }, { w:'revolver', x:0.4, z:3, y:0.84 });
  return L;
}

function saloon(){
  const L = { id:'saloon', name:'Western Saloon', blurb:'This town ain\'t big enough. Draw, partner.',
    w:24, d:20, h:4.6, floor:{ c1:0x9a6a3a, c2:0x8a5c30, kind:'planks' }, wall:0x7a4a26, trim:0x4a2a12, ceil:0x3a2412,
    light:0xffc070, ambient:0x6a4a2a, fog:0x2a1a0e, lamps:[[-6, -4], [6, -4], [0, 2], [-6, 6], [6, 6]],
    player:[0, 8, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:18, maxActive:9, outfits:'cowboy', weapons:{ fists:4, bottle:3, revolver:2, knife:1, pitchfork:1, shovel:1, rifle:1 } },
    boss:{ name:'THE SHERIFF', outfit:'sheriff', weapon:'rifle', scale:1.25, hp:3 } };
  merge(L, barCounter(-9.6, -1, 12, false, 0x6a3a1a, 0x4a2410));
  merge(L, backShelf(-11.6, -1, 12, false));
  merge(L, stools(-8.5, -1, 9, false, 1.2));
  for(const [x, z] of [[-2, -5], [3, -5], [-2, 2], [3, 2], [8, -2]]) merge(L, table(x, z, true, 0x5a3a1a));
  L.solids.push(box(9.6, 7.6, 2.4, 1, 1.4, 0x2a1a0e));   // piano
  L.deco.push(box(9.6, 7.0, 2.2, 0.3, 0.06, 0xf0f0e0, 0.9));
  merge(L, barrel(-10.8, 8.6)); merge(L, barrel(-9.8, 8.8)); merge(L, crate(11, -8.6));
  L.pickups.push({ w:'revolver', x:-9.6, z:-6, y:1.11 }, { w:'shotgun', x:11, z:-8.6, y:1 }, { w:'pitchfork', x:-11, z:6, y:0 }, { w:'shovel', x:11, z:3, y:0 },
    { w:'dynamite', x:-10, z:7.6, y:0 }, { w:'tknives', x:0, z:-9, y:0 }, { w:'axe', x:8, z:9, y:0 });
  return L;
}

function pirate(){
  const L = { id:'pirate', name:'Pirate Cove', blurb:'A tavern built into a shipwreck. Yo ho, here come the cutlasses.',
    w:24, d:22, h:5.5, floor:{ c1:0x8a6a44, c2:0x7a5c38, kind:'deck' }, wall:0x4a3826, trim:0x2a1e12, ceil:0x2a1e14,
    light:0xffa050, ambient:0x3a4a5a, fog:0x0e1a24, lamps:[[-6, -5], [6, -5], [0, 0], [-6, 6], [6, 6]],
    player:[0, 9, 0], solids:[], deco:[], pickups:[],
    enemies:{ count:20, maxActive:10, outfits:'pirate', weapons:{ fists:3, cutlass:3, bottle:2, flintlock:2, knife:1, mug:1, spear:1 } },
    boss:{ name:'CAPTAIN REDBEARD', outfit:'captain', weapon:'anchor', scale:1.4, hp:3.5 } };
  L.solids.push(box(0, 0, 0.7, 0.7, 5.5, 0x5a3a1e));   // mast
  merge(L, barCounter(8, -8.6, 8, true, 0x5a3a1e, 0x3a2410));
  merge(L, stools(8, -7.5, 6, true, 1.2));
  for(const [x, z] of [[-6, -4], [-6, 3], [5, 3], [-1, 6]]) merge(L, table(x, z, false, 0x6a4a2a));
  for(const z of [-6, 0, 6]){ L.solids.push(box(-11, z, 1.6, 0.9, 0.9, 0x222222)); L.pickups.push({ w:'cannonball', x:-10, z:z + 1.2, y:0 }); }
  merge(L, barrel(10.8, 9.6)); merge(L, barrel(9.8, 9.8)); merge(L, barrel(10.8, 8.6)); merge(L, crate(-10.5, 9.8, 1.2));
  L.pickups.push({ w:'cutlass', x:10, z:-8.6, y:1.11 }, { w:'flintlock', x:6, z:-8.6, y:1.11 }, { w:'spear', x:11, z:0, y:0 }, { w:'axe', x:-9, z:-9.5, y:0 }, { w:'knife', x:0.4, z:-1, y:0 });
  return L;
}

function arena(){
  const L = { id:'arena', name:'Arena', blurb:'Endless waves. Every weapon in the game on the rack. How long can you last?',
    w:30, d:30, h:7, floor:{ c1:0xc8a868, c2:0xbc9c5c, kind:'sand' }, wall:0x8a7a60, trim:0x5a4a34, ceil:null,
    light:0xfff0d0, ambient:0x8090a0, fog:0x3a4450, bright:0.8, lamps:[[0, 0], [-9, -9], [9, -9], [-9, 9], [9, 9]],
    player:[0, 0, 0], solids:[], deco:[], pickups:[], waves:true,
    enemies:{ count:Infinity, maxActive:6, outfits:'mixed', weapons:{ fists:3, bottle:2, bat:2, knife:2, machete:1, cutlass:1, axe:1, spear:1, revolver:1 } },
    boss:{ name:'THE CHAMPION', outfit:'champion', weapon:'axe', scale:1.4, hp:4 } };
  for(const [x, z] of [[-8, -8], [8, -8], [-8, 8], [8, 8]]) L.solids.push(box(x, z, 1.4, 1.4, 3, 0xa89878));
  // the weapon racks: one of everything melee
  const rack = ['katana', 'axe', 'sledge', 'machete', 'spear', 'spikedbat', 'cleaver', 'cutlass', 'pitchfork', 'crowbar', 'bat', 'shovel', 'knuckles', 'wrench', 'chain', 'anchor'];
  rack.forEach((w, i) => { const a = (i / rack.length) * Math.PI * 2; L.pickups.push({ w, x:Math.cos(a) * 12.5, z:Math.sin(a) * 12.5, y:0 }); });
  L.pickups.push({ w:'shotgun', x:2, z:2, y:0 }, { w:'revolver', x:-2, z:2, y:0 }, { w:'dynamite', x:0, z:-2.5, y:0 }, { w:'tknives', x:2, z:-2, y:0 });
  return L;
}

export const SCENARIOS = [bikerBar, disco, prison, saloon, pirate, arena];
export const scenarioIds = () => SCENARIOS.map(f => f().id);
export function getScenario(id){ const f = SCENARIOS.find(f => f().id === id) || SCENARIOS[0]; return f(); }

// spawn points around the room edge, away from the player and furniture
export function spawnPoints(L, n = 16){
  const pts = [], m = 1.2;
  for(let i = 0; i < n * 6 && pts.length < n; i++){
    const a = (i / (n * 6)) * Math.PI * 2 * 3.7;
    const x = Math.cos(a) * (L.w / 2 - m - (i % 3)), z = Math.sin(a) * (L.d / 2 - m - (i % 2) * 1.5);
    if(blocked(L, x, z, 0.5)) continue;
    if(Math.hypot(x - L.player[0], z - L.player[1]) < 5) continue;
    pts.push([x, z]);
  }
  return pts;
}

export function blocked(L, x, z, r){
  if(Math.abs(x) > L.w / 2 - r || Math.abs(z) > L.d / 2 - r) return true;
  for(const s of L.solids) if(x + r > s.x - s.w / 2 && x - r < s.x + s.w / 2 && z + r > s.z - s.d / 2 && z - r < s.z + s.d / 2 && s.y < 1.6) return true;
  return false;
}

// top surface under (x, z) at or below height y (0 = floor)
export function groundAt(L, x, z, y = 99){
  let g = 0;
  for(const s of L.solids){
    const top = s.y + s.h;
    if(top <= y + 0.05 && top > g && Math.abs(x - s.x) <= s.w / 2 && Math.abs(z - s.z) <= s.d / 2) g = top;
  }
  return g;
}

// enemy outfits per scenario
export function outfitFor(kind, rng){
  const pick = a => a[(rng() * a.length) | 0];
  const skin = pick(SKINS);
  switch(kind){
    case 'biker': return { skin, shirt:pick([0x222222, 0x444444, 0x6a6a6a, 0xb03030, 0xffffff]), vest:0x1a1a1a, pants:pick([0x2a3a5a, 0x1a2a44, 0x222222]),
      hair:pick([null, 0x222222, 0x5a3a1a, 0x888888]), beard:pick([null, 0x222222, 0x6a4a2a, 0x999999]), hat:pick([null, null, 'bandana']), hatC:pick([0xb02020, 0x202060, 0x222222]), shoe:0x1a1a1a };
    case 'bikerBoss': return { skin:0xe0ac69, shirt:0x111111, vest:0x0a0a0a, pants:0x1a2a44, hair:null, beard:0x777777, hat:'bandana', hatC:0xb02020, shoe:0x111111 };
    case 'disco': return { skin, shirt:pick([0xff2a7a, 0x2affd0, 0xffd23f, 0xa040ff, 0xff7a2a, 0xffffff]), pants:pick([0xffffff, 0x222222, 0x8a2a8a, 0xd0a040]),
      hair:pick([0x222222, 0x4a2a10, 0xd0a040, 0xb03020]), afro:rng() < 0.4, beard:pick([null, null, 0x222222]), shoe:pick([0xffffff, 0x222222]) };
    case 'discoBoss': return { skin:0x8d5524, shirt:0xffd700, pants:0xffffff, hair:0x111111, afro:true, beard:0x111111, shoe:0xffffff, shades:true };
    case 'prison': return rng() < 0.22
      ? { skin, shirt:0x2a3a6a, pants:0x1a2a4a, hair:pick([0x222222, 0x5a3a1a]), hat:'cap', hatC:0x1a2a4a, shoe:0x111111, guard:true }
      : { skin, shirt:0xff7a1a, pants:0xff7a1a, hair:pick([null, 0x222222, 0x5a3a1a, 0xaaaaaa]), beard:pick([null, 0x222222, 0x5a3a1a]), shoe:0xdddddd };
    case 'warden': return { skin:0xffdbac, shirt:0x1a2a4a, pants:0x111a2a, hair:0x888888, beard:0x888888, hat:'cap', hatC:0x111a2a, shoe:0x111111 };
    case 'cowboy': return { skin, shirt:pick([0xc0a070, 0x8a4a2a, 0x6a6a8a, 0xd0d0c0, 0x8a2a2a]), vest:pick([null, 0x4a2a12, 0x222222]), pants:pick([0x4a3a2a, 0x2a3a5a, 0x6a5a40]),
      hair:pick([0x4a2a10, 0x222222, 0xc09050]), beard:pick([null, 0x4a2a10, 0x222222, 0x888888]), hat:'cowboy', hatC:pick([0x5a3a1a, 0x222222, 0xc0a070]), shoe:0x3a2010 };
    case 'sheriff': return { skin:0xe0ac69, shirt:0xd0c0a0, vest:0x3a2010, pants:0x2a2a3a, hair:0x888888, beard:0x888888, hat:'cowboy', hatC:0xf0e8d0, shoe:0x3a2010, badge:true };
    case 'pirate': return { skin, shirt:pick([0xffffff, 0xd0d0c0]), stripes:pick([0xb02020, 0x202060, 0x222222]), pants:pick([0x3a2a1a, 0x2a2a3a, 0x6a5a40]),
      hair:pick([0x222222, 0x5a3a1a, 0xb04020]), beard:pick([null, 0x222222, 0xb04020]), hat:pick(['bandana', 'bandana', 'tricorn']), hatC:pick([0xb02020, 0x202060, 0x222222]), shoe:0x2a1a0e, eyepatch:rng() < 0.3 };
    case 'captain': return { skin:0xffdbac, shirt:0x8a1a1a, vest:0xc9a23a, pants:0x222222, hair:0xb03010, beard:0xb03010, hat:'tricorn', hatC:0x111111, shoe:0x111111, eyepatch:true };
    case 'champion': return { skin:0xc68642, shirt:null, pants:0x8a1a1a, hair:0x222222, beard:0x222222, hat:'helmet', hatC:0xc9a23a, shoe:0x6b4423 };
    default: return outfitFor(pick(['biker', 'disco', 'prison', 'cowboy', 'pirate']), rng);
  }
}

// weighted pick from { id: weight }
export function pickWeighted(table, rng){
  let tot = 0; for(const k in table) tot += table[k];
  let r = rng() * tot;
  for(const k in table){ r -= table[k]; if(r < 0) return k; }
  return Object.keys(table)[0];
}
