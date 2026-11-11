// CITY DRIVER — courier shift: food delivery in any car.
//
// The cab has its taxi shift, but every other car had no ambient income
// loop in free roam: stunts pay a little, missions are gated behind the
// board. This closes that gap with the classic courier loop, on the same
// pattern as the fuel / repair / tire services and the taxi fares: drive
// any car in free roam and delivery orders appear at restaurants nearby.
// Drive to the restaurant and stop to collect, then follow the marker to
// the customer and stop again to get paid — base pay plus distance, scaled
// by how fresh the food still is when it arrives.
//
// What makes it a different job from a taxi fare, not a reskin:
//  - Freshness: the clock starts at pickup, not at the offer. Food starts
//    hot and cools over the par time; a hot delivery pays the full meter,
//    a cold one pays half. There is no bail-out: a late order still pays,
//    just cold — the penalty is money, not a lost fare.
//  - Spoilage: a hard shunt while carrying spoils the food in the car —
//    every impact (main.js damageCar) knocks 15% off the freshness of
//    every order aboard, so smooth driving is the skill, not just speed.
//  - Stacking: while carrying one order a second offer can appear from a
//    nearby restaurant. Collect it and run both drops in either order;
//    finishing a stacked pair pays a $50 batch bonus on the last drop.
//  - Any car: the courier works in whatever you are driving. The cab is
//    the one exception — when the taxi shift is live the courier waits,
//    so the two jobs never fight over the same beacon.
//
// Pure state machine + pay math, no THREE and no document, so the whole
// loop is unit-testable in node. main.js owns the beacon, the HUD, the
// toasts and the cash; this module only decides what happens when. The
// point pickers are shared with taxi.js (hailNear / destFar on the main
// grid, customMapPickers on custom streets).
import { hailPointNear, destinationFar, customMapPickers } from './taxi.js';
export { customMapPickers };

export const COURIER_BASE_PAY = 30;     // $ flat, before distance
export const COURIER_PER_METRE = 0.25;  // $ per metre of straight-line trip
export const COURIER_COLD_FLOOR = 0.5;  // a stone-cold delivery still pays half
export const COURIER_BATCH_BONUS = 50;  // $ for finishing a stacked pair
export const PICKUP_RADIUS = 7;         // m: stop this close to the restaurant to collect
export const DROPOFF_RADIUS = 7;        // m: stop this close to the customer to deliver
export const OFFER_PATIENCE = 40;       // s: an order waits at the restaurant, then is cancelled
export const SECOND_OFFER_CHANCE = 0.35;// share of carries that draw a second order
export const SECOND_OFFER_MIN = 8;      // s after pickup before a second offer can appear
export const SECOND_OFFER_MAX = 15;     // s after pickup before the second-offer window closes
export const SPOIL_PER_HIT = 0.15;      // freshness lost per hard impact while carrying
export const MAX_STACK = 2;             // orders aboard at once
export const OFFER_DELAY_MIN = 10;      // s between orders (short end)
export const OFFER_DELAY_MAX = 25;      // s between orders (long end)
export const ORDER_COOLDOWN = 6;        // s after an order ends before the next offer
export const OFFER_RETRY = 5;           // s: wait before retrying when no road is near

// Menus on the run: the food names the order, the restaurant names the
// pickup — the toast reads like a real ticket, not a generic marker.
export const FOODS = ['hot pizzas', 'burgers', 'sushi', 'tacos', 'noodles',
  'fried chicken', 'curry', 'sandwiches', 'wings', 'salads'];
export const RESTAURANTS = ['Peg Pizza', 'The Forks Diner', 'Portage Tacos',
  'Osborne Sushi', 'Main St Burgers', 'St. Boniface Noodles', 'River Ave Curry',
  'Exchange Fried Chicken', 'North End Wings', 'Pembina Sandwich Co.'];

const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

// Par time for a trip: city pace ~11 m/s (the taxi / deliver-mission pace)
// plus a grace window for lights and traffic. The freshness clock runs
// against this: arrive inside par and the food is still hot.
export function parTimeFor(distM){
  return Math.round(distM / 11 + 15);
}

// Freshness at delivery: 1 while the food is hot, sliding to 0 as the
// ride runs past par time, minus 15% per hard impact while carrying.
// Never below 0, never above 1 — a cold order is worth half, not nothing.
export function freshnessFor(seconds, parSeconds, spoilHits = 0){
  if(!(parSeconds > 0)) return 0;
  return clamp(1 - seconds / parSeconds - SPOIL_PER_HIT * spoilHits, 0, 1);
}

