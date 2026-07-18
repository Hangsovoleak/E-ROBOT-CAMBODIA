import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, QrCode, UserPlus } from "lucide-react";

import ERobotLogo from "../assets/ERobot.png";
import DonationQR from "../assets/qr.jpg"; 
import RobotQR from "../assets/qrerobot.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => { setIsOpen(false); setActivePanel(null); };
  const handlePanelToggle = (panel) => setActivePanel(activePanel === panel ? null : panel);

  const navItems = [
    { to: "/", label: "ទំព័រដើម" },
    { to: "/about", label: "អំពីយើង" },
    { to: "/services", label: "សកម្មភាព" },
    { to: "/contact", label: "ទំនាក់ទំនង" },
    { to: "/sharings", label: "ការចែករំលែក" },
  ];

  const navLinkStyles = ({ isActive }) =>
    `px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 border whitespace-nowrap font-sans ${
      isActive
        ? "text-brand-blue bg-brand-blue/10 border-brand-blue/20 shadow-sm"
        : "text-brand-charcoal dark:text-[var(--text)] border-transparent hover:text-brand-blue dark:hover:text-brand-blue hover:bg-[var(--bg)]"
    }`;

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 dark:bg-[var(--surface)]/80 backdrop-blur-xl border-b border-[var(--border)] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-3 lg:py-4 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="shrink-0 flex items-center">
          <img src={ERobotLogo} alt="E-Robot" className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-[var(--border)] transition-transform duration-300 hover:scale-105" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === "/"} className={navLinkStyles}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handlePanelToggle("donation")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold font-sans transition-all duration-300 border shadow-sm cursor-pointer ${
              activePanel === "donation"
                ? "bg-brand-charcoal text-white dark:bg-white dark:text-brand-charcoal border-transparent"
                : "bg-brand-blue text-white border-transparent hover:opacity-95 hover:-translate-y-0.5"
            }`}
          >
            {activePanel === "donation" ? "បិទ" : "ឧបត្ថម្ភមកពួកយើង"}
          </button>

          <button
            onClick={() => handlePanelToggle("join")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold font-sans transition-all duration-300 border shadow-sm cursor-pointer ${
              activePanel === "join"
                ? "bg-brand-charcoal text-white dark:bg-white dark:text-brand-charcoal border-transparent"
                : "bg-transparent text-brand-charcoal dark:text-white border-[var(--border)] hover:bg-[var(--bg)] hover:-translate-y-0.5"
            }`}
          >
            {activePanel === "join" ? "បិទ" : "ចូលរួមជាមួយពួកយើង"}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMenu} className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-brand-charcoal dark:text-white/90 hover:bg-[var(--bg)] transition-colors border-none bg-transparent cursor-pointer">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-4 pb-5">
          <div className="bg-white dark:bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-lg p-4 flex flex-col gap-1.5">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 font-sans ${isActive ? "bg-brand-blue/10 text-brand-blue" : "text-brand-charcoal dark:text-white/90 hover:bg-[var(--bg)]"}`}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="border-t border-[var(--border)] my-2" />
            <div className="flex flex-col gap-2">
              <button onClick={() => { setIsOpen(false); handlePanelToggle("donation"); }} className="w-full py-3 bg-brand-blue text-white text-xs font-bold rounded-xl border-none cursor-pointer shadow-sm font-sans">
                {activePanel === "donation" ? "បិទ" : "ឧបត្ថម្ភមកពួកយើង"}
              </button>
              <button onClick={() => { setIsOpen(false); handlePanelToggle("join"); }} className="w-full py-3 bg-[var(--bg)] border border-[var(--border)] text-brand-charcoal dark:text-white text-xs font-bold rounded-xl cursor-pointer shadow-sm font-sans">
                {activePanel === "join" ? "បិទ" : "ចូលរួមជាមួយពួកយើង"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Premium QR Dropdown Modal Panels */}
      {activePanel && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 mt-4 z-[60] w-full max-w-sm px-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="bg-white dark:bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 shadow-xl text-center flex flex-col items-center relative">
            <button onClick={() => setActivePanel(null)} className="absolute top-4 right-4 h-7 w-7 rounded-full bg-[var(--bg)] text-[var(--text)]/60 flex items-center justify-center font-bold text-xs border-none cursor-pointer hover:opacity-80 transition-opacity">✕</button>

            <div className={`h-11 w-11 rounded-full flex items-center justify-center mb-3 mt-1 ${activePanel === "donation" ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-yellow/10 text-brand-yellow"}`}>
              {activePanel === "donation" ? <QrCode className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
            </div>

            <h3 className="text-base font-bold text-brand-charcoal dark:text-white font-sans m-0">
              {activePanel === "donation" ? "ឧបត្ថម្ភគាំទ្រពួកយើង" : "ចូលរួមជាមួយពួកយើង"}
            </h3>
            <p className="text-xs font-medium text-[var(--text)]/60 mt-1.5 mb-4 px-4 leading-relaxed font-sans">
              {activePanel === "donation" ? "សូមស្កែន QR Code ខាងក្រោមនេះ ដើម្បីចូលរួមឧបត្ថម្ភដល់ក្រុមការងាររបស់យើងខ្ញុំ។" : "សូមស្កែន QR Code ខាងក្រោមនេះ ដើម្បីស្វែងយល់ និងចុះឈ្មោះចូលរួមជាមួយពួកយើង។"}
            </p>

            <div className="w-52 h-52 bg-[var(--bg)] border border-[var(--border)] rounded-xl p-3 shadow-inner flex items-center justify-center overflow-hidden">
              <img src={activePanel === "donation" ? DonationQR : RobotQR} alt="Portal Destination QR" className="w-full h-full object-contain rounded-lg" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}