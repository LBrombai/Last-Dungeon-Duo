// Mulberry32: integer state, reproducible even when the seed is zero.
export function next(state) {
  const rngState = ((state >>> 0) + 0x6d2b79f5) >>> 0;
  let value = rngState;
  value = Math.imul(value ^ (value >>> 15), value | 1);
  value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
  return { value: ((value ^ (value >>> 14)) >>> 0) / 4294967296, rngState };
}
