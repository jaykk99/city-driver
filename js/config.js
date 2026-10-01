// Multiplayer configuration for CITY DRIVER.
// The game runs 100% solo while MP_SERVER_URL is '' (or the server is unreachable).

// Set this to your deployed relay URL to enable online play, e.g.
//   export const MP_SERVER_URL = 'https://city-driver-mp.onrender.com';
export const MP_SERVER_URL = '';

// Random display name shown above your car.
export const MP_NAME = 'Driver' + Math.floor(1000 + Math.random() * 9000);
