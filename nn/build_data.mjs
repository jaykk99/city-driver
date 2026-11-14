// Build the tip-prediction dataset by driving the REAL taxi state
// machine (js/taxi.js, the same createTaxiJob the game and its tests
// use). No hand-written labels: every row is one simulated fare and
// its label is the game's own outcome — dropoff with tip > 0 (label 1)
// or dropoff with no tip / passenger bailed / cab wrecked (label 0).
//
// Each fare gets a seeded RNG (mulberry32, seed 1000+i), so the whole
// dataset regenerates exactly: `node nn/build_data.mjs [n]`.
//
// What varies per fare (the "driver" the simulation plays):
// - sky + surge: time-of-day surge 1 / 1.25 / 1.5, weather
//   clear / rain / storm (weather surge 1 / 1.25 / 1.5)
// - career reputation before the ride: rating count 0..15, average 2..5
// - how long the ride takes: 0.2x..2.6x par time (past ~1.5x-2x par the
//   passenger bails, per the game's own BAIL_MULT / VIP_BAIL_MULT)
// - how much damage the cab takes: 0..100% of its HP (8% of fares
//   wreck the cab outright, hp -> 0, and lose the passenger)
//
// The VIP / airport rolls, hail point and destination all come from the
// game's own code and the seeded RNG, exactly as in test/taxi.test.js.
//
// Usage: node nn/build_data.mjs [n=1000]  -> writes nn/dataset.jsonl
import { createTaxiJob } from '../js/taxi.js';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = join(HERE, 'dataset.jsonl');
const N = Number(process.argv[2] || 1000);

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);

function driveFare(i) {
  const rng = mulberry32(1000 + i);
  const weather = pick(rng, ['clear', 'clear', 'rain', 'storm']);
  const timeSurge = pick(rng, [1, 1, 1.25, 1.5]);
  const weatherSurge = weather === 'storm' ? 1.5 : weather === 'rain' ? 1.25 : 1;
  const surge = timeSurge * weatherSurge;
  const ratingCount = pick(rng, [0, 0, 1, 2, 3, 5, 8, 10, 15]);
  const ratingAvg = 2 + rng() * 3; // 2..5
  const ratingSum = ratingAvg * ratingCount;
  // The simulated driver's pace and care for this fare.
  const elapsedMult = 0.2 + rng() * 2.4; // 0.2x..2.6x par time
  const damageTarget = rng() < 0.08 ? 1.0 : rng(); // 8% wreck the cab
  const at = (x, z, speed = 0, hp = 100) =>
    ({ x, z, speed, hp, maxHp: 100, surge, timeSurge, weatherSurge, weather });

  const job = createTaxiJob(rng);
  job.loadCareer({ rides: ratingCount, earned: 0, bestStreak: 0, ratingSum, ratingCount });
  job.setInCab(true);

  let hail = null;
  for (let k = 0; k < 40 && !hail; k++) {
    const evs = job.update(5, at(0, 0));
    hail = evs.find((e) => e.type === 'hail');
  }
  if (!hail) return null;
  const ratingAvgBefore = job.ratingAvg;
  const streakBefore = job.streak;
  const pickup = job.update(0.1, at(hail.point.x, hail.point.z, 0, 100));
  const pk = pickup.find((e) => e.type === 'pickup');
  if (!pk) return null;
  const trip = dist(hail.point, pk.dest);
  const par = pk.parSeconds;
  const targetElapsed = elapsedMult * par;

  let rideSeconds = 0;
  let outcome = null; // {kind, elapsed, damage}
  while (rideSeconds < targetElapsed) {
    const dt = Math.min(2, targetElapsed - rideSeconds);
    rideSeconds += dt;
    const hp = 100 - damageTarget * 100 * (rideSeconds / targetElapsed);
    const evs = job.update(dt, at(hail.point.x, hail.point.z, 0, hp));
    const failed = evs.find((e) => e.type === 'rideFailed');
    if (failed) {
      outcome = { kind: failed.reason === 'wrecked' ? 'wreck' : 'bail',
                  elapsed: rideSeconds, damage: (100 - hp) / 100 };
      break;
    }
  }
  let tip = 0;
  if (!outcome) {
    const hpFinal = 100 - damageTarget * 100;
    const evs = job.update(0.1, at(pk.dest.x, pk.dest.z, 0, hpFinal));
    const drop = evs.find((e) => e.type === 'dropoff');
    const failed = evs.find((e) => e.type === 'rideFailed');
    if (drop) {
      outcome = { kind: 'dropoff', elapsed: rideSeconds + 0.1, damage: damageTarget };
      tip = drop.tip;
    } else if (failed) {
      outcome = { kind: failed.reason === 'wrecked' ? 'wreck' : 'bail',
                  elapsed: rideSeconds + 0.1, damage: damageTarget };
    } else {
      return null; // should not happen; skip rather than invent a row
    }
  }
  return {
    seed: 1000 + i,
    outcome: outcome.kind,
    label: outcome.kind === 'dropoff' && tip > 0 ? 1 : 0,
    tip,
    features: {
      trip_m: trip,
      par_s: par,
      elapsed_s: outcome.elapsed,
      elapsed_par: outcome.elapsed / par,
      damage_frac: outcome.damage,
      surge,
      time_surge: timeSurge,
      weather_surge: weatherSurge,
      weather,
      vip: pk.vip,
      airport: pk.airport,
      rating_avg_before: ratingAvgBefore,
      rating_count: ratingCount,
      streak_before: streakBefore,
      fare: pk.fareEstimate,
    },
  };
}

const rows = [];
let skipped = 0;
for (let i = 0; i < N; i++) {
  const row = driveFare(i);
  if (!row) { skipped++; continue; }
  rows.push(row);
}
writeFileSync(OUT, rows.map((r) => JSON.stringify(r)).join('\n') + '\n');
const pos = rows.filter((r) => r.label === 1).length;
const outcomes = {};
for (const r of rows) outcomes[r.outcome] = (outcomes[r.outcome] || 0) + 1;
console.log(`rows: ${rows.length} (skipped ${skipped})  tip>0: ${pos} / no-tip: ${rows.length - pos}`);
console.log('outcomes:', JSON.stringify(outcomes));
console.log(`wrote ${OUT}`);
