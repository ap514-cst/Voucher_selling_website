// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaCcVisa, FaCcMastercard, FaPaypal, FaLock } from "react-icons/fa";

const Footer = () => {
  const reviews = [
    {
      name: "Michael Anderson",
      rating: 5,
      text: "Got my AWS SAA-C03 voucher instantly. Smooth process and great support!",
      delay: 0,
    },
    {
      name: "Sarah Thompson",
      rating: 5,
      text: "Best prices for Azure exams. Highly recommended Techcyfy!",
      delay: 0.1,
    },
    {
      name: "David Wilson",
      rating: 5,
      text: "Quick delivery and genuine voucher. Will buy again for sure.",
      delay: 0.2,
    },
    {
      name: "James Parker",
      rating: 5,
      text: "Great experience! Saved a lot of money on my exam.",
      delay: 0.3,
    },
  ];

  const footerLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "Refund Policy",
    "Sitemap",
  ];

  const paymentIcons = [
    { icon: <FaCcVisa className="text-3xl text-blue-600" />, label: "Visa" },
    { icon: <FaCcMastercard className="text-3xl text-orange-500" />, label: "Mastercard" },
    { icon: <FaPaypal className="text-3xl text-blue-400" />, label: "PayPal" },
    { icon: <FaLock className="text-3xl text-emerald-500" />, label: "SSL Secured" },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex text-amber-400 text-sm">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < rating ? "text-amber-400" : "text-slate-600"} />
      ))}
    </div>
  );

  return (
    <footer className="bg-black text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        
        {/* ===== TRUSTED BY SECTION ===== */}
        <div className="text-center mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
            Trusted by <span className="text-amber-400">thousands</span> of happy customers
          </h3>
        </div>

        {/* ===== REVIEW CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: review.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-slate-700/50 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-sm md:text-base font-bold text-white">
                  {review.name}
                </h4>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-slate-800 pt-8 md:pt-10">
          
          {/* ===== FOOTER LINKS ===== */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-xs md:text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* ===== PAYMENT ICONS ===== */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-6">
            {paymentIcons.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors duration-200"
              >
                {item.icon}
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* ===== COPYRIGHT ===== */}
          <div className="text-center">
            <p className="text-xs md:text-sm text-slate-500">
              © 2025 Techcyfy. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;