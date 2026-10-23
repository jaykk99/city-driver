// Wind: one shared, physically based wind field for the whole engine.
//   speed       mean wind at 10 m above ground (m/s), raised by rain / storms / snow
//   direction   compass bearing the wind blows FROM (0 = north/+Z… 90 = east/+X), meteorological style
//   gusts       0..1 how gusty: gust fronts roll across the world downwind, direction wobbles
//   turbulence  0..1 small fast eddies (rotor wash, debris tumbling, smoke curls)
// The field is a log-law boundary layer (calm near the ground, stronger aloft) plus travelling gusts.
// Everything reads from here: vegetation shaders, clouds, rain/snow, particles, props, cars, planes,
// helicopters, boats, the player and wind audio — so they all agree on what the air is doing.
// No three.js dependency (plain numbers / arrays) so it also runs in node for tests and agents.

const WEATHER_MIN = { clear: 0, cloudy: 3, overcast: 5, fog: 0, rain: 7, storm: 17, snow: 6 };
const WEATHER_GUST = { clear: 0, cloudy: 0.1, overcast: 0.15, fog: 0, rain: 0.25, storm: 0.55, snow: 0.2 };
const Z0 = 0.08;                                  // surface roughness length (m): open grass / suburbs
const LOG10 = Math.log((10 + Z0) / Z0);
const D2R = Math.PI / 180;

// smooth 1D value noise (hash-free, deterministic)
function n1(t) { return Math.sin(t) * 0.5 + Math.sin(t * 2.31 + 1.7) * 0.3 + Math.sin(t * 5.13 + 4.1) * 0.2; }

export class Wind {
  constructor() {
    this.speed = 3; this.dirFrom = 225; this.gusts = 0.3; this.turbulence = 0.3; this.weather = 'clear';
    this.time = 0; this.gust = 1; this.wobble = 0;
    this.dx = 0; this.dz = 1;                      // unit vector the wind blows TOWARD
    // shared shader uniforms (arrays work as vec2/vec3 uniforms in three.js)
    this.uniforms = { wTime: { value: 0 }, wStrength: { value: 0.6 }, wDir: { value: [0, 1] }, wGust: { value: 1 } };
    this._apply();
  }
  // env object from the scene settings (windSpeed, windDir, gusts, turbulence, weather)
  setEnv(e = {}) {
    const w = e.weather || 'clear';
    const base = e.windSpeed ?? 3;
    this.weather = w;
    this.speed = Math.max(base, WEATHER_MIN[w] ?? 0);
    this.dirFrom = (e.windDir ?? 225) % 360;
    this.gusts = Math.min(1, Math.max(0, (e.gusts ?? 0.3) + (WEATHER_GUST[w] ?? 0)));
    this.turbulence = Math.min(1, Math.max(0, e.turbulence ?? 0.3));
    this._apply();
  }
  _apply() {
    const a = (this.dirFrom + 180) * D2R + this.wobble;      // blowing toward
    this.dx = Math.sin(a); this.dz = Math.cos(a);
  }
  update(dt) {
    this.time += dt; const t = this.time;
    // global gust envelope (what you feel standing still) and slow direction wobble
    this.gust = 1 + this.gusts * (0.55 * n1(t * 0.35) + 0.35 * Math.max(0, n1(t * 0.9 + 3)));
    this.wobble = this.gusts * 0.25 * n1(t * 0.11 + 7);
    this._apply();
    const u = this.uniforms;
    u.wTime.value = t; u.wGust.value = this.gust; u.wDir.value[0] = this.dx; u.wDir.value[1] = this.dz;
    u.wStrength.value = Math.min(5, (this.speed * this.gust) / 5 + 0.15);
  }
  // mean speed at a height above ground (log-law, capped aloft)
  profile(h) { const z = Math.min(400, Math.max(0.3, h)); return Math.log((z + Z0) / Z0) / LOG10; }
  // gust factor at a world point: gust fronts travel downwind at the mean speed
  gustAt(x, z) {
    if (!this.gusts) return 1;
    const along = (x * this.dx + z * this.dz), across = (-x * this.dz + z * this.dx);
    const s = Math.max(1, this.speed);
    const ph = (along / (s * 6)) - this.time * 0.35 + across * 0.004;
    return 1 + this.gusts * (0.6 * n1(ph * 1.7) + 0.4 * Math.max(0, n1(ph * 3.3 + 2)));
  }
  // wind velocity (m/s) at a world point; h = height above the local ground (defaults to y)
  at(x, y, z, out = { x: 0, y: 0, z: 0 }, h = y) {
    const U = this.speed * this.profile(h) * this.gustAt(x, z);
    let tx = 0, ty = 0, tz = 0;
    if (this.turbulence && U > 0.1) {
      const t = this.time * 2.2, k = this.turbulence * U * 0.18;
      tx = n1(t + x * 0.21 + z * 0.07) * k; tz = n1(t * 1.13 + z * 0.19 + 4) * k; ty = n1(t * 0.9 + (x + z) * 0.13 + 9) * k * 0.5;
    }
    out.x = this.dx * U + tx; out.y = ty; out.z = this.dz * U + tz;
    return out;
  }
  // sea state multiplier for swell height (calm 0.6 → storm ~2.2)
  get sea() { return Math.min(2.4, 0.6 + this.speed / 11); }
  // aerodynamic drag force on something moving at velocity v with drag area cdA (m²): ½ρ·CdA·|vrel|·vrel
  drag(p, v, cdA, out = { x: 0, y: 0, z: 0 }, h) {
    const w = this.at(p.x, p.y, p.z, out, h);
    const rx = w.x - v.x, ry = w.y - v.y, rz = w.z - v.z; const m = Math.hypot(rx, ry, rz); const k = 0.5 * 1.225 * cdA * m;
    out.x = rx * k; out.y = ry * k; out.z = rz * k; return out;
  }
  // Beaufort description for the UI / agents
  get beaufort() { const s = this.speed; const b = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7]; let n = 0; while (n < b.length && s >= b[n]) n++; return { force: n, label: ['Calm', 'Light air', 'Light breeze', 'Gentle breeze', 'Moderate breeze', 'Fresh breeze', 'Strong breeze', 'Near gale', 'Gale', 'Strong gale', 'Storm', 'Violent storm', 'Hurricane'][n] }; }
}

export const wind = new Wind();
