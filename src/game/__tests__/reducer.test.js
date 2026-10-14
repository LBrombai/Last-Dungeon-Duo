import { expect, test } from "vitest";
import { advanceClock, resetGame, startGame } from "../actions.js";
import { reduce } from "../reducer.js";

function freeze(value) {
  Object.freeze(value);
  for (const child of Object.values(value))
    if (child && typeof child === "object") freeze(child);
  return value;
}
test("start carries seed and timestamp and resets clock", () => {
  const state = reduce(null, startGame(42, "2026-10-13T00:00:00Z"));
  expect(state.meta.seed).toBe(42);
  expect(state.meta.createdAt).toBe("2026-10-13T00:00:00Z");
  expect(state.clock).toBe(0);
});
test("clock advances without mutating deeply frozen state", () => {
  const state = freeze(reduce(null, startGame(42, null)));
  const updated = reduce(state, advanceClock(3));
  expect(updated.clock).toBe(3);
  expect(state.clock).toBe(0);
  expect(updated).not.toBe(state);
});
test("unknown action preserves reference, including no game", () => {
  const state = reduce(null, startGame(0, null));
  expect(reduce(state, { type: "unknown" })).toBe(state);
  expect(reduce(null, { type: "unknown" })).toBeNull();
});
test("reset clears the game", () => {
  expect(reduce(reduce(null, startGame(1, null)), resetGame())).toBeNull();
});
test("clock ignores absent game or invalid amounts", () => {
  const state = reduce(null, startGame(1, null));
  for (const amount of [-1, NaN, Infinity])
    expect(reduce(state, advanceClock(amount))).toBe(state);
  expect(reduce(null, advanceClock(1))).toBeNull();
});
