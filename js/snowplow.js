// CITY DRIVER — snow plowing: the City of Winnipeg winter route job.
//
// Sixteen cars to buy, a bus to drive, an ambulance, a fire truck, a
// cruiser, a garbage truck and a tow truck — but when the snow comes
// down the streets still bury themselves. This closes that gap with
// the classic winter-service loop, on the same pattern as the garbage
// routes: drive the snow plow in free roam and a route starts nearby —
// a chain of snowed-in stops along the streets, each with drifts
// waiting on the road. Plow through a drift at working speed and the
// blade clears it, $15 a drift into the load. The salt hopper holds
// 20 units — one per drift — so a long route runs dry mid-way and the
// beacon swings to the depot, where a stop refills the salt and banks
// what you cleared. A finished route pays the load plus a completion
// bonus and an on-time bonus per leg run on schedule. Rough driving
// costs you: a hard shunt spills salt off the load, and wrecking the
// plow loses everything still unbanked — only what you already dumped
// at the depot is safe. Pay surges with the time of day and the
// weather, locked in when the route starts, the same as a cab fare.
// Career totals (routes, drifts, earnings, on-time record, rating)
// persist in the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the drift
// meshes, the HUD, the toasts and the cash; this module only decides
// what happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { roadTilesOf } from './taxi.js';

export const PLOW_PAY_PER_DRIFT = 15;  // $ per drift, before surge
export const PLOW_SALT_CAPACITY = 20;  // drifts one salt load clears
export const PLOW_STOPS_MIN = 6;       // stops per route (short end)
export const PLOW_STOPS_MAX = 9;       // stops per route (long end)
export const CLEAR_RADIUS = 7;         // m: drive this close to clear a drift
export const PLOW_MIN_SPEED = 2;       // m/s: slower than this the blade is not working
export const PLOW_MAX_SPEED = 15;      // m/s: faster than this the blade skips over the drift
export const STOP_RADIUS = 8;          // m: stop this close to refill at the depot
export const REFILL_TIME = 2.5;        // s stopped at the depot to refill the salt
export const ROUTE_BONUS = 150;        // $ for finishing the whole route
export const ON_TIME_BONUS = 25;       // $ per leg run on schedule
export const LEG_MIN_DIST = 150;       // m between consecutive stops (short end)
export const LEG_MAX_DIST = 420;       // m between consecutive stops (long end)
export const DEPOT_MIN_DIST = 150;     // m: depot this far from the first stop
export const ROUTE_DELAY_MIN = 10;     // s between routes (short end)
export const ROUTE_DELAY_MAX = 25;     // s between routes (long end)
export const ROUTE_COOLDOWN = 6;       // s after a route ends before the next one
export const ROUTE_RETRY = 5;          // s: wait before retrying when no route fits
export const DRIFTS_MIN = 1;           // drifts waiting at a stop (short end)
export const DRIFTS_MAX = 4;           // drifts waiting at a stop (long end)
export const DRIFT_SPREAD = 9;         // m: drifts scatter this far from the stop centre
export const DAMAGE_SPILL_HP = 15;     // one hp drop this big spills a unit of salt

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// One drift pays the flat rate, times the surge locked in when the route
// started (1 in the day, 1.5 at night, more in a storm) — a night storm
// route pays more per drift, end to end.
export function payPerDrift(surge = 1){
  const s = (typeof surge === 'number' && isFinite(surge) && surge > 0) ? surge : 1;
  return Math.round(PLOW_PAY_PER_DRIFT * s);
}

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the plowing stop.
export function legParFor(distM){
  return Math.round(distM / 11 + 12);
}

