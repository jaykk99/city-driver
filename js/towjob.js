// CITY DRIVER — tow calls: the roadside-assistance job.
//
// The Interceptor chases suspects, the ambulance races patients, the
// fire truck sprays fires and the garbage truck runs its route — but
// when a car dies on the street, nobody comes for it. This closes that
// gap with the classic tow loop, on the same pattern as the ambulance
// calls: drive the Tow Truck in free roam and a call comes in — a
// stranded car waiting on a street somewhere in the city. Race to it,
// stop beside it and hold still while the winch hooks it up, then haul
// it to the nearest repair shop before the hitch gives out. The car
// trails behind the truck on the hook, so it is a load you protect:
// it rattles the longer it rides, every hard shunt knocks its
// condition down, and towing over the safe speed strains the hitch —
// strain it to the limit and the car drops off the hook where it sits,
// and you have to go back and hook it again. Get it to the shop and
// the call pays a base fee plus a speed bonus for beating par and a
// care bonus for how healthy it arrives; let its condition hit zero,
// or wreck the rig with it aboard, and the call is lost with nothing
// to show for it. Fares surge with the time of day and the weather,
// locked in when the call starts, the same as a cab fare. Career
// totals (calls, tows, earnings, rating) persist in the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the stranded
// car mesh, the HUD, the toasts and the cash; this module only decides
// what happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { REPAIR_SHOPS } from './repairshop.js';
import { roadTilesOf } from './taxi.js';

export const TOW_BASE_PAY = 180;        // $ for delivering a car to the shop
export const TOW_SPEED_BONUS_MAX = 150; // $ for beating par, before surge
export const TOW_CARE_BONUS_MAX = 100;  // $ for a healthy arrival, before surge
export const HOOK_RADIUS = 8;           // m: stop this close to hook the car up
export const SHOP_RADIUS = 14;          // m: stop this close to the shop doors
export const HOOK_TIME = 2.5;           // s stopped beside the car to winch it on
export const CALL_DELAY_MIN = 10;       // s between calls (short end)
export const CALL_DELAY_MAX = 25;       // s between calls (long end)
export const TOW_COOLDOWN = 6;          // s after a call ends before the next one
export const TOW_RETRY = 5;             // s: wait before retrying when no call fits
export const CONDITION_MIN = 60;        // stranded car condition at the call (worst)
export const CONDITION_MAX = 95;        // stranded car condition at the call (best)
export const CONDITION_DECAY_TOW = 0.25; // condition /s while riding on the hook
export const DAMAGE_JOLT_HP = 15;       // one hp drop this big jolts the towed car
export const DAMAGE_JOLT_CONDITION = 12; // condition lost to one hard shunt
export const TOW_DIST = 7.5;            // m: the towed car trails this far behind
export const TOW_SPEED_LIMIT = 20;      // m/s: towing faster strains the hitch
export const STRAIN_RATE = 3.5;         // strain /s per m/s over the limit
export const STRAIN_DECAY = 20;         // strain /s recovered under the limit
export const STRAIN_WARN = 50;          // strain where the hitch warning fires
export const STRAIN_MAX = 100;          // strain where the car drops off the hook

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// The shop that takes the car: the nearest repair shop to the
// breakdown, so the haul is a real drive but never across the map.
export function nearestShop(p){
  let best = REPAIR_SHOPS[0], bestD = Infinity;
  for(const s of REPAIR_SHOPS){
    const d = dist(p, s);
    if(d < bestD){ best = s; bestD = d; }
  }
  return { x:best.x, z:best.z, name:best.name };
}

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the hook-up stop.
export function legParFor(distM){
  return Math.round(distM / 11 + 12);
}

// Speed bonus: the full $150 at par or better, sliding to nothing at
// twice par — a slow drive still pays the base, it just earns no bonus.
export function speedBonusFor(totalSeconds, totalPar){
  if(totalPar <= 0) return 0;
  const frac = clamp(1 - (totalSeconds - totalPar) / totalPar, 0, 1);
  return Math.round(TOW_SPEED_BONUS_MAX * frac);
}

