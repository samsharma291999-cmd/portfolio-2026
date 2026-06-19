"use client";

import { useRef } from "react";
import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { theme, applyTheme } = useTheme();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    const next = theme === "dark" ? "light" : "dark";

    if (!("startViewTransition" in document)) {
      applyTheme(next);
      return;
    }

    const btn = btnRef.current;
    const rect = btn?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;
    const maxR = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    document.documentElement.style.setProperty("--theme-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-y", `${y}px`);
    document.documentElement.style.setProperty("--theme-r", `${maxR}px`);
    // @ts-expect-error — View Transitions API not yet in TS lib
    document.startViewTransition(() => applyTheme(next));
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={handleToggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-8 w-8 items-center justify-center rounded-full text-ink-2 transition-colors duration-[var(--duration-micro)] hover:text-ink"
    >
      {theme === "dark" ? (
        /* Sun — shown in dark mode to switch to light */
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.05 3.05l1.06 1.06M11.89 11.89l1.06 1.06M11.89 4.11l1.06-1.06M3.05 12.95l1.06-1.06" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      ) : (
        /* Moon — shown in light mode to switch to dark */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}