// Route rating, 1-5 stars: a smooth on-schedule route is 5. Running
// more than half the legs late costs 2 stars, any late leg costs 1 —
// and a battered plow costs 2 for heavy damage, 1 for light damage, on
// top. A late, battered route bottoms out at 1, never 0.
export function ratingFor(onTimeLegs, totalLegs, damageFrac){
  let stars = 5;
  if(totalLegs > 0){
    if(onTimeLegs * 2 < totalLegs) stars -= 2;
    else if(onTimeLegs < totalLegs) stars -= 1;
  }
  if(damageFrac >= 0.5) stars -= 2;
  else if(damageFrac >= 0.2) stars -= 1;
  return clamp(stars, 1, 5);
}

export function isPlowCar(carDef){
  return !!carDef && carDef.extra === 'plow';
}

// The blade only works in its window: rolling too slow it does not bite,
// too fast it skips over the drift. Stopped or speeding past a drift
// leaves it where it sits.
export function inPlowWindow(speed){
  const s = Math.abs(speed);
  return s >= PLOW_MIN_SPEED && s <= PLOW_MAX_SPEED;
}

// A road point near the plow: the first stop of a route. Same retry shape
// as the taxi hailers — 8 tries on the grid lines, then the last point.
export function stopPointNear(px, pz, rng){
  const EDGE = GRID_HALF - 12;
  let p = { x:clamp(px, -EDGE, EDGE), z:clamp(pz, -EDGE, EDGE) };
  for(let k = 0; k < 8; k++){
    const axisZ = rng() < 0.5, line = LINES[(rng() * LINES.length) | 0];
    const s = -EDGE + rng() * EDGE * 2, side = rng() < 0.5 ? 1 : -1;
    p = axisZ ? { x:line + side * LANE, z:s } : { x:s, z:line + side * LANE };
    const d = dist({ x:px, z:pz }, p);
    if(d >= 60 && d <= 400) break;
  }
  return p;
}

// The next stop of a route: a road point a real leg away from `from` —
// far enough to drive, close enough to stay on schedule. 8 tries, then
// the last point stands (even a short leg beats no route at all).
export function nextStopPoint(from, rng){
  const EDGE = GRID_HALF - 12;
  let p = { x:0, z:0 };
  for(let k = 0; k < 8; k++){
    const axisZ = rng() < 0.5, line = LINES[(rng() * LINES.length) | 0];
    const s = -EDGE + rng() * EDGE * 2, side = rng() < 0.5 ? 1 : -1;
    p = axisZ ? { x:line + side * LANE, z:s } : { x:s, z:line + side * LANE };
    const d = dist(from, p);
    if(d >= LEG_MIN_DIST && d <= LEG_MAX_DIST) break;
  }
  return p;
}

// The depot: a road point a real drive from the first stop, so refilling
// the salt costs a detour instead of a U-turn. 8 tries, then the last
// point stands.
export function depotPointNear(from, rng){
  const EDGE = GRID_HALF - 12;
  let p = { x:0, z:0 };
  for(let k = 0; k < 8; k++){
    const axisZ = rng() < 0.5, line = LINES[(rng() * LINES.length) | 0];
    const s = -EDGE + rng() * EDGE * 2, side = rng() < 0.5 ? 1 : -1;
    p = axisZ ? { x:line + side * LANE, z:s } : { x:s, z:line + side * LANE };
    if(dist(from, p) >= DEPOT_MIN_DIST) break;
  }
  return p;
}

// Drifts waiting at a stop: at least one — a stop with no drifts is a
// wasted drive — and never more than the blade can clear in one visit.
export function driftsFor(rng){
  return DRIFTS_MIN + ((rng() * (DRIFTS_MAX - DRIFTS_MIN + 1)) | 0);
}

// The drifts at one stop: scattered around the stop centre so the plow
// sweeps the street instead of parking on one point. Each drift is a
// point on the road with a cleared flag the state machine flips.
export function driftPointsFor(stop, count, rng){
  const list = [];
  for(let i = 0; i < count; i++){
    const a = rng() * Math.PI * 2, r = rng() * DRIFT_SPREAD;
    list.push({ x:stop.x + Math.cos(a) * r, z:stop.z + Math.sin(a) * r, cleared:false });
  }
  return list;
}

