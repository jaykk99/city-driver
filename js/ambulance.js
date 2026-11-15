// CITY DRIVER — ambulance: the Winnipeg EMS paramedic job.
//
// The Interceptor has a light bar and the Transit Bus has a route, but
// no car in the city answers an emergency. This closes that gap with the
// classic paramedic loop, on the same pattern as the taxi fares and the
// bus routes: drive the ambulance in free roam and a call comes in — a
// patient waiting on a street somewhere in the city. Race to them and
// stop to load them aboard, then race the patient to the Health Sciences
// Centre on Arlington before their condition runs out. The patient is
// not a timer you watch — they are a condition you protect: it bleeds
// away with every second on the road, and every hard shunt while they
// are aboard knocks it down hard. Get them there alive and the call
// pays a base fee plus a speed bonus for beating par and a care bonus
// for how healthy they arrive; let the condition hit zero, or wreck the
// rig with them aboard, and the call is lost with nothing to show for
// it. Fares surge with the time of day and the weather, locked in when
// the call starts, the same as a cab fare. Career totals (calls, lives
// saved, earnings, rating) persist in the save.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the waiting
// ped, the HUD, the toasts and the cash; this module only decides what
// happens when.
import { LINES, LANE, GRID_HALF, HOSPITAL_SPAWN } from './world.js';
import { roadTilesOf } from './taxi.js';

export const AMB_BASE_PAY = 200;       // $ for delivering a patient alive
export const AMB_SPEED_BONUS_MAX = 150; // $ for beating par, before surge
export const AMB_CARE_BONUS_MAX = 100;  // $ for a healthy arrival, before surge
export const CALL_RADIUS = 8;          // m: stop this close to load the patient
export const HOSPITAL_RADIUS = 10;     // m: stop this close to the hospital doors
export const CALL_DELAY_MIN = 10;      // s between calls (short end)
export const CALL_DELAY_MAX = 25;      // s between calls (long end)
export const AMB_COOLDOWN = 6;         // s after a call ends before the next one
export const AMB_RETRY = 5;            // s: wait before retrying when no call fits
export const CONDITION_MIN = 55;       // patient condition at the call (worst)
export const CONDITION_MAX = 95;       // patient condition at the call (best)
export const CONDITION_DECAY_RESPOND = 0.5;   // condition /s while racing to the patient
export const CONDITION_DECAY_TRANSPORT = 0.35; // condition /s while racing to the hospital
export const CONDITION_CRITICAL = 30;  // below this the patient is critical
export const DAMAGE_JOLT_HP = 15;      // one hp drop this big jolts the patient
export const DAMAGE_JOLT_CONDITION = 12; // condition lost to one hard shunt

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// The hospital doors: the road point beside the Health Sciences Centre
// block on Arlington, the same spot the player respawns at after a
// hospital visit. One hospital, one destination — every call ends here.
export const HOSPITAL_POINT = { x:HOSPITAL_SPAWN.x, z:HOSPITAL_SPAWN.z };

// Par time for one leg: city pace ~11 m/s (the deliver missions' base
// pace) plus a grace window for lights, traffic and the loading stop.
export function legParFor(distM){
  return Math.round(distM / 11 + 12);
}

// Speed bonus: the full $150 at par or better, sliding to nothing at
// twice par — a slow drive still pays the base, it just earns no bonus.
export function speedBonusFor(totalSeconds, totalPar){
  if(totalPar <= 0) return 0;
  const frac = clamp(1 - (totalSeconds - totalPar) / totalPar, 0, 1);
  return Math.round(AMB_SPEED_BONUS_MAX * frac);
}

// Care bonus: a patient who arrives in the shape they left in pays the
// full $100; one who arrives barely alive pays almost nothing.
export function careBonusFor(condition){
  return Math.round(AMB_CARE_BONUS_MAX * clamp(condition, 0, 100) / 100);
}

// Call rating, 1-5 stars: a fast delivery of a healthy patient is 5.
// Running late costs 1, a rough arrival costs 1 (condition under 60)
// or 2 (under 40). A late, battered delivery bottoms out at 1, never 0.
export function ratingFor(condition, onTime){
  let stars = 5;
  if(!onTime) stars -= 1;
  if(condition < 40) stars -= 2;
  else if(condition < 60) stars -= 1;
  return clamp(stars, 1, 5);
}

export function isAmbulanceCar(carDef){
  return !!carDef && carDef.extra === 'ambulance';
}

