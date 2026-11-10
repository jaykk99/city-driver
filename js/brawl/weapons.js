// BAR BRAWL — weapon table. Pure data + helpers, no three.js (unit-tested).
//
// kind:  melee | gun | throw
// dmg:   damage per hit (body hp is 100, head 40, limbs 45)
// reach: melee range in metres          rate: seconds between swings / shots
// knock: how hard a hit shoves (m/s)    sever: 0..1 chance a hit takes a limb off
// sharp: blades slice limbs off cleanly; blunt weapons crush and pulp instead
// dur:   hits before it breaks (Infinity = never) -> breaksInto (weapon id) or nothing
// gun:   ammo, pellets, spread (rad), range
// throw: thrown weapons fly, hit for tdmg and (if shatter) break on impact; explode = blast radius
// model: procedural look: handle length/width/colour + head box size/colour/offset
//
// Anything can be thrown — throwing a melee weapon uses throwDmg(w).

const M = (len, w, hc, head, headC, extra) => Object.assign({ len, w, hc, head, headC }, extra || {});

export const WEAPONS = {
  fists:      { name:'Fists',            kind:'melee', dmg:9,  reach:1.5, rate:0.38, knock:2.5, sever:0,    sharp:false, dur:Infinity },
  knuckles:   { name:'Brass Knuckles',   kind:'melee', dmg:17, reach:1.5, rate:0.36, knock:3.5, sever:0,    sharp:false, dur:Infinity, model:M(0.02,0.1,0xc9a23a,[0.12,0.05,0.04],0xd8b44a) },
  bottle:     { name:'Beer Bottle',      kind:'melee', dmg:16, reach:1.7, rate:0.5,  knock:3,   sever:0,    sharp:false, dur:1, breaksInto:'brokenbottle', shatter:true, model:M(0.22,0.05,0x2f6b2a,[0.08,0.1,0.08],0x2f6b2a,{ glass:true }) },
  brokenbottle:{ name:'Broken Bottle',   kind:'melee', dmg:20, reach:1.6, rate:0.34, knock:1.5, sever:0.12, sharp:true,  dur:8, model:M(0.14,0.05,0x2f6b2a,[0.08,0.06,0.08],0x7fbf77,{ glass:true }) },
  mug:        { name:'Beer Mug',         kind:'melee', dmg:18, reach:1.6, rate:0.5,  knock:4,   sever:0,    sharp:false, dur:3, shatter:true, model:M(0.04,0.06,0xd9c070,[0.14,0.18,0.14],0xf0d890,{ glass:true }) },
  cue:        { name:'Pool Cue',         kind:'melee', dmg:20, reach:2.4, rate:0.6,  knock:4,   sever:0,    sharp:false, dur:4, breaksInto:'brokencue', model:M(1.3,0.035,0xc89b5a,[0.04,0.06,0.04],0x2b2b2b) },
  brokencue:  { name:'Broken Cue',       kind:'melee', dmg:19, reach:1.8, rate:0.42, knock:2,   sever:0.08, sharp:true,  dur:10, model:M(0.7,0.035,0xc89b5a,[0.03,0.08,0.03],0xe0c08a) },
  stool:      { name:'Bar Stool',        kind:'melee', dmg:30, reach:2.0, rate:0.95, knock:8,   sever:0.05, sharp:false, dur:3, breaksInto:'stoolleg', heavy:true, model:M(0.6,0.05,0x6b4423,[0.38,0.08,0.38],0x8b1a1a) },
  stoolleg:   { name:'Stool Leg',        kind:'melee', dmg:16, reach:1.8, rate:0.45, knock:3,   sever:0,    sharp:false, dur:8, model:M(0.6,0.05,0x6b4423,[0.06,0.06,0.06],0x6b4423) },
  chair:      { name:'Chair',            kind:'melee', dmg:32, reach:2.0, rate:1.0,  knock:9,   sever:0.05, sharp:false, dur:3, breaksInto:'stoolleg', heavy:true, model:M(0.5,0.05,0x7a5230,[0.45,0.45,0.08],0x7a5230) },
  bat:        { name:'Baseball Bat',     kind:'melee', dmg:28, reach:2.0, rate:0.6,  knock:7,   sever:0.08, sharp:false, dur:30, model:M(0.55,0.05,0xd9b98a,[0.09,0.4,0.09],0xc9a070) },
  spikedbat:  { name:'Spiked Bat',       kind:'melee', dmg:36, reach:2.0, rate:0.65, knock:7,   sever:0.25, sharp:false, dur:25, model:M(0.55,0.05,0x8b6b4a,[0.1,0.4,0.1],0x9a9a9a) },
  pan:        { name:'Frying Pan',       kind:'melee', dmg:26, reach:1.8, rate:0.55, knock:8,   sever:0,    sharp:false, dur:Infinity, model:M(0.3,0.04,0x222222,[0.32,0.03,0.32],0x333333) },
  knife:      { name:'Knife',            kind:'melee', dmg:24, reach:1.5, rate:0.28, knock:1,   sever:0.3,  sharp:true,  dur:Infinity, model:M(0.12,0.035,0x3a2a1a,[0.03,0.22,0.015],0xdedede) },
  shiv:       { name:'Shiv',             kind:'melee', dmg:22, reach:1.4, rate:0.25, knock:1,   sever:0.2,  sharp:true,  dur:12, model:M(0.1,0.035,0x777777,[0.025,0.16,0.015],0xcfcfcf) },
  cleaver:    { name:'Meat Cleaver',     kind:'melee', dmg:34, reach:1.6, rate:0.5,  knock:3,   sever:0.6,  sharp:true,  dur:Infinity, model:M(0.14,0.04,0x2a1a10,[0.02,0.16,0.14],0xd0d0d0) },
  machete:    { name:'Machete',          kind:'melee', dmg:38, reach:1.9, rate:0.48, knock:3,   sever:0.6,  sharp:true,  dur:Infinity, model:M(0.14,0.04,0x2a1a10,[0.02,0.55,0.07],0xc8c8c8) },
  axe:        { name:'Fire Axe',         kind:'melee', dmg:50, reach:2.1, rate:0.85, knock:6,   sever:0.8,  sharp:true,  heavy:true, dur:Infinity, model:M(0.8,0.045,0xb01818,[0.05,0.18,0.22],0xcfcfcf) },
  sledge:     { name:'Sledgehammer',     kind:'melee', dmg:65, reach:2.1, rate:1.15, knock:14,  sever:0.35, sharp:false, heavy:true, crush:true, dur:Infinity, model:M(0.9,0.045,0x8b6b4a,[0.16,0.16,0.3],0x555555) },
  crowbar:    { name:'Crowbar',          kind:'melee', dmg:27, reach:1.9, rate:0.55, knock:5,   sever:0.05, sharp:false, dur:Infinity, model:M(0.7,0.03,0xb02020,[0.03,0.03,0.12],0xb02020) },
  wrench:     { name:'Pipe Wrench',      kind:'melee', dmg:29, reach:1.8, rate:0.6,  knock:6,   sever:0,    sharp:false, dur:Infinity, model:M(0.45,0.04,0xb02020,[0.12,0.1,0.06],0x777777) },
  chain:      { name:'Bike Chain',       kind:'melee', dmg:24, reach:2.3, rate:0.5,  knock:4,   sever:0.05, sharp:false, dur:Infinity, model:M(0.7,0.03,0x888888,[0.05,0.05,0.05],0x999999) },
  guitar:     { name:'Guitar',           kind:'melee', dmg:30, reach:2.1, rate:0.85, knock:9,   sever:0,    sharp:false, heavy:true, dur:2, breaksInto:'stoolleg', model:M(0.55,0.05,0x5a3a1a,[0.34,0.42,0.1],0xc0402a) },
  micstand:   { name:'Mic Stand',        kind:'melee', dmg:22, reach:2.3, rate:0.6,  knock:5,   sever:0,    sharp:false, dur:Infinity, model:M(1.1,0.025,0x222222,[0.06,0.1,0.06],0x444444) },
  katana:     { name:'Katana',           kind:'melee', dmg:46, reach:2.2, rate:0.42, knock:3,   sever:0.85, sharp:true,  dur:Infinity, model:M(0.22,0.035,0x1a1a1a,[0.02,0.75,0.04],0xe8e8e8) },
  cutlass:    { name:'Cutlass',          kind:'melee', dmg:40, reach:2.0, rate:0.45, knock:3,   sever:0.65, sharp:true,  dur:Infinity, model:M(0.14,0.04,0xc9a23a,[0.02,0.6,0.06],0xd8d8d8) },
  spear:      { name:'Spear',            kind:'melee', dmg:35, reach:2.8, rate:0.6,  knock:5,   sever:0.3,  sharp:true,  dur:Infinity, model:M(1.5,0.035,0x8b6b4a,[0.05,0.22,0.02],0xbfbfbf) },
  pitchfork:  { name:'Pitchfork',        kind:'melee', dmg:33, reach:2.6, rate:0.65, knock:6,   sever:0.25, sharp:true,  dur:Infinity, model:M(1.3,0.035,0x8b6b4a,[0.22,0.22,0.02],0x8a8a8a) },
  shovel:     { name:'Shovel',           kind:'melee', dmg:31, reach:2.1, rate:0.7,  knock:8,   sever:0.3,  sharp:false, dur:Infinity, model:M(0.9,0.04,0x8b6b4a,[0.22,0.26,0.02],0x6a6a6a) },
  weight:     { name:'Weight Plate',     kind:'melee', dmg:34, reach:1.6, rate:0.8,  knock:9,   sever:0,    sharp:false, heavy:true, dur:Infinity, model:M(0.02,0.04,0x222222,[0.32,0.32,0.05],0x262626) },
  dumbbell:   { name:'Dumbbell',         kind:'melee', dmg:30, reach:1.6, rate:0.7,  knock:7,   sever:0,    sharp:false, heavy:true, dur:Infinity, model:M(0.3,0.04,0x555555,[0.14,0.14,0.14],0x222222) },
  baton:      { name:'Guard Baton',      kind:'melee', dmg:22, reach:1.8, rate:0.42, knock:5,   sever:0,    sharp:false, dur:Infinity, model:M(0.55,0.04,0x111111,[0.05,0.05,0.05],0x111111) },
  anchor:     { name:'Anchor',           kind:'melee', dmg:80, reach:2.2, rate:1.5,  knock:18,  sever:0.5,  sharp:false, heavy:true, crush:true, dur:Infinity, model:M(0.9,0.06,0x3a3a3a,[0.6,0.2,0.08],0x3a3a3a) },
  // guns
  revolver:   { name:'Revolver',         kind:'gun', dmg:55, rate:0.45, knock:6,  sever:0.4,  ammo:6,  pellets:1, spread:0.01, range:60, model:M(0.12,0.04,0x4a2a14,[0.04,0.06,0.26],0x7a7a7a) },
  shotgun:    { name:'Double Barrel',    kind:'gun', dmg:16, rate:0.9,  knock:4,  sever:0.35, ammo:2,  pellets:9, spread:0.12, range:25, model:M(0.3,0.05,0x6b4423,[0.07,0.06,0.7],0x444444) },
  flintlock:  { name:'Flintlock Pistol', kind:'gun', dmg:70, rate:1.4,  knock:9,  sever:0.5,  ammo:1,  pellets:1, spread:0.03, range:40, model:M(0.14,0.05,0x6b4423,[0.04,0.05,0.34],0x8a7a50) },
  rifle:      { name:'Lever Rifle',      kind:'gun', dmg:60, rate:0.75, knock:7,  sever:0.45, ammo:8,  pellets:1, spread:0.005,range:80, model:M(0.35,0.05,0x6b4423,[0.04,0.05,0.8],0x555555) },
  tommy:      { name:'Tommy Gun',        kind:'gun', dmg:20, rate:0.09, knock:2,  sever:0.15, ammo:40, pellets:1, spread:0.05, range:45, model:M(0.3,0.06,0x5a3a1a,[0.08,0.12,0.6],0x333333) },
  // throwables
  dynamite:   { name:'Dynamite',         kind:'throw', dmg:0, rate:0.8, knock:0, sever:0, tdmg:90, explode:4.5, fuse:1.6, count:3, model:M(0.02,0.04,0xb02020,[0.05,0.2,0.05],0xd02a2a) },
  tknives:    { name:'Throwing Knives',  kind:'throw', dmg:0, rate:0.35, knock:0, sever:0, tdmg:34, tsever:0.4, count:6, model:M(0.08,0.03,0x222222,[0.02,0.16,0.015],0xdedede) },
  cannonball: { name:'Cannonball',       kind:'throw', dmg:0, rate:1.0, knock:0, sever:0, tdmg:70, tknock:16, count:1, model:M(0.01,0.01,0x222222,[0.22,0.22,0.22],0x1a1a1a) },
};

