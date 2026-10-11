// CITY DRIVER — free-roam stunt rewards (pure, testable).
// Free roam previously had no cash loop: the only way to earn was drag
// racing. Drift bonuses reward stylish driving so cruising the city pays.

export const DRIFT_RATE = 15;      // $ per second of drift
export const DRIFT_MIN_T = 1.0;    // minimum drift seconds before payout
export const DRIFT_MIN_SPEED = 8;  // must be moving at least this fast (m/s)

export function newStuntState(){
  return { driftT: 0, driftAcc: 0 };
}

// Call every frame in free roam with the physics telemetry.
// Returns the cash award for this frame (0 on most frames — the payout
// lands once, when a qualifying drift ends).
export function stuntUpdate(st, drifting, speed, dt){
  if (drifting && Math.abs(speed) >= DRIFT_MIN_SPEED){
    st.driftT += dt;
    st.driftAcc += dt * DRIFT_RATE;
    return 0;
  }
  let award = 0;
  if (st.driftT >= DRIFT_MIN_T) award = Math.round(st.driftAcc);
  st.driftT = 0;
  st.driftAcc = 0;
  return award;
}
