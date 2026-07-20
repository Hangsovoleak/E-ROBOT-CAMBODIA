import React from "react";

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

export default function GridFeedback() {
  return (
    // Integrated your global .section padding token
    <section className="section">
      {/* Integrated your global .container rule with clean grid mapping */}
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feedbacks.map((item, index) => (
          <article
            key={index}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-[var(--border-light)]
              bg-[var(--surface)]
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-primary/40
              hover:shadow-xl
              flex
              flex-col
              gap-6
            "
          >
            {/* Top accent line matching your card layout choice */}
            <div
              className="
                absolute
                left-0
                top-0
                h-1
                w-0
                bg-primary
                transition-all
                duration-500
                group-hover:w-full
              "
            />

            {/* Profile Header */}
            <div className="flex items-center gap-4">
              {/* Avatar Layout frame wrapper */}
              <div 
                className="
                  w-16 
                  h-16 
                  rounded-full 
                  overflow-hidden 
                  border 
                  border-[var(--border)] 
                  shadow-sm 
                  shrink-0 
                  transition-colors 
                  duration-300 
                  group-hover:border-primary/50
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Identity Details */}
              <div className="flex flex-col min-w-0">
                <span 
                  className="
                    font-bold 
                    text-base 
                    text-[var(--text-heading)] 
                    tracking-wide 
                    uppercase 
                    truncate 
                    transition-colors 
                    duration-300 
                    group-hover:text-primary
                  "
                >
                  {item.name}
                </span>
                <span className="text-sm text-[var(--text-muted)] truncate mt-0.5">
                  {item.university}
                </span>
              </div>
            </div>

            {/* Testimonial content block */}
            <p className="leading-8 text-[var(--text-body)]">
              “{item.text}”
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}