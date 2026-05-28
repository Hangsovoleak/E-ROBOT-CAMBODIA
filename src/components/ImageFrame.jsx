import React from "react";

const ImageFrame = ({ src, alt, defaultImage }) => {
  return (
    <div
      className="
        relative
        inline-block
        
        w-full
        
        p-4
        sm:p-5
        md:p-6
        lg:p-7
      "
    >
      {/* =========================
          Main Decorative Border
      ========================== */}

      <div
        className="
          absolute
          inset-0
          
          m-4
          sm:m-5
          md:m-6
          
          border-[0.18rem]
          border-[#192048]
          
          rounded-md
          
          z-0
        "
      />

      {/* =========================
          Top Left Decorative Bar
      ========================== */}

      <div
        className="
          absolute
          
          top-3
          sm:top-4
          
          left-4
          sm:left-5
          md:left-6
          
          w-20
          sm:w-24
          md:w-32
          
          h-2
          sm:h-3
          
          bg-[#192048]
          
          z-10
          
          rounded-sm
        "
      />

      {/* =========================
          Bottom Right Decorative Bar
      ========================== */}

      <div
        className="
          absolute
          
          bottom-3
          sm:bottom-4
          
          right-4
          sm:right-5
          md:right-6
          
          w-20
          sm:w-24
          md:w-32
          
          h-2
          sm:h-3
          
          bg-[#192048]
          
          z-10
          
          rounded-sm
        "
      />

      {/* =========================
          Image Container
      ========================== */}

      <div
        className="
          relative
          z-20
          
          overflow-hidden
          
          rounded-md
          
          shadow-2xl
        "
      >
        <img
          src={src || defaultImage}
          alt={alt || "E-ROBOT Activity"}
          className="
            w-full
            max-w-full
            md:max-w-lg
            
            h-auto
            
            object-cover
            
            block
            
            transition-transform
            duration-500
            
            hover:scale-105
          "
        />
      </div>
    </div>
  );
};

export default ImageFrame;