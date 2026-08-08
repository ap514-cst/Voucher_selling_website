// src/components/AnimatedBrand.jsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedBrand = ({ size = "large", className = "" }) => {
  const sizes = {
    small: "text-lg md:text-xl",
    medium: "text-2xl md:text-3xl",
    large: "text-3xl md:text-4xl lg:text-5xl",
    xlarge: "text-4xl md:text-5xl lg:text-6xl",
  };

  const iconSizes = {
    small: "w-8 h-8 text-sm",
    medium: "w-10 h-10 text-base",
    large: "w-12 h-12 text-lg",
    xlarge: "w-14 h-14 text-xl",
  };

  return (
    <motion.div
      className={`flex items-center gap-2 md:gap-3 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated Icon */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-sky-500/30 flex-shrink-0`}
      >
        T
      </motion.div>

      {/* Animated Text */}
      <div className="flex items-center">
        <motion.span
          className={`${sizes[size]} font-extrabold tracking-tight`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="text-sky-400"></span>
        </motion.span>
        <motion.span
          className={`${sizes[size]} font-extrabold tracking-tight`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-amber-400"></span>
        </motion.span>
      </div>

      {/* Animated Dot */}
      <motion.span
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.5, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-1.5 h-1.5 rounded-full bg-sky-400"
      />
    </motion.div>
  );
};

export default AnimatedBrand;