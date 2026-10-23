// CITY DRIVER — wanted level + police pursuit.
// Pure, testable model (WantedHeat, pursuit steering, spawn math) up top;
// the three.js cop manager (createPolice) at the bottom takes deps so the
// game wires it in main.js. Crimes feed heat, heat spawns cop units, cop
// units chase / PIT / ram / roadblock you, and getting caught means BUSTED:
// a fine, heat wiped, and a ride to the station.
//
// Heat model: heat is a float 0..6.2, stars = ceil(heat). Crimes add heat
// (with a short per-kind cooldown so full-auto fire doesn't insta-max).
// Heat decays fast when no cop can see you, barely at all while they're on
// your tail. Witnessed flag scales the gain: a gunshot nobody could have
// heard still spooks the city a little.
import * as THREE from 'three';
import { LINES, blockCenter } from './world.js';

export const MAX_STARS = 6;
export const HEAT_MAX = 6.2;

// heat added per crime (before witnessed scaling)
export const CRIME_HEAT = {
  gunshot:   0.9,   // firing a weapon in the city
  pedHit:    1.0,   // injuring a pedestrian with your car (knockdown)
  pedKill:   1.5,   // killing a pedestrian
  ramTraffic:0.45,  // slamming a traffic car at speed
  reckless:  0.25,  // near-miss / sideswipe at speed near a cop
  copRam:    0.8,   // ramming a cop car
  copShot:   1.2,   // wounding a cop (foot or car) with gunfire
  copKill:   2.5,   // shooting a cop dead or disabling a cop car
  stolenCar: 0.4,   // jacking a car with the driver watching
};
const CRIME_COOLDOWN = 1.2;      // s between heat gains of the same kind
const UNWITNESSED_SCALE = 0.35;  // crime nobody saw still adds a little

// --- witnesses ------------------------------------------------------------
// A crime only summons the city when someone sees (or hears) it. The wanted
// system asks the crowd (peds, traffic drivers) who is close enough to the
// crime to count as a witness; unwitnessed crimes still add a little heat
// (cities talk) but don't snowball the way witnessed ones do.
export const WITNESS_RADIUS = 45;        // m — a bystander sees a crime this far
export const WITNESS_LOUD_RADIUS = 65;   // m — gunshots carry further
// Pure: how many of the given {x,z} units are within r of the crime scene.
export function countWitnesses(units, x, z, r){
  let n = 0;
  const r2 = r * r;
  for(const u of units){
    const dx = u.x - x, dz = u.z - z;
    if(dx * dx + dz * dz <= r2) n++;
  }
  return n;
}

export const HEAT_DECAY_UNSEEN = 0.10;  // heat/s lost when no cop in range
export const HEAT_DECAY_SEEN   = 0.012; // heat/s lost while being chased
export const BUST_TIME = 2.2;           // s pinned by a cop before BUSTED
export const COP_SIGHT = 60;            // m — inside this a cop "sees" you
export const SPAWN_RING_MIN = 55, SPAWN_RING_MAX = 95;

export function starsFor(heat){
  if(heat <= 0.02) return 0;
  return Math.max(1, Math.min(MAX_STARS, Math.ceil(heat - 1e-6)));
}

// ---------------------------------------------------------------------------
// Wanted heat: the pure model. t is seconds (game clock), supplied by caller
// so tests can drive it deterministically.
// ---------------------------------------------------------------------------
export class WantedHeat {
  constructor(){ this.heat = 0; this.cool = {}; this.t = 0; }
  crime(kind, witnessed = true, t = this.t){
    const gain = CRIME_HEAT[kind];
    if(!gain) return 0;
    const last = this.cool[kind] ?? -99;
    if(t - last < CRIME_COOLDOWN) return 0;      // same crime spamming
    this.cool[kind] = t;
    const g = gain * (witnessed ? 1 : UNWITNESSED_SCALE);
    this.heat = Math.min(HEAT_MAX, this.heat + g);
    return g;
  }
  update(dt, seen){
    this.t += dt;
    if(this.heat <= 0) return;
    this.heat = Math.max(0, this.heat - dt * (seen ? HEAT_DECAY_SEEN : HEAT_DECAY_UNSEEN));
  }
  get stars(){ return starsFor(this.heat); }
  clear(){ this.heat = 0; }
}

