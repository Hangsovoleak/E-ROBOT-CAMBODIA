import React from "react";

export default function GridFeedback() {
  const feedbacks = [
    {
      name: "RORN HANGSOVOLEAK",
      university: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
      image: "https://i.pinimg.com/736x/54/f8/e5/54f8e5d2ffd42936c79315012a560e03.jpg",
      text: "ខ្ញុំជាអ្នកស្ម័គ្រចិត្តផ្នែកបណ្តុះបណ្តាលគ្រូលើកម្មវិធី Scratch និង Arduino ដើម្បីឱ្យសិស្សានុសិស្សអាចសិក្សាពីបច្ចេកវិទ្យា។ ខ្ញុំមានសេចក្តីរីករាយក្នុងជួយចែករំលែកចំណេះដឹងទាំងនេះទៅកាន់ពួកគេ។",
    },
    {
      name: "HENG LYHORNG",
      university: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
      image: "https://i.pinimg.com/736x/fd/a8/26/fda8264e314ed532889eb26fa5eb40e4.jpg",
      text: "ខ្ញុំជាអ្នកស្ម័គ្រចិត្តផ្នែកផលិតមាតិកា (Content Creator) ដើម្បីជួយឱ្យសិស្សានុសិស្សអាចស្វែងយល់កាន់តែច្បាស់ពីបច្ចេកវិទ្យា។ ខ្ញុំចូលចិត្តក្នុងការចែករំលែកបទពិសោធន៍ថ្មីៗដល់យុវជនជំនាន់ក្រោយ។",
    },
    {
      name: "LONG PORTY",
      university: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
      image: "https://i.pinimg.com/736x/ca/3a/ee/ca3aee1248c25c652e338cbba6e372ad.jpg",
      text: "ខ្ញុំជាអ្នកស្ម័គ្រចិត្តផ្នែកទីផ្សារឌីជីថល (Digital Marketer) ក្នុងការផ្សព្វផ្សាយគម្រោងរបស់យើងទៅកាន់សិស្សានុសិស្ស ដើម្បីឱ្យពួកគេទទួលបានឱកាសសិក្សាពីបច្ចេកវិទ្យាទំនើបៗ។",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-[var(--surface)] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-[var(--border)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 cursor-pointer flex flex-col gap-5"
          >
            {/* Subtle brand glow outline on hover */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-blue/20 transition-colors duration-300 pointer-events-none" />

            {/* Profile Header */}
            <div className="flex items-center gap-4">
              {/* Avatar Frame with custom shadow and brand color hint */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-[var(--border)] shadow-sm shrink-0 transition-colors duration-300 group-hover:border-brand-blue/40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Identity Details */}
              <div className="flex flex-col min-w-0">
                <span className="font-sans font-bold text-sm sm:text-base text-brand-charcoal dark:text-[var(--text-h)] tracking-wide uppercase truncate transition-colors duration-200 group-hover:text-brand-blue">
                  {item.name}
                </span>
                <span className="font-sans font-medium text-xs sm:text-sm text-[var(--text)]/60 truncate mt-0.5">
                  {item.university}
                </span>
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <p className="font-sans font-medium text-sm sm:text-base text-[var(--text)]/90 leading-relaxed break-words">
              “{item.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}