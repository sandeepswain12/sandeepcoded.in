import { motion } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";

import ecom from "../assets/images/ecom.jpg";
import chatbot from "../assets/images/chatbot.jpg";
import payment from "../assets/images/payment.jpg";

function Projects({ darkMode }) {
  const projects = [
    {
      title: "E-Commerce Platform",

      description:
        "Production-grade e-commerce application with authentication, cart management, order processing, payment integration, and scalable backend architecture.",

      tech: ["Java", "Spring Boot", "React", "MySQL", "JWT", "REST APIs"],

      image: ecom,

      category: "Full Stack",

      status: "Production Ready",
    },

    {
      title: "Conversational AI Application",

      description:
        "AI-powered conversational platform with intelligent chatbot interactions, context-aware responses, and scalable backend integration.",

      tech: ["React", "Spring Boot", "OpenAI", "Tailwind CSS", "REST APIs"],

      image: chatbot,

      category: "AI Application",

      status: "In Progress",
    },

    {
      title: "Payment Gateway System",

      description:
        "Secure and scalable payment gateway system with transaction handling, fraud detection, rate limiting, and microservices architecture.",

      tech: ["Java", "Microservices", "Docker", "AWS", "Kafka", "Redis"],

      image: payment,

      category: "FinTech",

      status: "Enterprise Level",
    },
  ];

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
            Portfolio
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Featured Projects
          </h2>

          <p
            className={`max-w-2xl mx-auto text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A collection of production-oriented applications showcasing backend
            architecture, scalable systems, frontend experiences, and modern
            development practices.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group rounded-3xl overflow-hidden border transition-all duration-500 ${
                darkMode
                  ? "bg-gray-900 border-gray-800 hover:border-blue-500"
                  : "bg-white border-gray-200 hover:border-blue-400 shadow-lg"
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 text-xs font-semibold rounded-full bg-blue-500 text-white">
                    {project.category}
                  </span>
                </div>

                {/* Status */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 text-xs font-medium rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                {/* Description */}
                <p
                  className={`leading-7 mb-6 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition ${
                        darkMode
                          ? "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition">
                    Live Demo
                  </button>

                  <button
                    className={`flex-1 py-3 rounded-xl border font-semibold transition ${
                      darkMode
                        ? "border-gray-700 hover:border-blue-500 hover:text-blue-400"
                        : "border-gray-300 hover:border-blue-500 hover:text-blue-600"
                    }`}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
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
            More enterprise-grade and scalable projects coming soon 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
