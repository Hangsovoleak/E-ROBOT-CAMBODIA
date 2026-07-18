import React from "react";
import { NotebookTabs, Cpu, Route } from "lucide-react";

export default function GridSection() {
  const cardData = [
    {
      icon: <NotebookTabs className="w-6 h-6 sm:w-7 sm:h-7 text-brand-warm-white" />,
      title: "កម្មវិធីសិក្សា",
      desc: "កម្មវិធីសិក្សារបស់យើងត្រូវបានរៀបចំឡើងដើម្បីផ្ដល់នូវជំនាញ និងចំណេះដឹងបច្ចេកវិទ្យាដែលសិស្សានុសិស្សត្រូវការសម្រាប់ការជោគជ័យក្នុងយុគសម័យទំនើប។",
    },
    {
      icon: <Cpu className="w-6 h-6 sm:w-7 sm:h-7 text-brand-warm-white" />,
      title: "ប្រព័ន្ធអេកូឡូស៊ី",
      desc: "ការបង្កើតសហគមន៍ដ៏រស់រវើកមួយសម្រាប់អ្នកសិក្សា និងអ្នកអប់រំ ដើម្បីផ្លាស់ប្តូរបទពិសោធន៍ និងរីកចម្រើនជាមួយគ្នា។",
    },
    {
      icon: <Route className="w-6 h-6 sm:w-7 sm:h-7 text-brand-warm-white" />,
      title: "វិថីសិក្សាច្បាស់លាស់",
      desc: "ការរៀបចំផ្លូវដើរ និងរចនាសម្ព័ន្ធសិក្សាដែលជួយណែនាំសិស្សានុសិស្សតាំងពីកម្រិតដំបូង រហូតក្លាយជាអ្នកជំនាញ។",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cardData.map((item, index) => (
          <div 
            key={index}
            className="group relative flex flex-col items-center text-center bg-white dark:bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 sm:p-8 min-h-[16rem] shadow-sm hover:shadow-md transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
          >
            {/* Top decorative accent using Golden Yellow line indicator */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-brand-yellow/0 group-hover:bg-brand-yellow rounded-t-2xl transition-colors duration-300" />

            {/* Icon Box with Royal Blue Gradient */}
            <div className="mb-6 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-[#2A3F6F] shadow-[0_4px_12px_rgba(62,91,153,0.15)] transition-transform duration-300 group-hover:scale-105">
              {item.icon}
            </div>

            {/* Title (Dark Charcoal to Royal Blue on hover) */}
            <h3 className="font-sans font-bold text-lg sm:text-xl text-brand-charcoal dark:text-[var(--text-h)] mb-3 leading-snug transition-colors duration-200 group-hover:text-brand-blue">
              {item.title}
            </h3>

            {/* Description */}
            <p className="font-sans font-medium text-sm sm:text-base text-[var(--text)]/90 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}