// Where a bullet goes when nobody's driving: pure intercept math so a cop
// can aim at where you'll be, not where you are.
export function interceptPoint(px, pz, vx, vz, cx, cz, cspeed){
  const dx = px - cx, dz = pz - cz;
  const dist = Math.hypot(dx, dz);
  if(cspeed < 0.5 || dist < 1) return { x:px, z:pz, t:0 };
  const pv = Math.hypot(vx, vz);
  // closing speed along the line cop->player, clamped sane
  const closing = Math.max(4, cspeed - Math.min(pv, cspeed * 0.9));
  const t = dist / closing;
  return { x:px + vx * t * 0.85, z:pz + vz * t * 0.85, t };
}

// Kinematic pursuit steering for one cop unit.
// cop: { x, z, heading, speed }. Returns { steer:-1..1, throttle:-1..1 }.
// Drives at the target, reverses out when the target is right behind the
// bumper, and never asks for more turn than the chassis can give.
export function pursuitSteer(cop, tx, tz, dt, opts = {}){
  const topSpeed = opts.topSpeed ?? 26;
  const turnRate = opts.turnRate ?? 2.3;
  const dx = tx - cop.x, dz = tz - cop.z;
  const dist = Math.hypot(dx, dz);
  const wantH = Math.atan2(-dx, -dz);            // heading convention: 0 = -Z
  let diff = Math.atan2(Math.sin(wantH - cop.heading), Math.cos(wantH - cop.heading));
  const slow = Math.abs(cop.speed) < 3;
  // target directly behind and close: back up while turning
  if(dist < 7 && Math.abs(diff) > 2.2 && slow){
    return { steer: Math.max(-1, Math.min(1, -diff * 1.4)), throttle: -0.7, dist, diff };
  }
  const steer = Math.max(-1, Math.min(1, -diff * 2.2));
  // ease off the gas in hard turns so it doesn't loop out
  const corner = Math.min(1, Math.abs(diff) / 1.1);
  const wantSpeed = topSpeed * (1 - corner * 0.55);
  let throttle;
  if(cop.speed < wantSpeed) throttle = Math.min(1, (wantSpeed - cop.speed) / 8 + 0.35);
  else throttle = Math.max(-0.6, (wantSpeed - cop.speed) / 12);
  // arrival: settle instead of orbiting — kill the turn authority and crawl
  if(dist < 10){
    const k = Math.max(0.15, dist / 10);
    throttle = Math.min(throttle, 0.25 * k);
    if(dist < 4.5) throttle = Math.min(throttle, 0.05);
    return { steer:steer * k, throttle, dist, diff };
  }
  return { steer, throttle, dist, diff };
}

// Ring of spawn spots around the player for incoming units. Caller snaps
// them onto roads / out of buildings with its collide fn.
export function pickSpawnRing(px, pz, count, rng = Math.random){
  const out = [];
  for(let i = 0; i < count; i++){
    const a = rng() * Math.PI * 2;
    const r = SPAWN_RING_MIN + rng() * (SPAWN_RING_MAX - SPAWN_RING_MIN);
    out.push({ x:px + Math.cos(a) * r, z:pz + Math.sin(a) * r, heading:Math.atan2(-(px - (px + Math.cos(a) * r)), -(pz - (pz + Math.sin(a) * r))) });
  }
  return out;
}

// Busted meter: pins while a cop is close and you're slow/stopped.
// update() returns 'busted' the moment the meter fills.
export class BustMeter {
  constructor(){ this.t = 0; }
  // nearest: m to closest active cop (Infinity when none).
  // pinned: player is slow enough to be grabbed (car < 3 m/s, or on foot).
  update(dt, nearest, pinned){
    if(pinned && nearest < 7){
      this.t += dt * (nearest < 3.5 ? 1.6 : 1);
      if(this.t >= BUST_TIME){ this.t = 0; return 'busted'; }
    }else{
      this.t = Math.max(0, this.t - dt * 2);
    }
    return null;
  }
  get frac(){ return Math.min(1, this.t / BUST_TIME); }
  reset(){ this.t = 0; }
}

