// CITY DRIVER — taxi fares: the free-roam cab job.
//
// The Peg City Cab has been drivable since the car list, but driving it
// paid nothing: no fares, no reason to pick it over any other car. This
// closes that gap with the classic cab loop, on the same pattern as the
// fuel / repair / tire services: drive the cab in free roam and fares
// hail nearby. Pull up to the yellow marker and stop to pick up, then
// follow it to the destination and stop again to get paid — base fare
// plus distance, with a tip for a quick, clean ride (late or battered
// rides lose the tip, a wrecked cab loses the passenger). The tip follows
// the driver's career rating: 4.5+ stars earns +25%, 4.0+ earns +10%,
// under 3.0 the tip is halved — once at least 3 rides are rated. Fares surge
// with the time of day: sunset rush pays +25%, night pays +50%, locked
// in when the passenger boards so the sky changing mid-ride never
// reprices a fare already running. One hail in seven is a VIP rush fare
// (gold marker, double pay, tighter clock), and any passenger bails if
// the ride drags far past par time — a VIP sooner than a regular. One
// hail in eight is an airport run: either a city hail whose destination
// is the terminal (a long trip with a flat airport fee on top of the
// meter), or — when the cab is already at the terminal — a hail waiting
// at arrivals heading back into town. Airport runs are main-city only:
// custom maps have no airport.
//
// Pure state machine + fare math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the hailer ped,
// the HUD, the toasts and the cash; this module only decides what happens when.
import { LINES, LANE, GRID_HALF, BLOCKS, PITCH, blockCenter, isSpecialBlock } from './world.js';
import { getTile, tileCenter } from './custommap.js';

export const TAXI_BASE_FARE = 40;      // $ flat, before distance
export const TAXI_PER_METRE = 0.30;    // $ per metre of straight-line trip
export const TAXI_TIP_RATE = 0.5;      // tip = this fraction of the fare, on time
// Surge pricing follows the time-of-day cycle (sky.js presets): day
// pays the meter, sunset rush pays +25%, night pays +50% — the whole
// meter (fare, and the tip + streak bonus computed off it) scales.
export const SURGE_RATES = { day: 1, sunset: 1.25, night: 1.5 };
export function surgeMultiplierFor(preset){
  return (preset && SURGE_RATES[preset]) || 1;
}
// Human label for a surge rate, for toasts and the HUD; '' at no surge.
export function surgeLabelFor(rate){
  if(rate >= 1.5) return 'Night surge';
  if(rate > 1) return 'Sunset surge';
  return '';
}
export const STREAK_BONUS_RATE = 0.10; // +10% of the payout per consecutive fare past the first
export const STREAK_BONUS_CAP = 0.50;  // streak bonus tops out at +50%
export const PICKUP_RADIUS = 7;        // m: stop this close to the hailer to board
export const DROPOFF_RADIUS = 7;       // m: stop this close to the destination to pay
export const HAIL_PATIENCE = 45;       // s: a hailer waits this long, then walks off
export const VIP_CHANCE = 0.15;        // share of hails that are VIP rush fares
export const VIP_FARE_MULT = 2;        // a VIP fare pays double the meter
export const VIP_PAR_SCALE = 0.75;     // a VIP is in a hurry: par time is 25% tighter
export const VIP_HAIL_PATIENCE = 30;   // s: a VIP waits less long than a regular hailer
export const BAIL_MULT = 2;            // a passenger bails past this multiple of par time
export const VIP_BAIL_MULT = 1.5;      // a VIP bails sooner: less patient on top of a tighter par
// Airport runs (world.js AIRPORT): the terminal sits north-west, outside
// the downtown grid, so these are the long trips of the shift.
export const AIRPORT_TERMINAL = { x:-1070, z:-700 }; // arrivals curb: on the paved
// runway apron, clear of the terminal building (door x -1030) and the parked
// jet (x -1072..-1038, z -669..-631), so the cab can actually stop there.
export const AIRPORT_CHANCE = 0.12;    // share of hails that are airport runs
export const AIRPORT_FLAT = 120;       // $ flat airport fee, on top of the meter
export const AIRPORT_NEAR = 300;       // m: cab this close to the terminal hails FROM the airport
export const HAIL_DELAY_MIN = 8;       // s between fares (short end)
export const HAIL_DELAY_MAX = 20;      // s between fares (long end)
export const FARE_COOLDOWN = 6;        // s after a fare ends before the next hail
export const MIN_TRIP = 220;           // m: a fare worth driving for
export const CUSTOM_MIN_TRIP = 60;     // m: shortest trip worth hailing for on a custom map
export const HAIL_SEARCH = 180;        // m: on a custom map, hailers spawn on roads this near the cab
export const HAIL_RETRY = 5;           // s: wait before retrying a hail when no road is near

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// A fare of `distM` metres pays the base plus distance, times the surge
// in effect when the passenger boards (1 in the day, 1.5 at night) and
// times the VIP multiplier when the passenger is a rush fare (2x). An
// airport run adds the flat airport fee on top — the fee is never
// multiplied by surge or VIP, so a night VIP airport run pays 3x the
// meter plus the flat $120.
// The tip and streak bonus are computed off the surged fare, so the
// whole meter scales — a night VIP fare pays 3x end to end.
export function fareFor(distM, surge = 1, vip = false, airport = false){
  const s = (typeof surge === 'number' && isFinite(surge) && surge > 0) ? surge : 1;
  const v = vip ? VIP_FARE_MULT : 1;
  return Math.round((TAXI_BASE_FARE + Math.round(TAXI_PER_METRE * distM)) * s * v) + (airport ? AIRPORT_FLAT : 0);
}

