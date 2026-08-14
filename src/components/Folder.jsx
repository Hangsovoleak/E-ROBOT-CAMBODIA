import React from "react";
import { Link } from "react-router-dom";
import { FolderOpen, ArrowRight } from "lucide-react";

const Folder = ({ imgSrc, title, description, to = "/sharings" }) => {
  return (
    <Link
      to={to}
      className="
        group
        flex
        flex-col
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-2xs
        transition-all
        duration-200
        hover:border-sky-300
        hover:shadow-md
        no-underline
      "
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 shrink-0">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-400">
            <FolderOpen size={36} strokeWidth={1.5} />
            <span className="text-xs font-medium">មិនមានរូបភាព</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 p-5 bg-white">
        <div>
          <h3
            className="
              text-base
              sm:text-lg
              font-extrabold
              leading-snug
              text-slate-900
              transition-colors
              duration-200
              group-hover:text-[#0E79B2]
              m-0
            "
          >
            {title}
          </h3>

          {description && (
            <p className="text-xs text-slate-600 font-medium leading-relaxed mt-2 m-0">
              {description}
            </p>
          )}
        </div>

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-3.5
            mt-4
          "
        >
          <span className="text-xs font-bold text-[#0E79B2]">
            មើលព័ត៌មានបន្ថែម
          </span>

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              bg-sky-50
              text-[#0E79B2]
              transition-all
              duration-200
              group-hover:bg-[#0E79B2]
              group-hover:text-white
            "
          >
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Folder;