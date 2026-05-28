import React from 'react';

const Folder = ({ imgSrc, title }) => {
  return (
    /* Removed h-full to allow the folder to wrap the image height naturally on mobile */
    <div className="relative w-full group cursor-pointer mt-12 md:mt-16 p-4 md:p-8 hover:scale-105 transition-transform duration-300 min-h-[160px]">
      
      {/* Folder Tab: Adjusted width and position for mobile */}
      <div 
        className="absolute -top-3 left-4 md:left-8 w-28 md:w-44 h-8 md:h-12 bg-[#1e2342] rounded-t-xl"
      ></div>

      {/* Folder Body */}
      <div className="relative w-full bg-[#1e2342] rounded-b-2xl rounded-tr-2xl shadow-2xl p-3 md:p-5 flex flex-col gap-4 border-t border-white/10">
        
        {/* Subtle top inner shadow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-black/20 rounded-tr-2xl"></div>
        
        {/* Image Container */}
        <div className="w-full overflow-hidden rounded-lg shadow-inner">
          {imgSrc ? (
            <img 
              src={imgSrc} 
              alt={title || "Folder content"} 
              /* h-auto ensures Image2.png keeps its original shape on all screens */
              className="w-full h-auto object-cover block"
            />
          ) : (
            <div className="w-full h-48 md:h-64 bg-slate-700 flex items-center justify-center">
              <span className="text-slate-400 text-sm">No Image Provided</span>
            </div>
          )}
        </div>

        {/* Optional Title */}
        {title && (
          <span className="text-white/90 text-base md:text-lg font-medium px-2 pb-2 truncate">
            {title}
          </span>
        )}
      </div>
    </div>
  );
};

export default Folder;