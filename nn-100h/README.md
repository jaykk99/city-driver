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

## Resume test (2026-11-14, verified)

- Run A2: `NN100H_EPOCH_DELAY_MS=50 python3 train.py
  --max-run-hours 5.5`, SIGTERM at ~10s. Log:
  `signal 15: checkpointing and exiting gracefully` /
  `CHUNK-STOP h16_8_lr0p05_l20p0_e400_s1: checkpointed at epoch
  103/400` / `exit: hours_trained=0.0247 experiments_done=83`.
  No experiments.jsonl line for that experiment.
- Run B: same delay, `python3 train.py --resume
  --max-run-hours 0.05`. Log: `resume checkpoint found:
  h16_8_lr0p05_l20p0_e400_s1 epoch 103` /
  `RESUME h16_8_lr0p05_l20p0_e400_s1: continuing from checkpoint
  epoch 103/400 (not restarting)` /
  `DONE h16_8_lr0p05_l20p0_e400_s1: test_acc=1.000 auc=1.000
  loo_acc=0.8824 ... (76.396s)` — the experiment completed and
  was appended (87 experiments total), hours resumed from
  status.json (0.0247h -> 0.0747h). Full logs:
  `/tmp/resume_a2.log`, `/tmp/resume_b.log` (ephemeral).
- Side finding: the first resume attempt showed LOO has no
  stop-check and no heartbeat, so a SIGTERM during LOO was
  deferred until the CV finished; fixed in `train.py`
  (`loo_cv` now checks `tr.stop` / time-left each fold and
  heartbeats).
