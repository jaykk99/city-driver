// CITY DRIVER — tire wear + replacement.
// Pure, testable model. The damage system (cardamage.js) already made
// crashes cost HP, and the fuel system made distance cost fuel — but
// tires were free forever, so the drift economy had no downside: drifting
// pays cash (stunts.js) and cost nothing. This closes that gap: every
// metre driven wears the tires, drifting and off-road driving wear them
// much faster, and worn tires lose grip — the tail hangs out more, so a
// car on bald tires drifts whether you want it to or not. The fix is a
// drive-in tire shop (tireshop.js): pull into a bay and a fresh set goes
// on progressively, at a flat per-set price.
//
// Wear is per car, like damage and fuel: swapping cars in the garage gives
// you a fresh set, but tuning the car you already own never replaces its
// tires for free.
export const TIRE_SET_COST = 600;   // $ for a full set of four
export const WEAR_PER_M = 1 / 30000; // a set lasts ~30 km of normal driving
export const WEAR_DRIFT_MULT = 4;   // drifting scrubs rubber 4x faster
export const WEAR_OFFROAD_MULT = 2; // gravel/grass/dirt/mud chew tires 2x
export const GRIP_LOSS_MAX = 0.5;   // bald tires keep 50% of base grip
export const WORN_WARN = 0.5;       // first toast: half-worn, grip slipping
export const WORN_BAD = 0.85;       // second toast: nearly bald, get to a shop

// Wear added driving `distM` metres. Multipliers stack: drifting off-road
// wears 8x, which is the point — drift farming now eats its own profits.
export function wearFor(distM, { drifting = false, offroad = false } = {}){
  if(!(distM > 0)) return 0;
  let mult = 1;
  if(drifting) mult *= WEAR_DRIFT_MULT;
  if(offroad) mult *= WEAR_OFFROAD_MULT;
  return distM * WEAR_PER_M * mult;
}

export class TireWear {
  constructor(){ this.wear = 0; }   // 0 = fresh set, 1 = bald
  get worn(){ return this.wear >= WORN_WARN; }
  get bald(){ return this.wear >= WORN_BAD; }
  // Grip multiplier for physics: full grip fresh, sliding to
  // (1 - GRIP_LOSS_MAX) bald. Linear, so every drive degrades handling
  // a little rather than falling off a cliff at one threshold.
  gripFactor(){
    return 1 - GRIP_LOSS_MAX * Math.min(1, Math.max(0, this.wear));
  }
  // Drive `distM` metres. Returns wear actually added (0 once bald).
  drive(distM, opts){
    const added = Math.min(wearFor(distM, opts), 1 - this.wear);
    this.wear += added;
    return added;
  }
  // $ to replace the wear so far at the flat per-set price.
  replaceCost(){
    return Math.ceil(this.wear * TIRE_SET_COST);
  }
  // Partial replacement of `frac` of a set (0..1), capped at fresh.
  // This is what bay-side service uses: the set goes on while the car
  // sits in a bay, and driving off mid-swap keeps the rubber so far.
  // Returns { replaced, cost } — cost only covers what was actually fitted.
  replacePartial(frac){
    const replaced = Math.min(Math.max(0, frac), this.wear);
    const cost = Math.ceil(replaced * TIRE_SET_COST);
    this.wear -= replaced;
    return { replaced, cost };
  }
  // Per-frame swap for the bay loop: accumulate the fractional set and
  // apply only whole-dollar chunks, so the $600/set price stays exact
  // instead of rounding up on every frame (the old per-frame
  // replacePartial() charged $721 for a $600 set). `cash` caps what can
  // be afforded: no cash, no rubber. Returns { replaced, cost } — cost
  // is exact whole dollars. The final sliver (less than a dollar of wear
  // left) fits once the request has covered it, at the same ceil() the
  // instant replaceCost() path charges.
  replaceMetered(frac, cash = Infinity){
    this._pend = (this._pend || 0) + Math.max(0, frac) * TIRE_SET_COST;
    if(this.wear <= 1e-9){ this.wear = 0; return { replaced: 0, cost: 0 }; }
    if(this.wear * TIRE_SET_COST <= this._pend){
      const cost = Math.ceil(this.wear * TIRE_SET_COST);
      if(cash < cost) return { replaced: 0, cost: 0 };
      const r = this.replacePartial(this.wear);
      this._pend = 0;
      return r;
    }
    const whole = Math.floor(this._pend);
    if(whole <= 0) return { replaced: 0, cost: 0 };
    let f = Math.min(whole / TIRE_SET_COST, this.wear, Math.max(0, cash) / TIRE_SET_COST);
    f = Math.floor(f * TIRE_SET_COST) / TIRE_SET_COST; // whole dollars only
    if(f <= 0) return { replaced: 0, cost: 0 };
    const r = this.replacePartial(f);
    this._pend -= r.cost;
    return r;
  }
}
