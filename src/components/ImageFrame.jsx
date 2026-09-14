import React from "react";

export default function ImageFrame({ src, alt, defaultImage }) {
  const imageSrc = Array.isArray(src) ? src[0] : src;

  return (
    <div className="relative w-full group pt-2 pb-2">
      {/* Top Left Red Accent Line Bar */}
      <div 
        className="
          absolute 
          top-0 
          left-0 
          w-24 
          sm:w-32 
          h-1.5 
          bg-[#FF383C] 
          rounded-sm 
          z-20 
        " 
      />

      <div 
        className="
          relative 
          z-10 
          w-full
          h-56
          sm:h-64
          md:h-72
          overflow-hidden 
          rounded-sm
          border 
          border-[#192048]/10 
          bg-[#192048]/5 
          shadow-none 
        "
      >
        <img
          src={imageSrc || defaultImage}
          alt={alt || "E-ROBOT Photo"}
          className="
            w-full 
            h-full 
            object-cover 
            object-center
            block
            transition-opacity
            duration-200
            hover:opacity-95
          "
        />
      </div>

      {/* Bottom Right Red Accent Line Bar */}
      <div 
        className="
          absolute 
          bottom-0 
          right-0 
          w-24 
          sm:w-32 
          h-1.5 
          bg-[#FF383C] 
          rounded-sm 
          z-20 
        " 
      />
    </div>
  );
}