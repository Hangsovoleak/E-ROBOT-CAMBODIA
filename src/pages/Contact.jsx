import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

import TelegramQR from "../assets/telegram_bong_kosal.png"; 

export default function Contact() {
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, title: 'អ៊ីមែល', value: 'erobotteam@gmail.com' },
    { icon: <Phone className="w-5 h-5" />, title: 'លេខទូរស័ព្ទ', value: '+855 10 567 014' },
    { icon: <MapPin className="w-5 h-5" />, title: 'ទីតាំង', value: 'ភ្នំពេញ, កម្ពុជា' }, // Replaced 'NA' with professional local fallback
  ];

  return (
    <section className="min-h-screen bg-[var(--bg)] py-12 lg:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        
        {/* Left Column: Information Header & Information Cards */}
        <div className="space-y-6 md:space-y-8">
          <div className="rounded-2xl bg-white dark:bg-[var(--surface)] p-6 sm:p-8 shadow-sm border border-[var(--border)]">
            <h1 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-brand-charcoal dark:text-white m-0">
              ទាក់ទងមកកាន់ក្រុមការងារ E-ROBOT
            </h1>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[var(--text)]/70 max-w-2xl font-sans font-medium">
              យើងរីករាយនៅក្នុងការជួយអ្នកទាំងអស់គ្នា។ សូមស្កែន QR Code ឬទាក់ទងតាមរយៈព័ត៌មានខាងក្រោម ហើយយើងនឹងតបទៅកាន់អ្នកក្នុងពេលឆាប់ៗនេះ។
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {contactInfo.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl bg-white dark:bg-[var(--surface)] p-5 shadow-sm border border-[var(--border)] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue mb-4 transition-colors group-hover:bg-brand-blue group-hover:text-white shadow-inner">
                  {item.icon}
                </div>
                <span className="text-xs uppercase text-[var(--text)]/50 font-sans font-bold tracking-wider">{item.title}</span>
                <p className="mt-2 text-sm sm:text-base font-sans font-semibold text-brand-charcoal dark:text-[var(--text-h)] truncate m-0">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Premium Telegram Scan Card */}
        <div className="rounded-2xl bg-white dark:bg-[var(--surface)] p-6 sm:p-8 shadow-sm border border-[var(--border)] text-center flex flex-col items-center relative overflow-hidden group">
          {/* Subtle brand dynamic glowing accent */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-xl sm:text-2xl font-sans font-bold text-brand-charcoal dark:text-white leading-tight max-w-xs m-0">
            ស្កែនភ្ជាប់ទំនាក់ទំនង ឬផ្ញើសារមកកាន់យើងខ្ញុំផ្ទាល់
          </h2>
          <p className="mt-3 text-xs font-sans font-medium text-[var(--text)]/60 px-4 leading-relaxed">
            សូមប្រើប្រាស់កម្មវិធី Telegram ដើម្បីស្កែនដើម្បីទាក់ទង ឬសាកសួរព័ត៌មានផ្សេងៗបន្ថែម។
          </p>

          {/* QR Display Frame */}
          <div className="mt-6 w-52 h-52 bg-[var(--bg)] border border-[var(--border)] rounded-xl p-3 shadow-inner flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-brand-blue/20">
            <img 
              src={TelegramQR} 
              alt="E-Robot Telegram Support QR" 
              className="w-full h-full object-contain rounded-lg bg-white p-1"
            />
          </div>

          <a 
            href="https://t.me/Suy_Kosal"
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 w-full max-w-xs rounded-full bg-brand-blue text-white text-sm font-bold font-sans py-3.5 border-none transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 shadow-sm no-underline cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            បើកកម្មវិធី Telegram
          </a>
        </div>

      </div>
    </section>
  );
}