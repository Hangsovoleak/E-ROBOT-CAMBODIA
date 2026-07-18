import React from "react";

export default function ImageFrame({ src, alt, defaultImage }) {
  return (
    <div className="relative inline-block w-full p-4 sm:p-6 lg:p-8 group">
      
      {/* Premium Ambient Background Frame (Subtle Royal Blue Shadow Accent) */}
      <div className="absolute inset-0 m-2 sm:m-4 rounded-[24px] border border-[var(--border)] bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-yellow/5 opacity-50 z-0" />

      {/* Top-Left Accent Block (Royal Blue Identity Bar) */}
      <div className="absolute top-2 sm:top-4 left-4 sm:left-6 w-16 sm:w-24 h-1.5 bg-brand-blue rounded-full z-10 transition-all duration-300 group-hover:w-20" />

      {/* Bottom-Right Accent Block (Golden Yellow Highlight Bar) */}
      <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-6 w-16 sm:w-24 h-1.5 bg-brand-yellow rounded-full z-10 transition-all duration-300 group-hover:w-20" />

      {/* Elevated Image Container */}
      <div className="relative z-20 overflow-hidden rounded-2xl shadow-md group-hover:shadow-lg border border-[var(--border)] bg-white dark:bg-[var(--surface)] transition-shadow duration-300">
        
        {/* Soft layout overlay gradient */}
        <div className="absolute inset-0 bg-brand-charcoal/5 pointer-events-none opacity-40 group-hover:opacity-0 transition-opacity duration-300 z-10" />
        
        <img
          src={src || defaultImage}
          alt={alt || "E-ROBOT Activity"}
          className="w-full max-w-full md:max-w-lg h-auto object-cover block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
        />
      </div>
    </div>
  );
}