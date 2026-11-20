"""Training data: simulated taxi fares from the game's own code.

Source: nn/dataset.jsonl, built by nn/build_data.mjs, which drives
js/taxi.js's createTaxiJob state machine with seeded RNGs. Each row
is one fare; the label is the game's own outcome (dropoff tip > 0).
No hand-written labels, no invented rows.
"""
from __future__ import annotations

import json
import random
from typing import Dict, List, Tuple


def load_rows(path: str) -> Tuple[List[Dict], Dict]:
    """Load dataset.jsonl. Returns (rows, stats)."""
    rows: List[Dict] = []
    bad = 0
    with open(path, encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line:
                continue
            try:
                row = json.loads(line)
            except Exception:
                bad += 1
                continue
            if not isinstance(row, dict) or row.get("label") not in (0, 1):
                bad += 1
                continue
            rows.append(row)
    outcomes: Dict[str, int] = {}
    for r in rows:
        outcomes[r.get("outcome", "?")] = outcomes.get(r.get("outcome", "?"), 0) + 1
    stats = {
        "rows": len(rows),
        "bad_lines": bad,
        "n_positive": sum(1 for r in rows if r["label"] == 1),
        "n_negative": sum(1 for r in rows if r["label"] == 0),
        "outcomes": outcomes,
        "source": "nn/dataset.jsonl (nn/build_data.mjs driving js/taxi.js)",
    }
    return rows, stats


def stratified_split(rows: List[Dict], test_frac: float = 0.2,
                     seed: int = 42) -> Tuple[List[Dict], List[Dict]]:
    """Stratified train/test split (keeps the class ratio in both)."""
    rng = random.Random(seed)
    by_label: Dict[int, List[Dict]] = {}
    for r in rows:
        by_label.setdefault(r["label"], []).append(r)
    train: List[Dict] = []
    test: List[Dict] = []
    for label, items in by_label.items():
        items = list(items)
        rng.shuffle(items)
        n_test = max(1, round(len(items) * test_frac)) if len(items) > 1 else 0
        test.extend(items[:n_test])
        train.extend(items[n_test:])
    rng.shuffle(train)
    rng.shuffle(test)
    return train, test
