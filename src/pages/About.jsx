// pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import {Helmet} from "react-helmet-async"
import BreadcrumbSchema from "../components/BreadcrumbSchema"
const About = () => {
    const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ];
  return (
    <>

      <Helmet>
        <title>About Techcyfy - IT Certification Voucher Provider</title>
        <meta name="description" content="Learn about Techcyfy - your trusted partner for genuine IT certification exam vouchers at discounted prices." />
        <link rel="canonical" href="https://your-domain.com/about" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />

      <motion.div
        className="max-w-4xl mx-auto px-4 py-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          We are a passionate team dedicated to building modern web applications
          with cutting-edge technologies like React, Tailwind CSS, and Framer
          Motion. Our goal is to deliver fast, responsive, and visually stunning
          experiences.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Mission", "Vision", "Values"].map((item) => (
            <div
              key={item}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                {item}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default About;