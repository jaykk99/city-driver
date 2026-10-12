// CITY DRIVER — 500 missions. Missions 1-499 are generated from their number
// (same mission every time), mixing deliveries, races, cash pickups and gang
// hits that get harder as you go. Mission 500 is the final boss: Emerald.
import * as THREE from 'three';

export const TOTAL_MISSIONS = 500;
export const EMERALD_FORTUNE = 5000000;
const PITCH = 74, BLOCKS = 5, LANE = 3.5;
const LINES = [-185, -111, -37, 37, 111, 185];

// Emerald — fictional final boss. Native woman, brown skin, long blackish-brown hair, Glock.
export const EMERALD = {
  name:'EMERALD',
  outfit:{ shirt:0x0f9d58, pants:0x111827, skin:0x8d5a3b, hair:0x1c130d, hairLong:true, hat:'none', hatColor:0x0f9d58 },
  weapon:'glock', hp:900,
};

function rng(seed){
  let a = (seed * 2654435761) >>> 0;
  return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function roadPoint(r){
  const axisZ = r() < 0.5, line = LINES[(r() * LINES.length) | 0], s = -175 + r() * 350, side = r() < 0.5 ? 1 : -1;
  return axisZ ? { x:line + side * LANE, z:s } : { x:s, z:line + side * LANE };
}
function sidewalkPoint(r){
  const i = (r() * BLOCKS) | 0, j = (r() * BLOCKS) | 0;
  const cx = (i - 2) * PITCH, cz = (j - 2) * PITCH;
  const t = -24 + r() * 48, side = (r() * 4) | 0, h = 28;
  return side === 0 ? { x:cx + t, z:cz - h } : side === 1 ? { x:cx + h, z:cz + t } : side === 2 ? { x:cx - t, z:cz + h } : { x:cx - h, z:cz - t };
}
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const GANGS = ['Main St Kings', 'Exchange Crew', 'River Rats', 'Portage Posse', 'North End Wolves', 'Osborne Outlaws', 'St. Boniface Snakes', 'Pembina Pirates'];
const CARGO = ['a mystery briefcase', 'hot pizzas', 'a stolen painting', 'a box of cash', 'a burner phone', 'VIP documents', 'a suspicious duffel bag', 'concert tickets'];

// Pure: describe mission n (1..500)
export function generateMission(n){
  n = Math.max(1, Math.min(TOTAL_MISSIONS, n | 0));
  if(n === TOTAL_MISSIONS){
    return { n, type:'boss', title:'EMERALD', reward:EMERALD_FORTUNE,
      desc:"Emerald runs the whole city and she's sitting on millions. Fight through her guards at the compound and take her down. Everything she has is yours.",
      points:[{ x:-148, z:-148 }], guards:10, timeLimit:0 };
  }
  const r = rng(n * 7919 + 13);
  const tier = n / TOTAL_MISSIONS;                 // 0..1 difficulty
  const types = ['deliver', 'race', 'collect', 'hit'];
  let type = types[(n + ((r() * 4) | 0)) % 4];
  if(n % 50 === 0) type = 'hit';                    // every 50th: gang leader
  const gang = GANGS[(r() * GANGS.length) | 0];
  if(type === 'deliver'){
    const a = roadPoint(r); let b = roadPoint(r);
    for(let k = 0; k < 6 && dist(a, b) < 150; k++) b = roadPoint(r);
    const d = dist(a, b);
    return { n, type, title:'Special Delivery', reward:600 + n * 30,
      desc:`Pick up ${CARGO[(r() * CARGO.length) | 0]} and get it across town before the clock runs out.`,
      points:[a, b], timeLimit:Math.round(25 + d / (11 + tier * 6)) };
  }
  if(type === 'race'){
    const cps = []; let last = roadPoint(r); cps.push(last);
    const count = 4 + Math.min(4, (n / 80) | 0);
    let total = 0;
    while(cps.length < count){ let p = roadPoint(r); for(let k = 0; k < 6 && dist(p, last) < 90; k++) p = roadPoint(r); total += dist(p, last); cps.push(p); last = p; }
    return { n, type, title:'Checkpoint Race', reward:800 + n * 35,
      desc:`Hit all ${count} checkpoints in order before time runs out.`, points:cps, timeLimit:Math.round(20 + total / (13 + tier * 8)) };
  }
  if(type === 'collect'){
    const c = sidewalkPoint(r), pts = [];
    const count = 3 + Math.min(5, (n / 70) | 0);
    for(let k = 0; k < count; k++){ const a = r() * Math.PI * 2, rr = 20 + r() * 60; pts.push({ x:Math.max(-180, Math.min(180, c.x + Math.cos(a) * rr)), z:Math.max(-180, Math.min(180, c.z + Math.sin(a) * rr)) }); }
    return { n, type, title:'Cash Grab', reward:500 + n * 30,
      desc:`The ${gang} dropped ${count} bags of cash around town. Grab them all before they come back.`, points:pts, timeLimit:Math.round(60 + count * 18 - tier * 30) };
  }
  const leader = n % 50 === 0;
  const count = Math.min(9, 1 + ((n / 45) | 0) + (leader ? 2 : 0));
  return { n, type:'hit', title:leader ? 'Take Down the Boss' : 'Gang Hit', reward:(leader ? 5000 : 1000) + n * 45,
    desc: leader ? `The leader of the ${gang} is holed up with his crew. End it.` : `${count} members of the ${gang} are causing trouble. Take them out.`,
    points:[sidewalkPoint(r)], enemies:count, leader, timeLimit:0, tier };
}

// stats for a gunman in mission n
export function enemyStats(n, leader){
  const t = n / TOTAL_MISSIONS;
  return { hp:Math.round((45 + n * 0.35) * (leader ? 4 : 1)), accuracy:Math.min(0.62, 0.22 + t * 0.4), dmg:Math.round(6 + t * 10),
    rate:Math.max(0.35, 1.0 - t * 0.5), weapon:leader ? 'deagle' : ['pistol', 'glock', 'smg', 'shotgun', 'ak'][Math.min(4, (n / 100) | 0)] };
}

// ---------- runtime ----------
// deps = { scene, people, toast(msg,ms), beep(f,d) }
export function createMissionRunner(deps){
  const ringMat = new THREE.MeshBasicMaterial({ color:0xffd23f, transparent:true, opacity:0.85, depthWrite:false, side:THREE.DoubleSide });
  const beamMat = new THREE.MeshBasicMaterial({ color:0xffd23f, transparent:true, opacity:0.2, depthWrite:false, side:THREE.DoubleSide, blending:THREE.AdditiveBlending });
  const marker = new THREE.Group();
  marker.add(new THREE.Mesh(new THREE.RingGeometry(0.85, 1, 40).rotateX(-Math.PI / 2).translate(0, 0.1, 0), ringMat));
  marker.add(new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 30, 24, 1, true).translate(0, 15, 0), beamMat));
  marker.visible = false;
  deps.scene.add(marker);
  // cash bags
  const bagMat = new THREE.MeshStandardMaterial({ color:0x3f6b2a, roughness:0.8, emissive:0x2a4d1a, emissiveIntensity:0.4 });
  const bags = [];

  let m = null, step = 0, time = 0, left = 0, foes = [], boss = null, spawned = false, collected = 0, t = 0;

  function clearBags(){ for(const b of bags) deps.scene.remove(b); bags.length = 0; }
  function setMarker(p, r){ if(!p){ marker.visible = false; return; } marker.visible = true; marker.position.set(p.x, 0, p.z); marker.scale.set(r, 1, r); }

  function start(n){
    stop();
    m = generateMission(n); step = 0; time = 0; left = m.timeLimit; spawned = false; collected = 0; foes = []; boss = null;
    if(m.type === 'deliver' || m.type === 'race'){ setMarker(m.points[0], m.type === 'race' ? 7 : 6); }
    else if(m.type === 'collect'){
      setMarker(null);
      for(const p of m.points){
        const b = new THREE.Group();
        b.add(new THREE.Mesh(new THREE.SphereGeometry(0.45, 10, 8).scale(1, 0.8, 1).translate(0, 0.4, 0), bagMat));
        const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5), new THREE.MeshBasicMaterial({ color:0x4ade80, transparent:true, opacity:0.9 }));
        sign.position.y = 1.3; b.add(sign);
        b.position.set(p.x, 0, p.z); b.userData = { p, got:false, sign };
        deps.scene.add(b); bags.push(b);
      }
    }else setMarker(m.points[0], m.type === 'boss' ? 12 : 9);
    return m;
  }
  function stop(){
    m = null; setMarker(null); clearBags();
    deps.people.clearEnemies();
    foes = []; boss = null;
  }

  function spawnHit(){
    spawned = true;
    const c = m.points[0];
    if(m.type === 'boss'){
      const g = enemyStats(480, false);
      for(let i = 0; i < m.guards; i++){
        const a = i / m.guards * Math.PI * 2;
        foes.push(deps.people.spawnEnemy(Object.assign({}, g, { x:c.x + Math.cos(a) * 14, z:c.z + Math.sin(a) * 14, weapon:i % 2 ? 'ak' : 'smg', hp:160 })));
      }
      boss = deps.people.spawnEnemy({ x:c.x, z:c.z, outfit:EMERALD.outfit, weapon:EMERALD.weapon, hp:EMERALD.hp,
        accuracy:0.55, dmg:11, rate:0.32, range:60, boss:true, name:EMERALD.name });
      foes.push(boss);
      deps.toast("👑 EMERALD: \"You came all this way to die?\"", 3500);
      return;
    }
    const st = enemyStats(m.n, false);
    for(let i = 0; i < m.enemies; i++){
      const a = i / m.enemies * Math.PI * 2;
      const leader = m.leader && i === 0;
      const s = leader ? enemyStats(m.n, true) : st;
      foes.push(deps.people.spawnEnemy(Object.assign({}, s, { x:c.x + Math.cos(a) * 6, z:c.z + Math.sin(a) * 6, boss:leader })));
    }
  }

  // ctx = { pos:{x,z}, inCar, speed }. returns 'pass' | 'fail' | 'next' | null
  function update(dt, ctx){
    if(!m) return null;
    t += dt; time += dt;
    ringMat.opacity = 0.6 + Math.sin(t * 4) * 0.25; marker.rotation.y += dt * 0.6;
    for(const b of bags){ b.rotation.y += dt * 1.5; b.userData.sign.lookAt(ctx.cam || marker.position); }
    if(m.timeLimit){ left = m.timeLimit - time; if(left <= 0) return 'fail'; }
    const pos = ctx.pos;
    if(m.type === 'deliver'){
      const p = m.points[step];
      if(dist(pos, p) < 6.5){
        step++; deps.beep(880, 0.08);
        if(step >= m.points.length) return 'pass';
        setMarker(m.points[step], 6);
        return 'next';
      }
    }else if(m.type === 'race'){
      const p = m.points[step];
      if(dist(pos, p) < 7.5){
        step++; deps.beep(990, 0.06);
        if(step >= m.points.length) return 'pass';
        setMarker(m.points[step], 7);
        return 'next';
      }
    }else if(m.type === 'collect'){
      for(const b of bags){
        if(b.userData.got) continue;
        if(dist(pos, b.userData.p) < 2.6){ b.userData.got = true; b.visible = false; collected++; deps.beep(1200, 0.05); if(collected >= bags.length) return 'pass'; return 'next'; }
      }
    }else{
      if(!spawned && dist(pos, m.points[0]) < 75) spawnHit();
      if(spawned){
        setMarker(null);
        if(m.type === 'boss'){ if(boss && boss.state === 'dead') return 'pass'; }
        else if(foes.every(f => f.state === 'dead')) return 'pass';
      }
    }
    return null;
  }

  function objective(){
    if(!m) return '';
    if(m.type === 'deliver') return step === 0 ? 'Pick up the package' : 'Deliver the package';
    if(m.type === 'race') return `Checkpoint ${step + 1}/${m.points.length}`;
    if(m.type === 'collect') return `Cash bags ${collected}/${bags.length}`;
    if(!spawned) return m.type === 'boss' ? "Go to Emerald's compound" : 'Go to the gang hangout';
    const alive = foes.filter(f => f.state !== 'dead').length;
    return m.type === 'boss' ? (boss.state === 'dead' ? 'Emerald is down' : `Kill Emerald (${alive - (boss.state === 'dead' ? 0 : 1)} guards left)`) : `Enemies left: ${alive}`;
  }
  function target(pos){
    pos = pos || { x:0, z:0 };
    if(!m) return null;
    if(m.type === 'deliver' || m.type === 'race') return m.points[step] || null;
    if(m.type === 'collect'){ let best = null, bd = Infinity; for(const b of bags){ if(b.userData.got) continue; const d = Math.hypot(b.position.x - pos.x, b.position.z - pos.z); if(d < bd){ bd = d; best = b.userData.p; } } return best; }
    if(!spawned) return m.points[0];
    const live = foes.find(f => f.state !== 'dead' && (m.type !== 'boss' || f === boss)) || foes.find(f => f.state !== 'dead');
    return live ? { x:live.x, z:live.z } : null;
  }

  return { start, stop, update, objective, target,
    get mission(){ return m; }, get active(){ return !!m; }, get timeLeft(){ return m && m.timeLimit ? Math.max(0, left) : null; },
    get boss(){ return boss; } };
}