// A road point near the ambulance: where the patient is waiting. Same
// retry shape as the taxi hailers — 8 tries on the grid lines, then the
// last point.
export function patientPointNear(px, pz, rng){
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

// Patient condition at the call: never a walk-in (55+) and never perfect
// (95) — every call is a real emergency with real time pressure.
export function conditionFor(rng){
  return CONDITION_MIN + ((rng() * (CONDITION_MAX - CONDITION_MIN + 1)) | 0);
}

// ---------- custom maps ----------

// Call pickers for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets calls when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no calls.
export function ambulancePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The patient: a road tile near the ambulance, or the nearest road at
  // all when the ambulance is off the streets; null when the map has no
  // roads.
  function callNear(px, pz, rng){
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

  // The hospital on a custom map: the road tile farthest from the
  // patient, so the transport is a real drive — null when no leg of at
  // least 60 m exists at all.
  function hospitalFor(patient, rng){
    if(!roads.length) return null;
    const f = toLocal(patient);
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
    return bestD >= 60 ? toWorld(best) : null;
  }
  return { callNear, hospitalFor };
}

// States: off (not in an ambulance) -> idle (in one, waiting for a call)
// -> respond (racing to the patient) -> transport (patient aboard, racing
// to the hospital) -> cooldown -> idle. Events are returned from update()
// for main.js to toast/pay on.
const MAIN_CITY_PICKERS = {
  callNear: patientPointNear,
  hospitalFor: () => ({ ...HOSPITAL_POINT }),
};
export function createAmbulanceJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inAmb = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next call; cooldown: until idle
  let patient = null;            // where the patient is waiting
  let hospital = null;           // where the patient has to go
  let condition = 0;             // patient condition, 0-100
  let criticalWarned = false;    // the 'critical' event fires once per call
  let respondPar = 0, respondSeconds = 0;
  let transportPar = 0, transportSeconds = 0;
  let lastHp = 100;
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current call started — the pay is fixed at the first ring, so
  // the sky changing mid-call never reprices a call already running.
  let curSurge = 1, callSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let calls = 0, saved = 0, earned = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return CALL_DELAY_MIN + rng() * (CALL_DELAY_MAX - CALL_DELAY_MIN); }

  // Start a call near the ambulance: a patient on a road nearby and a
  // hospital a real drive away. Null when the world cannot carry a call
  // (custom map with no roads, or no hospital leg).
  function buildCall(ctx){
    const p = activePickers.callNear(ctx.x, ctx.z, rng);
    if(!p) return null;
    const h = activePickers.hospitalFor(p, rng);
    if(!h) return null;
    if(dist(p, h) < 60) return null;
    return { patient:p, hospital:h };
  }

  // End a live call without pay. Returns true when a call was live.
  // The cooldown only applies when the ambulance is still the car
  // (setInAmbulance(true) re-arms idle).
  function endCall(reason){
    const wasLive = state === 'respond' || state === 'transport';
    const hadPatient = state === 'transport';
    state = inAmb ? 'cooldown' : 'off'; timer = AMB_COOLDOWN;
    patient = null; hospital = null; condition = 0;
    return { wasLive, hadPatient, reason };
  }

  return {
    get state(){ return state; },
    get inAmbulance(){ return inAmb; },
    get active(){ return state === 'respond' || state === 'transport'; },
    // Where the beacon + radar dot point: the patient, then the hospital.
    get target(){ return state === 'respond' ? patient : state === 'transport' ? hospital : null; },
    get patient(){ return state === 'respond' ? patient : null; },
    get hospital(){ return state === 'transport' ? hospital : null; },
    // Patient condition right now (0 when no call is live).
    get condition(){ return (state === 'respond' || state === 'transport') ? Math.max(0, Math.round(condition)) : 0; },
    // Seconds left on this leg's schedule (negative = running late).
    get timeLeft(){
      if(state === 'respond') return respondPar - respondSeconds;
      if(state === 'transport') return transportPar - transportSeconds;
      return 0;
    },
    // The siren is on while a call is live — the HUD and the beacon read this.
    get siren(){ return state === 'respond' || state === 'transport'; },
    get calls(){ return calls; },
    get saved(){ return saved; },
    get earned(){ return earned; },
    get ratingCount(){ return ratingCount; },
    // Lifetime call rating, 1-5; 0 until the first delivered patient.
    get ratingAvg(){ return ratingCount ? ratingSum / ratingCount : 0; },
    // Surge in effect: the locked-in rate during a call, the live rate
    // otherwise (1 in the day, 1.5 at night). The HUD reads this.
    get surge(){ return (state === 'respond' || state === 'transport') ? callSurge : curSurge; },
    // Career snapshot for the save file (plain numbers, no state).
    get career(){ return { calls, saved, earned, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      calls = n(c.calls); saved = n(c.saved); earned = n(c.earned);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live call
    // before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the ambulance killed a live call.
    // Leaving the ambulance ends the shift, so a patient aboard is lost either way.
    setInAmbulance(v){
      if(v === inAmb) return null;
      inAmb = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      if(state === 'respond' || state === 'transport'){
        endCall('abandoned');
        state = 'off'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the ambulance, the garage, the menu: a live call ends,
    // quietly, and an unfinished call never pays. Returns true when a
    // call was actually live.
    abandon(){
      if(state !== 'respond' && state !== 'transport') return false;
      endCall('abandoned');
      return true;
    },

    // ctx = { x, z, speed, hp, maxHp?, surge? }. Returns events for main.js.
    update(dt, ctx){
      const events = [];
      const s = ctx && ctx.surge;
      curSurge = (typeof s === 'number' && isFinite(s) && s > 0) ? s : 1;
      if(state === 'idle'){
        timer -= dt;
        if(timer <= 0){
          const call = buildCall(ctx);
          if(!call){ timer = AMB_RETRY; }
          else{
            patient = call.patient; hospital = call.hospital;
            condition = conditionFor(rng);
            criticalWarned = condition < CONDITION_CRITICAL;
            respondPar = legParFor(dist(ctx, patient)); respondSeconds = 0;
            transportPar = 0; transportSeconds = 0;
            callSurge = curSurge;   // the pay is fixed when the call comes in
            lastHp = ctx.hp;
            state = 'respond';
            events.push({ type:'callStart', patient:{ ...patient }, hospital:{ ...hospital },
              condition: Math.round(condition), surge: callSurge, par: respondPar });
          }
        }
      }else if(state === 'respond'){
        respondSeconds += dt;
        condition -= CONDITION_DECAY_RESPOND * dt;
        if(condition <= 0){
          // Too slow: the patient died before the ambulance got there.
          condition = 0;
          endCall('patientLost');
          events.push({ type:'callFailed', reason:'patientLost', patientAboard:false,
            seconds: respondSeconds });
          return events;
        }
        if(condition < CONDITION_CRITICAL && !criticalWarned){
          criticalWarned = true;
          events.push({ type:'critical', condition: Math.round(condition) });
        }
        if(ctx.hp <= 0){
          // Wrecked on the way: the call is lost, nobody was aboard yet.
          endCall('wrecked');
          events.push({ type:'callFailed', reason:'wrecked', patientAboard:false });
        }else if(dist(ctx, patient) < CALL_RADIUS && Math.abs(ctx.speed) < 1){
          // Loaded: the patient is aboard, the clock switches to the
          // hospital leg — the transport par is set from the patient,
          // not from where the ambulance happened to stop.
          transportPar = legParFor(dist(patient, hospital)); transportSeconds = 0;
          lastHp = ctx.hp;
          state = 'transport';
          events.push({ type:'loaded', hospital:{ ...hospital }, condition: Math.round(condition),
            par: transportPar, timeLeft: transportPar });
        }
      }else if(state === 'transport'){
        transportSeconds += dt;
        condition -= CONDITION_DECAY_TRANSPORT * dt;
        if(condition <= 0){
          // The patient died in the back: the call is lost, no pay.
          condition = 0;
          endCall('patientLost');
          events.push({ type:'callFailed', reason:'patientLost', patientAboard:true,
            seconds: respondSeconds + transportSeconds });
          return events;
        }
        if(condition < CONDITION_CRITICAL && !criticalWarned){
          criticalWarned = true;
          events.push({ type:'critical', condition: Math.round(condition) });
        }
        if(ctx.hp <= 0){
          // Wrecked with the patient aboard: the call is lost.
          endCall('wrecked');
          events.push({ type:'callFailed', reason:'wrecked', patientAboard:true });
        }else{
          // A hard shunt while the patient is aboard jolts them: one
          // scare per hit, paced by the hp drop itself.
          if(ctx.hp < lastHp - DAMAGE_JOLT_HP){
            condition -= DAMAGE_JOLT_CONDITION;
            lastHp = ctx.hp;
            if(condition <= 0){
              condition = 0;
              endCall('patientLost');
              events.push({ type:'callFailed', reason:'patientLost', patientAboard:true,
                seconds: respondSeconds + transportSeconds });
              return events;
            }
            events.push({ type:'jostled', condition: Math.round(condition) });
          }else{
            lastHp = ctx.hp;
          }
          if(dist(ctx, hospital) < HOSPITAL_RADIUS && Math.abs(ctx.speed) < 1){
            // Delivered alive: base + speed bonus + care bonus, all
            // times the surge locked in when the call came in.
            const totalSeconds = respondSeconds + transportSeconds;
            const totalPar = respondPar + transportPar;
            const onTime = totalSeconds <= totalPar;
            const speedBonus = speedBonusFor(totalSeconds, totalPar);
            const careBonus = careBonusFor(condition);
            const subtotal = AMB_BASE_PAY + speedBonus + careBonus;
            const total = Math.round(subtotal * callSurge);
            const rating = ratingFor(condition, onTime);
            ratingSum += rating; ratingCount++; calls++; saved++; earned += total;
            const cond = Math.round(condition);
            endCall('delivered');
            state = 'cooldown'; timer = AMB_COOLDOWN;
            events.push({ type:'delivered', base: AMB_BASE_PAY, speedBonus, careBonus,
              subtotal, total, rating, ratingAvg: ratingCount ? ratingSum / ratingCount : 0,
              condition: cond, onTime, calls, saved, earned, surge: callSurge,
              seconds: totalSeconds, par: totalPar });
          }
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inAmb ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
