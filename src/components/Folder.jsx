import React from "react";
import { Link } from "react-router-dom";
import { FolderOpen, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Folder = ({ imgSrc, title, description, to = "/sharings" }) => {
  const { t } = useLanguage();

  return (
    <Link
      to={to}
      className="group flex flex-col h-full overflow-hidden rounded-sm border border-[#192048]/10 bg-white shadow-none transition-colors duration-200 hover:border-[#FF383C] no-underline"
    >
      <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100 shrink-0">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-400">
            <FolderOpen size={36} strokeWidth={1.5} />
            <span className="text-xs font-medium">{t.aboutUs.noImage}</span>
          </div>
        )}
      </div>

      <div className="flex flex-col justify-between flex-1 p-5 bg-white">
        <div>
          <h3 className="text-base sm:text-lg font-bold leading-snug text-[#192048] m-0">
            {title}
          </h3>

          {description && (
            <p className="text-xs text-[#192048]/70 font-medium leading-relaxed mt-2 m-0">
              {description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-[#192048]/10 pt-3.5 mt-4">
          <span className="text-xs font-bold text-[#FF383C]">
            {t.aboutUs.folderReadMore}
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#192048] text-white">
            <ArrowRight size={14} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Folder;