import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

import TelegramQR from "../assets/telegram_bong_kosal.png"; 

export default function Contact() {
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, title: 'អ៊ីមែល', value: 'erobotteam@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, title: 'លេខទូរស័ព្ទ', value: '+855 10 567 014' },
    { icon: <MapPin className="w-5 h-5" />, title: 'ទីតាំង', value: 'ភ្នំពេញ, កម្ពុជា' },
  ];

  return (
    // Integrated core dark container color directly to avoid default flashes
    <section className="section min-h-screen bg-[#191923] py-16 px-4">
      {/* Container constraints matching layout */}
      <div className="max-w-7xl mx-auto grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        
        {/* Left Column: Information Header & Information Cards */}
        <div className="space-y-6 md:space-y-8">
          {/* Main Glass Panel */}
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-2xl border border-white/10">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white m-0">
              ទាក់ទងមកកាន់ក្រុមការងារ E-ROBOT
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl font-medium">
              យើងរីករាយនៅក្នុងការជួយអ្នកទាំងអស់គ្នា។ សូមស្កែន QR Code ឬទាក់ទងតាមរយៈព័ត៌មានខាងក្រោម ហើយយើងនឹងតបទៅកាន់អ្នកក្នុងពេលឆាប់ៗនេះ។
            </p>
          </div>

          {/* Three Info Grid Glass Items */}
          <div className="grid gap-4 sm:grid-cols-3">
            {contactInfo.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl bg-white/[0.03] backdrop-blur-xl p-5 shadow-lg border border-white/10 hover:bg-white/[0.06] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Accent shape adjusting dynamic tint matching #ff383c icon wrapper style */}
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#ff383c]/10 text-[#ff383c] mb-4 transition-all duration-300 group-hover:bg-[#ff383c] group-hover:text-white shadow-md">
                  {item.icon}
                </div>
                <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">{item.title}</span>
                <p className="mt-2 text-sm sm:text-base font-semibold text-white truncate m-0">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Premium Telegram Scan Card with Glass Properties */}
        <div className="rounded-3xl bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-2xl border border-white/10 text-center flex flex-col items-center relative overflow-hidden group">
          {/* Subtle brand dynamic glowing accent utilizing primary theme color #ff383c */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ff383c]/5 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight max-w-xs m-0">
            ស្កែនភ្ជាប់ទំនាក់ទំនង ឬផ្ញើសារមកកាន់យើងខ្ញុំផ្ទាល់
          </h2>
          <p className="mt-3 text-xs font-medium text-slate-400 px-4 leading-relaxed">
            សូមប្រើប្រាស់កម្មវិធី Telegram ដើម្បីស្កែនដើម្បីទាក់ទង ឬសាកសួរព័ត៌មានផ្សេងៗបន្ថែម។
          </p>

          {/* QR Display Frame embedded inside glass elements */}
          <div className="mt-6 w-52 h-52 bg-white/[0.02] border border-white/10 rounded-2xl p-3 shadow-inner flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-[#ff383c]/30">
            <img 
              src={TelegramQR} 
              alt="E-Robot Telegram Support QR" 
              className="w-full h-full object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          <a 
            href="https://t.me/Suy_Kosal"
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full max-w-xs rounded-full bg-[#ff383c] text-white text-sm font-bold py-3.5 border-none transition-all duration-300 hover:bg-[#ff383c]/90 hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-[#ff383c]/20 no-underline cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            បើកកម្មវិធី Telegram
          </a>
        </div>

      </div>
    </section>
  );
}