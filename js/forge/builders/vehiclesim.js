// Vehicle performance model: engine torque curve, forced induction, nitrous, gearing, tires,
// plus a fast 1-D drag-strip simulation for ET / trap speed / 0-60 stats.
import { clamp, smoothstep } from '../core/util.js';
import { designDims, upgradeOldParams, DESIGN_DEFAULTS } from './cargen.js';

export const CYL = { i4: 4, i6: 6, v6: 6, v8: 8, v10: 10, v12: 12, rotary: 2, electric: 0 };

export function tireSize(P, front) {
  const rimIn = front && P.skinnies ? 15 : P.rimSize;
  const width = (front ? (P.skinnies ? 145 : P.tireWidthF) : P.tireWidthR) / 1000;
  const sidewall = front && P.skinnies ? 0.8 : P.sidewall / 100;
  const rimR = rimIn * 0.0254 / 2;
  return { rimR, R: rimR + width * sidewall, width };
}

export function engineModel(P) {
  const type = P.engine || 'v8'; const n = CYL[type] ?? 8;
  const disp = P.displacement || 5.7; const stage = P.stage || 0;
  const redline = P.revLimit || 6800; const idle = type === 'electric' ? 0 : 850;
  const fuel = { pump: 1, race: 1.04, e85: 1.08, methanol: 1.12 }[P.fuel] || 1;
  const effDisp = type === 'rotary' ? disp * 2 : disp;
  let tpk = effDisp * (100 + stage * 12) * fuel;
  if (type === 'electric') tpk = disp * 140;
  const rpk = type === 'electric' ? Math.min(5500, redline * 0.45) : redline * (0.5 + stage * 0.02);
  const ind = P.induction || 'na'; const boost = ind === 'na' ? 0 : (P.boost || 0);
  const knock = P.fuel === 'pump' && boost > 18 ? 0.94 : 1;
  const boostGain = boost / 14.7 * 0.86 * knock;
  const spoolStart = redline * clamp(0.2 + boost / 120 - (ind === 'twinturbo' ? 0.06 : 0), 0.15, 0.6), spoolEnd = spoolStart + redline * 0.22;
  const nos = parseFloat(P.nitrous || '0') || 0;
  function torque(rpm, nitrous = false) {
    rpm = Math.max(rpm, idle || 1);
    let f;
    if (type === 'electric') f = rpm < rpk ? 1 : rpk / rpm;
    else if (rpm < rpk) { const x = rpm / rpk; f = 0.58 + 0.42 * Math.sin(x * Math.PI / 2); }
    else { const x = (rpm - rpk) / Math.max(1, redline - rpk); f = 1 - 0.32 * x * x; }
    let m = 1;
    if (ind === 'turbo' || ind === 'twinturbo') m = 1 + boostGain * smoothstep(spoolStart, spoolEnd, rpm);
    else if (ind === 'supercharger') m = 1 + boostGain * Math.pow(clamp(rpm / redline, 0, 1), 1.4);
    else if (ind === 'blower') m = 1 + boostGain * 0.92 * smoothstep(idle * 0.5, idle * 2.2, rpm);
    let t = tpk * f * m;
    if (nitrous && nos > 0 && rpm > 2400) t += nos * 745.7 / (rpm * Math.PI / 30);
    return t;
  }
  // scan for peaks
  let peakHp = 0, peakHpRpm = 0, peakTq = 0, peakTqRpm = 0;
  for (let r = Math.max(1000, idle); r <= redline; r += 50) {
    const t = torque(r), hp = t * r / 7120.8;
    if (hp > peakHp) { peakHp = hp; peakHpRpm = r; } if (t > peakTq) { peakTq = t; peakTqRpm = r; }
  }
  return { torque, idle, redline, peakHp, peakHpRpm, peakTq, peakTqRpm, cylinders: n, nitrousHp: nos, induction: ind, boost, type };
}

export function gearRatios(P) {
  const n = Math.round(P.gears || 6); const g1 = P.gear1 || 2.97, gt = P.gearTop || 0.72;
  if (n <= 1) return [g1];
  const out = []; for (let i = 0; i < n; i++) out.push(+(g1 * Math.pow(gt / g1, i / (n - 1))).toFixed(3));
  return out;
}

export function vehicleSpec(P) {
  P = upgradeOldParams(P);
  const d = designDims({ ...DESIGN_DEFAULTS, ...P });
  const engine = engineModel(P);
  const tf = tireSize(P, true), tr = tireSize(P, false);
  const tireMu = { street: 0.95, sport: 1.12, allterrain: 0.92, mud: 0.82, slick: 1.65 }[P.tire] || 1;
  const tireOff = { street: 0.6, sport: 0.55, allterrain: 1.05, mud: 1.25, slick: 0.35 }[P.tire] || 0.7;
  const mass = Math.max(300, (P.weight || 1600) * (1 - (P.weightReduction || 0)));
  const { L, W, H, wb } = d;
  return {
    frame: P.frame || 'closed', mass, engine, gears: gearRatios(P), finalDrive: P.finalDrive || 3.55, drive: P.drive || 'rwd', trans: P.trans || 'manual',
    lowRange: !!P.lowRange && (P.drive === '4wd' || P.drive === 'awd'),
    launchRpm: P.launchRpm || 4200, shiftRpm: P.shiftRpm || 0,
    tireF: tf, tireR: tr, mu: tireMu * (P.grip || 1), offroadMu: tireOff * (P.grip || 1),
    cdA: d.cd * (W * H * 0.82) / 2.2 * (1 + (P.spoiler === 'gtwing' || P.spoiler === 'dragwing' ? 0.12 : 0)),
    downforce: (P.downforce || 0) * 2.2 + (P.spoiler === 'wing' ? 0.6 : P.spoiler === 'gtwing' ? 1.4 : P.spoiler === 'dragwing' ? 1.8 : 0),
    cgH: d.cg + (P.lift || 0) * 0.85, wb, track: W - Math.max(tf.width, tr.width) * 0.6, frontWeight: (P.frontWeight || 55) / 100,
    L, W, H, lift: P.lift || 0, rearHeight: P.rearHeight || 0, travel: P.travel || 0.18,
    stiffness: P.stiffness || 1, damping: P.damping || 1, wheelieBar: !!P.wheelieBar,
    shiftTime: { manual: 0.22, auto: 0.14, sequential: 0.06 }[P.trans] || 0.2,
  };
}

