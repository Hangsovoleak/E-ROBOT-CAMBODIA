import React from "react";
import { NotebookTabs, Cpu, Route } from "lucide-react";

const cardData = [
  {
    icon: NotebookTabs,
    title: "កម្មវិធីសិក្សា",
    desc: "កម្មវិធីសិក្សារបស់យើងត្រូវបានរៀបចំឡើង ដើម្បីផ្ដល់នូវជំនាញ និងចំណេះដឹងបច្ចេកវិទ្យា ដែលសិស្សានុសិស្សត្រូវការសម្រាប់ភាពជោគជ័យក្នុងសតវត្សទី២១។",
  },
  {
    icon: Cpu,
    title: "ប្រព័ន្ធអេកូឡូស៊ី",
    desc: "បង្កើតសហគមន៍សិក្សាដែលភ្ជាប់អ្នកសិក្សា អ្នកអប់រំ និងអ្នកជំនាញ ដើម្បីចែករំលែកបទពិសោធន៍ និងរីកចម្រើនជាមួយគ្នា។",
  },
  {
    icon: Route,
    title: "វិថីសិក្សាច្បាស់លាស់",
    desc: "ណែនាំសិស្សានុសិស្សតាមរយៈផែនការសិក្សាដែលមានរចនាសម្ព័ន្ធច្បាស់លាស់ ចាប់ពីមូលដ្ឋានរហូតដល់កម្រិតជំនាញ។",
  },
];

export default function GridSection() {
  return (
    <section className="py-6 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">

        {cardData.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-xs
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-[#0E79B2]/40
                hover:shadow-md
              "
            >
              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-0
                  bg-[#0E79B2]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              <div
                className="
                  mb-6
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-sky-50
                  border
                  border-sky-100
                  transition-all
                  duration-300
                  group-hover:bg-[#0E79B2]
                "
              >
                <Icon
                  size={26}
                  className="
                    text-[#0E79B2]
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                />
              </div>

              <h3
                className="
                  mb-3
                  text-xl
                  font-bold
                  leading-snug
                  text-slate-900
                  transition-colors
                  duration-300
                  group-hover:text-[#0E79B2]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  leading-relaxed
                  text-xs
                  sm:text-sm
                  text-slate-600
                  font-medium
                "
              >
                {item.desc}
              </p>
            </article>
          );
        })}

      </div>
    </section>
  );
}