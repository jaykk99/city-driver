#!/usr/bin/env python3
"""100-hour neural network trainer for city-driver (nn-100h).

Task: predict whether a car is premium-tier (price >= $20,000) from
its six performance stats in js/cars.js (see DATASET.md). Pure
Python stdlib, self-contained MLP: tanh hidden layers, sigmoid
output, binary cross-entropy, plain SGD. No imports from repo code,
no torch/numpy. Same pattern as PR #3's nn/mlp.py, rebuilt for the
100-hour contract.

Usage (run from nn-100h/):
    python3 train.py [--resume] [--max-run-hours H]   (default H=5.5)

Files in this directory:
    dataset.jsonl, split.json, DATASET.md, experiments.jsonl,
    checkpoints/<exp_id>.json, best.json, best-metrics.json,
    status.json, heartbeat.json

Rules honoured here:
- Frozen split (split.json, seed 42, stratified, test frac 0.2).
  NEVER trains on test rows.
- One experiments.jsonl line per finished experiment, scored on the
  FROZEN test split. best.json only moves when honest test accuracy
  improves (ROC AUC tiebreak). Each line also carries a supplementary
  leave-one-out CV accuracy (`loo_acc`) over all 17 rows: the frozen
  4-row test set is saturated (every config scores 1.000 on it), so
  LOO is the metric that actually discriminates configs. LOO never
  moves best.json; it is diagnostic only.
- Checkpoints every 20 epochs (atomic write). --resume reloads the
  latest checkpoint of the in-progress experiment and continues
  from its epoch; hours resume from status.json.
- Heartbeat every <=60s. Chunk exit at max-run-hours checkpoints,
  banks the hours and exits 0. At 100 cumulative hours status=done.
- Env NN100H_EPOCH_DELAY_MS (default 0) sleeps that many ms per
  epoch; test scaffolding for the resume test only, never used in
  production runs.
"""
from __future__ import annotations

import argparse
import json
import math
import os
import random
import signal
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(__file__).resolve().parent
REPO = "jaykk99/city-driver"
TARGET_HOURS = 100.0
SPLIT_SEED = 42
TEST_FRAC = 0.2
FEATURES = ["topSpeed", "accel", "handling", "grip", "nitroTime", "nitroPower"]
CLASS_NAMES = {1: "premium", 0: "standard"}

# Grid: hidden sizes, learning rates, L2, epochs. Seeds cycle 1, 2, 3, ...
# (the seed space is unbounded, so the sweep never runs dry in 100h).
GRID_HIDDEN = [(4,), (8,), (8, 4), (16, 8)]
GRID_LR = [0.05, 0.1, 0.2]
GRID_L2 = [0.0, 0.001, 0.01]
GRID_EPOCHS = [100, 200, 400]
CHECKPOINT_EVERY = 20
HEARTBEAT_EVERY_S = 60


def log(msg: str) -> None:
    print(f"[{datetime.now(timezone.utc).isoformat()}] {msg}", flush=True)


def _utcnow() -> str:
    return datetime.now(timezone.utc).isoformat()


def _atomic_write(path: Path, text: str) -> None:
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(text, encoding="utf-8")
    os.replace(tmp, path)


def _write_json(path: Path, obj) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    _atomic_write(path, json.dumps(obj, indent=2))