// 1-D straight-line simulation. Returns ET, trap speed, 60ft, 0-60 mph, 1/8 mile, top speed.
export function dragSim(spec, { dist = 402.336, nitrous = true } = {}) {
  const e = spec.engine; const g = 9.81; const m = spec.mass; const R = spec.tireR.R;
  const gears = spec.gears; const fd = spec.finalDrive * (spec.lowRange ? 1 : 1);
  const shiftAt = spec.shiftRpm > 0 ? Math.min(spec.shiftRpm, e.redline) : e.redline * 0.985;
  const driven = spec.drive === 'fwd' ? 'f' : spec.drive === 'rwd' ? 'r' : 'a';
  let v = 0, x = 0, t = 0, gi = 0, shift = 0, wheelie = false, rpm = spec.launchRpm;
  const res = { sixtyFt: null, sixty: null, eighth: null, eighthTrap: null, et: null, trap: null, topSpeed: 0, wheelie: false, gearsUsed: 1 };
  const dt = 0.004;
  while (t < 90) {
    const ratio = gears[gi] * fd;
    const wheelRpm = v / R * 30 / Math.PI;
    const coupled = wheelRpm * ratio;
    // launch: clutch / converter slips until coupled rpm reaches launch rpm
    rpm = e.type === 'electric' ? Math.max(coupled, 1) : Math.max(coupled, gi === 0 ? Math.min(spec.launchRpm, e.redline) : e.idle);
    rpm = Math.min(rpm, e.redline);
    let T = e.torque(rpm, nitrous && x > 3);
    if (coupled >= e.redline * 0.999) T *= 0.05; // limiter
    let F = shift > 0 ? 0 : T * ratio * 0.88 / R;
    const aero = 0.5 * 1.2 * spec.cdA * v * v, down = 0.5 * 1.2 * spec.downforce * v * v * 0.5;
    const roll = 0.012 * m * g;
    const aGuess = Math.max(0, (F - aero - roll) / (m * 1.06));
    const transfer = m * aGuess * spec.cgH / spec.wb;
    let Nf = m * g * spec.frontWeight - transfer + down * 0.4, Nr = m * g * (1 - spec.frontWeight) + transfer + down * 0.6;
    if (Nf < 0) { wheelie = true; Nr += Nf; Nf = 0; }
    const N = driven === 'f' ? Nf : driven === 'r' ? Nr : Nf + Nr;
    const trac = spec.mu * N * (driven === 'a' ? 1.0 : 1);
    F = Math.min(F, trac);
    if (wheelie && !spec.wheelieBar) F *= 0.85;
    const a = (F - aero - roll) / (m * 1.06);
    v = Math.max(0, v + a * dt); x += v * dt; t += dt;
    if (shift > 0) shift -= dt;
    else if (coupled >= shiftAt && gi < gears.length - 1) { gi++; shift = spec.shiftTime; res.gearsUsed = gi + 1; }
    if (res.sixtyFt == null && x >= 18.288) res.sixtyFt = t;
    if (res.sixty == null && v >= 26.822) res.sixty = t;
    if (res.eighth == null && x >= 201.168) { res.eighth = t; res.eighthTrap = v; }
    if (res.et == null && x >= dist) { res.et = t; res.trap = v; }
    res.topSpeed = Math.max(res.topSpeed, v);
    if (res.et != null && F > 0 && coupled < e.redline * 0.995 && (a < 0.02 || t > 60)) break;
    if (res.et != null && coupled >= e.redline * 0.995 && gi === gears.length - 1) break;
  }
  res.wheelie = wheelie;
  return res;
}

export function statBars(spec, sim) {
  const hp = spec.engine.peakHp + (spec.engine.nitrousHp || 0);
  const offroad = clamp((spec.offroadMu - 0.3) * 4 + (spec.lift) * 6 + (spec.drive === '4wd' ? 2.5 : spec.drive === 'awd' ? 1.5 : 0) + spec.travel * 4 + (spec.lowRange ? 1 : 0), 0, 10);
  return {
    power: clamp(hp / 180, 0, 10), accel: clamp(sim.sixty ? (11 - sim.sixty * 1.05) : 0, 0, 10),
    speed: clamp(sim.topSpeed * 3.6 / 42, 0, 10), handling: clamp(spec.mu * 5.5 + spec.downforce * 1.2 - spec.cgH * 3 + 1.5 - spec.mass / 2500, 0, 10), offroad,
  };
}

export const kmh = v => v * 3.6, mph = v => v * 2.23694;
