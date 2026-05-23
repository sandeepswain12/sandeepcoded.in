import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  tech,
  image,
  darkMode,
  category,
  status,
  github,
  live,
}) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-3xl overflow-hidden border transition-all duration-500 flex flex-col w-full h-full ${
        darkMode
          ? "bg-gray-900 border-gray-800 hover:border-blue-500"
          : "bg-white border-gray-200 hover:border-blue-400 shadow-xl"
      }`}
    >
      {/* Image Section — always rendered, shows placeholder if image missing */}
      <div className="relative overflow-hidden shrink-0">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-700"
          />
        ) : (
          // Fallback gradient banner when image is undefined/broken
          <div className="w-full h-[220px] bg-gradient-to-br from-blue-600/40 via-cyan-500/30 to-blue-900/60 flex items-center justify-center">
            <FaCode className="text-white/30 text-6xl" />
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {category && (
          <div className="absolute top-5 left-5">
            <span className="px-4 py-2 rounded-full text-xs font-semibold bg-blue-500 text-white shadow-lg">
              {category}
            </span>
          </div>
        )}

        {status && (
          <div className="absolute bottom-5 left-5">
            <span className="px-4 py-2 rounded-full text-xs font-medium bg-white/20 backdrop-blur-md text-white border border-white/20">
              {status}
            </span>
          </div>
        )}
      </div>

      {/* Content — flex-col + flex-1 so buttons always stick to bottom */}
      <div className="p-8 flex flex-col flex-1">
        {/* Title row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold leading-snug">{title}</h3>
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
            <FaCode className="text-blue-500 text-lg" />
          </div>
        </div>

        {/* Description */}
        <p
          className={`leading-7 mb-6 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tech.map((item, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                darkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons — mt-auto pushes to bottom regardless of content height */}
        <div className="flex gap-4 mt-auto pt-2">
          <a
            href={live || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
          <a
            href={github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border font-semibold transition duration-300 ${
              darkMode
                ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400"
                : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
            }`}
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>

      {/* Glow Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition duration-500">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
