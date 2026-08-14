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
    <section className="min-h-screen bg-white py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-start">
        
        {/* Left column info */}
        <div className="space-y-6 md:space-y-8">
          <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xs border border-slate-200">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#0E79B2]">ទំនាក់ទំនង</span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 m-0">
              ទាក់ទងមកកាន់ក្រុមការងារ E-ROBOT
            </h1>
            <p className="mt-4 text-xs sm:text-base leading-relaxed text-slate-600 max-w-2xl font-medium">
              យើងរីករាយនៅក្នុងការជួយអ្នកទាំងអស់គ្នា។ សូមស្កែន QR Code ឬទាក់ទងតាមរយៈព័ត៌មានខាងក្រោម ហើយយើងនឹងតបទៅកាន់អ្នកក្នុងពេលឆាប់ៗនេះ។
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {contactInfo.map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl bg-white p-5 shadow-xs border border-slate-200 hover:border-sky-300 transition-all duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sky-50 text-[#0E79B2] border border-sky-100 mb-3 transition-all duration-200 group-hover:bg-[#0E79B2] group-hover:text-white shadow-2xs">
                  {item.icon}
                </div>
                <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">{item.title}</span>
                <p className="mt-1 text-xs sm:text-sm font-bold text-slate-900 truncate m-0">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Right column QR card */}
        <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-xs border border-slate-200 text-center flex flex-col items-center relative overflow-hidden group">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight max-w-xs m-0">
            ស្កែនភ្ជាប់ទំនាក់ទំនងមកកាន់យើងខ្ញុំផ្ទាល់
          </h2>
          <p className="mt-2 text-xs font-medium text-slate-500 px-4 leading-relaxed">
            សូមប្រើប្រាស់កម្មវិធី Telegram ដើម្បីស្កែនដើម្បីទាក់ទង ឬសាកសួរព័ត៌មានផ្សេងៗបន្ថែម។
          </p>

          <div className="mt-6 w-52 h-52 bg-slate-50 border border-slate-200 rounded-2xl p-3 shadow-inner flex items-center justify-center overflow-hidden transition-all duration-200 group-hover:border-sky-300">
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
            className="mt-6 inline-flex items-center justify-center gap-2 w-full max-w-xs rounded-2xl bg-[#0E79B2] text-white text-xs sm:text-sm font-bold py-3.5 border-none transition-all duration-200 hover:bg-[#0C6C9F] active:scale-95 shadow-xs no-underline cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            បើកកម្មវិធី Telegram
          </a>
        </div>

      </div>
    </section>
  );
}