// Par time for a trip: city pace ~11 m/s (the deliver missions' base pace)
// plus a grace window for lights and traffic. A VIP is in a hurry, so
// their par time is tighter — and they bail sooner on top of that.
export function parTimeFor(distM, vip = false){
  return Math.round((distM / 11 + 15) * (vip ? VIP_PAR_SCALE : 1));
}

// Tip: half the fare for an on-time, undamaged ride. Late rides get
// nothing, and damage taken during the ride eats the tip proportionally
// (a ride that wrecks the cab never reaches this — the passenger bails).
// The tip also follows the driver's reputation: after at least
// RATING_TIP_MIN_RIDES rated rides, a 4.5+ average earns generous tips
// (+25%), 4.0+ earns +10%, and under 3.0 the passengers stiff the driver
// (tips halved). The reputation is the one earned BEFORE this ride — a
// ride cannot tip itself — so callers pass the pre-ride average/count.
export const RATING_TIP_MIN_RIDES = 3; // a reputation needs this many rated rides
export const TIP_MULT_HIGH = 1.25;     // 4.5+ stars: generous tips
export const TIP_MULT_GOOD = 1.1;      // 4.0+ stars: good tips
export const TIP_MULT_LOW = 0.5;       // under 3.0 stars: passengers stiff the driver
export function tipMultiplierFor(ratingAvg, ratingCount){
  if(typeof ratingCount !== 'number' || !isFinite(ratingCount) || ratingCount < RATING_TIP_MIN_RIDES) return 1;
  if(typeof ratingAvg !== 'number' || !isFinite(ratingAvg) || ratingAvg <= 0) return 1;
  if(ratingAvg >= 4.5) return TIP_MULT_HIGH;
  if(ratingAvg >= 4.0) return TIP_MULT_GOOD;
  if(ratingAvg < 3.0) return TIP_MULT_LOW;
  return 1;
}
// Human label for a tip multiplier, for toasts and the HUD; '' at the plain rate.
export function tipLabelFor(mult){
  if(mult >= TIP_MULT_HIGH) return 'Generous tips +25%';
  if(mult > 1) return 'Good tips +10%';
  if(mult < 1) return 'Low rating — tips halved';
  return '';
}
export function tipFor(fare, seconds, parSeconds, damageFrac, ratingAvg = 0, ratingCount = 0){
  if(seconds > parSeconds) return 0;
  return Math.round(fare * TAXI_TIP_RATE * (1 - clamp(damageFrac, 0, 1)) * tipMultiplierFor(ratingAvg, ratingCount));
}

