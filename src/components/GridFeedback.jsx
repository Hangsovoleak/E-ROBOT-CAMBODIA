import React from "react";

const GridFeedback = () => {
  const feedbacks = [
    {
      name: "RORN HANGSOVOLEAK",
      university: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
      image:
        "https://i.pinimg.com/736x/54/f8/e5/54f8e5d2ffd42936c79315012a560e03.jpg",
      text: "ខ្ញុំជាអ្នកស្ម័គ្រចិត្តផ្នែកបណ្តុះបណ្តាលគ្រូលើកម្មវិធី Scratch និង Arduino ដើម្បីឱ្យសិស្សានុសិស្សអាចសិក្សាពីបច្ចេកវិទ្យា។ ខ្ញុំមានសេចក្តីរីករាយក្នុងជួយចែករំលែកចំណេះដឹងទាំងនេះទៅកាន់ពួកគេ។",
    },
    {
      name: "HENG LYHORNG",
      university: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
      image:
        "https://i.pinimg.com/736x/fd/a8/26/fda8264e314ed532889eb26fa5eb40e4.jpg",
      text: "ខ្ញុំជាអ្នកស្ម័គ្រចិត្តផ្នែកផលិតមាតិកា (Content Creator) ដើម្បីជួយឱ្យសិស្សានុសិស្សអាចស្វែងយល់កាន់តែច្បាស់ពីបច្ចេកវិទ្យា។ ខ្ញុំចូលចិត្តក្នុងការចែករំលែកបទពិសោធន៍ថ្មីៗដល់យុវជនជំនាន់ក្រោយ។",
    },
    {
      name: "LONG PORTY",
      university: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ",
      image:
        "https://i.pinimg.com/736x/ca/3a/ee/ca3aee1248c25c652e338cbba6e372ad.jpg",
      text: "ខ្ញុំជាអ្នកស្ម័គ្រចិត្តផ្នែកទីផ្សារឌីជីថល (Digital Marketer) ក្នុងការផ្សព្វផ្សាយគម្រោងរបស់យើងទៅកាន់សិស្សានុសិស្ស ដើម្បីឱ្យពួកគេទទួលបានឱកាសសិក្សាពីបច្ចេកវិទ្យាទំនើបៗ។",
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
          xl:grid-cols-3
          
          gap-6
          md:gap-8
        "
      >
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className="
              group
              
              bg-[#1e2342]
              
              rounded-[1.8rem]
              sm:rounded-[2rem]
              
              p-5
              sm:p-6
              md:p-8
              
              shadow-xl
              
              flex
              flex-col
              
              gap-5
              md:gap-6
              
              border-2
              border-transparent
              
              transition-all
              duration-300
              ease-in-out
              
              hover:border-blue-400/30
              hover:-translate-y-1
              hover:shadow-2xl
              
              active:scale-95
              md:hover:scale-[1.03]
              
              cursor-pointer
            "
          >
            {/* =========================
                Profile Section
            ========================== */}

            <div
              className="
                flex
                items-center
                
                gap-4
              "
            >
              {/* Avatar */}
              <div
                className="
                  w-16
                  h-16
                  sm:w-20
                  sm:h-20
                  
                  rounded-full
                  overflow-hidden
                  
                  border-2
                  border-blue-400/30
                  
                  shrink-0
                "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-full
                    h-full
                    
                    object-cover
                    
                    transition-transform
                    duration-500
                    
                    group-hover:scale-110
                  "
                />
              </div>

              {/* User Info */}
              <div className="flex flex-col min-w-0">
                <p
                  className="
                    text-white
                    
                    font-bold
                    
                    text-sm
                    sm:text-base
                    md:text-lg
                    
                    leading-tight
                    
                    uppercase
                    
                    break-words
                  "
                >
                  {item.name}
                </p>

                <p
                  className="
                    text-gray-400
                    
                    text-xs
                    sm:text-sm
                    
                    mt-1
                    
                    leading-relaxed
                  "
                >
                  {item.university}
                </p>
              </div>
            </div>

            {/* =========================
                Feedback Text
            ========================== */}

            <p
              className="
                text-white/90
                
                text-sm
                sm:text-base
                
                leading-relaxed
                
                font-medium
                
                break-words
              "
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridFeedback;