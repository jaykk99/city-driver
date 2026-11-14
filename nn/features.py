"""Feature extraction: one simulated taxi ride -> fixed-length vector.

Every feature comes from a field the game's own taxi state machine
(js/taxi.js) really produces: the pickup event (trip, par, fare,
surge, VIP, airport), the ride as driven (elapsed time, damage taken)
and the driver's career before the ride (rating average/count,
streak). Nothing is invented: a missing field reads as its neutral
value, never guessed.

Row shape (nn/dataset.jsonl, built by nn/build_data.mjs):
    seed, outcome (dropoff|bail|wreck), label (tip>0 ? 1 : 0), tip,
    features: {trip_m, par_s, elapsed_s, elapsed_par, damage_frac,
    surge, time_surge, weather_surge, weather, vip, airport,
    rating_avg_before, rating_count, streak_before, fare}

Labels never leak into features: the tip amount and the outcome are
label-side only and are never read here.
"""
from __future__ import annotations

import math
from typing import Dict, List

FEATURE_NAMES = [
    "trip_m",        # log-scaled trip distance
    "par_s",         # par time, scaled
    "elapsed_par",   # elapsed / par (1.0 = exactly on par)
    "damage_frac",   # 0 = clean cab, 1 = wrecked
    "surge",         # combined surge, 1..2.25
    "vip",           # VIP rush fare
    "airport",       # airport run
    "rating_avg",    # career rating before the ride, /5
    "rating_count",  # rated rides before this one, capped
    "streak_before", # consecutive fares this shift, capped
    "fare",          # log-scaled meter fare
    "weather_rain",  # sky during the ride
    "weather_storm",
]


def extract(row: Dict) -> List[float]:
    """One dataset row -> feature vector in FEATURE_NAMES order."""
    f = row.get("features") or row
    trip = float(f.get("trip_m") or 0)
    par = float(f.get("par_s") or 1)
    elapsed_par = float(f.get("elapsed_par") or 0)
    damage = float(f.get("damage_frac") or 0)
    surge = float(f.get("surge") or 1)
    fare = float(f.get("fare") or 0)
    weather = str(f.get("weather") or "clear")
    return [
        min(1.0, math.log10(1.0 + max(0.0, trip)) / math.log10(2001.0)),
        min(1.0, max(0.0, par) / 200.0),
        min(1.0, max(0.0, elapsed_par) / 3.0),
        min(1.0, max(0.0, damage)),
        min(1.0, max(0.0, surge - 1.0) / 1.25),
        1.0 if f.get("vip") else 0.0,
        1.0 if f.get("airport") else 0.0,
        min(1.0, max(0.0, float(f.get("rating_avg_before") or 0)) / 5.0),
        min(1.0, float(f.get("rating_count") or 0) / 15.0),
        min(1.0, float(f.get("streak_before") or 0) / 6.0),
        min(1.0, math.log10(1.0 + max(0.0, fare)) / math.log10(5001.0)),
        1.0 if weather == "rain" else 0.0,
        1.0 if weather == "storm" else 0.0,
    ]


def groups() -> Dict[str, tuple]:
    """Named index ranges, for permutation importance."""
    idx = {n: i for i, n in enumerate(FEATURE_NAMES)}
    return {
        "trip": (idx["trip_m"], idx["trip_m"] + 1),
        "par": (idx["par_s"], idx["par_s"] + 1),
        "elapsed_par": (idx["elapsed_par"], idx["elapsed_par"] + 1),
        "damage": (idx["damage_frac"], idx["damage_frac"] + 1),
        "surge": (idx["surge"], idx["surge"] + 1),
        "vip": (idx["vip"], idx["vip"] + 1),
        "airport": (idx["airport"], idx["airport"] + 1),
        "rating": (idx["rating_avg"], idx["rating_count"] + 1),
        "streak": (idx["streak_before"], idx["streak_before"] + 1),
        "fare": (idx["fare"], idx["fare"] + 1),
        "weather": (idx["weather_rain"], idx["weather_storm"] + 1),
    }


def top_features(row: Dict, net, k: int = 3) -> List[Dict]:
    """Top contributing features for one scored ride (leave-one-out)."""
    x = extract(row)
    base = net.predict_proba(x)
    deltas = []
    for i, name in enumerate(FEATURE_NAMES):
        if x[i] == 0.0:
            continue
        x2 = list(x)
        x2[i] = 0.0
        d = base - net.predict_proba(x2)
        deltas.append((abs(d), d, name))
    deltas.sort(reverse=True)
    return [{"feature": name, "direction": "up" if d > 0 else "down",
             "delta": round(d, 4)} for _a, d, name in deltas[:k]]
