// src/components/RouteLoading.jsx
import React from "react";
import { motion } from "framer-motion";

const RouteLoading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        {/* Compact Loader */}
        <motion.div
          className="relative w-16 h-16"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-sky-500 border-r-blue-500 border-b-amber-400 border-l-transparent"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-xs text-slate-400 mt-4 tracking-widest uppercase"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default RouteLoading;