// ---------- custom maps ----------

// Stop pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets routes when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no routes.
export function snowplowRoutePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The first stop: a road tile near the plow, or the nearest road at all
  // when the plow is off the streets; null when the map has no roads.
  function stopNear(px, pz, rng){
    if(!roads.length) return null;
    const p = toLocal({ x:px, z:pz });
    let best = null, bestD = Infinity;
    for(let k = 0; k < 8; k++){
      const t = roads[(rng() * roads.length) | 0];
      const d = Math.hypot(t.x - p.x, t.z - p.z);
      if(d < bestD){ best = t; bestD = d; }
      if(d >= 60 && d <= 400) break;
    }
    return best ? toWorld(best) : null;
  }

  // The next stop: a road tile a real leg away from `from`, or the
  // farthest road when the map is too small for a full leg; null when no
  // leg of at least 60 m exists at all.
  function nextStop(from, rng){
    if(!roads.length) return null;
    const f = toLocal(from);
    let best = null, bestD = -1;
    for(let k = 0; k < 8; k++){
      const t = roads[(rng() * roads.length) | 0];
      const d = Math.hypot(t.x - f.x, t.z - f.z);
      if(d > bestD){ best = t; bestD = d; }
      if(d >= LEG_MIN_DIST && d <= LEG_MAX_DIST) break;
    }
    if(bestD < LEG_MIN_DIST){
      for(const t of roads){
        const d = Math.hypot(t.x - f.x, t.z - f.z);
        if(d > bestD){ best = t; bestD = d; }
      }
    }
    return bestD >= 60 ? toWorld(best) : null;
  }

  // The depot: a road tile a real drive from the first stop, or the
  // farthest road when the map is too small; null when no road is at
  // least 60 m away at all.
  function depotNear(from, rng){
    if(!roads.length) return null;
    const f = toLocal(from);
    let best = null, bestD = -1;
    for(let k = 0; k < 8; k++){
      const t = roads[(rng() * roads.length) | 0];
      const d = Math.hypot(t.x - f.x, t.z - f.z);
      if(d > bestD){ best = t; bestD = d; }
      if(d >= DEPOT_MIN_DIST) break;
    }
    return bestD >= 60 ? toWorld(best) : null;
  }
  return { stopNear, nextStop, depotNear };
}