export const WEAPON_IDS = Object.keys(WEAPONS);
export const wdef = id => WEAPONS[id] || WEAPONS.fists;

// damage a thrown melee weapon does: heavy things hurt more thrown, blades stick
export function throwDmg(w){
  if(w.kind === 'throw') return w.tdmg;
  return Math.round(w.dmg * (w.heavy ? 1.2 : 0.8) + (w.shatter ? 6 : 0));
}

// what a hit does to the target given its remaining health on that part.
// rng() in [0,1). Returns { dmg, sever, crush, gibs }.
export function resolveHit(w, partHp, rng, mult = 1){
  const dmg = Math.round((w.kind === 'throw' ? throwDmg(w) : w.dmg) * mult);
  const sev = w.kind === 'throw' ? (w.tsever || 0) : w.sever;
  const killing = dmg >= partHp;
  // blades take limbs off on a lucky hit; anything takes off a limb it kills
  const sever = killing || (sev > 0 && rng() < sev);
  const crush = !!w.crush && killing;          // sledges / anchors pulp what they kill
  const gibs = Math.min(40, Math.round(dmg / 3) + (sever ? 18 : 0) + (crush ? 30 : 0));
  return { dmg, sever, crush, gibs };
}

// one weapon losing durability on a hit -> new weapon id (or null = gone) or same id
export function wear(id, state){
  const w = wdef(id);
  if(!isFinite(w.dur)) return id;
  state.used = (state.used || 0) + 1;
  if(state.used < w.dur) return id;
  state.used = 0;
  return w.breaksInto || null;
}
