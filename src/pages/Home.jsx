// pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCloud,
  FaShieldAlt,
  FaCheck,
  FaClock,
  FaLock,
  FaGlobeAmericas,
  FaWhatsapp,
  FaTelegramPlane,
  FaStar,
  FaPercentage,
} from "react-icons/fa";

import awsLogo from "../assets/aws2.png";
import googleLogo from "../assets/google.png";
import microsoftLogo from "../assets/mic.png";
import redHatLogo from "../assets/hat.png";
import ciscoLogo from "../assets/clsco.png";
import compTIALogo from "../assets/com.png";
import LogoCarousel from "../components/LogoCarousel";
import VoucherSection from "../components/VoucherSection";
import WhyChoose from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks";

// ===== STATIC CONFIG =====
const LEFT_PARTNER_LOGOS = [
  { src: awsLogo, alt: "AWS Certification", label: "AWS" },
  { src: microsoftLogo, alt: "Microsoft Certification", label: "Microsoft" },
  { src: googleLogo, alt: "Google Cloud Certification", label: "Google Cloud" },
];

const RIGHT_PARTNER_LOGOS = [
  { src: ciscoLogo, alt: "Cisco Certification", label: "CISCO" },
  { src: redHatLogo, alt: "Red Hat Certification", label: "Red Hat" },
  { src: compTIALogo, alt: "CompTIA Certification", label: "CompTIA" },
];

const TRUST_FEATURES = [
  { icon: FaCheck, title: "100% Genuine", subtitle: "Authentic Vouchers" },
  { icon: FaClock, title: "Instant Delivery", subtitle: "In Minutes" },
  { icon: FaLock, title: "Secure Payment", subtitle: "100% Safe & Secure" },
  { icon: FaGlobeAmericas, title: "Worldwide Support", subtitle: "24/7 Assistance" },
];

// ===== SUB-COMPONENTS =====
const TrustFeature = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-start gap-3 p-2 rounded-xl bg-slate-900/40 border border-slate-800/60 sm:bg-transparent sm:border-none sm:p-0">
    <div className="p-2 sm:p-0 rounded-lg bg-sky-500/10 sm:bg-transparent">
      <Icon className="text-sky-400 text-base sm:text-lg shrink-0" aria-hidden="true" />
    </div>
    <div className="min-w-0">
      <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug truncate">{title}</p>
      <p className="text-[11px] sm:text-xs text-slate-400 leading-snug truncate">{subtitle}</p>
    </div>
  </div>
);

