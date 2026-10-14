import { expect, test } from "vitest";
import { createInitialState } from "../state.js";

test("initial state is JSON serializable without loss", () => {
  const state = createInitialState();
  expect(JSON.parse(JSON.stringify(state))).toEqual(state);
});
test("initial states have independent nested containers", () => {
  expect(createInitialState().roster.byId).not.toBe(
    createInitialState().roster.byId,
  );
});
