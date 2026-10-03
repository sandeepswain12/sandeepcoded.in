import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Lock, Clock, ShieldCheck, Code2 } from "lucide-react";

function ProjectCard({
  title,
  description,
  tech,
  image,
  darkMode,
  category,
  status,
  isEnterprise,
  github,
  live,
}) {
  const hasLive = live && live !== "#";
  const hasGithub = github && github !== "#";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`group relative rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col w-full h-full ${
        darkMode
          ? "bg-zinc-900/70 border-zinc-800/80 hover:border-blue-500/50 shadow-xl shadow-black/40 hover:shadow-blue-500/10"
          : "bg-white border-zinc-200/90 hover:border-blue-400 shadow-xl shadow-slate-200/40 hover:shadow-blue-500/10"
      }`}
    >
      {/* Image Banner */}
      <div className="relative overflow-hidden shrink-0 h-[210px] bg-zinc-950">
        {image ? (
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-zinc-900 to-zinc-950 flex items-center justify-center">
            <Code2 className="text-white/20 text-6xl" />
          </div>
        )}

        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

        {/* Category Pill */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/90 backdrop-blur-md text-white shadow-md">
              {category}
            </span>
          </div>
        )}

        {/* Status Pill */}
        {status && (
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-md text-zinc-200 border border-white/10">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  status.includes("Production") || status.includes("Live")
                    ? "bg-emerald-400"
                    : "bg-amber-400"
                }`}
              />
              {status}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Title Row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-xl font-bold tracking-tight leading-snug group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-6 ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech?.map((item, index) => (
            <span
              key={index}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium font-mono border transition duration-200 ${
                darkMode
                  ? "bg-zinc-800/80 border-zinc-700/60 text-zinc-300 hover:border-blue-500 hover:text-white"
                  : "bg-slate-100 border-zinc-200 text-zinc-700 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons / Badges Container */}
        <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-zinc-500/10">
          {hasLive ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 hover:opacity-90 transition duration-200"
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>Live Demo</span>
            </a>
          ) : isEnterprise ? (
            <div
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium border ${
                darkMode
                  ? "bg-zinc-800/50 border-zinc-700/50 text-zinc-400"
                  : "bg-slate-100 border-zinc-200 text-zinc-600"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Enterprise Production</span>
            </div>
          ) : (
            <div
              className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium border ${
                darkMode
                  ? "bg-zinc-800/40 border-zinc-700/40 text-zinc-400"
                  : "bg-slate-50 border-zinc-200 text-zinc-500"
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>In Development</span>
            </div>
          )}

          {hasGithub ? (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-semibold transition duration-200 ${
                darkMode
                  ? "border-zinc-700 bg-zinc-800/60 text-zinc-200 hover:border-blue-500 hover:text-white"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-blue-500 hover:text-blue-600 shadow-sm"
              }`}
            >
              <FaGithub className="text-sm" />
              <span>Code</span>
            </a>
          ) : isEnterprise ? (
            <div
              className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-medium border ${
                darkMode
                  ? "border-zinc-800 bg-zinc-900/60 text-zinc-400"
                  : "border-zinc-200 bg-slate-50 text-zinc-500"
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Internal Repo</span>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

