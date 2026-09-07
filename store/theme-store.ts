"use client";

import { create } from "zustand";

type ThemeState = {
  isRetroMode: boolean;
  toggleRetroMode: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  isRetroMode: false,
  toggleRetroMode: () => set((state) => ({ isRetroMode: !state.isRetroMode }))
}));
