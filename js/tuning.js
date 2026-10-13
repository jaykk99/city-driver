// CITY DRIVER — tuning shop. Pure data + math (no three.js / DOM), so it is
// fully unit-testable. Stats come from real parts:
//   horsepower (engine swap x bolt-ons x boost) vs weight  -> acceleration
//   horsepower + final drive                               -> top speed
//   tires + drivetrain                                     -> launch traction (wheelspin)
//   turbo size                                             -> boost + spool lag
//   lift + tire size + tires + 4x4                         -> off-road ability
// Inspired by how drag-tuning and off-road builder games handle upgrades:
// engine swaps, power adders with adjustable PSI, nitrous shots, gearing,
// slicks; lift kits, bigger tires that need lift to clear, bumpers/winch/snorkel.
import { CarPhysics } from './physics.js';

// stock horsepower and curb weight (kg) per car
export const BASE = {
  sport:{ hp:260, kg:1400, cyl:6, red:7200 },   muscle:{ hp:420, kg:1650, cyl:8, red:6200, idle:750 },
  super:{ hp:560, kg:1450, cyl:10, red:8500 },  suv:{ hp:300, kg:2100, cyl:6, red:6000 },
  truck:{ hp:380, kg:2300, cyl:8, red:5600, idle:700 }, track:{ hp:480, kg:1200, cyl:4, red:8800, idle:1100 },
  sedan:{ hp:180, kg:1450, cyl:4, red:6500 },   taxi:{ hp:170, kg:1500, cyl:4, red:6200 },
  van:{ hp:210, kg:2200, cyl:6, red:5500, idle:700 }, police:{ hp:400, kg:1800, cyl:8, red:6600, idle:800 },
  hyper:{ hp:900, kg:1350, cyl:12, red:9000, idle:1000 },
};
const baseOf = id => BASE[id] || BASE.sport;

// ---------- parts catalog ----------
export const ENGINES = [
  { id:'stock', name:'Stock engine', price:0 },
  { id:'i4t',  name:'2.0L Turbo I4',      hp:320,  kg:-40, cyl:4,  red:7600, idle:900,  price:9000 },
  { id:'v6',   name:'3.5L V6',            hp:380,  kg:0,   cyl:6,  red:7200, idle:800,  price:14000 },
  { id:'v8',   name:'5.7L V8',            hp:480,  kg:60,  cyl:8,  red:6600, idle:750,  price:22000 },
  { id:'bb',   name:'9.4L Big Block V8',  hp:750,  kg:120, cyl:8,  red:6200, idle:700,  price:45000 },
  { id:'v10',  name:'5.2L V10',           hp:640,  kg:40,  cyl:10, red:8700, idle:950,  price:60000 },
  { id:'v12',  name:'6.5L V12',           hp:820,  kg:90,  cyl:12, red:9000, idle:1000, price:95000 },
  { id:'promod', name:'10.5L Pro Mod Hemi', hp:1100, kg:150, cyl:8, red:8000, idle:1100, price:150000 },
];
// power adders. kind: turbo (lags, builds with rpm) | roots (instant) | centri (builds with rpm²)
export const ADDERS = [
  { id:'none',    name:'Naturally aspirated', price:0,     maxPsi:0 },
  { id:'turbo_s', name:'Small turbo',     kind:'turbo',  maxPsi:18, spoolAt:0.32, rate:3.2, price:6000 },
  { id:'turbo_l', name:'Big turbo',       kind:'turbo',  maxPsi:32, spoolAt:0.55, rate:1.3, price:15000 },
  { id:'twin',    name:'Twin turbo',      kind:'turbo',  maxPsi:36, spoolAt:0.40, rate:2.3, price:28000 },
  { id:'roots',   name:'Roots blower',    kind:'roots',  maxPsi:20, spoolAt:0,    rate:20,  price:18000 },
  { id:'centri',  name:'Centrifugal supercharger', kind:'centri', maxPsi:28, spoolAt:0, rate:20, price:22000 },
];
export const NITROUS = [0, 50, 100, 150, 250, 500];                 // shot size (hp)
export const NITROUS_PRICE = [0, 2500, 4500, 7000, 12000, 25000];
export const BOTTLES = [{ id:'s', name:'5 lb', time:0, price:0 }, { id:'m', name:'10 lb', time:2, price:3000 }, { id:'l', name:'15 lb', time:4, price:6000 }];
export const LEVEL_PRICE = { ecu:[0, 2500, 6000, 12000], intake:[0, 1200, 3000, 6000], exhaust:[0, 1500, 3500, 7000],
  weight:[0, 3000, 8000, 18000], brakes:[0, 1500, 4000, 9000] };
