// CITY DRIVER — city bus: the Winnipeg Transit route job.
//
// The bus has been a missing loop: sixteen cars to buy, but no reason to
// drive a bus at all. This closes that gap with the classic transit loop,
// on the same pattern as the taxi fares: drive the bus in free roam and a
// route starts nearby — a chain of stops along the streets, each with
// riders waiting on the sidewalk. Pull up to the blue marker and stop to
// board them, then run the route to the end: every rider pays a fare into
// the farebox, a finished route pays a completion bonus, and every leg run
// on schedule pays an on-time bonus. Rough driving costs you: a hard shunt
// while passengers are aboard scares one off at the next stop (their fare
// walks away with them), and wrecking the bus loses the whole farebox —
// the route only pays when it is finished. Fares surge with the time of
// day and the weather, locked in when the route starts, the same as a cab
// fare. Career totals (routes, riders, earnings, on-time record, rating)
// persist in the save.
//
// Pure state machine + fare math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the waiting
// peds, the HUD, the toasts and the cash; this module only decides what
// happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { roadTilesOf } from './taxi.js';

export const BUS_FARE_PER_RIDER = 5;   // $ per rider, before surge
export const BUS_CAPACITY = 24;        // riders aboard at once
export const BUS_STOPS_MIN = 6;        // stops per route (short end)
export const BUS_STOPS_MAX = 9;        // stops per route (long end)
export const STOP_RADIUS = 8;          // m: stop this close to board
export const ROUTE_BONUS = 150;        // $ for finishing the whole route
export const ON_TIME_BONUS = 25;       // $ per leg run on schedule
export const LEG_MIN_DIST = 150;       // m between consecutive stops (short end)
export const LEG_MAX_DIST = 420;       // m between consecutive stops (long end)
export const ROUTE_DELAY_MIN = 10;     // s between routes (short end)
export const ROUTE_DELAY_MAX = 25;     // s between routes (long end)
export const ROUTE_COOLDOWN = 6;       // s after a route ends before the next one
export const ROUTE_RETRY = 5;          // s: wait before retrying when no route fits
export const WAITING_MIN = 1;          // riders waiting at a stop (short end)
export const WAITING_MAX = 6;          // riders waiting at a stop (long end)
export const DAMAGE_SCARE_HP = 15;     // one hp drop this big scares a rider off

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// One rider pays the flat fare, times the surge locked in when the route
// started (1 in the day, 1.5 at night, more in a storm) — a night storm
// route pays more per head, end to end.
export function farePerRider(surge = 1){
  const s = (typeof surge === 'number' && isFinite(surge) && surge > 0) ? surge : 1;
  return Math.round(BUS_FARE_PER_RIDER * s);
}

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the boarding stop.
export function legParFor(distM){
  return Math.round(distM / 11 + 12);
}

// Route rating, 1-5 stars: a smooth on-schedule route is 5. Running
// more than half the legs late costs 2 stars, any late leg costs 1 —
// and a battered bus costs 2 for heavy damage, 1 for light damage, on
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

export function isBusCar(carDef){
  return !!carDef && carDef.extra === 'bus';
}

// A road point near the bus: the first stop of a route. Same retry shape
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

// Riders waiting at a stop: a small crowd, never an empty stop — a stop
// with nobody waiting is a wasted drive.
export function waitingFor(rng){
  return WAITING_MIN + ((rng() * (WAITING_MAX - WAITING_MIN + 1)) | 0);
}

// ---------- custom maps ----------

// Stop pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets routes when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no routes.
export function busRoutePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The first stop: a road tile near the bus, or the nearest road at all
  // when the bus is off the streets; null when the map has no roads.
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
  return { stopNear, nextStop };
}