// The station you wake up outside after a bust: curbside by the police HQ
// (special block (2,4)), on the west curb of the road east of it.
export const POLICE_STATION = { x:LINES[3] - 3.5, z:blockCenter(4), heading:0 };

// ---------------------------------------------------------------------------
// Foot cops: when you're on foot, officers get out and chase you down.
// ---------------------------------------------------------------------------
export const FOOT_COP_SPEED = 6.4;    // m/s — you can outrun one, barely
export const FOOT_GRAB_DIST = 1.7;    // m — inside this they grab you
export const FOOT_GRAB_TIME = 1.2;    // s of being held before BUSTED
export const FOOT_COP_HP = 2;       // bullet hits a foot cop can take
export const COP_CAR_HP = 3;       // bullet hits a cop car can take
export const COPCAR_R = 1.6;       // bullet-target radius of a cop car
export const COP_DISABLED_SMOKE = 6; // s a disabled cop car burns before despawn

// Seek steering for one foot cop. f: { x, z, heading, speed, phase }.
// Turns toward the target, sprints when far, stops on top of them.
export function footCopSteer(f, tx, tz, dt){
  const dx = tx - f.x, dz = tz - f.z;
  const dist = Math.hypot(dx, dz);
  const wantH = Math.atan2(-dx, -dz);
  const diff = Math.atan2(Math.sin(wantH - f.heading), Math.cos(wantH - f.heading));
  f.heading -= Math.max(-1, Math.min(1, -diff * 3)) * 3.2 * dt;
  const want = dist < 1.2 ? 0 : FOOT_COP_SPEED * Math.min(1, dist / 4);
  f.speed += Math.max(-1, Math.min(1, want - f.speed)) * 20 * dt;
  f.speed = Math.max(0, Math.min(FOOT_COP_SPEED, f.speed));
  f.x += -Math.sin(f.heading) * f.speed * dt;
  f.z += -Math.cos(f.heading) * f.speed * dt;
  f.phase = (f.phase || 0) + f.speed * dt * 2.1;
  return dist;
}

// Pursuit fan-out: slot 0 takes the intercept dead-on, the rest offset to
// the player's flanks so the chase doesn't stack into one car.
export function chaseLaneOffset(idx){
  return idx === 0 ? 0 : (idx % 2 === 1 ? 1 : -1) * Math.ceil(idx / 2) * 7;
}
// Kinematic car step shared by the manager and the tests: turn-rate limited
// by speed, simple accel model, slides on colliders. Mutates cop in place.
// cop: { x, z, heading, speed }.
export function stepKin(c, steer, throttle, dt, collide){
  const turnRate = 2.4 * Math.min(1, 0.35 + Math.abs(c.speed) / 12);
  c.heading -= steer * turnRate * dt * (c.speed < -0.5 ? -1 : 1);
  const accel = throttle >= 0 ? COP_ACCEL : COP_REV;
  const top = throttle >= 0 ? 34 : 10;
  c.speed += Math.max(-accel * dt, Math.min(accel * dt, throttle * accel * dt * 2 - c.speed * dt * 0.6));
  c.speed = Math.max(-top, Math.min(top, c.speed));
  if(Math.abs(c.speed) < 0.05 && Math.abs(throttle) < 0.05) c.speed = 0;
  const fx = -Math.sin(c.heading), fz = -Math.cos(c.heading);
  let nx = c.x + fx * c.speed * dt, nz = c.z + fz * c.speed * dt;
  if(collide){ const r = collide(nx, nz, 2.0); nx = r.x; nz = r.z; }
  c.x = nx; c.z = nz;
  if(c.wheelSpin !== undefined) c.wheelSpin += c.speed * dt * 2;
  return c;
}