// Streak bonus: consecutive completed fares pay more — +10% of the
// fare + tip for each fare past the first in the streak, capped at +50%.
// The first fare of a streak earns no bonus. `streak` counts the fare
// just completed, so streak 1 pays 0 and streak 6+ pays the cap.
export function streakBonusFor(streak, fare, tip){
  const rate = Math.min(STREAK_BONUS_RATE * Math.max(0, streak - 1), STREAK_BONUS_CAP);
  return Math.round((fare + tip) * rate);
}

// Passenger rating, 1-5 stars: a quick clean ride is 5. Late costs 2
// stars, heavy damage costs 2, light damage costs 1 — a late, battered
// ride bottoms out at 1, never 0.
export function ratingFor(seconds, parSeconds, damageFrac){
  let stars = 5;
  if(seconds > parSeconds) stars -= 2;
  if(damageFrac >= 0.5) stars -= 2;
  else if(damageFrac >= 0.2) stars -= 1;
  return clamp(stars, 1, 5);
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

// ---------- custom maps ----------

// Road tiles a cab can actually use on a custom map: '#' roads and the 'S'
// spawn (mapbuilder treats both as road). Map-local coords, tile centres.
export function roadTilesOf(map){
  const roads = [];
  if(!map || typeof map.size !== 'number' || typeof map.tiles !== 'string') return roads;
  for(let j = 0; j < map.size; j++) for(let i = 0; i < map.size; i++){
    const ch = getTile(map, i, j);
    if(ch === '#' || ch === 'S'){ const c = tileCenter(map, i, j); roads.push({ i, j, x:c.x, z:c.z }); }
  }
  return roads;
}

// Point pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets fares when its streets can carry a real trip — a lone
// spawn tile, or roads too short to be worth driving, means no hails.
export function customMapPickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });
  const isRoad = (i, j) => { const c = getTile(map, i, j); return c === '#' || c === 'S'; };

  // A destination on a road at least MIN_TRIP away, or the farthest road
  // when the map is too small for a full trip; null when no trip of at
  // least CUSTOM_MIN_TRIP exists at all. Samples first, then falls back to
  // a full scan so a real trip is never missed to a bad draw.
  function destFar(from, rng){
    if(!roads.length) return null;
    const f = toLocal(from);
    let best = null, bestD = -1;
    for(let k = 0; k < 8; k++){
      const t = roads[(rng() * roads.length) | 0];
      const d = Math.hypot(t.x - f.x, t.z - f.z);
      if(d > bestD){ best = t; bestD = d; }
      if(d >= MIN_TRIP) break;
    }
    if(bestD < MIN_TRIP){
      for(const t of roads){
        const d = Math.hypot(t.x - f.x, t.z - f.z);
        if(d > bestD){ best = t; bestD = d; }
      }
    }
    return bestD >= CUSTOM_MIN_TRIP ? toWorld(best) : null;
  }

  // A hailer on a road near the cab, standing at the road's edge (4 m
  // toward the nearest non-road neighbour, so they are not mid-lane).
  // Only hails when a real trip exists from that spot; null when the cab
  // is off the streets or the map's roads cannot carry a trip.
  function hailNear(px, pz, rng){
    if(!roads.length) return null;
    const p = toLocal({ x:px, z:pz });
    const near = roads.filter(t => Math.hypot(t.x - p.x, t.z - p.z) <= HAIL_SEARCH);
    if(!near.length) return null;
    const start = (rng() * near.length) | 0;
    for(let k = 0; k < Math.min(4, near.length); k++){
      const t = near[(start + k) % near.length];
      const pt = { x:t.x, z:t.z };
      if(!destFar(toWorld(pt), rng)) continue;
      for(const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]){
        if(!isRoad(t.i + di, t.j + dj)){ pt.x += di * 4; pt.z += dj * 4; break; }
      }
      return toWorld(pt);
    }
    return null;
  }
  return { hailNear, destFar };
}

