import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CardGrid from "./components/CardGrid";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isRTL, setIsRTL] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setIsDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleDirection = () => setIsRTL(!isRTL);
  const toggleFavorite = (index) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className={clsx(
        "min-h-screen transition duration-500 font-sans antialiased",
        isDark ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 py-12 space-y-14"
      >
        <Header
          isDark={isDark}
          toggleTheme={toggleTheme}
          toggleDirection={toggleDirection}
          isRTL={isRTL}
        />
        <HeroSection isDark={isDark} />
        <CardGrid
          isDark={isDark}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </motion.div>
    </div>
  );
}
