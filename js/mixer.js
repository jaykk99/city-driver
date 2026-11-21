// CITY DRIVER — concrete pouring: the Winnipeg Cement Mixer route job.
//
// Sixteen cars to buy, a bus to drive, an ambulance, a fire truck, a
// cruiser, a garbage truck, a tow truck, a snow plow and a street
// sweeper — but the city is always building, and every foundation,
// sidewalk and curb needs a pour. This closes that gap with the classic
// delivery loop, run the other way round from the collection jobs:
// drive the cement mixer in free roam and a route starts nearby — a
// chain of pour sites along the streets, each waiting for 1-2 loads of
// concrete. Pull up to a site, stop, and the chute pours one load every
// couple of seconds. The drum holds 8 loads — run dry mid-route and
// the beacon swings to the batch plant, where a stop refills the drum
// and banks what you poured. A finished route pays the loads plus a
// completion bonus and an on-time bonus per leg run on schedule. And
// concrete waits for no one: every 90 seconds on the road the oldest
// load in the drum starts to set and is lost, so dawdling costs loads
// even before the leg clock does. Rough driving costs you too: a hard
// shunt slops a load out of the drum, and wrecking the mixer loses
// everything still unbanked — only what you already invoiced at the
// plant is safe. Pay surges with the time of day and the weather,
// locked in when the route starts, the same as a cab fare. Career
// totals (routes, loads, earnings, on-time record, rating) persist in
// the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the pour
// cones, the HUD, the toasts and the cash; this module only decides
// what happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { roadTilesOf } from './taxi.js';

export const MIX_PAY_PER_LOAD = 20;   // $ per load poured, before surge
export const MIX_DRUM = 8;            // loads the drum holds at once
export const MIX_STOPS_MIN = 6;       // stops per route (short end)
export const MIX_STOPS_MAX = 9;       // stops per route (long end)
export const STOP_RADIUS = 8;         // m: stop this close to pour
export const POUR_TIME = 2.5;         // s stopped at a site to pour one load
export const REFILL_TIME = 2.5;       // s stopped at the plant to refill the drum
export const ROUTE_BONUS = 150;       // $ for finishing the whole route
export const ON_TIME_BONUS = 25;      // $ per leg run on schedule
export const LEG_MIN_DIST = 150;      // m between consecutive stops (short end)
export const LEG_MAX_DIST = 420;      // m between consecutive stops (long end)
export const PLANT_MIN_DIST = 150;    // m: plant this far from the first stop
export const ROUTE_DELAY_MIN = 10;    // s between routes (short end)
export const ROUTE_DELAY_MAX = 25;    // s between routes (long end)
export const ROUTE_COOLDOWN = 6;      // s after a route ends before the next one
export const ROUTE_RETRY = 5;         // s: wait before retrying when no route fits
export const LOADS_MIN = 1;           // loads waiting at a stop (short end)
export const LOADS_MAX = 2;           // loads waiting at a stop (long end)
export const SET_TIME = 90;           // s of route time before the oldest drum load sets
export const DAMAGE_SPILL_HP = 15;   // one hp drop this big slops a load out of the drum

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// One load pays the flat rate, times the surge locked in when the route
// started (1 in the day, 1.5 at night, more in a storm) — a night storm
// route pays more per load, end to end.
export function payPerLoad(surge = 1){
  const s = (typeof surge === 'number' && isFinite(surge) && surge > 0) ? surge : 1;
  return Math.round(MIX_PAY_PER_LOAD * s);
}

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the pour stop.
export function legParFor(distM){
  return Math.round(distM / 11 + 12);
}

// Route rating, 1-5 stars: a smooth on-schedule route is 5. Running
// more than half the legs late costs 2 stars, any late leg costs 1 —
// and a battered mixer costs 2 for heavy damage, 1 for light damage, on
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

export function isMixerCar(carDef){
  return !!carDef && carDef.extra === 'mixer';
}

// A road point near the mixer: the first stop of a route. Same retry shape
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

// The batch plant: a road point a real drive from the first stop, so
// refilling the drum costs a detour instead of a U-turn. 8 tries, then
// the last point stands.
export function plantPointNear(from, rng){
  const EDGE = GRID_HALF - 12;
  let p = { x:0, z:0 };
  for(let k = 0; k < 8; k++){
    const axisZ = rng() < 0.5, line = LINES[(rng() * LINES.length) | 0];
    const s = -EDGE + rng() * EDGE * 2, side = rng() < 0.5 ? 1 : -1;
    p = axisZ ? { x:line + side * LANE, z:s } : { x:s, z:line + side * LANE };
    if(dist(from, p) >= PLANT_MIN_DIST) break;
  }
  return p;
}

