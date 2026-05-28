import meet from "../assets/meet.png";
import money from "../assets/money.png";
import volunteer from "../assets/volunteering.png";

const GridGoals = () => {
  const cardData = [
    {
      image: meet,
      desc: "សិក្សាឥតគិតថ្លៃ តាមរយះអនឡាញ Google Meet",
    },
    {
      image: money,
      desc: "ទទួលបានសម្ភារះសិក្សាពីសប្បុរសជន",
    },
    {
      image: volunteer,
      desc: "ទទួលបានការបណ្ដុះបណ្ដាលពីយុវជន ស្ម័គ្រចិត្តដែលមានជំនាញ",
    },
  ];

  return (
    <section
      className="
        w-full
        
        bg-white
        
        px-4
        sm:px-6
        md:px-8
        lg:px-10
        
        py-8
        md:py-12
        
        mb-12
        md:mb-16
      "
    >
      {/* =========================
          Responsive Grid
      ========================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          
          gap-5
          md:gap-6
        "
      >
        {cardData.map((item, index) => (
          <div
            key={index}
            className="
              group
              
              bg-[#1e2342]
              
              rounded-2xl
              
              shadow-lg
              
              transition-all
              duration-300
              
              hover:-translate-y-1
              hover:shadow-2xl
              
              active:scale-95
              
              overflow-hidden
            "
          >
            {/* =========================
                Card Content
                Mobile: Column
                Desktop: Row
            ========================== */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                
                items-center
                justify-between
                
                gap-5
                
                p-5
                sm:p-6
                md:p-7
                
                min-h-[14rem]
              "
            >
              {/* =========================
                  Text Section
              ========================== */}

              <div
                className="
                  flex-1
                  
                  text-center
                  sm:text-left
                "
              >
                <p
                  className="
                    text-white
                    
                    text-base
                    sm:text-lg
                    md:text-xl
                    
                    font-bold
                    
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>
              </div>

              {/* =========================
                  Image Section
              ========================== */}

              <div
                className="
                  flex
                  justify-center
                  items-center
                  
                  w-full
                  sm:w-auto
                  
                  shrink-0
                "
              >
                <img
                  src={item.image}
                  alt="goal icon"
                  className="
                    w-24
                    h-24
                    
                    sm:w-28
                    sm:h-28
                    
                    md:w-32
                    md:h-32
                    
                    object-contain
                    
                    transition-transform
                    duration-300
                    
                    group-hover:scale-105
                  "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridGoals;