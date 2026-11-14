"""Score taxi rides with the trained tip network.

    python -m nn.score --ride '{"trip_m": 400, "par_s": 52, ...}'
    python -m nn.score --file nn/dataset.jsonl [--limit 5]

A ride is a feature dict (same fields as nn/dataset.jsonl rows, or a
full row). Output: nn_score (0-1), nn_label (earns-tip / no-tip) and
nn_top_features (the 3 features most responsible for the score).

Prediction only: scoring never touches the game, never changes state,
never pays anything. The game itself decides the tip.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from pathlib import Path

from .features import extract, top_features
from .mlp import MLP

DEFAULT_WEIGHTS = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                               "weights.json")


def load_model(weights_path: str = None):
    """-> (net, weights_dict) or (None, None) when untrained."""
    path = weights_path or DEFAULT_WEIGHTS
    if not os.path.exists(path):
        return None, None
    with open(path, encoding="utf-8") as fh:
        weights = json.load(fh)
    return MLP.from_dict(weights["mlp"]), weights


def score_ride(ride: dict, net) -> dict:
    """Score one ride dict, returning it with nn_* fields added."""
    out = dict(ride)
    score = net.predict_proba(extract(ride))
    out["nn_score"] = score
    out["nn_label"] = "earns-tip" if score >= 0.5 else "no-tip"
    out["nn_top_features"] = top_features(ride, net)
    return out


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(
        description="Score taxi rides with the tip network.")
    ap.add_argument("--ride", default=None,
                    help="one ride as a JSON object (feature dict or "
                         "full dataset row)")
    ap.add_argument("--file", default=None,
                    help="JSONL file of ride rows to score")
    ap.add_argument("--weights", default=None)
    ap.add_argument("--limit", type=int, default=5)
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args(argv)

    net, _w = load_model(args.weights)
    if net is None:
        print("no trained weights found. Train first:\n"
              "  python -m nn.train", file=sys.stderr)
        return 2

    if args.ride:
        scored = [score_ride(json.loads(args.ride), net)]
    elif args.file:
        scored = []
        with open(os.path.expanduser(args.file), encoding="utf-8") as fh:
            for line in fh:
                line = line.strip()
                if line:
                    scored.append(score_ride(json.loads(line), net))
    else:
        ap.error("give --ride or --file")
        return 2

    if args.json:
        print(json.dumps(scored, indent=2, default=str))
        return 0
    for r in scored[: args.limit]:
        f = r.get("features") or r
        print(f"score {r['nn_score']:.3f}  {r['nn_label']:<9}  "
              f"trip {f.get('trip_m', 0):.0f}m par {f.get('par_s', 0)}s "
              f"elapsed/par {f.get('elapsed_par', 0):.2f} "
              f"damage {f.get('damage_frac', 0):.2f} "
              f"vip={bool(f.get('vip'))} airport={bool(f.get('airport'))} "
              f"(true label: {'tip' if r.get('label') == 1 else 'no-tip' if 'label' in r else '?'})")
        for tf in r.get("nn_top_features") or []:
            print(f"    {tf['direction']} {tf['feature']} ({tf['delta']:+.3f})")
    if len(scored) > args.limit:
        ok = sum(1 for r in scored
                 if (r["nn_score"] >= 0.5) == (r.get("label") == 1))
        print(f"... {len(scored) - args.limit} more; "
              f"accuracy on this file: {ok}/{len(scored)} = {ok / len(scored):.3f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
