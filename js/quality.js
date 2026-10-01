// CITY DRIVER — adaptive quality manager. Pure logic, no three.js import.
// Levels: 0=low, 1=medium, 2=high. Auto mode steps down when fps sags.
export const QUALITY_LEVELS = ['low', 'medium', 'high'];

export function qualitySettings(level) {
  switch (level) {
    case 2: return { pixelRatioCap: 2.0, bloom: true,  shadows: true,  shadowSize: 1024, particles: 1.0 };
    case 1: return { pixelRatioCap: 1.25, bloom: true,  shadows: true,  shadowSize: 512,  particles: 0.7 };
    default: return { pixelRatioCap: 1.0, bloom: false, shadows: false, shadowSize: 512,  particles: 0.4 };
  }
}

export class QualityManager {
  constructor(mode = 'auto') {
    this.mode = mode;                 // 'auto' | 'high' | 'low'
    this.level = 2;                   // current applied level
    this._frames = 0; this._time = 0; // current window
    this._lowStreak = 0; this._highStreak = 0;
    this._listeners = [];
    this._cooldown = 0;
  }
  onChange(fn) { this._listeners.push(fn); }
  _emit() { for (const fn of this._listeners) fn(this.level, qualitySettings(this.level)); }

  setMode(mode) {
    this.mode = mode;
    const want = mode === 'high' ? 2 : mode === 'low' ? 0 : this.level;
    if (want !== this.level) { this.level = want; this._emit(); }
    this._lowStreak = 0; this._highStreak = 0;
  }
  cycleMode() {
    this.setMode(this.mode === 'auto' ? 'high' : this.mode === 'high' ? 'low' : 'auto');
    return this.mode;
  }

  // Call once per frame with dt seconds. Returns true when level changed.
  update(dt) {
    if (this.mode !== 'auto' || dt <= 0) return false;
    if (this._cooldown > 0) { this._cooldown -= dt; }
    this._frames++; this._time += dt;
    if (this._time < 2.0) return false;               // 2s measurement window
    const fps = this._frames / this._time;
    this._frames = 0; this._time = 0;
    if (this._cooldown > 0) return false;

    if (fps < 27 && this.level > 0) {
      if (++this._lowStreak >= 2) {                    // sag for 2 windows (~4s)
        this.level--; this._lowStreak = 0; this._highStreak = 0;
        this._cooldown = 4; this._emit(); return true;
      }
    } else if (fps > 55 && this.level < 2) {
      if (++this._highStreak >= 5) {                    // healthy for ~10s
        this.level++; this._highStreak = 0; this._lowStreak = 0;
        this._cooldown = 4; this._emit(); return true;
      }
    } else {
      this._lowStreak = 0; this._highStreak = 0;
    }
    return false;
  }
}
