// CITY DRIVER — people: sidewalk pedestrians (walk, flee from gunfire, die
// with blood) and hostile gunmen used by missions and the final boss.
import { buildCharacter, setOutfit, setHeldWeapon, animateCharacter, kickRecoil } from './character.js';
import { PALETTE, SKIN_TONES, HAIR_COLORS } from './skins.js';

const PITCH = 74, BLOCKS = 5;
const HALF = 28;                  // sidewalk loop half-size inside each block
const PERIM = HALF * 8;           // loop length
const WALK = 1.5, RUN = 5.2;

const rnd = (a, b) => a + Math.random() * (b - a);
const pickOf = arr => arr[(Math.random() * arr.length) | 0];

function randomOutfit(){
  return { shirt:pickOf(PALETTE), pants:pickOf([0x2d3748, 0x1e3a8a, 0x111827, 0x6b7280, 0x8a5a1a, 0xcbd5e1]),
    skin:pickOf(SKIN_TONES), hair:pickOf(HAIR_COLORS.slice(0, 6)),
    hat:Math.random() < 0.25 ? pickOf(['cap', 'beanie', 'cowboy']) : 'none', hatColor:pickOf(PALETTE),
    hairLong:Math.random() < 0.4 };
}
// point on a block's sidewalk loop at perimeter distance p
function loopPos(cx, cz, p, out){
  p = ((p % PERIM) + PERIM) % PERIM;
  const side = Math.floor(p / (HALF * 2)), t = p - side * HALF * 2 - HALF;
  if(side === 0){ out.x = cx + t; out.z = cz - HALF; out.h = -Math.PI / 2; }        // north edge, walking east
  else if(side === 1){ out.x = cx + HALF; out.z = cz + t; out.h = Math.PI; }        // east edge, walking south
  else if(side === 2){ out.x = cx - t; out.z = cz + HALF; out.h = Math.PI / 2; }    // south edge, walking west
  else { out.x = cx - HALF; out.z = cz - t; out.h = 0; }                            // west edge, walking north
  return out;
}

