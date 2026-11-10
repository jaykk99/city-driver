// BAR BRAWL — the brawl simulation: voxel fighters with brawler AI,
// knockdowns, wall slams, dismemberment and ragdoll corpses; loose items you
// can pick up, swing and throw; bullets and dynamite.
import * as THREE from 'three';
import { V, buildPerson, buildWeaponModel } from './voxel.js';
import { wdef, resolveHit, wear, throwDmg } from './weapons.js';
import { groundAt } from './maps.js';

const G = 18;
const PART_HP = { head:40, armL:45, armR:45, legL:50, legR:50 };
const LIMBS = ['armL', 'armR', 'legL', 'legR'];
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3();

// which body part a hit lands on, from the hit height (m above the feet) and
// the sideways offset in the fighter's own frame (+ = their left... see below)
export function partFromHit(hy, lateral, scale = 1, missing = {}){
  const h = hy / scale, lat = lateral / scale;
  let p;
  if(h > 1.43) p = 'head';
  else if(h < 0.76) p = lat < 0 ? 'legL' : 'legR';
  else if(Math.abs(lat) > 0.3) p = lat < 0 ? 'armL' : 'armR';
  else p = 'torso';
  if(missing[p]) p = missing.torso ? 'head' : 'torso';
  return p;
}

// ---------------- items ----------------
export class Item {
  constructor(W, id, x, y, z, extra = {}){
    this.W = W; this.id = id; this.w = wdef(id);
    this.mesh = buildWeaponModel(id, this.w);
    this.pos = new THREE.Vector3(x, y, z); this.vel = new THREE.Vector3();
    this.spin = new THREE.Vector3(); this.thrown = false; this.owner = null; this.held = false; this.alive = true;
    this.state = { used:extra.used || 0, ammo:extra.ammo ?? this.w.ammo, count:extra.count ?? this.w.count };
    this.fuse = extra.fuse ?? null;
    if(!this.mesh.userData.upright) this.mesh.rotation.set(Math.PI / 2, Math.random() * 6, 0, 'YXZ');
    this.mesh.rotation.y = Math.random() * 6;
    this.mesh.position.copy(this.pos);
    W.scene.add(this.mesh);
  }
  get resting(){ return !this.thrown && this.vel.lengthSq() < 0.5; }
  remove(){ this.alive = false; this.W.scene.remove(this.mesh); }
  update(dt){
    const W = this.W, L = W.L;
    if(this.fuse != null){
      this.fuse -= dt;
      if(Math.random() < 0.6) W.fx.gib(this.pos.x, this.pos.y + 0.25, this.pos.z, (Math.random() - 0.5), 1.5, (Math.random() - 0.5), 0xffd040, false, 0.4);
      if(this.fuse <= 0){ W.explode(this.pos, this.w.explode, this.w.tdmg, this.owner); this.remove(); return; }
    }
    const g = groundAt(L, this.pos.x, this.pos.z, this.pos.y + 0.1);
    if(this.thrown || this.pos.y > g + 0.01 || this.vel.lengthSq() > 0.01){
      this.vel.y -= G * dt;
      this.pos.addScaledVector(this.vel, dt);
      this.mesh.rotation.x += this.spin.x * dt; this.mesh.rotation.z += this.spin.z * dt;
      const hw = L.w / 2 - 0.15, hd = L.d / 2 - 0.15;
      let hitWall = false;
      if(Math.abs(this.pos.x) > hw){ this.pos.x = Math.sign(this.pos.x) * hw; this.vel.x *= -0.35; hitWall = true; }
      if(Math.abs(this.pos.z) > hd){ this.pos.z = Math.sign(this.pos.z) * hd; this.vel.z *= -0.35; hitWall = true; }
      // furniture sides
      for(const s of L.solids){
        if(this.pos.y > s.y + s.h - 0.02 || this.pos.y < s.y) continue;
        if(Math.abs(this.pos.x - s.x) < s.w / 2 && Math.abs(this.pos.z - s.z) < s.d / 2){
          const ox = s.w / 2 - Math.abs(this.pos.x - s.x), oz = s.d / 2 - Math.abs(this.pos.z - s.z);
          if(ox < oz){ this.pos.x += Math.sign(this.pos.x - s.x) * ox; this.vel.x *= -0.35; } else { this.pos.z += Math.sign(this.pos.z - s.z) * oz; this.vel.z *= -0.35; }
          hitWall = true;
        }
      }
      if(this.thrown){
        // smack into fighters
        for(const f of W.targets()){
          if(f === this.owner || !f.alive && !f.corpse) continue;
          const dx = this.pos.x - f.pos.x, dz = this.pos.z - f.pos.z, r = f.radius + 0.25;
          const hy = this.pos.y - f.pos.y;
          if(dx * dx + dz * dz < r * r && hy > -0.2 && hy < f.height + 0.1){
            const dir = _v.copy(this.vel).setY(0).normalize();
            const lat = f.lateralOf ? f.lateralOf(this.pos) : 0;
            if(f.isPlayer) W.hurtPlayer(throwDmg(this.w) * 0.6, dir, 3, this.owner);
            else W.hit(f, partFromHit(hy, lat, f.scale, f.missing), this.w, dir, this.owner, { thrown:true, knock:this.w.tknock || (this.w.heavy ? 7 : 4) });
            this.thrown = false; this.vel.multiplyScalar(-0.2);
            if(this.w.shatter || this.w.kind === 'throw' && this.id !== 'dynamite' && this.id !== 'cannonball'){ if(this.w.shatter){ W.fx.glass(this.pos.x, this.pos.y, this.pos.z); W.audio.glass(); } this.remove(); return; }
            break;
          }
        }
        if(hitWall && this.w.shatter){ W.fx.glass(this.pos.x, this.pos.y, this.pos.z); W.audio.glass(); this.remove(); return; }
      }
      const g2 = groundAt(L, this.pos.x, this.pos.z, this.pos.y + 0.1);
      if(this.pos.y <= g2){
        this.pos.y = g2;
        if(this.thrown && this.w.shatter && this.vel.y < -3){ W.fx.glass(this.pos.x, this.pos.y + 0.05, this.pos.z); W.audio.glass(); this.remove(); return; }
        this.thrown = false;
        if(this.vel.y < -2){ this.vel.y *= -0.25; } else this.vel.y = 0;
        this.vel.x *= 0.6; this.vel.z *= 0.6; this.spin.multiplyScalar(0.5);
        if(this.vel.lengthSq() < 0.05){ this.vel.set(0, 0, 0); if(!this.mesh.userData.upright){ this.mesh.rotation.x = Math.PI / 2; this.mesh.rotation.z = 0; } else { this.mesh.rotation.x = 0; this.mesh.rotation.z = 0; } }
      }
      this.mesh.position.copy(this.pos);
    }
  }
}

