import React from 'react'
import {
  FaSearch,
  FaMoon,
  FaChevronDown,
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
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Vouchers", path: "/vouchers", hasDropdown: true },
  { label: "Blog", path: "/blog" },
  { label: "Reviews", path: "/reviews" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];
  return (
    <div>
       <header className="sticky top-0 z-20 bg-black/80 backdrop-blur-sm border-b border-white/5">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-[0_0_18px_rgba(56,189,248,0.6)]">
          <FaCloud className="text-white text-lg" aria-hidden="true" />
          <span className="absolute text-[11px] font-extrabold text-white">TC</span>
        </div>
        <div className="leading-tight">
          <p className="text-lg font-extrabold tracking-wide">
            <span className="text-white">TECH</span>
            <span className="text-sky-400">CYFY</span>
          </p>
          <p className="text-[9px] font-semibold tracking-[0.2em] text-slate-400">
            CERTIFY YOUR FUTURE
          </p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
  {NAV_LINKS.map((link) => (
    <NavLink
      key={link.label}
      to={link.path}
      className={({ isActive }) =>
        `relative flex items-center gap-1 text-sm font-medium transition-colors ${
          isActive
            ? "text-sky-400"
            : "text-slate-200 hover:text-sky-400"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {link.label}

          {link.hasDropdown && (
            <FaChevronDown className="text-[10px]" />
          )}

          {isActive && (
            <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-sky-400 rounded-full" />
          )}
        </>
      )}
    </NavLink>
  ))}
</nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Search"
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-200 transition-colors"
        >
          <FaSearch className="text-sm" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-sky-400 transition-colors"
        >
          <FaMoon className="text-sm" aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Navbar
