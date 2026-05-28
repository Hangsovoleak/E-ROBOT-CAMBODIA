import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, QrCode, UserPlus } from "lucide-react";

import ERobotLogo from "../assets/ERobot.png";
import DonationQR from "../assets/qr.jpg"; 
import RobotQR from "../assets/qrerobot.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => {
    setIsOpen(false);
    setActivePanel(null);
  };

  const handlePanelToggle = (panelType) => {
    if (activePanel === panelType) {
      setActivePanel(null);
    } else {
      setActivePanel(panelType);
    }
  };

  const navItems = [
    { to: "/", label: "ទំព័រដើម" },
    { to: "/about", label: "អំពីយើង" },
    { to: "/services", label: "សកម្មភាព" },
    { to: "/contact", label: "ទំនាក់ទំនង" },
    { to: "/sharings", label: "ការចែករំលែក" },
  ];

  const navLinkStyles = ({ isActive }) =>
    `
      px-4
      py-2
      rounded-xl
      text-sm
      lg:text-[0.95rem]
      font-bold
      transition-all
      duration-300
      border
      whitespace-nowrap
      ${
        isActive
          ? "text-[#FF383C] bg-[#FF383C]/10 border-[#FF383C]/20 shadow-sm"
          : "text-[#192048] dark:text-slate-200 border-transparent hover:text-[#FF383C] dark:hover:text-[#FF383C] hover:bg-white/40 dark:hover:bg-white/5"
      }
    `;

  return (
    <header className="w-full sticky top-0 z-50 transition-colors duration-300 bg-white/70 dark:bg-[#161d33]/70 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/40 shadow-sm">
      
      {/* =========================
          Main Navbar Frame
      ========================== */}
      <nav className="w-full">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between gap-4">
            
            <Link to="/" onClick={closeMenu} className="shrink-0 flex items-center">
              <img
                src={ERobotLogo}
                alt="E-Robot"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} className={navLinkStyles}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Action Handles */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={() => handlePanelToggle('donation')}
                className={`min-h-[2.75rem] px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 active:scale-95 cursor-pointer border-none shadow-md ${
                  activePanel === 'donation' 
                    ? "bg-slate-900 dark:bg-white text-white dark:text-[#192048]" 
                    : "bg-[#FF383C] text-white hover:bg-[#ff5256] hover:scale-[1.02]"
                }`}
              >
                {activePanel === 'donation' ? "បិទផ្ទាំងបង្អួច" : "ឧបត្ថម្ភមកពួកយើង"}
              </button>

              <button
                onClick={() => handlePanelToggle('join')}
                className={`min-h-[2.75rem] px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 active:scale-95 cursor-pointer border-none shadow-md ${
                  activePanel === 'join' 
                    ? "bg-slate-900 dark:bg-white text-white dark:text-[#192048]" 
                    : "bg-[#192048] dark:bg-blue-600 text-white hover:opacity-90 hover:scale-[1.02]"
                }`}
              >
                {activePanel === 'join' ? "បិទការចុះឈ្មោះ" : "ចូលរួមជាមួយពួកយើង"}
              </button>
            </div>

            {/* Mobile Hamburger Icon */}
            <button
              onClick={toggleMenu}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl text-[#192048] dark:text-slate-100 hover:bg-white/40 dark:hover:bg-white/5 transition-colors border-none bg-transparent cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 sm:px-6 pb-5">
            <div className="bg-white/80 dark:bg-[#161d33]/80 border border-white/20 dark:border-slate-800/80 rounded-3xl shadow-xl p-4 flex flex-col gap-1.5 backdrop-blur-md">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 no-underline ${isActive ? "bg-[#FF383C]/10 text-[#FF383C]" : "text-[#192048] dark:text-white/90 hover:bg-white/40 dark:hover:bg-white/5"}`}
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="border-t border-slate-200/60 dark:border-slate-800 my-2" />

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handlePanelToggle('donation');
                  }}
                  className="w-full min-h-[2.75rem] bg-[#FF383C] text-white text-xs font-bold py-3 rounded-xl transition-all duration-300 active:scale-95 border-none cursor-pointer shadow-sm"
                >
                  {activePanel === 'donation' ? "បិទផ្ទាំងបង្អួច" : "ឧបត្ថម្ភមកពួកយើង"}
                </button>

                <button 
                  onClick={() => {
                    setIsOpen(false);
                    handlePanelToggle('join');
                  }}
                  className="w-full min-h-[2.75rem] bg-[#192048] dark:bg-blue-600 text-white text-xs font-bold py-3 rounded-xl transition-all duration-300 active:scale-95 border-none cursor-pointer shadow-sm"
                >
                  {activePanel === 'join' ? "បិទការចុះឈ្មោះ" : "ចូលរួមជាមួយពួកយើង"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* =========================
          DYNAMIC FULL GLASS ACCENT DROPDOWN PANEL
      ========================== */}
      {activePanel && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 mt-4 z-[60] w-full max-w-sm transition-all duration-300 animate-in slide-in-from-top-4 px-4">
          <div className="bg-white dark:bg-[#161d33] border border-slate-200/60 dark:border-slate-800/80 rounded-3xl p-6 shadow-2xl text-center flex flex-col items-center relative">
            
            {/* Inline Panel Dismiss Button */}
            <button 
              onClick={() => setActivePanel(null)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center font-bold text-sm border-none cursor-pointer hover:opacity-80 transition-opacity"
            >
              ✕
            </button>

            {/* Condition 1: Donation Active */}
            {activePanel === 'donation' && (
              <>
                <div className="h-11 w-11 bg-red-50 dark:bg-red-500/10 text-[#FF383C] rounded-full flex items-center justify-center mb-3 mt-1">
                  <QrCode className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white m-0">
                  ឧបត្ថម្ភគាំទ្រពួកយើង
                </h3>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1 mb-4 px-4 leading-relaxed">
                  សូមស្កែន QR Code ខាងក្រោមនេះ ដើម្បីចូលរួមឧបត្ថម្ភដល់ក្រុមការងាររបស់យើងខ្ញុំ។
                </p>
                <div className="w-56 h-56 bg-slate-50 dark:bg-[#111628] border border-slate-200/60 dark:border-slate-800 rounded-2xl p-3 shadow-inner flex items-center justify-center overflow-hidden">
                  <img src={DonationQR} alt="ABA Donation QR" className="w-full h-full object-contain rounded-xl" />
                </div>
              </>
            )}

            {/* Condition 2: Join Us Active */}
            {activePanel === 'join' && (
              <>
                <div className="h-11 w-11 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-3 mt-1">
                  <UserPlus className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-900 dark:text-white m-0">
                  ចូលរួមជាមួយពួកយើង
                </h3>
                <p className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1 mb-4 px-4 leading-relaxed">
                  សូមស្កែន QR Code ខាងក្រោមនេះ ដើម្បីស្វែងយល់ និងចុះឈ្មោះចូលរួមជាមួយពួកយើង។
                </p>
                <div className="w-56 h-56 bg-slate-50 dark:bg-[#111628] border border-slate-200/60 dark:border-slate-800 rounded-2xl p-3 shadow-inner flex items-center justify-center overflow-hidden">
                  <img src={RobotQR} alt="E-Robot Team Registration QR" className="w-full h-full object-contain rounded-xl" />
                </div>
              </>
            )}

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;