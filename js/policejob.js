// CITY DRIVER — police patrol: the Winnipeg Police Service dispatch job.
//
// The wanted system chases YOU. This flips it: drive the Interceptor in
// free roam and dispatch sends you after a fleeing suspect. Race to them,
// stay on their tail until their nerve breaks — or PIT them to a stop,
// faster but rougher — and bring them in before they lose you in the
// city. Pays a $200 base plus up to $150 for beating par and up to $100
// for a clean arrest (no shunts), all surged like a cab fare. A suspect
// you lose sight of for too long gets clean away; wreck the cruiser and
// the call is lost with nothing to show for it. Career totals (calls,
// arrests, earnings, rating) persist in the save.
//
// Pure state machine + pay math + suspect flee AI, no THREE and no
// document, so the whole loop is unit-testable in node. main.js owns the
// beacon, the suspect car, the HUD, the toasts and the cash; this module
// only decides what happens when.
import { LINES, LANE, GRID_HALF } from './world.js';
import { laneXZ } from './traffic.js';
import { roadTilesOf } from './taxi.js';

export const POLICE_BASE_PAY = 200;        // $ for bringing a suspect in
export const POLICE_SPEED_BONUS_MAX = 150; // $ for beating par, before surge
export const POLICE_CLEAN_BONUS_MAX = 100; // $ for a clean arrest, before surge
export const CLEAN_BONUS_PER_SHUNT = 25;  // $ lost per hard shunt on the call
export const PURSUE_RADIUS = 40;          // m: this close and the chase is on
export const STOP_RADIUS = 14;            // m: this close and the pressure builds
export const PIT_RADIUS = 6;              // m: a ram this close counts as a PIT
export const PIT_SPEED_MIN = 8;           // m/s: player speed for a ram to count
export const PIT_PROGRESS = 25;           // stop progress from one PIT
export const PIT_COOLDOWN = 1.5;          // s between PITs
export const PRESSURE_RATE = 100 / 16;    // stop progress /s while tailing close
export const SUSPECT_SPEED = 15;          // m/s: flee speed (a cruiser catches it)
export const SUSPECT_ACCEL = 4;           // m/s^2: how fast the suspect gets going
export const SPUN_SPEED = 3;              // m/s: suspect crawl after a PIT
export const SPUN_TIME = 2.5;             // s a PIT keeps the suspect spun out
export const ESCAPE_RADIUS = 130;         // m: this far and they are getting away
export const ESCAPE_WARN_RADIUS = 100;    // m: warn once when they pull away
export const ESCAPE_TIME = 10;            // s out of range before they escape
export const RESPOND_LIMIT = 90;          // s to get eyes on them before dispatch cancels
export const CALL_DELAY_MIN = 10;         // s between calls (short end)
export const CALL_DELAY_MAX = 25;         // s between calls (long end)
export const POLICE_COOLDOWN = 6;         // s after a call ends before the next one
export const POLICE_RETRY = 5;            // s: wait before retrying when no call fits
export const SHUNT_HP_DROP = 15;          // hp lost in one hit counts as a shunt
export const PURSUE_PAR = 26;             // s: par for the stop leg (tail + PITs + grace)

