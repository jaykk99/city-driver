// CITY DRIVER — street sweeping: the City of Winnipeg spring-clean route job.
//
// Sixteen cars to buy, a bus to drive, an ambulance, a fire truck, a
// cruiser, a garbage truck, a tow truck and a snow plow — but after the
// snow melts the streets are still covered in sand, leaves and grit.
// This closes that gap with the classic street-service loop, on the same
// pattern as the garbage routes: drive the street sweeper in free roam
// and a route starts nearby — a chain of dirty stops along the streets,
// each with leaf piles waiting on the road. Sweep through a pile at
// working speed and the brushes clear it, $12 a pile into the hopper.
// The hopper holds 20 piles — fill it mid-route and the beacon swings
// to the depot, where a stop empties it and banks what you swept. A
// finished route pays the load plus a completion bonus and an on-time
// bonus per leg run on schedule. Rough driving costs you: a hard shunt
// scatters a pile off the load, and wrecking the sweeper loses
// everything still in the hopper — only what you already dumped at the
// depot is safe. Pay surges with the time of day and the weather, locked
// in when the route starts, the same as a cab fare. Career totals
// (routes, piles, earnings, on-time record, rating) persist in the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the pile
// meshes, the HUD, the toasts and the cash; this module only decides
// what happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { roadTilesOf } from './taxi.js';

export const SWEEP_PAY_PER_PILE = 12;  // $ per pile, before surge
export const SWEEP_HOPPER = 20;        // piles the hopper holds at once
export const SWEEP_STOPS_MIN = 6;      // stops per route (short end)
export const SWEEP_STOPS_MAX = 9;      // stops per route (long end)
export const CLEAR_RADIUS = 7;         // m: drive this close to sweep a pile
export const SWEEP_MIN_SPEED = 1.5;    // m/s: slower than this the brushes do not bite
export const SWEEP_MAX_SPEED = 10;     // m/s: faster than this the brushes skip over the pile
export const STOP_RADIUS = 8;          // m: stop this close to empty at the depot
export const EMPTY_TIME = 2.5;         // s stopped at the depot to empty the hopper
export const ROUTE_BONUS = 150;        // $ for finishing the whole route
export const ON_TIME_BONUS = 25;       // $ per leg run on schedule
export const LEG_MIN_DIST = 150;       // m between consecutive stops (short end)
export const LEG_MAX_DIST = 420;       // m between consecutive stops (long end)
export const DEPOT_MIN_DIST = 150;     // m: depot this far from the first stop
export const ROUTE_DELAY_MIN = 10;     // s between routes (short end)
export const ROUTE_DELAY_MAX = 25;     // s between routes (long end)
export const ROUTE_COOLDOWN = 6;       // s after a route ends before the next one
export const ROUTE_RETRY = 5;          // s: wait before retrying when no route fits
export const PILES_MIN = 1;            // piles waiting at a stop (short end)
export const PILES_MAX = 4;            // piles waiting at a stop (long end)
export const PILE_SPREAD = 9;          // m: piles scatter this far from the stop centre
export const DAMAGE_SCATTER_HP = 15;  // one hp drop this big scatters a pile off the load

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// One pile pays the flat rate, times the surge locked in when the route
// started (1 in the day, 1.5 at night, more in a storm) — a night storm
// route pays more per pile, end to end.
export function payPerPile(surge = 1){
  const s = (typeof surge === 'number' && isFinite(surge) && surge > 0) ? surge : 1;
  return Math.round(SWEEP_PAY_PER_PILE * s);
}

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the sweeping stop.
export function legParFor(distM){
  return Math.round(distM / 11 + 12);
}

// Route rating, 1-5 stars: a smooth on-schedule route is 5. Running
// more than half the legs late costs 2 stars, any late leg costs 1 —
// and a battered sweeper costs 2 for heavy damage, 1 for light damage, on
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

export function isSweeperCar(carDef){
  return !!carDef && carDef.extra === 'sweeper';
}

// The brushes only work in their window: rolling too slow they do not
// bite, too fast they skip over the pile. Stopped or speeding past a
// pile leaves it where it sits.
export function inSweepWindow(speed){
  const s = Math.abs(speed);
  return s >= SWEEP_MIN_SPEED && s <= SWEEP_MAX_SPEED;
}

// A road point near the sweeper: the first stop of a route. Same retry shape
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

