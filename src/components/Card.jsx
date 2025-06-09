import React from "react";
import { Heart } from "lucide-react";
import clsx from "clsx";

export default function Card({ card, index, isDark, isFavorited, toggleFavorite }) {
  return (
    <div
      className={clsx(
        "rounded-2xl shadow-lg overflow-hidden border relative group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl",
        isDark ? "bg-zinc-800 border-zinc-700" : "bg-white border-gray-100"
      )}
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      <div className="absolute top-4 right-4">
        <button
          onClick={() => toggleFavorite(index)}
          className="p-1 rounded-full bg-white dark:bg-zinc-700 shadow"
        >
          <Heart
            size={18}
            className={clsx(
              "transition-colors",
              isFavorited ? "text-red-500" : "text-gray-400"
            )}
            fill={isFavorited ? "#EF4444" : "none"}
          />
        </button>
      </div>
      <div className="p-6 space-y-2">
        <h3 className={clsx("text-xl font-semibold", isDark ? "text-white" : "text-gray-800")}>
          {card.title}
        </h3>
        <p className={clsx("text-sm", isDark ? "text-gray-400" : "text-gray-500")}>
          {card.subtitle}
        </p>
        <div className="flex justify-between items-center pt-4">
          <span className="text-[#FF5C00] font-bold text-lg">{card.price}</span>
          <button className="bg-gradient-to-r from-[#FF9B21] to-[#FF5C00] text-white text-sm px-4 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
