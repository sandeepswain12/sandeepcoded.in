import profile from "../assets/images/profilepic.jpeg";
import { motion } from "framer-motion";

function About({ darkMode }) {
  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-black via-gray-950 to-black text-white"
          : "bg-gradient-to-b from-white via-gray-50 to-white text-gray-900"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-blue-500 font-semibold tracking-wider uppercase mb-3">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Know More About Me
          </h2>

          <p
            className={`max-w-2xl mx-auto text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Passionate about building scalable applications, backend systems,
            and modern user experiences with clean architecture and production
            standards.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

              {/* Image */}
              <img
                src={profile}
                alt="Sandeep Profile"
                className="relative w-[300px] sm:w-[380px] lg:w-[430px] rounded-3xl object-cover shadow-2xl border border-white/10 hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Role */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
                darkMode
                  ? "bg-gray-900 border-gray-700 text-blue-400"
                  : "bg-white border-gray-200 text-blue-600 shadow-sm"
              }`}
            >
              💻 Java Full Stack Developer
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
              Building Modern & Scalable Digital Products
            </h3>

            {/* Description */}
            <p
              className={`text-lg leading-8 mb-8 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm a passionate Full Stack Developer with expertise in Java,
              Spring Boot, MySQL, React, REST APIs, and modern web technologies.
              I enjoy designing scalable backend systems and crafting elegant,
              responsive frontend applications with production-grade
              architecture.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Experience */}
              <div
                className={`p-6 rounded-2xl border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200 shadow-md"
                }`}
              >
                <div className="text-4xl mb-4">🚀</div>

                <h4 className="text-xl font-bold mb-2">Experience</h4>

                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Fresher / Java Developer focused on real-world projects.
                </p>
              </div>

              {/* Projects */}
              <div
                className={`p-6 rounded-2xl border transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  darkMode
                    ? "bg-gray-900 border-gray-800"
                    : "bg-white border-gray-200 shadow-md"
                }`}
              >
                <div className="text-4xl mb-4">📂</div>

                <h4 className="text-xl font-bold mb-2">Projects</h4>

                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  10+ production-oriented and scalable applications built.
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Tech Stack</h4>

              <div className="flex flex-wrap gap-3">
                {[
                  "Java",
                  "Spring Boot",
                  "React",
                  "MySQL",
                  "REST APIs",
                  "Docker",
                  "AWS",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      darkMode
                        ? "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
