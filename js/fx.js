// CITY DRIVER — wheel effects: water spray, wake rings, mud chunks, dust.
// Everything is pooled (no per-frame allocation). Particles have gravity so
// spray arcs up and falls back down.
import * as THREE from 'three';

function softDot(){
  const c = document.createElement('canvas'); c.width = c.height = 64;
  const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 2, 32, 32, 30);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.45, 'rgba(255,255,255,0.6)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function blob(){
  const c = document.createElement('canvas'); c.width = c.height = 32;
  const g = c.getContext('2d'); g.fillStyle = '#fff';
  g.beginPath(); g.arc(16, 16, 11, 0, Math.PI * 2); g.fill();
  for(let i = 0; i < 5; i++){ const a = Math.random() * 6.28; g.beginPath(); g.arc(16 + Math.cos(a) * 10, 16 + Math.sin(a) * 10, 3 + Math.random() * 3, 0, Math.PI * 2); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// a pool of sprites with velocity + gravity
class Pool {
  constructor(scene, n, mat, { gravity = 9.8, grow = 1 } = {}){
    this.items = []; this.i = 0; this.g = gravity; this.grow = grow;
    for(let k = 0; k < n; k++){
      const s = new THREE.Sprite(mat.clone());
      s.visible = false; s.userData = { vx:0, vy:0, vz:0, life:0, max:1, size:1 };
      scene.add(s); this.items.push(s);
    }
    this.baseOpacity = mat.opacity;
  }
  emit(x, y, z, vx, vy, vz, life, size){
    const s = this.items[this.i]; this.i = (this.i + 1) % this.items.length;
    const u = s.userData; u.vx = vx; u.vy = vy; u.vz = vz; u.life = u.max = life; u.size = size;
    s.position.set(x, y, z); s.scale.set(size, size, 1); s.visible = true; s.material.opacity = this.baseOpacity;
  }
  update(dt){
    for(const s of this.items){
      if(!s.visible) continue;
      const u = s.userData;
      u.life -= dt; if(u.life <= 0){ s.visible = false; continue; }
      u.vy -= this.g * dt;
      s.position.x += u.vx * dt; s.position.y += u.vy * dt; s.position.z += u.vz * dt;
      if(s.position.y < 0.05){ s.position.y = 0.05; u.vy = 0; u.vx *= 0.6; u.vz *= 0.6; }
      const t = 1 - u.life / u.max, sz = u.size * (1 + t * this.grow);
      s.scale.set(sz, sz, 1);
      s.material.opacity = this.baseOpacity * (1 - t * t);
    }
  }
}

export function createWheelFX(scene){
  const dot = softDot(), chunk = blob();
  const spray = new Pool(scene, 90, new THREE.SpriteMaterial({ map:dot, color:0xe8f4ff, transparent:true, opacity:0.8, depthWrite:false }), { gravity:9.8, grow:0.8 });
  const mist  = new Pool(scene, 30, new THREE.SpriteMaterial({ map:dot, color:0xdfefff, transparent:true, opacity:0.35, depthWrite:false }), { gravity:-0.3, grow:2.2 });
  const mud   = new Pool(scene, 90, new THREE.SpriteMaterial({ map:chunk, color:0x4a3220, transparent:true, opacity:0.95, depthWrite:false }), { gravity:12, grow:0.2 });
  const dust  = new Pool(scene, 40, new THREE.SpriteMaterial({ map:dot, color:0xb8a580, transparent:true, opacity:0.4, depthWrite:false }), { gravity:-0.4, grow:2.6 });
  // wake rings on the water surface
  const ringGeo = new THREE.RingGeometry(0.9, 1, 32).rotateX(-Math.PI / 2);
  const rings = [];
  for(let k = 0; k < 16; k++){
    const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color:0xffffff, transparent:true, opacity:0, depthWrite:false }));
    m.visible = false; m.renderOrder = 3; scene.add(m);
    rings.push({ m, life:0, max:1, grow:1 });
  }
  let ri = 0, acc = 0;
  function ring(x, z, y, size, life){
    const r = rings[ri]; ri = (ri + 1) % rings.length;
    r.m.position.set(x, y, z); r.m.scale.set(size, 1, size); r.m.visible = true; r.life = r.max = life; r.grow = size;
  }

  // wheels: world positions [{x,y,z}], speed m/s, heading, surface name, depth (m)
  function emitWheels(dt, wheels, speed, heading, surface, depth){
    const sp = Math.abs(speed);
    acc += dt;
    if(acc < 1 / 40) return; acc = 0;
    const fx = -Math.sin(heading) * Math.sign(speed || 1), fz = -Math.cos(heading) * Math.sign(speed || 1);
    const rx = Math.cos(heading), rz = -Math.sin(heading);
    const wet = surface === 'deep' || surface === 'water' || surface === 'puddle';
    if(wet && sp > 1.2){
      const big = surface === 'deep' ? 1.8 : surface === 'water' ? 1.25 : 0.7;
      const k = Math.min(1.6, sp / 14) * big;
      for(const w of wheels){
        const side = Math.sign((w.x - wheels[0].x) * rx + (w.z - wheels[0].z) * rz) || 1;
        for(let n = 0; n < 2; n++){
          // rooster tail behind + sideways sheets
          spray.emit(w.x, Math.max(0.15, w.y - 0.1), w.z,
            -fx * sp * 0.35 + rx * side * (1.5 + Math.random() * 2.5) * k + (Math.random() - 0.5),
            (2.2 + Math.random() * 3.2) * k, -fz * sp * 0.35 + rz * side * (1.5 + Math.random() * 2.5) * k + (Math.random() - 0.5),
            0.5 + Math.random() * 0.4, (0.35 + Math.random() * 0.3) * (0.7 + k * 0.5));
        }
      }
      if(Math.random() < 0.5 * k) mist.emit(wheels[0].x, 0.6, wheels[0].z, -fx * 2, 0.6, -fz * 2, 0.9, 1.4 * k);
      if(surface !== 'puddle' && Math.random() < 0.55){
        const w = wheels[(Math.random() * wheels.length) | 0];
        ring(w.x, w.z, 0.11, 0.8 + k * 0.6, 1.4);
      }
    }else if(surface === 'mud' && sp > 1){
      const k = Math.min(1.5, sp / 12);
      for(const w of wheels){
        if(Math.random() < 0.55) mud.emit(w.x, w.y, w.z, -fx * (2 + sp * 0.4) + (Math.random() - 0.5) * 3, 2 + Math.random() * 4 * k, -fz * (2 + sp * 0.4) + (Math.random() - 0.5) * 3, 0.7 + Math.random() * 0.4, 0.22 + Math.random() * 0.22);
      }
    }else if((surface === 'dirt' || surface === 'gravel' || surface === 'crop' || surface === 'grass') && sp > 6){
      if(Math.random() < (surface === 'grass' ? 0.25 : 0.7)){
        const w = wheels[2 + ((Math.random() * 2) | 0)] || wheels[0];
        dust.emit(w.x, 0.4, w.z, -fx * 2 + (Math.random() - 0.5), 0.5, -fz * 2 + (Math.random() - 0.5), 1.2, surface === 'grass' ? 0.8 : 1.4);
      }
    }
  }
  // one big splash (jumping in, driving off a bank, a person wading in)
  function splash(x, z, power = 1){
    for(let n = 0; n < 18 * power; n++){
      const a = Math.random() * Math.PI * 2, v = 2 + Math.random() * 4;
      spray.emit(x, 0.2, z, Math.cos(a) * v, 3 + Math.random() * 4 * power, Math.sin(a) * v, 0.7 + Math.random() * 0.4, 0.45 + Math.random() * 0.4);
    }
    ring(x, z, 0.11, 1.4 * power, 1.6); ring(x, z, 0.11, 0.7 * power, 1.1);
  }
  function update(dt){
    spray.update(dt); mist.update(dt); mud.update(dt); dust.update(dt);
    for(const r of rings){
      if(!r.m.visible) continue;
      r.life -= dt; if(r.life <= 0){ r.m.visible = false; continue; }
      const t = 1 - r.life / r.max, s = r.grow * (1 + t * 3.5);
      r.m.scale.set(s, 1, s); r.m.material.opacity = 0.28 * (1 - t) * (1 - t);
    }
  }
  return { emitWheels, splash, update };
}