// States: off (not in a snow plow) -> idle (in one, waiting for a route)
// -> route (stops to clear, phase 'collect' or 'depot') -> cooldown
// -> idle. Events are returned from update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = { stopNear: stopPointNear, nextStop: nextStopPoint, depotNear: depotPointNear };
export function createSnowplowJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inPlow = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next route; cooldown: until idle
  let stops = null;              // the route: [{x, z, drifts:[{x, z, cleared}]}]
  let depot = null;              // where the salt gets refilled
  let phase = 'collect';         // 'collect' plowing, 'depot' refill run
  let stopIdx = 0;               // next stop to clear
  let legPar = 0, legSeconds = 0;
  let refillT = 0;               // s stopped at the depot, toward a full hopper
  let salt = PLOW_SALT_CAPACITY; // salt units aboard right now (one per drift)
  let loadValue = 0;             // $ value of the drifts cleared so far (lost on a wreck)
  let banked = 0;                // $ value of drifts already dumped at the depot (safe)
  let routeDrifts = 0;           // drifts cleared this route
  let onTimeLegs = 0;            // legs run on schedule this route
  let hpStart = 0, maxHp = 100, lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current route started — the pay is fixed at the first drift, so
  // the sky changing mid-route never reprices a route already running.
  let curSurge = 1, rideSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let routes = 0, drifts = 0, earned = 0;
  let onTimeStops = 0, totalStops = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return ROUTE_DELAY_MIN + rng() * (ROUTE_DELAY_MAX - ROUTE_DELAY_MIN); }
  function stopCount(){ return PLOW_STOPS_MIN + ((rng() * (PLOW_STOPS_MAX - PLOW_STOPS_MIN + 1)) | 0); }

  // Build a route starting near the plow: first stop on a road nearby,
  // then a chain of legs a real drive apart, plus a depot a real drive
  // from the first stop. Null when the world cannot carry a route
  // (custom map with no roads, or legs too short).
  function buildRoute(ctx){
    const first = activePickers.stopNear(ctx.x, ctx.z, rng);
    if(!first) return null;
    const list = [{ x:first.x, z:first.z, drifts:driftPointsFor(first, driftsFor(rng), rng) }];
    const count = stopCount();
    while(list.length < count){
      const prev = list[list.length - 1];
      const p = activePickers.nextStop(prev, rng);
      if(!p) return null;
      // A stop on top of the last one is a wasted drive: skip it and
      // try once more from the same point instead of ending the route.
      if(dist(prev, p) < 60) continue;
      list.push({ x:p.x, z:p.z, drifts:driftPointsFor(p, driftsFor(rng), rng) });
    }
    const dep = activePickers.depotNear(first, rng);
    if(!dep) return null;
    return { stops:list, depot:dep };
  }

  // End a live route without pay. Returns true when a route was live.
  // The unbanked load goes with it — an unfinished route never pays.
  function endRoute(){
    const wasLive = state === 'route';
    state = inPlow ? 'cooldown' : 'off'; timer = ROUTE_COOLDOWN;
    salt = PLOW_SALT_CAPACITY; loadValue = 0; banked = 0; stops = null; depot = null;
    stopIdx = 0; phase = 'collect'; refillT = 0;
    return wasLive;
  }

  // Clear the drifts the plow just drove through at working speed.
  // Returns the events for this frame (driftCleared, stopCleared or
  // routeComplete), or null when nothing cleared.
  function clearDrifts(ctx, events){
    const stop = stops[stopIdx];
    let cleared = 0;
    for(const d of stop.drifts){
      if(d.cleared || salt <= 0) continue;
      if(dist(ctx, d) < CLEAR_RADIUS && inPlowWindow(ctx.speed)){
        d.cleared = true; salt--; routeDrifts++;
        loadValue += payPerDrift(rideSurge);
        cleared++;
      }
    }
    if(cleared === 0) return null;
    events.push({ type:'driftCleared', cleared, salt, loadValue, driftsLeft: stop.drifts.filter(d => !d.cleared).length });
    if(stop.drifts.every(d => d.cleared)){
      // Stop cleared: on time if the leg ran inside par.
      const onTime = legSeconds <= legPar;
      if(onTime) onTimeLegs++;
      stopIdx++;
      if(stopIdx >= stops.length){
        // Route complete: the banked drifts plus the unbanked load,
        // plus the completion bonus plus one on-time bonus per leg
        // run on schedule.
        const driftPay = banked + loadValue;
        const completionBonus = ROUTE_BONUS;
        const onTimeBonus = ON_TIME_BONUS * onTimeLegs;
        const total = driftPay + completionBonus + onTimeBonus;
        const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
        const rating = ratingFor(onTimeLegs, stops.length, damageFrac);
        ratingSum += rating; ratingCount++; routes++;
        drifts += routeDrifts; earned += total;
        onTimeStops += onTimeLegs; totalStops += stops.length;
        const stopTotal = stops.length, driftTotal = routeDrifts;
        endRoute();
        state = 'cooldown'; timer = ROUTE_COOLDOWN;
        events.push({ type:'routeComplete', drifts: driftTotal, driftPay, completionBonus, onTimeBonus,
          onTimeLegs, totalStops: stopTotal, rating, surge: rideSurge,
          ratingAvg: ratingCount ? ratingSum / ratingCount : 0, total });
      }else{
        const next = stops[stopIdx];
        legPar = legParFor(dist(stop, next)); legSeconds = 0;
        events.push({ type:'stopCleared', stop:{ x:stop.x, z:stop.z }, driftsCleared: cleared,
          salt, loadValue, onTime, stopIndex: stopIdx, stopsLeft: stops.length - stopIdx });
      }
      return 'stopDone';
    }
    return 'cleared';
  }

  return {
    get state(){ return state; },
    get inPlow(){ return inPlow; },
    get active(){ return state === 'route'; },
    // 'collect' or 'depot': which leg of the route the plow is on.
    get phase(){ return state === 'route' ? phase : 'collect'; },
    // Where the beacon + radar dot point: the depot while refilling, else
    // the next drift to clear. Null when no route is running.
    get target(){
      if(state !== 'route') return null;
      if(phase === 'depot') return depot;
      const d = this.nextDrift;
      return d ? { x:d.x, z:d.z } : stops[stopIdx];
    },
    // The next stop, with its drifts — the HUD and the drift meshes read
    // this (null when no route is running, or while the plow is on a
    // depot run).
    get nextStop(){ return state === 'route' && phase === 'collect' ? stops[stopIdx] : null; },
    // The next drift still waiting at the current stop (null when no
    // route is running, the stop is cleared, or the plow is on a depot
    // run).
    get nextDrift(){
      if(state !== 'route' || phase !== 'collect' || !stops) return null;
      return stops[stopIdx].drifts.find(d => !d.cleared) || null;
    },
    // The depot point (null when no route is running).
    get depot(){ return state === 'route' ? depot : null; },
    get stopIndex(){ return stopIdx; },
    get stopCount(){ return stops ? stops.length : 0; },
    // Drifts still waiting at the current stop (0 while on a depot run).
    get driftsLeft(){ return state === 'route' && phase === 'collect' ? stops[stopIdx].drifts.filter(d => !d.cleared).length : 0; },
    // Salt units aboard right now (one per drift).
    get salt(){ return salt; },
    get saltCapacity(){ return PLOW_SALT_CAPACITY; },
    // $ value of the drifts cleared so far this route (0 when idle).
    get loadValue(){ return loadValue; },
    // $ value already dumped at the depot this route (safe from a wreck).
    get banked(){ return banked; },
    // Seconds left on this leg's schedule (negative = running late).
    // The leg clock pauses on a depot run — refilling the salt is
    // required work, not dawdling.
    get timeLeft(){ return state === 'route' && phase === 'collect' ? legPar - legSeconds : 0; },
    // Drifts cleared this route so far (0 when idle).
    get driftsCleared(){ return routeDrifts; },
    get routes(){ return routes; },
    get drifts(){ return drifts; },
    get earned(){ return earned; },
    get ratingCount(){ return ratingCount; },
    // Lifetime route rating, 1-5; 0 until the first finished route.
    get ratingAvg(){ return ratingCount ? ratingSum / ratingCount : 0; },
    // Share of legs run on schedule across all finished routes, 0-1.
    get onTimeRate(){ return totalStops ? onTimeStops / totalStops : 0; },
    // Surge in effect: the locked-in rate during a route, the live rate
    // otherwise (1 in the day, 1.5 at night). The HUD reads this.
    get surge(){ return state === 'route' ? rideSurge : curSurge; },
    // Career snapshot for the save file (plain numbers, no state).
    get career(){ return { routes, drifts, earned, onTimeStops, totalStops, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      routes = n(c.routes); drifts = n(c.drifts); earned = n(c.earned);
      onTimeStops = n(c.onTimeStops); totalStops = n(c.totalStops);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live
    // route before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the plow killed a live route.
    // Leaving the plow ends the shift, so the unbanked load is lost either way.
    setInPlow(v){
      if(v === inPlow) return null;
      inPlow = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      salt = PLOW_SALT_CAPACITY; loadValue = 0; banked = 0;
      if(state === 'route'){
        state = 'off'; stops = null; depot = null; stopIdx = 0; phase = 'collect'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the plow, the garage, the menu: a live route ends, quietly,
    // and the unbanked load goes with it — an unfinished route never pays.
    // Returns true when a route was actually live. The cooldown only
    // applies when the plow is still the car (setInPlow(true) re-arms idle).
    abandon(){
      const wasLive = state === 'route';
      const lost = loadValue;
      endRoute();
      return wasLive ? { abandoned:true, loadLost: lost } : false;
    },

    // Is the blade working right now, for this frame's position?
    // main.js reads this every frame for the HUD; the state machine
    // itself only needs it inside update().
    isPlowing(ctx){
      if(state !== 'route' || phase !== 'collect' || !stops) return false;
      const d = this.nextDrift;
      return !!d && dist(ctx, d) < CLEAR_RADIUS && inPlowWindow(ctx.speed);
    },

    // ctx = { x, z, speed, hp, maxHp?, surge? }. Returns events for main.js.
    update(dt, ctx){
      const events = [];
      const s = ctx && ctx.surge;
      curSurge = (typeof s === 'number' && isFinite(s) && s > 0) ? s : 1;
      if(state === 'idle'){
        timer -= dt;
        if(timer <= 0){
          const built = buildRoute(ctx);
          if(!built){ timer = ROUTE_RETRY; }
          else{
            stops = built.stops; depot = built.depot;
            stopIdx = 0; phase = 'collect'; refillT = 0;
            salt = PLOW_SALT_CAPACITY; loadValue = 0; banked = 0; routeDrifts = 0; onTimeLegs = 0;
            legPar = legParFor(dist(ctx, stops[0])); legSeconds = 0;
            rideSurge = curSurge;   // the pay is fixed when the route starts
            hpStart = ctx.hp; maxHp = ctx.maxHp || 100; lastHp = ctx.hp;
            state = 'route';
            events.push({ type:'routeStart', stops:stops.map(p => ({ x:p.x, z:p.z, drifts:p.drifts.map(d => ({ ...d })) })), depot:{ ...depot }, surge: rideSurge });
          }
        }
      }else if(state === 'route'){
        if(ctx.hp <= 0){
          // Wrecked: the route ends and the unbanked load is lost with it.
          // What you already dumped at the depot stays banked — it is
          // in the salt shed, not in the plow.
          const lost = loadValue;
          const kept = banked;
          endRoute();
          events.push({ type:'routeFailed', reason:'wrecked', loadLost: lost, banked: kept });
          return events;
        }
        // A hard shunt spills salt off the load: one unit per hit,
        // paced by the hp drop itself.
        if(salt > 0 && ctx.hp < lastHp - DAMAGE_SPILL_HP){
          salt--;
          events.push({ type:'spilled', salt });
        }
        lastHp = ctx.hp;

        if(phase === 'depot'){
          // Refilling: stop at the depot and the salt hopper fills back
          // up while the cleared drifts bank. The leg clock is paused
          // while this runs.
          if(dist(ctx, depot) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
            refillT += dt;
            if(refillT >= REFILL_TIME){
              banked += loadValue;
              const dumped = loadValue;
              salt = PLOW_SALT_CAPACITY; loadValue = 0; refillT = 0; phase = 'collect';
              events.push({ type:'refilled', dumped, banked, salt });
            }
          }else{
            refillT = 0;
          }
        }else{
          legSeconds += dt;
          const done = clearDrifts(ctx, events);
          if(done) return events;   // stop cleared or route complete: done for this frame
          const stop = stops[stopIdx];
          if(salt <= 0 && stop.drifts.some(d => !d.cleared)){
            // Salt dry with drifts still waiting: swing to the depot.
            phase = 'depot'; refillT = 0;
            events.push({ type:'saltEmpty', salt: 0 });
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inPlow ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
