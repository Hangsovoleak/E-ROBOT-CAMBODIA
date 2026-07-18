import React from "react";

export default function Subscribe() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[var(--bg)] to-white dark:from-[var(--surface)] dark:to-[var(--surface)] border border-[var(--border)] rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
        
        {/* Subtle decorative background gradient glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none" />

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-bold text-brand-charcoal dark:text-[var(--text-h)] uppercase tracking-tight leading-tight m-0">
          តាមដានព័ត៌មានថ្មីៗជាមួយយើង
        </h2>

        {/* Description */}
        <p className="font-sans font-medium text-sm sm:text-base md:text-lg text-[var(--text)]/70 max-w-2xl leading-relaxed mt-4 md:mt-5">
          ចូលរួមជាមួយសហគមន៍ E-ROBOT ដើម្បីស្វែងយល់ពីបច្ចេកវិទ្យាថ្មីៗ និងទទួលបានចំណេះដឹងបន្ថែមពីលើអ្វីដែលអ្នកបានរៀននៅសាលា។
        </p>

        {/* Form Container */}
        <div className="relative w-full max-w-xl sm:max-w-2xl mt-6 md:mt-10 group">
          <input
            type="email"
            placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
            className="w-full h-14 md:h-16 pl-6 md:pl-8 pr-32 sm:pr-36 md:pr-40 rounded-full text-brand-charcoal dark:text-white text-sm sm:text-base bg-white dark:bg-[var(--surface)] border border-[var(--border)] shadow-sm focus:outline-none focus:border-brand-blue/50 focus:ring-4 focus:ring-brand-blue/10 transition-all font-sans"
          />

          <button className="absolute right-1.5 top-1.5 bottom-1.5 px-5 sm:px-8 md:px-10 bg-brand-blue text-white text-xs sm:text-sm font-bold rounded-full transition-all duration-300 border-none cursor-pointer hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 shadow-sm font-sans">
            ចុះឈ្មោះ
          </button>
        </div>

      </div>
    </section>
  );
}