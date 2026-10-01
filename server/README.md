# CITY DRIVER — Multiplayer Relay

Single-room socket.io relay for CITY DRIVER. The game client is hosted
separately as static files; this service only brokers player positions.
No persistence, no auth, no game logic.

## Protocol

| Direction | Event | Payload |
|---|---|---|
| client → server | `hello` | `{ carId, color, name }` |
| server → client | `welcome` | `{ id }` (your socket id) |
| server → client | `players` | `[{ id, carId, color, name }]` (roster, sent on join) |
| server → room | `join` | `{ id, carId, color, name }` |
| client → server | `pos` | `{ x, z, heading, speed }` (volatile broadcast, 10 Hz) |
| server → room | `pos` | `{ id, x, z, heading, speed }` (volatile) |
| server → room | `left` | `{ id }` (on disconnect) |
| server → client | `full` | `{ cap }` (room at 20 players, connection closed) |

Also: `GET /health` → `{ ok, service, room, players, cap }`.

## Deploy to Render (3 clicks)

1. **New → Web Service** in the Render dashboard, point it at this repo (use the
   `server/` folder — or deploy this folder as its own repo). Render reads
   `render.yaml` automatically and fills in the Node runtime, free plan,
   `npm install` build and `npm start` start commands.
2. **Create Web Service** — wait for the first deploy to finish.
3. Copy the service URL (e.g. `https://city-driver-mp.onrender.com`) and set
   it as `MP_SERVER_URL` in the game's `js/config.js`, then redeploy the game
   client.

That's it — the client connects automatically on next load.

## Local dev

```sh
cd server
npm install
npm start        # listens on PORT (default 3001)
```

Hit `http://localhost:3001/health` to confirm it's up.

## Notes

- Room cap is 20 players (`MAX_PLAYERS`); clients render at most 12 nearest remotes.
- Position traffic uses socket.io volatile emits — packet loss degrades to
  slightly choppier remote cars, never errors.
- Free-tier Render services sleep when idle; the client stays fully playable
  solo (`status: 'off'`) while the relay spins back up.
