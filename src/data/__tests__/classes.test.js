import { expect, test } from "vitest";
import { classes } from "../classes.js";

test("four classes have valid unique IDs and required fields", () => {
  const ids = [];
  expect(Object.keys(classes)).toHaveLength(4);
  for (const [key, value] of Object.entries(classes)) {
    expect(value.id).toBe(key);
    expect(value.id).toMatch(/^[a-z]+$/);
    expect(typeof value.name).toBe("string");
    expect(value.name.length).toBeGreaterThan(0);
    expect(value.baseHp).toBeGreaterThan(0);
    expect(Array.isArray(value.abilities)).toBe(true);
    ids.push(value.id);
  }
  expect(new Set(ids).size).toBe(ids.length);
});
