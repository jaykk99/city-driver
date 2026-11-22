// CITY DRIVER — mail delivery: the Winnipeg Mail Truck route job.
//
// Sixteen cars to buy, a bus to drive, an ambulance, a fire truck, a
// cruiser, a garbage truck, a tow truck, a snow plow, a street sweeper
// and a cement mixer — but the city still gets mail, and every
// doorstep, office and porch needs a drop. This closes that gap with
// the classic delivery loop, run the other way round from the
// collection jobs: drive the mail truck in free roam and a route
// starts nearby — a chain of delivery stops along the streets, each
// waiting for 1-2 parcels. Pull up to a stop, hold still, and the
// carrier drops one parcel every couple of seconds while the resident
// signs for it. The satchel holds 12 parcels — run dry mid-route and
// the beacon swings to the post office, where a stop restocks the
// satchel and banks what you delivered. A finished route pays the
// parcels plus a completion bonus and an on-time bonus per leg run on
// schedule. One stop per route is a priority stop — registered mail,
// double pay per parcel, but its leg runs on a tighter par, so the
// fast money is the risky money. Rough driving costs you too: a hard
// shunt breaks a parcel in the satchel, and wrecking the truck loses
// everything still unbanked — only what you already invoiced at the
// post office is safe. Pay surges with the time of day and the
// weather, locked in when the route starts, the same as a cab fare.
// Career totals (routes, parcels, earnings, on-time record, rating)
// persist in the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the parcel
// markers, the HUD, the toasts and the cash; this module only decides
// what happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { roadTilesOf } from './taxi.js';

export const MAIL_PAY_PER_PARCEL = 18; // $ per parcel delivered, before surge
export const MAIL_PRIORITY_PAY = 2;    // priority (registered) parcels pay this multiple
export const MAIL_SATCHEL = 12;        // parcels the satchel holds at once
export const MAIL_STOPS_MIN = 6;       // stops per route (short end)
export const MAIL_STOPS_MAX = 9;       // stops per route (long end)
export const STOP_RADIUS = 8;          // m: stop this close to deliver
export const DROP_TIME = 2.0;          // s stopped at a stop to drop one parcel
export const RESTOCK_TIME = 2.5;       // s stopped at the post office to restock
export const ROUTE_BONUS = 150;        // $ for finishing the whole route
export const ON_TIME_BONUS = 25;       // $ per leg run on schedule
export const LEG_MIN_DIST = 150;       // m between consecutive stops (short end)
export const LEG_MAX_DIST = 420;       // m between consecutive stops (long end)
export const OFFICE_MIN_DIST = 150;    // m: post office this far from the first stop
export const ROUTE_DELAY_MIN = 10;     // s between routes (short end)
export const ROUTE_DELAY_MAX = 25;     // s between routes (long end)
export const ROUTE_COOLDOWN = 6;       // s after a route ends before the next one
export const ROUTE_RETRY = 5;          // s: wait before retrying when no route fits
export const PARCELS_MIN = 1;          // parcels waiting at a stop (short end)
export const PARCELS_MAX = 2;          // parcels waiting at a stop (long end)
export const PRIORITY_PAR = 0.8;       // priority leg par is this fraction of normal
export const DAMAGE_BREAK_HP = 15;     // one hp drop this big breaks a parcel in the satchel

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// One parcel pays the flat rate, times the surge locked in when the
// route started (1 in the day, 1.5 at night, more in a storm) — and a
// priority parcel pays double on top of that. A night storm route pays
// more per parcel, end to end.
export function payPerParcel(surge = 1, priority = false){
  const s = (typeof surge === 'number' && isFinite(surge) && surge > 0) ? surge : 1;
  return Math.round(MAIL_PAY_PER_PARCEL * s * (priority ? MAIL_PRIORITY_PAY : 1));
}

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the drop stop.
// A priority leg runs on a tighter par — the registered mail is due sooner.
export function legParFor(distM, priority = false){
  const par = Math.round(distM / 11 + 12);
  return priority ? Math.max(5, Math.round(par * PRIORITY_PAR)) : par;
}

// Route rating, 1-5 stars: a smooth on-schedule route is 5. Running
// more than half the legs late costs 2 stars, any late leg costs 1 —
// and a battered mail truck costs 2 for heavy damage, 1 for light
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

export function isMailCar(carDef){
  return !!carDef && carDef.extra === 'mail';
}

// A road point near the mail truck: the first stop of a route. Same
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

