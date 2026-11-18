// CITY DRIVER — garbage collection: the City of Winnipeg route job.
//
// Sixteen cars to buy, a bus to drive, an ambulance, a fire truck and a
// cruiser — but the bins still pile up on the curb. This closes that gap
// with the classic sanitation loop, on the same pattern as the bus routes:
// drive the garbage truck in free roam and a route starts nearby — a
// chain of pickup stops along the streets, each with bins waiting on the
// curb. Pull up to the green marker and stop: the crew loads one bin at a
// time into the hopper, $12 a bin into the load. The hopper holds 20 bins
// — fill it mid-route and the beacon swings to the depot, where a stop
// empties it and banks what you collected, then the route resumes. A
// finished route pays the load plus a completion bonus and an on-time
// bonus per leg run on schedule. Rough driving costs you: a hard shunt
// spills a bin off the load, and wrecking the truck loses everything
// still in the hopper — only what you already dumped at the depot is
// safe. Pay surges with the time of day and the weather, locked in when
// the route starts, the same as a cab fare. Career totals (routes, bins,
// earnings, on-time record, rating) persist in the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the bin meshes,
// the HUD, the toasts and the cash; this module only decides what happens
// when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { roadTilesOf } from './taxi.js';

export const GARBAGE_PAY_PER_BIN = 12;  // $ per bin, before surge
export const GARBAGE_HOPPER = 20;       // bins the hopper holds at once
export const GARBAGE_STOPS_MIN = 6;     // stops per route (short end)
export const GARBAGE_STOPS_MAX = 9;     // stops per route (long end)
export const STOP_RADIUS = 8;           // m: stop this close to load
export const LOAD_TIME = 1.5;           // s to load one bin while stopped
export const EMPTY_TIME = 2.5;          // s stopped at the depot to empty
export const ROUTE_BONUS = 150;         // $ for finishing the whole route
export const ON_TIME_BONUS = 25;        // $ per leg run on schedule
export const LEG_MIN_DIST = 150;        // m between consecutive stops (short end)
export const LEG_MAX_DIST = 420;        // m between consecutive stops (long end)
export const DEPOT_MIN_DIST = 150;      // m: depot this far from the first stop
export const ROUTE_DELAY_MIN = 10;      // s between routes (short end)
export const ROUTE_DELAY_MAX = 25;      // s between routes (long end)
export const ROUTE_COOLDOWN = 6;        // s after a route ends before the next one
export const ROUTE_RETRY = 5;           // s: wait before retrying when no route fits
export const BINS_MIN = 1;              // bins waiting at a stop (short end)
export const BINS_MAX = 4;              // bins waiting at a stop (long end)
export const DAMAGE_SPILL_HP = 15;      // one hp drop this big spills a bin

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// One bin pays the flat rate, times the surge locked in when the route
// started (1 in the day, 1.5 at night, more in a storm) — a night storm
// route pays more per bin, end to end.
export function payPerBin(surge = 1){
  const s = (typeof surge === 'number' && isFinite(surge) && surge > 0) ? surge : 1;
  return Math.round(GARBAGE_PAY_PER_BIN * s);
}

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the loading stop.
export function legParFor(distM){
  return Math.round(distM / 11 + 12);
}

// Route rating, 1-5 stars: a smooth on-schedule route is 5. Running
// more than half the legs late costs 2 stars, any late leg costs 1 —
// and a battered truck costs 2 for heavy damage, 1 for light damage, on
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

export function isGarbageCar(carDef){
  return !!carDef && carDef.extra === 'garbage';
}

// A road point near the truck: the first stop of a route. Same retry shape
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

// The depot: a road point a real drive from the first stop, so emptying
// the hopper costs a detour instead of a U-turn. 8 tries, then the last
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

// Bins waiting at a stop: at least one — a stop with no bins is a wasted
// drive — and never more than the crew can load in one visit.
export function binsFor(rng){
  return BINS_MIN + ((rng() * (BINS_MAX - BINS_MIN + 1)) | 0);
}

// ---------- custom maps ----------

// Stop pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets routes when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no routes.
export function garbageRoutePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The first stop: a road tile near the truck, or the nearest road at all
  // when the truck is off the streets; null when the map has no roads.
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

