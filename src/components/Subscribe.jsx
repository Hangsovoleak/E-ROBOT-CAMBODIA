import React from "react";

export default function Subscribe() {
  return (
    // Integrated your unified global section class
    <section className="section">
      {/* Replaced arbitrary spacing and gradients with the established token layouts */}
      <div 
        className="
          container 
          bg-gradient-to-br 
          from-[var(--surface-light)] 
          to-[var(--surface)] 
          border 
          border-[var(--border-light)] 
          rounded-3xl 
          p-8 
          md:p-12 
          lg:p-16 
          flex 
          flex-col 
          items-center 
          text-center 
          shadow-sm 
          relative 
          overflow-hidden
        "
      >
        
        {/* Subtle decorative background gradient glow utilizing your theme's primary color */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-heading)] uppercase tracking-tight leading-tight m-0">
          តាមដានព័ត៌មានថ្មីៗជាមួយយើង
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-[var(--text-body)]/80 max-w-2xl leading-relaxed mt-4 md:mt-5">
          ចូលរួមជាមួយសហគមន៍ E-ROBOT ដើម្បីស្វែងយល់ពីបច្ចេកវិទ្យាថ្មីៗ និងទទួលបានចំណេះដឹងបន្ថែមពីលើអ្វីដែលអ្នកបានរៀននៅសាលា។
        </p>

        {/* Form Container */}
        <div className="relative w-full max-w-xl sm:max-w-2xl mt-6 md:mt-10 group">
          <input
            type="email"
            placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
            className="
              w-full 
              h-14 
              md:h-16 
              pl-6 
              md:pl-8 
              pr-32 
              sm:pr-36 
              md:pr-40 
              rounded-full 
              text-[var(--text-heading)] 
              text-sm 
              sm:text-base 
              bg-[var(--surface)] 
              border 
              border-[var(--border-light)] 
              shadow-inner 
              focus:outline-none 
              focus:border-primary/50 
              focus:ring-4 
              focus:ring-primary/10 
              transition-all
            "
          />

          <button 
            className="
              absolute 
              right-1.5 
              top-1.5 
              bottom-1.5 
              px-5 
              sm:px-8 
              md:px-10 
              bg-primary 
              text-white 
              text-xs 
              sm:text-sm 
              font-bold 
              rounded-full 
              transition-all 
              duration-300 
              border-none 
              cursor-pointer 
              hover:bg-primary/90 
              hover:-translate-y-0.5 
              active:scale-95 
              shadow-sm
            "
          >
            ចុះឈ្មោះ
          </button>
        </div>

      </div>
    </section>
  );
}