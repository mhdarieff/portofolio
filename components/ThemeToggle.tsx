"use client"; // Wajib ada karena kita menggunakan state interaktif
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Cek apakah sebelumnya user sudah memilih dark mode
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 ml-4 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-[#E5D5B5] hover:scale-110 transition-all duration-300 shadow-sm"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}