import React from "react";
import { Link } from "react-router-dom";
import { FolderOpen } from "lucide-react";

const Folder = ({ imgSrc, title, to = "/" }) => {
  return (
    <Link
      to={to}
      className="
        relative
        w-full
        block
        group
        cursor-pointer
        mt-8
        sm:mt-10
        min-h-[10rem]
        no-underline
        transition-all
        duration-300
        ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-1.5
      "
    >
      {/* Folder Back Tab Effect to resemble an elegant physical/digital folder tab */}
      <div className="absolute -top-3.5 left-0 h-4 w-24 bg-white dark:bg-[var(--surface)] border-t border-x border-[var(--border)] rounded-t-xl transition-colors duration-300 pointer-events-none z-0" />
      
      <div
        className="
          relative
          z-10
          w-full
          bg-white
          dark:bg-[var(--surface)]
          
          rounded-b-2xl
          rounded-tr-2xl
          
          shadow-md
          group-hover:shadow-lg
          
          p-4
          sm:p-5
          
          flex
          flex-col
          gap-4
          
          border
          border-[var(--border)]
          
          overflow-hidden
          transition-all
          duration-300
        "
      >
        {/* Sleek, thin Top Identity Accent Line using Royal Blue instead of harsh arbitrary red */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-blue dark:bg-brand-blue/80 rounded-tr-2xl" />

        {/* Media Container Box */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-xl
            bg-[var(--bg)]
            border
            border-[var(--border)]
            relative
          "
        >
          {imgSrc ? (
            <div className="relative overflow-hidden w-full h-44 sm:h-52 md:h-56">
              {/* Soft overlay gradient that disappears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/10 to-transparent z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-300" />
              <img
                src={imgSrc}
                alt={title || "Folder representation"}
                className="
                  w-full
                  h-full
                  object-cover
                  block
                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:scale-[1.03]
                "
              />
            </div>
          ) : (
            <div className="w-full h-44 sm:h-52 md:h-56 flex flex-col items-center justify-center text-brand-charcoal/30 dark:text-brand-warm-white/20 gap-2.5">
              <FolderOpen className="w-8 h-8 stroke-[1.5] transition-transform duration-300 group-hover:scale-110 group-hover:text-brand-blue" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider">
                មិនមានរូបភាពឡើយ
              </span>
            </div>
          )}
        </div>

        {/* Text Area styling using your custom theme config */}
        <div className="px-0.5 flex items-start justify-between gap-4">
          {title && (
            <h4
              className="
                text-brand-charcoal
                dark:text-[var(--text-h)]
                font-sans
                text-base
                sm:text-lg
                font-bold
                leading-snug
                m-0
                break-words
                flex-1
                transition-colors
                duration-200
                group-hover:text-brand-blue
              "
            >
              {title}
            </h4>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Folder;