// States: off (not in a cab) -> idle (in a cab, waiting for a hail) ->
// hail (a fare is waiting) -> ride (passenger aboard) -> cooldown ->
// idle. Events are returned from update() for main.js to toast/pay on.
// `opts.vipChance` overrides the share of VIP rush fares and
// `opts.airportChance` the share of airport runs (tests force 0 or 1);
// production uses VIP_CHANCE / AIRPORT_CHANCE.
const MAIN_CITY_PICKERS = { hailNear: hailPointNear, destFar: destinationFar };
export function createTaxiJob(rng = Math.random, pickers = MAIN_CITY_PICKERS, opts = {}){
  const vipChance = (opts && typeof opts.vipChance === 'number' && isFinite(opts.vipChance))
    ? Math.max(0, Math.min(1, opts.vipChance)) : VIP_CHANCE;
  const airportChance = (opts && typeof opts.airportChance === 'number' && isFinite(opts.airportChance))
    ? Math.max(0, Math.min(1, opts.airportChance)) : AIRPORT_CHANCE;
  let state = 'off';
  let inCab = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let onCustomMap = pickers !== MAIN_CITY_PICKERS; // custom streets have no airport
  let timer = 0;                 // idle: until next hail; hail: patience left
  let hailPoint = null, dest = null, pickupPoint = null;
  let parSeconds = 0, rideSeconds = 0, hpStart = 0, maxHp = 100;
  let isVip = false;             // the current hail / ride is a VIP rush fare
  let isAirport = false;         // the current hail / ride is an airport run
  let airportDir = null;         // 'to': city -> terminal; 'from': terminal -> city
  // Streak + rating: the streak is this shift only (a wreck or a walk-away
  // ends it); the career totals persist in the save via loadCareer/career.
  let streak = 0, bestStreak = 0, rides = 0, earned = 0;
  let ratingSum = 0, ratingCount = 0;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time-of-day preset) and the rate locked in when the current
  // passenger boarded — the meter is fixed at pickup, so the sky changing
  // mid-ride never reprices a fare already running.
  let curSurge = 1, rideSurge = 1;

  function nextDelay(){ return HAIL_DELAY_MIN + rng() * (HAIL_DELAY_MAX - HAIL_DELAY_MIN); }

  return {
    get state(){ return state; },
    get inCab(){ return inCab; },
    get active(){ return state === 'hail' || state === 'ride'; },
    // Where the beacon + radar dot point: the hailer, then the destination.
    get target(){ return state === 'hail' ? hailPoint : state === 'ride' ? dest : null; },
    // Seconds left: patience while hailing, par time while riding (negative = late).
    get timeLeft(){ return state === 'hail' ? timer : state === 'ride' ? parSeconds - rideSeconds : 0; },
    // Consecutive completed fares this shift (0 until the first dropoff).
    get streak(){ return streak; },
    get bestStreak(){ return bestStreak; },
    // True while the live hail / ride is a VIP rush fare (false otherwise,
    // so the HUD and beacon never show a stale VIP after the fare ends).
    get vip(){ return (state === 'hail' || state === 'ride') ? isVip : false; },
    // True while the live hail / ride is an airport run, and which way it
    // goes ('to' the terminal, 'from' it) — false / null otherwise, so
    // the HUD and beacon never show a stale airport run after it ends.
    get airport(){ return (state === 'hail' || state === 'ride') ? isAirport : false; },
    get airportDir(){ return (state === 'hail' || state === 'ride') ? airportDir : null; },
    get rides(){ return rides; },
    get earned(){ return earned; },
    get ratingCount(){ return ratingCount; },
    // Lifetime passenger rating, 1-5; 0 until the first rated ride.
    get ratingAvg(){ return ratingCount ? ratingSum / ratingCount : 0; },
    // Tip multiplier the next dropoff pays at, from the reputation
    // earned so far (1 until 3 rides are rated). The HUD reads this.
    get tipMult(){ return tipMultiplierFor(ratingCount ? ratingSum / ratingCount : 0, ratingCount); },
    // Surge in effect: the locked-in rate during a ride, the live rate
    // otherwise (1 in the day, 1.5 at night). The HUD reads this.
    get surge(){ return state === 'ride' ? rideSurge : curSurge; },
    // Career snapshot for the save file (plain numbers, no state).
    get career(){ return { rides, earned, bestStreak, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    // The streak itself is never restored: a new session starts a new shift.
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      rides = n(c.rides); earned = n(c.earned); bestStreak = n(c.bestStreak);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live fare
    // before the swap, so this only ever affects idle / cooldown.
    // Custom streets have no airport, so airport runs stop while on one.
    setPickers(p){ onCustomMap = !!p; activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the cab killed a live fare.
    // Leaving the cab ends the shift, so the streak resets either way.
    setInCab(v){
      if(v === inCab) return null;
      inCab = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      streak = 0; isVip = false; isAirport = false; airportDir = null;
      if(state === 'hail' || state === 'ride'){
        state = 'off'; hailPoint = dest = pickupPoint = null; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the cab, the garage, the menu: a live fare ends, quietly.
    // Returns true when a fare was actually live. The cooldown only
    // applies when the cab is still the car (setInCab(true) re-arms idle).
    abandon(){
      streak = 0; isVip = false; isAirport = false; airportDir = null;   // leaving the scene ends the shift (an expired hail does not)
      if(state !== 'hail' && state !== 'ride') return false;
      state = inCab ? 'cooldown' : 'off'; timer = FARE_COOLDOWN;
      hailPoint = dest = pickupPoint = null; return true;
    },

    // ctx = { x, z, speed, hp, surge? }. Returns events for main.js.
    update(dt, ctx){
      const events = [];
      const s = ctx && ctx.surge;
      curSurge = (typeof s === 'number' && isFinite(s) && s > 0) ? s : 1;
      if(state === 'idle'){
        timer -= dt;
        if(timer <= 0){
          // An airport run is rolled per hail, main city only. When the
          // cab is already at the terminal the hail waits AT arrivals,
          // heading back into town — so a drop at the terminal is often
          // followed by a pickup there. Otherwise the hail is a normal
          // city hail and the airport is the destination. No hail point
          // (off the streets, or roads too short for a trip) is not an
          // error: wait a beat and try again.
          const wantAirport = !onCustomMap && rng() < airportChance;
          if(wantAirport && dist(ctx, AIRPORT_TERMINAL) <= AIRPORT_NEAR){
            isAirport = true; airportDir = 'from';
            hailPoint = { ...AIRPORT_TERMINAL };
          }else{
            if(wantAirport){ isAirport = true; airportDir = 'to'; }
            else{ isAirport = false; airportDir = null; }
            hailPoint = activePickers.hailNear(ctx.x, ctx.z, rng);
          }
          if(!hailPoint){ timer = HAIL_RETRY; isAirport = false; airportDir = null; }
          else{
            // A VIP rush fare is rolled per hail: double pay, tighter par,
            // and less patience — the hail carries the flag so the beacon
            // and toast can show gold before the cab even arrives.
            isVip = rng() < vipChance;
            state = 'hail'; timer = isVip ? VIP_HAIL_PATIENCE : HAIL_PATIENCE;
            events.push({ type:'hail', point:{ ...hailPoint }, surge: curSurge, vip: isVip,
              airport: isAirport, airportDir });
          }
        }
      }else if(state === 'hail'){
        timer -= dt;
        if(dist(ctx, hailPoint) < PICKUP_RADIUS && Math.abs(ctx.speed) < 1){
          pickupPoint = { ...hailPoint };
          dest = activePickers.destFar(pickupPoint, rng);
          if(!dest){
            // Nowhere worth driving to from here: the fare falls through.
            state = 'cooldown'; timer = FARE_COOLDOWN; hailPoint = pickupPoint = null; isVip = false; isAirport = false; airportDir = null;
            events.push({ type:'hailExpired' });
          }else{
            // An airport run 'to' the terminal ends at arrivals, not at
            // a random street: the trip is long, so par time (from the
            // distance) is generous. A run 'from' the terminal drives a
            // normal city destination from the pickup point.
            if(isAirport && airportDir === 'to') dest = { ...AIRPORT_TERMINAL };
            const trip = dist(pickupPoint, dest);
            rideSurge = curSurge;   // the meter is fixed at pickup
            parSeconds = parTimeFor(trip, isVip); rideSeconds = 0;
            hpStart = ctx.hp; maxHp = ctx.maxHp || 100;
            state = 'ride';
            events.push({ type:'pickup', dest:{ ...dest }, parSeconds,
              fareEstimate:fareFor(trip, rideSurge, isVip, isAirport), surge: rideSurge, vip: isVip,
              airport: isAirport, airportDir });
          }
        }else if(timer <= 0){
          state = 'cooldown'; timer = FARE_COOLDOWN; hailPoint = null; isVip = false; isAirport = false; airportDir = null;
          events.push({ type:'hailExpired' });
        }
      }else if(state === 'ride'){
        rideSeconds += dt;
        if(ctx.hp <= 0){
          streak = 0;   // the passenger bails and the streak dies with the cab
          state = 'cooldown'; timer = FARE_COOLDOWN; dest = pickupPoint = null;
          events.push({ type:'rideFailed', reason:'wrecked', airport: isAirport, airportDir });
          isVip = false; isAirport = false; airportDir = null;
        }else if(dist(ctx, dest) < DROPOFF_RADIUS && Math.abs(ctx.speed) < 1){
          const trip = dist(pickupPoint, dest);
          const fare = fareFor(trip, rideSurge, isVip, isAirport);
          const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
          // The tip follows the reputation earned BEFORE this ride: the
          // pre-ride average/count, so this ride's own stars cannot tip
          // themselves. The streak bonus below is computed off fare + tip,
          // so a boosted tip boosts the bonus too.
          const ratingAvgBefore = ratingCount ? ratingSum / ratingCount : 0;
          const tipMult = tipMultiplierFor(ratingAvgBefore, ratingCount);
          const tip = tipFor(fare, rideSeconds, parSeconds, damageFrac, ratingAvgBefore, ratingCount);
          streak++;
          bestStreak = Math.max(bestStreak, streak);
          const streakBonus = streakBonusFor(streak, fare, tip);
          const rating = ratingFor(rideSeconds, parSeconds, damageFrac);
          ratingSum += rating; ratingCount++; rides++;
          const total = fare + tip + streakBonus;
          earned += total;
          state = 'cooldown'; timer = FARE_COOLDOWN; dest = pickupPoint = null;
          events.push({ type:'dropoff', fare, tip, tipMult, streakBonus, streak, rating,
            surge: rideSurge, vip: isVip, airport: isAirport, airportDir,
            ratingAvg: ratingCount ? ratingSum / ratingCount : 0, total });
          isVip = false; isAirport = false; airportDir = null;
        }else if(rideSeconds > parSeconds * (isVip ? VIP_BAIL_MULT : BAIL_MULT)){
          // Impatience: a passenger who has waited far past par time gets
          // out and walks — no pay, and the streak dies like a wreck.
          // The dropoff check above wins when the cab arrives in the same
          // tick, so a fare completed at the last moment still pays.
          streak = 0;
          state = 'cooldown'; timer = FARE_COOLDOWN; dest = pickupPoint = null;
          events.push({ type:'rideFailed', reason:'impatient', vip: isVip, airport: isAirport, airportDir });
          isVip = false; isAirport = false; airportDir = null;
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inCab ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
