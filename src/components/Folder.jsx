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
        mt-10
        sm:mt-12
        md:mt-16
        min-h-[10rem]
        transition-all
        duration-300
        hover:-translate-y-2
        no-underline
      "
    >

      {/* =========================
          Folder Body Frame (Matches Contact/Goals style standard)
      ========================== */}
      <div
        className="
          relative
          w-full
          bg-white
          dark:bg-[#161d33]
          
          rounded-b-[2rem]
          rounded-tr-[2rem]
          
          shadow-xl
          group-hover:shadow-2xl
          
          p-4
          sm:p-5
          md:p-6
          
          flex
          flex-col
          gap-4
          
          border
          border-slate-200/80
          dark:border-slate-800/80
          
          overflow-hidden
          transition-all
          duration-300
        "
      >
        {/* Decorative Internal Folder Accent Line */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#ff383c] rounded-tr-[2rem]" />

        {/* =========================
            Responsive Visual Frame Display
        ========================== */}
        <div
          className="
            w-full
            overflow-hidden
            rounded-2xl
            shadow-inner
            bg-slate-50
            dark:bg-[#111628]
            border
            border-slate-100
            dark:border-slate-800/40
            relative
          "
        >
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={title || "Folder content representation"}
              className="
                w-full
                h-48
                sm:h-56
                md:h-64
                object-cover
                block
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />
          ) : (
            <div className="w-full h-48 sm:h-56 md:h-64 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600 gap-2">
              <FolderOpen className="w-10 h-10 stroke-[1.5]" />
              <span className="text-xs font-bold uppercase tracking-wider">
                មិនមានរូបភាពឡើយ
              </span>
            </div>
          )}
        </div>

        {/* =========================
            Folder Info Content & Dynamic Routing Indicators
        ========================== */}
        <div className="px-1 flex items-start justify-between gap-4 mt-1">
          {title && (
            <h4
              className="
                text-[#192048]
                dark:text-slate-100
                text-base
                sm:text-lg
                font-bold
                leading-snug
                m-0
                break-words
                flex-1
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