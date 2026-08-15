// src/components/VoucherSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import VoucherCard from "./VoucherCard";

import { Helmet } from "react-helmet-async";
import { vouchersData } from "../data/Vouchers";
import ProductSchema from "./ProductSchema";
import BreadcrumbSchema from "./BreadcrumbSchema";

const VoucherSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredVouchers = showAll
    ? vouchersData
    : vouchersData.filter((v) => v.popular);

  // showAll true হলে সব ভাউচার দেখাবে, নাহলে visibleCount অনুযায়ী স্লাইস করে দেখাবে
  const displayedVouchers = showAll
    ? filteredVouchers
    : filteredVouchers.slice(0, visibleCount);

  const hasMore = !showAll && visibleCount < filteredVouchers.length;
  const hasLess = !showAll && visibleCount > 4;

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setVisibleCount(4); // রিসেট
  };

  const loadOneMore = () => {
    setVisibleCount((prev) => Math.min(prev + 1, filteredVouchers.length));
  };

  const removeOne = () => {
    setVisibleCount((prev) => Math.max(prev - 1, 4));
  };

  const getGridCols = () => {
    if (displayedVouchers.length === 1) return "grid-cols-1";
    if (displayedVouchers.length === 2) return "grid-cols-1 sm:grid-cols-2";
    if (displayedVouchers.length === 3)
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  };

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Vouchers", url: "/vouchers" },
  ];

  return (
    <>
      <Helmet>
        <title>IT Certification Exam Vouchers - Techcyfy</title>
        <meta
          name="description"
          content="Browse all IT certification exam vouchers. Get genuine vouchers for AWS, Microsoft, Google Cloud, CompTIA, Cisco, Red Hat at discounted prices."
        />
        <meta
          name="keywords"
          content="exam vouchers, IT certification, AWS voucher, Microsoft voucher, CompTIA voucher, Cisco voucher"
        />
        <link rel="canonical" href="https://techcyfy.com/vouchers" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="IT Certification Exam Vouchers - Techcyfy" />
        <meta
          property="og:description"
          content="Browse all IT certification exam vouchers with up to 70% discount. Instant delivery."
        />
        <meta property="og:url" content="https://techcyfy.com/vouchers" />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Schema Mapping Fix */}
      {vouchersData.slice(1, visibleCount).map((voucher) => (
        <ProductSchema key={voucher.id || voucher._id} vouchers={[voucher]} />
      ))}

      <section className="py-6 sm:py-8 md:py-12 lg:py-16 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
                <span className="text-[8px] sm:text-[10px] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 sm:px-2.5 py-0.5 rounded-full">
                  FEATURED
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-sky-400/30 to-transparent"></div>
              </div>
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                {showAll ? "All Exam Vouchers" : "Popular Exam Vouchers"}
              </h2>
              <p className="text-[10px] sm:text-xs md:text-sm text-slate-400 mt-0.5">
                {showAll
                  ? "Explore our complete catalog of IT certification exam vouchers."
                  : "Most in-demand certification vouchers with best discounts."}
              </p>
            </div>

            <motion.button
              onClick={toggleShowAll}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-600 hover:bg-blue-500 text-white text-[10px] sm:text-xs font-semibold rounded-lg shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 flex-shrink-0 self-start sm:self-auto"
            >
              {showAll ? "Show Popular" : "View All"}
              <FaArrowRight
                className={`text-[8px] sm:text-[10px] transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </motion.button>
          </div>

          {/* Grid + Arrow */}
          <div className="relative">
            {/* Desktop Arrow (শুধু জনপ্রিয় ট্যাবে থাকার সময় দেখাবে) */}
            {!showAll && (
              <div className="hidden md:block">
                {hasLess && (
                  <motion.button
                    onClick={removeOne}
                    whileHover={{ scale: 1.1, x: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-sky-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-lg"
                    aria-label="Show less"
                  >
                    <FaArrowLeft className="text-[10px] lg:text-sm" />
                  </motion.button>
                )}

                {hasMore && (
                  <motion.button
                    onClick={loadOneMore}
                    whileHover={{ scale: 1.1, x: 3 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 hover:border-sky-400/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-lg"
                    aria-label="Load more"
                  >
                    <FaArrowRight className="text-[10px] lg:text-sm" />
                  </motion.button>
                )}
              </div>
            )}

            {/* Voucher Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={showAll ? "all" : "popular"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={`grid ${getGridCols()} gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-items-center sm:justify-items-stretch`}
              >
                {displayedVouchers.map((voucher, index) => (
                  <VoucherCard
                    key={voucher.id || voucher._id || index}
                    voucher={voucher}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {displayedVouchers.length === 0 && (
              <div className="text-center py-8 sm:py-12">
                <p className="text-slate-400 text-xs sm:text-sm">
                  No vouchers found.
                </p>
              </div>
            )}
          </div>

          {/* Mobile Arrow + Counter */}
          <div className="flex flex-col items-center gap-2 sm:gap-3 mt-4 sm:mt-5 md:mt-6">
            {!showAll && (
              <div className="flex md:hidden items-center gap-3">
                {hasLess && (
                  <motion.button
                    onClick={removeOne}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white text-[10px]"
                  >
                    <FaArrowLeft className="text-[8px]" />
                    Less
                  </motion.button>
                )}
                <span className="text-[10px] text-slate-400">
                  <span className="text-white font-semibold">
                    {displayedVouchers.length}
                  </span>{" "}
                  /{" "}
                  <span className="text-white font-semibold">
                    {filteredVouchers.length}
                  </span>
                </span>
                {hasMore && (
                  <motion.button
                    onClick={loadOneMore}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-white text-[10px]"
                  >
                    More
                    <FaArrowRight className="text-[8px]" />
                  </motion.button>
                )}
              </div>
            )}

            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs text-slate-400">
                Showing{" "}
                <span className="text-white font-semibold">
                  {displayedVouchers.length}
                </span>{" "}
                of{" "}
                <span className="text-white font-semibold">
                  {filteredVouchers.length}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VoucherSection;