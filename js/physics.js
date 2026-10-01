// Arcade car physics: simple, fun, driftable. Units: meters, seconds.
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
    if(input.throttle>0) a = input.throttle * s.accel * nitroMul * driveMul * (1 - Math.max(0,fSpeed)/(s.topSpeed*nitroMul)*0.72);
    else if(input.throttle<0){
      a = fSpeed > 1 ? input.throttle * s.accel*1.6 : input.throttle * s.accel*0.5; // brake vs reverse
    }
    // drag + rolling resistance (extra scrub with handbrake)
    a -= fSpeed * (0.028 + (hb?0.06:0)) + Math.sign(fSpeed)*0.6;
    fSpeed += a*dt;
    const maxF = s.topSpeed*nitroMul, maxR = -s.topSpeed*0.35;
    fSpeed = Math.max(maxR, Math.min(maxF, fSpeed));
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
    const latGrip = this.drifting ? 0.983 : Math.min(0.995, 0.90 + s.grip*0.06);
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
    };
  }
}