// Pay for one order: base plus distance, scaled by freshness — a hot
// delivery pays the full meter, a cold one pays the floor (half). The
// batch bonus is added by the job, not here, so tests can price one order.
export function payFor(distM, freshness){
  const f = clamp(typeof freshness === 'number' && isFinite(freshness) ? freshness : 0, 0, 1);
  const meter = COURIER_BASE_PAY + Math.round(COURIER_PER_METRE * distM);
  return Math.round(meter * (COURIER_COLD_FLOOR + (1 - COURIER_COLD_FLOOR) * f));
}

const MAIN_CITY_PICKERS = { hailNear: hailPointNear, destFar: destinationFar };

// States: off (not driving) -> idle (waiting for an offer) -> offer (an
// order waits at a restaurant) -> carrying (one order aboard) -> offer2
// (one aboard + a second order waiting) -> carrying2 (two aboard) ->
// cooldown -> idle. Events are returned from update() for main.js to
// toast/pay on. `opts.secondChance` overrides the share of carries that
// draw a second order (tests force 0 or 1); production uses
// SECOND_OFFER_CHANCE.
export function createCourierJob(rng = Math.random, pickers = MAIN_CITY_PICKERS, opts = {}){
  const secondChance = (opts && typeof opts.secondChance === 'number' && isFinite(opts.secondChance))
    ? clamp(opts.secondChance, 0, 1) : SECOND_OFFER_CHANCE;
  let state = 'off';
  let driving = false;
  let activePickers = pickers || MAIN_CITY_PICKERS;
  let timer = 0;                  // idle: until next offer; offer: patience left
  let secondTimer = 0;            // carrying: until the second-offer window opens
  let secondRolled = false;       // the second-offer draw for this carry is spent
  let offer = null;               // the order waiting at a restaurant
  let carried = [];               // orders aboard: {id, food, restaurant, dest, parSeconds, elapsed, spoilHits}
  let nextId = 1;
  let runStacked = false;         // this run carried two orders at once (batch bonus live)
  let maxStack = 0;               // most orders aboard at once, this session (career best)
  // Career totals persist in the save via loadCareer/career.
  let deliveries = 0, earned = 0, bestStack = 0, freshCount = 0;

  function nextDelay(){ return OFFER_DELAY_MIN + rng() * (OFFER_DELAY_MAX - OFFER_DELAY_MIN); }
  function pickFood(){ return FOODS[(rng() * FOODS.length) | 0]; }
  function pickRestaurant(){ return RESTAURANTS[(rng() * RESTAURANTS.length) | 0]; }

  // Roll a new order: a restaurant near the driver and a customer a real
  // trip away from it. Null when the streets cannot carry a trip (a lone
  // spawn tile, or roads too short) — not an error, the job retries.
  function rollOrder(ctx){
    const restPoint = activePickers.hailNear(ctx.x, ctx.z, rng);
    if(!restPoint) return null;
    const dest = activePickers.destFar(restPoint, rng);
    if(!dest) return null;
    return { id: nextId++, food: pickFood(), restaurant: pickRestaurant(),
      restPoint, dest, trip: dist(restPoint, dest) };
  }

  // Freshness of a carried order right now, for the HUD and the pay.
  function freshnessOf(o){ return freshnessFor(o.elapsed, o.parSeconds, o.spoilHits); }

  return {
    get state(){ return state; },
    get driving(){ return driving; },
    get active(){ return state === 'offer' || state === 'carrying' || state === 'offer2' || state === 'carrying2'; },
    // Orders aboard (copies: the HUD reads food / freshness, never mutates).
    get carried(){ return carried.map(o => { const { _lastD, ...rest } = o; return { ...rest, freshness: freshnessOf(o) }; }); },
    get carriedCount(){ return carried.length; },
    // Where the beacon + radar dot point: the waiting restaurant first,
    // then the nearest customer still waiting on a drop.
    get target(){
      if(state === 'offer' || state === 'offer2') return offer ? { ...offer.restPoint } : null;
      if(state === 'carrying' || state === 'carrying2'){
        let best = null, bestD = Infinity;
        for(const o of carried){
          const d = o._lastD !== undefined ? o._lastD : Infinity;
          if(d < bestD){ best = o; bestD = d; }
        }
        return best ? { ...best.dest } : null;
      }
      return null;
    },
    // Seconds left: patience while an offer waits, freshness time left on
    // the coldest order aboard while carrying (negative = already cold).
    get timeLeft(){
      if(state === 'offer' || state === 'offer2') return timer;
      if(state === 'carrying' || state === 'carrying2'){
        let worst = Infinity;
        for(const o of carried) worst = Math.min(worst, o.parSeconds - o.elapsed);
        return worst === Infinity ? 0 : worst;
      }
      return 0;
    },
    // Freshness of the coldest order aboard (1 = still hot, 0 = cold) —
    // the HUD reads this so the driver knows when to hurry.
    get freshness(){
      if(!carried.length) return 1;
      let worst = 1;
      for(const o of carried) worst = Math.min(worst, freshnessOf(o));
      return worst;
    },
    get deliveries(){ return deliveries; },
    get earned(){ return earned; },
    get bestStack(){ return bestStack; },
    // Career snapshot for the save file (plain numbers, no state).
    get career(){ return { deliveries, earned, bestStack, freshCount }; },

    // Seed the career totals from a save (missing/corrupt fields read as 0).
    loadCareer(c){
      const n = v => (typeof v === 'number' && isFinite(v) && v > 0) ? Math.floor(v) : 0;
      if(!c || typeof c !== 'object') return;
      deliveries = n(c.deliveries); earned = n(c.earned);
      bestStack = n(c.bestStack); freshCount = n(c.freshCount);
    },

    // Swap the point pickers when the world changes (main city <-> custom
    // map); null restores the main-city grid. main.js abandons a live
    // order before the swap, so this only ever affects idle / cooldown.
    setPickers(p){ activePickers = p || MAIN_CITY_PICKERS; },

    // Returns 'abandoned' when starting/stopping driving killed a live order.
    // Leaving the car ends the run, so any order aboard is lost.
    setDriving(v){
      if(v === driving) return null;
      driving = v;
      if(v){ if(state === 'off'){ state = 'idle'; timer = nextDelay(); } return null; }
      offer = null; carried = []; runStacked = false; secondRolled = false;
      if(state === 'offer' || state === 'carrying' || state === 'offer2' || state === 'carrying2'){
        state = 'off'; return 'abandoned';
      }
      state = 'off'; return null;
    },

    // Leaving free-roam driving, the garage, a shop, the world: a live
    // order ends, quietly. Returns true when an order was actually live.
    // The cooldown only applies when still driving (setDriving(true)
    // re-arms idle).
    abandon(){
      const wasLive = state === 'offer' || state === 'carrying' || state === 'offer2' || state === 'carrying2';
      offer = null; carried = []; runStacked = false; secondRolled = false;
      if(!wasLive) return false;
      state = driving ? 'cooldown' : 'off'; timer = ORDER_COOLDOWN; return true;
    },

    // A hard shunt while carrying spoils the food: every order aboard
    // loses 15% freshness. Called from main.js damageCar; returns how
    // many orders were spoiled (0 when nothing is aboard).
    noteImpact(){
      if(!carried.length) return 0;
      for(const o of carried) o.spoilHits++;
      return carried.length;
    },

    // ctx = { x, z, speed, hp }. Returns events for main.js.
    update(dt, ctx){
      const events = [];
      // The freshness clock runs on every carried order in every state
      // where food is aboard — including while a second offer waits, so
      // dawdling over the second pickup cools the first order.
      const carryingNow = state === 'carrying' || state === 'offer2' || state === 'carrying2';
      if(carryingNow) for(const o of carried) o.elapsed += dt;
      // The beacon needs live distances to pick the nearest drop: refresh
      // them every tick from the driver's position.
      if(carryingNow) for(const o of carried) o._lastD = dist(ctx, o.dest);

      if(state === 'idle'){
        timer -= dt;
        if(timer <= 0){
          offer = rollOrder(ctx);
          if(!offer){ timer = OFFER_RETRY; }
          else{
            state = 'offer'; timer = OFFER_PATIENCE;
            events.push({ type:'offer', order:{ ...offer }, payEstimate:payFor(offer.trip, 1) });
          }
        }
      }else if(state === 'offer'){
        timer -= dt;
        if(dist(ctx, offer.restPoint) < PICKUP_RADIUS && Math.abs(ctx.speed) < 1){
          const o = { ...offer, parSeconds: parTimeFor(offer.trip), elapsed: 0, spoilHits: 0, _lastD: dist(ctx, offer.dest) };
          carried = [o]; offer = null;
          maxStack = Math.max(maxStack, 1); bestStack = Math.max(bestStack, maxStack);
          state = 'carrying';
          secondTimer = SECOND_OFFER_MIN + rng() * (SECOND_OFFER_MAX - SECOND_OFFER_MIN);
          secondRolled = false;
          events.push({ type:'pickup', order:{ ...o, freshness: 1 }, parSeconds: o.parSeconds,
            payEstimate: payFor(o.trip, 1) });
        }else if(timer <= 0){
          state = 'cooldown'; timer = ORDER_COOLDOWN; offer = null;
          events.push({ type:'offerExpired' });
        }
      }else if(state === 'carrying'){
        secondTimer -= dt;
        // A second offer only draws once per carry, and only when the
        // driver is still in the window to run two drops — the roll
        // happens once, then the window is spent either way.
        if(!secondRolled && secondTimer <= 0){
          secondRolled = true;
          if(rng() < secondChance){
            const second = rollOrder(ctx);
            if(second){
              offer = second; state = 'offer2'; timer = OFFER_PATIENCE;
              events.push({ type:'offer', order:{ ...second }, payEstimate:payFor(second.trip, 1), stacked: true });
            }
          }
        }
        const done = this._tryDeliver(ctx, events);
        if(done) return events;
        // Wrecked while carrying: the food is lost with the car — no pay,
        // no batch, the run ends. The tow handles the car itself.
        if(ctx.hp !== undefined && ctx.hp <= 0){
          const lost = carried.length;
          carried = []; runStacked = false; secondRolled = false;
          state = 'cooldown'; timer = ORDER_COOLDOWN;
          events.push({ type:'ordersLost', lost });
        }
      }else if(state === 'offer2'){
        timer -= dt;
        // The first order can still be delivered while the second offer
        // waits — the driver chooses the route, not the job.
        const done = this._tryDeliver(ctx, events);
        if(done) return events;
        if(offer && dist(ctx, offer.restPoint) < PICKUP_RADIUS && Math.abs(ctx.speed) < 1){
          const o = { ...offer, parSeconds: parTimeFor(offer.trip), elapsed: 0, spoilHits: 0, _lastD: dist(ctx, offer.dest) };
          carried.push(o); offer = null;
          runStacked = true;
          maxStack = Math.max(maxStack, carried.length); bestStack = Math.max(bestStack, maxStack);
          state = 'carrying2';
          events.push({ type:'pickup', order:{ ...o, freshness: 1 }, parSeconds: o.parSeconds,
            payEstimate: payFor(o.trip, 1), stacked: true });
        }else if(timer <= 0){
          // The second order walked away; the first order still rides.
          offer = null; state = 'carrying';
          events.push({ type:'offerExpired', stacked: true });
        }
      }else if(state === 'carrying2'){
        const done = this._tryDeliver(ctx, events);
        if(done) return events;
        if(ctx.hp !== undefined && ctx.hp <= 0){
          const lost = carried.length;
          carried = []; runStacked = false; secondRolled = false;
          state = 'cooldown'; timer = ORDER_COOLDOWN;
          events.push({ type:'ordersLost', lost });
        }
      }else if(state === 'cooldown'){
        timer -= dt;
        if(timer <= 0){ state = driving ? 'idle' : 'off'; timer = nextDelay(); }
      }
      return events;
    },

    // Deliver any carried order whose customer the driver has stopped at.
    // Returns true when a delivery happened (callers return early: one
    // drop per tick, so a stacked pair pays out one order at a time).
    _tryDeliver(ctx, events){
      for(let i = 0; i < carried.length; i++){
        const o = carried[i];
        if(dist(ctx, o.dest) >= DROPOFF_RADIUS || Math.abs(ctx.speed) >= 1) continue;
        const freshness = freshnessOf(o);
        let pay = payFor(o.trip, freshness);
        carried.splice(i, 1);
        // Batch bonus: finishing a stacked pair pays $50 on the drop
        // that empties the car — the second delivery of the run.
        let batchBonus = 0;
        if(runStacked && carried.length === 0){ batchBonus = COURIER_BATCH_BONUS; pay += batchBonus; runStacked = false; }
        deliveries++; earned += pay;
        if(freshness >= 0.8) freshCount++;
        const total = pay;
        events.push({ type:'delivered', order:{ ...o, freshness }, pay, batchBonus,
          ordersLeft: carried.length, total,
          deliveries, earned });
        if(carried.length === 0){
          // A pending second offer survives the first delivery: the run
          // falls back to waiting on that restaurant, not to cooldown.
          if(offer){ state = 'offer'; }
          else{ state = 'cooldown'; timer = ORDER_COOLDOWN; }
        }
        return true;
      }
      return false;
    },
  };
}
