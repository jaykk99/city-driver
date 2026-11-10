Live: https://jaykk99.github.io/city-driver/

# CITY DRIVER 🚗💨

Open-world 3D driving game for mobile browsers. Built with Three.js — no app store, just open the URL and drive.

**Play:** https://jaykk99.github.io/city-driver/

## What's in the game

- **Forge 3D models** — every car (yours, traffic, police, drag rivals, other players) is built by the
  [Forge 3D](https://github.com/jaykk99/forge3d) car designer: lofted clearcoat bodies with real wheel arches,
  glass, hinged hood, interior, lights and Forge rims/tires, generated from a written description per car
  (`js/forgecars.js`, Forge code vendored in `js/forge/`). Parked cars use the same Forge silhouettes,
  and the street/park trees are Forge's elm, birch and pine kit. Add `?classic` to the URL for the old models.

- **Hero cars (Forge 3D, high detail)** — five new cars built by Forge from design numbers: **Brawler GT** (V8 muscle
  fastback), **Kaze RS** (twin-turbo straight-six coupe), **Vanta V10** (mid-engine supercar), **Sidewinder R4** (AWD turbo
  rally hatch) and **Badlands Prerunner** (long-travel desert truck). Every Forge car now gets a high-detail pass
  (`js/forge/builders/cardetail.js`): projector headlight clusters with LED strips, honeycomb grilles and intakes,
  light-pipe tail lights that flare when you brake, diffusers, side skirts, door shut lines, belt moldings, wipers,
  fuel doors, antennas and real plates — all computed from each body's own shell
- **People** — sculpted, jointed characters (`js/character.js`): shaped torso and limbs, faces, hands, sneakers; knees and
  elbows bend when they walk and run; aiming tracks up/down; reaction poses and a buckle-and-fall death
- **Free aim** — no auto-aim. On foot, drag anywhere on the screen (or move the mouse — click the game to lock it) to
  swing the camera any way, including up and down; you walk where the camera points, and the gun hits exactly what's
  under the crosshair. Head shots do extra damage
- **Pedestrians act like people** — gunfire makes them flinch and look, then each one runs, drops and covers their head,
  or freezes with their hands up; point a gun at someone and they put their hands up and back away; the wounded clutch
  their side and limp off
- **Sound** — per-engine voices (crossplane V8 lope, turbo straight-six whistle + blow-off, V10 scream, rally anti-lag
  bangs), gunshots with a crack and a street echo, screams, footsteps, crash crunch, city ambience and birds
- **Free roam** — drive a full 3D city: 5×5 blocks, 82 buildings, streetlights, trees, day lighting with follow-shadows
- **Traffic that panics** — working traffic lights and AI drivers that stop, keep gaps and brake for you — until gunfire goes off nearby, when every driver in earshot floors it and runs the red lights to get away
- **16 driveable cars** — from the Apex S starter to the Aurora Hyper, plus the five hero cars above. All modeled in code by Forge, distinct handling/top speed
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
- **Paint the Town Red** — tap 🖌️ (or press P): your wheels lay a trail of red paint and every building you drive past floods red. A TOWN RED meter tracks streets + buildings painted, you earn cash for every block and big bonuses at 10/25/50/75/100%, and your paint job is saved. 🧽 WASH THE TOWN in the pause menu starts over
- **🍺 PAINT THE TOWN RED · Bar Brawl** (`brawl.html`, button on the main menu) — a first-person voxel brawler in the style of Paint the Town Red.
  Six scenarios: **Biker Bar, Disco, Prison, Western Saloon, Pirate Cove** (each ends with a boss — Big Mike, the Disco King, the Warden, the Sheriff, Captain Redbeard) and an endless-wave **Arena**.
  Everyone is built from voxels and comes apart: blades take arms, legs and heads off, sledgehammers and dynamite pulp bodies into cubes, blood paints the floors and walls, corpses ragdoll and can be mutilated, kicked bodies fly across the room and bowl people over.
  **39 weapons** — anything not nailed down: bottles (that break into broken bottles), mugs, pool cues, stools, chairs, bats, frying pans, knives, cleavers, machetes, fire axes, sledgehammers, katanas, cutlasses, spears, pitchforks, guitars, weight plates, an anchor, plus revolvers, double-barrels, flintlocks, lever rifles, a tommy gun, dynamite, throwing knives and cannonballs. Throw anything. Block, kick, and fill the RAGE bar for super-strength.
  Cash you earn in the brawl goes into your City Driver wallet. Touch controls on phones (left stick, drag to look, fight buttons); WASD + mouse on PC (`js/brawl/`)
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
- **Touch controls** — steer/gas/brake/nitro/handbrake in the car; joystick/fire/run/weapon on foot. Desktop: WASD, Space (handbrake/fire), Shift (nitro/run), E (get in/out, shop), Q (switch gun); on foot click the game to grab the mouse — mouse looks, left click fires, right click aims, Esc releases

## Run locally

```bash
# game client — any static server
npx serve .
# → http://localhost:3000

# after editing anything in js/, rebuild the self-contained bundle:
npm install   # once (esbuild, dev only)
npm run build # → js/bundle.js (three.js + game, zero CDN requests)
```
> Vercel and the Pages workflow run `npm run build` on every deploy, so `js/bundle.js` is always fresh.
> `index.html` loads only `js/bundle.js` — the game makes **no CDN requests**,
> so a slow/down CDN can never hang the loading screen.

## Multiplayer

Runs over Supabase Realtime broadcast on a public channel (`js/net.js`, ~100 lines, no library).
Settings live in `js/config.js` (`MP_URL`, `MP_KEY` = the public anon key, `MP_TOPIC`).
Set `MP_URL = ''` to make the game fully solo.

## Deploy

- **Game client:** GitHub Pages workflow (`.github/`, deploys `master` automatically)

## Tech

Three.js 0.160 (bundled, no CDN), vanilla JS modules, WebAudio procedural engine/skid sounds, InstancedMesh city (~12 draw calls), 30fps mobile target. No external 3D models or audio assets — everything is generated in code.

## Next up (ideas)

Pedestrians and traffic, stealing other cars, wanted level / police.
