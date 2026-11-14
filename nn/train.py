"""Train the taxi tip network on simulated fares from the game's code.

    python -m nn.train [--dataset nn/dataset.jsonl] [--out nn]
                       [--epochs N] [--hidden 16,8]

Predicts whether a completed taxi ride earns a tip (label 1, dropoff
tip > 0) or not (label 0: late / battered dropoff with no tip, bailed
passenger, wrecked cab). Writes weights.json + viewer-data.json into
the out dir and refreshes the embedded metrics block in viewer.html.

Honest limits, printed with the metrics and baked into the viewer:
- the tip rule in js/taxi.js is deterministic: a ride earns a tip
  exactly when it finishes on time (elapsed <= par) with the cab
  not fully wrecked (damage < 1). A network fed elapsed/par and
  damage can therefore learn the rule almost exactly, so test
  accuracy near 100% is EXPECTED here and is not a discovery and
  not a win: the model is a learned surrogate of tipFor, useful for
  predicting the tip outcome from ride stats without running the
  game, nothing more.
- the fares are simulated by driving the real state machine, not
  playtest logs: no real player ever drove these rides. The model
  knows the game's rules, not real players.
- the model never changes game state and never pays anything: the
  game itself decides the tip.
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import os
import random
import sys
from pathlib import Path

from .data import load_rows, stratified_split
from .features import FEATURE_NAMES, extract, groups
from .mlp import MLP, metrics_for, roc_auc

DEFAULT_DATASET = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                               "dataset.jsonl")

LIMITS = [
    "Prediction only. The model predicts whether a completed taxi ride "
    "earns a tip, from the ride's own stats. It never changes game "
    "state and never pays anything: js/taxi.js decides the tip.",
    "The tip rule is deterministic (on time + not wrecked = tip), so "
    "near-100% test accuracy is expected and is NOT a discovery: the "
    "model is a learned surrogate of tipFor, not evidence of hidden "
    "signal. Judge it by whether it reproduces the rule, not by "
    "beating a baseline.",
    "Simulated fares, not playtest logs: the rows come from driving "
    "the real taxi state machine with seeded RNGs (nn/build_data.mjs). "
    "No real player drove these rides; the model knows the game's "
    "rules, not real players.",
]

VIEWER_START = "<!-- NN-DATA-START -->"
VIEWER_END = "<!-- NN-DATA-END -->"


def permutation_importance(net: MLP, X_test, y_test, seed: int = 42):
    """Grouped permutation importance: AUC drop when a feature group
    is shuffled in the test set. Positive drop = the group matters."""
    base_scores = [net.predict_proba(x) for x in X_test]
    base_auc = roc_auc(base_scores, y_test)
    rng = random.Random(seed)
    out = []
    for group, (a, b) in sorted(groups().items()):
        Xp = [list(x) for x in X_test]
        col_vals = [x[a:b] for x in Xp]
        rng.shuffle(col_vals)
        for row, vals in zip(Xp, col_vals):
            row[a:b] = vals
        auc = roc_auc([net.predict_proba(x) for x in Xp], y_test)
        out.append({"group": group, "auc_drop": round(base_auc - auc, 4)})
    out.sort(key=lambda d: d["auc_drop"], reverse=True)
    return out


def train(dataset_path: str, out_dir: str, epochs: int = 60,
          hidden: str = "16,8", lr: float = 0.05, seed: int = 42,
          test_frac: float = 0.2) -> dict:
    rows, stats = load_rows(dataset_path)
    if len(rows) < 20:
        raise ValueError(f"only {len(rows)} training rows; refusing")
    train_rows, test_rows = stratified_split(rows, test_frac, seed)
    X_train = [extract(r) for r in train_rows]
    y_train = [r["label"] for r in train_rows]
    X_test = [extract(r) for r in test_rows]
    y_test = [r["label"] for r in test_rows]

    layers = [len(FEATURE_NAMES)] + [int(h) for h in hidden.split(",") if h] + [1]
    net = MLP(layers, seed=seed, lr=lr)
    history = net.fit(X_train, y_train, epochs=epochs, batch_size=32,
                      X_val=X_test, y_val=y_test, seed=seed)
    train_scores = [net.predict_proba(x) for x in X_train]
    test_scores = [net.predict_proba(x) for x in X_test]
    train_metrics = metrics_for(y_train, train_scores)
    test_metrics = metrics_for(y_test, test_scores)
    importance = permutation_importance(net, X_test, y_test, seed)

    result = {
        "trained_at": dt.datetime.now(dt.timezone.utc).isoformat(),
        "layers": layers,
        "n_features": len(FEATURE_NAMES),
        "feature_names": FEATURE_NAMES,
        "dataset": stats,
        "train_rows": len(train_rows),
        "test_rows": len(test_rows),
        "train_metrics": train_metrics,
        "test_metrics": test_metrics,
        "history": history,
        "feature_importance": importance,
        "limits": LIMITS,
        "seed": seed,
        "epochs": epochs,
        "lr": lr,
    }

    out = Path(out_dir)
    out.mkdir(parents=True, exist_ok=True)
    weights = {
        "format": "city-driver-nn-weights/1",
        "trained_at": result["trained_at"],
        "mlp": net.to_dict(),
        "metrics": {"train": train_metrics, "test": test_metrics},
        "dataset": stats,
        "limits": LIMITS,
    }
    (out / "weights.json").write_text(json.dumps(weights, indent=2),
                                      encoding="utf-8")
    (out / "viewer-data.json").write_text(
        json.dumps(result, indent=2), encoding="utf-8")
    _refresh_viewer(out / "viewer.html", result)
    return result


def _refresh_viewer(viewer_path: Path, result: dict) -> None:
    """Replace the embedded metrics JSON block in viewer.html so the
    file shows the real numbers even when opened as file://."""
    if not viewer_path.exists():
        return
    text = viewer_path.read_text(encoding="utf-8")
    if VIEWER_START not in text or VIEWER_END not in text:
        return
    block = (VIEWER_START + "\n<script type=\"application/json\" "
             "id=\"nn-data\">\n" + json.dumps(result, indent=2) +
             "\n</script>\n" + VIEWER_END)
    before, _sep, rest = text.partition(VIEWER_START)
    _mid, _sep2, after = rest.partition(VIEWER_END)
    viewer_path.write_text(before + block + after, encoding="utf-8")


