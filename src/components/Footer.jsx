import React from "react";
import ERobotLogo from "../assets/ERobot.png";
import Facebook from "../assets/facebook.png";
import about from "../pages/AboutUs";
import goal from "../pages/Goals";
import activity from "../pages/Events";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-charcoal text-white px-4 sm:px-8 lg:px-16 py-12 lg:py-16 border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <img src={ERobotLogo} alt="E-Robot" className="w-12 h-12 rounded-full object-cover shadow-sm border border-brand-warm-white/10" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight">E-ROBOT</span>
          </div>
          <p className="font-sans text-sm sm:text-base leading-relaxed max-w-sm">
            ចូលរួមជាមួយយើងដើម្បីកុមារកម្ពុជា និងជាផ្នែកមួយនៃការជំរុញ ការអប់រំផ្នែកបច្ចេកវិទ្យាឱ្យកាន់តែរីកចម្រើន។
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/share/1bJ4sJVeN8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 flex items-center justify-center bg-brand-blue/10 rounded-full hover:bg-brand-blue/20 transition-all duration-300 hover:-translate-y-0.5">
              <img src={Facebook} alt="Facebook" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider">មាតិកា</p>
          <ul className="flex flex-col gap-2.5 text-sm sm:text-base font-medium">
            <li><a href={about} className=" hover:text-brand-blue transition-colors">អំពីយើង</a></li>
            <li><a href={goal} className=" hover:text-brand-blue transition-colors">គោលដៅ</a></li>
            <li><a href={activity} className=" hover:text-brand-blue transition-colors">ព្រឹត្តិការណ៍</a></li>
            <li><a href="#" className=" hover:text-brand-blue transition-colors">មាតិកាសិក្សា</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider">ទំនាក់ទំនង</p>
          <div className="flex flex-col gap-2.5 text-sm sm:text-base font-medium">
            <span className="break-all hover:text-brand-blue cursor-pointer transition-colors">erobotteam@gmail.com</span>
            <span>+855 10 567 014</span>
          </div>
        </div>
      </div>

      {/* Sub-Footer Copyright Note */}
      <div className="mt-10 pt-6 border-t border-[var(--border)] text-center">
        <p className="text-xs sm:text-sm  max-w-3xl mx-auto leading-relaxed">
          E-ROBOT - អ៊ី រ៉ូបូត គឺជាអង្គការដែលមានបេសកកម្មក្នុងការផ្តល់នូវការអប់រំផ្នែកបច្ចេកវិទ្យា និងសហគ្រិនភាពដល់កុមារកម្ពុជា។
        </p>
      </div>
    </footer>
  );
}