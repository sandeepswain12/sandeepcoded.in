import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import ProjectCard from "../components/ui/ProjectCard";
import data from "../data/data.json";
import images from "../data/images";

const { projects } = data;

function Projects({ darkMode }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = projects.categories || [
    "All",
    "FinTech & Payments",
    "Full Stack",
    "Microservices & AI",
    "Security",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects.list
      : projects.list.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className={`relative py-28 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-[#09090b] text-zinc-100"
          : "bg-slate-50/50 text-zinc-900"
      }`}
    >
      {/* Background Lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border bg-blue-500/10 border-blue-500/20 text-blue-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{projects.sectionLabel}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {projects.heading}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {projects.description}
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((cat, idx) => {
            const count =
              cat === "All"
                ? projects.list.length
                : projects.list.filter((p) => p.category === cat).length;
            const isSelected = activeCategory === cat;

            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25"
                    : darkMode
                    ? "bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                    : "bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 shadow-sm"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`ml-2 px-1.5 py-0.5 text-[10px] rounded-md ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : darkMode
                      ? "bg-zinc-800 text-zinc-400"
                      : "bg-slate-100 text-zinc-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  image={images[project.image]}
                  category={project.category}
                  status={project.status}
                  isEnterprise={project.isEnterprise}
                  github={project.github}
                  live={project.live}
                  darkMode={darkMode}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p
            className={`text-sm sm:text-base ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {projects.footer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;

