// CITY DRIVER — ice cream truck: the Winnipeg Ice Cream Truck route job.
//
// Sixteen cars to buy, a bus to drive, an ambulance, a fire truck, a
// cruiser, a garbage truck, a tow truck, a snow plow, a street sweeper,
// a cement mixer and a mail truck — but the summer streets still want
// ice cream, and every park, corner and block needs a stop. This closes
// that gap with the classic serving loop: drive the ice cream truck in
// free roam and a route starts nearby — a chain of serving stops along
// the streets, each waiting for 1-3 cones. Pull up to a stop, hold
// still, and the server hands over one cone every couple of seconds
// while the kids line up. The freezer holds 15 cones — run dry
// mid-route and the beacon swings to the depot, where a stop restocks
// the freezer and banks what you served. A finished route pays the
// cones plus a completion bonus and an on-time bonus per leg run on
// schedule. One stop per route is a birthday party — double pay per
// cone, but its leg runs on a tighter par, so the fast money is the
// risky money. Ice cream waits for no one: every 75 s on the road the
// oldest cone in the freezer melts and is lost. Rough driving costs
// you too: a hard shunt drops a cone, and wrecking the truck loses
// everything still unbanked — only what you already invoiced at the
// depot is safe. Pay surges with the time of day and the weather,
// locked in when the route starts, the same as a cab fare. Career
// totals (routes, cones, earnings, on-time record, rating) persist in
// the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the cone
// markers, the HUD, the toasts and the cash; this module only decides
// what happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { roadTilesOf } from './taxi.js';

export const ICE_PAY_PER_CONE = 14; // $ per cone served, before surge
export const ICE_PARTY_PAY = 2;     // birthday party cones pay this multiple
export const ICE_FREEZER = 15;      // cones the freezer holds at once
export const ICE_STOPS_MIN = 6;     // stops per route (short end)
export const ICE_STOPS_MAX = 9;     // stops per route (long end)
export const STOP_RADIUS = 8;       // m: stop this close to serve
export const SERVE_TIME = 2.0;      // s stopped at a stop to serve one cone
export const RESTOCK_TIME = 2.5;    // s stopped at the depot to restock
export const ROUTE_BONUS = 150;     // $ for finishing the whole route
export const ON_TIME_BONUS = 25;    // $ per leg run on schedule
export const LEG_MIN_DIST = 150;    // m between consecutive stops (short end)
export const LEG_MAX_DIST = 420;    // m between consecutive stops (long end)
export const DEPOT_MIN_DIST = 150;  // m: depot this far from the first stop
export const ROUTE_DELAY_MIN = 10;  // s between routes (short end)
export const ROUTE_DELAY_MAX = 25;  // s between routes (long end)
export const ROUTE_COOLDOWN = 6;    // s after a route ends before the next one
export const ROUTE_RETRY = 5;       // s: wait before retrying when no route fits
export const CONES_MIN = 1;         // cones waiting at a stop (short end)
export const CONES_MAX = 3;         // cones waiting at a stop (long end)
export const PARTY_PAR = 0.8;       // party leg par is this fraction of normal
export const MELT_TIME = 75;        // s on the road before one cone melts
export const DAMAGE_DROP_HP = 15;   // one hp drop this big drops a cone from the freezer

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// One cone pays the flat rate, times the surge locked in when the
// route started (1 in the day, 1.5 at night, more in a storm) — and a
// party cone pays double on top of that. A night storm route pays
// more per cone, end to end.
export function payPerCone(surge = 1, party = false){
  const s = (typeof surge === 'number' && isFinite(surge) && surge > 0) ? surge : 1;
  return Math.round(ICE_PAY_PER_CONE * s * (party ? ICE_PARTY_PAY : 1));
}

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the serving stop.
// A party leg runs on a tighter par — the birthday cake is due sooner.
export function legParFor(distM, party = false){
  const par = Math.round(distM / 11 + 12);
  return party ? Math.max(5, Math.round(par * PARTY_PAR)) : par;
}

// Route rating, 1-5 stars: a smooth on-schedule route is 5. Running
// more than half the legs late costs 2 stars, any late leg costs 1 —
// and a battered ice cream truck costs 2 for heavy damage, 1 for light
// damage, on top. A late, battered route bottoms out at 1, never 0.
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

export function isIceCreamCar(carDef){
  return !!carDef && carDef.extra === 'icecream';
}