// ---------------- fighters ----------------
let FID = 0;
export class Fighter {
  constructor(W, outfit, weaponId, x, z, opts = {}){
    this.W = W; this.id = ++FID;
    this.scale = opts.scale || 1; this.boss = !!opts.boss; this.name = opts.name || null;
    const hm = opts.hp || 1;
    const p = buildPerson(outfit);
    this.group = p.group; this.pivots = p.pivots; this.palette = p.palette; this.outfit = outfit;
    this.group.scale.setScalar(this.scale);
    W.scene.add(this.group);
    this.pos = new THREE.Vector3(x, 0, z); this.vel = new THREE.Vector3();
    this.yaw = Math.random() * 6; this.radius = 0.36 * this.scale; this.height = 1.88 * this.scale;
    this.maxHp = 100 * hm; this.hp = this.maxHp;
    this.partHp = {}; for(const k in PART_HP) this.partHp[k] = PART_HP[k] * hm * (this.boss ? 1.4 : 1);
    this.missing = {}; this.alive = true; this.corpse = false;
    this.state = 'idle'; this.t = 0; this.cool = 0.5 + Math.random(); this.think = 0; this.target = null; this.goal = null;
    this.down = 0; this.tilt = 0; this.spinY = 0; this.walk = Math.random() * 6; this.stun = 0; this.lastHitBy = null;
    this.weapon = null; this.wstate = { used:0 }; this.heldMesh = null;
    this.aggro = opts.aggro ?? (0.65 + Math.random() * 0.3);   // chance a fighter goes for you rather than a neighbour
    this.speed = (2.6 + Math.random() * 1.0) * (this.boss ? 0.85 : 1);
    this.giveWeapon(weaponId);
    this.wounds = 0;
    this.sync();
  }
  get isPlayer(){ return false; }
  giveWeapon(id, state){
    if(this.heldMesh){ this.heldMesh.parent && this.heldMesh.parent.remove(this.heldMesh); this.heldMesh = null; }
    this.weapon = id && id !== 'fists' && !this.missing.armR ? id : null;
    const w = wdef(this.weapon);
    this.wstate = state || { used:0, ammo:w.ammo, count:w.count };
    if(this.weapon){
      const m = buildWeaponModel(this.weapon, w);
      m.position.set(0, -8.5 * V, 0.5 * V);
      m.rotation.x = m.userData.gun ? -Math.PI / 2 : -Math.PI / 2 * 0.0 + Math.PI / 2;
      if(m.userData.upright){ m.rotation.set(Math.PI, 0, 0); m.position.y = -8 * V; }
      this.pivots.armR.add(m); this.heldMesh = m;
    }
  }
  dropWeapon(fling){
    if(!this.weapon) return;
    const it = new Item(this.W, this.weapon, this.pos.x + Math.sin(this.yaw) * 0.4, 1.0 * this.scale, this.pos.z + Math.cos(this.yaw) * 0.4, this.wstate);
    if(fling){ it.vel.set((Math.random() - 0.5) * 4, 2.5, (Math.random() - 0.5) * 4); it.spin.set(8, 0, 6); }
    this.W.items.push(it);
    this.giveWeapon(null);
  }
  get w(){ return wdef(this.weapon); }
  lateralOf(p){ const dx = p.x - this.pos.x, dz = p.z - this.pos.z; return dx * Math.cos(this.yaw) - dz * Math.sin(this.yaw); }
  partWorld(part, out){ this.pivots[part].getWorldPosition(out); if(part === 'head') out.y += 0.2 * this.scale; else if(part !== 'torso') out.y -= 0.35 * this.scale; else out.y += 0.35 * this.scale; return out; }
  get crawling(){ return this.missing.legL && this.missing.legR; }

