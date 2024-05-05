"use client";

import { useState, useEffect } from "react";
import Icon from "./Icon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(""); // Set initial state to null

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(localTheme || systemPreference);
  }, []);

  useEffect(() => {
    if (theme) {
      // Only add classes if theme is not null
      document.body.classList.remove(theme === "light" ? "dark" : "light");
      document.body.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  if (!theme) return null; // Or render a loader/spinner

  return (
    <span
      role="button"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer expanding-underline"
    >
      <Icon name={theme === "light" ? "moon" : "sun"} />
    </span>
  );
}