// A road point near the ice cream truck: the first stop of a route. Same
// retry shape as the taxi hailers — 8 tries on the grid lines, then the
// last point.
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

// The depot: a road point a real drive from the first stop, so
// restocking the freezer costs a detour instead of a U-turn. 8 tries,
// then the last point stands.
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

// Cones waiting at a stop: at least one — a stop with no customers is
// a wasted drive — and never more than the server can hand over in one visit.
export function conesFor(rng){
  return CONES_MIN + ((rng() * (CONES_MAX - CONES_MIN + 1)) | 0);
}

// ---------- custom maps ----------

// Stop pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets routes when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no routes.
export function iceCreamRoutePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The first stop: a road tile near the ice cream truck, or the nearest road
  // at all when the truck is off the streets; null when the map has no roads.
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

// States: off (not in an ice cream truck) -> idle (in one, waiting for a route)
// -> route (stops to serve, phase 'serve' or 'depot') -> cooldown
// -> idle. Events are returned from update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = { stopNear: stopPointNear, nextStop: nextStopPoint, depotNear: depotPointNear };
export function createIceCreamJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inIceCream = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next route; cooldown: until idle
  let stops = null;              // the route: [{x, z, cones, served, party}]
  let depot = null;              // where the freezer gets restocked
  let phase = 'serve';           // 'serve' at the stops, 'depot' restock run
  let stopIdx = 0;               // next stop to serve at
  let legPar = 0, legSeconds = 0;
  let serveT = 0;                // s stopped at the stop, toward the next cone
  let restockT = 0;              // s stopped at the depot, toward a full freezer
  let meltT = 0;                 // s of route time since the last cone melted
  let freezer = 0;               // cones aboard right now (starts full, serves down)
  let loadValue = 0;             // $ value of the cones served so far (lost on a wreck)
  let banked = 0;                // $ value of cones already invoiced at the depot (safe)
  let routeCones = 0;            // cones served this route
  let onTimeLegs = 0;            // legs run on schedule this route
  let hpStart = 0, maxHp = 100, lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current route started — the pay is fixed at the first cone, so
  // the sky changing mid-route never reprices a route already running.
  let curSurge = 1, rideSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let routes = 0, cones = 0, earned = 0;
  let onTimeStops = 0, totalStops = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return ROUTE_DELAY_MIN + rng() * (ROUTE_DELAY_MAX - ROUTE_DELAY_MIN); }
  function stopCount(){ return ICE_STOPS_MIN + ((rng() * (ICE_STOPS_MAX - ICE_STOPS_MIN + 1)) | 0); }

  // Build a route starting near the ice cream truck: first stop on a road
  // nearby, then a chain of legs a real drive apart, plus a depot a real
  // drive from the first stop. One stop is picked as the birthday party —
  // double pay, tighter par. Null when the world cannot carry a route
  // (custom map with no roads, or legs too short).
  function buildRoute(ctx){
    const first = activePickers.stopNear(ctx.x, ctx.z, rng);
    if(!first) return null;
    const list = [{ x:first.x, z:first.z, cones:conesFor(rng), served:0, party:false }];
    const count = stopCount();
    while(list.length < count){
      const prev = list[list.length - 1];
      const p = activePickers.nextStop(prev, rng);
      if(!p) return null;
      // A stop on top of the last one is a wasted drive: skip it and
      // try once more from the same point instead of ending the route.
      if(dist(prev, p) < 60) continue;
      list.push({ x:p.x, z:p.z, cones:conesFor(rng), served:0, party:false });
    }
    const dep = activePickers.depotNear(first, rng);
    if(!dep) return null;
    list[(rng() * list.length) | 0].party = true;
    return { stops:list, depot:dep };
  }

  // End a live route without pay. Returns true when a route was live.
  // The unbanked load goes with it — an unfinished route never pays.
  function endRoute(){
    const wasLive = state === 'route';
    state = inIceCream ? 'cooldown' : 'off'; timer = ROUTE_COOLDOWN;
    freezer = 0; loadValue = 0; banked = 0; stops = null; depot = null;
    stopIdx = 0; phase = 'serve'; serveT = 0; restockT = 0; meltT = 0;
    return wasLive;
  }

  // Serve the cones the truck owes at this stop, while it sits still.
  // Returns 'stopDone' when the stop cleared (or the route completed),
  // 'served' when a cone went out but the stop still owes more, or
  // null when nothing served this frame.
  function serveCones(dt, ctx, events){
    const stop = stops[stopIdx];
    let served = 0;
    if(dist(ctx, stop) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
      serveT += dt;
      while(serveT >= SERVE_TIME && stop.served < stop.cones && freezer > 0){
        serveT -= SERVE_TIME;
        stop.served++; freezer--; routeCones++;
        loadValue += payPerCone(rideSurge, stop.party);
        served++;
      }
    }else{
      serveT = 0;
    }
    if(served === 0) return null;
    events.push({ type:'coneServed', served, freezer, loadValue,
      conesLeft: stop.cones - stop.served, party: stop.party });
    if(stop.served >= stop.cones){
      // Stop cleared: on time if the leg ran inside par.
      const onTime = legSeconds <= legPar;
      if(onTime) onTimeLegs++;
      stopIdx++;
      if(stopIdx >= stops.length){
        // Route complete: the banked cones plus the unbanked serves,
        // plus the completion bonus plus one on-time bonus per leg
        // run on schedule.
        const loadPay = banked + loadValue;
        const completionBonus = ROUTE_BONUS;
        const onTimeBonus = ON_TIME_BONUS * onTimeLegs;
        const total = loadPay + completionBonus + onTimeBonus;
        const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
        const rating = ratingFor(onTimeLegs, stops.length, damageFrac);
        ratingSum += rating; ratingCount++; routes++;
        cones += routeCones; earned += total;
        onTimeStops += onTimeLegs; totalStops += stops.length;
        const stopTotal = stops.length, coneTotal = routeCones;
        endRoute();
        state = 'cooldown'; timer = ROUTE_COOLDOWN;
        events.push({ type:'routeComplete', cones: coneTotal, loadPay, completionBonus, onTimeBonus,
          onTimeLegs, totalStops: stopTotal, rating, surge: rideSurge,
          ratingAvg: ratingCount ? ratingSum / ratingCount : 0, total });
      }else{
        const next = stops[stopIdx];
        legPar = legParFor(dist(stop, next), next.party); legSeconds = 0; serveT = 0;
        events.push({ type:'stopCleared', stop:{ x:stop.x, z:stop.z }, conesServed: served,
          freezer, loadValue, onTime, party: stop.party, stopIndex: stopIdx, stopsLeft: stops.length - stopIdx });
      }
      return 'stopDone';
    }
    return 'served';
  }

  return {
    get state(){ return state; },
    get inIceCream(){ return inIceCream; },
    get active(){ return state === 'route'; },
    // 'serve' or 'depot': which leg of the route the truck is on.
    get phase(){ return state === 'route' ? phase : 'serve'; },
    // Where the beacon + radar dot point: the depot while restocking,
    // else the next serving stop. Null when no route is running.
    get target(){
      if(state !== 'route') return null;
      if(phase === 'depot') return depot;
      return stops[stopIdx];
    },
    // The next stop, with its cones — the HUD and the cone markers
    // read this (null when no route is running, or while the truck is on
    // a depot run).
    get nextStop(){ return state === 'route' && phase === 'serve' ? stops[stopIdx] : null; },
    // Cones still waiting at the current stop (0 while on a depot run).
    get conesLeft(){ return state === 'route' && phase === 'serve' ? stops[stopIdx].cones - stops[stopIdx].served : 0; },
    // Whether the current stop is the birthday party stop.
    get nextParty(){ return state === 'route' && phase === 'serve' ? stops[stopIdx].party : false; },
    // The depot point (null when no route is running).
    get depot(){ return state === 'route' ? depot : null; },
    get stopIndex(){ return stopIdx; },
    get stopCount(){ return stops ? stops.length : 0; },
    // Cones aboard right now.
    get freezer(){ return freezer; },
    get freezerCapacity(){ return ICE_FREEZER; },
    // $ value of the cones served this route (0 when idle).
    get loadValue(){ return loadValue; },
    // $ value already invoiced at the depot this route (safe from a wreck).
    get banked(){ return banked; },
    // Seconds left on this leg's schedule (negative = running late).
    // The leg clock pauses on a depot run — restocking the freezer is
    // required work, not dawdling.
    get timeLeft(){ return state === 'route' && phase === 'serve' ? legPar - legSeconds : 0; },
    // Cones served this route so far (0 when idle).
    get conesServed(){ return routeCones; },
    get routes(){ return routes; },
    get cones(){ return cones; },
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
    get career(){ return { routes, cones, earned, onTimeStops, totalStops, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      routes = n(c.routes); cones = n(c.cones); earned = n(c.earned);
      onTimeStops = n(c.onTimeStops); totalStops = n(c.totalStops);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live
    // route before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the ice cream truck killed a live route.
    // Leaving the ice cream truck ends the shift, so the unbanked load is lost either way.
    setInIceCream(v){
      if(v === inIceCream) return null;
      inIceCream = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      freezer = 0; loadValue = 0; banked = 0;
      if(state === 'route'){
        state = 'off'; stops = null; depot = null; stopIdx = 0; phase = 'serve'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the ice cream truck, the garage, the menu: a live route ends,
    // quietly, and the unbanked load goes with it — an unfinished route
    // never pays. Returns true when a route was actually live. The
    // cooldown only applies when the ice cream truck is still the car
    // (setInIceCream(true) re-arms idle).
    abandon(){
      const wasLive = state === 'route';
      const lost = loadValue;
      endRoute();
      return wasLive ? { abandoned:true, loadLost: lost } : false;
    },

    // Is the server handing over a cone right now, for this frame's position?
    // main.js reads this every frame for the HUD; the state machine
    // itself only needs it inside update().
    isServing(ctx){
      if(state !== 'route' || phase !== 'serve' || !stops) return false;
      const stop = stops[stopIdx];
      return stop.served < stop.cones && freezer > 0
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
            stopIdx = 0; phase = 'serve'; serveT = 0; restockT = 0; meltT = 0;
            freezer = ICE_FREEZER; loadValue = 0; banked = 0; routeCones = 0; onTimeLegs = 0;
            legPar = legParFor(dist(ctx, stops[0]), stops[0].party); legSeconds = 0;
            rideSurge = curSurge;   // the pay is fixed when the route starts
            hpStart = ctx.hp; maxHp = ctx.maxHp || 100; lastHp = ctx.hp;
            state = 'route';
            events.push({ type:'routeStart', stops:stops.map(p => ({ x:p.x, z:p.z, cones:p.cones, party:p.party })), depot:{ ...depot }, surge: rideSurge });
          }
        }
      }else if(state === 'route'){
        if(ctx.hp <= 0){
          // Wrecked: the route ends and the unbanked cones are lost with it.
          // What you already invoiced at the depot stays banked — it is
          // in the depot's books, not in the truck.
          const lost = loadValue;
          const kept = banked;
          endRoute();
          events.push({ type:'routeFailed', reason:'wrecked', loadLost: lost, banked: kept });
          return events;
        }
        // A hard shunt drops a cone out of the freezer: one cone per hit,
        // paced by the hp drop itself — and the freezer space goes with it.
        if(freezer > 0 && ctx.hp < lastHp - DAMAGE_DROP_HP){
          freezer--;
          events.push({ type:'damaged', freezer, loadValue });
        }
        lastHp = ctx.hp;

        if(phase === 'depot'){
          // Restocking: stop at the depot and the freezer fills while
          // the served cones invoice. The leg clock is paused while
          // this runs.
          if(dist(ctx, depot) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
            restockT += dt;
            if(restockT >= RESTOCK_TIME){
              banked += loadValue;
              const dumped = loadValue;
              freezer = ICE_FREEZER; loadValue = 0; restockT = 0; meltT = 0; phase = 'serve';
              events.push({ type:'restocked', dumped, banked, freezer });
            }
          }else{
            restockT = 0;
          }
        }else{
          legSeconds += dt;
          // Ice cream waits for no one: every MELT_TIME seconds on the
          // road the oldest cone in the freezer melts and is lost.
          // A fresh batch from the depot resets the clock.
          meltT += dt;
          while(meltT >= MELT_TIME && freezer > 0){
            meltT -= MELT_TIME;
            freezer--;
            events.push({ type:'melted', freezer });
          }
          const done = serveCones(dt, ctx, events);
          if(done) return events;   // stop cleared or route complete: done for this frame
          const stop = stops[stopIdx];
          if(freezer <= 0 && stop.served < stop.cones){
            // Freezer empty with cones still waiting: swing to the depot.
            phase = 'depot'; restockT = 0; serveT = 0;
            events.push({ type:'freezerEmpty', freezer });
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inIceCream ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
