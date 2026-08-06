// pages/Services.jsx
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    { title: "Web Development", icon: "💻" },
    { title: "UI/UX Design", icon: "🎨" },
    { title: "Mobile Apps", icon: "📱" },
  ];

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              High-quality, scalable solutions tailored to your needs.
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;