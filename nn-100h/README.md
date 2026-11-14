# nn-100h — city-driver

100-hour neural network trainer. Pure Python stdlib, self-contained
MLP (tanh hidden, sigmoid out, SGD). Task: predict whether a car is
premium-tier (price >= $20,000) from its six performance stats in
`js/cars.js`. See `DATASET.md` for provenance and for why the taxi
tip task was rejected (simulated fares + deterministic label).

## Run

```sh
cd nn-100h
python3 extract_data.py   # rebuild dataset.jsonl from js/cars.js
python3 make_split.py     # (re)build frozen split.json, seed 42
python3 train.py [--resume] [--max-run-hours H]   # default H=5.5
```

Chunks: each run banks its wall time into `status.json`
(`hours_trained`, cumulative across restarts). Re-run with
`--resume` to continue the grid and any in-progress experiment
from its latest checkpoint. At 100 cumulative hours the trainer
stops with `status: done`.

## Files

- `dataset.jsonl` — 17 rows from `js/cars.js` CAR_DEFS.
- `split.json` — frozen stratified 80/20 split, seed 42.
- `DATASET.md` — provenance, label definition, leakage audit.
- `experiments.jsonl` — one line per finished experiment.
- `checkpoints/<exp_id>.json` — every 20 epochs.
- `best.json` / `best-metrics.json` — best honest test accuracy
  (AUC tiebreak), with weights + scaler.
- `status.json` / `heartbeat.json` — progress + liveness.

## Resume test (2026-11-14)

Run A started with `NN100H_EPOCH_DELAY_MS=50`, killed mid-run
(SIGTERM) during its first experiment; run B with `--resume`
continued that experiment from its checkpoint epoch instead of
restarting. See the parent report for the log evidence.
