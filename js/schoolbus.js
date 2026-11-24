// CITY DRIVER — school bus: the Winnipeg School Bus route job.
//
// Sixteen cars to buy, a bus to drive, an ambulance, a fire truck, a
// cruiser, a garbage truck, a tow truck, a snow plow, a street sweeper,
// a cement mixer, a mail truck and an ice cream truck — but the morning
// streets still want a school bus, and every corner has kids waiting
// for it. This closes that gap with the classic pickup loop: drive the
// school bus in free roam and a route starts nearby — a chain of pickup
// stops along the streets, each waiting for 1-4 kids. Pull up to a
// stop, hold still, and the kids climb aboard one every couple of
// seconds. The bus seats 30 — fill it mid-route and the beacon swings
// to the school, where a stop drops the kids off and banks what the
// run earned. A finished route pays the fares plus a completion bonus
// and an on-time bonus per leg run on schedule. One stop per route is
// a late-bell stop — double pay per kid, but its leg runs on a tighter
// par, so the fast money is the risky money. Kids wait for no one:
// a kid who has been aboard 120 s gets restless and hops off at the
// next chance, fare lost, and the clock starts over with the next kid.
// Rough driving costs you too: a hard shunt scares a kid off the bus,
// and wrecking the bus loses everything still unbanked — only what you
// already dropped off at the school is safe. Pay surges with the time
// of day and the weather, locked in when the route starts, the same as
// a cab fare. Career totals (routes, kids, earnings, on-time record,
// rating) persist in the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the kid
// markers, the HUD, the toasts and the cash; this module only decides
// what happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { roadTilesOf } from './taxi.js';

export const SCHOOL_PAY_PER_KID = 8;  // $ per kid taken to school, before surge
export const SCHOOL_BELL_PAY = 2;     // late-bell stop kids pay this multiple
export const SCHOOL_SEATS = 30;       // kids the bus seats at once
export const SCHOOL_STOPS_MIN = 6;    // stops per route (short end)
export const SCHOOL_STOPS_MAX = 9;    // stops per route (long end)
export const STOP_RADIUS = 8;         // m: stop this close to board
export const BOARD_TIME = 2.0;        // s stopped at a stop to board one kid
export const DROPOFF_TIME = 2.5;      // s stopped at the school to drop off
export const ROUTE_BONUS = 150;       // $ for finishing the whole route
export const ON_TIME_BONUS = 25;      // $ per leg run on schedule
export const LEG_MIN_DIST = 150;      // m between consecutive stops (short end)
export const LEG_MAX_DIST = 420;      // m between consecutive stops (long end)
export const SCHOOL_MIN_DIST = 150;   // m: school this far from the first stop
export const ROUTE_DELAY_MIN = 10;    // s between routes (short end)
export const ROUTE_DELAY_MAX = 25;    // s between routes (long end)
export const ROUTE_COOLDOWN = 6;      // s after a route ends before the next one
export const ROUTE_RETRY = 5;         // s: wait before retrying when no route fits
export const KIDS_MIN = 1;            // kids waiting at a stop (short end)
export const KIDS_MAX = 4;            // kids waiting at a stop (long end)
export const BELL_PAR = 0.8;          // late-bell leg par is this fraction of normal
export const RESTLESS_TIME = 120;     // s aboard before one kid gets restless and hops off
export const DAMAGE_SCARE_HP = 15;    // one hp drop this big scares a kid off the bus

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// One kid pays the flat rate, times the surge locked in when the
// route started (1 in the day, 1.5 at night, more in a storm) — and a
// late-bell kid pays double on top of that. A night storm route pays
// more per kid, end to end.
export function payPerKid(surge = 1, bell = false){
  const s = (typeof surge === 'number' && isFinite(surge) && surge > 0) ? surge : 1;
  return Math.round(SCHOOL_PAY_PER_KID * s * (bell ? SCHOOL_BELL_PAY : 1));
}

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the pickup stop.
// A late-bell leg runs on a tighter par — the bell will not wait.
export function legParFor(distM, bell = false){
  const par = Math.round(distM / 11 + 12);
  return bell ? Math.max(5, Math.round(par * BELL_PAR)) : par;
}

