// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const About = () => {
  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" }
  ];

  const handleCredlyRedirect = () => {
    window.open('https://www.credly.com/users/chandan-kumar-biswas/edit/badges/credly', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>About Techcyfy - Your Trusted IT Certification Partner</title>
        <meta name="description" content="Techcyfy provides genuine IT certification exam vouchers at discounted prices. Trusted by professionals worldwide. Learn more about us." />
        <link rel="canonical" href="https://techcyfy.com/about" />
      </Helmet>

      <BreadcrumbSchema items={breadcrumbItems} />

      <section className="py-12 md:py-20 px-4 bg-slate-950 text-white min-h-screen">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
              About Techcyfy
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4">
              Your Trusted Partner for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
                IT Certification Vouchers
              </span>
            </h1>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column - Main Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-slate-800/40 rounded-2xl p-6 md:p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-4">Who We Are</h2>
                <p className="text-slate-300 leading-relaxed">
                  Techcyfy is a global provider of authentic IT certification exam vouchers. 
                  We help professionals and students achieve their career goals by offering 
                  genuine exam vouchers at discounted prices.
                </p>
              </div>

              <div className="bg-slate-800/40 rounded-2xl p-6 md:p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-slate-300 leading-relaxed">
                  Our mission is to make IT certification accessible to everyone by providing 
                  affordable, genuine exam vouchers with instant delivery. We believe in 
                  transparency, trust, and customer satisfaction.
                </p>
              </div>

              <div className="bg-slate-800/40 rounded-2xl p-6 md:p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-4">Why Choose Techcyfy?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: FaCheckCircle, text: "100% Genuine Vouchers" },
                    { icon: FaCheckCircle, text: "Instant Email Delivery" },
                    { icon: FaCheckCircle, text: "Secure Payment" },
                    { icon: FaCheckCircle, text: "24/7 Customer Support" },
                    { icon: FaCheckCircle, text: "Best Price Guarantee" },
                    { icon: FaCheckCircle, text: "Worldwide Availability" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="text-emerald-400 text-sm" />
                      <span className="text-slate-300 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ✅ Credly Badge Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-sky-600/20 to-blue-600/20 rounded-2xl p-6 md:p-8 border border-sky-500/30 text-center"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <FaShieldAlt className="text-sky-400 text-2xl" />
                  <h3 className="text-xl font-bold text-white">Verify Our Badges</h3>
                </div>
                <p className="text-slate-400 text-sm mb-4">
                  Check our verified credentials and badges on Credly.
                </p>
                <motion.button
                  onClick={handleCredlyRedirect}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-xl shadow-lg shadow-sky-600/25 transition-all duration-200"
                >
                  <span>View Credly Badges</span>
                  <FaExternalLinkAlt className="text-sm" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Stats Card */}
              <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 text-center">
                <div className="text-4xl font-bold text-sky-400">1200+</div>
                <p className="text-slate-400 text-sm">Happy Customers</p>
                <div className="mt-4 h-px bg-slate-700"></div>
                <div className="mt-4 text-4xl font-bold text-emerald-400">4.9/5</div>
                <p className="text-slate-400 text-sm">Average Rating</p>
              </div>

              {/* Quick Links */}
              <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="font-bold text-white mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <Link to="/vouchers" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                    <FaArrowRight className="text-sky-400 text-xs" />
                    Browse Vouchers
                  </Link>
                  <Link to="/reviews" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                    <FaArrowRight className="text-sky-400 text-xs" />
                    Customer Reviews
                  </Link>
                  <Link to="/contact" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                    <FaArrowRight className="text-sky-400 text-xs" />
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50">
                <h4 className="font-bold text-white mb-2">Need Help?</h4>
                <p className="text-slate-400 text-sm">Chat with us on WhatsApp</p>
                <a
                  href="https://wa.me/+8801982188224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl transition-all duration-200"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  WhatsApp Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;