def _read_json(path: Path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return default


# ---------------------------------------------------------------- data
def load_rows():
    rows = []
    with open(BASE / "dataset.jsonl", encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if line:
                rows.append(json.loads(line))
    return rows


def stratified_split(rows, test_frac=TEST_FRAC, seed=SPLIT_SEED):
    """Frozen stratified split. Returns (train_idx, test_idx) into rows."""
    rng = random.Random(seed)
    by_label = {}
    for i, r in enumerate(rows):
        by_label.setdefault(r["label"], []).append(i)
    train_idx, test_idx = [], []
    for label in sorted(by_label):
        items = list(by_label[label])
        rng.shuffle(items)
        n_test = max(1, round(len(items) * test_frac)) if len(items) > 1 else 0
        test_idx.extend(items[:n_test])
        train_idx.extend(items[n_test:])
    rng.shuffle(train_idx)
    rng.shuffle(test_idx)
    return train_idx, test_idx


def ensure_split(rows):
    path = BASE / "split.json"
    split = _read_json(path, None)
    if split and split.get("seed") == SPLIT_SEED and split.get("test_frac") == TEST_FRAC:
        return split
    train_idx, test_idx = stratified_split(rows)
    split = {
        "seed": SPLIT_SEED,
        "test_frac": TEST_FRAC,
        "train_idx": train_idx,
        "test_idx": test_idx,
        "train_rows": len(train_idx),
        "test_rows": len(test_idx),
        "frozen": True,
    }
    _write_json(path, split)
    log(f"split: train={len(train_idx)} test={len(test_idx)} "
        f"(seed {SPLIT_SEED}, stratified)")
    return split


def standardize(X_train, X_test):
    """Mean/std from TRAIN only (no test leakage). Returns scaled sets + scaler."""
    n_feat = len(X_train[0])
    means, stds = [], []
    for j in range(n_feat):
        col = [x[j] for x in X_train]
        mu = sum(col) / len(col)
        var = sum((v - mu) ** 2 for v in col) / len(col)
        sd = math.sqrt(var) or 1.0
        means.append(mu)
        stds.append(sd)
    scale = lambda X: [[(v - means[j]) / stds[j] for j, v in enumerate(x)] for x in X]
    return scale(X_train), scale(X_test), {"mean": means, "std": stds}


# ------------------------------------------------------------------ MLP
def _sigmoid(z: float) -> float:
    if z >= 0:
        return 1.0 / (1.0 + math.exp(-z))
    e = math.exp(z)
    return e / (1.0 + e)


class MLP:
    """tanh hidden / sigmoid out / BCE / full-batch SGD. Stdlib only."""

    def __init__(self, layers, seed=42, lr=0.05, l2=0.0):
        self.layers = list(layers)
        self.lr = float(lr)
        self.l2 = float(l2)
        rng = random.Random(seed)
        self.weights, self.biases = [], []
        for fan_in, fan_out in zip(self.layers[:-1], self.layers[1:]):
            limit = math.sqrt(6.0 / (fan_in + fan_out))
            self.weights.append(
                [[rng.uniform(-limit, limit) for _ in range(fan_in)]
                 for _ in range(fan_out)])
            self.biases.append([0.0] * fan_out)

    def _forward(self, x):
        acts = [list(map(float, x))]
        for li, (w, b) in enumerate(zip(self.weights, self.biases)):
            z = [sum(wi * xi for wi, xi in zip(row, acts[-1])) + bias
                 for row, bias in zip(w, b)]
            acts.append([_sigmoid(v) if li == len(self.weights) - 1
                         else math.tanh(v) for v in z])
        return acts

    def predict_proba(self, x) -> float:
        return self._forward(x)[-1][0]

    def _backward(self, acts, y):
        n_layers = len(self.weights)
        deltas = [None] * n_layers
        deltas[-1] = [acts[-1][0] - y]
        for li in range(n_layers - 2, -1, -1):
            w_next, d_next = self.weights[li + 1], deltas[li + 1]
            a = acts[li + 1]
            deltas[li] = [sum(w_next[k][j] * d_next[k] for k in range(len(d_next)))
                          * (1.0 - a[j] * a[j]) for j in range(len(a))]
        gw, gb = [], []
        for li in range(n_layers):
            d, a_prev = deltas[li], acts[li]
            gw.append([[d[i] * a_prev[j] for j in range(len(a_prev))]
                       for i in range(len(d))])
            gb.append(list(d))
        return gw, gb

    def train_one_epoch(self, X, y, epoch_seed):
        """One full-batch SGD epoch. Shuffle order is a deterministic
        function of epoch_seed, so a resumed run replays the same
        order sequence as an uninterrupted run."""
        n = len(X)
        order = list(range(n))
        random.Random(epoch_seed).shuffle(order)
        gw_acc = [[[0.0] * len(row) for row in w] for w in self.weights]
        gb_acc = [[0.0] * len(b) for b in self.biases]
        for i in order:
            acts = self._forward(X[i])
            gw, gb = self._backward(acts, float(y[i]))
            for li in range(len(gw)):
                for r in range(len(gw[li])):
                    for c in range(len(gw[li][r])):
                        gw_acc[li][r][c] += gw[li][r][c]
                for r in range(len(gb[li])):
                    gb_acc[li][r] += gb[li][r]
        m = float(n)
        for li in range(len(self.weights)):
            for r in range(len(self.weights[li])):
                for c in range(len(self.weights[li][r])):
                    g = gw_acc[li][r][c] / m + self.l2 * self.weights[li][r][c]
                    self.weights[li][r][c] -= self.lr * g
            for r in range(len(self.biases[li])):
                self.biases[li][r] -= self.lr * (gb_acc[li][r] / m)

    def train_loss(self, X, y):
        eps = 1e-12
        tot = 0.0
        for xi, yi in zip(X, y):
            p = min(max(self.predict_proba(xi), eps), 1.0 - eps)
            tot += -(yi * math.log(p) + (1.0 - yi) * math.log(1.0 - p))
        return tot / max(1, len(X))

    def state(self):
        return {"weights": self.weights, "biases": self.biases}

    def restore(self, state):
        self.weights = [[[float(v) for v in row] for row in mat]
                        for mat in state["weights"]]
        self.biases = [[float(v) for v in b] for b in state["biases"]]


# -------------------------------------------------------------- metrics
def roc_auc(scores, labels):
    pairs = sorted(zip(scores, labels), key=lambda t: t[0])
    n_pos = sum(1 for _, lab in pairs if lab == 1)
    n_neg = len(pairs) - n_pos
    if n_pos == 0 or n_neg == 0:
        return 0.5
    rank_sum, i = 0.0, 0
    ranks = [0.0] * len(pairs)
    while i < len(pairs):
        j = i
        while j + 1 < len(pairs) and pairs[j + 1][0] == pairs[i][0]:
            j += 1
        avg = (i + j) / 2.0 + 1.0
        for k in range(i, j + 1):
            ranks[k] = avg
        i = j + 1
    for r, (_, lab) in zip(ranks, pairs):
        if lab == 1:
            rank_sum += r
    return (rank_sum - n_pos * (n_pos + 1) / 2.0) / (n_pos * n_neg)


def evaluate(net, X, y):
    scores = [net.predict_proba(x) for x in X]
    preds = [1 if s >= 0.5 else 0 for s in scores]
    tp = sum(1 for t, p in zip(y, preds) if t == 1 and p == 1)
    fp = sum(1 for t, p in zip(y, preds) if t == 0 and p == 1)
    tn = sum(1 for t, p in zip(y, preds) if t == 0 and p == 0)
    fn = sum(1 for t, p in zip(y, preds) if t == 1 and p == 0)
    acc = (tp + tn) / max(1, len(y))
    return {
        "test_acc": acc,
        "auc": roc_auc(scores, list(y)),
        "confusion": {"tp": tp, "fp": fp, "tn": tn, "fn": fn},
        "per_class_recall": {
            "premium": tp / (tp + fn) if tp + fn else 0.0,
            "standard": tn / (tn + fp) if tn + fp else 0.0,
        },
    }


# -------------------------------------------------------------- trainer
class Trainer:
    def __init__(self, max_run_hours: float, resume: bool):
        self.max_run_seconds = float(max_run_hours) * 3600.0
        self.resume = resume
        self.start_wall = time.time()
        self.status = _read_json(BASE / "status.json", None) or {}
        self.hours_banked = float(self.status.get("hours_trained", 0.0))
        self.stop = False
        self.current_exp_id = None
        self.current_epoch = 0
        self.experiments_done = 0
        self.last_heartbeat = 0.0
        self.epoch_delay = float(os.environ.get("NN100H_EPOCH_DELAY_MS", "0")) / 1000.0
        signal.signal(signal.SIGTERM, self._on_signal)
        signal.signal(signal.SIGINT, self._on_signal)

    def _on_signal(self, signum, _frame):
        log(f"signal {signum}: checkpointing and exiting gracefully")
        self.stop = True

    def elapsed(self) -> float:
        return time.time() - self.start_wall

    def hours_trained(self) -> float:
        return self.hours_banked + self.elapsed() / 3600.0

    def time_left(self) -> float:
        return self.max_run_seconds - self.elapsed()

    def write_heartbeat(self, force=False):
        now = time.time()
        if not force and now - self.last_heartbeat < HEARTBEAT_EVERY_S:
            return
        self.last_heartbeat = now
        _write_json(BASE / "heartbeat.json", {
            "pid": os.getpid(),
            "time": _utcnow(),
            "exp_id": self.current_exp_id,
            "epoch": self.current_epoch,
            "experiments_done": self.experiments_done,
        })

    def write_status(self, status_str: str):
        best = _read_json(BASE / "best.json", None)
        _write_json(BASE / "status.json", {
            "repo": REPO,
            "hours_trained": round(self.hours_trained(), 6),
            "experiments_done": self.experiments_done,
            "best": ({
                "exp_id": best["exp_id"],
                "test_acc": best["test_acc"],
                "auc": best["auc"],
            } if best else None),
            "status": status_str,
            "updated": _utcnow(),
        })

    def checkpoint(self, exp_id, config, epoch, net, loss):
        _write_json(BASE / "checkpoints" / f"{exp_id}.json", {
            "exp_id": exp_id,
            "config": config,
            "epoch": epoch,
            "weights": net.weights,
            "biases": net.biases,
            "train_loss": loss,
        })

    def load_experiments(self):
        path = BASE / "experiments.jsonl"
        done = {}
        if path.exists():
            for line in path.read_text(encoding="utf-8").splitlines():
                line = line.strip()
                if not line:
                    continue
                try:
                    rec = json.loads(line)
                    done[rec["exp_id"]] = rec
                except (json.JSONDecodeError, KeyError):
                    continue
        self.experiments_done = len(done)
        return done

    def find_resume_checkpoint(self, done):
        """Latest checkpoint whose experiment has no experiments.jsonl line."""
        ckdir = BASE / "checkpoints"
        if not ckdir.exists():
            return None
        best = None
        for path in ckdir.glob("*.json"):
            exp_id = path.stem
            if exp_id in done:
                continue
            ck = _read_json(path, None)
            if not ck or "epoch" not in ck or "weights" not in ck:
                continue
            mtime = path.stat().st_mtime
            if best is None or mtime > best[0]:
                best = (mtime, ck)
        return best[1] if best else None


def exp_id_for(config):
    h = "_".join(str(v) for v in config["hidden"])
    return ("h%s_lr%s_l2%s_e%d_s%d" % (
        h, config["lr"], config["l2"], config["epochs"], config["seed"])
    ).replace(".", "p")


def grid_configs():
    seed = 1
    while True:
        for hidden in GRID_HIDDEN:
            for lr in GRID_LR:
                for l2 in GRID_L2:
                    for epochs in GRID_EPOCHS:
                        yield {"hidden": list(hidden), "lr": lr, "l2": l2,
                               "epochs": epochs, "seed": seed}
        seed += 1


def loo_cv(config, layers, X_all, y_all, tr=None):
    """Leave-one-out CV over all 17 rows, same config, scaler refit per
    fold on that fold's 16 train rows. Diagnostic only: the frozen
    test split above stays the contract metric. LOO is what actually
    discriminates configs here, because the frozen 4-row test set is
    saturated (every config scores 1.000 on it). Returns None when a
    chunk stop / SIGTERM lands mid-CV, so the caller can still log
    the finished main experiment."""
    correct = 0
    tp = fp = tn = fn = 0
    for i in range(len(X_all)):
        if tr is not None:
            if tr.stop or tr.time_left() <= 0:
                return None
            tr.write_heartbeat()
        X_tr = [x for j, x in enumerate(X_all) if j != i]
        y_tr = [v for j, v in enumerate(y_all) if j != i]
        X_tr_s, X_te_s, _ = standardize(X_tr, [X_all[i]])
        net = MLP(layers, seed=config["seed"], lr=config["lr"], l2=config["l2"])
        for epoch in range(config["epochs"]):
            net.train_one_epoch(X_tr_s, y_tr,
                                epoch_seed=config["seed"] * 100003 + epoch)
        p = net.predict_proba(X_te_s[0])
        pred = 1 if p >= 0.5 else 0
        t = y_all[i]
        correct += 1 if pred == t else 0
        if t == 1 and pred == 1:
            tp += 1
        elif t == 0 and pred == 1:
            fp += 1
        elif t == 0 and pred == 0:
            tn += 1
        else:
            fn += 1
    return {"loo_acc": round(correct / len(X_all), 4),
            "loo_confusion": {"tp": tp, "fp": fp, "tn": tn, "fn": fn}}


def run_experiment(tr: Trainer, config, X_train, y_train, X_test, y_test,
                   scaler, X_all=None, y_all=None, resume_ck=None):
    exp_id = exp_id_for(config)
    tr.current_exp_id = exp_id
    layers = [len(FEATURES)] + list(config["hidden"]) + [1]
    net = MLP(layers, seed=config["seed"], lr=config["lr"], l2=config["l2"])
    start_epoch = 0
    if resume_ck and resume_ck.get("exp_id") == exp_id:
        net.restore(resume_ck)
        start_epoch = int(resume_ck.get("epoch", 0))
        log(f"RESUME {exp_id}: continuing from checkpoint epoch "
            f"{start_epoch}/{config['epochs']} (not restarting)")
    t0 = time.time()
    loss = net.train_loss(X_train, y_train)
    for epoch in range(start_epoch, config["epochs"]):
        if tr.stop or tr.time_left() <= 0:
            tr.current_epoch = epoch
            tr.checkpoint(exp_id, config, epoch, net, loss)
            log(f"CHUNK-STOP {exp_id}: checkpointed at epoch "
                f"{epoch}/{config['epochs']}")
            return None  # incomplete: no experiments.jsonl line
        net.train_one_epoch(X_train, y_train,
                            epoch_seed=config["seed"] * 100003 + epoch)
        if tr.epoch_delay:
            time.sleep(tr.epoch_delay)
        tr.current_epoch = epoch + 1
        tr.write_heartbeat()
        if (epoch + 1) % CHECKPOINT_EVERY == 0 or epoch + 1 == config["epochs"]:
            loss = net.train_loss(X_train, y_train)
            tr.checkpoint(exp_id, config, epoch + 1, net, loss)
    secs = time.time() - t0
    metrics = evaluate(net, X_test, y_test)
    train_metrics = evaluate(net, X_train, y_train)
    rec = {
        "exp_id": exp_id,
        "config": config,
        "test_acc": round(metrics["test_acc"], 4),
        "auc": round(metrics["auc"], 4),
        "confusion": metrics["confusion"],
        "per_class_recall": {k: round(v, 4)
                             for k, v in metrics["per_class_recall"].items()},
        "train_acc": round(train_metrics["test_acc"], 4),
        "seconds": round(secs, 3),
    }
    # Supplementary LOO-CV (diagnostic; best.json still keys off the
    # frozen test split per contract). Skipped when the chunk is nearly
    # out of time, so the contract record is never held hostage by it.
    if X_all is not None and tr.time_left() > 30:
        loo = loo_cv(config, layers, X_all, y_all, tr=tr)
        if loo is not None:
            rec.update(loo)
        else:
            rec["loo_acc"] = None
            rec["loo_confusion"] = None
        rec["seconds"] = round(time.time() - t0, 3)
    else:
        rec["loo_acc"] = None
        rec["loo_confusion"] = None
    with open(BASE / "experiments.jsonl", "a", encoding="utf-8") as fh:
        fh.write(json.dumps(rec) + "\n")
    tr.experiments_done += 1
    log(f"DONE {exp_id}: test_acc={rec['test_acc']:.3f} auc={rec['auc']:.3f} "
        f"loo_acc={rec.get('loo_acc')} conf={rec['confusion']} "
        f"recall={rec['per_class_recall']} ({rec['seconds']}s)")
    # best.json only on honest test-acc improvement (AUC tiebreak).
    best = _read_json(BASE / "best.json", None)
    better = (best is None
              or rec["test_acc"] > best["test_acc"]
              or (rec["test_acc"] == best["test_acc"] and rec["auc"] > best["auc"]))
    if better:
        _write_json(BASE / "best.json", {
            **rec,
            "layers": layers,
            "scaler": scaler,
            "weights": net.weights,
            "biases": net.biases,
        })
        _write_json(BASE / "best-metrics.json", {
            "exp_id": rec["exp_id"],
            "config": rec["config"],
            "test_acc": rec["test_acc"],
            "auc": rec["auc"],
            "confusion": rec["confusion"],
            "per_class_recall": rec["per_class_recall"],
            "seconds": rec["seconds"],
            "train_rows": len(X_train),
            "test_rows": len(X_test),
            "features": FEATURES,
        })
        log(f"BEST <- {exp_id}: test_acc={rec['test_acc']:.3f} "
            f"auc={rec['auc']:.3f}")
    tr.write_status("training")
    tr.write_heartbeat(force=True)
    return rec


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="100h trainer: city-driver car tiers.")
    ap.add_argument("--resume", action="store_true")
    ap.add_argument("--max-run-hours", type=float, default=5.5)
    args = ap.parse_args(argv)

    rows = load_rows()
    if len(rows) < 4:
        print("dataset too small", file=sys.stderr)
        return 2
    split = ensure_split(rows)
    X = [[float(r["features"][f]) for f in FEATURES] for r in rows]
    y = [int(r["label"]) for r in rows]
    X_train = [X[i] for i in split["train_idx"]]
    y_train = [y[i] for i in split["train_idx"]]
    X_test = [X[i] for i in split["test_idx"]]
    y_test = [y[i] for i in split["test_idx"]]
    X_train, X_test, scaler = standardize(X_train, X_test)
    log(f"data: {len(rows)} rows train={len(X_train)} test={len(X_test)} "
        f"features={FEATURES}")

    tr = Trainer(args.max_run_hours, args.resume)
    if tr.hours_banked >= TARGET_HOURS:
        tr.write_status("done")
        log(f"already at {tr.hours_banked:.2f}h >= {TARGET_HOURS}h: done")
        return 0
    log(f"start: banked={tr.hours_banked:.4f}h max-run={args.max_run_hours}h "
        f"resume={args.resume} pid={os.getpid()}")
    tr.write_heartbeat(force=True)
    tr.write_status("training")

    done = tr.load_experiments()
    resume_ck = tr.find_resume_checkpoint(done) if args.resume else None
    if args.resume and resume_ck:
        log(f"resume checkpoint found: {resume_ck['exp_id']} "
            f"epoch {resume_ck['epoch']}")
    elif args.resume:
        log("resume: no in-progress checkpoint; continuing grid")

    for config in grid_configs():
        if tr.stop or tr.time_left() <= 0:
            break
        if tr.hours_trained() >= TARGET_HOURS:
            break
        exp_id = exp_id_for(config)
        if exp_id in done:
            continue
        ck = resume_ck if (resume_ck and resume_ck.get("exp_id") == exp_id) else None
        result = run_experiment(tr, config, X_train, y_train, X_test, y_test,
                                scaler, X_all=X, y_all=y, resume_ck=ck)
        if result is None:
            break  # chunk stop mid-experiment; hours banked on exit
        done[exp_id] = result
        if tr.hours_trained() >= TARGET_HOURS:
            break

    finished = tr.hours_trained() >= TARGET_HOURS
    tr.write_status("done" if finished else "training")
    tr.write_heartbeat(force=True)
    log(f"exit: hours_trained={tr.hours_trained():.4f} "
        f"experiments_done={tr.experiments_done} status="
        f"{'done' if finished else 'training (chunk)'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
