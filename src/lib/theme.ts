import { useCallback, useEffect, useState } from "react";

export type ThemeMode = "day" | "night";

const KEY = "doggmatch.theme";

export function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", mode === "night");
  document.documentElement.style.colorScheme = mode === "night" ? "dark" : "light";
}

function readStored(): ThemeMode | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "day" || v === "night" ? v : null;
  } catch {
    return null;
  }
}

/** Day / night mode, remembered on this device. */
export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>("day");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readStored();
    const initial: ThemeMode =
      stored ??
      (typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "night"
        : "day");
    setMode(initial);
    applyTheme(initial);
    setReady(true);
  }, []);

  const set = useCallback((next: ThemeMode) => {
    setMode(next);
    applyTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {
      /* private mode — the choice just won't stick */
    }
  }, []);

  const toggle = useCallback(() => set(mode === "day" ? "night" : "day"), [mode, set]);

  return { mode, set, toggle, ready };
}
