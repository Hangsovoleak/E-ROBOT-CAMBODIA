import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import ERobotLogo from "../assets/ERobot.png";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.goals, path: "/about" },
    { name: t.nav.events, path: "/services" },
    { name: t.nav.sharings, path: "/sharings" },
  ];

  const programs = [
    { name: "Robotics & Arduino", path: "/services" },
    { name: "Coding (Scratch)", path: "/services" },
    { name: "Canva & Digital Design", path: "/services" },
    { name: "STEM & Charity Workshop", path: "/services" },
  ];

  return (
    <footer className="w-full bg-[#192048] text-white border-t border-[#192048] pt-14 pb-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Footer Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Link to="/" className="shrink-0 flex items-center">
                <img
                  src={ERobotLogo}
                  alt="E-Robot Logo"
                  className="w-12 h-12 rounded-full object-cover border border-white/20"
                />
              </Link>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white block">
                  E - ROBOT
                </span>
                <span className="text-[11px] font-bold text-[#FF383C] uppercase tracking-wider block">
                  Education & Technology
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-sm m-0">
              {t.footer.tagline}
            </p>

            {/* Social Icons */}
            <div className="pt-1 flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1bJ4sJVeN8/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                className="w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-80 cursor-pointer"
              >
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8 object-contain" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram page"
                className="w-9 h-9 flex items-center justify-center transition-opacity hover:opacity-80 cursor-pointer"
              >
                <img src={instagramIcon} alt="Instagram" className="w-8 h-8 object-contain" />
              </a>
              <a
                href="https://t.me/Suy_Kosal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-8 h-8 flex items-center justify-center rounded-sm bg-[#FF383C] text-white hover:bg-[#e02d31] transition-colors shadow-none cursor-pointer"
              >
                <Send className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold uppercase text-[#FF383C] tracking-wider m-0">
              {t.footer.quickLinks}
            </h3>
            <div className="w-10 h-0.5 bg-[#FF383C] rounded-full mb-3" />
            <ul className="space-y-2.5 p-0 m-0 list-none text-xs sm:text-sm font-medium text-slate-300">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path}
                    className="hover:text-[#FF383C] transition-colors inline-block no-underline text-slate-300"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs & Activities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold uppercase text-[#FF383C] tracking-wider m-0">
              {t.footer.programs}
            </h3>
            <div className="w-10 h-0.5 bg-[#FF383C] rounded-full mb-3" />
            <ul className="space-y-2.5 p-0 m-0 list-none text-xs sm:text-sm font-medium text-slate-300">
              {programs.map((prog, idx) => (
                <li key={idx}>
                  <Link 
                    to={prog.path}
                    className="hover:text-[#FF383C] transition-colors inline-block no-underline text-slate-300"
                  >
                    <span>{prog.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-extrabold uppercase text-[#FF383C] tracking-wider m-0">
              {t.footer.contact}
            </h3>
            <div className="w-10 h-0.5 bg-[#FF383C] rounded-full mb-3" />
            <div className="space-y-3 text-xs sm:text-sm font-medium text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF383C] shrink-0 mt-0.5" />
                <span>{t.footer.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF383C] shrink-0" />
                <span>+855 10 567 014</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF383C] shrink-0" />
                <span className="truncate">erobotteam@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#FF383C] shrink-0" />
                <span>www.erobot.org</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}