def _print_report(result: dict) -> None:
    tm = result["test_metrics"]
    tr = result["train_metrics"]
    print(f"rows: train={result['train_rows']} test={result['test_rows']} "
          f"(pos {result['dataset']['n_positive']} / "
          f"neg {result['dataset']['n_negative']})")
    print(f"features: {result['n_features']}  layers: {result['layers']}")
    print(f"train acc {tr['accuracy']:.3f}  test acc {tm['accuracy']:.3f}  "
          f"majority baseline {tm['majority_baseline_accuracy']:.3f}")
    print(f"test ROC AUC {tm['roc_auc']:.3f}")
    print(f"earns-tip: precision {tm['precision_earns_tip']:.3f} "
          f"recall {tm['recall_earns_tip']:.3f}")
    print(f"no-tip: precision {tm['precision_no_tip']:.3f} "
          f"recall {tm['recall_no_tip']:.3f}")
    cm = tm["confusion"]
    print(f"confusion (test): tp={cm['tp']} fp={cm['fp']} "
          f"fn={cm['fn']} tn={cm['tn']}")
    print("feature importance (AUC drop): " + ", ".join(
        f"{d['group']}={d['auc_drop']:.3f}"
        for d in result["feature_importance"][:6]))
    print("LIMITS: prediction only; deterministic tip rule, near-100% "
          "expected, not a discovery; simulated fares, not playtest logs.")


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(
        description="Train the City Driver taxi tip network.")
    ap.add_argument("--dataset", default=DEFAULT_DATASET)
    ap.add_argument("--out", default=os.path.dirname(os.path.abspath(__file__)))
    ap.add_argument("--epochs", type=int, default=60)
    ap.add_argument("--hidden", default="16,8")
    ap.add_argument("--lr", type=float, default=0.05)
    ap.add_argument("--seed", type=int, default=42)
    ap.add_argument("--test-frac", type=float, default=0.2)
    args = ap.parse_args(argv)
    result = train(os.path.expanduser(args.dataset), args.out,
                   epochs=args.epochs, hidden=args.hidden, lr=args.lr,
                   seed=args.seed, test_frac=args.test_frac)
    _print_report(result)
    print(f"weights: {os.path.join(args.out, 'weights.json')}")
    print(f"viewer data: {os.path.join(args.out, 'viewer-data.json')}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
