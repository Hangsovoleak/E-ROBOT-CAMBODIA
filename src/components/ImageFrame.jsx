import React from "react";

export default function ImageFrame({ src, alt, defaultImage }) {
  const imageSrc = Array.isArray(src) ? src[0] : src;

  return (
    <div className="relative w-full group">
      {/* Top-Left Accent Bar */}
      <div 
        className="
          absolute 
          -top-1.5 
          left-6 
          w-16 
          sm:w-20 
          h-1.5 
          bg-[#0E79B2] 
          rounded-full 
          z-20 
          transition-all 
          duration-300 
          group-hover:w-28
        " 
      />

      {/* Clean Single Image Container with Uniform Height */}
      <div 
        className="
          relative 
          z-10 
          w-full
          h-56
          sm:h-64
          md:h-72
          lg:h-80
          overflow-hidden 
          rounded-3xl 
          border 
          border-slate-200 
          bg-slate-100 
          shadow-2xs 
          transition-all 
          duration-300 
          group-hover:border-sky-300
          group-hover:shadow-md
        "
      >
        <img
          src={imageSrc || defaultImage}
          alt={alt || "E-ROBOT Activity"}
          className="
            w-full 
            h-full 
            object-cover 
            object-center
            block 
            transition-transform 
            duration-500 
            ease-out 
            group-hover:scale-105
          "
        />
      </div>
    </div>
  );
}