// ---------------------------------------------------------------------------
// Cop manager (three.js). deps:
//   scene, buildCar(id, colorHex), collide(x, z, r) -> {x, z} (slide),
//   getPlayer() -> { x, z, heading, speed, vx, vz, onFoot, alive },
//   audio (with siren(level)), highQuality() -> bool,
//   damagePlayer(n), onBusted(stars), onEvaded(stars),
//   setStars(n) (HUD), toast(msg, ms), spark(x, z) (impact fx, optional),
//   buildCharacter(outfit), animateCharacter(root, phase, speed, aiming, dt) (foot cops)
// ---------------------------------------------------------------------------
const COP_COLORS = [0x14161c, 0xf2f2f2, 0x1a3a6b];
const COP_ACCEL = 15, COP_REV = 9;

export function createPolice(deps){
  const heat = new WantedHeat();
  const bust = new BustMeter();
  const cops = [];                 // live units
  let spawnCool = 0, clock = 0, lastStars = 0, ramCool = 0;
  let strobeT = 0;

  function copCountFor(stars){ return Math.min(stars, 6); }

  function spawnCop(spot){
    const color = COP_COLORS[(Math.random() * COP_COLORS.length) | 0];
    const group = deps.buildCar('police', color);
    const p = deps.collide ? deps.collide(spot.x, spot.z, 2.2) : spot;
    group.position.set(p.x, 0, p.z);
    group.rotation.y = spot.heading;
    deps.scene.add(group);
    const flashers = group.userData.flashers || null;   // [redMat, blueMat]
    let glow = null;
    if(deps.highQuality && deps.highQuality() && cops.filter(c => c.glow).length < 2){
      glow = new THREE.PointLight(0xff2a2a, 0, 22, 1.6);
      glow.position.set(0, 2.6, 0);
      group.add(glow);
    }
    const cop = { group, flashers, glow, x:p.x, z:p.z, heading:spot.heading,
      speed:0, mode:'respond', modeT:0, searchT:0, block:false,
      lastSeenX:p.x, lastSeenZ:p.z, ramT:0, wheelSpin:0,
      hp:COP_CAR_HP, disabled:false, disableT:0, smokeT:0 };
    cops.push(cop);
    return cop;
  }

  function removeCop(i){
    const c = cops[i];
    deps.scene.remove(c.group);
    c.group.traverse(o => { if(o.isMesh && o.geometry && o.geometry._copOwned) o.geometry.dispose(); });
    cops.splice(i, 1);
  }

  function clearCops(){ for(let i = cops.length - 1; i >= 0; i--) removeCop(i); }

  // ---------- foot cops ----------
  const footCops = [];
  const COP_OUTFIT = { shirt:0x1c2f57, pants:0x141c2e, skin:0xc8956c, hair:0x201510, hat:'cap', hatColor:0x1c2f57 };

  function spawnFootCop(px, pz){
    const a = Math.random() * Math.PI * 2, r = 10 + Math.random() * 8;
    let x = px + Math.cos(a) * r, z = pz + Math.sin(a) * r;
    if(deps.collide){ const s = deps.collide(x, z, 0.5); x = s.x; z = s.z; }
    const person = deps.buildCharacter(COP_OUTFIT);
    person.position.set(x, 0, z);
    person.rotation.y = Math.atan2(-(px - x), -(pz - z));
    deps.scene.add(person);
    footCops.push({ person, x, z, heading:person.rotation.y, speed:0, phase:Math.random() * 6, grabT:0,
      hp:FOOT_COP_HP, dead:false, deadT:0 });
  }
  function removeFootCop(i){
    deps.scene.remove(footCops[i].person);
    footCops.splice(i, 1);
  }
  function clearFootCops(){ for(let i = footCops.length - 1; i >= 0; i--) removeFootCop(i); }

  // one shared busted sequence for car pins and foot grabs
  function doBusted(st){
    heat.clear(); lastStars = 0; clearCops(); clearFootCops(); bust.reset();
    deps.setStars && deps.setStars(0);
    if(deps.audio && deps.audio.siren) deps.audio.siren(0);
    deps.onBusted && deps.onBusted(st);
  }

  // returns the grab progress 0..1 (for the bust vignette), or -1 on BUSTED
  function updateFootCops(dt, p, stars){
    if(p.onFoot && stars > 0 && footCops.length < Math.min(2, stars)) spawnFootCop(p.x, p.z);
    let grabFrac = 0;
    for(let i = footCops.length - 1; i >= 0; i--){
      const f = footCops[i];
      if(f.dead){                       // slumped body lingers, then fades away
        f.deadT -= dt;
        if(f.deadT <= 0) removeFootCop(i);
        continue;
      }
      const d = Math.hypot(f.x - p.x, f.z - p.z);
      if(stars === 0 || !p.onFoot || !p.alive || d > 130){ removeFootCop(i); continue; }
      footCopSteer(f, p.x, p.z, dt);
      if(deps.collide){ const s = deps.collide(f.x, f.z, 0.5); f.x = s.x; f.z = s.z; }
      f.person.position.set(f.x, 0, f.z);
      f.person.rotation.y = f.heading;
      if(deps.animateCharacter) deps.animateCharacter(f.person, f.phase, f.speed, false, dt);
      if(d < FOOT_GRAB_DIST) f.grabT += dt; else f.grabT = Math.max(0, f.grabT - dt * 2);
      grabFrac = Math.max(grabFrac, f.grabT / FOOT_GRAB_TIME);
      if(f.grabT >= FOOT_GRAB_TIME){ doBusted(stars); return -1; }
    }
    return grabFrac;
  }

  // -- taking fire ----------------------------------------------------------
  // A bullet hit a foot cop. Returns 'killed' | 'hit' | null.
  // Shooting one that's grabbing you interrupts the grab.
  function damageFootCop(f, dmg){
    if(f.dead) return null;
    f.hp -= dmg;
    if(deps.blood) deps.blood(f.x, 1.2, f.z, 0, 0, 1.1);
    f.grabT = 0;
    if(f.hp > 0){ crime('copShot', f.x, f.z, true); return 'hit'; }
    f.dead = true; f.deadT = 2.5;
    f.person.rotation.x = -Math.PI / 2;             // slumped on the pavement
    if(f.person.position) f.person.position.y = 0.25;
    crime('copKill', f.x, f.z, true);
    return 'killed';
  }

  // A bullet hit a cop car. Returns 'disabled' | 'hit' | null.
  // A disabled unit smokes where it died, then despawns; it counts in the
  // roster until it does, so knocking one out genuinely thins the pursuit.
  function damageCopCar(c, dmg){
    if(c.disabled) return null;
    c.hp -= dmg;
    if(deps.spark) deps.spark(c.x, 1.1, c.z);
    crime('copShot', c.x, c.z, true);
    if(c.hp <= 0){
      c.disabled = true; c.disableT = COP_DISABLED_SMOKE; c.speed = 0;
      if(c.glow) c.glow.intensity = 0;              // sirens die with the car
      crime('copKill', c.x, c.z, true);
      if(deps.toast) deps.toast('🚔 Cop car disabled', 1400);
      return 'disabled';
    }
    return 'hit';
  }

  // bullet blockers for the weapons module: foot cops + live cop cars
  const copBlockers = [];
  function copHitList(){
    copBlockers.length = 0;
    for(const f of footCops) if(!f.dead) copBlockers.push({ x:f.x, z:f.z, r:0.5, ref:{ kind:'footcop', cop:f } });
    for(const c of cops) if(!c.disabled) copBlockers.push({ x:c.x, z:c.z, r:COPCAR_R, ref:{ kind:'copcar', cop:c } });
    return copBlockers;
  }

  // A crime was committed at (x,z). witnessed=false still adds a little heat
  // (cities talk) but won't summon units on its own. Returns the heat gained
  // so callers can react (e.g. witness feedback) only when it actually rose.
  function crime(kind, x, z, witnessed = true){
    const p = deps.getPlayer();
    if(!p || !p.alive) return 0;
    const gained = heat.crime(kind, witnessed, clock);
    if(gained > 0 && heat.stars !== lastStars){
      if(heat.stars > lastStars){
        deps.toast && deps.toast('🚨 Wanted level ' + '★'.repeat(heat.stars), 1800);
        if(deps.audio && deps.audio.dispatch) deps.audio.dispatch();
      }
      lastStars = heat.stars;
      deps.setStars && deps.setStars(heat.stars);
    }
    return gained;
  }

  // -- per-cop brains -------------------------------------------------------
  // idx: the cop's slot in the pursuit — followers fan out to the sides
  // instead of stacking on the leader's bumper.
  function brain(c, p, dt, stars, idx){
    c.modeT += dt;
    const d = Math.hypot(c.x - p.x, c.z - p.z);
    const seen = d < COP_SIGHT;
    if(seen){ c.lastSeenX = p.x; c.lastSeenZ = p.z; c.searchT = 0; }
    else c.searchT += dt;

    // roadblock duty at 4+ stars: two units park across the road ahead
    if(stars >= 4 && c.block && c.mode !== 'block'){ c.mode = 'block'; c.modeT = 0; }

    switch(c.mode){
      case 'respond':
        if(d < 45){ c.mode = 'chase'; c.modeT = 0; }
        return driveTo(c, p.x, p.z, dt, 24 + stars);
      case 'chase': {
        if(c.searchT > 7){ c.mode = 'search'; c.modeT = 0; return driveTo(c, c.lastSeenX, c.lastSeenZ, dt, 20); }
        // pick a tactic by geometry
        const ahead = predictPlayer(p, 1.2);
        const toPlayer = Math.atan2(-(p.x - c.x), -(p.z - c.z));
        const headOn = Math.abs(angDiff(toPlayer, p.heading)) < 0.5 && d > 25 && d < 70;
        if(headOn){ c.mode = 'ram'; c.modeT = 0; }
        else if(d < 9 && Math.abs(c.speed) > 9 && p.speed > 8 && !p.onFoot){ c.mode = 'pit'; c.modeT = 0; }
        const ip = interceptPoint(p.x, p.z, p.vx || 0, p.vz || 0, c.x, c.z, 26 + stars * 1.5);
        const lane = chaseLaneOffset(idx);
        const rx = Math.cos(p.heading), rz = -Math.sin(p.heading);
        return driveTo(c, ip.x + rx * lane, ip.z + rz * lane, dt, 26 + stars * 1.5);
      }
      case 'pit': {
        // swing into their rear quarter to spin them
        if(c.modeT > 2.5 || d > 14){ c.mode = 'chase'; c.modeT = 0; break; }
        const side = Math.sign(angDiff(Math.atan2(-(p.x - c.x), -(p.z - c.z)), c.heading)) || 1;
        const px = p.x + Math.cos(p.heading) * 2.2 * side, pz = p.z - Math.sin(p.heading) * 2.2 * side;
        return driveTo(c, px, pz, dt, Math.max(18, Math.abs(p.speed) + 4));
      }
      case 'ram':
        if(c.modeT > 3 || d < 8){ c.mode = 'chase'; c.modeT = 0; break; }
        return driveTo(c, p.x + (p.vx || 0) * 0.4, p.z + (p.vz || 0) * 0.4, dt, 30 + stars);
      case 'block': {
        // park perpendicular across the road ahead of the player
        const bx = p.x - Math.sin(p.heading) * 22, bz = p.z - Math.cos(p.heading) * 22;
        const arrived = driveTo(c, bx, bz, dt, 22);
        if(arrived.dist < 6){ // swing sideways, handbrake stop
          c.heading += angDiff(p.heading + Math.PI / 2, c.heading) * Math.min(1, dt * 3);
          c.speed *= Math.max(0, 1 - dt * 6);
          integrate(c, 0, 0, dt);
          return arrived;
        }
        return arrived;
      }
      case 'search':
        if(seen){ c.mode = 'chase'; c.modeT = 0; break; }
        if(c.searchT > 20){ c.mode = 'leave'; c.modeT = 0; break; }
        // sweep around the last known position
        {
          const a = clock * 0.5 + c.modeT;
          const sx = c.lastSeenX + Math.cos(a) * 18, sz = c.lastSeenZ + Math.sin(a) * 18;
          return driveTo(c, sx, sz, dt, 16);
        }
      case 'leave':
        return driveTo(c, c.x + (c.x - p.x), c.z + (c.z - p.z), dt, 24);
      default:
        return driveTo(c, p.x, p.z, dt, 24);
    }
    return null;
  }

  function angDiff(a, b){ return Math.atan2(Math.sin(a - b), Math.cos(a - b)); }

  function predictPlayer(p, t){
    return { x:p.x + (p.vx || 0) * t, z:p.z + (p.vz || 0) * t };
  }

  // kinematic car: steer toward (tx,tz), integrate, slide on colliders.
  // returns { dist } to target.
  function driveTo(c, tx, tz, dt, topSpeed){
    const s = pursuitSteer(c, tx, tz, dt, { topSpeed, turnRate:2.4 });
    integrate(c, s.steer, s.throttle, dt);
    return s;
  }

  function integrate(c, steer, throttle, dt){
    stepKin(c, steer, throttle, dt, deps.collide);
  }

  function syncMesh(c, dt){
    c.group.position.set(c.x, 0, c.z);
    c.group.rotation.y = c.heading;
    const u = c.group.userData;
    if(u.frontWheels) for(const w of u.frontWheels) w.rotation.x = c.wheelSpin;
  }

  function strobe(c, phase){
    if(!c.flashers) return;
    const on = Math.sin(strobeT * 44 + phase) > 0;
    c.flashers[0].emissiveIntensity = on ? 3.2 : 0.15;
    c.flashers[1].emissiveIntensity = on ? 0.15 : 3.2;
    if(c.glow){
      c.glow.color.setHex(on ? 0xff2a2a : 0x2a5bff);
      c.glow.intensity = 26;
    }
  }

  // -- public ---------------------------------------------------------------
  function update(dt, t){
    clock = t;
    dt = Math.min(dt, 0.05);
    strobeT += dt;
    const p = deps.getPlayer();
    const stars = heat.stars;
    const alive = p && p.alive;

    // heat decay: seen if any cop is close
    let seen = false;
    if(alive && stars > 0){
      for(const c of cops){ if(Math.hypot(c.x - p.x, c.z - p.z) < COP_SIGHT){ seen = true; break; } }
    }
    heat.update(dt, seen);
    const s2 = heat.stars;
    if(s2 !== lastStars){
      lastStars = s2;
      deps.setStars && deps.setStars(s2);
      if(s2 === 0 && stars > 0){ deps.onEvaded && deps.onEvaded(stars); bust.reset(); }
    }

    // roster: match cop count to stars
    spawnCool -= dt;
    if(alive && s2 > 0 && cops.length < copCountFor(s2) && spawnCool <= 0){
      spawnCool = 1.4;
      const spots = pickSpawnRing(p.x, p.z, 1);
      spawnCop(spots[0]);
      // roadblock detail at 4+: first two units get blocking duty
      if(s2 >= 4){ let n = 0; for(const c of cops){ if(n < 2 && c.mode !== 'block'){ c.block = true; n++; } } }
    }
    // stand down when clean: cops leave, despawn far away
    if(s2 === 0){
      for(const c of cops) if(c.mode !== 'leave'){ c.mode = 'leave'; c.modeT = 0; c.block = false; }
    }

    let nearest = Infinity, phase = 0;
    ramCool = Math.max(0, ramCool - dt);
    for(let i = cops.length - 1; i >= 0; i--){
      const c = cops[i];
      const d = alive ? Math.hypot(c.x - p.x, c.z - p.z) : Infinity;
      if(d < nearest) nearest = d;
      if(c.disabled){                            // shot-up wreck: smokes in place, then despawns
        c.disableT -= dt;
        c.smokeT -= dt;
        if(c.smokeT <= 0){ c.smokeT = 0.35; if(deps.spark) deps.spark(c.x, 1.2, c.z); }
        syncMesh(c, dt);
        strobe(c, phase); phase += 2.1;
        if(c.disableT <= 0) removeCop(i);
        continue;
      }
      if(alive && s2 > 0) brain(c, p, dt, s2, cops.length - 1 - i);
      else if(c.mode === 'leave') driveTo(c, c.x + (c.x - (p ? p.x : 0)), c.z + (c.z - (p ? p.z : 0)), dt, 24);
      // separation: don't pile onto the car next to you
      for(const o of cops){
        if(o === c) continue;
        const sx = c.x - o.x, sz = c.z - o.z, sd = Math.hypot(sx, sz);
        if(sd < 7 && sd > 1e-3){ const push = (7 - sd) * 0.5; c.x += sx / sd * push; c.z += sz / sd * push; }
      }
      syncMesh(c, dt);
      strobe(c, phase); phase += 2.1;

      // reckless: blasting past a cop at speed draws heat (cooldown in WantedHeat paces it)
      if(alive && !p.onFoot && Math.abs(p.speed || 0) > 20 && d > 4 && d < 10){
        heat.crime('reckless', true, clock);
      }

      // ramming the player
      if(alive && d < 3.6 && ramCool <= 0){
        const closing = Math.abs(c.speed) + Math.abs(p.speed || 0);
        if(closing > 7){
          ramCool = 0.8;
          deps.damagePlayer && deps.damagePlayer(Math.min(24, 6 + closing * 0.7), c.x, c.z);
          deps.spark && deps.spark((c.x + p.x) / 2, (c.z + p.z) / 2);
          heat.crime('copRam', true, clock);
          c.speed *= 0.35; c.ramT = 0.5;
          if(c.mode === 'ram'){ c.mode = 'chase'; c.modeT = 0; }
        }
      }
      // despawn: far away and stood down, or absurdly far while chasing
      if((s2 === 0 && d > 120) || d > 260){
        if(s2 > 0 && d > 260){ // lost them completely: re-deploy closer (keeps pressure fair)
          const spot = pickSpawnRing(p.x, p.z, 1)[0];
          const np = deps.collide ? deps.collide(spot.x, spot.z, 2.2) : spot;
          c.x = np.x; c.z = np.z; c.heading = spot.heading; c.speed = 0; c.mode = 'respond'; c.modeT = 0;
        }else removeCop(i);
      }
    }

    // siren: louder when the heat is close
    if(deps.audio && deps.audio.siren){
      const lvl = s2 > 0 && alive ? Math.max(0, 1 - nearest / 95) * Math.min(1, 0.45 + s2 * 0.12) : 0;
      deps.audio.siren(lvl);
    }

    // star changes earned mid-frame (reckless driving, cop rams): toast + dispatch like crime()
    {
      const s3 = heat.stars;
      if(s3 !== lastStars){
        if(s3 > lastStars){
          deps.toast && deps.toast('🚨 Wanted level ' + '★'.repeat(s3), 1800);
          if(deps.audio && deps.audio.dispatch) deps.audio.dispatch();
        }
        lastStars = s3;
        deps.setStars && deps.setStars(s3);
      }
    }

    // busted?
    let footGrab = 0;
    if(alive && s2 > 0){
      const pinned = p.onFoot ? true : Math.abs(p.speed || 0) < 3;
      const res = bust.update(dt, nearest, pinned);
      if(res === 'busted'){ doBusted(s2); return { stars:0, cops:0, nearest:-1, bustFrac:0 }; }
      footGrab = updateFootCops(dt, p, s2);
      if(footGrab < 0) return { stars:0, cops:0, nearest:-1, bustFrac:0 };
    }else{
      updateFootCops(dt, p || { x:0, z:0, onFoot:false, alive:false }, 0);
    }
    return { stars:s2, cops:cops.length, nearest:nearest === Infinity ? -1 : nearest, bustFrac:Math.max(bust.frac, footGrab) };
  }

  function debugWanted(n){
    heat.heat = Math.max(0, Math.min(HEAT_MAX, n));
    lastStars = heat.stars;
    deps.setStars && deps.setStars(lastStars);
  }

  return {
    update, crime, debugWanted,
    damageFootCop, damageCopCar, copHitList,
    get stars(){ return heat.stars; },
    get heat(){ return heat.heat; },
    get units(){ return cops; },
    clear(){ heat.clear(); lastStars = 0; clearCops(); clearFootCops(); bust.reset(); deps.setStars && deps.setStars(0); },
  };
}