// Care bonus: a car that arrives in the shape it left in pays the full
// $100; one that arrives barely holding together pays almost nothing.
export function careBonusFor(condition){
  return Math.round(TOW_CARE_BONUS_MAX * clamp(condition, 0, 100) / 100);
}

// Call rating, 1-5 stars: a fast delivery of a healthy car is 5.
// Running late costs 1, a rough arrival costs 1 (condition under 60)
// or 2 (under 40). A late, battered delivery bottoms out at 1, never 0.
export function ratingFor(condition, onTime){
  let stars = 5;
  if(!onTime) stars -= 1;
  if(condition < 40) stars -= 2;
  else if(condition < 60) stars -= 1;
  return clamp(stars, 1, 5);
}

export function isTowCar(carDef){
  return !!carDef && carDef.extra === 'tow';
}

// A road point near the tow truck: where the stranded car is waiting.
// Same retry shape as the taxi hailers — 8 tries on the grid lines,
// then the last point.
export function breakdownPointNear(px, pz, rng){
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

// Stranded car condition at the call: never a walk-in (60+) and never
// perfect (95) — every call is a real breakdown with a real car to save.
export function conditionFor(rng){
  return CONDITION_MIN + ((rng() * (CONDITION_MAX - CONDITION_MIN + 1)) | 0);
}

// The stranded car's ride: a cheap car in a plain colour, drawn from
// the rng so the same call never looks twice alike.
const STRANDED_DEFS = ['sport', 'muscle', 'sedan', 'suv', 'truck', 'van'];
const STRANDED_COLORS = [0x6b7280, 0x7a1010, 0x1a3a6b, 0xf2f2f2, 0x2e3238, 0x8a5a1a];
export function strandedCarFor(rng){
  return {
    id: STRANDED_DEFS[(rng() * STRANDED_DEFS.length) | 0],
    color: STRANDED_COLORS[(rng() * STRANDED_COLORS.length) | 0],
  };
}

// The towed car trails the truck: it chases the point TOW_DIST behind
// the truck's tail and swings its heading after the truck's, so a turn
// sweeps it wide instead of teleporting it. Pure and in place, so the
// tests can drive it without a scene. t: { x, z, heading }.
export function stepTowed(t, tx, tz, th, dt){
  const fx = -Math.sin(th), fz = -Math.cos(th);
  const gx = tx - fx * TOW_DIST, gz = tz - fz * TOW_DIST;
  const dx = gx - t.x, dz = gz - t.z, d = Math.hypot(dx, dz);
  const k = 1 - Math.exp(-6 * dt);
  t.x += dx * k; t.z += dz * k;
  t.speed = dt > 0 ? (d * k) / dt : 0;
  const diff = Math.atan2(Math.sin(th - t.heading), Math.cos(th - t.heading));
  const turn = 3.2 * dt;
  t.heading += Math.max(-turn, Math.min(turn, diff));
  return t;
}

// ---------- custom maps ----------

// Call pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets calls when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no calls.
export function towPickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The breakdown: a road tile near the tow truck, or the nearest road
  // at all when the truck is off the streets; null when the map has no
  // roads.
  function breakdownNear(px, pz, rng){
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

  // The shop on a custom map: the road tile farthest from the
  // breakdown, so the haul is a real drive — null when no leg of at
  // least 60 m exists at all.
  function shopFor(breakdown, rng){
    if(!roads.length) return null;
    const f = toLocal(breakdown);
    let best = null, bestD = -1;
    for(let k = 0; k < 8; k++){
      const t = roads[(rng() * roads.length) | 0];
      const d = Math.hypot(t.x - f.x, t.z - f.z);
      if(d > bestD){ best = t; bestD = d; }
      if(d >= 150 && d <= 420) break;
    }
    if(bestD < 150){
      for(const t of roads){
        const d = Math.hypot(t.x - f.x, t.z - f.z);
        if(d > bestD){ best = t; bestD = d; }
      }
    }
    return bestD >= 60 ? { ...toWorld(best), name:'Repair Shop' } : null;
  }
  return { breakdownNear, shopFor };
}

// States: off (not in a tow truck) -> idle (in one, waiting for a call)
// -> respond (racing to the breakdown) -> hook (winching the car on)
// -> tow (car aboard, hauling to the shop) -> cooldown -> idle. A car
// that drops off the hook falls back to hook at the drop point, so a
// strained hitch costs time, not the call. Events are returned from
// update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = {
  breakdownNear: breakdownPointNear,
  shopFor: p => nearestShop(p),
};
export function createTowJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inTow = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next call; cooldown: until idle
  let breakdown = null;          // where the stranded car is waiting
  let shop = null;               // where the car has to go
  let strandedCar = null;        // the stranded car's ride, picked at call start
  let towed = null;              // the car on the hook: { x, z, heading, speed }
  let condition = 0;             // stranded car condition, 0-100
  let strain = 0;                // hitch strain, 0-100
  let strainWarned = false;      // the 'straining' event fires once per tow
  let hookT = 0;                 // s stopped beside the car, toward a hook-up
  let respondPar = 0, respondSeconds = 0;
  let towPar = 0, towSeconds = 0;
  let lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current call started — the pay is fixed at the first ring, so
  // the sky changing mid-call never reprices a call already running.
  let curSurge = 1, callSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let calls = 0, tows = 0, earned = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return CALL_DELAY_MIN + rng() * (CALL_DELAY_MAX - CALL_DELAY_MIN); }

  // Start a call near the tow truck: a breakdown on a road nearby and
  // the nearest repair shop a real drive away. Null when the world
  // cannot carry a call (custom map with no roads, or no shop leg).
  function buildCall(ctx){
    const b = activePickers.breakdownNear(ctx.x, ctx.z, rng);
    if(!b) return null;
    const s = activePickers.shopFor(b, rng);
    if(!s) return null;
    if(dist(b, s) < 60) return null;
    return { breakdown:b, shop:s };
  }

  // End a live call without pay. Returns true when a call was live.
  // The cooldown only applies when the tow truck is still the car
  // (setInTow(true) re-arms idle).
  function endCall(reason){
    const wasLive = state === 'respond' || state === 'hook' || state === 'tow';
    const hadCar = state === 'tow';
    state = inTow ? 'cooldown' : 'off'; timer = TOW_COOLDOWN;
    breakdown = null; shop = null; strandedCar = null; towed = null;
    condition = 0; strain = 0; hookT = 0;
    return { wasLive, hadCar, reason };
  }

  return {
    get state(){ return state; },
    get inTow(){ return inTow; },
    get active(){ return state === 'respond' || state === 'hook' || state === 'tow'; },
    // Where the beacon + radar dot point: the breakdown, then the shop.
    get target(){ return state === 'tow' ? shop : (state === 'respond' || state === 'hook') ? breakdown : null; },
    get breakdown(){ return (state === 'respond' || state === 'hook') ? breakdown : null; },
    get shop(){ return state === 'tow' ? shop : null; },
    // The stranded car's ride (null when no call is live).
    get strandedCar(){ return (state === 'respond' || state === 'hook' || state === 'tow') ? strandedCar : null; },
    // The car on the hook: where it sits while waiting, trailing the
    // truck once hooked (null when no call is live).
    get towed(){ return towed ? { ...towed } : null; },
    // Stranded car condition right now (0 when no call is live).
    get condition(){ return (state === 'respond' || state === 'hook' || state === 'tow') ? Math.max(0, Math.round(condition)) : 0; },
    // Hitch strain right now, 0-100 (0 when no car is on the hook).
    get strain(){ return state === 'tow' ? Math.max(0, Math.round(strain)) : 0; },
    // Hook-up progress, 0-1 (0 unless winching right now).
    get hookFrac(){ return state === 'hook' ? clamp(hookT / HOOK_TIME, 0, 1) : 0; },
    // Seconds left on this leg's schedule (negative = running late).
    get timeLeft(){
      if(state === 'respond') return respondPar - respondSeconds;
      if(state === 'tow') return towPar - towSeconds;
      return 0;
    },
    get calls(){ return calls; },
    get tows(){ return tows; },
    get earned(){ return earned; },
    get ratingCount(){ return ratingCount; },
    // Lifetime call rating, 1-5; 0 until the first delivered car.
    get ratingAvg(){ return ratingCount ? ratingSum / ratingCount : 0; },
    // Surge in effect: the locked-in rate during a call, the live rate
    // otherwise (1 in the day, 1.5 at night). The HUD reads this.
    get surge(){ return (state === 'respond' || state === 'hook' || state === 'tow') ? callSurge : curSurge; },
    // Career snapshot for the save file (plain numbers, no state).
    get career(){ return { calls, tows, earned, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      calls = n(c.calls); tows = n(c.tows); earned = n(c.earned);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live call
    // before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the tow truck killed a live call.
    // Leaving the tow truck ends the shift, so a car on the hook is lost either way.
    setInTow(v){
      if(v === inTow) return null;
      inTow = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      if(state === 'respond' || state === 'hook' || state === 'tow'){
        endCall('abandoned');
        state = 'off'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the tow truck, the garage, the menu: a live call ends,
    // quietly, and an unfinished call never pays. Returns true when a
    // call was actually live.
    abandon(){
      if(state !== 'respond' && state !== 'hook' && state !== 'tow') return false;
      endCall('abandoned');
      return true;
    },

    // Is the winch running right now, for this frame's position?
    // main.js reads this every frame for the HUD; the state machine
    // itself only needs it inside update().
    isHooking(ctx){
      if(state !== 'hook' || !breakdown) return false;
      return dist(ctx, breakdown) < HOOK_RADIUS && Math.abs(ctx.speed) < 1;
    },

    // ctx = { x, z, heading?, speed, hp, maxHp?, surge? }. Returns events for main.js.
    update(dt, ctx){
      const events = [];
      const s = ctx && ctx.surge;
      curSurge = (typeof s === 'number' && isFinite(s) && s > 0) ? s : 1;
      const heading = (ctx && typeof ctx.heading === 'number' && isFinite(ctx.heading)) ? ctx.heading : 0;
      if(state === 'idle'){
        timer -= dt;
        if(timer <= 0){
          const call = buildCall(ctx);
          if(!call){ timer = TOW_RETRY; }
          else{
            breakdown = call.breakdown; shop = call.shop;
            strandedCar = strandedCarFor(rng);
            condition = conditionFor(rng);
            strain = 0; strainWarned = false; hookT = 0;
            towed = { x:breakdown.x, z:breakdown.z, heading:rng() * Math.PI * 2, speed:0 };
            respondPar = legParFor(dist(ctx, breakdown)); respondSeconds = 0;
            towPar = 0; towSeconds = 0;
            callSurge = curSurge;   // the pay is fixed when the call comes in
            lastHp = ctx.hp;
            state = 'respond';
            events.push({ type:'callStart', breakdown:{ ...breakdown }, shop:{ ...shop },
              car:{ ...strandedCar }, condition: Math.round(condition), surge: callSurge, par: respondPar });
          }
        }
      }else if(state === 'respond'){
        respondSeconds += dt;
        if(ctx.hp <= 0){
          // Wrecked on the way: the call is lost, no car was aboard yet.
          endCall('wrecked');
          events.push({ type:'callFailed', reason:'wrecked', carAboard:false });
        }else if(dist(ctx, breakdown) < HOOK_RADIUS && Math.abs(ctx.speed) < 1){
          // On site: stop beside the breakdown and the winch starts.
          state = 'hook'; hookT = 0;
          events.push({ type:'onSite', breakdown:{ ...breakdown } });
        }
      }else if(state === 'hook'){
        if(ctx.hp <= 0){
          endCall('wrecked');
          events.push({ type:'callFailed', reason:'wrecked', carAboard:false });
        }else if(dist(ctx, breakdown) < HOOK_RADIUS && Math.abs(ctx.speed) < 1){
          hookT += dt;
          if(hookT >= HOOK_TIME){
            // Hooked: the car is on the hook, the clock switches to the
            // shop leg — the tow par is set from the breakdown, not from
            // where the truck happened to stop.
            towPar = legParFor(dist(breakdown, shop)); towSeconds = 0;
            strain = 0; strainWarned = false;
            lastHp = ctx.hp;
            state = 'tow';
            events.push({ type:'hooked', shop:{ ...shop }, par: towPar, timeLeft: towPar });
          }
        }else{
          hookT = 0;   // drove off mid-winch: the hook-up starts over
        }
      }else if(state === 'tow'){
        towSeconds += dt;
        // The car trails the truck on the hook.
        stepTowed(towed, ctx.x, ctx.z, heading, dt);
        condition -= CONDITION_DECAY_TOW * dt;
        // Towing over the safe speed strains the hitch; easing off lets
        // it recover. Strain it to the limit and the car drops off the
        // hook where it sits — go back and hook it again.
        const speed = Math.abs(ctx.speed);
        if(speed > TOW_SPEED_LIMIT) strain += (speed - TOW_SPEED_LIMIT) * STRAIN_RATE * dt;
        else strain = Math.max(0, strain - STRAIN_DECAY * dt);
        if(strain >= STRAIN_WARN && !strainWarned){
          strainWarned = true;
          events.push({ type:'straining', strain: Math.round(strain) });
        }
        if(condition <= 0){
          // The car fell apart on the hook: the call is lost, no pay.
          condition = 0;
          endCall('totalled');
          events.push({ type:'callFailed', reason:'totalled', carAboard:true,
            seconds: respondSeconds + towSeconds });
          return events;
        }
        if(strain >= STRAIN_MAX){
          // Dropped: the car sits where it fell, the winch starts over.
          strain = 0; strainWarned = false; hookT = 0;
          breakdown = { x:towed.x, z:towed.z };
          state = 'hook';
          events.push({ type:'unhooked', breakdown:{ ...breakdown }, condition: Math.round(condition) });
          return events;
        }
        if(ctx.hp <= 0){
          // Wrecked with the car aboard: the call is lost.
          endCall('wrecked');
          events.push({ type:'callFailed', reason:'wrecked', carAboard:true });
        }else{
          // A hard shunt while the car is aboard jolts it: one scare
          // per hit, paced by the hp drop itself.
          if(ctx.hp < lastHp - DAMAGE_JOLT_HP){
            condition -= DAMAGE_JOLT_CONDITION;
            lastHp = ctx.hp;
            if(condition <= 0){
              condition = 0;
              endCall('totalled');
              events.push({ type:'callFailed', reason:'totalled', carAboard:true,
                seconds: respondSeconds + towSeconds });
              return events;
            }
            events.push({ type:'jostled', condition: Math.round(condition) });
          }else{
            lastHp = ctx.hp;
          }
          if(dist(ctx, shop) < SHOP_RADIUS && Math.abs(ctx.speed) < 1){
            // Delivered: base + speed bonus + care bonus, all times the
            // surge locked in when the call came in.
            const totalSeconds = respondSeconds + towSeconds;
            const totalPar = respondPar + towPar;
            const onTime = totalSeconds <= totalPar;
            const speedBonus = speedBonusFor(totalSeconds, totalPar);
            const careBonus = careBonusFor(condition);
            const subtotal = TOW_BASE_PAY + speedBonus + careBonus;
            const total = Math.round(subtotal * callSurge);
            const rating = ratingFor(condition, onTime);
            ratingSum += rating; ratingCount++; calls++; tows++; earned += total;
            const cond = Math.round(condition);
            endCall('delivered');
            state = 'cooldown'; timer = TOW_COOLDOWN;
            events.push({ type:'delivered', base: TOW_BASE_PAY, speedBonus, careBonus,
              subtotal, total, rating, ratingAvg: ratingCount ? ratingSum / ratingCount : 0,
              condition: cond, onTime, calls, tows, earned, surge: callSurge,
              seconds: totalSeconds, par: totalPar });
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inTow ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
