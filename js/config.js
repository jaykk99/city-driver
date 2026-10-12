// Multiplayer configuration for CITY DRIVER.
// Online play runs over Supabase Realtime "broadcast" (no game server needed).
// The key below is Supabase's public anon key — it is designed to be shipped
// in browser code. Set MP_URL to '' to make the game fully solo.

export const MP_URL = 'https://fhbqxujlnqlmzvulrdxt.supabase.co';
export const MP_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYnF4dWpsbnFsbXp2dWxyZHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MTc0NDQsImV4cCI6MjEwMzE5MzQ0NH0.ThFmY_FXQlnaaI8GNLz9xSHATOacM9iOb8u0G0WFJ2w';
export const MP_TOPIC = 'city-driver-v2';
