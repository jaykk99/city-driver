// CITY DRIVER — GPU-cheap particles: drift smoke, exhaust puffs, skid marks.
// All pooled, zero per-frame allocation. Pure three.js, headless-testable.
import * as THREE from 'three';

function puffTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(32, 32, 4, 32, 32, 30);
  gr.addColorStop(0, 'rgba(255,255,255,0.85)');
  gr.addColorStop(0.5, 'rgba(255,255,255,0.35)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
let _puffTex = null;
function puffTex() { if (!_puffTex) _puffTex = puffTexture(); return _puffTex; }

export class PuffPool {
  // color: THREE.Color-ish hex, blending additive or normal
  constructor(scene, max, { color = 0xbbbbbb, opacity = 0.5, blending = THREE.NormalBlending, size = 1.6 } = {}) {
    this.max = max; this.i = 0;
    this.geo = new THREE.PlaneGeometry(1, 1);
    this.mat = new THREE.SpriteMaterial({
      map: puffTex(), color, transparent: true, opacity,
      blending, depthWrite: false,
    });
    this.items = [];
    for (let k = 0; k < max; k++) {
      const s = new THREE.Sprite(this.mat.clone());
      s.visible = false; s.userData = { life: 0, maxLife: 1, vx: 0, vy: 0, vz: 0, grow: 1, size };
      scene.add(s);
      this.items.push(s);
    }
    this._v = new THREE.Vector3();
  }
  emit(x, y, z, { vx = 0, vy = 1.2, vz = 0, life = 0.7, size = 1.6, grow = 2.2 } = {}) {
    const s = this.items[this.i]; this.i = (this.i + 1) % this.max;
    s.visible = true;
    s.position.set(x, y, z);
    const u = s.userData;
    u.life = life; u.maxLife = life; u.vx = vx; u.vy = vy; u.vz = vz; u.grow = grow; u.size = size;
    s.scale.set(size, size, 1);
    s.material.opacity = this.mat.opacity;
  }
  update(dt, camPos) {
    for (const s of this.items) {
      if (!s.visible) continue;
      const u = s.userData;
      u.life -= dt;
      if (u.life <= 0) { s.visible = false; continue; }
      s.position.x += u.vx * dt; s.position.y += u.vy * dt; s.position.z += u.vz * dt;
      const t = 1 - u.life / u.maxLife;
      const sz = u.size + u.grow * t;
      s.scale.set(sz, sz, 1);
      s.material.opacity = this.mat.opacity * (1 - t);
    }
  }
  setGlobalOpacity(o) { this.mat.opacity = o; }
}

// Skid marks: instanced dark quads laid on the ground, ring buffer.
export class SkidMarks {
  constructor(scene, max = 400) {
    this.max = max; this.i = 0;
    const geo = new THREE.PlaneGeometry(0.32, 1.4);
    geo.rotateX(-Math.PI / 2);
    this.mesh = new THREE.InstancedMesh(
      geo,
      new THREE.MeshBasicMaterial({ color: 0x0a0a0a, transparent: true, opacity: 0.55, depthWrite: false }),
      max
    );
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;
    const m = new THREE.Matrix4();
    m.makeScale(0, 0, 0);
    for (let k = 0; k < max; k++) this.mesh.setMatrixAt(k, m);
    this.mesh.instanceMatrix.needsUpdate = true;
    scene.add(this.mesh);
    this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion();
    this._p = new THREE.Vector3(); this._s = new THREE.Vector3(1, 1, 1);
    this._up = new THREE.Vector3(0, 1, 0);
  }
  add(x, z, heading) {
    this._q.setFromAxisAngle(this._up, heading);
    this._p.set(x, 0.06, z);
    this._m.compose(this._p, this._q, this._s);
    this.mesh.setMatrixAt(this.i, this._m);
    this.i = (this.i + 1) % this.max;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  setVisible(v) { this.mesh.visible = v; }
}
