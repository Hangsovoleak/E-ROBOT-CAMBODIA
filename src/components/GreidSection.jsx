import { NotebookTabs, Cpu, Route } from "lucide-react";

const GridSection = () => {
  const cardData = [
    {
      icon: <NotebookTabs className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "កម្មវិធីសិក្សា",
      desc: "កម្មវិធីសិក្សារបស់យើងត្រូវបានរៀបចំឡើងដើម្បីផ្ដល់នូវជំនាញ និងចំណេះដឹងបច្ចេកវិទ្យាដែលសិស្សានុសិស្សត្រូវការសម្រាប់ការជោគជ័យក្នុងយុគសម័យទំនើប។",
    },
    {
      icon: <Cpu className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "ប្រព័ន្ធអេកូឡូស៊ី",
      desc: "ការបង្កើតសហគមន៍ដ៏រស់រវើកមួយសម្រាប់អ្នកសិក្សា និងអ្នកអប់រំ ដើម្បីផ្លាស់ប្តូរបទពិសោធន៍ និងរីកចម្រើនជាមួយគ្នា។",
    },
    {
      icon: <Route className="w-7 h-7 sm:w-8 sm:h-8" />,
      title: "វិថីសិក្សាច្បាស់លាស់",
      desc: "ការរៀបចំផ្លូវដើរ និងរចនាសម្ព័ន្ធសិក្សាដែលជួយណែនាំសិស្សានុសិស្សតាំងពីកម្រិតដំបូង រហូតក្លាយជាអ្នកជំនាញ។",
    },
  ];

  return (
    <section
      className="
        w-full
        
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        
        py-10
        md:py-14
      "
    >
      {/* =========================
          Responsive Grid Layout
      ========================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          
          gap-5
          md:gap-6
          lg:gap-8
        "
      >
        {cardData.map((item, index) => (
          <div
            key={index}
            className="
              group
              
              flex
              flex-col
              justify-center
              items-center
              
              text-center
              
              bg-[#ff413c]
              
              rounded-2xl
              
              p-5
              sm:p-6
              md:p-8
              
              min-h-[16rem]
              sm:min-h-[18rem]
              
              shadow-lg
              
              border-2
              border-transparent
              
              hover:border-red-700
              hover:-translate-y-1
              hover:shadow-2xl
              
              transition-all
              duration-300
            "
          >
            {/* =========================
                Icon Box
            ========================== */}

            <div
              className="
                mb-5
                
                flex
                items-center
                justify-center
                
                w-16
                h-16
                sm:w-20
                sm:h-20
                
                rounded-full
                
                bg-white/10
                
                text-white
                
                transition-transform
                duration-300
                
                group-hover:scale-110
              "
            >
              {item.icon}
            </div>

            {/* =========================
                Title
            ========================== */}

            <p
              className="
                text-white
                
                text-lg
                sm:text-xl
                md:text-2xl
                
                font-black
                
                mb-3
                
                tracking-tight
                
                leading-snug
              "
            >
              {item.title}
            </p>

            {/* =========================
                Description
            ========================== */}

            <p
              className="
                text-white/85
                
                text-sm
                sm:text-base
                
                leading-relaxed
                
                font-medium
              "
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridSection;