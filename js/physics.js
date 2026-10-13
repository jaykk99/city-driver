// Arcade car physics: simple, fun, driftable. Units: meters, seconds.
// Includes a 6-speed gearbox (auto or manual) that drives RPM, torque and the
// engine sound: each gear has its own top speed, a torque curve, and a rev limiter.

export const GEAR_SPLIT = [0, 0.24, 0.40, 0.55, 0.70, 0.85, 1.0];   // fraction of top speed per gear (1..6)
export class Gearbox {
  constructor(){ this.mode = 'auto'; this.shiftTime = 0.2; this.reset(); }
  reset(){ this.gear = 1; this.rpm = 0; this.shiftT = 0; this.limiter = false; this.reverse = false; this.lastShift = 0; }
  gearTop(top, g = this.gear){ return top * GEAR_SPLIT[g]; }
  // rpm 0..1 for a speed in a gear (with clutch slip at very low speed)
  rpmFor(speed, top, g, throttle){
    const v = Math.abs(speed), gt = this.gearTop(top, g), lowGt = g > 1 ? this.gearTop(top, g - 1) : 0;
    let r = (v - lowGt * 0.35) / (gt - lowGt * 0.35);
    if(g === 1) r = v / gt;
    const slip = Math.max(0, 0.32 * throttle * (1 - v / Math.max(1, gt * 0.5)));
    return Math.max(0, Math.min(1.04, Math.max(r, slip)));
  }
  shift(d){
    const g = Math.max(1, Math.min(6, this.gear + d));
    if(g === this.gear) return false;
    this.gear = g; this.shiftT = this.shiftTime; this.lastShift = d;
    return true;
  }
  // returns a torque multiplier for the current state (0 while shifting / bouncing off the limiter)
  update(speed, throttle, top, dt){
    this.shiftT = Math.max(0, this.shiftT - dt);
    this.reverse = speed < -0.5;
    if(this.reverse){ this.gear = 1; }
    let r = this.rpmFor(speed, top, this.gear, Math.max(0, throttle));
    if(this.mode === 'auto' && !this.reverse && this.shiftT <= 0){
      if(r > 0.93 && this.gear < 6 && throttle > 0.1){ this.shift(1); }
      else if(this.gear > 1 && this.rpmFor(speed, top, this.gear - 1, 0) < 0.72 && (r < 0.4 || throttle < 0)){ this.shift(-1); }
      r = this.rpmFor(speed, top, this.gear, Math.max(0, throttle));
    }
    this.limiter = r >= 1.0 && throttle > 0;
    this.rpm += (r - this.rpm) * Math.min(1, dt * (this.shiftT > 0 ? 25 : 14));
    if(this.shiftT > 0) return 0.15;
    if(this.limiter) return 0;
    // torque curve: pulls hardest around 60-80% of the rev range, lower gears multiply it
    const tq = 0.62 + 0.5 * Math.sin(Math.PI * Math.min(1, 0.18 + r * 0.82));
    return tq * (1.22 - (this.gear - 1) * 0.07);
  }
}
// topSpeed in m/s-ish (def values ~44-68 map to displayed MPH via *2.2).

