// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  FaStar, 
  FaCcVisa, 
  FaCcMastercard, 
  FaPaypal, 
  FaLock, 
  FaYoutube, 
  FaGithub 
} from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6"; // Standard Telegram icon from react-icons/fa6

const Footer = () => {
 
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

  const socialLinks = [
    {
      icon: <FaYoutube className="text-2xl" />,
      label: "YouTube",
      href: "https://youtube.com/@techtalkhq24?si=oRyUIM0VGu7mAnJU",
      hoverColor: "text-red-600 hover:text-red-500",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      href: "https://github.com/techcyfy",
      hoverColor: "hover:text-slate-200",
    },
    {
      icon: <FaTelegram className="text-2xl" />,
      label: "Telegram",
      href: "https://t.me/techcyfy",
      hoverColor: "text-sky-600 hover:text-sky-400",
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="flex text-amber-400 text-sm">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < rating ? "text-amber-400" : "text-slate-600"} />
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4">
        
        {/* ===== TRUSTED BY SECTION ===== */}

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-slate-800 pt-8">
          
          {/* ===== FOOTER LINKS ===== */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6">
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

          {/* ===== SOCIAL MEDIA ICONS ===== */}
          <div className="flex justify-center items-center gap-6 mb-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`text-slate-400 transition-colors duration-200 ${social.hoverColor}`}
              >
                {social.icon}
              </a>
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
  );
};

export default Footer;