  // ---- getting hurt ----
  takeHit(part, res, dir, knock, attacker, w){
    const W = this.W;
    this.lastHitBy = attacker || this.lastHitBy;
    if(attacker && !attacker.isPlayer && attacker !== this && Math.random() < 0.7) this.target = attacker;   // grudges start brawls
    else if(attacker && attacker.isPlayer) this.target = attacker;
    const wp = this.partWorld(this.missing[part] ? 'torso' : part, _v2);
    const pal = this.palette[part] || this.palette.torso;
    W.fx.burst(wp.x, wp.y, wp.z, Math.max(4, res.gibs >> (res.sever ? 0 : 1)), pal, dir.x, dir.z, 1);
    if(Math.random() < 0.6) W.fx.pool(this.pos.x + dir.x * 0.6, this.pos.z + dir.z * 0.6, 0.3 + res.dmg / 80);
    this.wound(part);
    // limbs carry their own health; the body takes the rest
    const mult = part === 'head' ? 1.7 : part === 'torso' ? 1 : 0.45;
    this.hp -= res.dmg * mult;
    if(part !== 'torso'){ this.partHp[part] -= res.dmg; if(this.partHp[part] <= 0 || res.sever) this.sever(part, dir, res.crush); }
    if(!this.alive && this.corpse){
      // mutilating the dead: heavy crushing blows burst the body
      if(res.crush || (W.rage && res.dmg > 20) || (part === 'torso' && res.dmg > 45 && Math.random() < 0.5)) this.obliterate(dir);
      else { this.vel.x += dir.x * knock * 0.5; this.vel.z += dir.z * knock * 0.5; }
      return;
    }
    if(this.alive && this.hp <= 0) this.die(dir, res.crush || (w && w.crush) || W.rage, attacker);
    else if(this.alive){
      if(knock > 6.5 || (w && w.heavy && Math.random() < 0.6)) this.knockDown(dir, knock);
      else { this.state = 'stagger'; this.t = 0.28 + knock * 0.03; this.vel.x += dir.x * knock; this.vel.z += dir.z * knock; }
      if(this.weapon && Math.random() < 0.12 * (knock / 4)) this.dropWeapon(true);
    }
  }
  wound(part){
    if(this.wounds > 40 || this.missing[part]) return;
    this.wounds++;
    const piv = this.pivots[part], mesh = piv.children[0];
    const b = new THREE.Mesh(this.W.woundGeo, this.W.woundMat);
    const sz = part === 'head' ? [6, 6, 6, -3, 0, -3] : part === 'torso' ? [8, 9, 4, -4, 0, -2] : part.startsWith('arm') ? [3, 9, 3, -1.5, -9, -1.5] : [4, 10, 4, -2, -10, -2];
    const face = (Math.random() * 3) | 0;
    const p = [sz[3] + Math.random() * sz[0], sz[4] + Math.random() * sz[1], sz[5] + Math.random() * sz[2]];
    if(face === 0) p[2] = sz[5] + sz[2] - 0.4; else if(face === 1) p[0] = Math.random() < 0.5 ? sz[3] + 0.4 : sz[3] + sz[0] - 0.4; else p[2] = sz[5] + 0.4;
    b.position.set(p[0] * V, p[1] * V, p[2] * V);
    b.scale.setScalar(0.8 + Math.random() * 1.2);
    mesh.add(b);
  }
  sever(part, dir, crush){
    if(this.missing[part]) return;
    const W = this.W;
    this.missing[part] = true;
    W.stats.limbs++;
    const piv = this.pivots[part];
    const wp = this.partWorld(part, new THREE.Vector3());
    if(part === 'armR' && this.weapon) this.dropWeapon(true);
    if(crush){
      // pulped: the limb bursts into voxels instead of flying off whole
      piv.visible = false;
      W.fx.burst(wp.x, wp.y, wp.z, 40, this.palette[part], dir.x, dir.z, 1.4);
    } else {
      const vel = new THREE.Vector3(dir.x * 4 + (Math.random() - 0.5) * 3, 3 + Math.random() * 3, dir.z * 4 + (Math.random() - 0.5) * 3);
      const ang = new THREE.Vector3((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 16);
      W.fx.addDebris(piv, vel, ang, part === 'head' ? 0.22 * this.scale : 0.14 * this.scale, true, this.palette[part]);
      W.fx.burst(wp.x, wp.y, wp.z, 26, this.palette[part], dir.x, dir.z, 1.2);
    }
    // stump
    const st = new THREE.Mesh(W.stumpGeo, W.woundMat);
    const sp = { head:[0, 19, 0], armL:[-5.5, 18.6, 0], armR:[5.5, 18.6, 0], legL:[-2, 10, 0], legR:[2, 10, 0] }[part];
    st.position.set(sp[0] * V, sp[1] * V, sp[2] * V); this.group.add(st);
    W.fx.pool(this.pos.x, this.pos.z, 0.6);
    if(part === 'head'){
      W.stats.heads++;
      W.announce(this.alive ? (crush ? 'HEAD POPPED' : 'DECAPITATED') : '');
      if(this.alive){ this.hp = 0; this.die(dir, false, this.lastHitBy); }
      // fountain from the neck
      for(let k = 0; k < 30; k++) W.fx.gib(wp.x, wp.y - 0.1, wp.z, (Math.random() - 0.5) * 2, 3 + Math.random() * 4, (Math.random() - 0.5) * 2, 0xb01010, true);
    }
  }
  knockDown(dir, knock){
    this.state = 'down'; this.down = 1.4 + Math.random() * 0.8; this.t = 0;
    this.vel.set(dir.x * knock, 2.5 + knock * 0.25, dir.z * knock);
    this.flying = knock;
    this.spinY = (Math.random() - 0.5) * 6;
    if(this.weapon && Math.random() < 0.5) this.dropWeapon(true);
  }
  // blow a corpse apart (dynamite, sledgehammers, rage)
  obliterate(dir){ if(this.gone) return; this.alive = true; this.noCredit = true; this.die(dir, true, null); }
  die(dir, explode, killer){
    const W = this.W;
    if(!this.alive) return;
    this.alive = false; this.state = 'dead';
    if(!this.noCredit) W.onKill(this, killer, explode);
    if(this.weapon) this.dropWeapon(true);
    if(explode){
      // the whole body comes apart: every part becomes debris plus a cloud of voxels
      for(const part of ['head', 'torso', ...LIMBS]){
        if(this.missing[part]) continue;
        this.missing[part] = true;
        const piv = this.pivots[part];
        const wp = this.partWorld(part, new THREE.Vector3());
        const vel = new THREE.Vector3(dir.x * 6 + (Math.random() - 0.5) * 7, 3 + Math.random() * 5, dir.z * 6 + (Math.random() - 0.5) * 7);
        W.fx.addDebris(piv, vel, new THREE.Vector3((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 20), (part === 'torso' ? 0.25 : 0.15) * this.scale, true, this.palette[part]);
        W.fx.burst(wp.x, wp.y, wp.z, 22, this.palette[part], dir.x, dir.z, 1.8);
      }
      for(let k = 0; k < 6; k++) W.fx.pool(this.pos.x + (Math.random() - 0.5) * 2.5, this.pos.z + (Math.random() - 0.5) * 2.5, 0.6 + Math.random() * 0.8);
      W.scene.remove(this.group);
      this.corpse = false; this.gone = true;
      return;
    }
    // ragdoll: topple in the hit direction and slide
    this.corpse = true;
    this.vel.x += dir.x * 4; this.vel.z += dir.z * 4; this.vel.y = Math.max(this.vel.y, 1.5);
    this.fallDir = Math.random() < 0.5 ? 1 : -1;
    this.spinY = (Math.random() - 0.5) * 4;
    W.fx.pool(this.pos.x, this.pos.z, 1 + Math.random() * 0.6);
  }

  // ---- brain ----
  pickTarget(){
    const W = this.W, me = this;
    const others = W.fighters.filter(f => f !== me && f.alive);
    if(W.player.alive && (Math.random() < this.aggro || !others.length || this.boss)) return W.player;
    let best = null, bd = 1e9;
    for(const f of others){ const d = f.pos.distanceToSquared(this.pos); if(d < bd){ bd = d; best = f; } }
    return best || (W.player.alive ? W.player : null);
  }
  update(dt){
    const W = this.W;
    if(this.gone) return;
    this.cool -= dt; this.t -= dt; this.think -= dt;
    const onGround = this.pos.y <= groundAt(W.L, this.pos.x, this.pos.z, this.pos.y + 0.3) + 0.01;
    let wantX = 0, wantZ = 0;
    if(this.alive){
      if(this.state === 'down'){
        this.down -= dt;
        this.tilt = Math.min(1, this.tilt + dt * 5);
        if(this.down <= 0 && onGround){ this.state = 'idle'; }
      } else {
        this.tilt = Math.max(0, this.tilt - dt * 3);
        if(this.think <= 0){
          this.think = 0.35 + Math.random() * 0.4;
          if(!this.target || !this.target.alive || Math.random() < 0.08) this.target = this.pickTarget();
          // unarmed and something good is nearby? grab it
          this.goal = null;
          if(!this.weapon && !this.missing.armR && Math.random() < 0.6){
            let best = null, bd = 25;
            for(const it of W.items){ if(!it.alive || it.held || !it.resting || it.fuse != null) continue; const d = it.pos.distanceToSquared(this.pos); if(d < bd && it.pos.y < 1.3){ bd = d; best = it; } }
            this.goal = best;
          }
        }
        if(this.state === 'stagger'){ if(this.t <= 0) this.state = 'idle'; }
        else if(this.state === 'windup'){
          this.faceTarget(dt, 10);
          if(this.t <= 0) this.strike();
        } else if(this.state === 'recover'){ if(this.t <= 0) this.state = 'idle'; }
        else {
          const tg = this.goal && this.goal.alive && !this.goal.held ? this.goal : this.target;
          if(tg){
            const tx = tg.pos.x - this.pos.x, tz = tg.pos.z - this.pos.z, d = Math.hypot(tx, tz) || 1;
            const w = this.w, armed = this.weapon && !this.missing.armR;
            if(tg === this.goal){
              if(d < 0.8){ this.giveWeapon(tg.id, tg.state); tg.held = true; tg.remove(); this.goal = null; }
              else { wantX = tx / d; wantZ = tz / d; }
            } else if(armed && w.kind === 'gun'){
              if(d > 11) { wantX = tx / d; wantZ = tz / d; } else if(d < 4){ wantX = -tx / d; wantZ = -tz / d; }
              else { wantX = -tz / d * 0.5; wantZ = tx / d * 0.5; }
              if(this.cool <= 0 && d < w.range){ this.state = 'windup'; this.t = 0.55 + Math.random() * 0.4; }
            } else if(armed && (w.shatter || w.kind === 'throw') && d > 3.5 && d < 10 && this.cool <= 0 && Math.random() < 0.02){
              this.state = 'windup'; this.t = 0.45; this.throwing = true;
            } else {
              const reach = (armed ? w.reach : 1.4) + tg.radius + 0.1;
              if(d > reach * 0.85){ wantX = tx / d; wantZ = tz / d; }
              if(d < reach && this.cool <= 0){ this.state = 'windup'; this.t = (armed ? Math.min(0.75, w.rate * 0.8) : 0.42) + Math.random() * 0.2; this.throwing = false; }
            }
            this.faceTarget(dt, 6, tg);
          }
        }
      }
    }
    // movement
    const spd = this.crawling ? 0.6 : (this.missing.legL || this.missing.legR) ? 1.1 : this.speed;
    if(this.alive && this.state !== 'down' && onGround){
      const k = 1 - Math.exp(-10 * dt);
      this.vel.x += (wantX * spd - this.vel.x) * k;
      this.vel.z += (wantZ * spd - this.vel.z) * k;
    } else if(onGround){
      const f = Math.exp(-(this.corpse ? 5 : 3) * dt);
      this.vel.x *= f; this.vel.z *= f;
    }
    this.vel.y -= G * dt;
    const preSpeed = Math.hypot(this.vel.x, this.vel.z);
    this.pos.addScaledVector(this.vel, dt);
    // collide with the room and furniture; hard slams hurt
    const slam = this.collideWorld();
    if(slam && preSpeed > 6 && (this.state === 'down' || this.corpse)){
      W.fx.splat(slam.x, this.pos.y + 1 + Math.random() * 0.6, slam.z, slam.nx, 0, slam.nz, 0.5 + preSpeed * 0.06);
      W.audio.thud(0.8);
      if(this.alive){ const res = { dmg:Math.round(preSpeed * 2.2), sever:false, crush:false, gibs:8 }; this.takeHit('torso', res, _v.set(-slam.nx, 0, -slam.nz), 0, this.lastHitBy, null); }
      this.vel.x *= 0.3; this.vel.z *= 0.3;
    }
    const g = groundAt(W.L, this.pos.x, this.pos.z, this.pos.y + 0.3);
    if(this.pos.y < g){ this.pos.y = g; if(this.vel.y < -6 && this.flying){ W.fx.pool(this.pos.x, this.pos.z, 0.6); } this.vel.y = 0; this.flying = 0; }
    if(this.state === 'down' && this.flying){ this.yaw += this.spinY * dt; }
    if(this.corpse){ this.yaw += this.spinY * dt; this.spinY *= Math.exp(-3 * dt); this.tilt = Math.min(1, this.tilt + dt * 3.5); }
    this.animate(dt, Math.hypot(this.vel.x, this.vel.z));
    this.sync();
  }
  faceTarget(dt, rate, tg = this.target){
    if(!tg) return;
    const want = Math.atan2(tg.pos.x - this.pos.x, tg.pos.z - this.pos.z);
    let d = want - this.yaw; while(d > Math.PI) d -= Math.PI * 2; while(d < -Math.PI) d += Math.PI * 2;
    this.yaw += d * Math.min(1, rate * dt);
  }
  strike(){
    const W = this.W, tg = this.target;
    const w = this.w, armed = this.weapon && !this.missing.armR;
    this.state = 'recover'; this.t = 0.25; this.cool = (armed ? w.rate : 0.6) + 0.35 + Math.random() * 0.5;
    this.swing = 0.25;
    if(!tg || !tg.alive) return;
    const fx = Math.sin(this.yaw), fz = Math.cos(this.yaw);
    if(armed && this.throwing){
      this.throwing = false;
      const it = new Item(W, this.weapon, this.pos.x + fx * 0.5, 1.6 * this.scale, this.pos.z + fz * 0.5, this.wstate);
      const d = Math.hypot(tg.pos.x - this.pos.x, tg.pos.z - this.pos.z), t = d / 14;
      it.vel.set((tg.pos.x - this.pos.x) / t, 0.5 * G * t * 0.9, (tg.pos.z - this.pos.z) / t);
      it.spin.set(12, 0, 4); it.thrown = true; it.owner = this;
      if(this.weapon === 'dynamite') it.fuse = 1.4;
      W.items.push(it); this.giveWeapon(null);
      return;
    }
    if(armed && w.kind === 'gun'){
      const o = new THREE.Vector3(this.pos.x + fx * 0.4, 1.45 * this.scale, this.pos.z + fz * 0.4);
      const tgt = new THREE.Vector3(tg.pos.x, tg.pos.y + (tg.isPlayer ? 1.3 : 1.2 * tg.scale), tg.pos.z);
      const dir = tgt.sub(o).normalize();
      W.shoot(o, dir, w, this, 0.07);
      this.wstate.ammo--;
      if(this.wstate.ammo <= 0) this.dropWeapon(true);
      return;
    }
    const dx = tg.pos.x - this.pos.x, dz = tg.pos.z - this.pos.z, d = Math.hypot(dx, dz);
    const reach = (armed ? w.reach : 1.4) + tg.radius + 0.25;
    const ang = Math.abs(Math.atan2(fx * dz - fz * dx, fx * dx + fz * dz));
    if(d > reach || ang > 0.9) { W.audio.whoosh(); return; }
    const dir = _v.set(dx / d, 0, dz / d);
    const wd = armed ? w : (this.missing.armR && this.missing.armL ? { dmg:6, knock:3, sever:0, kind:'melee' } : wdef('fists'));
    const dmg = wd.dmg * (this.boss ? 1.4 : 0.75);
    if(tg.isPlayer) W.hurtPlayer(dmg, dir, (wd.knock || 2) * (this.boss ? 1.5 : 1), this);
    else {
      const r = Math.random(), part = r < 0.2 ? 'head' : r < 0.6 ? 'torso' : LIMBS[(Math.random() * 4) | 0];
      W.hit(tg, tg.missing[part] ? 'torso' : part, wd, dir, this, {});
    }
    if(armed){ const nw = wear(this.weapon, this.wstate); if(nw !== this.weapon){ if(w.shatter){ const p = this.partWorld('armR', _v2); W.fx.glass(p.x, p.y, p.z); W.audio.glass(); } this.giveWeapon(nw); } }
  }
  collideWorld(){
    const L = this.W.L, r = this.radius;
    let slam = null;
    const hw = L.w / 2 - r, hd = L.d / 2 - r;
    if(this.pos.x > hw){ this.pos.x = hw; slam = { x:L.w / 2, z:this.pos.z, nx:-1, nz:0 }; this.vel.x = Math.min(0, this.vel.x) * -0.3; }
    if(this.pos.x < -hw){ this.pos.x = -hw; slam = { x:-L.w / 2, z:this.pos.z, nx:1, nz:0 }; this.vel.x = Math.max(0, this.vel.x) * -0.3; }
    if(this.pos.z > hd){ this.pos.z = hd; slam = { x:this.pos.x, z:L.d / 2, nx:0, nz:-1 }; this.vel.z = Math.min(0, this.vel.z) * -0.3; }
    if(this.pos.z < -hd){ this.pos.z = -hd; slam = { x:this.pos.x, z:-L.d / 2, nx:0, nz:1 }; this.vel.z = Math.max(0, this.vel.z) * -0.3; }
    for(const s of L.solids){
      if(s.y > this.pos.y + 1.2 || s.y + s.h <= this.pos.y + 0.35) continue;    // can stand on low stuff / walk under shelves
      const cx = Math.max(s.x - s.w / 2, Math.min(this.pos.x, s.x + s.w / 2)), cz = Math.max(s.z - s.d / 2, Math.min(this.pos.z, s.z + s.d / 2));
      const dx = this.pos.x - cx, dz = this.pos.z - cz, d2 = dx * dx + dz * dz;
      if(d2 < r * r){
        const d = Math.sqrt(d2) || 0.001, nx = d2 ? dx / d : 1, nz = d2 ? dz / d : 0;
        this.pos.x = cx + nx * r; this.pos.z = cz + nz * r;
        const vn = this.vel.x * nx + this.vel.z * nz; if(vn < 0){ this.vel.x -= vn * nx * 1.3; this.vel.z -= vn * nz * 1.3; }
        if(!slam) slam = { x:cx, z:cz, nx, nz };
      }
    }
    return slam;
  }
  animate(dt, speed){
    const P = this.pivots;
    this.walk += speed * dt * 3.2;
    const sw = this.alive && this.state !== 'down' ? Math.sin(this.walk) * Math.min(1, speed / 2.5) * 0.7 : 0;
    if(!this.missing.legL) P.legL.rotation.x = sw;
    if(!this.missing.legR) P.legR.rotation.x = -sw;
    if(!this.missing.armL) P.armL.rotation.x = -sw * 0.8 + (this.state === 'stagger' ? -1 : 0);
    let ar = sw * 0.8;
    if(this.state === 'windup') ar = this.w.kind === 'gun' ? -1.5 : -2.6;
    if(this.swing > 0){ this.swing -= dt; ar = -2.6 + (1 - this.swing / 0.25) * 3.3; }
    if(this.alive && this.w.kind === 'gun' && this.state !== 'down') ar = Math.min(ar, -1.4);
    if(!this.missing.armR) P.armR.rotation.x = ar;
    P.torso.rotation.x = this.state === 'stagger' ? -0.3 : this.state === 'windup' ? -0.15 : 0;
    P.head.rotation.x = P.torso.rotation.x;
    // crawling: drop the upper body to the floor
    const drop = this.crawling ? -0.7 : 0;
    for(const k of ['torso', 'head', 'armL', 'armR']) P[k].position.y = (k === 'torso' ? 10 : k === 'head' ? 19 : 18.6) * V + drop;
    if(this.crawling) P.torso.rotation.x = 1.2;
  }
  sync(){
    if(this.gone) return;
    const g = this.group;
    g.position.copy(this.pos);
    g.rotation.set(0, this.yaw, 0);
    if(this.tilt > 0){
      // topple onto the back (knockdown) or either side (corpse)
      const lie = this.tilt * Math.PI / 2;
      g.rotateX(this.corpse ? -lie * 0.98 * (this.fallDir || 1) : -lie);
      g.position.y += Math.sin(lie) * 0.18 * this.scale;
    }
  }
}
