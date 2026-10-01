# CITY DRIVER 🚗💨

Open-world 3D driving game for mobile browsers. Built with Three.js — no app store, just open the URL and drive.

**Play:** https://city-driver.vercel.app *(after Vercel import — see Deploy)*

## What's in the game

- **Free roam** — drive a full 3D city: 5×5 blocks, 82 buildings, streetlights, trees, day lighting with follow-shadows
- **6 driveable cars** — Falcon S (sports), Vortex GT (supercar), Brute 500 (muscle), Ranger XLT (pickup), Titan SUV, Ghost R (track). All procedurally modeled in code, distinct handling/top speed
- **Arcade physics** — acceleration, braking, speed-sensitive steering, handbrake drifts, nitro boost
- **Garage** — upgrade engine, turbo, tires, suspension, nitro (5 levels each), paint shop (8 colors), 3 wheel styles. Upgrades change real stats. Progress saved in localStorage
- **Drag racing** — quarter-mile strip, Christmas-tree lights, reaction-time launch, 5-gear shift-timing minigame, AI opponent, cash payouts
- **Multiplayer** — see other players driving in the same city (Socket.io relay, optional)
- **Touch controls** — steer/gas/brake/nitro/handbrake buttons; keyboard on desktop (WASD, Space, Shift)

## Run locally

```bash
# game client — any static server
npx serve .
# → http://localhost:3000

# multiplayer relay (optional)
cd server && npm install && npm start
# → set MP_SERVER_URL in js/config.js to the relay URL
```

## Deploy

- **Game client:** Vercel → Import `jaykk99/city-driver` → Deploy (pure static, zero config)
- **Multiplayer relay:** Render → New Web Service → point at this repo (`render.yaml` auto-configures) → copy URL into `js/config.js` → redeploy client

Without the relay URL the game runs fully solo — multiplayer is purely additive.

## Tech

Three.js 0.160 (CDN), vanilla JS modules, WebAudio procedural engine/skid sounds, InstancedMesh city (~12 draw calls), 30fps mobile target. No external 3D models or audio assets — everything is generated in code.

## Phase 2 (planned)

On-foot mode, GTA-style: walk around the city, enter/exit cars, guns. Not built yet.
