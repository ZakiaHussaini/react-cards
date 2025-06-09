import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function HeroSection({ isDark }) {
  return (
    <section className="text-center space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-6xl font-extrabold tracking-tight leading-tight"
      >
        <span className={clsx("", isDark ? "text-white" : "text-zinc-900")}>LOREM </span>
        <span className="bg-gradient-to-r from-[#FF9B21] to-[#FF5C00] bg-clip-text text-transparent">IPSUM</span>
        <br />
        <span className={clsx("", isDark ? "text-white" : "text-zinc-900")}>DOLOR SIT AMET</span>
      </motion.h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="mt-4 px-6 py-3 text-white font-semibold rounded-full bg-gradient-to-r from-[#FF9B21] to-[#FF5C00] shadow hover:opacity-90"
      >
        Explore Now
      </motion.button>
    </section>
  );
}
