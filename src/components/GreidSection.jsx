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
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">

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
                border-white/5
                bg-[var(--surface)]
                p-8
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[var(--primary)]/40
                hover:shadow-xl
              "
            >
              {/* Accent line */}

              <div
                className="
                  absolute
                  left-0
                  top-0
                  h-1
                  w-0
                  bg-[var(--primary)]
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

              {/* Icon */}

              <div
                className="
                  mb-8
                  flex
                  h-16
                  w-16
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
                  size={30}
                  className="
                    text-[var(--primary)]
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                />
              </div>

              {/* Title */}

              <h3
                className="
                  mb-4
                  text-2xl
                  font-bold
                  leading-snug
                  text-[var(--text-heading)]
                  transition-colors
                  duration-300
                  group-hover:text-[var(--primary)]
                "
              >
                {item.title}
              </h3>

              {/* Description */}

              <p
                className="
                  leading-8
                  text-[var(--text-body)]
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