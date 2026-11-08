// CITY DRIVER — the visible fuel truck.
//
// The old delivery was a toast and an instant +25: a "fuel truck" that no
// player ever saw. Now a tanker actually shows up: it drives in along the
// line the stalled car was travelling (the road it just drove, coming from
// behind), parks beside the car, fills it progressively over a short dwell,
// then drives on ahead and despawns.
//
// Pure state machine + a THREE mesh builder that takes THREE as a parameter,
// so the run is unit-testable in node without a renderer (same convention
// as fuelstations.js). Cars face -Z at heading 0 (physics.js), so forward
// is (-sin h, -cos h) and the truck mesh is built facing -Z too, letting
// main.js drive it with rotation.y = heading like the player car.
import { DELIVERY_UNITS } from './fuel.js';

export const TRUCK_SPEED = 12;        // m/s driving in and away
export const TRUCK_APPROACH = 40;     // m behind/ahead of the stop point
export const TRUCK_SIDE = 4.5;        // m to the car's side: clear of the
                                      // car itself (~1 m half-width) and of
                                      // the pump islands it may park near
export const TRUCK_DELIVER_TIME = 2;  // s parked beside the car, filling

// Forward unit vector for a heading (physics.js convention: 0 = -Z).
function fwd(heading){
  return { x: -Math.sin(heading), z: -Math.cos(heading) };
}
// Side unit vector: heading 0 faces -Z, so the side step is +X (east).
function side(heading){
  const f = fwd(heading);
  return { x: -f.z, z: f.x };
}

// Where the truck parks: beside the stalled car, same heading.
export function truckStopFor(carX, carZ, heading){
  const s = side(heading);
  return { x: carX + s.x * TRUCK_SIDE, z: carZ + s.z * TRUCK_SIDE, heading };
}
// Where it appears: behind the stop point, on the same line.
export function truckSpawnFor(stop, heading){
  const f = fwd(heading);
  return { x: stop.x - f.x * TRUCK_APPROACH, z: stop.z - f.z * TRUCK_APPROACH, heading };
}
// Where it heads after delivering: ahead of the stop point, same line.
export function truckDepartTarget(stop, heading){
  const f = fwd(heading);
  return { x: stop.x + f.x * TRUCK_APPROACH, z: stop.z + f.z * TRUCK_APPROACH, heading };
}

// One delivery run. Phases: inbound -> delivering -> departing -> done.
// update(dt, tank) returns { added, cost, arrived, deliveryFinished }:
// `arrived` fires once when the truck parks, `deliveryFinished` once when
// the fill completes (full 25 units, or the tank fills first).
export class FuelTruckRun {
  constructor(carX, carZ, heading){
    this.heading = heading;
    this.stop = truckStopFor(carX, carZ, heading);
    this.spawn = truckSpawnFor(this.stop, heading);
    this.depart = truckDepartTarget(this.stop, heading);
    this.x = this.spawn.x;
    this.z = this.spawn.z;
    this.phase = 'inbound';
    this.delivered = 0;
    this.done = false;
  }
  // Step toward (tx, tz) at truck speed; true once arrived there.
  _drive(dt, tx, tz){
    const dx = tx - this.x, dz = tz - this.z;
    const d = Math.hypot(dx, dz);
    const step = TRUCK_SPEED * dt;
    if(d <= step){ this.x = tx; this.z = tz; return true; }
    this.x += (dx / d) * step;
    this.z += (dz / d) * step;
    return false;
  }
  update(dt, tank){
    const out = { added: 0, cost: 0, arrived: false, deliveryFinished: false };
    if(this.done || !(dt > 0)) return out;
    if(this.phase === 'inbound'){
      if(this._drive(dt, this.stop.x, this.stop.z)){
        this.phase = 'delivering';
        out.arrived = true;
      }
    } else if(this.phase === 'delivering'){
      const remaining = DELIVERY_UNITS - this.delivered;
      const share = DELIVERY_UNITS * dt / TRUCK_DELIVER_TIME;
      const r = tank.deliverPartial(Math.min(remaining, share));
      this.delivered += r.added;
      out.added = r.added;
      out.cost = r.cost;
      if(this.delivered >= DELIVERY_UNITS || tank.full){
        this.phase = 'departing';
        out.deliveryFinished = true;
      }
    } else if(this.phase === 'departing'){
      if(this._drive(dt, this.depart.x, this.depart.z)){
        this.phase = 'done';
        this.done = true;
      }
    }
    return out;
  }
}

// Tanker mesh, local frame facing -Z: cab at the front (-Z), tank cylinder
// behind it, six wheels. Returns a THREE.Group main.js can position with
// position.set(x, 0, z) and rotation.y = heading.
export function buildFuelTruckMeshes(THREE){
  const g = new THREE.Group();
  const std = (color, o = {}) => new THREE.MeshStandardMaterial(
    Object.assign({ color, roughness: 0.7 }, o));
  const box = (w, h, d, mat, px, py, pz) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    m.position.set(px, py, pz); m.castShadow = true; m.receiveShadow = true;
    g.add(m); return m;
  };
  const cab = std(0xc8102e, { roughness: 0.5 });
  const tankMat = std(0xe8e8e8, { roughness: 0.35, metalness: 0.6 });
  const dark = std(0x2b2f36, { roughness: 0.6, metalness: 0.3 });
  const yellow = std(0xffc21a, { roughness: 0.6 });
  // Chassis + cab (front, -Z) + tank (rear, +Z). Total length ~9 m.
  box(2.4, 0.4, 9.0, dark, 0, 0.6, 0.5);
  box(2.4, 1.6, 1.8, cab, 0, 1.6, -3.4);
  box(2.3, 0.9, 1.2, dark, 0, 2.8, -3.4); // cab roof / visor block
  const tankGeo = new THREE.CylinderGeometry(1.1, 1.1, 5.4, 16);
  const tank = new THREE.Mesh(tankGeo, tankMat);
  tank.rotation.x = Math.PI / 2;
  tank.position.set(0, 1.7, 1.6); tank.castShadow = true; tank.receiveShadow = true;
  g.add(tank);
  box(2.5, 0.25, 0.3, yellow, 0, 1.7, 1.6); // hazard stripe along the tank
  // Six wheels: front axle + two rear axles.
  const wheelGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.35, 12);
  const tire = std(0x0c0d0f, { roughness: 0.95 });
  for(const z of [-3.4, 2.6, 4.0]){
    for(const x of [-1.2, 1.2]){
      const w = new THREE.Mesh(wheelGeo, tire);
      w.rotation.z = Math.PI / 2;
      w.position.set(x, 0.5, z); w.castShadow = true;
      g.add(w);
    }
  }
  return g;
}
