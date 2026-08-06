// components/LogoCarousel.jsx
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

// ---------------------------------------------------------------------------
// Static config / content
// Kept outside the component so it isn't recreated on every render.
// ---------------------------------------------------------------------------

const BRAND_LOGOS = [
  { id: 1, name: "AWS", color: "from-orange-500 to-yellow-500" },
  { id: 2, name: "Microsoft", color: "from-blue-500 to-cyan-500" },
  { id: 3, name: "Google Cloud", color: "from-blue-400 to-green-400" },
  { id: 4, name: "CompTIA", color: "from-purple-500 to-pink-500" },
  { id: 5, name: "Cisco", color: "from-blue-600 to-indigo-600" },
  { id: 6, name: "Red Hat", color: "from-red-500 to-orange-500" },
  { id: 7, name: "SnowPro", color: "from-cyan-400 to-blue-400" },
  { id: 8, name: "Salesforce", color: "from-blue-500 to-indigo-500" },
  { id: 9, name: "VMware", color: "from-blue-600 to-purple-600" },
  { id: 10, name: "Juniper", color: "from-green-500 to-teal-500" },
];

const SLIDE_INTERVAL_MS = 2500;
const TRUSTPILOT_RATING = { score: "4.9", reviewCount: "1200+" };

// ---------------------------------------------------------------------------
// Small presentational subcomponents
// ---------------------------------------------------------------------------

const TrustpilotRating = ({ score, reviewCount }) => (
  <div className="flex items-center gap-1">
    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Trustpilot</span>
    <div className="flex text-yellow-400" aria-hidden="true">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
    </div>
    <span className="sr-only">{score} out of 5 stars</span>
    <span className="text-sm font-bold text-gray-900 dark:text-white">{score}</span>
    <span className="text-xs text-gray-500 dark:text-gray-400">({reviewCount} Reviews)</span>
  </div>
);

const LogoBadge = ({ logo, size = "md" }) => {
  const sizeClasses = size === "sm" ? "w-6 h-6 text-[8px]" : "w-10 h-10 md:w-12 md:h-12 text-sm md:text-base";
  return (
    <div
      className={`flex-shrink-0 rounded-xl bg-gradient-to-br ${logo.color} flex items-center justify-center text-white font-bold shadow-lg ${sizeClasses}`}
      aria-hidden="true"
    >
      {logo.name.charAt(0)}
    </div>
  );
};

const ProgressDots = ({ logos, activeIndex, onSelect }) => (
  <div className="flex-shrink-0 flex gap-1.5" role="tablist" aria-label="Featured brand slides">
    {logos.map((logo, index) => (
      <button
        key={logo.id}
        type="button"
        role="tab"
        aria-selected={index === activeIndex}
        aria-label={`Show ${logo.name}`}
        onClick={() => onSelect(index)}
        className={`transition-all duration-300 rounded-full ${
          index === activeIndex
            ? "w-6 h-2 bg-indigo-600 dark:bg-indigo-400"
            : "w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
        }`}
      />
    ))}
  </div>
);

const FeaturedBrandSlide = ({ activeIndex, currentLogo, nextLogo }) => (
  <div className="flex-1 overflow-hidden relative h-12 md:h-14">
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center"
        aria-live="polite"
      >
        <div className="flex items-center gap-4 md:gap-6 w-full">
          <LogoBadge logo={currentLogo} />

          <span className="text-lg md:text-2xl font-bold text-gray-800 dark:text-white">
            {currentLogo.name}
          </span>

          <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />

          <div className="hidden md:flex items-center gap-3 ml-auto opacity-40">
            <span className="text-xs text-gray-400 dark:text-gray-500">UP NEXT</span>
            <LogoBadge logo={nextLogo} size="sm" />
            <span className="text-xs text-gray-500 dark:text-gray-400">{nextLogo.name}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
);

const BrandGridItem = ({ logo }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -3 }}
    className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-br ${logo.color} bg-opacity-10 dark:bg-opacity-20 border border-white/20 dark:border-gray-700/30 shadow-sm hover:shadow-md transition-all duration-300`}
  >
    <LogoBadge logo={logo} size="sm" />
    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">{logo.name}</span>
  </motion.div>
);

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

/**
 * Auto-advancing "now showing" carousel that highlights one certification
 * partner at a time, plus a static grid of every partner below it.
 * Autoplay pauses on hover and on keyboard focus, and respects
 * prefers-reduced-motion.
 */
const LogoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return undefined;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BRAND_LOGOS.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  const pauseAutoplay = () => setIsPaused(true);
  const resumeAutoplay = () => setIsPaused(false);

  const currentLogo = BRAND_LOGOS[activeIndex];
  const nextLogo = useMemo(
    () => BRAND_LOGOS[(activeIndex + 1) % BRAND_LOGOS.length],
    [activeIndex]
  );

  return (
    <div className="w-full bg-dark dark:bg-gray-900 py-8 md:py-12  dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Trustpilot rating */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 md:mb-8">
          <TrustpilotRating {...TRUSTPILOT_RATING} />

          <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
            FEATURED
          </span>
        </div>

        {/* "Now showing" carousel */}
        <div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-indigo-50/30 dark:from-gray-800 dark:to-indigo-900/20 p-4 md:p-6 shadow-lg"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onFocus={pauseAutoplay}
          onBlur={resumeAutoplay}
        >
          <div className="flex items-center gap-4">
            <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-lg">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" aria-hidden="true" />
              NOW SHOWING
            </span>

            <FeaturedBrandSlide
              activeIndex={activeIndex}
              currentLogo={currentLogo}
              nextLogo={nextLogo}
            />

            <ProgressDots logos={BRAND_LOGOS} activeIndex={activeIndex} onSelect={goToSlide} />
          </div>
        </div>

        {/* Full partner grid */}
        <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
          {BRAND_LOGOS.map((logo) => (
            <BrandGridItem key={logo.id} logo={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