// Route rating, 1-5 stars: a smooth on-schedule route is 5. Running
// more than half the legs late costs 2 stars, any late leg costs 1 —
// and a battered school bus costs 2 for heavy damage, 1 for light
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

export function isSchoolBusCar(carDef){
  return !!carDef && carDef.extra === 'schoolbus';
}

// A road point near the school bus: the first stop of a route. Same
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

// The school: a road point a real drive from the first stop, so
// dropping the kids off costs a detour instead of a U-turn. 8 tries,
// then the last point stands.
export function schoolPointNear(from, rng){
  const EDGE = GRID_HALF - 12;
  let p = { x:0, z:0 };
  for(let k = 0; k < 8; k++){
    const axisZ = rng() < 0.5, line = LINES[(rng() * LINES.length) | 0];
    const s = -EDGE + rng() * EDGE * 2, side = rng() < 0.5 ? 1 : -1;
    p = axisZ ? { x:line + side * LANE, z:s } : { x:s, z:line + side * LANE };
    if(dist(from, p) >= SCHOOL_MIN_DIST) break;
  }
  return p;
}

// Kids waiting at a stop: at least one — a stop with no kids is a
// wasted drive — and never more than the bus can take in one visit.
export function kidsFor(rng){
  return KIDS_MIN + ((rng() * (KIDS_MAX - KIDS_MIN + 1)) | 0);
}

// ---------- custom maps ----------

// Stop pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets routes when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no routes.
export function schoolBusRoutePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The first stop: a road tile near the school bus, or the nearest road
  // at all when the bus is off the streets; null when the map has no roads.
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

  // The school: a road tile a real drive from the first stop, or the
  // farthest road when the map is too small; null when no road is at
  // least 60 m away at all.
  function schoolNear(from, rng){
    if(!roads.length) return null;
    const f = toLocal(from);
    let best = null, bestD = -1;
    for(let k = 0; k < 8; k++){
      const t = roads[(rng() * roads.length) | 0];
      const d = Math.hypot(t.x - f.x, t.z - f.z);
      if(d > bestD){ best = t; bestD = d; }
      if(d >= SCHOOL_MIN_DIST) break;
    }
    return bestD >= 60 ? toWorld(best) : null;
  }
  return { stopNear, nextStop, schoolNear };
}

