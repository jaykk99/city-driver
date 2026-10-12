# CITY DRIVER 🚗💨

Open-world 3D driving game for mobile browsers. Built with Three.js — no app store, just open the URL and drive.

**Play:** https://jaykk99.github.io/city-driver/

## What's in the game

- **Free roam** — drive a full 3D city: 5×5 blocks, 82 buildings, streetlights, trees, day lighting with follow-shadows
- **6 driveable cars** — Falcon S (sports), Vortex GT (supercar), Brute 500 (muscle), Ranger XLT (pickup), Titan SUV, Ghost R (track). All procedurally modeled in code, distinct handling/top speed
- **Arcade physics** — acceleration, braking, speed-sensitive steering, handbrake drifts, nitro boost
- **Garage** — upgrade engine, turbo, tires, suspension, nitro (5 levels each), paint shop (8 colors), 3 wheel styles. Upgrades change real stats. Progress saved in localStorage
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