// The post office: a road point a real drive from the first stop, so
// restocking the satchel costs a detour instead of a U-turn. 8 tries,
// then the last point stands.
export function postOfficePointNear(from, rng){
  const EDGE = GRID_HALF - 12;
  let p = { x:0, z:0 };
  for(let k = 0; k < 8; k++){
    const axisZ = rng() < 0.5, line = LINES[(rng() * LINES.length) | 0];
    const s = -EDGE + rng() * EDGE * 2, side = rng() < 0.5 ? 1 : -1;
    p = axisZ ? { x:line + side * LANE, z:s } : { x:s, z:line + side * LANE };
    if(dist(from, p) >= OFFICE_MIN_DIST) break;
  }
  return p;
}

// Parcels waiting at a stop: at least one — a stop with no delivery is
// a wasted drive — and never more than the carrier can drop in one visit.
export function parcelsFor(rng){
  return PARCELS_MIN + ((rng() * (PARCELS_MAX - PARCELS_MIN + 1)) | 0);
}

// ---------- custom maps ----------

// Stop pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets routes when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no routes.
export function mailRoutePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The first stop: a road tile near the mail truck, or the nearest road
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

  // The post office: a road tile a real drive from the first stop, or
  // the farthest road when the map is too small; null when no road is at
  // least 60 m away at all.
  function officeNear(from, rng){
    if(!roads.length) return null;
    const f = toLocal(from);
    let best = null, bestD = -1;
    for(let k = 0; k < 8; k++){
      const t = roads[(rng() * roads.length) | 0];
      const d = Math.hypot(t.x - f.x, t.z - f.z);
      if(d > bestD){ best = t; bestD = d; }
      if(d >= OFFICE_MIN_DIST) break;
    }
    return bestD >= 60 ? toWorld(best) : null;
  }
  return { stopNear, nextStop, officeNear };
}