// Loads waiting at a stop: at least one — a stop with no pour is a
// wasted drive — and never more than the chute can pour in one visit.
export function loadsFor(rng){
  return LOADS_MIN + ((rng() * (LOADS_MAX - LOADS_MIN + 1)) | 0);
}

// ---------- custom maps ----------

// Stop pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets routes when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no routes.
export function mixerRoutePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The first stop: a road tile near the mixer, or the nearest road at all
  // when the mixer is off the streets; null when the map has no roads.
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

  // The batch plant: a road tile a real drive from the first stop, or the
  // farthest road when the map is too small; null when no road is at
  // least 60 m away at all.
  function plantNear(from, rng){
    if(!roads.length) return null;
    const f = toLocal(from);
    let best = null, bestD = -1;
    for(let k = 0; k < 8; k++){
      const t = roads[(rng() * roads.length) | 0];
      const d = Math.hypot(t.x - f.x, t.z - f.z);
      if(d > bestD){ best = t; bestD = d; }
      if(d >= PLANT_MIN_DIST) break;
    }
    return bestD >= 60 ? toWorld(best) : null;
  }
  return { stopNear, nextStop, plantNear };
}

// States: off (not in a cement mixer) -> idle (in one, waiting for a route)
// -> route (stops to pour, phase 'pour' or 'plant') -> cooldown
// -> idle. Events are returned from update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = { stopNear: stopPointNear, nextStop: nextStopPoint, plantNear: plantPointNear };
export function createMixerJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inMixer = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next route; cooldown: until idle
  let stops = null;              // the route: [{x, z, loads, poured}]
  let plant = null;              // where the drum gets refilled
  let phase = 'pour';            // 'pour' at the sites, 'plant' refill run
  let stopIdx = 0;               // next stop to pour at
  let legPar = 0, legSeconds = 0;
  let pourT = 0;                 // s stopped at the site, toward the next load
  let refillT = 0;               // s stopped at the plant, toward a full drum
  let setT = 0;                  // s of route time since the last load set in the drum
  let drum = 0;                  // loads aboard right now (starts full, pours down)
  let loadValue = 0;             // $ value of the loads poured so far (lost on a wreck)
  let banked = 0;                // $ value of loads already invoiced at the plant (safe)
  let routeLoads = 0;            // loads poured this route
  let onTimeLegs = 0;            // legs run on schedule this route
  let hpStart = 0, maxHp = 100, lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current route started — the pay is fixed at the first pour, so
  // the sky changing mid-route never reprices a route already running.
  let curSurge = 1, rideSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let routes = 0, loads = 0, earned = 0;
  let onTimeStops = 0, totalStops = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return ROUTE_DELAY_MIN + rng() * (ROUTE_DELAY_MAX - ROUTE_DELAY_MIN); }
  function stopCount(){ return MIX_STOPS_MIN + ((rng() * (MIX_STOPS_MAX - MIX_STOPS_MIN + 1)) | 0); }

  // Build a route starting near the mixer: first stop on a road nearby,
  // then a chain of legs a real drive apart, plus a batch plant a real
  // drive from the first stop. Null when the world cannot carry a route
  // (custom map with no roads, or legs too short).
  function buildRoute(ctx){
    const first = activePickers.stopNear(ctx.x, ctx.z, rng);
    if(!first) return null;
    const list = [{ x:first.x, z:first.z, loads:loadsFor(rng), poured:0 }];
    const count = stopCount();
    while(list.length < count){
      const prev = list[list.length - 1];
      const p = activePickers.nextStop(prev, rng);
      if(!p) return null;
      // A stop on top of the last one is a wasted drive: skip it and
      // try once more from the same point instead of ending the route.
      if(dist(prev, p) < 60) continue;
      list.push({ x:p.x, z:p.z, loads:loadsFor(rng), poured:0 });
    }
    const pl = activePickers.plantNear(first, rng);
    if(!pl) return null;
    return { stops:list, plant:pl };
  }

  // End a live route without pay. Returns true when a route was live.
  // The unbanked load goes with it — an unfinished route never pays.
  function endRoute(){
    const wasLive = state === 'route';
    state = inMixer ? 'cooldown' : 'off'; timer = ROUTE_COOLDOWN;
    drum = 0; loadValue = 0; banked = 0; stops = null; plant = null;
    stopIdx = 0; phase = 'pour'; pourT = 0; refillT = 0; setT = 0;
    return wasLive;
  }

  // Pour the loads the mixer owes at this stop, while it sits still.
  // Returns 'stopDone' when the stop cleared (or the route completed),
  // 'poured' when a load went in but the stop still owes more, or null
  // when nothing poured this frame.
  function pourLoads(dt, ctx, events){
    const stop = stops[stopIdx];
    let poured = 0;
    if(dist(ctx, stop) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
      pourT += dt;
      while(pourT >= POUR_TIME && stop.poured < stop.loads && drum > 0){
        pourT -= POUR_TIME;
        stop.poured++; drum--; routeLoads++;
        loadValue += payPerLoad(rideSurge);
        poured++;
      }
    }else{
      pourT = 0;
    }
    if(poured === 0) return null;
    events.push({ type:'loadPoured', poured, drum, loadValue,
      loadsLeft: stop.loads - stop.poured });
    if(stop.poured >= stop.loads){
      // Stop cleared: on time if the leg ran inside par.
      const onTime = legSeconds <= legPar;
      if(onTime) onTimeLegs++;
      stopIdx++;
      if(stopIdx >= stops.length){
        // Route complete: the banked loads plus the unbanked pours,
        // plus the completion bonus plus one on-time bonus per leg
        // run on schedule.
        const loadPay = banked + loadValue;
        const completionBonus = ROUTE_BONUS;
        const onTimeBonus = ON_TIME_BONUS * onTimeLegs;
        const total = loadPay + completionBonus + onTimeBonus;
        const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
        const rating = ratingFor(onTimeLegs, stops.length, damageFrac);
        ratingSum += rating; ratingCount++; routes++;
        loads += routeLoads; earned += total;
        onTimeStops += onTimeLegs; totalStops += stops.length;
        const stopTotal = stops.length, loadTotal = routeLoads;
        endRoute();
        state = 'cooldown'; timer = ROUTE_COOLDOWN;
        events.push({ type:'routeComplete', loads: loadTotal, loadPay, completionBonus, onTimeBonus,
          onTimeLegs, totalStops: stopTotal, rating, surge: rideSurge,
          ratingAvg: ratingCount ? ratingSum / ratingCount : 0, total });
      }else{
        const next = stops[stopIdx];
        legPar = legParFor(dist(stop, next)); legSeconds = 0; pourT = 0;
        events.push({ type:'stopCleared', stop:{ x:stop.x, z:stop.z }, loadsPoured: poured,
          drum, loadValue, onTime, stopIndex: stopIdx, stopsLeft: stops.length - stopIdx });
      }
      return 'stopDone';
    }
    return 'poured';
  }

  return {
    get state(){ return state; },
    get inMixer(){ return inMixer; },
    get active(){ return state === 'route'; },
    // 'pour' or 'plant': which leg of the route the mixer is on.
    get phase(){ return state === 'route' ? phase : 'pour'; },
    // Where the beacon + radar dot point: the plant while refilling, else
    // the next pour site. Null when no route is running.
    get target(){
      if(state !== 'route') return null;
      if(phase === 'plant') return plant;
      return stops[stopIdx];
    },
    // The next stop, with its loads — the HUD and the pour cones read
    // this (null when no route is running, or while the mixer is on a
    // plant run).
    get nextStop(){ return state === 'route' && phase === 'pour' ? stops[stopIdx] : null; },
    // Loads still waiting at the current stop (0 while on a plant run).
    get loadsLeft(){ return state === 'route' && phase === 'pour' ? stops[stopIdx].loads - stops[stopIdx].poured : 0; },
    // The batch plant point (null when no route is running).
    get plant(){ return state === 'route' ? plant : null; },
    get stopIndex(){ return stopIdx; },
    get stopCount(){ return stops ? stops.length : 0; },
    // Loads aboard right now.
    get drum(){ return drum; },
    get drumCapacity(){ return MIX_DRUM; },
    // $ value of the loads poured this route (0 when idle).
    get loadValue(){ return loadValue; },
    // $ value already invoiced at the plant this route (safe from a wreck).
    get banked(){ return banked; },
    // Seconds left on this leg's schedule (negative = running late).
    // The leg clock pauses on a plant run — refilling the drum is
    // required work, not dawdling.
    get timeLeft(){ return state === 'route' && phase === 'pour' ? legPar - legSeconds : 0; },
    // Loads poured this route so far (0 when idle).
    get loadsPoured(){ return routeLoads; },
    get routes(){ return routes; },
    get loads(){ return loads; },
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
    get career(){ return { routes, loads, earned, onTimeStops, totalStops, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      routes = n(c.routes); loads = n(c.loads); earned = n(c.earned);
      onTimeStops = n(c.onTimeStops); totalStops = n(c.totalStops);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live
    // route before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the mixer killed a live route.
    // Leaving the mixer ends the shift, so the unbanked load is lost either way.
    setInMixer(v){
      if(v === inMixer) return null;
      inMixer = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      drum = 0; loadValue = 0; banked = 0;
      if(state === 'route'){
        state = 'off'; stops = null; plant = null; stopIdx = 0; phase = 'pour'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the mixer, the garage, the menu: a live route ends, quietly,
    // and the unbanked load goes with it — an unfinished route never pays.
    // Returns true when a route was actually live. The cooldown only
    // applies when the mixer is still the car (setInMixer(true) re-arms idle).
    abandon(){
      const wasLive = state === 'route';
      const lost = loadValue;
      endRoute();
      return wasLive ? { abandoned:true, loadLost: lost } : false;
    },

    // Is the chute pouring right now, for this frame's position?
    // main.js reads this every frame for the HUD; the state machine
    // itself only needs it inside update().
    isPouring(ctx){
      if(state !== 'route' || phase !== 'pour' || !stops) return false;
      const stop = stops[stopIdx];
      return stop.poured < stop.loads && drum > 0
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
            stops = built.stops; plant = built.plant;
            stopIdx = 0; phase = 'pour'; pourT = 0; refillT = 0; setT = 0;
            drum = MIX_DRUM; loadValue = 0; banked = 0; routeLoads = 0; onTimeLegs = 0;
            legPar = legParFor(dist(ctx, stops[0])); legSeconds = 0;
            rideSurge = curSurge;   // the pay is fixed when the route starts
            hpStart = ctx.hp; maxHp = ctx.maxHp || 100; lastHp = ctx.hp;
            state = 'route';
            events.push({ type:'routeStart', stops:stops.map(p => ({ x:p.x, z:p.z, loads:p.loads })), plant:{ ...plant }, surge: rideSurge });
          }
        }
      }else if(state === 'route'){
        if(ctx.hp <= 0){
          // Wrecked: the route ends and the unbanked pours are lost with it.
          // What you already invoiced at the plant stays banked — it is
          // in the yard's books, not in the mixer.
          const lost = loadValue;
          const kept = banked;
          endRoute();
          events.push({ type:'routeFailed', reason:'wrecked', loadLost: lost, banked: kept });
          return events;
        }
        // A hard shunt slops a load out of the drum: one load per hit,
        // paced by the hp drop itself — and the drum space goes with it.
        if(drum > 0 && ctx.hp < lastHp - DAMAGE_SPILL_HP){
          drum--;
          events.push({ type:'spilled', drum, loadValue });
        }
        lastHp = ctx.hp;

        if(phase === 'plant'){
          // Refilling: stop at the plant and the drum fills while the
          // poured loads invoice. The leg clock is paused while this runs.
          if(dist(ctx, plant) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
            refillT += dt;
            if(refillT >= REFILL_TIME){
              banked += loadValue;
              const dumped = loadValue;
              drum = MIX_DRUM; loadValue = 0; refillT = 0; setT = 0; phase = 'pour';
              events.push({ type:'refilled', dumped, banked, drum });
            }
          }else{
            refillT = 0;
          }
        }else{
          legSeconds += dt;
          // Concrete waits for no one: every SET_TIME seconds on the
          // road the oldest load in the drum starts to set and is lost.
          // A fresh batch from the plant resets the clock.
          setT += dt;
          while(setT >= SET_TIME && drum > 0){
            setT -= SET_TIME;
            drum--;
            events.push({ type:'loadSet', drum });
          }
          const done = pourLoads(dt, ctx, events);
          if(done) return events;   // stop cleared or route complete: done for this frame
          const stop = stops[stopIdx];
          if(drum <= 0 && stop.poured < stop.loads){
            // Drum dry with pours still waiting: swing to the plant.
            phase = 'plant'; refillT = 0; pourT = 0;
            events.push({ type:'drumEmpty', drum });
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inMixer ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
