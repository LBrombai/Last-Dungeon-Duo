import { config } from "../data/index.js";
export function createInitialState({ seed = 0, createdAt = null } = {}) {
  return {
    meta: { saveVersion: config.saveVersion, seed, rngState: seed, createdAt },
    clock: 0,
    city: { gold: 0, stock: {} },
    roster: { byId: {}, reserve: [], cemetery: [] },
    party: { front: [], back: [] },
    tower: { floors: {}, circles: {}, corpses: [] },
    expedition: null,
  };
}
