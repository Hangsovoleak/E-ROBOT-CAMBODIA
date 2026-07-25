import { Link } from "react-router-dom";
import { FolderOpen, ArrowRight } from "lucide-react";

const Folder = ({ imgSrc, title, to = "/" }) => {
  return (
    <Link
      to={to}
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        border
        border-white/5
        bg-[var(--surface)]
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[var(--primary)]/40
        hover:shadow-xl
      "
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden bg-[var(--surface-light)]">
        {imgSrc ? (
          <>
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

            <div className="absolute inset-0 bg-gradient-to-t from-[#191923]/60 via-transparent to-transparent" />
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-[var(--text-muted)]">
            <FolderOpen size={48} strokeWidth={1.5} />
            <span className="text-sm font-medium">
              មិនមានរូបភាព
            </span>
          </div>
        )}

        {/* Badge */}

        <div
          className="
            absolute
            left-5
            top-5
            flex
            items-center
            gap-2
            rounded-full
            bg-[var(--primary)]
            px-4
            py-2
            text-sm
            font-semibold
            text-white
            shadow-lg
          "
        >
        </div>
      </div>

      {/* Content */}

      <div className="space-y-5 p-6">

        <h3
          className="
            text-xl
            font-bold
            leading-relaxed
            text-[var(--text-heading)]
            transition-colors
            duration-300
            group-hover:text-[var(--primary)]
          "
        >
          {title}
        </h3>

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-white/5
            pt-4
          "
        >
          <span
            className="
              text-sm
              font-medium
              text-[var(--text-muted)]
            "
          >
          </span>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[var(--primary-light)]
              text-[var(--primary)]
              transition-all
              duration-300
              group-hover:bg-[var(--primary)]
              group-hover:text-white
              group-hover:translate-x-1
            "
          >
            <ArrowRight size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Folder;