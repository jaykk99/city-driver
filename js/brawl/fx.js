// BAR BRAWL — gore physics. Voxel gibs (instanced cubes that bounce, slide
// and settle on the floor and furniture), blood splats on floors and walls,
// and rigid debris for severed limbs, heads and whole bodies.
import * as THREE from 'three';
import { V } from './voxel.js';
import { groundAt } from './maps.js';

const G = 18;   // gravity (m/s^2), a bit heavier than real for punchy arcs

export function createFX(scene, L){
  // ---------- voxel gibs ----------
  const MAXG = 2600;
  const gMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(V, V, V), new THREE.MeshLambertMaterial(), MAXG);
  gMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  gMesh.count = 0; gMesh.frustumCulled = false; gMesh.castShadow = false;
  gMesh.setColorAt(0, new THREE.Color(1, 1, 1));
  scene.add(gMesh);
  const px = new Float32Array(MAXG), py = new Float32Array(MAXG), pz = new Float32Array(MAXG);
  const vx = new Float32Array(MAXG), vy = new Float32Array(MAXG), vz = new Float32Array(MAXG);
  const rs = new Float32Array(MAXG), sc = new Float32Array(MAXG);
  const state = new Uint8Array(MAXG);   // 0 free, 1 flying, 2 resting
  const blood = new Uint8Array(MAXG);
  let gi = 0, gUsed = 0;
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color();

  function gib(x, y, z, dx, dy, dz, color, isBlood, size = 1){
    const i = gi; gi = (gi + 1) % MAXG; gUsed = Math.max(gUsed, gi === 0 ? MAXG : gi);
    px[i] = x; py[i] = y; pz[i] = z; vx[i] = dx; vy[i] = dy; vz[i] = dz;
    rs[i] = Math.random() * 6.28; sc[i] = size * (isBlood ? 0.7 + Math.random() * 0.5 : 0.9 + Math.random() * 0.3);
    state[i] = 1; blood[i] = isBlood ? 1 : 0;
    gMesh.setColorAt(i, _c.setHex(color));
    gMesh.instanceColor.needsUpdate = true;
    gMesh.count = gUsed;
  }
  const BLOODS = [0x9a0a0a, 0xb01010, 0x7a0606, 0xc81818];
  // a burst of body voxels + blood from a wound. dir = which way the hit pushed
  function burst(x, y, z, n, palette, dirX = 0, dirZ = 0, power = 1){
    for(let k = 0; k < n; k++){
      const isB = k % 2 === 0 || !palette;
      const col = isB ? BLOODS[k & 3] : palette[(Math.random() * palette.length) | 0];
      const sp = (1.5 + Math.random() * 3.5) * power;
      gib(x + (Math.random() - 0.5) * 0.2, y + (Math.random() - 0.5) * 0.2, z + (Math.random() - 0.5) * 0.2,
        dirX * sp * 0.8 + (Math.random() - 0.5) * sp, 1.5 + Math.random() * 3 * power, dirZ * sp * 0.8 + (Math.random() - 0.5) * sp, col, isB);
    }
  }
  function glass(x, y, z, color = 0x7fbf77, n = 14){
    for(let k = 0; k < n; k++) gib(x, y, z, (Math.random() - 0.5) * 5, 1 + Math.random() * 3, (Math.random() - 0.5) * 5, k % 4 ? color : 0xe0ffe0, false, 0.5);
  }

  // ---------- blood splats (floors + walls) ----------
  const MAXS = 2400;
  const sTex = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
    g.fillStyle = '#fff';
    // blocky splat to match the voxels
    for(let k = 0; k < 26; k++){ const a = Math.random() * 6.28, d = Math.random() * 22, r = 3 + Math.random() * 7; g.fillRect(32 + Math.cos(a) * d - r / 2, 32 + Math.sin(a) * d - r / 2, r, r); }
    g.fillRect(20, 20, 24, 24);
    const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; return t;
  })();
  const sMesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1),
    new THREE.MeshLambertMaterial({ alphaMap:sTex, transparent:true, depthWrite:false, polygonOffset:true, polygonOffsetFactor:-2, polygonOffsetUnits:-2 }), MAXS);
  sMesh.count = 0; sMesh.frustumCulled = false; sMesh.setColorAt(0, _c.setHex(0x900000));
  scene.add(sMesh);
  let si = 0, sUsed = 0, splatCount = 0;
  const NX = new THREE.Vector3(), UP = new THREE.Vector3(0, 0, 1);
  function splat(x, y, z, nx, ny, nz, size){
    NX.set(nx, ny, nz);
    _q.setFromUnitVectors(UP, NX);
    _e.set(0, 0, Math.random() * 6.28); const q2 = new THREE.Quaternion().setFromEuler(_e); _q.multiply(q2);
    _p.set(x + nx * 0.01, y + ny * 0.012, z + nz * 0.01); _s.set(size, size, 1);
    _m.compose(_p, _q, _s);
    sMesh.setMatrixAt(si, _m);
    sMesh.setColorAt(si, _c.setHex(BLOODS[(Math.random() * 4) | 0]));
    si = (si + 1) % MAXS; sUsed = Math.max(sUsed, si === 0 ? MAXS : si); sMesh.count = sUsed;
    sMesh.instanceMatrix.needsUpdate = true; sMesh.instanceColor.needsUpdate = true;
    splatCount++;
  }
  function pool(x, z, size){ splat(x, groundAt(L, x, z, 2), z, 0, 1, 0, size); }

  // ---------- rigid debris (limbs, heads, bodies) ----------
  const debris = [];
  const MAXD = 46;
  function addDebris(obj, vel, angVel, half = 0.15, bleed = true, palette = null){
    obj.updateMatrixWorld(true);
    const wp = new THREE.Vector3(), wq = new THREE.Quaternion(), ws = new THREE.Vector3();
    obj.matrixWorld.decompose(wp, wq, ws);
    if(obj.parent) obj.parent.remove(obj);
    obj.position.copy(wp); obj.quaternion.copy(wq); obj.scale.copy(ws);
    // spin around the part's own centre, not its joint
    const ch = obj.children[0];
    if(ch && ch.geometry){
      if(!ch.geometry.boundingSphere) ch.geometry.computeBoundingSphere();
      const c = ch.geometry.boundingSphere.center.clone();
      for(const k of obj.children) k.position.sub(c);
      obj.position.add(c.multiply(ws).applyQuaternion(wq));
    }
    scene.add(obj);
    const d = { obj, vel:vel.clone(), ang:angVel.clone(), half, bleed:bleed ? 3 : 0, palette, rest:0, kick:null };
    debris.push(d);
    if(debris.length > MAXD){ const o = debris.shift(); scene.remove(o.obj); }
    return d;
  }

  // ---------- tracers ----------
  const tracers = [];
  const tMat = new THREE.LineBasicMaterial({ color:0xffe08a, transparent:true });
  function tracer(a, b){
    const g = new THREE.BufferGeometry().setFromPoints([a.clone(), b.clone()]);
    const l = new THREE.Line(g, tMat.clone()); scene.add(l); tracers.push({ l, t:0.08 });
  }

  const HW = L.w / 2, HD = L.d / 2;
  function update(dt){
    // gibs
    let dirty = false;
    const put = i => { if(state[i] === 0) _s.set(0, 0, 0); else _s.set(sc[i], sc[i], sc[i]); _e.set(rs[i], rs[i] * 0.7, 0); _q.setFromEuler(_e); _p.set(px[i], py[i], pz[i]); _m.compose(_p, _q, _s); gMesh.setMatrixAt(i, _m); dirty = true; };
    for(let i = 0; i < gUsed; i++){
      if(state[i] !== 1) continue;
      vy[i] -= G * dt;
      px[i] += vx[i] * dt; py[i] += vy[i] * dt; pz[i] += vz[i] * dt;
      // walls: blood paints them, voxels bounce off
      if(Math.abs(px[i]) > HW - 0.04){ const s = Math.sign(px[i]); px[i] = s * (HW - 0.04); if(blood[i] && Math.random() < 0.35 && py[i] < L.h){ splat(px[i], py[i], pz[i], -s, 0, 0, 0.18 + Math.random() * 0.25); state[i] = 0; put(i); continue; } vx[i] *= -0.35; }
      if(Math.abs(pz[i]) > HD - 0.04){ const s = Math.sign(pz[i]); pz[i] = s * (HD - 0.04); if(blood[i] && Math.random() < 0.35 && py[i] < L.h){ splat(px[i], py[i], pz[i], 0, 0, -s, 0.18 + Math.random() * 0.25); state[i] = 0; put(i); continue; } vz[i] *= -0.35; }
      if(L.h && py[i] > L.h - 0.05){ py[i] = L.h - 0.05; vy[i] = -Math.abs(vy[i]) * 0.3; }
      const g = groundAt(L, px[i], pz[i], py[i] + 0.2) + V * 0.5 * sc[i];
      if(py[i] <= g){
        py[i] = g;
        if(blood[i]){ if(Math.random() < 0.5) splat(px[i], g - V * 0.5 * sc[i], pz[i], 0, 1, 0, 0.16 + Math.random() * 0.3); state[i] = 0; }
        else if(Math.abs(vy[i]) > 1.2){ vy[i] *= -0.3; vx[i] *= 0.55; vz[i] *= 0.55; }
        else { vy[i] = 0; vx[i] *= 0.82; vz[i] *= 0.82; if(vx[i] * vx[i] + vz[i] * vz[i] < 0.02) state[i] = 2; }
      }
      put(i);
    }
    if(dirty) gMesh.instanceMatrix.needsUpdate = true;
    // debris
    for(const d of debris){
      if(d.rest > 1.5) continue;
      const o = d.obj;
      d.vel.y -= G * dt;
      o.position.addScaledVector(d.vel, dt);
      const al = d.ang.length();
      if(al > 0.01){ _q.setFromAxisAngle(_p.copy(d.ang).divideScalar(al), al * dt); o.quaternion.premultiply(_q); }
      if(Math.abs(o.position.x) > HW - d.half){ o.position.x = Math.sign(o.position.x) * (HW - d.half); d.vel.x *= -0.4; if(d.bleed) splat(o.position.x + Math.sign(o.position.x) * d.half, o.position.y, o.position.z, -Math.sign(o.position.x), 0, 0, 0.5); }
      if(Math.abs(o.position.z) > HD - d.half){ o.position.z = Math.sign(o.position.z) * (HD - d.half); d.vel.z *= -0.4; if(d.bleed) splat(o.position.x, o.position.y, o.position.z + Math.sign(o.position.z) * d.half, 0, 0, -Math.sign(o.position.z), 0.5); }
      const g = groundAt(L, o.position.x, o.position.z, o.position.y + 0.3) + d.half;
      if(o.position.y < g){
        o.position.y = g;
        if(d.vel.y < -2.5 && d.bleed){ pool(o.position.x, o.position.z, 0.4 + Math.random() * 0.4); d.bleed--; }
        d.vel.y = Math.abs(d.vel.y) > 2 ? -d.vel.y * 0.3 : 0;
        d.vel.x *= 0.7; d.vel.z *= 0.7; d.ang.multiplyScalar(0.7);
        if(d.vel.lengthSq() < 0.05){ d.rest += dt; if(d.ang.lengthSq() < 0.5) d.ang.set(0, 0, 0); }
      } else if(d.bleed && Math.random() < 0.3){
        gib(o.position.x, o.position.y, o.position.z, d.vel.x * 0.3, 0, d.vel.z * 0.3, BLOODS[(Math.random() * 4) | 0], true);
      }
    }
    for(let i = tracers.length - 1; i >= 0; i--){
      const t = tracers[i]; t.t -= dt; t.l.material.opacity = Math.max(0, t.t / 0.08);
      if(t.t <= 0){ scene.remove(t.l); t.l.geometry.dispose(); tracers.splice(i, 1); }
    }
  }
  // kick resting debris (walk into a head and it rolls away)
  function nudge(x, z, r, fx, fz){
    for(const d of debris){
      const o = d.obj, dx = o.position.x - x, dz = o.position.z - z;
      if(dx * dx + dz * dz < r * r){ d.vel.x += fx; d.vel.z += fz; d.vel.y += 1.5; d.ang.set(Math.random() * 6 - 3, 0, Math.random() * 6 - 3); d.rest = 0; }
    }
  }

  return { gib, burst, glass, splat, pool, addDebris, tracer, update, nudge, get splats(){ return splatCount; } };
}
