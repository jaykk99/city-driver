#!/usr/bin/env python3
"""Regenerate the frozen split (split.json) without training.

    python3 make_split.py   (run from nn-100h/)

Deterministic: stratified, seed 42, test frac 0.2. train.py also
creates it on first run if missing; this script is just the
explicit way to do it.
"""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from train import ensure_split, load_rows  # noqa: E402


def main() -> int:
    rows = load_rows()
    split = ensure_split(rows)
    print(f"split.json: train={split['train_rows']} test={split['test_rows']} "
          f"seed={split['seed']} test_frac={split['test_frac']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