export class CarPhysics {
  constructor(stats){
    this.reset(stats);
  }
  reset(stats){
    this.stats = stats;
    this.pos = { x:0, z:0 };
    this.heading = 0;          // radians, 0 = -Z forward
    this.vel = { x:0, z:0 };   // world-space velocity
    this.speed = 0;            // forward speed (signed)
    this.steer = 0;            // smoothed steer -1..1
    this.nitroLeft = stats.nitroTime;
    this.nitroActive = false;
    this.drifting = false;
    this.wheelSpin = 0;
    this.boost = 0;            // 0..1 spooled boost
    this.spinning = false;     // launch wheelspin (power > tire traction)
    if(!this.surf) this.surf = { speed:1, grip:1, drag:0, name:'road' };
    if(!this.box) this.box = new Gearbox();
    this.box.shiftTime = stats.shiftTime || 0.2;
    this.box.reset();
  }
  // input: {throttle:-1..1, steer:-1..1, handbrake:bool, nitro:bool}
  // dt seconds. Returns telemetry.
  update(input, dt, collide){
    const s = this.stats;
    dt = Math.min(dt, 0.05);
    // steering smoothing
    const steerTarget = (input.steer||0);
    this.steer += (steerTarget - this.steer) * Math.min(1, dt*10);

    const fwdX = -Math.sin(this.heading), fwdZ = -Math.cos(this.heading);
    // current forward speed
    let fSpeed = this.vel.x*fwdX + this.vel.z*fwdZ;

    // nitro
    this.nitroActive = !!(input.nitro && this.nitroLeft>0 && fSpeed>1);
    if(this.nitroActive) this.nitroLeft = Math.max(0, this.nitroLeft - dt);
    else this.nitroLeft = Math.min(s.nitroTime, this.nitroLeft + dt*0.35);

    // longitudinal accel
    const nitroMul = this.nitroActive ? s.nitroPower : 1;
    const hb = !!input.handbrake;
    let a = 0;
    const driveMul = hb ? 0.25 : 1; // handbrake cuts drive
    const surf = this.surf;
    const topNow = s.topSpeed * nitroMul * surf.speed;
    const gearMul = this.box.update(fSpeed, input.throttle||0, s.topSpeed*nitroMul, dt);
    // forced induction: turbos lag and spool with rpm, blowers are instant
    if(s.boostGain){
      const thr = Math.max(0, input.throttle||0), r = this.box.rpm;
      let tgt = 0;
      if(thr > 0.05){
        if(s.boostKind === 'roots') tgt = thr * (0.7 + 0.3 * r);
        else if(s.boostKind === 'centri') tgt = thr * Math.min(1, r * r * 1.15);
        else tgt = thr * Math.max(0, Math.min(1, (r - (s.spoolAt||0)) / 0.22));
      }
      const rate = tgt > this.boost ? (s.spoolRate || 3) : 6;
      this.boost += (tgt - this.boost) * Math.min(1, dt * rate);
      if(this.box.shiftT > 0 && s.boostKind === 'turbo') this.boost *= Math.pow(0.4, dt * 10);   // lift-off on shifts
    }else this.boost = 0;
    const boostMul = 1 + (s.boostGain || 0) * this.boost;
    if(input.throttle>0) a = input.throttle * s.accel * boostMul * nitroMul * driveMul * gearMul * (1 - Math.max(0,fSpeed)/Math.max(1, topNow)*0.55);
    else if(input.throttle<0){
      a = fSpeed > 1 ? input.throttle * s.accel*1.6 * (s.brake || 1) : input.throttle * s.accel*0.5; // brake vs reverse
    }
    // traction: more power than the tires can hold = wheelspin off the line
    this.spinning = false;
    if(a > 0 && s.traction && fSpeed < 22){
      const cap = s.traction * surf.grip * (0.75 + 0.25 * Math.min(1, fSpeed / 22));
      if(a > cap){ this.spinning = (a - cap) > 2.5; a = cap + (a - cap) * 0.12; }
    }
    // drag + rolling resistance (extra scrub with handbrake, mud/grass add drag)
    a -= fSpeed * (0.028 + (hb?0.06:0) + (surf.drag||0)) + Math.sign(fSpeed)*0.6;
    fSpeed += a*dt;
    // manual: the current gear caps your speed (rev limiter)
    const gearCap = this.box.mode === 'manual' ? this.box.gearTop(s.topSpeed*nitroMul) * 1.02 : Infinity;
    const maxF = topNow, maxR = -s.topSpeed*0.35;
    if(fSpeed > gearCap) fSpeed -= (fSpeed - gearCap) * Math.min(1, dt * 1.8);   // engine braking after a downshift
    // over the surface's top speed (e.g. driving into mud): bleed speed off smoothly instead of a wall
    if(fSpeed > maxF) fSpeed -= (fSpeed - maxF) * Math.min(1, dt * (surf.speed < 1 ? 2.2 : 60));
    fSpeed = Math.max(maxR, fSpeed);
    if(Math.abs(fSpeed)<0.15 && !input.throttle) fSpeed = 0;

    // steering — speed-sensitive
    const spdAbs = Math.abs(fSpeed);
    const gripF = Math.min(1, spdAbs/8);
    const steerAngle = this.steer * 0.55 * s.handling * gripF * (1 - Math.min(1, spdAbs/(s.topSpeed*1.4))*0.45);
    if(spdAbs>0.5) this.heading -= steerAngle * (fSpeed/spdAbs) * dt * (spdAbs>1? Math.min(2.2, spdAbs*0.12+0.8):1) * 2.2;

    // velocity recompose with lateral grip (drift when handbrake or hard steer at speed)
    const nFwdX=-Math.sin(this.heading), nFwdZ=-Math.cos(this.heading);
    const nFSpeed = this.vel.x*nFwdX + this.vel.z*nFwdZ;
    let latX = this.vel.x - nFwdX*nFSpeed, latZ = this.vel.z - nFwdZ*nFSpeed;
    this.drifting = !!(input.handbrake && spdAbs>6);
    // lateral retention per frame: normal grips hard, handbrake lets the tail hang out
    const latGrip = this.drifting ? 0.983 : Math.min(0.995, 0.90 + s.grip*0.06*surf.grip);
    const decay = Math.pow(latGrip, dt*60);
    latX*=decay; latZ*=decay;
    // forward speed tracks the computed value tightly (blend~=1 at 60fps keeps it responsive)
    const blendF = nFSpeed + (fSpeed - nFSpeed)*Math.min(1,dt*60);
    this.vel.x = nFwdX*blendF + latX;
    this.vel.z = nFwdZ*blendF + latZ;

    // integrate + collide
    let nx = this.pos.x + this.vel.x*dt, nz = this.pos.z + this.vel.z*dt;
    if(collide){
      const r = collide(nx, nz, this.pos.x, this.pos.z);
      nx = r.x; nz = r.z;
      // kill velocity into the wall
      if(r.hitX) this.vel.x *= -0.25;
      if(r.hitZ) this.vel.z *= -0.25;
    }
    this.pos.x=nx; this.pos.z=nz;
    this.speed = fSpeed;
    this.wheelSpin += fSpeed*dt*2.2;

    return {
      speed: fSpeed, drifting: this.drifting, nitro: this.nitroActive,
      nitroFrac: this.nitroLeft/s.nitroTime, steer: this.steer,
      gear: this.box.gear, rpm: this.box.rpm, shifting: this.box.shiftT > 0, limiter: this.box.limiter, reverse: this.box.reverse,
      boost: this.boost, psi: this.boost * (s.psi || 0), spinning: this.spinning, surface: surf.name,
    };
  }
}