export const TRANS = [
  { id:'stock', name:'Stock gearbox', shift:0.2,  price:0 },
  { id:'close', name:'Close-ratio 6-speed', shift:0.13, price:8000 },
  { id:'drag',  name:'Drag sequential', shift:0.07, price:20000 },
];
// road grip, launch traction, cornering, off-road ability
export const TIRES = [
  { id:'street', name:'Street',          road:1.0,  launch:1.0,  corner:1.0,  off:0.55, price:0 },
  { id:'sport',  name:'Sport (R-comp)',   road:1.12, launch:1.15, corner:1.1,  off:0.45, price:3000 },
  { id:'slicks', name:'Drag slicks',      road:0.95, launch:1.65, corner:0.85, off:0.3,  price:6000 },
  { id:'at',     name:'All-terrain',      road:0.95, launch:1.05, corner:0.94, off:0.85, price:3500 },
  { id:'mud',    name:'Mud terrain',      road:0.86, launch:1.0,  corner:0.86, off:1.05, price:5000 },
];
// ride height: lowered … 6" lift. tiers decide the biggest tire that fits.
export const LIFTS = [
  { id:'low',   name:'Lowered',  h:-0.07, tier:-1, handling:1.08, price:2500 },
  { id:'stock', name:'Stock',    h:0,     tier:0,  handling:1.0,  price:0 },
  { id:'l2',    name:'2" lift',  h:0.12,  tier:1,  handling:0.96, price:3000 },
  { id:'l4',    name:'4" lift',  h:0.24,  tier:2,  handling:0.91, price:6000 },
  { id:'l6',    name:'6" lift',  h:0.38,  tier:3,  handling:0.85, price:10000 },
];
export const TIRE_SIZES = [
  { id:0, name:'Stock size', scale:1.0,  price:0 },
  { id:1, name:'33"',        scale:1.12, price:2000 },
  { id:2, name:'35"',        scale:1.22, price:3500 },
  { id:3, name:'37"',        scale:1.32, price:5000 },
  { id:4, name:'40"',        scale:1.45, price:8000 },
];
// off-road / body parts (bool) with price + effect notes
export const BODY = [
  { id:'awd',     name:'4x4 conversion',    price:12000, note:'+traction everywhere, big off-road boost' },
  { id:'bullbar', name:'Pre-runner bull bar', price:2500, note:'Steel front bar' },
  { id:'winch',   name:'Winch',             price:1800, note:'Mounted in the front bumper' },
  { id:'snorkel', name:'Snorkel',           price:1200, note:'Wade through mud pits faster' },
  { id:'rack',    name:'Roof rack',         price:1500, note:'' },
  { id:'lightbar',name:'LED light bar',     price:2000, note:'Lights up the trail at night' },
  { id:'flares',  name:'Fender flares',     price:1600, note:'' },
  { id:'skid',    name:'Skid plates',       price:2200, note:'+off-road ability' },
  { id:'wing',    name:'Drag wing',         price:3000, note:'+high-speed stability' },
  { id:'wheelie', name:'Wheelie bars',      price:2400, note:'+launch traction' },
];
export const FD_MIN = 2.6, FD_MAX = 4.8, FD_STOCK = 3.5;
export const OFFSET_MIN = -0.05, OFFSET_MAX = 0.3;

export const findPart = (list, id) => list.find(p => p.id === id) || list[0];

