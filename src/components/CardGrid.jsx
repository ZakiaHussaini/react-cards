import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const cards = Array.from({ length: 6 }).map((_, i) => ({
  title: `Lorem Dolor Sit Amet`,
  subtitle: "Lorem Dolor Sit Amet",
  price: "$114",
  image: `https://picsum.photos/seed/card${i}/800/600`,
}));

export default function CardGrid({ isDark, favorites, toggleFavorite }) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          <Card
            card={card}
            index={index}
            isDark={isDark}
            isFavorited={favorites.includes(index)}
            toggleFavorite={toggleFavorite}
          />
        </motion.div>
      ))}
    </motion.section>
  );
}
