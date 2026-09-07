"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useThemeStore } from "../store/theme-store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isRetroMode = useThemeStore((state) => state.isRetroMode);
  const toggleRetroMode = useThemeStore((state) => state.toggleRetroMode);
  const [showFlash, setShowFlash] = useState(false);
  const isFirstRender = useRef(true);

  /* ── keyboard listener: ~ key ── */
  const handleToggle = useCallback(() => {
    setShowFlash(true);
    toggleRetroMode();
  }, [toggleRetroMode]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "~" || (event.key === "`" && event.shiftKey)) {
        event.preventDefault();
        handleToggle();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleToggle]);

  /* ── sync data attribute to <html> ── */
  useEffect(() => {
    document.documentElement.dataset.retro = String(isRetroMode);
  }, [isRetroMode]);

  /* ── CRT flash lifecycle ── */
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (showFlash) {
      const timeout = setTimeout(() => setShowFlash(false), 350);
      return () => clearTimeout(timeout);
    }
  }, [showFlash]);

  return (
    <>
      {children}

      {/* CRT flash overlay — brief white flicker simulating an old monitor */}
      {showFlash && (
        <div
          className="crt-flash fixed inset-0 z-[9999] bg-white"
          aria-hidden="true"
        />
      )}
    </>
  );
}

export function RetroToggleButton() {
  const isRetroMode = useThemeStore((state) => state.isRetroMode);

  return (
    <button
      onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "~" }))}
      className="text-right text-xs text-zinc-600 transition-colors hover:text-white sm:text-left"
    >
      {isRetroMode ? "Turn off retro mode" : "Press ~ (or tap here) for a surprise"}
    </button>
  );
}