// States: off (not in a school bus) -> idle (in one, waiting for a route)
// -> route (stops to pick up at, phase 'pickup' or 'school') -> cooldown
// -> idle. Events are returned from update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = { stopNear: stopPointNear, nextStop: nextStopPoint, schoolNear: schoolPointNear };
export function createSchoolBusJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inSchoolBus = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next route; cooldown: until idle
  let stops = null;              // the route: [{x, z, kids, boarded, bell}]
  let school = null;             // where the kids get dropped off
  let phase = 'pickup';          // 'pickup' at the stops, 'school' drop-off run
  let stopIdx = 0;               // next stop to pick up at
  let legPar = 0, legSeconds = 0;
  let boardT = 0;                // s stopped at the stop, toward the next kid
  let dropoffT = 0;              // s stopped at the school, toward an empty bus
  let restlessT = 0;             // s of route time since the last kid hopped off
  let aboardFares = [];          // $ fare per kid aboard, oldest first (the load)
  let loadValue = 0;             // $ value of the kids aboard right now (lost if they hop off)
  let banked = 0;                // $ value of kids already dropped at the school (safe)
  let routeKids = 0;             // kids boarded this route
  let onTimeLegs = 0;            // legs run on schedule this route
  let hpStart = 0, maxHp = 100, lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current route started — the pay is fixed at the first kid, so
  // the sky changing mid-route never reprices a route already running.
  let curSurge = 1, rideSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let routes = 0, kids = 0, earned = 0;
  let onTimeStops = 0, totalStops = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return ROUTE_DELAY_MIN + rng() * (ROUTE_DELAY_MAX - ROUTE_DELAY_MIN); }
  function stopCount(){ return SCHOOL_STOPS_MIN + ((rng() * (SCHOOL_STOPS_MAX - SCHOOL_STOPS_MIN + 1)) | 0); }

  // Kids aboard right now.
  const aboard = () => aboardFares.length;

  // A kid leaves the bus before reaching the school: their fare goes
  // with them — the ride only pays when the kid gets to school. The
  // oldest kid aboard leaves first, and an empty bus resets the
  // restless clock.
  function kidLeaves(){
    const fare = aboardFares.shift();
    if(typeof fare === 'number') loadValue -= fare;
    if(aboard() === 0) restlessT = 0;
  }

  // Build a route starting near the school bus: first stop on a road
  // nearby, then a chain of legs a real drive apart, plus a school a
  // real drive from the first stop. One stop is picked as the late-bell
  // stop — double pay, tighter par. Null when the world cannot carry a
  // route (custom map with no roads, or legs too short).
  function buildRoute(ctx){
    const first = activePickers.stopNear(ctx.x, ctx.z, rng);
    if(!first) return null;
    const list = [{ x:first.x, z:first.z, kids:kidsFor(rng), boarded:0, bell:false }];
    const count = stopCount();
    while(list.length < count){
      const prev = list[list.length - 1];
      const p = activePickers.nextStop(prev, rng);
      if(!p) return null;
      // A stop on top of the last one is a wasted drive: skip it and
      // try once more from the same point instead of ending the route.
      if(dist(prev, p) < 60) continue;
      list.push({ x:p.x, z:p.z, kids:kidsFor(rng), boarded:0, bell:false });
    }
    const sch = activePickers.schoolNear(first, rng);
    if(!sch) return null;
    list[(rng() * list.length) | 0].bell = true;
    return { stops:list, school:sch };
  }

  // End a live route without pay. Returns true when a route was live.
  // The unbanked load goes with it — an unfinished route never pays.
  function endRoute(){
    const wasLive = state === 'route';
    state = inSchoolBus ? 'cooldown' : 'off'; timer = ROUTE_COOLDOWN;
    aboardFares = []; loadValue = 0; banked = 0; stops = null; school = null;
    stopIdx = 0; phase = 'pickup'; boardT = 0; dropoffT = 0; restlessT = 0;
    return wasLive;
  }

  // Board the kids the bus owes at this stop, while it sits still.
  // Returns 'stopDone' when the stop cleared (or the route completed),
  // 'boarded' when a kid climbed aboard but the stop still owes more, or
  // null when nothing boarded this frame.
  function boardKids(dt, ctx, events){
    const stop = stops[stopIdx];
    let boarded = 0;
    if(dist(ctx, stop) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
      boardT += dt;
      while(boardT >= BOARD_TIME && stop.boarded < stop.kids && aboard() < SCHOOL_SEATS){
        boardT -= BOARD_TIME;
        const fare = payPerKid(rideSurge, stop.bell);
        stop.boarded++; aboardFares.push(fare); loadValue += fare; routeKids++;
        boarded++;
      }
    }else{
      boardT = 0;
    }
    if(boarded === 0) return null;
    events.push({ type:'kidBoarded', boarded, aboard: aboard(), loadValue,
      kidsLeft: stop.kids - stop.boarded, bell: stop.bell });
    if(stop.boarded >= stop.kids){
      // Stop cleared: on time if the leg ran inside par.
      const onTime = legSeconds <= legPar;
      if(onTime) onTimeLegs++;
      stopIdx++;
      if(stopIdx >= stops.length){
        // Route complete: the banked fares plus the kids still aboard —
        // finishing the run drops them at the school on the way in —
        // plus the completion bonus plus one on-time bonus per leg
        // run on schedule.
        const loadPay = banked + loadValue;
        const completionBonus = ROUTE_BONUS;
        const onTimeBonus = ON_TIME_BONUS * onTimeLegs;
        const total = loadPay + completionBonus + onTimeBonus;
        const damageFrac = maxHp > 0 ? (hpStart - ctx.hp) / maxHp : 0;
        const rating = ratingFor(onTimeLegs, stops.length, damageFrac);
        ratingSum += rating; ratingCount++; routes++;
        kids += routeKids; earned += total;
        onTimeStops += onTimeLegs; totalStops += stops.length;
        const stopTotal = stops.length, kidTotal = routeKids;
        endRoute();
        state = 'cooldown'; timer = ROUTE_COOLDOWN;
        events.push({ type:'routeComplete', kids: kidTotal, loadPay, completionBonus, onTimeBonus,
          onTimeLegs, totalStops: stopTotal, rating, surge: rideSurge,
          ratingAvg: ratingCount ? ratingSum / ratingCount : 0, total });
      }else{
        const next = stops[stopIdx];
        legPar = legParFor(dist(stop, next), next.bell); legSeconds = 0; boardT = 0;
        events.push({ type:'stopCleared', stop:{ x:stop.x, z:stop.z }, kidsBoarded: boarded,
          aboard: aboard(), loadValue, onTime, bell: stop.bell, stopIndex: stopIdx, stopsLeft: stops.length - stopIdx });
      }
      return 'stopDone';
    }
    return 'boarded';
  }

  return {
    get state(){ return state; },
    get inSchoolBus(){ return inSchoolBus; },
    get active(){ return state === 'route'; },
    // 'pickup' or 'school': which leg of the route the bus is on.
    get phase(){ return state === 'route' ? phase : 'pickup'; },
    // Where the beacon + radar dot point: the school while dropping off,
    // else the next pickup stop. Null when no route is running.
    get target(){
      if(state !== 'route') return null;
      if(phase === 'school') return school;
      return stops[stopIdx];
    },
    // The next stop, with its kids — the HUD and the kid markers
    // read this (null when no route is running, or while the bus is on
    // a school run).
    get nextStop(){ return state === 'route' && phase === 'pickup' ? stops[stopIdx] : null; },
    // Kids still waiting at the current stop (0 while on a school run).
    get kidsLeft(){ return state === 'route' && phase === 'pickup' ? stops[stopIdx].kids - stops[stopIdx].boarded : 0; },
    // Whether the current stop is the late-bell stop.
    get nextBell(){ return state === 'route' && phase === 'pickup' ? stops[stopIdx].bell : false; },
    // The school point (null when no route is running).
    get school(){ return state === 'route' ? school : null; },
    get stopIndex(){ return stopIdx; },
    get stopCount(){ return stops ? stops.length : 0; },
    // Kids aboard right now.
    get aboard(){ return aboard(); },
    get seatsCapacity(){ return SCHOOL_SEATS; },
    // $ value of the kids aboard this route (0 when idle).
    get loadValue(){ return loadValue; },
    // $ value already dropped off at the school this route (safe from a wreck).
    get banked(){ return banked; },
    // Seconds left on this leg's schedule (negative = running late).
    // The leg clock pauses on a school run — dropping the kids off is
    // required work, not dawdling.
    get timeLeft(){ return state === 'route' && phase === 'pickup' ? legPar - legSeconds : 0; },
    // Kids boarded this route so far (0 when idle).
    get kidsServed(){ return routeKids; },
    get routes(){ return routes; },
    get kids(){ return kids; },
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
    get career(){ return { routes, kids, earned, onTimeStops, totalStops, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      routes = n(c.routes); kids = n(c.kids); earned = n(c.earned);
      onTimeStops = n(c.onTimeStops); totalStops = n(c.totalStops);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live
    // route before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the school bus killed a live route.
    // Leaving the school bus ends the shift, so the unbanked load is lost either way.
    setInSchoolBus(v){
      if(v === inSchoolBus) return null;
      inSchoolBus = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      aboardFares = []; loadValue = 0; banked = 0;
      if(state === 'route'){
        state = 'off'; stops = null; school = null; stopIdx = 0; phase = 'pickup'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the school bus, the garage, the menu: a live route ends,
    // quietly, and the unbanked load goes with it — an unfinished route
    // never pays. Returns true when a route was actually live. The
    // cooldown only applies when the school bus is still the car
    // (setInSchoolBus(true) re-arms idle).
    abandon(){
      const wasLive = state === 'route';
      const lost = loadValue;
      endRoute();
      return wasLive ? { abandoned:true, loadLost: lost } : false;
    },

    // Is a kid climbing aboard right now, for this frame's position?
    // main.js reads this every frame for the HUD; the state machine
    // itself only needs it inside update().
    isBoarding(ctx){
      if(state !== 'route' || phase !== 'pickup' || !stops) return false;
      const stop = stops[stopIdx];
      return stop.boarded < stop.kids && aboard() < SCHOOL_SEATS
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
            stops = built.stops; school = built.school;
            stopIdx = 0; phase = 'pickup'; boardT = 0; dropoffT = 0; restlessT = 0;
            aboardFares = []; loadValue = 0; banked = 0; routeKids = 0; onTimeLegs = 0;
            legPar = legParFor(dist(ctx, stops[0]), stops[0].bell); legSeconds = 0;
            rideSurge = curSurge;   // the pay is fixed when the route starts
            hpStart = ctx.hp; maxHp = ctx.maxHp || 100; lastHp = ctx.hp;
            state = 'route';
            events.push({ type:'routeStart', stops:stops.map(p => ({ x:p.x, z:p.z, kids:p.kids, bell:p.bell })), school:{ ...school }, surge: rideSurge });
          }
        }
      }else if(state === 'route'){
        if(ctx.hp <= 0){
          // Wrecked: the route ends and the unbanked kids are lost with it.
          // What you already dropped off at the school stays banked — it
          // is in the school's books, not in the bus.
          const lost = loadValue;
          const kept = banked;
          endRoute();
          events.push({ type:'routeFailed', reason:'wrecked', loadLost: lost, banked: kept });
          return events;
        }
        // A hard shunt scares a kid off the bus: one kid per hit,
        // paced by the hp drop itself — and their fare goes with them.
        if(aboard() > 0 && ctx.hp < lastHp - DAMAGE_SCARE_HP){
          kidLeaves();
          events.push({ type:'scared', aboard: aboard(), loadValue });
        }
        lastHp = ctx.hp;

        if(phase === 'school'){
          // Dropping off: stop at the school and the kids file out
          // while their fares bank. The leg clock is paused while
          // this runs.
          if(dist(ctx, school) < STOP_RADIUS && Math.abs(ctx.speed) < 1){
            dropoffT += dt;
            if(dropoffT >= DROPOFF_TIME){
              banked += loadValue;
              const dumped = loadValue;
              aboardFares = []; loadValue = 0; dropoffT = 0; restlessT = 0; phase = 'pickup';
              events.push({ type:'droppedOff', dumped, banked, aboard: 0 });
            }
          }else{
            dropoffT = 0;
          }
        }else{
          legSeconds += dt;
          // Kids wait for no one: every RESTLESS_TIME seconds on the
          // road the oldest kid aboard gets restless and hops off,
          // fare lost. A fresh empty bus resets the clock.
          if(aboard() > 0){
            restlessT += dt;
            while(restlessT >= RESTLESS_TIME && aboard() > 0){
              restlessT -= RESTLESS_TIME;
              kidLeaves();
              events.push({ type:'restless', aboard: aboard(), loadValue });
            }
          }
          const done = boardKids(dt, ctx, events);
          if(done) return events;   // stop cleared or route complete: done for this frame
          const stop = stops[stopIdx];
          if(aboard() >= SCHOOL_SEATS && stop.boarded < stop.kids){
            // Bus full with kids still waiting: swing to the school.
            phase = 'school'; dropoffT = 0; boardT = 0;
            events.push({ type:'seatsFull', aboard: aboard() });
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inSchoolBus ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
