// CITY DRIVER multiplayer relay.
// The game client is static and hosted elsewhere — this server only brokers
// position updates between players in a single "city" room. No persistence,
// no auth, no game logic. Run with: npm start (honors PORT env).
import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const PORT = process.env.PORT || 3001;
const ROOM = 'city';
const MAX_PLAYERS = 20;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

// socket.id -> { id, carId, color, name }
const players = new Map();

app.get('/health', (_req, res) => {
  res.json({ ok: true, service: 'city-driver-mp', room: ROOM, players: players.size, cap: MAX_PLAYERS });
});

io.on('connection', (socket) => {
  // Client announces itself: { carId, color, name }.
  socket.on('hello', (data = {}) => {
    const size = io.sockets.adapter.rooms.get(ROOM)?.size ?? 0;
    if (size >= MAX_PLAYERS) {
      socket.emit('full', { cap: MAX_PLAYERS });
      socket.disconnect(true);
      return;
    }
    const info = {
      id: socket.id,
      carId: String(data.carId || 'falcon'),
      color: Number.isFinite(data.color) ? data.color : null,
      name: String(data.name || 'Driver').slice(0, 24),
    };
    socket.join(ROOM);
    players.set(socket.id, info);
    socket.emit('welcome', { id: socket.id });
    socket.emit('players', [...players.values()]); // roster for the newcomer
    socket.to(ROOM).emit('join', info);             // tell everyone else
  });

  // Unreliable position broadcast to the room (10 Hz per client).
  socket.on('pos', (data = {}) => {
    if (!players.has(socket.id)) return; // must say hello first
    socket.to(ROOM).volatile.emit('pos', {
      id: socket.id,
      x: +data.x || 0,
      z: +data.z || 0,
      heading: +data.heading || 0,
      speed: +data.speed || 0,
    });
  });

  socket.on('disconnect', () => {
    if (players.delete(socket.id)) {
      socket.to(ROOM).emit('left', { id: socket.id });
    }
  });
});

httpServer.listen(PORT, () => {
  console.log(`[city-driver-mp] relay up on :${PORT} — room "${ROOM}", cap ${MAX_PLAYERS}`);
});
