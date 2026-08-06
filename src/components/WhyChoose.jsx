// src/components/WhyChoose.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  FaShieldAlt, 
  FaRocket, 
  FaLock, 
  FaHeadset, 
  FaPercent, 
  FaThumbsUp 
} from "react-icons/fa";

const WhyChoose = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-3xl text-sky-400" />,
      title: "100% Genuine",
      description: "All vouchers are 100% genuine and valid.",
    },
    {
      icon: <FaRocket className="text-3xl text-emerald-400" />,
      title: "Instant Delivery",
      description: "Receive your voucher instantly via email.",
    },
    {
      icon: <FaLock className="text-3xl text-amber-400" />,
      title: "Secure Payment",
      description: "Your payment information is 100% secure.",
    },
    {
      icon: <FaHeadset className="text-3xl text-purple-400" />,
      title: "Worldwide Support",
      description: "24/7 support for all your queries worldwide.",
    },
    {
      icon: <FaPercent className="text-3xl text-rose-400" />,
      title: "Best Discounts",
      description: "Get the biggest discounts on all exam vouchers.",
    },
    {
      icon: <FaThumbsUp className="text-3xl text-blue-400" />,
      title: "Easy & Reliable",
      description: "Simple process, reliable and hassle-free.",
    },
  ];

  // অ্যানিমেশন ভ্যারিয়েন্ট
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12 lg:mb-14"
        >
          <span className="text-xs md:text-sm font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-4 py-1.5 rounded-full uppercase tracking-wider">
            Why Choose TechCyfy?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Trusted by <span className="text-sky-400">Professionals</span> Worldwide
          </h2>
        </motion.div>

        {/* Features Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.2 },
              }}
              className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon with circular background */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-slate-700/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;