// Suspect cars: cheap getaway rides in dark colours, never a job car.
export const SUSPECT_DEFS = ['sport', 'muscle', 'sedan', 'suv', 'kaze'];
export const SUSPECT_COLORS = [0x14161c, 0x7a1010, 0x1a3a6b, 0x2e3238, 0x6b7280];

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Par time for the respond leg: city pace ~11 m/s (the deliver missions'
// base pace) plus a grace window for lights, traffic and the catch-up.
export function legParFor(distM){
  return Math.round(distM / 11 + 12);
}

// Speed bonus: the full $150 at par or better, sliding to nothing at
// twice par — a slow arrest still pays the base, it just earns no bonus.
export function speedBonusFor(totalSeconds, totalPar){
  if(totalPar <= 0) return 0;
  const frac = clamp(1 - (totalSeconds - totalPar) / totalPar, 0, 1);
  return Math.round(POLICE_SPEED_BONUS_MAX * frac);
}

// Clean bonus: a no-contact arrest pays the full $100; every hard shunt
// on the call — a PIT or a wall — costs $25 of it. Rough driving pays.
export function cleanBonusFor(shunts){
  return Math.max(0, POLICE_CLEAN_BONUS_MAX - CLEAN_BONUS_PER_SHUNT * Math.max(0, shunts | 0));
}

// Arrest rating, 1-5 stars: a fast, clean arrest is 5. Running late
// costs 1, one or two shunts cost 1, three or more cost 2. A late,
// rough arrest drops to 2, never below.
export function ratingFor(onTime, shunts){
  let stars = 5;
  if(!onTime) stars -= 1;
  if(shunts >= 3) stars -= 2;
  else if(shunts >= 1) stars -= 1;
  return clamp(stars, 1, 5);
}

export function isPoliceCar(carDef){
  return !!carDef && carDef.extra === 'police';
}

// Pick the suspect's ride: a cheap car in a dark colour, drawn from the
// rng so the same chase never looks twice alike.
export function suspectCarFor(rng){
  return {
    id: SUSPECT_DEFS[(rng() * SUSPECT_DEFS.length) | 0],
    color: SUSPECT_COLORS[(rng() * SUSPECT_COLORS.length) | 0],
  };
}

// ---------- suspect flee AI (main city grid) ----------
// The suspect drives the grid like a traffic car — axis, road line,
// direction, distance along — and at every intersection turns onto the
// road that takes it farthest from the cruiser, with a little erratic
// wobble so it never feels scripted. Same lane model as traffic.js, so
// the suspect always stays on a real road.
const N = LINES.length;

function nextCross(s){
  if(s.dir > 0){ for(let k = 0; k < N; k++) if(LINES[k] > s.s + 0.3) return k; }
  else { for(let k = N - 1; k >= 0; k--) if(LINES[k] < s.s - 0.3) return k; }
  return -1;
}

// Where the suspect would be 40 m along a candidate move: straight on,
// or a left / right turn at the crossing line k. Returns a lane state.
function candidateAfter(s, k, choice){
  if(choice === 'straight') return { axis:s.axis, li:s.li, dir:s.dir, s:LINES[k] + s.dir * 40 };
  let nAxis, nDir;
  if(s.axis === 'z'){ nAxis = 'x'; nDir = (s.dir < 0) === (choice === 'right') ? 1 : -1; }
  else { nAxis = 'z'; nDir = (s.dir > 0) === (choice === 'right') ? 1 : -1; }
  const along = LINES[s.li];
  if((nDir > 0 && along >= LINES[N - 1] - 1) || (nDir < 0 && along <= LINES[0] + 1)) nDir = -nDir;
  return { axis:nAxis, li:k, dir:nDir, s:along + nDir * 40 };
}

function lanePos(st){
  return laneXZ(st.axis, LINES[st.li], st.dir, st.s);
}

// A lane point near the cruiser: where the suspect is fleeing from.
// Same retry shape as the fire call — 8 tries on the grid lines, then
// the last point — and the suspect starts off heading away from you.
export function suspectPointNear(px, pz, rng){
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

// Lane state for a spawn point: nearest road line, direction away from
// the cruiser (the farther way out of the two wins).
export function laneStateFor(p, px, pz){
  let best = null;
  for(let li = 0; li < N; li++){
    for(const axis of ['x', 'z']){
      const line = LINES[li];
      // Axis 'x' runs along x on the z-line; axis 'z' runs along z on
      // the x-line. s is the position along the road, off the distance to it.
      const s = axis === 'x' ? p.x : p.z;
      const off = axis === 'x' ? p.z - line : p.x - line;
      if(Math.abs(off) > LANE * 2 + 1) continue;
      for(const dir of [1, -1]){
        const a = lanePos({ axis, li, dir, s: s + dir * 40 });
        const b = lanePos({ axis, li, dir, s: s - dir * 40 });
        const d = dist(a, { x:px, z:pz }) - dist(b, { x:px, z:pz });
        if(!best || d > best.away) best = { axis, li, dir, s, away:d };
      }
    }
  }
  if(!best) return { axis:'x', li:0, dir:1, s:0 };
  return { axis:best.axis, li:best.li, dir:best.dir, s:best.s };
}

// ---------- custom maps ----------

// Call picker for a custom map, in world coords: the map sits at `offset`
// (mapbuilder OFFSET), so local tile coords get the offset added back.
// A map only gets calls when its streets can carry one — a lone spawn
// tile, or roads too short for a leg, means no calls. On a custom map
// the suspect flees in a straight line away from the cruiser and bounces
// off the map's road bounds, since custom streets are not a grid.
export function policePickers(map, offset = { x:0, z:0 }){
  const roads = roadTilesOf(map);
  const toLocal = p => ({ x:p.x - offset.x, z:p.z - offset.z });
  const toWorld = p => ({ x:p.x + offset.x, z:p.z + offset.z });

  // The suspect: a road tile near the cruiser, or the nearest road at
  // all when the cruiser is off the streets; null when no roads.
  function suspectNear(px, pz, rng){
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
  let bounds = null;
  if(roads.length){
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for(const t of roads){
      const w = toWorld(t);
      if(w.x < minX) minX = w.x; if(w.x > maxX) maxX = w.x;
      if(w.z < minZ) minZ = w.z; if(w.z > maxZ) maxZ = w.z;
    }
    bounds = { minX, maxX, minZ, maxZ };
  }
  return { suspectNear, bounds, grid:false };
}

// States: off (not in a cruiser) -> idle (in one, waiting for dispatch)
// -> respond (closing on the fleeing suspect) -> pursue (on their tail,
// building stop progress) -> cooldown -> idle. Events are returned from
// update() for main.js to toast/pay on.
const MAIN_CITY_PICKERS = {
  suspectNear: suspectPointNear,
  bounds: null,
  grid: true,
};
export function createPoliceJob(rng = Math.random, pickers = MAIN_CITY_PICKERS){
  let state = 'off';
  let inPolice = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                 // idle: until next call; cooldown: until idle
  let suspect = null;            // fleeing suspect: lane state or free state
  let suspectCar = null;         // the suspect's ride, picked at call start
  let progress = 0;              // stop progress, 0-100: 100 and they give up
  let shunts = 0;                // hard shunts this call (PITs + hp-drop hits)
  let pitCool = 0;               // s until the next PIT counts
  let spunT = 0;                 // s the suspect stays spun out after a PIT
  let seen = false;              // cruiser has been within 60 m this call
  let escapeT = 0;               // s the suspect has been out of range
  let escapeWarned = false;      // the 'losing' event fires once per call
  let respondPar = 0, respondSeconds = 0;
  let pursuePar = 0, pursueSeconds = 0;
  let lastHp = 100;              // hp last frame, for shunt detection
  // Surge: the rate in effect right now (from ctx.surge, set by main.js
  // from the time of day and the weather) and the rate locked in when
  // the current call started — the pay is fixed at the first ring, so
  // the sky changing mid-call never reprices a call already running.
  let curSurge = 1, callSurge = 1;
  // Career totals persist in the save via loadCareer/career.
  let calls = 0, arrests = 0, earned = 0;
  let ratingSum = 0, ratingCount = 0;

  function nextDelay(){ return CALL_DELAY_MIN + rng() * (CALL_DELAY_MAX - CALL_DELAY_MIN); }

  // Start a call near the cruiser: a suspect fleeing on a road nearby.
  // Null when the world cannot carry a call (custom map with no roads).
  function buildCall(ctx){
    const p = activePickers.suspectNear(ctx.x, ctx.z, rng);
    if(!p) return null;
    const car = suspectCarFor(rng);
    if(activePickers.grid === false){
      const b = activePickers.bounds;
      const dx = p.x - ctx.x, dz = p.z - ctx.z;
      const heading = Math.atan2(-dx, -dz);   // flee straight away
      return { suspect:{ x:p.x, z:p.z, heading, speed:0, vx:0, vz:0, bounds:b }, car };
    }
    const lane = laneStateFor(p, ctx.x, ctx.z);
    const pos = lanePos(lane);
    return { suspect:{ ...lane, x:pos.x, z:pos.z, heading:pos.h, speed:0 }, car };
  }

  // End a live call without pay. Returns true when a call was live.
  // The cooldown only applies when the cruiser is still the car
  // (setInPoliceCar(true) re-arms idle).
  function endCall(){
    const wasLive = state === 'respond' || state === 'pursue';
    state = inPolice ? 'cooldown' : 'off'; timer = POLICE_COOLDOWN;
    suspect = null; suspectCar = null; progress = 0;
    return wasLive;
  }

  // Move the suspect one frame: grid lanes on the main city (turn at
  // intersections onto the road farthest from the cruiser), straight-line
  // flee with a bounce off the road bounds on a custom map. A PIT spins
  // the suspect out — they crawl while spunT runs down.
  function moveSuspect(dt, ctx){
    if(!suspect) return;
    const want = spunT > 0 ? SPUN_SPEED : SUSPECT_SPEED;
    if(spunT > 0) spunT -= dt;
    suspect.speed += Math.sign(want - suspect.speed) * Math.min(Math.abs(want - suspect.speed), SUSPECT_ACCEL * dt);
    if(activePickers.grid === false){
      const b = suspect.bounds;
      let h = suspect.heading;
      let fx = -Math.sin(h), fz = -Math.cos(h);
      let nx = suspect.x + fx * suspect.speed * dt;
      let nz = suspect.z + fz * suspect.speed * dt;
      if(b){
        if(nx < b.minX || nx > b.maxX){ fx = -fx; nx = suspect.x + fx * suspect.speed * dt; }
        if(nz < b.minZ || nz > b.maxZ){ fz = -fz; nz = suspect.z + fz * suspect.speed * dt; }
      }
      suspect.x = nx; suspect.z = nz;
      suspect.heading = Math.atan2(-fx, -fz);
      return;
    }
    const k = nextCross(suspect);
    if(k >= 0){
      const cross = LINES[k];
      const toCenter = (cross - suspect.s) * suspect.dir;
      if(toCenter <= 0.05){
        suspect.s = cross;
        // At the intersection: the road farthest from the cruiser wins.
        // A little erratic wobble keeps the chase from feeling scripted.
        // Straight off the grid edge is never an option.
        const atEdgeAhead = (suspect.dir > 0 && k === N - 1) || (suspect.dir < 0 && k === 0);
        const choices = atEdgeAhead ? ['left', 'right'] : ['straight', 'left', 'right'];
        let choice = choices[0];
        let bestD = -Infinity;
        for(const c of choices){
          const cand = candidateAfter(suspect, k, c);
          const pos = lanePos(cand);
          const d = dist(pos, ctx);
          if(d > bestD){ bestD = d; choice = c; }
        }
        if(rng() < 0.15) choice = choices[(rng() * choices.length) | 0];
        if(choice !== 'straight'){
          const cand = candidateAfter(suspect, k, choice);
          suspect.axis = cand.axis; suspect.li = cand.li; suspect.dir = cand.dir; suspect.s = cand.s;
        }
      }
    }else{
      // End of the road: U-turn.
      suspect.dir = -suspect.dir;
    }
    suspect.s += suspect.dir * suspect.speed * dt;
    const pos = lanePos(suspect);
    suspect.x = pos.x; suspect.z = pos.z;
    let dh = pos.h - suspect.heading;
    dh = Math.atan2(Math.sin(dh), Math.cos(dh));
    suspect.heading += dh * Math.min(1, dt * 5);
  }

  // Close enough and moving fast enough to PIT: a ram that counts.
  function pitNow(ctx){
    return suspect && state === 'pursue'
      && dist(ctx, suspect) < PIT_RADIUS && Math.abs(ctx.speed) > PIT_SPEED_MIN
      && pitCool <= 0;
  }

  // Close enough to pressure the suspect: tailing them breaks their nerve.
  function pressuring(ctx){
    return suspect && state === 'pursue' && dist(ctx, suspect) < STOP_RADIUS;
  }

  return {
    get state(){ return state; },
    get inPoliceCar(){ return inPolice; },
    get active(){ return state === 'respond' || state === 'pursue'; },
    // Where the beacon + radar dot point: the suspect, both chase legs.
    get target(){ return (state === 'respond' || state === 'pursue') && suspect ? { x:suspect.x, z:suspect.z } : null; },
    // The suspect's live position + heading + speed, for the suspect car mesh.
    get suspect(){ return (state === 'respond' || state === 'pursue') && suspect ? { x:suspect.x, z:suspect.z, heading:suspect.heading, speed:suspect.speed } : null; },
    // The suspect's ride this call (null when no call is live).
    get suspectCar(){ return (state === 'respond' || state === 'pursue') ? suspectCar : null; },
    // Stop progress, 0-100: 100 and they pull over.
    get progress(){ return (state === 'respond' || state === 'pursue') ? Math.round(progress) : 0; },
    // Hard shunts this call — what the clean bonus pays on.
    get shunts(){ return (state === 'respond' || state === 'pursue') ? shunts : 0; },
    // Seconds left on this leg's schedule (negative = running late).
    get timeLeft(){
      if(state === 'respond') return respondPar - respondSeconds;
      if(state === 'pursue') return pursuePar - pursueSeconds;
      return 0;
    },
    // The siren is on while a call is live — the HUD and the beacon read this.
    get siren(){ return state === 'respond' || state === 'pursue'; },
    get calls(){ return calls; },
    get arrests(){ return arrests; },
    get earned(){ return earned; },
    get ratingCount(){ return ratingCount; },
    // Lifetime call rating, 1-5; 0 until the first arrest.
    get ratingAvg(){ return ratingCount ? ratingSum / ratingCount : 0; },
    // Surge in effect: the locked-in rate during a call, the live rate
    // otherwise (1 in the day, 1.5 at night). The HUD reads this.
    get surge(){ return (state === 'respond' || state === 'pursue') ? callSurge : curSurge; },
    // Career snapshot for the save file (plain numbers, no state).
    get career(){ return { calls, arrests, earned, ratingSum, ratingCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      calls = n(c.calls); arrests = n(c.arrests); earned = n(c.earned);
      ratingSum = n(c.ratingSum); ratingCount = n(c.ratingCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live call
    // before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when switching out of the cruiser killed a live call.
    // Leaving the cruiser ends the shift, so a suspect left fleeing is lost either way.
    setInPoliceCar(v){
      if(v === inPolice) return null;
      inPolice = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      if(state === 'respond' || state === 'pursue'){
        endCall();
        state = 'off'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving the cruiser, the garage, the menu: a live call ends,
    // quietly, and an unfinished call never pays. Returns true when a
    // call was actually live.
    abandon(){
      if(state !== 'respond' && state !== 'pursue') return false;
      endCall();
      return true;
    },

    // Is the cruiser tailing the suspect right now, for this frame's
    // position? main.js reads this every frame for the HUD; the state
    // machine itself only needs it inside update().
    isPressuring(ctx){
      return pressuring(ctx || { x:0, z:0, speed:0 });
    },

    // ctx = { x, z, speed, hp, maxHp?, surge? }. Returns events for main.js.
    update(dt, ctx){
      const events = [];
      const s = ctx && ctx.surge;
      curSurge = (typeof s === 'number' && isFinite(s) && s > 0) ? s : 1;
      if(pitCool > 0) pitCool -= dt;
      if(state === 'idle'){
        timer -= dt;
        if(timer <= 0){
          const call = buildCall(ctx);
          if(!call){ timer = POLICE_RETRY; }
          else{
            suspect = call.suspect; suspectCar = call.car;
            progress = 0; shunts = 0; pitCool = 0; spunT = 0;
            seen = false; escapeT = 0; escapeWarned = false;
            respondPar = legParFor(dist(ctx, suspect)); respondSeconds = 0;
            pursuePar = PURSUE_PAR; pursueSeconds = 0;
            lastHp = typeof ctx.hp === 'number' ? ctx.hp : 100;
            callSurge = curSurge;   // the pay is fixed when the call comes in
            state = 'respond';
            events.push({ type:'callStart', suspect:{ x:suspect.x, z:suspect.z },
              car:{ ...suspectCar }, surge: callSurge, par: respondPar });
          }
        }
      }else if(state === 'respond' || state === 'pursue'){
        // The suspect is already running: move them before anything else.
        moveSuspect(dt, ctx);
        const d = dist(ctx, suspect);
        if(d < 60) seen = true;
        if(state === 'respond'){
          respondSeconds += dt;
          if(d < PURSUE_RADIUS){
            state = 'pursue';
            events.push({ type:'inPursuit', dist: Math.round(d), par: pursuePar, timeLeft: pursuePar });
          }else if(respondSeconds > RESPOND_LIMIT){
            // Never got eyes on them: dispatch cancels the call.
            endCall();
            events.push({ type:'callFailed', reason:'escaped', seconds: respondSeconds });
            return events;
          }
        }else{
          pursueSeconds += dt;
          // A hard shunt — a PIT or a wall — costs clean bonus. One
          // shunt per hit, paced by the hp drop itself, and a PIT never
          // double-counts with the hp drop it causes.
          if(typeof ctx.hp === 'number' && ctx.hp < lastHp - SHUNT_HP_DROP && pitCool <= 0){
            shunts++;
            events.push({ type:'shunt', shunts });
          }
          if(typeof ctx.hp === 'number') lastHp = ctx.hp;
          if(pitNow(ctx)){
            pitCool = PIT_COOLDOWN; spunT = SPUN_TIME;
            suspect.speed = SPUN_SPEED;   // the PIT spins them out on the spot
            progress += PIT_PROGRESS; shunts++;
            events.push({ type:'pit', progress: Math.round(progress), shunts });
          }else if(pressuring(ctx)){
            progress += PRESSURE_RATE * dt;
          }
          if(d > ESCAPE_WARN_RADIUS && !escapeWarned){
            escapeWarned = true;
            events.push({ type:'losing', dist: Math.round(d) });
          }
          if(seen && d > ESCAPE_RADIUS){
            escapeT += dt;
            if(escapeT > ESCAPE_TIME){
              endCall();
              events.push({ type:'callFailed', reason:'escaped',
                seconds: respondSeconds + pursueSeconds });
              return events;
            }
          }else{
            escapeT = 0;
          }
        }
        if(ctx.hp <= 0){
          // Wrecked mid-chase: the call is lost, nobody was brought in.
          const wasPursue = state === 'pursue';
          endCall();
          events.push({ type:'callFailed', reason:'wrecked',
            onScene: wasPursue });
          return events;
        }
        if(state === 'pursue' && progress >= 100){
          // They give up: base + speed bonus + clean bonus, all times
          // the surge locked in when the call came in.
          const totalSeconds = respondSeconds + pursueSeconds;
          const totalPar = respondPar + pursuePar;
          const onTime = totalSeconds <= totalPar;
          const speedBonus = speedBonusFor(totalSeconds, totalPar);
          const cleanBonus = cleanBonusFor(shunts);
          const subtotal = POLICE_BASE_PAY + speedBonus + cleanBonus;
          const total = Math.round(subtotal * callSurge);
          const rating = ratingFor(onTime, shunts);
          ratingSum += rating; ratingCount++; calls++; arrests++; earned += total;
          const sh = shunts;
          endCall();
          state = 'cooldown'; timer = POLICE_COOLDOWN;
          events.push({ type:'arrested', base: POLICE_BASE_PAY, speedBonus, cleanBonus,
            subtotal, total, rating, ratingAvg: ratingCount ? ratingSum / ratingCount : 0,
            shunts: sh, onTime, calls, arrests, earned, surge: callSurge,
            seconds: totalSeconds, par: totalPar });
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = inPolice ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },
  };
}
