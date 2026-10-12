// CITY DRIVER — blood: spray particles + pools that spread on the ground.
import * as THREE from 'three';
import { PuffPool } from './particles.js';

function poolTexture(){
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  // irregular splat: overlapping blobs
  g.fillStyle = 'rgba(110,0,0,1)';
  const rnd = (a, b) => a + Math.random() * (b - a);
  g.beginPath(); g.arc(64, 64, 40, 0, Math.PI * 2); g.fill();
  for(let i = 0; i < 14; i++){
    const a = rnd(0, Math.PI * 2), r = rnd(20, 50), s = rnd(6, 18);
    g.beginPath(); g.arc(64 + Math.cos(a) * r, 64 + Math.sin(a) * r, s, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function createBlood(scene){
  const spray = new PuffPool(scene, 60, { color:0x9b0000, opacity:0.95, size:0.35 });
  const mist = new PuffPool(scene, 24, { color:0x6a0000, opacity:0.55, size:0.8 });
  const tex = poolTexture();
  const pools = [];
  for(let i = 0; i < 24; i++){
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2),
      new THREE.MeshStandardMaterial({ map:tex, transparent:true, opacity:0.92, roughness:0.15, metalness:0.2, depthWrite:false,
        polygonOffset:true, polygonOffsetFactor:-2 }));
    m.visible = false; m.renderOrder = 3;
    scene.add(m);
    pools.push({ m, size:0, max:0, life:0 });
  }
  let pi = 0;

  // a hit: spray in the bullet's direction (dx,dz)
  function hit(x, y, z, dx = 0, dz = 0, amount = 1){
    const n = Math.round(6 * amount);
    for(let i = 0; i < n; i++){
      spray.emit(x + (Math.random() - 0.5) * 0.2, y + (Math.random() - 0.5) * 0.3, z + (Math.random() - 0.5) * 0.2, {
        vx:dx * (1.5 + Math.random() * 3) + (Math.random() - 0.5) * 2, vy:Math.random() * 2.5 - 0.5,
        vz:dz * (1.5 + Math.random() * 3) + (Math.random() - 0.5) * 2, life:0.35 + Math.random() * 0.3, size:0.18, grow:0.25 });
    }
    mist.emit(x, y, z, { vx:dx * 1.2, vy:0.3, vz:dz * 1.2, life:0.4, size:0.5, grow:0.9 });
  }
  // a pool that spreads under a body
  function pool(x, z, maxSize = 2.2){
    const p = pools[pi]; pi = (pi + 1) % pools.length;
    p.m.position.set(x, 0.07 + pi * 0.0005, z);
    p.m.rotation.y = Math.random() * Math.PI * 2;
    p.size = 0.2; p.max = maxSize; p.life = 45;
    p.m.scale.set(0.2, 1, 0.2);
    p.m.material.opacity = 0.92;
    p.m.visible = true;
  }
  function update(dt){
    spray.update(dt); mist.update(dt);
    for(const p of pools){
      if(!p.m.visible) continue;
      p.life -= dt;
      if(p.size < p.max){ p.size = Math.min(p.max, p.size + dt * 0.5); p.m.scale.set(p.size, 1, p.size); }
      if(p.life < 5) p.m.material.opacity = 0.92 * Math.max(0, p.life / 5);
      if(p.life <= 0) p.m.visible = false;
    }
  }
  return { hit, pool, update };
}
