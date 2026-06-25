"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;
    const root = document.documentElement;
    const resolve = () => {
      if (root.classList.contains("dark")) return true;
      if (root.classList.contains("light")) return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };
    const frame = window.requestAnimationFrame(() => {
      if (!cancelled) setDark(resolve());
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = !(dark ?? false);
    root.classList.remove("dark", "light");
    root.classList.add(next ? "dark" : "light");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "切換為亮色主題" : "切換為深色主題"}
      className="-mr-1.5 grid h-11 w-11 place-items-center rounded-full text-ink-soft transition-colors hover:bg-cream-2 hover:text-forest"
    >
      {/* 未掛載前保持空白,避免 hydration 不一致 */}
      {dark !== null && (dark ? <Sun /> : <Moon />)}
    </button>
  );
}

function Moon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sun() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
