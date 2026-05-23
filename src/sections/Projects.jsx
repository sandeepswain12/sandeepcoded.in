import { motion } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";
import data from "../data/data.json";
import images from "../data/images";

const { projects } = data;

function Projects({ darkMode }) {
  return (
    <section
      id="projects"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-black via-gray-950 to-black text-white"
          : "bg-gradient-to-b from-white via-gray-50 to-white text-gray-900"
      }`}
    >
      {/* Background Blur Effects */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 font-semibold tracking-widest uppercase mb-3">
            {projects.sectionLabel}
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            {projects.heading}
          </h2>
          <p
            className={`max-w-2xl mx-auto text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {projects.description}
          </p>
        </motion.div>

        {/* Projects Grid — now correctly uses ProjectCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-stretch">
          {projects.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={images[project.image]}
                category={project.category}
                status={project.status}
                github={project.github}
                live={project.live}
                darkMode={darkMode}
              />
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p
            className={`text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
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
