// CITY DRIVER — store catalog + purchase logic (pure, no DOM, testable).
// Save fields added on top of the garage save:
//   weapons:[ids]  ammo:{id:rounds}  equipped:id|null
//   outfit:{shirt:hex, hat:id}  hats:[ids]

export const WEAPONS = [
  { id:'pistol',  name:'P9 Pistol',     price:1200, rate:0.28, auto:false, pellets:1, spread:0.012, range:90,
    ammoBox:30, ammoPrice:60,  start:30, desc:'Reliable sidearm. Semi-auto.' },
  { id:'shotgun', name:'Breacher 12',   price:3200, rate:0.85, auto:false, pellets:7, spread:0.09,  range:40,
    ammoBox:16, ammoPrice:90,  start:16, desc:'Pump action. Brutal up close.' },
  { id:'smg',     name:'Viper SMG',     price:4500, rate:0.085,auto:true,  pellets:1, spread:0.04,  range:70,
    ammoBox:90, ammoPrice:150, start:90, desc:'Full auto. Sprays fast.' },
  { id:'rifle',   name:'Ranger AR',     price:9000, rate:0.12, auto:true,  pellets:1, spread:0.008, range:140,
    ammoBox:60, ammoPrice:200, start:60, desc:'Long range, dead accurate.' },
];

import { HATS as HAT_IDS, HAT_NAMES, normalizeOutfit } from './skins.js';

// Clothing is FREE (skin editor update).
export const SHIRTS = [0x2b6cb0,0xe53e3e,0x2f855a,0x1a202c,0xf7fafc,0xd69e2e,0x805ad5,0xed64a6];
export const SHIRT_COST = 0;
export const HATS = HAT_IDS.map(id => ({ id, name:HAT_NAMES[id], price:0 }));

// Shooting-range payout per knocked-down target.
export const TARGET_PAY = 15;

export const weaponDef = id => WEAPONS.find(w => w.id === id) || null;

// Fill in / repair the shop fields on a save object (mutates + returns it).
export function ensureArsenal(save){
  const valid = new Set(WEAPONS.map(w => w.id));
  if(!Array.isArray(save.weapons)) save.weapons = [];
  save.weapons = save.weapons.filter((id, i, a) => valid.has(id) && a.indexOf(id) === i);
  if(!save.ammo || typeof save.ammo !== 'object') save.ammo = {};
  for(const id of Object.keys(save.ammo)) if(!valid.has(id)) delete save.ammo[id];
  for(const id of save.weapons) save.ammo[id] = Math.max(0, save.ammo[id] | 0);
  if(!save.weapons.includes(save.equipped)) save.equipped = save.weapons[0] || null;
  save.outfit = normalizeOutfit(save.outfit);
  save.hats = HATS.map(h => h.id);          // every hat is free
  return save;
}

const fail = msg => ({ ok:false, msg });
const okr  = msg => ({ ok:true, msg });

export function buyWeapon(save, id){
  const w = weaponDef(id);
  if(!w) return fail('Unknown weapon');
  if(save.weapons.includes(id)) return fail('Already owned');
  if(save.cash < w.price) return fail('Not enough cash');
  save.cash -= w.price;
  save.weapons.push(id);
  save.ammo[id] = (save.ammo[id] | 0) + w.start;
  save.equipped = id;
  return okr(w.name + ' bought');
}

export function buyAmmo(save, id){
  const w = weaponDef(id);
  if(!w) return fail('Unknown weapon');
  if(!save.weapons.includes(id)) return fail('Buy the gun first');
  if(save.cash < w.ammoPrice) return fail('Not enough cash');
  save.cash -= w.ammoPrice;
  save.ammo[id] = (save.ammo[id] | 0) + w.ammoBox;
  return okr('+' + w.ammoBox + ' rounds');
}

export function equipWeapon(save, id){
  if(id === null){ save.equipped = null; return okr('Holstered'); }
  if(!save.weapons.includes(id)) return fail('Not owned');
  save.equipped = id;
  return okr(weaponDef(id).name + ' equipped');
}

// cycles: weapon1 -> weapon2 -> ... -> unarmed -> weapon1
export function cycleWeapon(save){
  const list = [...save.weapons, null];
  if(list.length === 1) return null;
  const i = list.indexOf(save.equipped);
  save.equipped = list[(i + 1) % list.length];
  return save.equipped;
}

// spend one round; returns true if the shot can fire
export function useAmmo(save, id){
  if(!id || (save.ammo[id] | 0) <= 0) return false;
  save.ammo[id]--;
  return true;
}

export function buyShirt(save, hex){
  if(!Number.isInteger(hex) || hex < 0 || hex > 0xffffff) return fail('Unknown color');
  if(save.outfit.shirt === hex) return fail('Already wearing it');
  if(save.cash < SHIRT_COST) return fail('Not enough cash');
  save.cash -= SHIRT_COST;
  save.outfit.shirt = hex;
  return okr('New shirt');
}

export function buyHat(save, id){
  const h = HATS.find(x => x.id === id);
  if(!h) return fail('Unknown hat');
  if(save.hats.includes(id)){ save.outfit.hat = id; return okr(h.name + ' on'); }
  if(save.cash < h.price) return fail('Not enough cash');
  save.cash -= h.price;
  save.hats.push(id);
  save.outfit.hat = id;
  return okr(h.name + ' bought');
}