export function defaultBuild(){
  return { engine:'stock', adder:'none', psi:0, nitrous:0, bottle:'s', ecu:0, intake:0, exhaust:0, weight:0,
    trans:'stock', fd:FD_STOCK, tires:'street', brakes:0, lift:'stock', tireSize:0, offset:0, body:[] };
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lvl = v => clamp(v | 0, 0, 3);

// repair a build from a save (unknown parts dropped, numbers clamped, tire size kept legal)
export function normalizeBuild(b){
  const d = defaultBuild(), o = b && typeof b === 'object' ? b : {};
  const ids = l => l.map(p => p.id);
  const out = {
    engine: ids(ENGINES).includes(o.engine) ? o.engine : d.engine,
    adder: ids(ADDERS).includes(o.adder) ? o.adder : d.adder,
    nitrous: NITROUS.includes(o.nitrous) ? o.nitrous : 0,
    bottle: ids(BOTTLES).includes(o.bottle) ? o.bottle : 's',
    ecu:lvl(o.ecu), intake:lvl(o.intake), exhaust:lvl(o.exhaust), weight:lvl(o.weight), brakes:lvl(o.brakes),
    trans: ids(TRANS).includes(o.trans) ? o.trans : d.trans,
    fd: Number.isFinite(+o.fd) ? clamp(+o.fd, FD_MIN, FD_MAX) : d.fd,
    tires: ids(TIRES).includes(o.tires) ? o.tires : d.tires,
    lift: ids(LIFTS).includes(o.lift) ? o.lift : d.lift,
    tireSize: clamp(o.tireSize | 0, 0, TIRE_SIZES.length - 1),
    offset: Number.isFinite(+o.offset) ? clamp(+o.offset, OFFSET_MIN, OFFSET_MAX) : 0,
    body: Array.isArray(o.body) ? [...new Set(o.body.filter(x => BODY.some(p => p.id === x)))] : [],
  };
  out.psi = Number.isFinite(+o.psi) ? clamp(Math.round(+o.psi), 0, findPart(ADDERS, out.adder).maxPsi) : 0;
  out.tireSize = Math.min(out.tireSize, maxTireSize(out.lift));
  return out;
}
// bigger tires rub without lift: stock fits 33", each lift tier allows one size more
export function maxTireSize(liftId){ return clamp(findPart(LIFTS, liftId).tier + 1, 0, TIRE_SIZES.length - 1); }

// map the old 0-5 upgrade levels onto real parts (one-time save migration)
export function migrateLegacy(u){
  const b = defaultBuild();
  if(!u) return b;
  const e = u.engine | 0, t = u.turbo | 0, ti = u.tires | 0, n = u.nitro | 0, s = u.suspension | 0;
  b.ecu = Math.min(3, Math.ceil(e / 2)); b.intake = Math.min(3, Math.floor(e / 2)); b.exhaust = Math.min(3, Math.floor(e / 2));
  if(t > 0){ b.adder = 'turbo_s'; b.psi = Math.min(18, t * 4); }
  if(ti >= 2) b.tires = 'sport';
  if(n > 0) b.nitrous = NITROUS[Math.min(5, n)];
  if(s >= 3) b.lift = 'low';
  return b;
}

// ---------- the math ----------
export const boostMultiplier = psi => 1 + Math.max(0, psi) / 14.7 * 0.7;

export function buildStats(def, build){
  const b = normalizeBuild(build);
  const base = def.stats, bs = baseOf(def.id);
  const eng = findPart(ENGINES, b.engine), add = findPart(ADDERS, b.adder);
  const tire = findPart(TIRES, b.tires), lift = findPart(LIFTS, b.lift), trans = findPart(TRANS, b.trans);
  const has = id => b.body.includes(id);

  const hpEngine = eng.id === 'stock' ? bs.hp : eng.hp;
  const bolt = 1 + 0.04 * b.ecu + 0.03 * b.intake + 0.03 * b.exhaust;
  const naHp = hpEngine * bolt;
  const boost = add.maxPsi ? boostMultiplier(b.psi) : 1;
  const hp = naHp * boost;
  let kg = bs.kg + (eng.kg || 0) + (has('awd') ? 90 : 0) + (has('bullbar') ? 35 : 0) + (has('winch') ? 30 : 0) + (has('rack') ? 20 : 0) + (has('skid') ? 25 : 0);
  kg *= 1 - 0.05 * b.weight;
  const tireScale = TIRE_SIZES[b.tireSize].scale;
  kg += (tireScale - 1) * 120;

  const pw = hp / kg, pw0 = bs.hp / bs.kg;
  const fdK = b.fd / FD_STOCK;
  // big tires act like a taller final drive
  const gearK = fdK / tireScale;
  const accelPeak = base.accel * Math.pow(pw / pw0, 0.7) * Math.pow(gearK, 0.8);
  // boost part of acceleration is delivered by the physics as the turbo spools
  const boostGain = Math.pow(boost, 0.7) - 1;
  const accel = accelPeak / (1 + boostGain);
  const aero = has('wing') ? 0.97 : 1;
  const topSpeed = Math.min(135, base.topSpeed * Math.pow(hp / bs.hp, 0.34) * Math.pow(1 / gearK, 0.45) * aero * (lift.h > 0.2 ? 0.95 : 1));

  const awd = has('awd');
  const traction = 30 * tire.launch * (awd ? 1.3 : 1) * (has('wheelie') ? 1.12 : 1);
  const offroad = clamp(tire.off * (awd ? 1.0 : 0.82) + Math.max(0, lift.tier) * 0.05 + b.tireSize * 0.04 + (has('skid') ? 0.05 : 0), 0.25, 1.2);

  const nitroShot = b.nitrous;
  const bottle = findPart(BOTTLES, b.bottle);
  const nitroPower = Math.max(base.nitroPower, 1 + nitroShot * 1.1 / hp);

  return {
    topSpeed,
    accel,
    handling: base.handling * lift.handling * tire.corner * (1 + b.offset * 0.25) * (has('wing') ? 1.03 : 1),
    grip: base.grip * tire.road,
    nitroTime: base.nitroTime + bottle.time,
    nitroPower,
    // extended (read by physics / audio / dyno)
    hp, naHp, kg, psi:b.psi, maxPsi:add.maxPsi || 0,
    boostGain, boostKind:add.kind || null, spoolAt:add.spoolAt || 0, spoolRate:add.rate || 0,
    traction, offroad, snorkel:has('snorkel'),
    brake: 1 + 0.25 * b.brakes,
    shiftTime: trans.shift,
    engine:{ cyl:eng.cyl || bs.cyl, red:(eng.red || bs.red) + 150 * b.ecu, idle:eng.idle || bs.idle || 850 },
    rideHeight: lift.h, tireScale, offset: b.offset,
  };
}

// target boost 0..1 for an rpm (0..1). turbos only spool past spoolAt.
export function boostTarget(kind, spoolAt, rpm, throttle){
  if(!kind || throttle <= 0.05) return 0;
  if(kind === 'roots') return throttle * (0.7 + 0.3 * rpm);
  if(kind === 'centri') return throttle * Math.min(1, rpm * rpm * 1.15);
  return throttle * clamp((rpm - spoolAt) / 0.22, 0, 1);
}

// dyno sheet: hp + torque (lb-ft) vs rpm at full throttle with boost fully spooled for that rpm
export function dynoCurve(stats, points = 24){
  const out = [], red = stats.engine.red, idle = stats.engine.idle;
  const naPeak = stats.naHp, boostK = stats.maxPsi ? boostMultiplier(stats.psi) - 1 : 0;
  for(let i = 0; i < points; i++){
    const r = i / (points - 1);
    const rpm = idle + (red - idle) * r;
    // NA power: rises, peaks ~85% of the rev range, then falls a little
    const shape = Math.sin(Math.PI / 2 * Math.min(1, (r + 0.08) / 0.93)) * (r > 0.88 ? 1 - (r - 0.88) * 0.9 : 1);
    const bst = stats.boostKind ? boostTarget(stats.boostKind, stats.spoolAt, r, 1) : 0;
    const hp = naPeak * shape * (1 + boostK * bst);
    const tq = hp * 5252 / Math.max(rpm, 1);
    out.push({ rpm:Math.round(rpm), hp:Math.round(hp), tq:Math.round(tq) });
  }
  return out;
}

// timeslip: launch a car down a straight with full throttle + auto shifts
export function timeslip(stats, { nitro = false, dt = 1 / 120 } = {}){
  const ph = new CarPhysics(stats);
  ph.box.mode = 'auto';
  const input = { throttle:1, steer:0, handbrake:false, nitro };
  let t = 0, zero60 = null, sixtyFt = null, eighth = null;
  while(t < 40){
    const tel = ph.update(input, dt, null);
    t += dt;
    const d = -ph.pos.z, mph = tel.speed * 2.2;
    if(zero60 == null && mph >= 60) zero60 = t;
    if(sixtyFt == null && d >= 18.29) sixtyFt = t;
    if(eighth == null && d >= 201) eighth = t;
    if(d >= 402){ return { et:t, trap:mph, zero60, sixtyFt, eighth }; }
  }
  return { et:null, trap:0, zero60, sixtyFt, eighth };
}

// price to install a part (re-installing something you already own is free)
export function partKey(cat, id){ return cat + ':' + id; }
