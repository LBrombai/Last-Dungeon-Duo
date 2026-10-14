import { expect, test } from "vitest";
import { next } from "../rng.js";

function sequence(seed) {
  const values = [];
  let state = seed;
  for (let i = 0; i < 1000; i++) {
    const result = next(state);
    values.push(result.value);
    state = result.rngState;
  }
  return values;
}
test("same seed produces the same sequence", () => {
  expect(sequence(0)).toEqual(sequence(0));
  expect(sequence(42)).toEqual(sequence(42));
});
test("different seeds produce different sequences", () => {
  expect(sequence(1)).not.toEqual(sequence(2));
});
test("values are in the half-open unit interval", () => {
  for (const seed of [0, 42, 4294967295])
    for (const value of sequence(seed)) {
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(1);
    }
});