// ===== FLOATING LOGO CHIP =====
const FloatingLogo = ({ src, alt, label, delay = 0, side = "left" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0, 10, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5,
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      className={`flex flex-col items-center gap-1 ${
        side === "left" ? "-translate-x-2 sm:-translate-x-4" : "translate-x-2 sm:translate-x-4"
      }`}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl flex items-center justify-center p-2 hover:border-sky-400/60 transition-colors">
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      </div>
      <span className="text-[10px] font-medium text-slate-300 bg-slate-900/90 backdrop-blur-md px-2 py-0.5 rounded-md border border-slate-800 shadow-sm whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
};

// ===== HERO ART WITH FLOATING LOGOS =====
const HeroArt = () => (
  <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] aspect-square mx-auto flex items-center justify-center" aria-hidden="true">
    {/* Background Ambient Glow */}
    <div className="absolute inset-0 rounded-full bg-sky-500/15 blur-3xl" />

    {/* Rotating Rings */}
    <div className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-sky-500/25 animate-[spin_35s_linear_infinite]" />
    <div className="absolute inset-8 sm:inset-12 rounded-full border border-dashed border-sky-400/15 animate-[spin_25s_linear_infinite_reverse]" />

    {/* Globe SVG Graphic */}
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-30">
      <circle cx="200" cy="200" r="150" fill="none" stroke="#38bdf8" strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="150" ry="55" fill="none" stroke="#38bdf8" strokeWidth="1" />
      <ellipse cx="200" cy="200" rx="150" ry="105" fill="none" stroke="#38bdf8" strokeWidth="1" />
      <line x1="50" y1="200" x2="350" y2="200" stroke="#38bdf8" strokeWidth="1" />
    </svg>

    {/* Left Column Floating Logos */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-6 z-20">
      {LEFT_PARTNER_LOGOS.map((logo, index) => (
        <FloatingLogo key={logo.label} {...logo} delay={index * 0.2} side="left" />
      ))}
    </div>

    {/* Center Cloud + Shield Icon */}
    <div className="relative z-10 flex items-center justify-center">
      <FaCloud
        className="text-7xl sm:text-8xl md:text-9xl text-sky-400 drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]"
      />
      <div className="absolute flex items-center justify-center">
        <FaShieldAlt className="text-3xl sm:text-4xl md:text-5xl text-slate-950 drop-shadow-md" />
        <FaCheck className="absolute text-xs sm:text-sm md:text-base text-sky-400 translate-y-0.5" />
      </div>
    </div>

    {/* Right Column Floating Logos */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 sm:gap-6 z-20">
      {RIGHT_PARTNER_LOGOS.map((logo, index) => (
        <FloatingLogo key={logo.label} {...logo} delay={index * 0.2 + 0.1} side="right" />
      ))}
    </div>
  </div>
);

// ===== MAIN HOME COMPONENT =====
const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-sky-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-semibold text-sky-400 tracking-wide">
                <FaGlobeAmericas aria-hidden="true" />
                <span>Global IT Certification Vouchers</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Get Genuine IT Exam Vouchers at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400">
                  Discounted Prices
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-emerald-400 font-semibold">
                Save Up to 70% on Official Exam Vouchers
              </p>

              {/* Paragraph */}
              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Purchase authentic exam vouchers for AWS, Microsoft, Google Cloud, CompTIA,
                Cisco, Red Hat, and more. Instant delivery, encrypted checkout, and round-the-clock assistance.
              </p>

              {/* Trust Features Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
                {TRUST_FEATURES.map((feature) => (
                  <TrustFeature key={feature.title} {...feature} />
                ))}
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <motion.a
                  href="#vouchers"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-sky-600 hover:bg-sky-500 active:bg-sky-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-sky-600/25 transition-all duration-200"
                >
                  <FaSearch className="text-xs" aria-hidden="true" />
                  <span>Browse All Vouchers</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-600 text-white text-sm font-semibold rounded-xl shadow-lg shadow-emerald-600/25 transition-all duration-200"
                >
                  <FaWhatsapp className="text-base" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </motion.a>

                <motion.a
                  href="https://t.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-sky-400 text-sm font-semibold rounded-xl transition-all duration-200"
                >
                  <FaTelegramPlane className="text-base" aria-hidden="true" />
                  <span>Telegram</span>
                </motion.a>
              </div>

              {/* Rating Badge */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-xs sm:text-sm">
                <span className="font-semibold text-white">Excellent</span>
                <div className="flex text-emerald-400 gap-0.5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} aria-hidden="true" />
                  ))}
                </div>
                <span className="text-slate-400 font-medium">4.9/5 on Trustpilot (1,200+ reviews)</span>
              </div>
            </motion.div>

            {/* Right Graphics Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 flex flex-col items-center justify-center"
            >
              <HeroArt />

              {/* Promotional Banner */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 w-full max-w-sm flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-800 shadow-xl"
              >
                <div className="w-10 h-10 shrink-0 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <FaPercentage className="text-amber-400 text-lg" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wide">Limited Time Offer</p>
                  <p className="text-xs text-slate-300">
                    Get up to <span className="text-white font-bold">70% OFF</span> on top certifications today.
                  </p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Sections */}
      <LogoCarousel />
      <div id="vouchers">
        <VoucherSection />
      </div>
      <WhyChoose />

      <HowItWorks/>
    </div>
  );
};

export default Home;