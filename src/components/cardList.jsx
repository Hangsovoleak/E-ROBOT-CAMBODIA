import React from "react";
import { Terminal, Lightbulb, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CardList() {
  const { t } = useLanguage();

  const cardData = [
    {
      id: 1,
      title: t.aboutUs.cardList[0].title,
      description: t.aboutUs.cardList[0].desc,
      icon: Terminal,
    },
    {
      id: 2,
      title: t.aboutUs.cardList[1].title,
      description: t.aboutUs.cardList[1].desc,
      icon: Lightbulb,
    },
    {
      id: 3,
      title: t.aboutUs.cardList[2].title,
      description: t.aboutUs.cardList[2].desc,
      icon: Rocket,
    },
  ];

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      {cardData.map((item) => {
        const Icon = item.icon;

        return (
          <article
            key={item.id}
            className="
              flex
              items-start
              gap-4
              rounded-sm
              border
              border-[#192048]/10
              bg-white
              p-5
              shadow-none
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-sm
                bg-[#192048]
                text-white
              "
            >
              <Icon size={22} className="text-white" />
            </div>

            <div className="flex-1">
              <h3 className="text-base font-bold text-[#192048]">
                {item.title}
              </h3>

              <p className="mt-1 leading-relaxed text-xs sm:text-sm text-[#192048]/80 font-medium">
                {item.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}