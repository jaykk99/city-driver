// CITY DRIVER — skin data (pure, no three.js, testable).
// Everything in the skin editor is FREE. Save fields:
//   name: string                     — your name tag (multiplayer)
//   paint: { carId: hex }            — body color (kept from the garage save)
//   carSkin: { carId: { rims, stripes, stripe, glow, tint } }
//   outfit: { shirt, pants, skin, hair, hat, hatColor }

export const PALETTE = [
  0xd7263d,0xff5e3a,0xff8c1a,0xffb300,0xffd23f,0xc6f432,0x4ade80,0x16a34a,
  0x0f766e,0x18c0c0,0x38bdf8,0x1f6feb,0x1e3a8a,0x7c3aed,0xa855f7,0xed64a6,
  0xff2e63,0x7a1010,0x8a5a1a,0xc9962e,0xf8fafc,0xcbd5e1,0x6b7280,0x111827,
];
export const SKIN_TONES = [0xf5d0b5,0xe8b48f,0xc68a62,0xa86b45,0x7a4a2c,0x4a2c1a];
export const HAIR_COLORS = [0x111111,0x2a1a10,0x5a3a1e,0x9a6a3a,0xd9b26a,0xe8e8e8,0xd7263d,0x38bdf8];
export const STRIPES = ['none','center','dual','side'];
export const TINTS = ['clear','dark','limo'];
export const HATS = ['none','cap','beanie','cowboy','crown','helmet'];
export const HAT_NAMES = { none:'No hat', cap:'Snapback', beanie:'Beanie', cowboy:'Stetson', crown:'Crown', helmet:'Helmet' };

const isHex = v => Number.isInteger(v) && v >= 0 && v <= 0xffffff;
const pick = (v, list, def) => list.includes(v) ? v : def;

export function defaultCarSkin(){
  return { rims:0xb9bec6, stripes:'none', stripe:0xf8fafc, glow:null, tint:'dark' };
}
export function defaultOutfit(){
  return { shirt:0x2b6cb0, pants:0x2d3748, skin:0xc68a62, hair:0x2a1a10, hat:'none', hatColor:0x22252b };
}

export function normalizeCarSkin(s){
  const d = defaultCarSkin(), o = s && typeof s === 'object' ? s : {};
  return {
    rims: isHex(o.rims) ? o.rims : d.rims,
    stripes: pick(o.stripes, STRIPES, d.stripes),
    stripe: isHex(o.stripe) ? o.stripe : d.stripe,
    glow: isHex(o.glow) ? o.glow : null,
    tint: pick(o.tint, TINTS, d.tint),
  };
}

export function normalizeOutfit(o){
  const d = defaultOutfit(), s = o && typeof o === 'object' ? o : {};
  return {
    shirt: isHex(s.shirt) ? s.shirt : d.shirt,
    pants: isHex(s.pants) ? s.pants : d.pants,
    skin: isHex(s.skin) ? s.skin : d.skin,
    hair: isHex(s.hair) ? s.hair : d.hair,
    hat: pick(s.hat, HATS, d.hat),
    hatColor: isHex(s.hatColor) ? s.hatColor : d.hatColor,
  };
}

export function cleanName(n){
  const s = String(n == null ? '' : n).replace(/[^\w .\-'!?]/g, '').trim().slice(0, 16);
  return s;
}

// Fill in / repair skin fields on a save (mutates + returns it).
export function ensureSkins(save){
  if(!save.carSkin || typeof save.carSkin !== 'object') save.carSkin = {};
  for(const id of Object.keys(save.carSkin)) save.carSkin[id] = normalizeCarSkin(save.carSkin[id]);
  save.outfit = normalizeOutfit(save.outfit);
  // every hat is free now — keep the old list field valid for older code
  save.hats = HATS.slice();
  const n = cleanName(save.name);
  save.name = n || ('Driver' + Math.floor(1000 + Math.random() * 9000));
  return save;
}

export function carSkinFor(save, carId){
  if(!save.carSkin[carId]) save.carSkin[carId] = defaultCarSkin();
  return save.carSkin[carId];
}

// Compact wire format for multiplayer (short keys, ints).
export function packLook(save, carId){
  const k = carSkinFor(save, carId), o = save.outfit;
  return {
    p: save.paint[carId] | 0, r: k.rims, s: STRIPES.indexOf(k.stripes), sc: k.stripe,
    g: k.glow == null ? -1 : k.glow, t: TINTS.indexOf(k.tint),
    o: [o.shirt, o.pants, o.skin, o.hair, HATS.indexOf(o.hat), o.hatColor],
  };
}
export function unpackLook(L){
  L = L || {};
  const o = Array.isArray(L.o) ? L.o : [];
  return {
    paint: isHex(L.p) ? L.p : null,
    carSkin: normalizeCarSkin({ rims:L.r, stripes:STRIPES[L.s], stripe:L.sc, glow:L.g, tint:TINTS[L.t] }),
    outfit: normalizeOutfit({ shirt:o[0], pants:o[1], skin:o[2], hair:o[3], hat:HATS[o[4]], hatColor:o[5] }),
  };
}

export const hexStr = h => '#' + (h | 0).toString(16).padStart(6, '0');
