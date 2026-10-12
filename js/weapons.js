// CITY DRIVER — shooting: visible bullets, muzzle flash, impact sparks.
// Aim is resolved with a 2D (XZ) ray at chest height so you always know what
// you hit, but every shot fires a real glowing bullet with a tracer trail that
// flies to that point — the hit (target knockdown, sparks) lands when the
// bullet arrives. Light auto-aim helps on touch screens.
import * as THREE from 'three';
import { weaponDef } from './shop.js';
import { rayAABB, rayCircle } from './onfoot.js';
import { PuffPool } from './particles.js';
import { hitTarget } from './stores.js';

const AIM_CONE = 0.22;   // rad — snap to a target inside this cone
const SHOT_Y = 1.45;
export const BULLET_SPEED = 85;    // m/s — slow enough to watch it fly
const TRAIL = 4.5;                 // tracer length behind the bullet (m)

export function createWeapons(scene){
  // bullet pool: glowing slug + thick additive tracer trail (meshes, so they
  // stay visible on phones where GL lines are always 1px)
  const bullets = [];
  const slugGeo = new THREE.CapsuleGeometry(0.07, 0.5, 2, 8).rotateX(Math.PI / 2);
  const trailGeo = new THREE.CylinderGeometry(0.008, 0.05, 1, 6, 1, true).rotateX(Math.PI / 2).translate(0, 0, 0.5);
  for(let i = 0; i < 48; i++){
    const slug = new THREE.Mesh(slugGeo, new THREE.MeshBasicMaterial({ color:0xfff6c8, transparent:true, opacity:1, blending:THREE.AdditiveBlending, depthWrite:false }));
    slug.visible = false; slug.frustumCulled = false;
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), new THREE.MeshBasicMaterial({ color:0xff9a2e, transparent:true, opacity:0.45, blending:THREE.AdditiveBlending, depthWrite:false }));
    slug.add(glow);
    const trail = new THREE.Mesh(trailGeo, new THREE.MeshBasicMaterial({ color:0xffb347, transparent:true, opacity:0.75, blending:THREE.AdditiveBlending, depthWrite:false, side:THREE.DoubleSide }));
    trail.visible = false; trail.frustumCulled = false;
    scene.add(slug, trail);
    bullets.push({ slug, trail, live:false, x0:0, z0:0, dx:0, dz:0, dist:0, travel:0, hitT:null, onHit:null, wall:false });
  }
  let bi = 0;
  const flash = new PuffPool(scene, 8, { color:0xffc860, opacity:0.95, blending:THREE.AdditiveBlending });
  const sparks = new PuffPool(scene, 30, { color:0xffb347, opacity:0.9, blending:THREE.AdditiveBlending });
  const dust = new PuffPool(scene, 20, { color:0xb8b0a0, opacity:0.5 });
  let cooldown = 0;

  // launch a bullet from (x0,z0) along (dx,dz) that stops after `dist` m.
  // hitT: target it will knock down on arrival; wall: sparks on arrival.
  function fire(x0, z0, dx, dz, dist, hitT, wall, onHit, onArrive){
    const b = bullets[bi]; bi = (bi + 1) % bullets.length;
    Object.assign(b, { live:true, x0, z0, dx, dz, dist:Math.max(0.5, dist), travel:0, hitT, wall, onHit, onArrive:onArrive || null });
    b.slug.visible = true; b.trail.visible = true;
    b.slug.rotation.y = Math.atan2(dx, dz);
    place(b);
  }
  function place(b){
    const d = Math.min(b.travel, b.dist);
    const hx = b.x0 + b.dx * d, hz = b.z0 + b.dz * d;
    b.slug.position.set(hx, SHOT_Y, hz);
    setTrail(b, hx, hz, Math.min(TRAIL, d));
  }
  // trail mesh points backwards (+local z) from the bullet head, length len
  function setTrail(b, hx, hz, len){
    b.trail.position.set(hx, SHOT_Y, hz);
    b.trail.rotation.y = Math.atan2(-b.dx, -b.dz);
    b.trail.scale.set(1, 1, Math.max(0.01, len));
  }
  function impact(b){
    const ex = b.x0 + b.dx * b.dist, ez = b.z0 + b.dz * b.dist;
    if(b.onArrive){ const f = b.onArrive; b.onArrive = null; f(); return; }
    if(b.hitT){
      if(hitTarget(b.hitT) && b.onHit) b.onHit(b.hitT);
      for(let k = 0; k < 5; k++) sparks.emit(ex, SHOT_Y, ez, { vx:(Math.random() - 0.5) * 4, vy:Math.random() * 3, vz:(Math.random() - 0.5) * 4, life:0.25, size:0.25, grow:0.1 });
    }else if(b.wall){
      sparks.emit(ex - b.dx * 0.1, SHOT_Y, ez - b.dz * 0.1, { vx:-b.dx * 2, vy:1.5, vz:-b.dz * 2, life:0.18, size:0.3, grow:0.2 });
      dust.emit(ex - b.dx * 0.2, SHOT_Y, ez - b.dz * 0.2, { vx:-b.dx, vy:0.6, vz:-b.dz, life:0.5, size:0.4, grow:1.2 });
    }
  }
  function stepBullets(dt){
    for(const b of bullets){
      if(!b.live) continue;
      b.travel += BULLET_SPEED * dt;
      if(b.travel >= b.dist){
        if(b.slug.visible){ impact(b); b.slug.visible = false; }
        // let the trail catch up and vanish into the impact point
        if(b.travel - b.dist >= TRAIL){ b.live = false; b.trail.visible = false; continue; }
        const ex = b.x0 + b.dx * b.dist, ez = b.z0 + b.dz * b.dist, back = TRAIL - (b.travel - b.dist);
        setTrail(b, ex, ez, Math.min(back, b.dist));
        continue;
      }
      place(b);
    }
  }

  // bullets fired by other players (visual only) — muzzle + tracer + impact sparks
  function remoteShot(x0, z0, x1, z1){
    const dx = x1 - x0, dz = z1 - z0, d = Math.hypot(dx, dz);
    if(!(d > 0.1)) return;
    flash.emit(x0, SHOT_Y, z0, { vx:dx / d * 2, vy:0, vz:dz / d * 2, life:0.06, size:0.7, grow:0.6 });
    fire(x0, z0, dx / d, dz / d, d, null, true, null);
  }

  // ctx: { save, pos:{x,z}, heading, colliders, targets, audio, onTargetHit() }
  // trigger: true while fire is held; edge: true on the frame it was pressed
  function update(dt, ctx, trigger, edge){
    cooldown = Math.max(0, cooldown - dt);
    stepBullets(dt);
    flash.update(dt); sparks.update(dt); dust.update(dt);

    const id = ctx.save.equipped;
    const w = id && weaponDef(id);
    trigger = trigger || edge;          // a quick tap fires even if released before this frame
    if(!w || !trigger || cooldown > 0) return { fired:false };
    if(!w.auto && !edge) return { fired:false };
    if((ctx.save.ammo[id] | 0) <= 0){
      if(edge){ ctx.audio.click && ctx.audio.click(); ctx.toast && ctx.toast('Out of ammo — buy more at LOCK & LOAD'); }
      cooldown = 0.3;
      return { fired:false, empty:true };
    }
    ctx.save.ammo[id]--;
    cooldown = w.rate;

    // auto-aim: pick the standing target nearest the crosshair inside the cone
    let aimH = ctx.heading, best = AIM_CONE;
    for(const t of ctx.targets){
      if(!t.up) continue;
      const dx = t.x - ctx.pos.x, dz = t.z - ctx.pos.z;
      const d = Math.hypot(dx, dz);
      if(d > w.range || d < 0.5) continue;
      const h = Math.atan2(-dx, -dz);                  // heading convention: 0 = -Z
      let diff = Math.atan2(Math.sin(h - ctx.heading), Math.cos(h - ctx.heading));
      if(Math.abs(diff) < best){ best = Math.abs(diff); aimH = h; }
    }

    if(ctx.hitables) for(const lst of ctx.hitables) for(const t of lst){
      if(t.ref && t.ref.kind === 'ped') continue;          // only snap to hostiles / players
      const dx = t.x - ctx.pos.x, dz = t.z - ctx.pos.z;
      const d = Math.hypot(dx, dz);
      if(d > w.range || d < 0.5) continue;
      const h = Math.atan2(-dx, -dz);
      const diff = Math.abs(Math.atan2(Math.sin(h - ctx.heading), Math.cos(h - ctx.heading)));
      if(diff < best){ best = diff; aimH = h; }
    }
    const fx = -Math.sin(ctx.heading), fz = -Math.cos(ctx.heading);
    const rx = Math.cos(ctx.heading), rz = -Math.sin(ctx.heading);
    const mx = ctx.pos.x + fx * 0.95 + rx * 0.3, mz = ctx.pos.z + fz * 0.95 + rz * 0.3;
    flash.emit(mx, SHOT_Y, mz, { vx:fx * 2, vy:0, vz:fz * 2, life:0.06, size:w.id === 'shotgun' ? 1.1 : 0.7, grow:0.6 });

    let hits = 0;
    const shots = [];
    for(let p = 0; p < w.pellets; p++){
      const h = aimH + (Math.random() - 0.5) * 2 * w.spread;
      const dx = -Math.sin(h), dz = -Math.cos(h);
      let tBest = w.range, hitT = null;
      for(const c of ctx.colliders){
        const d = rayAABB(mx, mz, dx, dz, c, tBest);
        if(d < tBest){ tBest = d; hitT = null; }
      }
      for(const t of ctx.targets){
        if(!t.up) continue;
        const d = rayCircle(mx, mz, dx, dz, t.x, t.z, t.r, tBest);
        if(d < tBest){ tBest = d; hitT = t; }
      }
      // people, enemies, other players: { x, z, r, ref }
      let hitP = null;
      if(ctx.hitables) for(const lst of ctx.hitables) for(const t of lst){
        const d = rayCircle(mx, mz, dx, dz, t.x, t.z, t.r, tBest);
        if(d < tBest){ tBest = d; hitP = t.ref; hitT = null; }
      }
      if(hitT || hitP) hits++;
      if(hitP){
        const dmg = w.dmg || 20, ddx = dx, ddz = dz;
        fire(mx, mz, dx, dz, tBest, null, false, null, () => ctx.onPersonHit && ctx.onPersonHit(hitP, dmg, ddx, ddz));
      }else fire(mx, mz, dx, dz, tBest, hitT, tBest < w.range, ctx.onTargetHit);
      if(p < 3) shots.push([mx, mz, mx + dx * tBest, mz + dz * tBest]);
    }
    if(ctx.onShot) ctx.onShot(shots);
    ctx.audio.shot && ctx.audio.shot(w.id);
    return { fired:true, hits };
  }

  return { update, remoteShot };
}
