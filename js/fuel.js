// CITY DRIVER — fuel + refuelling.
// Pure, testable model. Every car carries its own tank: driving burns fuel
// faster the harder you drive (speed costs more per metre, nitro costs
// extra), an empty tank stalls the car, and a low tank warns once until
// you fill up again. Two ways back to full: pull onto a station forecourt
// and sit still for a couple of seconds (cheap, $2/unit), or wait stalled
// for the fuel truck (pricier, $5/unit, only 25 units — so you are never
// stranded, but stations are always the better deal).
export const FUEL_MAX = 100;
export const FUEL_LOW = 20;            // at or below this: low-fuel warning
export const FUEL_IDLE_RATE = 0.004;   // units/s burned idling with the engine on
export const FUEL_BASE_PER_M = 0.0035; // units per metre at low speed
export const FUEL_SPEED_PER_M = 0.0035;// extra units per metre at 60 m/s (drag)
export const FUEL_SPEED_REF = 60;      // m/s the speed term is scaled against
export const FUEL_NITRO_MULT = 1.6;    // nitro multiplies the per-metre burn
export const STATION_PRICE = 2;        // $ per unit at a station
export const DELIVERY_PRICE = 5;       // $ per unit from the fuel truck
export const DELIVERY_UNITS = 25;      // units the fuel truck brings
export const STATION_RADIUS = 22;      // m: pull onto the shoulder by a station
export const FUEL_FILL_RATE = 25;       // units/s while parked at a pump: a
                                        // full tank takes ~4 s, and driving
                                        // off mid-fill keeps what you got

// Forecourt points (visible stations are built by fuelstations.js; the radius
// is generous so a car pulled onto the pad beside the pumps counts). Both sit
// one block corner off their intersection, 18 m from each road centre line.
// Portage & Main: (203, -55) is 18 m from Main St (x=185) and Portage Ave (z=-37).
// Arlington & York: (-203, 129) is 18 m from Arlington St (x=-185) and York Ave (z=111).
// `axis` is the road the pump row runs parallel to; `toward` steps from the
// station point toward its intersection (the corner the price sign stands on).
export const STATIONS = [
  { name: 'Portage & Main', x: 203, z: -55, axis: 'z', toward: [-1, 1] },
  { name: 'Arlington & York', x: -203, z: 129, axis: 'x', toward: [1, -1] },
];

// Nearest station to (x, z), with its distance. Never null: the list is fixed.
export function nearestStation(x, z){
  let best = STATIONS[0], bestD = Infinity;
  for(const s of STATIONS){
    const d = Math.hypot(s.x - x, s.z - z);
    if(d < bestD){ best = s; bestD = d; }
  }
  return { station: best, dist: bestD };
}

// Units burned driving `dt` seconds at `speed` m/s. Stationary cars idle;
// moving cars pay per metre, rising with speed, and nitro pays extra.
export function fuelUsed(dt, speed, nitroOn){
  if(!(dt > 0)) return 0;
  const sp = Math.abs(speed || 0);
  if(sp <= 0.5) return FUEL_IDLE_RATE * dt;
  const perM = FUEL_BASE_PER_M + FUEL_SPEED_PER_M * Math.min(1, sp / FUEL_SPEED_REF) ** 2;
  return sp * dt * perM * (nitroOn ? FUEL_NITRO_MULT : 1);
}

export class FuelTank {
  constructor(){ this.level = FUEL_MAX; }
  get full(){ return this.level >= FUEL_MAX; }
  get empty(){ return this.level <= 0; }
  get low(){ return this.level > 0 && this.level <= FUEL_LOW; }
  // Burn fuel for `dt` seconds at `speed` m/s. Returns units actually used.
  consume(dt, speed, nitroOn){
    const used = Math.min(this.level, fuelUsed(dt, speed, nitroOn));
    this.level = Math.max(0, this.level - used);
    return used;
  }
  // $ to fill from here to full.
  fillCost(){
    return Math.ceil((FUEL_MAX - this.level) * STATION_PRICE);
  }
  // Fill to full. Returns { added, cost } — cost only covers what was added.
  fill(){
    const added = FUEL_MAX - this.level;
    const cost = Math.ceil(added * STATION_PRICE);
    this.level = FUEL_MAX;
    return { added, cost };
  }
  // Partial top-up of `units` at the station price, capped at full. This is
  // what pump-side refuelling uses: the gauge climbs while you sit at the
  // pump, and driving off mid-fill keeps the fuel (and the charge) so far.
  add(units){
    const added = Math.min(Math.max(0, units), FUEL_MAX - this.level);
    const cost = Math.ceil(added * STATION_PRICE);
    this.level += added;
    return { added, cost };
  }
  // Fuel-truck delivery: a fixed top-up at the delivery price, capped at full.
  deliver(){
    const added = Math.min(DELIVERY_UNITS, FUEL_MAX - this.level);
    const cost = Math.ceil(added * DELIVERY_PRICE);
    this.level += added;
    return { added, cost };
  }
}
