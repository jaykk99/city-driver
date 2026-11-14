# City Driver NN — taxi tip predictor

A small pure-Python-stdlib neural network (same pattern as the
ReconAnything triage scorer: tanh hidden layers, sigmoid output, SGD,
zero dependencies) that predicts whether a completed taxi ride earns
a tip, from the ride's own stats.

- Task: binary — **earns a tip** (dropoff tip > 0) vs **no tip**
  (late / battered dropoff with no tip, bailed passenger, wrecked cab).
- Network: **13-16-8-1**, 13 features, seed 42, 60 epochs, lr 0.05.
- Files: `mlp.py` (reusable as-is), `features.py`, `data.py`,
  `train.py`, `score.py`, `build_data.mjs`, `dataset.jsonl`,
  `weights.json`, `viewer-data.json`, `viewer.html`.

## Data — real game code, no hand labels

`nn/dataset.jsonl` (1,000 rows) is built by `nn/build_data.mjs`,
which drives the game's own taxi state machine (`js/taxi.js`,
`createTaxiJob` — the same code the game and `test/taxi.test.js`
use) with seeded RNGs (mulberry32, seeds 1000..1999). Each row is
one simulated fare; the label is the game's own outcome. Regenerate
exactly with:

```bash
node nn/build_data.mjs 1000
```

What varies per fare: sky + surge (time 1 / 1.25 / 1.5, weather
clear / rain / storm), career reputation before the ride (rating
count 0..15, average 2..5), how long the ride takes (0.2x..2.6x par
time) and how much damage the cab takes (0..100% of HP, 8% wreck
outright). VIP / airport rolls, hail point and destination come
from the game's own code and the seeded RNG.

Dataset: 1,000 rows — 323 earn a tip / 677 do not.
Outcomes: dropoff 676, bail 272, wreck 52.

## Honest metrics (stratified 80/20 split, seed 42)

| | train | test |
|---|---|---|
| accuracy | 0.950 | **0.955** |
| majority baseline (test) | — | 0.675 |
| ROC AUC | — | **0.993** |

Test confusion (200 rows): tp=58 fp=2 fn=7 tn=133.
Earns-tip: precision 0.967, recall 0.892, F1 0.928.
No-tip: precision 0.950, recall 0.985, F1 0.967.

Feature importance (grouped permutation, AUC drop on test):
`elapsed_par` 0.512 dominates — exactly what the game's tip rule
says should matter — then `damage` 0.002, everything else ~0.

## Limits — read before trusting the numbers

- **The tip rule is deterministic.** `tipFor` in `js/taxi.js` pays
  a tip exactly when a ride finishes on time (elapsed <= par) with
  the cab not fully wrecked (damage < 1). A network fed elapsed/par
  and damage can therefore learn the rule almost exactly, so test
  accuracy near 100% is **expected here and is not a discovery and
  not a win**: the model is a learned surrogate of `tipFor`, useful
  for predicting the tip outcome from ride stats without running
  the game, nothing more. (It lands at 0.955, not 1.000 — the
  misses are edge cases like tips rounding to $0 on near-wrecked
  cabs.)
- **Simulated fares, not playtest logs.** The rows come from driving
  the real state machine with seeded RNGs. No real player drove
  these rides; the model knows the game's rules, not real players.
- **Prediction only.** The model never changes game state and never
  pays anything: the game itself decides the tip.

## Use

```bash
python3 -m nn.train            # retrain (repo root, stdlib only)
python3 -m nn.score --ride '{"trip_m": 400, "par_s": 52, "elapsed_s": 13, "elapsed_par": 0.25, "damage_frac": 0.3, "surge": 2.25, "time_surge": 1.5, "weather_surge": 1.5, "weather": "storm", "vip": false, "airport": false, "rating_avg_before": 4.6, "rating_count": 8, "streak_before": 0, "fare": 362}'
python3 -m nn.score --file nn/dataset.jsonl --limit 5
```

Open `nn/viewer.html` (or `nn/viewer-data.json`) for the metrics,
curves, confusion matrix and feature importance.
