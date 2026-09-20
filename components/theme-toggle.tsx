"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Writes data-theme on <html>. No React state: the icons swap via the `dark:`
 * variant, so there is nothing to hydrate and nothing to mismatch.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      aria-label="Toggle colour theme"
      onClick={() => {
        const root = document.documentElement;
        const isDark =
          root.dataset.theme === "dark" ||
          (root.dataset.theme !== "light" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches);
        const next = isDark ? "light" : "dark";
        root.dataset.theme = next;
        try {
          localStorage.setItem("theme", next);
        } catch {
          // Storage can throw in private mode; the toggle still works for this page view.
        }
      }}
      className={className}
    >
      <Moon className="size-[18px] dark:hidden" />
      <Sun className="hidden size-[18px] dark:block" />
    </button>
  );
}
