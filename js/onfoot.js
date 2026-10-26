// CITY DRIVER — on-foot movement (pure, no three.js, testable).
// Heading convention matches the car: 0 = facing -Z.
// input: { moveX:-1..1 (turn), moveY:-1..1 (forward +), run:bool }

export const WALK_SPEED = 4.2;   // m/s
export const RUN_SPEED  = 7.8;
export const BACK_SPEED = 2.6;
export const TURN_RATE  = 2.8;   // rad/s at full stick
export const PLAYER_R   = 0.45;  // collision radius

export class FootPhysics {
  constructor(){ this.reset(0, 0, 0); }
  reset(x, z, heading){
    this.pos = { x, z };
    this.heading = heading;
    this.speed = 0;     // signed forward speed
    this.phase = 0;     // walk-cycle phase for animation
  }
  update(input, dt, collide){
    dt = Math.min(dt, 0.05);
    const mx = clamp(input.moveX || 0), my = clamp(input.moveY || 0);
    // turning: a bit slower while backing up so it feels controlled
    this.heading -= mx * TURN_RATE * dt * (my < 0 ? 0.7 : 1);
    const target = my >= 0 ? my * (input.run ? RUN_SPEED : WALK_SPEED) : my * BACK_SPEED;
    // quick accel, quicker stop
    const k = Math.min(1, dt * (Math.abs(target) > Math.abs(this.speed) ? 9 : 14));
    this.speed += (target - this.speed) * k;
    if(Math.abs(this.speed) < 0.02 && !my) this.speed = 0;
    const fx = -Math.sin(this.heading), fz = -Math.cos(this.heading);
    let nx = this.pos.x + fx * this.speed * dt;
    let nz = this.pos.z + fz * this.speed * dt;
    if(collide){ const r = collide(nx, nz, PLAYER_R); nx = r.x; nz = r.z; }
    this.pos.x = nx; this.pos.z = nz;
    this.phase += this.speed * dt * 2.1;
    return this;
  }
}

// Camera-relative movement (free-look): walk toward moveYaw at stick strength mag (0..1); the body
// turns to faceYaw (the camera direction while aiming = strafing, otherwise the way you walk).
FootPhysics.prototype.updateFree = function(moveYaw, mag, faceYaw, run, dt, collide, turnRate = 10){
  dt = Math.min(dt, 0.05);
  mag = Math.max(0, Math.min(1, mag || 0));
  const target = mag * (run ? RUN_SPEED : WALK_SPEED) * (faceYaw !== moveYaw && mag > 0 ? strafeK(moveYaw, faceYaw) : 1);
  const k = Math.min(1, dt * (target > this.speed ? 9 : 14));
  this.speed += (target - this.speed) * k;
  if(this.speed < 0.02 && !mag) this.speed = 0;
  // turn the body (shortest way round)
  const dh = Math.atan2(Math.sin(faceYaw - this.heading), Math.cos(faceYaw - this.heading));
  if(mag > 0.05 || faceYaw !== moveYaw) this.heading += dh * Math.min(1, dt * turnRate);
  const mx = -Math.sin(moveYaw), mz = -Math.cos(moveYaw);
  let nx = this.pos.x + mx * this.speed * dt;
  let nz = this.pos.z + mz * this.speed * dt;
  if(collide){ const r = collide(nx, nz, PLAYER_R); nx = r.x; nz = r.z; }
  this.pos.x = nx; this.pos.z = nz;
  this.phase += this.speed * dt * 2.1;
  // signed speed for the animation: walking backwards while aiming plays the cycle in reverse
  this.animSpeed = Math.cos(moveYaw - this.heading) < -0.3 ? -this.speed : this.speed;
  return this;
};
// strafing / backpedalling while aiming is slower than walking forward
function strafeK(moveYaw, faceYaw){ const c = Math.cos(moveYaw - faceYaw); return c > 0.3 ? 1 : c > -0.3 ? 0.8 : 0.62; }

function clamp(v){ return v < -1 ? -1 : v > 1 ? 1 : v; }

// distance helper used for interaction prompts
export function dist2D(ax, az, bx, bz){
  const dx = ax - bx, dz = az - bz;
  return Math.sqrt(dx * dx + dz * dz);
}

// Where to drop the player when leaving a car: beside the driver's door
// (left side). Returns {x,z,heading}.
export function exitSpot(carX, carZ, carHeading){
  const rx = Math.cos(carHeading), rz = -Math.sin(carHeading);   // car's right vector
  return { x: carX - rx * 1.9, z: carZ - rz * 1.9, heading: carHeading };
}

// 2D ray vs axis-aligned box. Returns distance along the ray or Infinity.
export function rayAABB(ox, oz, dx, dz, box, maxD){
  let tmin = 0, tmax = maxD;
  if(Math.abs(dx) < 1e-9){ if(ox < box.minX || ox > box.maxX) return Infinity; }
  else{
    let t1 = (box.minX - ox) / dx, t2 = (box.maxX - ox) / dx;
    if(t1 > t2){ const t = t1; t1 = t2; t2 = t; }
    tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
    if(tmin > tmax) return Infinity;
  }
  if(Math.abs(dz) < 1e-9){ if(oz < box.minZ || oz > box.maxZ) return Infinity; }
  else{
    let t1 = (box.minZ - oz) / dz, t2 = (box.maxZ - oz) / dz;
    if(t1 > t2){ const t = t1; t1 = t2; t2 = t; }
    tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
    if(tmin > tmax) return Infinity;
  }
  return tmin;
}

// 2D ray vs circle. Returns distance or Infinity.
export function rayCircle(ox, oz, dx, dz, cx, cz, r, maxD){
  const fx = ox - cx, fz = oz - cz;
  const b = fx * dx + fz * dz;
  const c = fx * fx + fz * fz - r * r;
  const disc = b * b - c;
  if(disc < 0) return Infinity;
  const s = Math.sqrt(disc);
  let t = -b - s;
  if(t < 0) t = -b + s;
  return (t >= 0 && t <= maxD) ? t : Infinity;
}