// States: off (not in a bus) -> idle (in a bus, waiting for a route) ->
// route (stops to run) -> cooldown -> idle. Events are returned from
// update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = { stopNear: stopPointNear, nextStop: nextStopPoint };
export function createBusJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inBus = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next route; cooldown: until idle
  let stops = null;              // the route: [{x, z, waiting}]
  let stopIdx = 0;               // next stop to serve
  let legPar = 0, legSeconds = 0;
  let onboard = 0;               // riders aboard right now
  let farebox = 0;               // fares collected this route, paid on completion
  let routePassengers = 0;       // riders boarded this route
  let onTimeLegs = 0;            // legs run on schedule this route
  let hpStart = 0, maxHp = 100, lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current route started — the fare is fixed at the first stop, so
  // the sky changing mid-route never reprices a route already running.
  let curSurge = 1, rideSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let routes = 0, passengers = 0, earned = 0;
  let onTimeStops = 0, totalStops = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return ROUTE_DELAY_MIN + rng() * (ROUTE_DELAY_MAX - ROUTE_DELAY_MIN); }
  function stopCount(){ return BUS_STOPS_MIN + ((rng() * (BUS_STOPS_MAX - BUS_STOPS_MIN + 1)) | 0); }

  // Build a route starting near the bus: first stop on a road nearby,
  // then a chain of legs a real drive apart. Null when the world cannot
  // carry a route (custom map with no roads, or legs too short).
  function buildRoute(ctx){
    const first = activePickers.stopNear(ctx.x, ctx.z, rng);
    if(!first) return null;
    const list = [{ x:first.x, z:first.z, waiting:waitingFor(rng) }];
    const count = stopCount();
    while(list.length < count){
      const prev = list[list.length - 1];
      const p = activePickers.nextStop(prev, rng);
      if(!p) return null;
      // A stop on top of the last one is a wasted drive: skip it and
      // try once more from the same point instead of ending the route.
      if(dist(prev, p) < 60) continue;
      list.push({ x:p.x, z:p.z, waiting:waitingFor(rng) });
    }
    return list;
  }

  return {
    get state(){ return state; },
    get inBus(){ return inBus; },
    get active(){ return state === 'route'; },
    // Where the beacon + radar dot point: the next stop, or null.
    get target(){ return state === 'route' && stops ? stops[stopIdx] : null; },
    // The next stop, with its waiting riders — the HUD and the waiting
    // peds read this (null when no route is running).
    get nextStop(){ return state === 'route' && stops ? stops[stopIdx] : null; },
    get stopIndex(){ return stopIdx; },
    get stopCount(){ return stops ? stops.length : 0; },
    get onboard(){ return onboard; },
    // Seconds left on this leg's schedule (negative = running late).
    get timeLeft(){ return state === 'route' ? legPar - legSeconds : 0; },
    // Riders aboard + farebox so far this route (0 when idle).
    get farebox(){ return farebox; },
    get routes(){ return routes; },
    get passengers(){ return passengers; },
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
    get career(){ return { routes, passengers, earned, onTimeStops, totalStops, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      routes = n(c.routes); passengers = n(c.passengers); earned = n(c.earned);
      onTimeStops = n(c.onTimeStops); totalStops = n(c.totalStops);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live
    // route before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the bus killed a live route.
    // Leaving the bus ends the shift, so the farebox is lost either way.
    setInBus(v){
      if(v === inBus) return null;
      inBus = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      farebox = 0; onboard = 0;
      if(state === 'route'){
        state = 'off'; stops = null; stopIdx = 0; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the bus, the garage, the menu: a live route ends, quietly,
    // and the farebox goes with it — an unfinished route never pays.
    // Returns true when a route was actually live. The cooldown only
    // applies when the bus is still the car (setInBus(true) re-arms idle).
    abandon(){
      farebox = 0; onboard = 0;
      if(state !== 'route') return false;
      state = inBus ? 'cooldown' : 'off'; timer = ROUTE_COOLDOWN;
      stops = null; stopIdx = 0; return true;
    },

    // ctx = { x, z, speed, hp, maxHp?, surge? }. Returns events for main.js.
    update(dt, ctx){
      const events = [];
      const s = ctx && ctx.surge;
      curSurge = (typeof s === 'number' && isFinite(s) && s > 0) ? s : 1;
      if(state === 'idle'){
        timer -= dt;
        if(timer <= 0){
          stops = buildRoute(ctx);
          if(!stops){ timer = ROUTE_RETRY; }
          else{
            stopIdx = 0; onboard = 0; farebox = 0; routePassengers = 0; onTimeLegs = 0;
            legPar = legParFor(dist(ctx, stops[0])); legSeconds = 0;
            rideSurge = curSurge;   // the fare is fixed when the route starts
            hpStart = ctx.hp; maxHp = ctx.maxHp || 100; lastHp = ctx.hp;
            state = 'route';
            events.push({ type:'routeStart', stops:stops.map(p => ({ ...p })), surge: rideSurge });
          }
        }
      }else if(state === 'route'){
        legSeconds += dt;
        if(ctx.hp <= 0){
          // Wrecked: the route ends and the farebox is lost with it.
          state = 'cooldown'; timer = ROUTE_COOLDOWN;
          events.push({ type:'routeFailed', reason:'wrecked', fareboxLost: farebox, passengers: routePassengers });
          farebox = 0; onboard = 0; stops = null; stopIdx = 0;
        }else{
          // A hard shunt while riders are aboard scares one off: they get
          // out at the next stop (their fare walks away with them). One
          // scare per hit, paced by the hp drop itself.
          if(onboard > 0 && ctx.hp < lastHp - DAMAGE_SCARE_HP){
            onboard--;
            events.push({ type:'passengerLeft', onboard });
          }
          lastHp = ctx.hp;
          const stop = stops[stopIdx];
          if(dist(ctx, stop) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
            // Boarding: whoever fits boards, the rest keep waiting for
            // the next bus (they are not this route's problem any more).
            const free = BUS_CAPACITY - onboard;
            const boarded = Math.min(stop.waiting, Math.max(0, free));
            const fare = boarded * farePerRider(rideSurge);
            farebox += fare; onboard += boarded; routePassengers += boarded;
            const onTime = legSeconds <= legPar;
            if(onTime) onTimeLegs++;
            stopIdx++;
            if(stopIdx >= stops.length){
              // Route complete: the farebox plus the completion bonus
              // plus one on-time bonus per leg run on schedule.
              const completionBonus = ROUTE_BONUS;
              const onTimeBonus = ON_TIME_BONUS * onTimeLegs;
              const total = farebox + completionBonus + onTimeBonus;
              const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
              const rating = ratingFor(onTimeLegs, stops.length, damageFrac);
              ratingSum += rating; ratingCount++; routes++;
              passengers += routePassengers; earned += total;
              onTimeStops += onTimeLegs; totalStops += stops.length;
              state = 'cooldown'; timer = ROUTE_COOLDOWN;
              events.push({ type:'routeComplete', fares: farebox, completionBonus, onTimeBonus,
                onTimeLegs, totalStops: stops.length, rating, surge: rideSurge,
                ratingAvg: ratingCount ? ratingSum / ratingCount : 0,
                passengers: routePassengers, total });
              farebox = 0; onboard = 0; stops = null; stopIdx = 0;
            }else{
              const next = stops[stopIdx];
              legPar = legParFor(dist(stop, next)); legSeconds = 0;
              events.push({ type:'board', stop:{ ...stop }, boarded, leftWaiting: stop.waiting - boarded,
                onboard, fare, farebox, onTime, stopIndex: stopIdx, stopsLeft: stops.length - stopIdx });
            }
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inBus ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
