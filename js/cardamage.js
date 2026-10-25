// CITY DRIVER — vehicle damage + repair.
// Pure, testable model. Crash impacts drain the car's HP; a battered car
// smokes and loses pace (throttle scaled by perfFactor), and a wrecked car
// stalls until the tow truck bills you and hauls it off. Damage is tracked
// per car, so swapping cars in the garage gives you a fresh one — but
// tuning the car you already own never repairs it for free.
export const CAR_MAX_HP = 100;
export const DAMAGE_FREE_IMPACT = 4;    // m/s of closing speed absorbed free
export const DAMAGE_PER_IMPACT = 1.0;   // hp lost per m/s over the free band
export const DAMAGE_CAP = 35;           // one hit never takes more than this
export const REPAIR_PER_HP = 10;        // $ per hp point on the tow bill
export const SMOKE_LIGHT_HP = 60;       // at or below this: light smoke
export const SMOKE_HEAVY_HP = 30;        // at or below this: heavy smoke
export const PERF_FULL_HP = 70;         // at or above this: full pace
export const PERF_MIN = 0.55;           // pace floor just before wrecking

// hp lost from one crash of `impact` m/s closing speed. Gentle taps are
// free, highway shunts are capped so one mistake can't total the car.
export function impactDamage(impact){
  if(!(impact > DAMAGE_FREE_IMPACT)) return 0;
  return Math.min(DAMAGE_CAP, Math.round((impact - DAMAGE_FREE_IMPACT) * DAMAGE_PER_IMPACT));
}

export class CarDamage {
  constructor(){ this.hp = CAR_MAX_HP; }
  get wrecked(){ return this.hp <= 0; }
  // crash of `impact` m/s. Returns hp actually lost.
  hit(impact){
    const d = impactDamage(impact);
    return this.damage(d);
  }
  // direct hp loss (cop rams, etc). Returns hp actually lost.
  damage(n){
    if(!(n > 0)) return 0;
    const before = this.hp;
    this.hp = Math.max(0, this.hp - n);
    return before - this.hp;
  }
  // 0 = clean, 1 = light smoke, 2 = heavy smoke (wrecked cars pour it out)
  smokeLevel(){
    if(this.hp <= SMOKE_HEAVY_HP) return 2;
    if(this.hp <= SMOKE_LIGHT_HP) return 1;
    return 0;
  }
  // throttle multiplier: full pace down to PERF_FULL_HP, then a straight
  // slide to PERF_MIN, and 0 once wrecked.
  perfFactor(){
    if(this.hp <= 0) return 0;
    if(this.hp >= PERF_FULL_HP) return 1;
    return PERF_MIN + (1 - PERF_MIN) * (this.hp - 1) / (PERF_FULL_HP - 1);
  }
  // tow bill for the damage so far, $ per missing hp point.
  repairCost(){
    return Math.ceil((CAR_MAX_HP - this.hp) * REPAIR_PER_HP);
  }
  // tow truck haul-off: back to full health. Returns the bill.
  repair(){
    const cost = this.repairCost();
    this.hp = CAR_MAX_HP;
    return cost;
  }
}
