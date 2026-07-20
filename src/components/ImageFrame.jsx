import React from "react";

export default function ImageFrame({ src, alt, defaultImage }) {
  return (
    <div className="relative inline-block w-full p-4 sm:p-6 lg:p-8 group">
      
      {/* Ambient Background Frame using your theme design tokens */}
      <div 
        className="
          absolute 
          inset-0 
          m-2 
          sm:m-4 
          rounded-3xl 
          border 
          border-[var(--border-light)] 
          bg-[var(--surface)] 
          opacity-50 
          z-0
        " 
      />

      {/* Top-Left Accent Block (Primary Blue Identity Bar) */}
      <div 
        className="
          absolute 
          top-2 
          sm:top-4 
          left-4 
          sm:left-6 
          w-16 
          sm:w-24 
          h-1.5 
          bg-primary 
          rounded-full 
          z-10 
          transition-all 
          duration-300 
          group-hover:w-20
        " 
      />

      {/* Bottom-Right Accent Block (Dynamic Secondary Accent Identity Bar) */}
      <div 
        className="
          absolute 
          bottom-2 
          sm:bottom-4 
          right-4 
          sm:right-6 
          w-16 
          sm:w-24 
          h-1.5 
          bg-primary/60 
          rounded-full 
          z-10 
          transition-all 
          duration-300 
          group-hover:w-20
        " 
      />

      {/* Elevated Image Container */}
      <div 
        className="
          relative 
          z-20 
          overflow-hidden 
          rounded-3xl 
          border 
          border-[var(--border-light)] 
          bg-[var(--surface)] 
          shadow-md 
          transition-all 
          duration-300 
          group-hover:shadow-xl
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
            ease-out 
            group-hover:scale-105
          "
        />
      </div>
    </div>
  );
}