// src/components/HowItWorks.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaSearch, FaWhatsapp, FaEnvelope, FaStar, FaStarHalfAlt } from "react-icons/fa";
import {Helmet} from "react-helmet-async";
import BreadcrumbSchema from "./BreadcrumbSchema";
import SEO from "./SEO";
const HowItWorks = () => {

   const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "How It Works", url: "/how-it-works" }
  ];
  // Steps data
  const steps = [
    {
      number: "1",
      icon: <FaSearch className="text-3xl text-sky-400" />,
      title: "Choose Exam",
      description: "Browse and select the exam voucher you need.",
      delay: 0,
    },
    {
      number: "2",
      icon: <FaWhatsapp className="text-3xl text-green-400" />,
      title: "Contact Us",
      description: "Message us on WhatsApp or Telegram.",
      delay: 0.2,
    },
    {
      number: "3",
      icon: <FaEnvelope className="text-3xl text-amber-400" />,
      title: "Get Voucher",
      description: "Receive your voucher instantly via email.",
      delay: 0.4,
    },
  ];






  return (
    <>
    <Helmet>
        <title>How It Works - Get Your Exam Voucher in 3 Easy Steps | Techcyfy</title>
        <meta name="description" content="Learn how to get your genuine IT certification exam voucher in 3 easy steps. Choose exam, contact us, get voucher instantly." />
        <link rel="canonical" href="https://techcyfy.com/how-it-works" />
      </Helmet>


      
      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="py-12 md:py-16 lg:py-20 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">

          {/* ===== HOW IT WORKS ===== */}
          <div className="mb-14 md:mb-20">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-10 md:mb-12"
            >
              <span className="text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                HOW IT WORKS
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3">
                Get Your Exam Voucher in <span className="text-sky-400">3 Easy Steps</span>
              </h2>
            </motion.div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: step.delay }}
                  viewport={{ once: true }}
                  className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-sky-500/30 transition-all duration-300 text-center group"
                >
                  {/* Step Number - Background */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-sky-600/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-sky-500/20 transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector Line (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-sky-500/30 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>


        </div>
      </section>
    </>
  );
};

export default HowItWorks;