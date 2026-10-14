import { create } from "zustand";
import { reduce } from "../game/reducer.js";
export const useGameStore = create((set) => ({
  game: null,
  dispatch: (action) => set((state) => ({ game: reduce(state.game, action) })),
}));
