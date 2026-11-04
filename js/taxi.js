// CITY DRIVER — taxi fares: the free-roam cab job.
//
// The Peg City Cab has been drivable since the car list, but driving it
// paid nothing: no fares, no reason to pick it over any other car. This
// closes that gap with the classic cab loop, on the same pattern as the
// fuel / repair / tire services: drive the cab in free roam and fares
// hail nearby. Pull up to the yellow marker and stop to pick up, then
// follow it to the destination and stop again to get paid — base fare
// plus distance, with a tip for a quick, clean ride (late or battered
// rides lose the tip, a wrecked cab loses the passenger).
//
// Pure state machine + fare math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the hailer ped,
// the HUD, the toasts and the cash; this module only decides what happens when.
import { LINES, LANE, GRID_HALF, BLOCKS, PITCH, blockCenter, isSpecialBlock } from './world.js';

export const TAXI_BASE_FARE = 40;      // $ flat, before distance
export const TAXI_PER_METRE = 0.30;    // $ per metre of straight-line trip
export const TAXI_TIP_RATE = 0.5;      // tip = this fraction of the fare, on time
export const PICKUP_RADIUS = 7;        // m: stop this close to the hailer to board
export const DROPOFF_RADIUS = 7;       // m: stop this close to the destination to pay
export const HAIL_PATIENCE = 45;       // s: a hailer waits this long, then walks off
export const HAIL_DELAY_MIN = 8;       // s between fares (short end)
export const HAIL_DELAY_MAX = 20;      // s between fares (long end)
export const FARE_COOLDOWN = 6;        // s after a fare ends before the next hail
export const MIN_TRIP = 220;           // m: a fare worth driving for

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// A fare of `distM` metres pays the base plus distance, rounded to dollars.
export function fareFor(distM){
  return TAXI_BASE_FARE + Math.round(TAXI_PER_METRE * distM);
}

// Par time for a trip: city pace ~11 m/s (the deliver missions' base pace)
// plus a grace window for lights and traffic.
export function parTimeFor(distM){
  return Math.round(distM / 11 + 15);
}

// Tip: half the fare for an on-time, undamaged ride. Late rides get
// nothing, and damage taken during the ride eats the tip proportionally
// (a ride that wrecks the cab never reaches this — the passenger bails).
export function tipFor(fare, seconds, parSeconds, damageFrac){
  if(seconds > parSeconds) return 0;
  return Math.round(fare * TAXI_TIP_RATE * (1 - clamp(damageFrac, 0, 1)));
}

export function isTaxiCar(carDef){
  return !!carDef && carDef.extra === 'taxi';
}

// A sidewalk point on a block near the player: the hailer stands on the
// loop pedestrians walk (28 m half-size, same as npcs.js), on the
// player's own block or one next to it, never on the mansion block.
export function hailPointNear(px, pz, rng){
  const ci = clamp(Math.round(px / PITCH + (BLOCKS - 1) / 2), 0, BLOCKS - 1);
  const cj = clamp(Math.round(pz / PITCH + (BLOCKS - 1) / 2), 0, BLOCKS - 1);
  for(let k = 0; k < 8; k++){
    const i = clamp(ci + ((rng() * 3) | 0) - 1, 0, BLOCKS - 1);
    const j = clamp(cj + ((rng() * 3) | 0) - 1, 0, BLOCKS - 1);
    const cx = blockCenter(i), cz = blockCenter(j);
    if(isSpecialBlock(cx, cz) === 'mansion') continue;
    const side = (rng() * 4) | 0, t = -24 + rng() * 48, h = 28;
    if(side === 0) return { x:cx + t, z:cz - h };
    if(side === 1) return { x:cx + h, z:cz + t };
    if(side === 2) return { x:cx - t, z:cz + h };
    return { x:cx - h, z:cz - t };
  }
  return { x:clamp(px, -GRID_HALF, GRID_HALF), z:clamp(pz, -GRID_HALF, GRID_HALF) };
}

