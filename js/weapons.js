// CITY DRIVER — shooting: hitscan rays, tracers, muzzle flash, impact sparks.
// Rays are 2D (XZ) at chest height; they stop on buildings/walls and knock
// down shooting-range targets. Light auto-aim helps on touch screens.
import * as THREE from 'three';
import { weaponDef } from './shop.js';
import { rayAABB, rayCircle } from './onfoot.js';
import { PuffPool } from './particles.js';
import { hitTarget } from './stores.js';

const AIM_CONE = 0.22;   // rad — snap to a target inside this cone
const SHOT_Y = 1.45;

export function createWeapons(scene){
  // tracer pool
  const tracers = [];
  for(let i = 0; i < 16; i++){
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
    const m = new THREE.LineBasicMaterial({ color:0xffe08a, transparent:true, opacity:0, depthWrite:false, blending:THREE.AdditiveBlending });
    const l = new THREE.Line(g, m);
    l.frustumCulled = false; l.visible = false;
    scene.add(l);
    tracers.push({ l, life:0 });
  }
  let ti = 0;
  const flash = new PuffPool(scene, 8, { color:0xffc860, opacity:0.95, blending:THREE.AdditiveBlending });
  const sparks = new PuffPool(scene, 30, { color:0xffb347, opacity:0.9, blending:THREE.AdditiveBlending });
  const dust = new PuffPool(scene, 20, { color:0xb8b0a0, opacity:0.5 });
  let cooldown = 0;

  function tracer(x0, z0, x1, z1){
    const t = tracers[ti]; ti = (ti + 1) % tracers.length;
    const a = t.l.geometry.attributes.position.array;
    a[0] = x0; a[1] = SHOT_Y; a[2] = z0; a[3] = x1; a[4] = SHOT_Y - 0.05; a[5] = z1;
    t.l.geometry.attributes.position.needsUpdate = true;
    t.l.visible = true; t.life = 0.07; t.l.material.opacity = 1;
  }

  // ctx: { save, pos:{x,z}, heading, colliders, targets, audio, onTargetHit() }
  // trigger: true while fire is held; edge: true on the frame it was pressed
  function update(dt, ctx, trigger, edge){
    cooldown = Math.max(0, cooldown - dt);
    for(const t of tracers){
      if(!t.l.visible) continue;
      t.life -= dt;
      if(t.life <= 0) t.l.visible = false; else t.l.material.opacity = t.life / 0.07;
    }
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

    const fx = -Math.sin(ctx.heading), fz = -Math.cos(ctx.heading);
    const rx = Math.cos(ctx.heading), rz = -Math.sin(ctx.heading);
    const mx = ctx.pos.x + fx * 0.95 + rx * 0.3, mz = ctx.pos.z + fz * 0.95 + rz * 0.3;
    flash.emit(mx, SHOT_Y, mz, { vx:fx * 2, vy:0, vz:fz * 2, life:0.06, size:w.id === 'shotgun' ? 1.1 : 0.7, grow:0.6 });

    let hits = 0;
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
      const ex = mx + dx * tBest, ez = mz + dz * tBest;
      if(p < 3 || w.pellets === 1) tracer(mx, mz, ex, ez);
      if(hitT){
        if(hitTarget(hitT)){ hits++; ctx.onTargetHit && ctx.onTargetHit(hitT); }
        for(let k = 0; k < 4; k++) sparks.emit(ex, SHOT_Y, ez, { vx:(Math.random() - 0.5) * 4, vy:Math.random() * 3, vz:(Math.random() - 0.5) * 4, life:0.25, size:0.25, grow:0.1 });
      }else if(tBest < w.range){
        sparks.emit(ex - dx * 0.1, SHOT_Y, ez - dz * 0.1, { vx:-dx * 2, vy:1.5, vz:-dz * 2, life:0.18, size:0.3, grow:0.2 });
        dust.emit(ex - dx * 0.2, SHOT_Y, ez - dz * 0.2, { vx:-dx, vy:0.6, vz:-dz, life:0.5, size:0.4, grow:1.2 });
      }
    }
    ctx.audio.shot && ctx.audio.shot(w.id);
    return { fired:true, hits };
  }

  return { update };
}
