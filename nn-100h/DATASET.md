# Dataset — nn-100h/city-driver

## What this is

Predict whether a car in City Driver is premium-tier from its
performance stats. 17 rows, one per car in the game.

- **Source:** `js/cars.js`, `CAR_DEFS`, at repo commit
  `f7efb1a61f47bcda90e1159bfb6df86733f523aa` (branch
  `feat/nn-100h-city-driver` base). Extracted mechanically by
  `nn-100h/extract_data.py`, which regex-parses the `CAR_DEFS`
  literals out of the source file. No value is hand-typed, no row
  is invented. Re-run `python3 extract_data.py` to regenerate
  `dataset.jsonl` exactly.
- **Collection date:** 2026-11-14.
- **Rows:** 17 (9 premium / 8 standard).
- **Features (6, numeric):** `topSpeed`, `accel`, `handling`,
  `grip`, `nitroTime`, `nitroPower` — the `stats` block of each
  car definition, in that order.
- **Label:** `label = 1` (premium) when `price >= 20000`, else `0`
  (standard). `price` itself is NOT a feature: the label is
  derived from it, so feeding it in would be direct leakage.
- **Split:** `split.json`, stratified, seed 42, test frac 0.2 —
  train 13 (7 premium / 6 standard), test 4 (2 premium /
  2 standard). Frozen: never train on test rows. Majority
  baseline on test is 0.50.

## Why cars, not taxi fares

The original plan was the PR #3 task: predict whether a
completed taxi ride earns a tip from the ride's stats. That
task cannot be built honestly under a real-data-only rule:

1. **The 1,000 PR #3 fares are simulated, not recorded play.**
   `nn/build_data.mjs` (PR #3, branch `feat/nn-city-driver`)
   drives `js/taxi.js` with seeded RNGs (mulberry32, seeds
   1000–1999) and *invents* each fare's driver: pace
   (0.2x–2.6x par time), damage target, weather, surge, and
   pre-ride rating. No real player drove those rides. The PR
   body says so itself: "Simulated fares, not playtest logs."
2. **No real ride data exists anywhere to replace them.** Searched
   the repo, its full git history (`*.jsonl`, `*.csv`,
   `*telemetry*`, `*playtest*` — no hits except the PR itself),
   and the code: the game keeps career progress only in the
   player's own browser (`localStorage 'citydriver_save_v1'`,
   `js/garage.js`); nothing is logged, uploaded, or committed.
   There are no recorded game sessions in this repo at all.
3. **The tip label is a deterministic function of the features
   (leakage audit).** In `js/taxi.js`:

   ```js
   export function tipFor(fare, seconds, parSeconds, damageFrac, ...){
     if(seconds > parSeconds) return 0;
     return Math.round(fare * TAXI_TIP_RATE * (1 - clamp(damageFrac, 0, 1)) * tipMultiplierFor(...));
   }
   ```

   So `tip > 0` exactly when `elapsed <= par` AND `damage < 1`
   (modulo a rounding edge where a near-wrecked cab's tip rounds
   to $0). The PR's features include `elapsed_par` and
   `damage_frac`, so the label is reproducible from two features
   by a two-line rule. Its reported 0.955 test accuracy is rule
   reproduction, not a discovery — the PR says this too. No split
   redesign fixes it: grouping by session or day cannot help,
   because the rule is per-ride deterministic. A 1.000 here would
   mean leakage, never a win.

The 17 `CAR_DEFS` rows are the largest coherent, authored,
non-deterministic table in the repo (other authored tables are
smaller: ~7 restaurants, a handful of fuel/repair/tire stations;
city buildings are generated at runtime from a seeded RNG).
Price tier was set by the author by feel, not by formula — e.g.
the Baja (topSpeed 54) is premium while the Muscle (topSpeed 55)
is standard — so the label is genuinely learnable-but-not-trivial
from the six stats.

## Honest limits

- **n = 17, test n = 4.** Test accuracy moves in 25-point steps
  and AUC on 4 rows is coarse. These numbers are a harness
  baseline, not evidence about cars in general. Judge runs by
  the distribution over many seeds, not by any single experiment.
- **The trainer's 100 hours are spent sweeping seeds and configs**
  on this tiny set (seed variance is the real signal here), not
  by pretending the dataset is bigger than it is.
- **What would unlock the fare task:** real playtest logging —
  e.g. the game recording completed rides (elapsed, damage,
  surge, outcome) from actual players into a committed log.
  Until that exists, no fare model can be trained honestly, and
  none is attempted here. No synthetic or simulated rows, ever.
- **Prediction only.** The model never changes game state and
  never pays anything; `js/cars.js` decides prices.
