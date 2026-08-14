import React from "react";
import { Terminal, Lightbulb, Rocket } from "lucide-react";

const cardData = [
  {
    id: 1,
    title: "ជំនាញបច្ចេកវិទ្យាស្ទាត់ជំនាញ",
    description:
      "កសាងមូលដ្ឋានគ្រឹះឌីជីថលដ៏រឹងមាំ ដើម្បីអភិវឌ្ឍសមត្ថភាពសិស្សានុសិស្សក្នុងសតវត្សទី២១។",
    icon: Terminal,
  },
  {
    id: 2,
    title: "ផ្នត់គំនិតសហគ្រិនភាព",
    description:
      "លើកទឹកចិត្តការច្នៃប្រឌិត ការគិតវិភាគ និងការដោះស្រាយបញ្ហាក្នុងជីវិតពិត។",
    icon: Lightbulb,
  },
  {
    id: 3,
    title: "ជំនាញសម្រាប់អនាគត",
    description:
      "រៀបចំសិស្សឱ្យត្រៀមខ្លួនសម្រាប់ការងារ បច្ចេកវិទ្យា និងពិភពលោកដែលកំពុងផ្លាស់ប្តូរ។",
    icon: Rocket,
  },
];

export default function CardList() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      {cardData.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.id}
            className="
              group
              flex
              items-start
              gap-5
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-xs
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#0E79B2]/40
              hover:shadow-md
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
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

            <div className="flex-1">
              <h3
                className="
                  text-lg
                  font-bold
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
                  mt-2
                  leading-relaxed
                  text-xs
                  sm:text-sm
                  text-slate-600
                  font-medium
                "
              >
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}