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
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
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
              border-white/5
              bg-[var(--surface)]
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[var(--primary)]/40
              hover:shadow-lg
            "
          >
            {/* Icon */}

            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[var(--primary-light)]
                transition-all
                duration-300
                group-hover:bg-[var(--primary)]
              "
            >
              <Icon
                size={28}
                className="
                  text-[var(--primary)]
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              />
            </div>

            {/* Content */}

            <div className="flex-1">

              <h3
                className="
                  text-xl
                  font-bold
                  text-[var(--text-heading)]
                  transition-colors
                  duration-300
                  group-hover:text-[var(--primary)]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  leading-8
                  text-[var(--text-body)]
                "
              >
                {item.description}
              </p>
            </div>

            {/* Decorative Dot */}

            <div
              className="
                mt-2
                hidden
                h-3
                w-3
                rounded-full
                bg-[var(--primary)]
                opacity-0
                transition-all
                duration-300
                group-hover:opacity-100
                md:block
              "
            />
          </article>
        );
      })}
    </div>
  );
}