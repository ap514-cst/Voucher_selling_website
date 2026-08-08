// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaSun, 
  FaMoon, 
  FaBars, 
  FaTimes, 
  FaHome,
  FaInfoCircle,
  FaClipboardList,
  FaTicketAlt,
  FaStar,
  FaEnvelope,
  FaCog,
  FaUser,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";
import AnimatedBrand from "./AnimatedBrand";

const Navbar = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", JSON.stringify(true));
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", JSON.stringify(false));
    }
  }, [darkMode]);

  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Navigation links data
  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome className="text-sm" /> },
    { name: "About", path: "/about", icon: <FaInfoCircle className="text-sm" /> },
    { name: "How It Works", path: "/how-it-works", icon: <FaClipboardList className="text-sm" /> },
    { name: "Vouchers", path: "/vouchers", icon: <FaTicketAlt className="text-sm" /> },
    { name: "Reviews", path: "/reviews", icon: <FaStar className="text-sm" /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope className="text-sm" /> },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-sky-500/5 border-b border-slate-800/50"
            : "bg-black/80 backdrop-blur-md border-b border-slate-800/30"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <NavLink to="/" className="block">
                <AnimatedBrand size="medium" />
              </NavLink>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white bg-sky-500/10 border border-sky-500/30"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="flex items-center gap-2">
                        <span className={isActive ? "text-sky-400" : "text-slate-500"}>
                          {link.icon}
                        </span>
                        {link.name}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-sky-400 to-amber-400 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Right side: Accredited Badge + Dark Mode + Actions + Mobile Menu */}
            <div className="flex items-center gap-2 md:gap-3">
              
              {/* ===== TECHCYFY ACCREDITED BADGE (Desktop) ===== */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 group cursor-default"
              >
                <div className="relative">
                  <FaShieldAlt className="text-emerald-400 text-sm group-hover:scale-110 transition-transform duration-300" />
                  <FaCheckCircle className="absolute -top-1 -right-1 text-[8px] text-emerald-300" />
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 tracking-wide uppercase whitespace-nowrap">
                  Techcyfy Accredited
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </motion.div>

              {/* Dark Mode Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className="relative p-2.5 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 border border-slate-700/50 hover:border-slate-600"
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={darkMode ? "dark" : "light"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    {darkMode ? <FaSun className="text-amber-400" /> : <FaMoon className="text-sky-400" />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>

              {/* Desktop Action Buttons */}
              <div className="hidden lg:flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-300 flex items-center gap-2"
                >
                  <FaUser className="text-xs" />
                  Sign In
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg hover:bg-slate-800/50 text-slate-400 hover:text-white transition-colors border border-slate-700/50 hover:border-slate-600"
                >
                  <FaCog className="text-sm" />
                </motion.button>
              </div>

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors border border-slate-700/50 hover:border-slate-600"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? "close" : "open"}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* ===== MOBILE MENU (Full Width Dropdown) ===== */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-slate-800/50 shadow-2xl"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                
                {/* ===== ACCREDITED BADGE (Mobile) ===== */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2 px-4 py-2.5 mb-2 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30"
                >
                  <div className="relative">
                    <FaShieldAlt className="text-emerald-400 text-sm" />
                    <FaCheckCircle className="absolute -top-1 -right-1 text-[8px] text-emerald-300" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">
                    Techcyfy Accredited
                  </span>
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </motion.div>

                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-sky-500/10 border border-sky-500/30 text-white"
                          : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={location.pathname === link.path ? "text-sky-400" : "text-slate-500"}>
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.name}</span>
                    {location.pathname === link.path && (
                      <span className="ml-auto text-xs bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    )}
                  </NavLink>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="pt-4 mt-2 border-t border-slate-800/50 flex flex-col gap-2">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300">
                    <FaUser className="text-xs" />
                    Sign In
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-slate-700 hover:border-slate-600 text-slate-400 hover:text-white font-semibold rounded-xl transition-all duration-300">
                    <FaCog className="text-xs" />
                    Settings
                  </button>
                </div>

                {/* Mobile Dark Mode Toggle */}
                <div className="pt-3 mt-2 border-t border-slate-800/50">
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <span className="text-slate-400 text-sm">Dark Mode</span>
                    <span className="text-sm font-medium text-slate-300">
                      {darkMode ? "On" : "Off"}
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      
      {/* Spacer */}
      <div className="h-16 md:h-20"></div>
    </>
  );
};

export default Navbar;