// CITY DRIVER — working traffic lights at every intersection + AI traffic
// that drives in its lane (right-hand traffic), stops on red/yellow, keeps a
// gap to the car ahead, brakes for you, and turns at intersections.
import * as THREE from 'three';
import { countWitnesses } from './police.js';

const ROAD_W = 14, LANE = 3.5, STOP = ROAD_W / 2 + 2.2;
export const CYCLE = 16;              // seconds for a full light cycle

// Light state for one direction of an intersection at time t.
// axis 'z' = north/south traffic, 'x' = east/west traffic.
export function lightState(axis, t){
  const c = ((t % CYCLE) + CYCLE) % CYCLE;
  if(axis === 'z') return c < 6 ? 'green' : c < 8 ? 'yellow' : 'red';
  return c < 8 ? 'red' : c < 14 ? 'green' : 'yellow';
}
export const intersectionOffset = (ix, iz) => ((ix + iz) % 2) * 4;

// lane position for a car on a road (pure, testable)
export function laneXZ(axis, line, dir, s){
  return axis === 'z'
    ? { x: line + (dir < 0 ? LANE : -LANE), z: s, h: dir < 0 ? 0 : Math.PI }
    : { x: s, z: line + (dir > 0 ? LANE : -LANE), h: dir > 0 ? -Math.PI / 2 : Math.PI / 2 };
}

const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpP = new THREE.Vector3(), tmpS = new THREE.Vector3(1, 1, 1), UP = new THREE.Vector3(0, 1, 0);
const OFF = new THREE.Color(0x1a1a1a), RED = new THREE.Color(0xff2a1a), YEL = new THREE.Color(0xffb020), GRN = new THREE.Color(0x2bff6a);

