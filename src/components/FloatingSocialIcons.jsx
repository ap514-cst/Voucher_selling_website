// src/components/FloatingSocialIcons.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebook, FaTelegramPlane } from "react-icons/fa";

const FloatingSocialIcons = () => {
  // প্রতিটি আইকনের আলাদা অ্যানিমেশন ডেল ও ডিউরেশন
  const icons = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      label: "WhatsApp",
      href: "https://wa.me/+8801982188224?text=I want to know more about your services.",
      target: "_blank",
      color: "bg-green-500 hover:bg-green-600",
      delay: 0,
    },
    {
      icon: <FaTelegramPlane className="text-2xl" />,
      label: "Telegram",
      href: "https://t.me/techcyfy", // Replace with your Telegram username/link
      target: "_blank",
      color: "bg-blue-500 hover:bg-blue-600",
      delay: 0.2,
    },
    {
      icon: <FaFacebook className="text-2xl" />,
      label: "Facebook",
      href: "https://www.facebook.com/techcyfy24/", // Replace with your email
      target: "_blank",
      color: "bg-blue-500 hover:bg-blue-600",
      delay: 0.4,
    },
  ];

  return (
    <div className="fixed right-4 sm:right-8 md:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 sm:gap-5">
      {icons.map((item, index) => (
        <motion.a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          initial={{ opacity: 0, x: 20 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -6, 0, 6, 0],
          }}
          transition={{
            opacity: { duration: 0.5, delay: item.delay },
            x: { duration: 0.5, delay: item.delay },
            y: {
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            },
          }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.3 },
          }}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${item.color} text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-opacity-90 hover:bg-opacity-100 border border-white/20`}
        >
          {item.icon}
        </motion.a>
      ))}

      {/* টুলটিপ - আইকনের নাম দেখানোর জন্য (ঐচ্ছিক) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="hidden md:block text-center"
      >
        <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium tracking-wider uppercase bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
          Connect
        </span>
      </motion.div>
    </div>
  );
};

export default FloatingSocialIcons;