// A road point at least MIN_TRIP from `from` (same retry shape as the
// deliver missions: 8 tries, then the last point stands).
export function destinationFar(from, rng){
  const EDGE = GRID_HALF - 12;
  let p = { x:0, z:0 };
  for(let k = 0; k < 8; k++){
    const axisZ = rng() < 0.5, line = LINES[(rng() * LINES.length) | 0];
    const s = -EDGE + rng() * EDGE * 2, side = rng() < 0.5 ? 1 : -1;
    p = axisZ ? { x:line + side * LANE, z:s } : { x:s, z:line + side * LANE };
    if(dist(from, p) >= MIN_TRIP) break;
  }
  return p;
}

// States: off (not in a cab) -> idle (in a cab, waiting for a hail) ->
// hail (a fare is waiting) -> ride (passenger aboard) -> cooldown ->
// idle. Events are returned from update() for main.js to toast/pay on.
export function createTaxiJob(rng = Math.random){
  let state = 'off';
  let inCab = false;
  let timer = 0;                 // idle: until next hail; hail: patience left
  let hailPoint = null, dest = null, pickupPoint = null;
  let parSeconds = 0, rideSeconds = 0, hpStart = 0, maxHp = 100;

  function nextDelay(){ return HAIL_DELAY_MIN + rng() * (HAIL_DELAY_MAX - HAIL_DELAY_MIN); }

  return {
    get state(){ return state; },
    get inCab(){ return inCab; },
    get active(){ return state === 'hail' || state === 'ride'; },
    // Where the beacon + radar dot point: the hailer, then the destination.
    get target(){ return state === 'hail' ? hailPoint : state === 'ride' ? dest : null; },
    // Seconds left: patience while hailing, par time while riding (negative = late).
    get timeLeft(){ return state === 'hail' ? timer : state === 'ride' ? parSeconds - rideSeconds : 0; },

    // Returns 'abandoned' when switching out of the cab killed a live fare.
    setInCab(v){
      if(v === inCab) return null;
      inCab = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      if(state === 'hail' || state === 'ride'){
        state = 'off'; hailPoint = dest = pickupPoint = null; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the cab, the garage, the menu: a live fare ends, quietly.
    // Returns true when a fare was actually live. The cooldown only
    // applies when the cab is still the car (setInCab(true) re-arms idle).
    abandon(){
      if(state !== 'hail' && state !== 'ride') return false;
      state = inCab ? 'cooldown' : 'off'; timer = FARE_COOLDOWN;
      hailPoint = dest = pickupPoint = null; return true;
    },

    // ctx = { x, z, speed, hp }. Returns events for main.js.
    update(dt, ctx){
      const events = [];
      if(state === 'idle'){
        timer -= dt;
        if(timer <= 0){
          hailPoint = hailPointNear(ctx.x, ctx.z, rng);
          state = 'hail'; timer = HAIL_PATIENCE;
          events.push({ type:'hail', point:{ ...hailPoint } });
        }
      }else if(state === 'hail'){
        timer -= dt;
        if(dist(ctx, hailPoint) < PICKUP_RADIUS && Math.abs(ctx.speed) < 1){
          pickupPoint = { ...hailPoint };
          dest = destinationFar(pickupPoint, rng);
          const trip = dist(pickupPoint, dest);
          parSeconds = parTimeFor(trip); rideSeconds = 0;
          hpStart = ctx.hp; maxHp = ctx.maxHp || 100;
          state = 'ride';
          events.push({ type:'pickup', dest:{ ...dest }, parSeconds, fareEstimate:fareFor(trip) });
        }else if(timer <= 0){
          state = 'cooldown'; timer = FARE_COOLDOWN; hailPoint = null;
          events.push({ type:'hailExpired' });
        }
      }else if(state === 'ride'){
        rideSeconds += dt;
        if(ctx.hp <= 0){
          state = 'cooldown'; timer = FARE_COOLDOWN; dest = pickupPoint = null;
          events.push({ type:'rideFailed', reason:'wrecked' });
        }else if(dist(ctx, dest) < DROPOFF_RADIUS && Math.abs(ctx.speed) < 1){
          const trip = dist(pickupPoint, dest);
          const fare = fareFor(trip);
          const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
          const tip = tipFor(fare, rideSeconds, parSeconds, damageFrac);
          state = 'cooldown'; timer = FARE_COOLDOWN; dest = pickupPoint = null;
          events.push({ type:'dropoff', fare, tip, total:fare + tip });
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inCab ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