// Piles waiting at a stop: at least one — a stop with no piles is a
// wasted drive — and never more than the brushes can clear in one visit.
export function pilesFor(rng){
  return PILES_MIN + ((rng() * (PILES_MAX - PILES_MIN + 1)) | 0);
}

// The piles at one stop: scattered around the stop centre so the sweeper
// sweeps the street instead of parking on one point. Each pile is a
// point on the road with a swept flag the state machine flips.
export function pilePointsFor(stop, count, rng){
  const list = [];
  for(let i = 0; i < count; i++){
    const a = rng() * Math.PI * 2, r = rng() * PILE_SPREAD;
    list.push({ x:stop.x + Math.cos(a) * r, z:stop.z + Math.sin(a) * r, swept:false });
  }
  return list;
}

// ---------- custom maps ----------

// Stop pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets routes when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no routes.
export function sweeperRoutePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The first stop: a road tile near the sweeper, or the nearest road at all
  // when the sweeper is off the streets; null when the map has no roads.
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

// States: off (not in a street sweeper) -> idle (in one, waiting for a route)
// -> route (stops to sweep, phase 'collect' or 'depot') -> cooldown
// -> idle. Events are returned from update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = { stopNear: stopPointNear, nextStop: nextStopPoint, depotNear: depotPointNear };
export function createStreetSweeperJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inSweeper = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next route; cooldown: until idle
  let stops = null;              // the route: [{x, z, piles:[{x, z, swept}]}]
  let depot = null;              // where the hopper gets emptied
  let phase = 'collect';         // 'collect' sweeping, 'depot' empty run
  let stopIdx = 0;               // next stop to sweep
  let legPar = 0, legSeconds = 0;
  let emptyT = 0;                // s stopped at the depot, toward an empty hopper
  let hopper = 0;                // piles aboard right now
  let loadValue = 0;             // $ value of the piles aboard (lost on a wreck)
  let banked = 0;                // $ value of piles already dumped at the depot (safe)
  let routePiles = 0;            // piles swept this route
  let onTimeLegs = 0;            // legs run on schedule this route
  let hpStart = 0, maxHp = 100, lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current route started — the pay is fixed at the first pile, so
  // the sky changing mid-route never reprices a route already running.
  let curSurge = 1, rideSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let routes = 0, piles = 0, earned = 0;
  let onTimeStops = 0, totalStops = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return ROUTE_DELAY_MIN + rng() * (ROUTE_DELAY_MAX - ROUTE_DELAY_MIN); }
  function stopCount(){ return SWEEP_STOPS_MIN + ((rng() * (SWEEP_STOPS_MAX - SWEEP_STOPS_MIN + 1)) | 0); }

  // Build a route starting near the sweeper: first stop on a road nearby,
  // then a chain of legs a real drive apart, plus a depot a real drive
  // from the first stop. Null when the world cannot carry a route
  // (custom map with no roads, or legs too short).
  function buildRoute(ctx){
    const first = activePickers.stopNear(ctx.x, ctx.z, rng);
    if(!first) return null;
    const list = [{ x:first.x, z:first.z, piles:pilePointsFor(first, pilesFor(rng), rng) }];
    const count = stopCount();
    while(list.length < count){
      const prev = list[list.length - 1];
      const p = activePickers.nextStop(prev, rng);
      if(!p) return null;
      // A stop on top of the last one is a wasted drive: skip it and
      // try once more from the same point instead of ending the route.
      if(dist(prev, p) < 60) continue;
      list.push({ x:p.x, z:p.z, piles:pilePointsFor(p, pilesFor(rng), rng) });
    }
    const dep = activePickers.depotNear(first, rng);
    if(!dep) return null;
    return { stops:list, depot:dep };
  }

  // End a live route without pay. Returns true when a route was live.
  // The unbanked load goes with it — an unfinished route never pays.
  function endRoute(){
    const wasLive = state === 'route';
    state = inSweeper ? 'cooldown' : 'off'; timer = ROUTE_COOLDOWN;
    hopper = 0; loadValue = 0; banked = 0; stops = null; depot = null;
    stopIdx = 0; phase = 'collect'; emptyT = 0;
    return wasLive;
  }

  // Sweep the piles the sweeper just drove through at working speed.
  // Returns the events for this frame (pileSwept, stopCleared or
  // routeComplete), or null when nothing swept.
  function sweepPiles(ctx, events){
    const stop = stops[stopIdx];
    let swept = 0;
    for(const p of stop.piles){
      if(p.swept || hopper >= SWEEP_HOPPER) continue;
      if(dist(ctx, p) < CLEAR_RADIUS && inSweepWindow(ctx.speed)){
        p.swept = true; hopper++; routePiles++;
        loadValue += payPerPile(rideSurge);
        swept++;
      }
    }
    if(swept === 0) return null;
    events.push({ type:'pileSwept', swept, hopper, loadValue, pilesLeft: stop.piles.filter(p => !p.swept).length });
    if(stop.piles.every(p => p.swept)){
      // Stop cleared: on time if the leg ran inside par.
      const onTime = legSeconds <= legPar;
      if(onTime) onTimeLegs++;
      stopIdx++;
      if(stopIdx >= stops.length){
        // Route complete: the banked piles plus the unbanked load,
        // plus the completion bonus plus one on-time bonus per leg
        // run on schedule.
        const pilePay = banked + loadValue;
        const completionBonus = ROUTE_BONUS;
        const onTimeBonus = ON_TIME_BONUS * onTimeLegs;
        const total = pilePay + completionBonus + onTimeBonus;
        const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
        const rating = ratingFor(onTimeLegs, stops.length, damageFrac);
        ratingSum += rating; ratingCount++; routes++;
        piles += routePiles; earned += total;
        onTimeStops += onTimeLegs; totalStops += stops.length;
        const stopTotal = stops.length, pileTotal = routePiles;
        endRoute();
        state = 'cooldown'; timer = ROUTE_COOLDOWN;
        events.push({ type:'routeComplete', piles: pileTotal, pilePay, completionBonus, onTimeBonus,
          onTimeLegs, totalStops: stopTotal, rating, surge: rideSurge,
          ratingAvg: ratingCount ? ratingSum / ratingCount : 0, total });
      }else{
        const next = stops[stopIdx];
        legPar = legParFor(dist(stop, next)); legSeconds = 0;
        events.push({ type:'stopCleared', stop:{ x:stop.x, z:stop.z }, pilesSwept: swept,
          hopper, loadValue, onTime, stopIndex: stopIdx, stopsLeft: stops.length - stopIdx });
      }
      return 'stopDone';
    }
    return 'swept';
  }

  return {
    get state(){ return state; },
    get inSweeper(){ return inSweeper; },
    get active(){ return state === 'route'; },
    // 'collect' or 'depot': which leg of the route the sweeper is on.
    get phase(){ return state === 'route' ? phase : 'collect'; },
    // Where the beacon + radar dot point: the depot while emptying, else
    // the next pile to sweep. Null when no route is running.
    get target(){
      if(state !== 'route') return null;
      if(phase === 'depot') return depot;
      const p = this.nextPile;
      return p ? { x:p.x, z:p.z } : stops[stopIdx];
    },
    // The next stop, with its piles — the HUD and the pile meshes read
    // this (null when no route is running, or while the sweeper is on a
    // depot run).
    get nextStop(){ return state === 'route' && phase === 'collect' ? stops[stopIdx] : null; },
    // The next pile still waiting at the current stop (null when no
    // route is running, the stop is cleared, or the sweeper is on a depot
    // run).
    get nextPile(){
      if(state !== 'route' || phase !== 'collect' || !stops) return null;
      return stops[stopIdx].piles.find(p => !p.swept) || null;
    },
    // The depot point (null when no route is running).
    get depot(){ return state === 'route' ? depot : null; },
    get stopIndex(){ return stopIdx; },
    get stopCount(){ return stops ? stops.length : 0; },
    // Piles still waiting at the current stop (0 while on a depot run).
    get pilesLeft(){ return state === 'route' && phase === 'collect' ? stops[stopIdx].piles.filter(p => !p.swept).length : 0; },
    // Piles aboard right now.
    get hopper(){ return hopper; },
    get hopperCapacity(){ return SWEEP_HOPPER; },
    // $ value of the piles aboard this route (0 when idle).
    get loadValue(){ return loadValue; },
    // $ value already dumped at the depot this route (safe from a wreck).
    get banked(){ return banked; },
    // Seconds left on this leg's schedule (negative = running late).
    // The leg clock pauses on a depot run — emptying the hopper is
    // required work, not dawdling.
    get timeLeft(){ return state === 'route' && phase === 'collect' ? legPar - legSeconds : 0; },
    // Piles swept this route so far (0 when idle).
    get pilesSwept(){ return routePiles; },
    get routes(){ return routes; },
    get piles(){ return piles; },
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
    get career(){ return { routes, piles, earned, onTimeStops, totalStops, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      routes = n(c.routes); piles = n(c.piles); earned = n(c.earned);
      onTimeStops = n(c.onTimeStops); totalStops = n(c.totalStops);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live
    // route before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the sweeper killed a live route.
    // Leaving the sweeper ends the shift, so the unbanked load is lost either way.
    setInSweeper(v){
      if(v === inSweeper) return null;
      inSweeper = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      hopper = 0; loadValue = 0; banked = 0;
      if(state === 'route'){
        state = 'off'; stops = null; depot = null; stopIdx = 0; phase = 'collect'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the sweeper, the garage, the menu: a live route ends, quietly,
    // and the unbanked load goes with it — an unfinished route never pays.
    // Returns true when a route was actually live. The cooldown only
    // applies when the sweeper is still the car (setInSweeper(true) re-arms idle).
    abandon(){
      const wasLive = state === 'route';
      const lost = loadValue;
      endRoute();
      return wasLive ? { abandoned:true, loadLost: lost } : false;
    },

    // Are the brushes working right now, for this frame's position?
    // main.js reads this every frame for the HUD; the state machine
    // itself only needs it inside update().
    isSweeping(ctx){
      if(state !== 'route' || phase !== 'collect' || !stops) return false;
      const p = this.nextPile;
      return !!p && dist(ctx, p) < CLEAR_RADIUS && inSweepWindow(ctx.speed);
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
            stopIdx = 0; phase = 'collect'; emptyT = 0;
            hopper = 0; loadValue = 0; banked = 0; routePiles = 0; onTimeLegs = 0;
            legPar = legParFor(dist(ctx, stops[0])); legSeconds = 0;
            rideSurge = curSurge;   // the pay is fixed when the route starts
            hpStart = ctx.hp; maxHp = ctx.maxHp || 100; lastHp = ctx.hp;
            state = 'route';
            events.push({ type:'routeStart', stops:stops.map(p => ({ x:p.x, z:p.z, piles:p.piles.map(d => ({ ...d })) })), depot:{ ...depot }, surge: rideSurge });
          }
        }
      }else if(state === 'route'){
        if(ctx.hp <= 0){
          // Wrecked: the route ends and the unbanked load is lost with it.
          // What you already dumped at the depot stays banked — it is
          // in the yard, not in the sweeper.
          const lost = loadValue;
          const kept = banked;
          endRoute();
          events.push({ type:'routeFailed', reason:'wrecked', loadLost: lost, banked: kept });
          return events;
        }
        // A hard shunt scatters a pile off the load: one pile per hit,
        // paced by the hp drop itself — and the pile's pay goes with it.
        if(hopper > 0 && ctx.hp < lastHp - DAMAGE_SCATTER_HP){
          hopper--;
          loadValue = Math.max(0, loadValue - payPerPile(rideSurge));
          events.push({ type:'scattered', hopper, loadValue });
        }
        lastHp = ctx.hp;

        if(phase === 'depot'){
          // Emptying: stop at the depot and the hopper empties while the
          // swept piles bank. The leg clock is paused while this runs.
          if(dist(ctx, depot) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
            emptyT += dt;
            if(emptyT >= EMPTY_TIME){
              banked += loadValue;
              const dumped = loadValue;
              hopper = 0; loadValue = 0; emptyT = 0; phase = 'collect';
              events.push({ type:'emptied', dumped, banked, hopper });
            }
          }else{
            emptyT = 0;
          }
        }else{
          legSeconds += dt;
          const done = sweepPiles(ctx, events);
          if(done) return events;   // stop cleared or route complete: done for this frame
          const stop = stops[stopIdx];
          if(hopper >= SWEEP_HOPPER && stop.piles.some(p => !p.swept)){
            // Hopper full with piles still waiting: swing to the depot.
            phase = 'depot'; emptyT = 0;
            events.push({ type:'hopperFull', hopper });
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inSweeper ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
