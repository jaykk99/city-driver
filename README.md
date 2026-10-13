# CITY DRIVER 🚗💨

Open-world 3D driving game for mobile browsers. Built with Three.js — no app store, just open the URL and drive.

**Play:** https://jaykk99.github.io/city-driver/

## What's in the game

- **Free roam** — drive a full 3D city: 5×5 blocks, 82 buildings, streetlights, trees, day lighting with follow-shadows
- **6 driveable cars** — Falcon S (sports), Vortex GT (supercar), Brute 500 (muscle), Ranger XLT (pickup), Titan SUV, Ghost R (track). All procedurally modeled in code, distinct handling/top speed
- **Arcade physics** — acceleration, braking, speed-sensitive steering, handbrake drifts, nitro boost
- **Garage** — upgrade engine, turbo, tires, suspension, nitro (5 levels each), paint shop (8 colors), 3 wheel styles. Upgrades change real stats. Progress saved in localStorage
- **Huge map** — 3.4 km across: downtown Winnipeg in the middle of suburbs, the Perimeter Highway, farmland, lakes, forest, an airport and the off-road park. Tap the radar (or press M) for the full map + GPS waypoint
- **Water & mud** — drive into rivers, lakes and puddles (cars sink, spray, wakes, splash sounds; wade on foot); mud flies off the wheels and cakes your car until you rinse it in water
- **Custom maps** — 🗺️ CUSTOM MAPS on the menu: start from a template (blank, mud bog, island, street circuit, drag strip), pick a size and theme (summer / desert / winter / night), paint roads, dirt, mud, sand, snow, water, houses, shops, towers, rocks, trees, cash and a spawn, then test-drive it. Share maps with a copy-paste code
- **Tuning shop (garage)** — parts-based builds, per car:
  - *Performance:* engine swaps (turbo I4 → V6/V8 → 9.4L big block → V10/V12 → 1,100 hp Pro Mod), small/big/twin turbos (spool lag) or roots/centrifugal blowers, nitrous 50–500 shot + bottle size, ECU/intake/exhaust stages, weight reduction, close-ratio or drag gearboxes, street/sport/drag-slick/all-terrain/mud tires, brakes
  - *Off-road:* lowered → 6" lift, 33"–40" tires (bigger tires need more lift), 4x4, bull bar, winch, snorkel, roof rack, LED light bar, fender flares, skid plates, drag wing, wheelie bars — all shown on the car
  - *Tune:* boost PSI, final drive, wheel offset sliders · *Dyno:* HP/torque curve, 0-60, 60 ft, ¼-mile ET + trap
  - Power vs traction is real: too much power on street tires spins; turbos lag, blowers don't; mud/grass/dirt slow cars that aren't built for it (Prairie Off-Road Park west of downtown)
- **Drag racing** — quarter-mile strip, Christmas-tree lights, reaction-time launch, 5-gear shift-timing minigame, AI opponent, cash payouts
- **Live multiplayer** — everyone who opens the game shares one city over Supabase Realtime (no game server). Other players show up as their car or on foot with their skin, name tag and gun, and you see their bullets fly. Online count on the menu + HUD, players on the minimap
- **Free skin editor** — any car paint color, rims, racing stripes, underglow, window tint; driver shirt/pants/skin tone/hair/hat (incl. crown + helmet) and your online name. All free
- **Tutorial mission** — drive, drift, get out, enter a building, leave it. Pays **$100,000** once, then you pick **any car free**
- **Enter any building** — every building has a lit front door; walk up and tap ENTER BUILDING. Lobbies, apartments, offices and diners, each furnished, with an EXIT pad
- **Visible bullets** — glowing slugs with tracer trails that fly to where they hit
- **On foot** — tap GET OUT to leave your car and walk the city (joystick + run), GET IN to drive again
- **Stores** — LOCK & LOAD gun store (4 guns + ammo), THREADZ clothing (shirts, hats), AUTO SHOP (opens the garage). Walk into the glowing ring at the door
- **Shooting range** — behind the gun store; knock down targets for cash
- **Minimap** — north-up radar with store markers and your parked car
- **Landscape on phones** — goes fullscreen + locks landscape where the browser allows (Android); otherwise the game rotates itself so it always plays sideways
- **Touch controls** — steer/gas/brake/nitro/handbrake in the car; joystick/fire/run/weapon on foot. Desktop: WASD, Space (handbrake/fire), Shift (nitro/run), E (get in/out, shop), Q (switch gun)

## Run locally

```bash
# game client — any static server
npx serve .
# → http://localhost:3000

# after editing anything in js/, rebuild the self-contained bundle:
npm install   # once (esbuild, dev only)
npm run build # → js/bundle.js (three.js + game, zero CDN requests)
```
> `index.html` loads only `js/bundle.js` — the game makes **no CDN requests**,
> so a slow/down CDN can never hang the loading screen.

## Multiplayer

Runs over Supabase Realtime broadcast on a public channel (`js/net.js`, ~100 lines, no library).
Settings live in `js/config.js` (`MP_URL`, `MP_KEY` = the public anon key, `MP_TOPIC`).
Set `MP_URL = ''` to make the game fully solo.

## Deploy

- **Game client:** Vercel → Import `jaykk99/city-driver` → Deploy (pure static, zero config)

## Tech

Three.js 0.160 (bundled, no CDN), vanilla JS modules, WebAudio procedural engine/skid sounds, InstancedMesh city (~12 draw calls), 30fps mobile target. No external 3D models or audio assets — everything is generated in code.

## Next up (ideas)

Pedestrians and traffic, stealing other cars, wanted level / police.
