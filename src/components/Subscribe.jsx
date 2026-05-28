import React from "react";

const Subscribe = () => {
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
          Container Card
      ========================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          
          bg-[#e5e5e5]
          
          rounded-2xl
          md:rounded-[2rem]
          
          p-6
          sm:p-8
          md:p-12
          lg:p-16
          
          flex
          flex-col
          items-center
          text-center
          
          shadow-sm
        "
      >
        {/* =========================
            Title
        ========================== */}

        <p
          className="
            text-[#1e2342]
            
            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            
            font-black
            
            uppercase
            
            tracking-tight
            
            leading-tight
          "
        >
          តាមដានព័ត៌មានថ្មីៗជាមួយយើង
        </p>

        {/* =========================
            Subtitle
        ========================== */}

        <p
          className="
            text-[#1e2342]/70
            
            text-sm
            sm:text-base
            md:text-lg
            
            font-medium
            
            max-w-2xl
            
            leading-relaxed
            
            mt-4
            md:mt-5
          "
        >
          ចូលរួមជាមួយសហគមន៍ E-ROBOT ដើម្បីស្វែងយល់ពីបច្ចេកវិទ្យាថ្មីៗ និង
          ទទួលបានចំណេះដឹងបន្ថែមពីលើអ្វីដែលអ្នកបានរៀននៅសាលា។
        </p>

        {/* =========================
            Input Section
        ========================== */}

        <div
          className="
            relative
            
            w-full
            max-w-xl
            sm:max-w-2xl
            
            mt-6
            md:mt-10
          "
        >
          <input
            type="email"
            placeholder="បញ្ចូលអ៊ីមែលរបស់អ្នក"
            className="
              w-full
              
              h-12
              sm:h-14
              md:h-16
              
              pl-5
              sm:pl-6
              md:pl-8
              
              pr-28
              sm:pr-32
              md:pr-40
              
              rounded-full
              
              text-[#1e2342]
              
              text-sm
              sm:text-base
              
              bg-white
              
              shadow-sm
              
              focus:outline-none
              
              focus:ring-2
              focus:ring-[#1e2342]/20
            "
          />

          {/* Submit Button */}
          <button
            className="
              absolute
              
              right-1
              sm:right-1.5
              top-1
              sm:top-1.5
              bottom-1
              sm:bottom-1.5
              
              px-4
              sm:px-6
              md:px-10
              
              bg-[#1e2342]
              text-white
              
              text-xs
              sm:text-sm
              
              font-bold
              
              rounded-full
              
              transition-all
              duration-300
              
              hover:bg-[#2a315a]
              hover:scale-[1.02]
              
              active:scale-95
            "
          >
            ចុះឈ្មោះ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;