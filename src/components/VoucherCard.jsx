// src/components/VoucherCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaBolt } from "react-icons/fa";

const logoMap = {
  aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  microsoft: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  google: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-cloud-platform.svg",
  redhat: "https://upload.wikimedia.org/wikipedia/commons/3/35/Red_Hat_logo.svg",
  comptia: "https://upload.wikimedia.org/wikipedia/commons/f/f8/CompTIA_logo.svg",
  cisco: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
};

const VoucherCard = ({ voucher = {}, index = 0 }) => {
  const {
    shortName = "Voucher Title",
    code = "CODE-123",
    logo = "aws",
    officialPrice = 0,
    youPay = 0,
    discount = 0,
    popular = false,
    instantDelivery = false,
    category = "Cert",
  } = voucher;

  // Pre-formatted WhatsApp message
  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in buying the ${shortName} (${code}) voucher for $${youPay.toFixed(2)}.`
  );
  const whatsappUrl = `https://wa.me/+8801982188224?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative flex flex-col justify-between w-full h-full bg-slate-800/60 hover:bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-700/60 hover:border-slate-500/80 shadow-md hover:shadow-2xl hover:shadow-emerald-950/20 transition-all duration-300 overflow-hidden"
    >
      {/* Top Section: Badges & Header */}
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-300 bg-slate-700/60 border border-slate-600/50 rounded-full capitalize truncate">
            {category}
          </span>

          {popular && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full shadow-sm">
              <FaBolt className="text-amber-400 text-xs shrink-0" />
              <span>Popular</span>
            </span>
          )}
        </div>

        {/* Logo & Info */}
        <div className="flex items-start gap-3 sm:gap-4 mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-slate-900/80 p-2.5 border border-slate-700/80 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
            <img
              src={logoMap[logo?.toLowerCase()] || logoMap.aws}
              alt={shortName}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-slate-100 group-hover:text-white leading-snug line-clamp-2 transition-colors">
              {shortName}
            </h3>
            <p className="text-xs font-mono text-slate-400 mt-1 truncate">
              {code}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Pricing & CTA */}
      <div className="mt-auto pt-3 border-t border-slate-700/50">
        {/* Features & Discounts Tag */}
        <div className="flex items-center justify-between gap-2 mb-3 text-xs">
          {instantDelivery ? (
            <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
              <FaBolt className="text-xs shrink-0" />
              <span>Instant Delivery</span>
            </span>
          ) : (
            <span className="text-slate-400">Standard Delivery</span>
          )}

          {discount > 0 && (
            <span className="px-2 py-0.5 font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
              Save {discount}%
            </span>
          )}
        </div>

        {/* Pricing Layout */}
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <span className="text-xs text-slate-400 block mb-0.5">Price</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                ${officialPrice > youPay ? youPay.toFixed(2) : officialPrice.toFixed(2)}
              </span>
              {officialPrice > youPay && (
                <span className="text-xs sm:text-sm text-slate-500 line-through">
                  ${officialPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* WhatsApp CTA Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-600 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 shadow-md shadow-emerald-900/30 hover:shadow-emerald-600/20 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-800"
        >
          <FaWhatsapp className="text-base sm:text-lg shrink-0" />
          <span>Order via WhatsApp</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default VoucherCard;