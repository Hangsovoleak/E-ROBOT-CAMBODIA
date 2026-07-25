import React from "react";
import { Link } from "react-router-dom";
import { Share2, Mail, Phone } from "lucide-react";
import ERobotLogo from "../assets/ERobot.png";

  const closeMenu = () => { setIsOpen(false); setActivePanel(null); };
  
export default function Footer() {
  return (
    // Integrated core dark palette #191923 with an upgraded glass-style top border border-white/10
    <footer className="w-full bg-[#191923] text-slate-300 px-6 sm:px-10 lg:px-16 py-14 lg:py-20 border-t border-white/10 relative overflow-hidden">
      
      {/* Subtle background ambient light dot to give depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ff383c]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3.5 group">
            {/* Logo Badge Container with clean red glow accent */}
            <Link to="/" onClick={closeMenu} className="shrink-0 flex items-center">
                <img 
                  src={ERobotLogo} 
                  alt="E-Robot" 
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-[var(--border)] transition-transform duration-300 hover:scale-105" 
                />
            </Link>
            <span className="text-2xl font-black tracking-tight text-white">
              E-ROBOT
            </span>
          </div>
          
          <p className="text-sm sm:text-base leading-relaxed max-w-sm text-slate-400 font-medium">
            ចូលរួមជាមួយយើងដើម្បីកុមារកម្ពុជា និងជាផ្នែកមួយនៃការជំរុញ ការអប់រំផ្នែកបច្ចេកវិទ្យាឱ្យកាន់តែរីកចម្រើន។
          </p>

          {/* Clean Glassmorphic Social Badge */}
          <div className="flex items-center mt-2">
            <a 
              href="https://www.facebook.com/share/1bJ4sJVeN8/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook page"
              className="w-11 h-11 flex items-center justify-center bg-white/[0.03] border border-white/10 text-slate-300 rounded-2xl hover:bg-[#ff383c] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#ff383c]/20"
            >
              <Share2 className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="flex flex-col gap-5 lg:pl-12">
          <div className="relative">
            <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#ff383c]">មាតិកា</p>
            <div className="w-6 h-[2px] bg-[#ff383c]/50 mt-1.5 rounded-full" />
          </div>
          <ul className="flex flex-col gap-3.5 text-sm sm:text-base font-semibold">
            <li>
              <Link to="/" className="text-slate-400 hover:text-[#ff383c] transition-colors duration-200 no-underline inline-flex items-center gap-1 group">
                <span className="w-0 h-[1.5px] bg-[#ff383c] group-hover:w-2 transition-all duration-200 rounded-full" />
                អំពីយើង
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-400 hover:text-[#ff383c] transition-colors duration-200 no-underline inline-flex items-center gap-1 group">
                <span className="w-0 h-[1.5px] bg-[#ff383c] group-hover:w-2 transition-all duration-200 rounded-full" />
                គោលដៅ
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-slate-400 hover:text-[#ff383c] transition-colors duration-200 no-underline inline-flex items-center gap-1 group">
                <span className="w-0 h-[1.5px] bg-[#ff383c] group-hover:w-2 transition-all duration-200 rounded-full" />
                ព្រឹត្តិការណ៍
              </Link>
            </li>
            <li>
              <Link to="/sharings" className="text-slate-400 hover:text-[#ff383c] transition-colors duration-200 no-underline inline-flex items-center gap-1 group">
                <span className="w-0 h-[1.5px] bg-[#ff383c] group-hover:w-2 transition-all duration-200 rounded-full" />
                មាតិកាចែករំលែក
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-5">
          <div className="relative">
            <p className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#ff383c]">ទំនាក់ទំនង</p>
            <div className="w-6 h-[2px] bg-[#ff383c]/50 mt-1.5 rounded-full" />
          </div>
          <div className="flex flex-col gap-4 text-sm sm:text-base font-semibold text-slate-400">
            <a 
              href="mailto:erobotteam@gmail.com" 
              className="flex items-center gap-3 break-all text-slate-400 hover:text-[#ff383c] transition-colors duration-200 no-underline group"
            >
              <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 group-hover:bg-[#ff383c]/10 group-hover:text-[#ff383c] transition-all duration-200 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span>erobotteam@gmail.com</span>
            </a>
            
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-slate-400 group-hover:bg-[#ff383c]/10 group-hover:text-[#ff383c] transition-all duration-200 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <span className="group-hover:text-slate-300 transition-colors duration-200">+855 10 567 014</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}