// Tests for the fuel system: a car used to run forever on an empty tank
// (there was no fuel model at all). Driving now burns fuel, an empty tank
// stalls, stations refill cheap, and the fuel truck rescues a stalled car.
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  FuelTank, fuelUsed, nearestStation, STATIONS, STATION_RADIUS,
  FUEL_MAX, FUEL_LOW, STATION_PRICE, DELIVERY_PRICE, DELIVERY_UNITS,
} from '../js/fuel.js';

describe('fuel burn', () => {
  it('starts full and burns more per metre the faster you go', () => {
    const t = new FuelTank();
    assert.equal(t.level, FUEL_MAX);
    const slow = t.consume(10, 10, false);
    const fast = new FuelTank().consume(10, 50, false);
    assert.ok(slow > 0, 'driving must burn fuel');
    assert.ok(fast / 500 > slow / 100, 'fast driving must cost more per metre');
  });
  it('nitro burns extra, idling burns only a trickle', () => {
    const plain = new FuelTank().consume(10, 30, false);
    const nitro = new FuelTank().consume(10, 30, true);
    const idle = new FuelTank().consume(10, 0, false);
    assert.ok(nitro > plain, 'nitro must cost extra');
    assert.ok(idle > 0 && idle < plain, 'idling must sip, not gulp');
  });
  it('never goes below zero and reports empty, not negative', () => {
    const t = new FuelTank();
    const used = t.consume(1e6, 60, true);
    assert.equal(t.level, 0);
    assert.equal(t.empty, true);
    assert.equal(used, FUEL_MAX);
    assert.equal(t.consume(10, 60, false), 0);
  });
  it('low is 20 and under but not empty, full is 100', () => {
    const t = new FuelTank();
    t.level = FUEL_LOW + 1;
    assert.equal(t.low, false);
    t.level = FUEL_LOW;
    assert.equal(t.low, true);
    t.level = 0;
    assert.equal(t.low, false, 'empty is not low, it is stalled');
    assert.equal(new FuelTank().full, true);
  });
  it('fuelUsed is pure: same inputs, same burn, no tank needed', () => {
    assert.equal(fuelUsed(10, 30, false), fuelUsed(10, 30, false));
    assert.equal(fuelUsed(0, 30, false), 0);
    assert.equal(fuelUsed(-5, 30, false), 0);
  });
});

describe('refuelling', () => {
  it('station fill tops up to full and charges only for what was added', () => {
    const t = new FuelTank();
    t.level = 40;
    const f = t.fill();
    assert.equal(f.added, 60);
    assert.equal(f.cost, 60 * STATION_PRICE);
    assert.equal(t.level, FUEL_MAX);
    assert.equal(t.fillCost(), 0);
  });
  it('a full tank costs nothing to fill', () => {
    const t = new FuelTank();
    assert.deepEqual(t.fill(), { added: 0, cost: 0 });
  });
  it('fuel-truck delivery is 25 units at the delivery price, capped at full', () => {
    const t = new FuelTank();
    t.level = 0;
    const d = t.deliver();
    assert.equal(d.added, DELIVERY_UNITS);
    assert.equal(d.cost, DELIVERY_UNITS * DELIVERY_PRICE);
    assert.equal(t.level, DELIVERY_UNITS);
    t.level = 90;
    const capped = t.deliver();
    assert.equal(capped.added, 10);
    assert.equal(capped.cost, 10 * DELIVERY_PRICE);
    assert.equal(t.level, FUEL_MAX);
  });
  it('the truck costs more per unit than a station', () => {
    assert.ok(DELIVERY_PRICE > STATION_PRICE, 'stations must stay the better deal');
  });
});

describe('stations', () => {
  it('has two stations and nearestStation picks the closer one', () => {
    assert.equal(STATIONS.length, 2);
    const nearMain = nearestStation(185, -37);
    assert.equal(nearMain.station.name, 'Portage & Main');
    const nearYork = nearestStation(-185, 111);
    assert.equal(nearYork.station.name, 'Arlington & York');
  });
  it('each forecourt sits within its radius of both of its roads', () => {
    const pm = STATIONS[0];
    assert.ok(Math.abs(pm.x - 185) <= STATION_RADIUS, 'Portage & Main must reach Main St');
    assert.ok(Math.abs(pm.z - (-37)) <= STATION_RADIUS, 'Portage & Main must reach Portage Ave');
    const ay = STATIONS[1];
    assert.ok(Math.abs(ay.x - (-185)) <= STATION_RADIUS, 'Arlington & York must reach Arlington St');
    assert.ok(Math.abs(ay.z - 111) <= STATION_RADIUS, 'Arlington & York must reach York Ave');
  });
});