// States: off (not in a garbage truck) -> idle (in one, waiting for a
// route) -> route (stops to run, phase 'collect' or 'depot') -> cooldown
// -> idle. Events are returned from update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = { stopNear: stopPointNear, nextStop: nextStopPoint, depotNear: depotPointNear };
export function createGarbageJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inTruck = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next route; cooldown: until idle
  let stops = null;              // the route: [{x, z, bins}]
  let depot = null;              // where the hopper gets emptied
  let phase = 'collect';         // 'collect' stops, 'depot' emptying run
  let stopIdx = 0;               // next stop to serve
  let legPar = 0, legSeconds = 0;
  let loadT = 0;                 // s stopped at this stop, toward the next bin
  let emptyT = 0;                // s stopped at the depot, toward an empty hopper
  let hopper = 0;                // bins aboard right now
  let loadValue = 0;             // $ value of the bins in the hopper (lost on a wreck)
  let banked = 0;                // $ value of bins already dumped at the depot (safe)
  let routeBins = 0;             // bins loaded this route
  let onTimeLegs = 0;            // legs run on schedule this route
  let hpStart = 0, maxHp = 100, lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current route started — the pay is fixed at the first stop, so
  // the sky changing mid-route never reprices a route already running.
  let curSurge = 1, rideSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let routes = 0, bins = 0, earned = 0;
  let onTimeStops = 0, totalStops = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return ROUTE_DELAY_MIN + rng() * (ROUTE_DELAY_MAX - ROUTE_DELAY_MIN); }
  function stopCount(){ return GARBAGE_STOPS_MIN + ((rng() * (GARBAGE_STOPS_MAX - GARBAGE_STOPS_MIN + 1)) | 0); }

  // Build a route starting near the truck: first stop on a road nearby,
  // then a chain of legs a real drive apart, plus a depot a real drive
  // from the first stop. Null when the world cannot carry a route
  // (custom map with no roads, or legs too short).
  function buildRoute(ctx){
    const first = activePickers.stopNear(ctx.x, ctx.z, rng);
    if(!first) return null;
    const list = [{ x:first.x, z:first.z, bins:binsFor(rng) }];
    const count = stopCount();
    while(list.length < count){
      const prev = list[list.length - 1];
      const p = activePickers.nextStop(prev, rng);
      if(!p) return null;
      // A stop on top of the last one is a wasted drive: skip it and
      // try once more from the same point instead of ending the route.
      if(dist(prev, p) < 60) continue;
      list.push({ x:p.x, z:p.z, bins:binsFor(rng) });
    }
    const dep = activePickers.depotNear(first, rng);
    if(!dep) return null;
    return { stops:list, depot:dep };
  }

  // End a live route without pay. Returns true when a route was live.
  // The hopper load goes with it — an unfinished route never pays.
  function endRoute(){
    const wasLive = state === 'route';
    state = inTruck ? 'cooldown' : 'off'; timer = ROUTE_COOLDOWN;
    hopper = 0; loadValue = 0; banked = 0; stops = null; depot = null;
    stopIdx = 0; phase = 'collect'; loadT = 0; emptyT = 0;
    return wasLive;
  }

  return {
    get state(){ return state; },
    get inTruck(){ return inTruck; },
    get active(){ return state === 'route'; },
    // 'collect' or 'depot': which leg of the route the truck is on.
    get phase(){ return state === 'route' ? phase : 'collect'; },
    // Where the beacon + radar dot point: the depot while emptying, else
    // the next stop. Null when no route is running.
    get target(){
      if(state !== 'route') return null;
      return phase === 'depot' ? depot : stops[stopIdx];
    },
    // The next stop, with its bins still waiting — the HUD and the bin
    // meshes read this (null when no route is running, or while the
    // truck is on a depot run).
    get nextStop(){ return state === 'route' && phase === 'collect' ? stops[stopIdx] : null; },
    // The depot point (null when no route is running).
    get depot(){ return state === 'route' ? depot : null; },
    get stopIndex(){ return stopIdx; },
    get stopCount(){ return stops ? stops.length : 0; },
    // Bins still waiting at the current stop (0 while on a depot run).
    get binsLeft(){ return state === 'route' && phase === 'collect' ? stops[stopIdx].bins : 0; },
    get hopper(){ return hopper; },
    // $ value of the bins in the hopper right now (0 when idle).
    get loadValue(){ return loadValue; },
    // $ value already dumped at the depot this route (safe from a wreck).
    get banked(){ return banked; },
    // Seconds left on this leg's schedule (negative = running late).
    // The leg clock pauses on a depot run — emptying the hopper is
    // required work, not dawdling.
    get timeLeft(){ return state === 'route' && phase === 'collect' ? legPar - legSeconds : 0; },
    // Bins loaded this route so far (0 when idle).
    get binsLoaded(){ return routeBins; },
    get routes(){ return routes; },
    get bins(){ return bins; },
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
    get career(){ return { routes, bins, earned, onTimeStops, totalStops, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      routes = n(c.routes); bins = n(c.bins); earned = n(c.earned);
      onTimeStops = n(c.onTimeStops); totalStops = n(c.totalStops);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live
    // route before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the truck killed a live route.
    // Leaving the truck ends the shift, so the hopper load is lost either way.
    setInTruck(v){
      if(v === inTruck) return null;
      inTruck = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      hopper = 0; loadValue = 0; banked = 0;
      if(state === 'route'){
        state = 'off'; stops = null; depot = null; stopIdx = 0; phase = 'collect'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the truck, the garage, the menu: a live route ends, quietly,
    // and the hopper load goes with it — an unfinished route never pays.
    // Returns true when a route was actually live. The cooldown only
    // applies when the truck is still the car (setInTruck(true) re-arms idle).
    abandon(){
      const wasLive = state === 'route';
      const lost = loadValue;
      endRoute();
      return wasLive ? { abandoned:true, loadLost: lost } : false;
    },

    // Is the truck loading bins right now, for this frame's position?
    // main.js reads this every frame for the HUD; the state machine
    // itself only needs it inside update().
    isLoading(ctx){
      if(state !== 'route' || phase !== 'collect' || !stops) return false;
      const stop = stops[stopIdx];
      return stop.bins > 0 && hopper < GARBAGE_HOPPER
        && dist(ctx, stop) < STOP_RADIUS && Math.abs(ctx.speed) < 1;
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
            stopIdx = 0; phase = 'collect'; loadT = 0; emptyT = 0;
            hopper = 0; loadValue = 0; banked = 0; routeBins = 0; onTimeLegs = 0;
            legPar = legParFor(dist(ctx, stops[0])); legSeconds = 0;
            rideSurge = curSurge;   // the pay is fixed when the route starts
            hpStart = ctx.hp; maxHp = ctx.maxHp || 100; lastHp = ctx.hp;
            state = 'route';
            events.push({ type:'routeStart', stops:stops.map(p => ({ ...p })), depot:{ ...depot }, surge: rideSurge });
          }
        }
      }else if(state === 'route'){
        if(ctx.hp <= 0){
          // Wrecked: the route ends and the hopper load is lost with it.
          // What you already dumped at the depot stays banked — it is
          // in the landfill, not in the truck.
          const lost = loadValue;
          const kept = banked;
          endRoute();
          events.push({ type:'routeFailed', reason:'wrecked', loadLost: lost, banked: kept });
          return events;
        }
        // A hard shunt spills a bin off the load: one bin per hit,
        // paced by the hp drop itself.
        if(hopper > 0 && ctx.hp < lastHp - DAMAGE_SPILL_HP){
          hopper--;
          loadValue = Math.max(0, loadValue - payPerBin(rideSurge));
          events.push({ type:'spilled', hopper, loadValue });
        }
        lastHp = ctx.hp;

        if(phase === 'depot'){
          // Emptying: stop at the depot and the hopper drains into the
          // bank. The leg clock is paused while this runs.
          if(dist(ctx, depot) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
            emptyT += dt;
            if(emptyT >= EMPTY_TIME){
              banked += loadValue;
              const dumped = loadValue;
              hopper = 0; loadValue = 0; emptyT = 0; phase = 'collect';
              events.push({ type:'emptied', dumped, banked });
            }
          }else{
            emptyT = 0;
          }
        }else{
          legSeconds += dt;
          const stop = stops[stopIdx];
          if(dist(ctx, stop) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
            // Loading: the crew lifts one bin at a time into the hopper.
            loadT += dt;
            let loaded = 0;
            while(loadT >= LOAD_TIME && stop.bins > 0 && hopper < GARBAGE_HOPPER){
              loadT -= LOAD_TIME;
              stop.bins--; hopper++; routeBins++;
              loadValue += payPerBin(rideSurge);
              loaded++;
            }
            if(loaded > 0){
              events.push({ type:'binLoaded', loaded, hopper, binsLeft: stop.bins, loadValue });
            }
            if(stop.bins === 0){
              // Stop cleared: on time if the leg ran inside par.
              const onTime = legSeconds <= legPar;
              if(onTime) onTimeLegs++;
              stopIdx++;
              if(stopIdx >= stops.length){
                // Route complete: the banked bins plus the hopper load,
                // plus the completion bonus plus one on-time bonus per
                // leg run on schedule.
                const binPay = banked + loadValue;
                const completionBonus = ROUTE_BONUS;
                const onTimeBonus = ON_TIME_BONUS * onTimeLegs;
                const total = binPay + completionBonus + onTimeBonus;
                const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
                const rating = ratingFor(onTimeLegs, stops.length, damageFrac);
                ratingSum += rating; ratingCount++; routes++;
                bins += routeBins; earned += total;
                onTimeStops += onTimeLegs; totalStops += stops.length;
                const stopTotal = stops.length;
                endRoute();
                state = 'cooldown'; timer = ROUTE_COOLDOWN;
                events.push({ type:'routeComplete', bins: routeBins, binPay, completionBonus, onTimeBonus,
                  onTimeLegs, totalStops: stopTotal, rating, surge: rideSurge,
                  ratingAvg: ratingCount ? ratingSum / ratingCount : 0, total });
              }else{
                const next = stops[stopIdx];
                legPar = legParFor(dist(stop, next)); legSeconds = 0; loadT = 0;
                events.push({ type:'stopCleared', stop:{ x:stop.x, z:stop.z }, binsLoaded: loaded,
                  hopper, loadValue, onTime, stopIndex: stopIdx, stopsLeft: stops.length - stopIdx });
              }
            }else if(hopper >= GARBAGE_HOPPER){
              // Hopper full with bins still waiting: swing to the depot.
              phase = 'depot'; emptyT = 0; loadT = 0;
              events.push({ type:'hopperFull', hopper });
            }
          }else{
            loadT = 0;
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inTruck ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
