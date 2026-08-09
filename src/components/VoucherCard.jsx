import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaBolt,
  FaShieldAlt,
  FaGlobe,
  FaChevronRight,
} from "react-icons/fa";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const logoMap = {
  aws: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  microsoft:
    "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  google:
    "https://upload.wikimedia.org/wikipedia/commons/2/2d/Google-cloud-platform.svg",
  redhat:
    "https://upload.wikimedia.org/wikipedia/commons/3/35/Red_Hat_logo.svg",
  comptia:
    "https://upload.wikimedia.org/wikipedia/commons/f/f8/CompTIA_logo.svg",
  cisco:
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
};

const VoucherCard = ({ voucher = {}, index = 0 }) => {
  const navigate = useNavigate();
  const {
    _id,
    shortName = "AWS All Exams",
    code = "CODE-123",
    logo = "aws",
    discount = 70,
    popular = true,
    instantDelivery = true,
    category = "Cloud",
    description = "Certification Exam Vouchers",
  } = voucher;

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in buying the ${shortName} (${code}) voucher.`
  );
  const whatsappUrl = `https://wa.me/+8801982188224?text=${whatsappMessage}`;

  const handleDetailsClick = (e) => {
    e.stopPropagation();
    navigate(`/vouchers/${_id || code}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="w-full max-w-sm bg-[#0a0f1d] border border-slate-800/80 rounded-[28px] p-5 font-sans text-white shadow-xl flex flex-col justify-between select-none"
    >
      <div>
        {/* Top Header: Category & Popular Badges */}
        <div className="flex items-center justify-between mb-5">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-800/70 text-slate-200 border border-slate-700/50">
            {category}
          </span>

          {popular && (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/30">
              <FaBolt className="text-amber-400 text-xs" />
              Popular
            </span>
          )}
        </div>

        {/* Logo & Title */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#0d1425] border border-slate-800 p-2.5 flex items-center justify-center">
            <img
              src={logoMap[logo?.toLowerCase()] || logoMap.aws}
              alt={`${shortName} voucher`}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <h3 className="text-2xl font-bold tracking-tight text-white line-clamp-1">
              {shortName}
            </h3>
            <p className="text-sm text-slate-400 font-medium mt-0.5 line-clamp-1">
              {description}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-slate-800/80 w-full mb-5" />

        {/* Delivery & Discount Tags */}
        <div className="flex items-center justify-between gap-3 mb-5">
          {instantDelivery && (
            <div className="flex items-center gap-2 text-emerald-400 font-medium text-sm">
              <FaBolt className="text-emerald-400 text-base shrink-0" />
              <span>Instant Delivery</span>
            </div>
          )}

          {/* Vertical Separator */}
          <div className="h-5 w-[1px] bg-slate-800" />

          {discount > 0 && (
            <div className="px-3.5 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-medium text-xs">
              Save up to {discount}%
            </div>
          )}
        </div>

        {/* Feature List Box */}
        <div className="bg-[#0d1425]/60 border border-slate-800/80 rounded-2xl p-4 mb-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-full border border-emerald-500/40 text-emerald-400">
              <FaShieldAlt className="text-xs" />
            </div>
            <span className="text-sm font-semibold text-slate-200">
              Official Exam Vouchers
            </span>
          </div>

          <div className="h-[1px] bg-slate-800/60 w-full" />

          <div className="flex items-center gap-3">
            <div className="p-1 text-sky-400">
              <FaGlobe className="text-base" />
            </div>
            <span className="text-sm font-semibold text-slate-200">
              Worldwide Availability
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mt-2">
        {/* Browse/Details Button */}
        <motion.button
          onClick={handleDetailsClick}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-between px-4 py-3 bg-[#0d1425] hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 text-white font-semibold rounded-2xl text-sm transition-all"
        >
          <div className="flex items-center gap-3">
            <HiOutlineDocumentSearch className="text-xl text-slate-300" />
            <span>Browse All Certificates</span>
          </div>
          <FaChevronRight className="text-xs text-slate-400" />
        </motion.button>

        {/* Order WhatsApp Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={(e) => e.stopPropagation()}
          className="w-full flex items-center justify-between px-4 py-3 bg-[#05a650] hover:bg-[#049346] text-white font-bold rounded-2xl text-sm transition-all shadow-lg shadow-emerald-950/20"
        >
          <div className="flex items-center gap-3">
            <FaWhatsapp className="text-xl" />
            <span>Order via WhatsApp</span>
          </div>
          <FaChevronRight className="text-xs text-white/80" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default VoucherCard;