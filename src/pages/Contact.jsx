import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

import TelegramQR from "../assets/qrtele.jpg"; // Make sure to add your Telegram QR image here

function Contact() {
  return (
    <section className="min-h-screen bg-[#f8fafc] py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.9fr_0.7fr] items-start">
        
        {/* Left Section: Contact Details Card Stack */}
        <div className="space-y-8">
          <div className="rounded-[2rem] bg-white p-8 shadow-2xl border border-slate-200/80">
            <p className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-[#192048]">
              ទាក់ទងមកកាន់ក្រុមការងារ E-ROBOT
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 max-w-2xl">
              យើងរីករាយបានជួយអ្នកទាំងអស់គ្នា។ សូមស្កែន QR Code ឬទាក់ទងតាមរយៈព័ត៌មានខាងក្រោម ហើយយើងនឹងតបប្រតិកម្មក្នុងរយៈពេលឆាប់ៗនេះ។
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <Mail className="w-5 h-5" />,
                title: 'អ៊ីមែល',
                value: 'erobot@gmail.com',
              },
              {
                icon: <Phone className="w-5 h-5" />,
                title: 'លេខទូរស័ព្ទ',
                value: '+855 10 567 014',
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: 'ទីតាំង',
                value: 'ភ្នំពេញ, ប្រទេសកម្ពុជា',
              },
              {
                icon: <Send className="w-5 h-5" />,
                title: 'រយៈពេលឆ្លើយតប',
                value: 'ក្នុងរយះពេល ១២ ម៉ោង',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] bg-white p-6 shadow-lg border border-slate-200/80 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-3xl bg-[#ff383c]/10 text-[#ff383c] mb-4">
                  {item.icon}
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.title}</p>
                <p className="mt-3 text-base font-semibold text-slate-800">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Right Section: FIXED Telegram QR Code Presentation Panel */}
        <div className="rounded-[2rem] bg-[#192048] p-8 shadow-2xl text-white text-center flex flex-col items-center">
          <p className="mt-4 text-2xl sm:text-3xl font-black leading-tight max-w-sm">
            ស្កែនភ្ជាប់ទំនាក់ទំនង ឬផ្ញើសារមកកាន់យើងខ្ញុំផ្ទាល់
          </p>
          <p className="mt-10 text-xs text-white/70 font-medium px-6">
            សូមប្រើប្រាស់កម្មវិធី Telegram ដើម្បីស្កែនទាក់ទង ឬសាកសួរព័ត៌មានបន្ថែមផ្សេងៗ។
          </p>

          {/* Centered Telegram QR Frame Card */}
          <div className="mt-8 w-64 h-64 bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-4 shadow-inner flex items-center justify-center overflow-hidden">
            <img 
              src={TelegramQR} 
              alt="E-Robot Telegram Support Account QR Code" 
              className="w-full h-full object-contain rounded-2xl bg-white p-2"
            />
          </div>

          {/* Alternative Direct Link Action Button */}
          <a 
            href="https://t.me/hangsovoleakrorn67"
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 w-full max-w-xs rounded-full bg-[#ff383c] py-3.5 text-sm font-bold transition hover:bg-[#ff646c] hover:scale-[1.02] active:scale-95 text-white no-underline"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            បើកកម្មវិធី Telegram
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;