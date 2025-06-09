import React from "react";
import { Sun, Moon } from "lucide-react";

export default function Header({ isDark, toggleTheme, toggleDirection, isRTL }) {
  return (
    <div className="flex justify-end gap-4">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      <button
        onClick={toggleDirection}
        className="px-4 py-2 rounded-full border text-sm font-semibold border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        {isRTL ? "LTR" : "RTL"}
      </button>
    </div>
  );
}
