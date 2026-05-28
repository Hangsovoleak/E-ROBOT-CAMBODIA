import React from 'react';

const ImageFrame = ({ src, alt }) => {
  return (
    <div className="relative inline-block p-6.5">
      {/* The Main Decorative Frame Border */}
      <div className="absolute inset-0 border-[3px] border-[#192048] m-6 z-0 rounded-md"></div>

      {/* Top Left Thick Bar */}
      <div className="absolute top-4 left-6 w-32 h-3 bg-[#192048] z-10"></div>

      <div className="absolute bottom-4 right-6 w-32 h-3 bg-[#192048] z-10 flex items-end justify-end"></div>

      {/* The Image Container */}
      <div className="relative z-20 shadow-2xl overflow-hidden rounded-sm">
        <img 
          // Uses the prop if provided, otherwise falls back to the imported image
          src={src || defaultImage} 
          alt={alt || "E-ROBOT Activity"} 
          className="w-full max-w-lg h-auto object-cover block"
        />
      </div>
    </div>
  );
};

export default ImageFrame;