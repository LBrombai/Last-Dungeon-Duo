import { create } from "zustand";
export const useUiStore = create((set) => ({
  screen: "menu",
  goTo: (screen) => set({ screen }),
}));
