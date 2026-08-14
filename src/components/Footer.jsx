import React from "react";
import { Link } from "react-router-dom";
import { Share2, Mail, Phone, Heart } from "lucide-react";
import ERobotLogo from "../assets/ERobot.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-slate-700 px-6 sm:px-10 lg:px-16 py-12 lg:py-16 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Link to="/" className="shrink-0 flex items-center">
              <img
                src={ERobotLogo}
                alt="E-Robot Cambodia"
                className="w-11 h-11 rounded-full object-cover border border-slate-200 transition-transform duration-300 hover:scale-105 shadow-xs"
              />
            </Link>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              E-ROBOT CAMBODIA
            </span>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-slate-600 font-medium">
            ចូលរួមជាមួយយើងដើម្បីកុមារកម្ពុជា និងជាផ្នែកមួយនៃការជំរុញ ការអប់រំផ្នែកបច្ចេកវិទ្យាឱ្យកាន់តែរីកចម្រើន។
          </p>

          {/* Social Media Link */}
          <div className="flex items-center mt-1">
            <a
              href="https://www.facebook.com/share/1bJ4sJVeN8/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook page"
              className="w-10 h-10 flex items-center justify-center bg-slate-100 border border-slate-200 text-slate-700 rounded-xl hover:bg-[#0E79B2] hover:text-white hover:border-transparent transition-all duration-300 hover:-translate-y-0.5 shadow-xs"
            >
              <Share2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="flex flex-col gap-4 lg:pl-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#0E79B2]">មាតិកា</p>
            <div className="w-6 h-[2px] bg-[#0E79B2] mt-1 rounded-full" />
          </div>
          <ul className="flex flex-col gap-2.5 text-xs sm:text-sm font-semibold list-none p-0 m-0">
            <li>
              <Link to="/" className="text-slate-600 hover:text-[#0E79B2] transition-colors duration-200">
                ទំព័រដើម
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-slate-600 hover:text-[#0E79B2] transition-colors duration-200">
                អំពីយើង
              </Link>
            </li>
            <li>
              <Link to="/service" className="text-slate-600 hover:text-[#0E79B2] transition-colors duration-200">
                សកម្មភាព
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-slate-600 hover:text-[#0E79B2] transition-colors duration-200">
                ទំនាក់ទំនង
              </Link>
            </li>
            <li>
              <Link to="/sharings" className="text-slate-600 hover:text-[#0E79B2] transition-colors duration-200">
                មាតិកាចែករំលែក
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#0E79B2]">ទំនាក់ទំនង</p>
            <div className="w-6 h-[2px] bg-[#0E79B2] mt-1 rounded-full" />
          </div>
          <div className="flex flex-col gap-3 text-xs sm:text-sm font-semibold text-slate-600">
            <a
              href="mailto:erobotteam@gmail.com"
              className="flex items-center gap-3 text-slate-600 hover:text-[#0E79B2] transition-colors duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0E79B2] shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="break-all">erobotteam@gmail.com</span>
            </a>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0E79B2] shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>+855 10 567 014</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Copyright bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
        <p>© {new Date().getFullYear()} E-ROBOT CAMBODIA. រក្សាសិទ្ធិគ្រប់យ៉ាង។</p>
        <p className="flex items-center gap-1">
          បង្កើតឡើងដោយក្តីស្រឡាញ់ <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> សម្រាប់កុមារកម្ពុជា
        </p>
      </div>
    </footer>
  );
}