// deps = { scene, lines:[road centre coords], buildCar(def), applyCarSkin, CAR_DEFS }
export function createTraffic(deps){
  const L = deps.lines.slice().sort((a, b) => a - b);
  const N = L.length;
  let time = 0;

  // ---------- light hardware: 4 heads per intersection (one per approach) ----------
  const heads = [];   // { ix, iz, axis, x, z, rot }
  for(let ix = 0; ix < N; ix++) for(let iz = 0; iz < N; iz++){
    const cx = L[ix], cz = L[iz], o = STOP - 0.6;
    heads.push({ ix, iz, axis:'z', x:cx + o, z:cz + o, rot:0 });             // northbound approach, faces +z
    heads.push({ ix, iz, axis:'z', x:cx - o, z:cz - o, rot:Math.PI });       // southbound, faces -z
    heads.push({ ix, iz, axis:'x', x:cx - o, z:cz + o, rot:-Math.PI / 2 });  // eastbound, faces -x
    heads.push({ ix, iz, axis:'x', x:cx + o, z:cz - o, rot:Math.PI / 2 });   // westbound, faces +x
  }
  const M = heads.length;
  const poleGeo = new THREE.CylinderGeometry(0.09, 0.11, 4.2, 6).translate(0, 2.1, 0);
  const poleMat = new THREE.MeshStandardMaterial({ color:0x2f343b, metalness:0.6, roughness:0.5 });
  const boxGeo = new THREE.BoxGeometry(0.45, 1.25, 0.32).translate(0, 4.6, 0);
  const boxMat = new THREE.MeshStandardMaterial({ color:0x1d2126, roughness:0.6, metalness:0.3 });
  const lampGeo = new THREE.CircleGeometry(0.15, 12);
  const poles = new THREE.InstancedMesh(poleGeo, poleMat, M);
  const boxes = new THREE.InstancedMesh(boxGeo, boxMat, M);
  const lampMat = new THREE.MeshBasicMaterial({ color:0xffffff, toneMapped:false });
  const lamps = [0, 1, 2].map(() => new THREE.InstancedMesh(lampGeo, lampMat, M));   // red, yellow, green
  boxes.castShadow = true;
  heads.forEach((h, i) => {
    tmpQ.setFromAxisAngle(UP, h.rot);
    tmpP.set(h.x, 0, h.z); tmpM.compose(tmpP, tmpQ, tmpS);
    poles.setMatrixAt(i, tmpM); boxes.setMatrixAt(i, tmpM);
    const fx = Math.sin(h.rot), fz = Math.cos(h.rot);      // face normal (+z rotated)
    for(let k = 0; k < 3; k++){
      tmpP.set(h.x + fx * 0.17, 5.0 - k * 0.38, h.z + fz * 0.17);
      tmpM.compose(tmpP, tmpQ, tmpS);
      lamps[k].setMatrixAt(i, tmpM);
      lamps[k].setColorAt(i, OFF);
    }
  });
  for(const m of [poles, boxes, ...lamps]){ m.instanceMatrix.needsUpdate = true; deps.scene.add(m); }
  // stop lines painted on the road
  {
    const g = new THREE.PlaneGeometry(LANE * 2 - 0.6, 0.45).rotateX(-Math.PI / 2);
    const sl = new THREE.InstancedMesh(g, new THREE.MeshStandardMaterial({ color:0xf2f4f6, roughness:0.7 }), M);
    heads.forEach((h, i) => {
      const cx = L[h.ix], cz = L[h.iz];
      let x, z, r;
      if(h.axis === 'z'){ const d = h.rot === 0 ? 1 : -1; x = cx + d * LANE; z = cz + d * STOP; r = 0; }
      else { const d = h.rot < 0 ? -1 : 1; x = cx + d * STOP; z = cz - d * LANE; r = Math.PI / 2; }
      tmpQ.setFromAxisAngle(UP, r); tmpP.set(x, 0.065, z); tmpM.compose(tmpP, tmpQ, tmpS);
      sl.setMatrixAt(i, tmpM);
    });
    sl.instanceMatrix.needsUpdate = true;
    deps.scene.add(sl);
  }
  const lastState = new Array(M).fill('');
  function stateAt(ix, iz, axis){ return lightState(axis, time + intersectionOffset(ix, iz)); }
  function updateLights(){
    let dirty = false;
    for(let i = 0; i < M; i++){
      const h = heads[i], st = stateAt(h.ix, h.iz, h.axis);
      if(st === lastState[i]) continue;
      lastState[i] = st; dirty = true;
      lamps[0].setColorAt(i, st === 'red' ? RED : OFF);
      lamps[1].setColorAt(i, st === 'yellow' ? YEL : OFF);
      lamps[2].setColorAt(i, st === 'green' ? GRN : OFF);
    }
    if(dirty) for(const l of lamps) l.instanceColor.needsUpdate = true;
  }

  // ---------- AI cars ----------
  const cars = [];
  let maxCars = 12;
  const idxOf = v => { let b = 0, bd = Infinity; for(let i = 0; i < N; i++){ const d = Math.abs(L[i] - v); if(d < bd){ bd = d; b = i; } } return b; };

  // a driver you can see through the glass (and shoot)
  const skinTones = [0xf5d0b5, 0xe8b48f, 0xc68a62, 0xa86b45, 0x7a4a2c];
  function addDriver(group){
    const P = group.userData.profile;
    const d = new THREE.Group();
    const shirt = new THREE.MeshStandardMaterial({ color:Math.random() * 0xffffff | 0, roughness:0.8 });
    const skin = new THREE.MeshStandardMaterial({ color:skinTones[(Math.random() * skinTones.length) | 0], roughness:0.7 });
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.5, 0.28), shirt); torso.position.y = 0.25;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), skin); head.position.y = 0.62;
    d.add(torso, head);
    const gl = P ? P.glass : [[0.5, 0.8]];
    const seatY = Math.min(...gl.map(p => p[1])) - 0.15;
    const seatX = gl.reduce((a, p) => a + p[0], 0) / gl.length;
    d.position.set(-0.38, seatY, -seatX + 0.25);
    group.add(d);
    group.userData.driver = d;
    group.userData.driverHead = head;
  }
  function makeCar(){
    const pool = deps.CAR_DEFS.filter(d => d.id !== 'hyper' || Math.random() < 0.3);
    const def = pool[(Math.random() * pool.length) | 0];
    const group = deps.buildCar(def);
    const col = def.colors[(Math.random() * def.colors.length) | 0];
    deps.applyCarSkin(group, col, null);
    addDriver(group);
    deps.scene.add(group);
    return { group, def, color:col, axis:'z', li:0, dir:1, s:0, speed:0, cruise:0, x:0, z:0, h:0, honk:0, wait:0, driverHp:30, panic:0, empty:false };
  }
  function place(c, px, pz, near){
    // random road point 70..170m from the player (not right on top of them)
    for(let tries = 0; tries < 20; tries++){
      c.axis = Math.random() < 0.5 ? 'z' : 'x';
      c.li = (Math.random() * N) | 0;
      c.dir = Math.random() < 0.5 ? 1 : -1;
      c.s = L[0] + Math.random() * (L[N - 1] - L[0]);
      const p = laneXZ(c.axis, L[c.li], c.dir, c.s);
      const d = Math.hypot(p.x - px, p.z - pz);
      if(near ? d < 150 : (d > 70 && d < 170)){ c.x = p.x; c.z = p.z; c.h = p.h; break; }
    }
    const p = laneXZ(c.axis, L[c.li], c.dir, c.s);
    c.x = p.x; c.z = p.z; c.h = p.h;
    c.cruise = 9 + Math.random() * 5;
    c.speed = c.cruise * 0.6;
    c.driverHp = 30; c.panic = 0; c.empty = false;
    const d = c.group.userData.driver; if(d){ d.visible = true; d.rotation.set(0, 0, 0); }
    const hd = c.group.userData.driverHead; if(hd) hd.material.color.setHex(skinTones[(Math.random() * skinTones.length) | 0]);
    c.group.position.set(c.x, 0, c.z); c.group.rotation.y = c.h;
  }

  // next crossing ahead along the car's road
  function nextCross(c){
    if(c.dir > 0){ for(let k = 0; k < N; k++) if(L[k] > c.s + 0.3) return k; }
    else { for(let k = N - 1; k >= 0; k--) if(L[k] < c.s - 0.3) return k; }
    return -1;
  }

  function turn(c, k){
    // at intersection (road line c.li crossing line k): choose straight / right / left
    const r = Math.random();
    const atEdgeAhead = (c.dir > 0 && k === N - 1) || (c.dir < 0 && k === 0);
    let choice = r < 0.55 && !atEdgeAhead ? 'straight' : r < 0.82 ? 'right' : 'left';
    // right turn from dir: z/-1(N)->x/+1(E), z/+1(S)->x/-1(W), x/+1(E)->z/+1(S), x/-1(W)->z/-1(N)
    let nAxis, nDir;
    if(choice === 'straight') return;
    if(c.axis === 'z'){ nAxis = 'x'; nDir = (c.dir < 0) === (choice === 'right') ? 1 : -1; }
    else { nAxis = 'z'; nDir = (c.dir > 0) === (choice === 'right') ? 1 : -1; }
    const along = L[c.li];
    // don't turn onto a road heading straight off the grid edge
    const nl = k;
    if((nDir > 0 && along >= L[N - 1] - 1) || (nDir < 0 && along <= L[0] + 1)) nDir = -nDir;
    c.axis = nAxis; c.li = nl; c.dir = nDir; c.s = along;
  }

  function update(dt, player, playerCar){
    time += dt;
    updateLights();
    while(cars.length < maxCars){ const c = makeCar(); place(c, player.x, player.z, cars.length < 4); cars.push(c); }
    for(const c of cars){
      if(Math.hypot(c.x - player.x, c.z - player.z) > 230){ place(c, player.x, player.z, false); continue; }
      if(c.empty && c.respawnT !== undefined){ c.respawnT -= dt; if(c.respawnT <= 0){ delete c.respawnT; place(c, player.x, player.z, false); continue; } }
      if(c.empty){ c.speed = Math.max(0, c.speed - 6 * dt); c.s += c.dir * c.speed * dt; const p0 = laneXZ(c.axis, L[c.li], c.dir, c.s); c.x += (p0.x - c.x) * Math.min(1, dt * 6); c.z += (p0.z - c.z) * Math.min(1, dt * 6); c.group.position.set(c.x, 0, c.z); continue; }
      if(c.panic > 0) c.panic -= dt;
      let want = c.panic > 0 ? c.cruise * 1.8 : c.cruise;
      const k = nextCross(c);
      if(k >= 0){
        const cross = L[k];
        const toCenter = (cross - c.s) * c.dir;
        const toStop = toCenter - STOP;
        const ix = c.axis === 'z' ? c.li : k, iz = c.axis === 'z' ? k : c.li;
        const st = stateAt(ix, iz, c.axis);
        if(toStop > -0.5 && (st === 'red' || (st === 'yellow' && toStop > 5))) want = Math.min(want, Math.max(0, toStop - 0.3) * 1.1);
        if(toCenter <= 0.05){ c.s = cross; turn(c, k); }
      }else{
        // end of the road: U-turn
        c.dir = -c.dir;
      }
      // keep a gap to the car ahead in the same lane, and to the player
      for(const o of cars){
        if(o === c || o.axis !== c.axis || o.li !== c.li || o.dir !== c.dir) continue;
        const gap = (o.s - c.s) * c.dir;
        if(gap > 0 && gap < 14) want = Math.min(want, Math.max(0, (gap - 6.5) * 1.3));
      }
      if(playerCar){
        const fx = -Math.sin(c.h), fz = -Math.cos(c.h);
        const dx = playerCar.x - c.x, dz = playerCar.z - c.z;
        const ahead = dx * fx + dz * fz, side = Math.abs(dx * fz - dz * fx);
        if(ahead > 0 && ahead < 13 && side < 2.6){ want = Math.min(want, Math.max(0, (ahead - 5.5) * 1.3)); c.wait += dt; }
        else c.wait = 0;
      }
      const acc = want > c.speed ? 4 : 9;
      c.speed += Math.sign(want - c.speed) * Math.min(Math.abs(want - c.speed), acc * dt);
      c.s += c.dir * c.speed * dt;
      const p = laneXZ(c.axis, L[c.li], c.dir, c.s);
      // smooth lane changes at turns
      const kk = Math.min(1, dt * 6);
      c.x += (p.x - c.x) * kk; c.z += (p.z - c.z) * kk;
      let dh = p.h - c.h; dh = Math.atan2(Math.sin(dh), Math.cos(dh)); c.h += dh * Math.min(1, dt * 5);
      c.group.position.set(c.x, 0, c.z);
      c.group.rotation.y = c.h;
      const spin = c.speed * dt * 2.6;
      for(const w of c.group.userData.wheels) w.rotation.x += spin;
      const fl = c.group.userData.flashers;
      if(fl){ const on = ((time * 6) | 0) % 2; fl[0].emissiveIntensity = on ? 4 : 0.25; fl[1].emissiveIntensity = on ? 0.25 : 4; }
    }
  }

  // push a circle (player car / person) out of traffic cars; returns the car hit (or null)
  function collide(res, R){
    let hit = null;
    for(const c of cars){
      const fx = -Math.sin(c.h), fz = -Math.cos(c.h);
      for(const o of [-1.3, 0, 1.3]){
        const cx = c.x + fx * o, cz = c.z + fz * o, rr = 1.0 + R;
        const dx = res.x - cx, dz = res.z - cz, d = Math.hypot(dx, dz);
        if(d < rr && d > 1e-6){ res.x = cx + dx / d * rr; res.z = cz + dz / d * rr; hit = c; }
      }
    }
    if(hit){ hit.speed *= 0.3; }
    return hit;
  }
  // bullet blockers: 2 circles per car
  const blockers = [];
  function hitList(){
    blockers.length = 0;
    for(const c of cars){
      const fx = -Math.sin(c.h), fz = -Math.cos(c.h);
      blockers.push({ x:c.x + fx * 0.9, z:c.z + fz * 0.9, r:1.0, ref:{ kind:'car', car:c } });
      blockers.push({ x:c.x - fx * 0.9, z:c.z - fz * 0.9, r:1.0, ref:{ kind:'car', car:c } });
    }
    return blockers;
  }
  // a bullet hit a car: maybe the driver. returns 'killed' | 'hit' | null and the driver's world position
  function hitCar(car, dmg, dx, dz){
    if(car.empty) return null;
    car.panic = 6;
    car.driverHp -= dmg;
    const d = car.group.userData.driver;
    const wp = new THREE.Vector3(); if(d) d.getWorldPosition(wp);
    if(car.driverHp <= 0){
      car.empty = true; car.respawnT = 40;
      if(d){ d.rotation.z = 0.9; d.rotation.x = 0.3; }
      if(car.group.userData.driverHead) car.group.userData.driverHead.material.color.setHex(0x7a0000);
      return { kind:'killed', x:wp.x, y:wp.y + 0.6, z:wp.z };
    }
    return { kind:'hit', x:wp.x, y:wp.y + 0.6, z:wp.z };
  }
  // nearest car you could steal from where you're standing
  function nearestCar(x, z, maxD){
    let best = null, bd = maxD;
    for(const c of cars){ const d = Math.hypot(c.x - x, c.z - z); if(d < bd){ bd = d; best = c; } }
    return best;
  }
  // take a car out of traffic (you stole it). The driver (if alive) is returned so it can be thrown out.
  function remove(c){
    const i = cars.indexOf(c); if(i < 0) return null;
    cars.splice(i, 1);
    deps.scene.remove(c.group);
    return { alive:!c.empty, x:c.x, z:c.z, h:c.h, def:c.def, color:c.color };
  }

  function setCount(n){
    maxCars = n;
    while(cars.length > n){ const c = cars.pop(); deps.scene.remove(c.group); }
  }
  function setVisible(v){ for(const c of cars) c.group.visible = v; }

  // drivers who saw a crime at (x,z): occupied cars within r. An empty car
  // (dead/stolen driver) has nobody in it to witness anything.
  function witnesses(x, z, r){
    const drivers = [];
    for(const c of cars) if(!c.empty) drivers.push(c);
    return countWitnesses(drivers, x, z, r);
  }

  return { update, collide, hitList, setCount, setVisible, stateAt, hitCar, nearestCar, remove, witnesses, get cars(){ return cars; } };
}
