import React from "react";
import { NotebookTabs, Cpu, Route } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function GridSection() {
  const { t } = useLanguage();

  const cardData = [
    {
      icon: NotebookTabs,
      title: t.aboutUs.whyCards[0].title,
      desc: t.aboutUs.whyCards[0].desc,
    },
    {
      icon: Cpu,
      title: t.aboutUs.whyCards[1].title,
      desc: t.aboutUs.whyCards[1].desc,
    },
    {
      icon: Route,
      title: t.aboutUs.whyCards[2].title,
      desc: t.aboutUs.whyCards[2].desc,
    },
  ];

  return (
    <section className="py-6 bg-transparent">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">

        {cardData.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-sm border border-[#192048]/10 bg-white p-6 shadow-none flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-[#192048] text-white">
                  <Icon size={22} className="text-white" />
                </div>

                <h3 className="mb-2 text-lg font-bold text-[#192048]">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-xs sm:text-sm text-[#192048]/80 font-medium">
                  {item.desc}
                </p>
              </div>
            </article>
          );
        })}

      </div>
    </section>
  );
}