// deps = { scene, blood, audio, collide(x,z,r), shoot(x0,z0,x1,z1), onPlayerHit(dmg, enemy), count }
export function createPeople(deps){
  const peds = [];
  const enemies = [];
  const hitList = [];             // circles for bullet raycasts: { x, z, r, ref }
  const tmp = { x:0, z:0, h:0 };
  let maxPeds = deps.count || 16;

  function blockCenters(px, pz){
    const out = [];
    for(let i = 0; i < BLOCKS; i++) for(let j = 0; j < BLOCKS; j++){
      const cx = (i - (BLOCKS - 1) / 2) * PITCH, cz = (j - (BLOCKS - 1) / 2) * PITCH;
      if(Math.hypot(cx - px, cz - pz) < 170 && !(i === 0 && j === 0)) out.push({ cx, cz });   // parking lot block has no walkers
    }
    return out;
  }

  function placePed(ped, px, pz){
    const blocks = blockCenters(px, pz);
    const b = blocks.length ? pickOf(blocks) : { cx:0, cz:0 };
    ped.cx = b.cx; ped.cz = b.cz; ped.p = rnd(0, PERIM); ped.dir = Math.random() < 0.5 ? 1 : -1;
    ped.state = 'walk'; ped.hp = 40; ped.flee = 0; ped.phase = rnd(0, 6); ped.deadT = 0;
    setOutfit(ped.person, randomOutfit());
    ped.person.rotation.set(0, 0, 0);
    ped.person.visible = true;
    loopPos(ped.cx, ped.cz, ped.p, tmp);
    ped.x = tmp.x; ped.z = tmp.z; ped.h = tmp.h;
  }

  function makePed(){
    const person = buildCharacter(randomOutfit());
    deps.scene.add(person);
    const ped = { person, x:0, z:0, h:0, cx:0, cz:0, p:0, dir:1, state:'walk', hp:40, flee:0, phase:0, deadT:0, kind:'ped' };
    peds.push(ped);
    return ped;
  }

  function kill(t, dx = 0, dz = 0, cause = 'shot'){
    if(t.state === 'dead') return;
    t.state = 'dead'; t.deadT = 0; t.hp = 0;
    // fall away from the hit
    const fall = Math.atan2(dx, dz);
    t.person.rotation.set(0, fall + Math.PI, 0);
    t.fallDir = { x:dx, z:dz };
    deps.blood.hit(t.x, 1.0, t.z, dx, dz, cause === 'car' ? 2.5 : 1.5);
    deps.blood.pool(t.x + dx * 0.9, t.z + dz * 0.9, rnd(1.8, 2.8));
    if(t.kind === 'enemy' && t.onDeath) t.onDeath(t);
    // nearby peds panic
    scare(t.x, t.z, 35);
  }

  function damage(t, dmg, dx, dz){
    if(t.state === 'dead') return false;
    t.hp -= dmg;
    deps.blood.hit(t.x, 1.25, t.z, dx, dz, 0.8);
    if(t.hp <= 0){ kill(t, dx, dz); return true; }
    if(t.kind === 'ped'){ t.state = 'flee'; t.flee = 7; }
    if(t.kind === 'enemy') t.aggro = true;
    return false;
  }

  function scare(x, z, radius){
    for(const p of peds){
      if(p.state === 'dead') continue;
      const d = Math.hypot(p.x - x, p.z - z);
      if(d < radius){
        p.state = 'flee'; p.flee = 6 + Math.random() * 3;
        // run along the loop away from the danger
        loopPos(p.cx, p.cz, p.p + 1, tmp);
        const ahead = Math.hypot(tmp.x - x, tmp.z - z);
        p.dir = ahead > d ? 1 : -1;
      }
    }
  }

  // ---------- hostile gunmen ----------
  // opts = { x, z, outfit, weapon, hp, name, accuracy, dmg, rate, boss, onDeath }
  function spawnEnemy(opts){
    const person = buildCharacter(opts.outfit || randomOutfit());
    setOutfit(person, opts.outfit || randomOutfit());
    setHeldWeapon(person, opts.weapon || 'pistol');
    deps.scene.add(person);
    const e = Object.assign({ kind:'enemy', person, x:opts.x, z:opts.z, h:0, hp:opts.hp || 60, maxHp:opts.hp || 60,
      state:'idle', aggro:false, cool:rnd(0.5, 1.5), phase:0, deadT:0, strafe:Math.random() < 0.5 ? 1 : -1,
      accuracy:0.45, dmg:8, rate:0.9, range:45 }, opts);
    e.person.position.set(e.x, 0, e.z);
    enemies.push(e);
    return e;
  }
  function clearEnemies(){
    for(const e of enemies) deps.scene.remove(e.person);
    enemies.length = 0;
  }

  function updateEnemy(e, dt, player){
    if(e.state === 'dead'){ e.deadT += dt; animateDead(e, dt); return; }
    const dx = player.x - e.x, dz = player.z - e.z, d = Math.hypot(dx, dz);
    if(d < e.range || e.aggro) e.aggro = true;
    let speed = 0;
    if(e.aggro && player.alive && !player.hidden){
      e.h = Math.atan2(-dx, -dz);
      // hold a fighting distance, strafe sideways
      const want = e.boss ? 9 : 13;
      let mx = 0, mz = 0;
      if(d > want + 3){ mx = dx / d; mz = dz / d; }
      else if(d < want - 3){ mx = -dx / d; mz = -dz / d; }
      mx += (-dz / d) * e.strafe * 0.6; mz += (dx / d) * e.strafe * 0.6;
      const ml = Math.hypot(mx, mz) || 1;
      speed = e.boss ? 4.2 : 3;
      const r = deps.collide(e.x + mx / ml * speed * dt, e.z + mz / ml * speed * dt, 0.45);
      if(Math.abs(r.x - e.x) < 1e-4 && Math.abs(r.z - e.z) < 1e-4) e.strafe *= -1;
      e.x = r.x; e.z = r.z;
      if(Math.random() < dt * 0.4) e.strafe *= -1;
      // shoot
      e.cool -= dt;
      if(e.cool <= 0 && d < e.range * 1.2){
        e.cool = e.rate * rnd(0.8, 1.3);
        const hitChance = Math.max(0.08, e.accuracy * (1 - d / (e.range * 1.6)) * (player.inCar ? 0.7 : 1));
        const hit = Math.random() < hitChance;
        const mx0 = e.x - Math.sin(e.h) * 0.9, mz0 = e.z - Math.cos(e.h) * 0.9;
        const miss = hit ? 0 : rnd(1.2, 3) * (Math.random() < 0.5 ? -1 : 1);
        const tx = player.x + (-dz / d) * miss, tz = player.z + (dx / d) * miss;
        deps.shoot(mx0, mz0, tx + (tx - mx0) / d * (hit ? 0 : 12), tz + (tz - mz0) / d * (hit ? 0 : 12));
        kickRecoil(e.person);
        if(deps.audio && deps.audio.shot) deps.audio.shot(e.weapon === 'glock' ? 'pistol' : e.weapon);
        if(hit) deps.onPlayerHit(e.dmg, e);
      }
    }
    e.phase += speed * dt * 2.1;
    e.person.position.set(e.x, 0, e.z);
    e.person.rotation.y = e.h;
    animateCharacter(e.person, e.phase, speed, e.aggro, dt);
  }

  function animateDead(t, dt){
    // tip over onto the ground over ~0.35s
    const k = Math.min(1, t.deadT / 0.35);
    t.person.rotation.x = -k * (Math.PI / 2 - 0.05);
    t.person.position.y = 0.12 * k;
    if(t.deadT > 0.4){
      const u = t.person.userData;
      u.legs[0].rotation.x = 0.1; u.legs[1].rotation.x = -0.15;
      u.arms[0].rotation.z = 0.9; u.arms[1].rotation.z = -0.9;
    }
  }

  function update(dt, player){
    // keep the crowd near the player
    while(peds.length < maxPeds) placePed(makePed(), player.x, player.z);
    for(const p of peds){
      const far = Math.hypot(p.x - player.x, p.z - player.z) > 190;
      if(p.state === 'dead'){
        p.deadT += dt; animateDead(p, dt);
        if(p.deadT > 30 || (far && p.deadT > 3)) placePed(p, player.x, player.z);
        continue;
      }
      if(far){ placePed(p, player.x, player.z); continue; }
      if(p.state === 'escape'){
        p.flee -= dt;
        const r = deps.collide(p.x + p.ex * RUN * dt, p.z + p.ez * RUN * dt, 0.4);
        p.x = r.x; p.z = r.z; p.phase += RUN * dt * 2.1;
        p.person.position.set(p.x, 0, p.z);
        animateCharacter(p.person, p.phase, RUN, false, dt);
        if(p.flee <= 0) snapToLoop(p);
        continue;
      }
      let speed = WALK;
      if(p.state === 'flee'){ p.flee -= dt; speed = RUN; if(p.flee <= 0) p.state = 'walk'; }
      p.p += p.dir * speed * dt;
      loopPos(p.cx, p.cz, p.p, tmp);
      p.x = tmp.x; p.z = tmp.z;
      p.h = tmp.h + (p.dir < 0 ? Math.PI : 0);
      p.phase += speed * dt * 2.1;
      p.person.position.set(p.x, 0, p.z);
      p.person.rotation.y = p.h;
      animateCharacter(p.person, p.phase, speed, false, dt);
    }
    for(const e of enemies) updateEnemy(e, dt, player);
    // refresh bullet targets
    hitList.length = 0;
    for(const p of peds) if(p.state !== 'dead') hitList.push({ x:p.x, z:p.z, r:0.42, ref:p });
    for(const e of enemies) if(e.state !== 'dead') hitList.push({ x:e.x, z:e.z, r:0.45, ref:e });
  }

  // run-over check: a car at (x,z) moving at speed
  function carHits(x, z, heading, speed){
    if(Math.abs(speed) < 5) return 0;
    const fx = -Math.sin(heading), fz = -Math.cos(heading);
    let n = 0;
    for(const list of [peds, enemies]) for(const t of list){
      if(t.state === 'dead') continue;
      if(Math.hypot(t.x - x - fx * 1.2, t.z - z - fz * 1.2) < 1.6 || Math.hypot(t.x - x, t.z - z) < 1.3){
        const s = Math.sign(speed);
        if(t.kind === 'enemy') t.hp = 0;
        kill(t, fx * s, fz * s, 'car');
        n++;
      }
    }
    return n;
  }

  // a driver dragged out of a stolen car: runs away, then goes back to walking
  function eject(x, z, awayX, awayZ){
    let ped = null, far = -1;
    for(const p of peds){ const d = Math.hypot(p.x - awayX, p.z - awayZ); if(p.state !== 'dead' && d > far){ far = d; ped = p; } }
    if(!ped) return;
    const dx = x - awayX, dz = z - awayZ, d = Math.hypot(dx, dz) || 1;
    Object.assign(ped, { state:'escape', x, z, ex:dx / d, ez:dz / d, flee:3.5, hp:40 });
    ped.person.rotation.set(0, Math.atan2(-dx, -dz), 0);
    ped.person.position.set(x, 0, z);
  }
  function snapToLoop(p){
    const i = Math.max(0, Math.min(BLOCKS - 1, Math.round(p.x / PITCH + (BLOCKS - 1) / 2)));
    const j = Math.max(0, Math.min(BLOCKS - 1, Math.round(p.z / PITCH + (BLOCKS - 1) / 2)));
    p.cx = (i - (BLOCKS - 1) / 2) * PITCH; p.cz = (j - (BLOCKS - 1) / 2) * PITCH;
    const lx = Math.max(-HALF, Math.min(HALF, p.x - p.cx)), lz = Math.max(-HALF, Math.min(HALF, p.z - p.cz));
    // perimeter coordinate of the closest edge
    const dN = Math.abs(lz + HALF), dE = Math.abs(lx - HALF), dS = Math.abs(lz - HALF), dW = Math.abs(lx + HALF);
    const m = Math.min(dN, dE, dS, dW);
    p.p = m === dN ? lx + HALF : m === dE ? HALF * 2 + lz + HALF : m === dS ? HALF * 4 + (HALF - lx) : HALF * 6 + (HALF - lz);
    p.state = 'flee'; p.flee = 4;
  }

  function setCount(n){
    maxPeds = n;
    while(peds.length > n){ const p = peds.pop(); deps.scene.remove(p.person); }
  }
  function setVisible(v){ for(const p of peds) p.person.visible = v; for(const e of enemies) e.person.visible = v; }

  return { update, damage, scare, spawnEnemy, clearEnemies, carHits, setCount, setVisible, eject,
    get hitList(){ return hitList; }, get enemies(){ return enemies; }, get peds(){ return peds; } };
}