// States: off (not in a mail truck) -> idle (in one, waiting for a route)
// -> route (stops to deliver, phase 'deliver' or 'office') -> cooldown
// -> idle. Events are returned from update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = { stopNear: stopPointNear, nextStop: nextStopPoint, officeNear: postOfficePointNear };
export function createMailJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inMail = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next route; cooldown: until idle
  let stops = null;              // the route: [{x, z, parcels, dropped, priority}]
  let office = null;             // where the satchel gets restocked
  let phase = 'deliver';         // 'deliver' at the stops, 'office' restock run
  let stopIdx = 0;               // next stop to deliver at
  let legPar = 0, legSeconds = 0;
  let dropT = 0;                 // s stopped at the stop, toward the next parcel
  let restockT = 0;              // s stopped at the post office, toward a full satchel
  let satchel = 0;               // parcels aboard right now (starts full, drops down)
  let loadValue = 0;             // $ value of the parcels delivered so far (lost on a wreck)
  let banked = 0;                // $ value of parcels already invoiced at the office (safe)
  let routeParcels = 0;          // parcels delivered this route
  let onTimeLegs = 0;            // legs run on schedule this route
  let hpStart = 0, maxHp = 100, lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current route started — the pay is fixed at the first drop, so
  // the sky changing mid-route never reprices a route already running.
  let curSurge = 1, rideSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let routes = 0, parcels = 0, earned = 0;
  let onTimeStops = 0, totalStops = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return ROUTE_DELAY_MIN + rng() * (ROUTE_DELAY_MAX - ROUTE_DELAY_MIN); }
  function stopCount(){ return MAIL_STOPS_MIN + ((rng() * (MAIL_STOPS_MAX - MAIL_STOPS_MIN + 1)) | 0); }

  // Build a route starting near the mail truck: first stop on a road
  // nearby, then a chain of legs a real drive apart, plus a post office
  // a real drive from the first stop. One stop is picked as the priority
  // stop — registered mail, double pay, tighter par. Null when the world
  // cannot carry a route (custom map with no roads, or legs too short).
  function buildRoute(ctx){
    const first = activePickers.stopNear(ctx.x, ctx.z, rng);
    if(!first) return null;
    const list = [{ x:first.x, z:first.z, parcels:parcelsFor(rng), dropped:0, priority:false }];
    const count = stopCount();
    while(list.length < count){
      const prev = list[list.length - 1];
      const p = activePickers.nextStop(prev, rng);
      if(!p) return null;
      // A stop on top of the last one is a wasted drive: skip it and
      // try once more from the same point instead of ending the route.
      if(dist(prev, p) < 60) continue;
      list.push({ x:p.x, z:p.z, parcels:parcelsFor(rng), dropped:0, priority:false });
    }
    const off = activePickers.officeNear(first, rng);
    if(!off) return null;
    list[(rng() * list.length) | 0].priority = true;
    return { stops:list, office:off };
  }

  // End a live route without pay. Returns true when a route was live.
  // The unbanked load goes with it — an unfinished route never pays.
  function endRoute(){
    const wasLive = state === 'route';
    state = inMail ? 'cooldown' : 'off'; timer = ROUTE_COOLDOWN;
    satchel = 0; loadValue = 0; banked = 0; stops = null; office = null;
    stopIdx = 0; phase = 'deliver'; dropT = 0; restockT = 0;
    return wasLive;
  }

  // Drop the parcels the truck owes at this stop, while it sits still.
  // Returns 'stopDone' when the stop cleared (or the route completed),
  // 'dropped' when a parcel went out but the stop still owes more, or
  // null when nothing dropped this frame.
  function dropParcels(dt, ctx, events){
    const stop = stops[stopIdx];
    let dropped = 0;
    if(dist(ctx, stop) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
      dropT += dt;
      while(dropT >= DROP_TIME && stop.dropped < stop.parcels && satchel > 0){
        dropT -= DROP_TIME;
        stop.dropped++; satchel--; routeParcels++;
        loadValue += payPerParcel(rideSurge, stop.priority);
        dropped++;
      }
    }else{
      dropT = 0;
    }
    if(dropped === 0) return null;
    events.push({ type:'parcelDelivered', dropped, satchel, loadValue,
      parcelsLeft: stop.parcels - stop.dropped, priority: stop.priority });
    if(stop.dropped >= stop.parcels){
      // Stop cleared: on time if the leg ran inside par.
      const onTime = legSeconds <= legPar;
      if(onTime) onTimeLegs++;
      stopIdx++;
      if(stopIdx >= stops.length){
        // Route complete: the banked parcels plus the unbanked drops,
        // plus the completion bonus plus one on-time bonus per leg
        // run on schedule.
        const loadPay = banked + loadValue;
        const completionBonus = ROUTE_BONUS;
        const onTimeBonus = ON_TIME_BONUS * onTimeLegs;
        const total = loadPay + completionBonus + onTimeBonus;
        const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
        const rating = ratingFor(onTimeLegs, stops.length, damageFrac);
        ratingSum += rating; ratingCount++; routes++;
        parcels += routeParcels; earned += total;
        onTimeStops += onTimeLegs; totalStops += stops.length;
        const stopTotal = stops.length, parcelTotal = routeParcels;
        endRoute();
        state = 'cooldown'; timer = ROUTE_COOLDOWN;
        events.push({ type:'routeComplete', parcels: parcelTotal, loadPay, completionBonus, onTimeBonus,
          onTimeLegs, totalStops: stopTotal, rating, surge: rideSurge,
          ratingAvg: ratingCount ? ratingSum / ratingCount : 0, total });
      }else{
        const next = stops[stopIdx];
        legPar = legParFor(dist(stop, next), next.priority); legSeconds = 0; dropT = 0;
        events.push({ type:'stopCleared', stop:{ x:stop.x, z:stop.z }, parcelsDelivered: dropped,
          satchel, loadValue, onTime, priority: stop.priority, stopIndex: stopIdx, stopsLeft: stops.length - stopIdx });
      }
      return 'stopDone';
    }
    return 'dropped';
  }

  return {
    get state(){ return state; },
    get inMail(){ return inMail; },
    get active(){ return state === 'route'; },
    // 'deliver' or 'office': which leg of the route the truck is on.
    get phase(){ return state === 'route' ? phase : 'deliver'; },
    // Where the beacon + radar dot point: the post office while
    // restocking, else the next delivery stop. Null when no route is running.
    get target(){
      if(state !== 'route') return null;
      if(phase === 'office') return office;
      return stops[stopIdx];
    },
    // The next stop, with its parcels — the HUD and the parcel markers
    // read this (null when no route is running, or while the truck is on
    // an office run).
    get nextStop(){ return state === 'route' && phase === 'deliver' ? stops[stopIdx] : null; },
    // Parcels still waiting at the current stop (0 while on an office run).
    get parcelsLeft(){ return state === 'route' && phase === 'deliver' ? stops[stopIdx].parcels - stops[stopIdx].dropped : 0; },
    // Whether the current stop is the priority (registered mail) stop.
    get nextPriority(){ return state === 'route' && phase === 'deliver' ? stops[stopIdx].priority : false; },
    // The post office point (null when no route is running).
    get office(){ return state === 'route' ? office : null; },
    get stopIndex(){ return stopIdx; },
    get stopCount(){ return stops ? stops.length : 0; },
    // Parcels aboard right now.
    get satchel(){ return satchel; },
    get satchelCapacity(){ return MAIL_SATCHEL; },
    // $ value of the parcels delivered this route (0 when idle).
    get loadValue(){ return loadValue; },
    // $ value already invoiced at the post office this route (safe from a wreck).
    get banked(){ return banked; },
    // Seconds left on this leg's schedule (negative = running late).
    // The leg clock pauses on an office run — restocking the satchel is
    // required work, not dawdling.
    get timeLeft(){ return state === 'route' && phase === 'deliver' ? legPar - legSeconds : 0; },
    // Parcels delivered this route so far (0 when idle).
    get parcelsDelivered(){ return routeParcels; },
    get routes(){ return routes; },
    get parcels(){ return parcels; },
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
    get career(){ return { routes, parcels, earned, onTimeStops, totalStops, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      routes = n(c.routes); parcels = n(c.parcels); earned = n(c.earned);
      onTimeStops = n(c.onTimeStops); totalStops = n(c.totalStops);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live
    // route before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the mail truck killed a live route.
    // Leaving the mail truck ends the shift, so the unbanked load is lost either way.
    setInMail(v){
      if(v === inMail) return null;
      inMail = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      satchel = 0; loadValue = 0; banked = 0;
      if(state === 'route'){
        state = 'off'; stops = null; office = null; stopIdx = 0; phase = 'deliver'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the mail truck, the garage, the menu: a live route ends,
    // quietly, and the unbanked load goes with it — an unfinished route
    // never pays. Returns true when a route was actually live. The
    // cooldown only applies when the mail truck is still the car
    // (setInMail(true) re-arms idle).
    abandon(){
      const wasLive = state === 'route';
      const lost = loadValue;
      endRoute();
      return wasLive ? { abandoned:true, loadLost: lost } : false;
    },

    // Is the carrier dropping a parcel right now, for this frame's position?
    // main.js reads this every frame for the HUD; the state machine
    // itself only needs it inside update().
    isDelivering(ctx){
      if(state !== 'route' || phase !== 'deliver' || !stops) return false;
      const stop = stops[stopIdx];
      return stop.dropped < stop.parcels && satchel > 0
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
            stops = built.stops; office = built.office;
            stopIdx = 0; phase = 'deliver'; dropT = 0; restockT = 0;
            satchel = MAIL_SATCHEL; loadValue = 0; banked = 0; routeParcels = 0; onTimeLegs = 0;
            legPar = legParFor(dist(ctx, stops[0]), stops[0].priority); legSeconds = 0;
            rideSurge = curSurge;   // the pay is fixed when the route starts
            hpStart = ctx.hp; maxHp = ctx.maxHp || 100; lastHp = ctx.hp;
            state = 'route';
            events.push({ type:'routeStart', stops:stops.map(p => ({ x:p.x, z:p.z, parcels:p.parcels, priority:p.priority })), office:{ ...office }, surge: rideSurge });
          }
        }
      }else if(state === 'route'){
        if(ctx.hp <= 0){
          // Wrecked: the route ends and the unbanked parcels are lost with it.
          // What you already invoiced at the post office stays banked — it is
          // in the post office's books, not in the truck.
          const lost = loadValue;
          const kept = banked;
          endRoute();
          events.push({ type:'routeFailed', reason:'wrecked', loadLost: lost, banked: kept });
          return events;
        }
        // A hard shunt breaks a parcel in the satchel: one parcel per hit,
        // paced by the hp drop itself — and the satchel space goes with it.
        if(satchel > 0 && ctx.hp < lastHp - DAMAGE_BREAK_HP){
          satchel--;
          events.push({ type:'damaged', satchel, loadValue });
        }
        lastHp = ctx.hp;

        if(phase === 'office'){
          // Restocking: stop at the post office and the satchel fills
          // while the delivered parcels invoice. The leg clock is paused
          // while this runs.
          if(dist(ctx, office) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
            restockT += dt;
            if(restockT >= RESTOCK_TIME){
              banked += loadValue;
              const dumped = loadValue;
              satchel = MAIL_SATCHEL; loadValue = 0; restockT = 0; phase = 'deliver';
              events.push({ type:'restocked', dumped, banked, satchel });
            }
          }else{
            restockT = 0;
          }
        }else{
          legSeconds += dt;
          const done = dropParcels(dt, ctx, events);
          if(done) return events;   // stop cleared or route complete: done for this frame
          const stop = stops[stopIdx];
          if(satchel <= 0 && stop.dropped < stop.parcels){
            // Satchel empty with parcels still waiting: swing to the post office.
            phase = 'office'; restockT = 0; dropT = 0;
            events.push({ type:'satchelEmpty', satchel });
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inMail ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
