import { motion } from "framer-motion";

function Skills({ darkMode }) {
  const skills = [
    {
      name: "Java",
      icon: "☕",
      level: "Advanced",
    },
    {
      name: "Spring Boot",
      icon: "🚀",
      level: "Advanced",
    },
    {
      name: "React",
      icon: "⚛️",
      level: "Intermediate",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      level: "Intermediate",
    },
    {
      name: "MySQL",
      icon: "🗄️",
      level: "Advanced",
    },
    {
      name: "Hibernate",
      icon: "🔗",
      level: "Intermediate",
    },
    {
      name: "Tailwind CSS",
      icon: "🎨",
      level: "Intermediate",
    },
    {
      name: "Git",
      icon: "📦",
      level: "Intermediate",
    },
    {
      name: "REST APIs",
      icon: "🌐",
      level: "Advanced",
    },
    {
      name: "Docker",
      icon: "🐳",
      level: "Beginner",
    },
    {
      name: "AWS",
      icon: "☁️",
      level: "Beginner",
    },
    {
      name: "Microservices",
      icon: "⚡",
      level: "Intermediate",
    },
  ];

  return (
    <section
      id="skills"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-black via-gray-950 to-black text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

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
            My Skills
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Technologies I Work With
          </h2>

          <p
            className={`max-w-2xl mx-auto text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A strong foundation in backend development, scalable architecture,
            frontend technologies, cloud tools, and modern development
            practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-3xl border transition-all duration-300 overflow-hidden ${
                darkMode
                  ? "bg-gray-900 border-gray-800 hover:border-blue-500"
                  : "bg-white border-gray-200 hover:border-blue-400 shadow-lg"
              }`}
            >
              {/* Glow Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10 transition duration-500"></div>

              {/* Icon */}
              <div className="text-5xl mb-6 relative z-10">{skill.icon}</div>

              {/* Skill Name */}
              <h3 className="text-2xl font-bold mb-3 relative z-10">
                {skill.name}
              </h3>

              {/* Level */}
              <p
                className={`text-sm font-medium mb-6 relative z-10 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {skill.level}
              </p>

              {/* Progress Bar */}
              <div
                className={`w-full h-2 rounded-full overflow-hidden relative z-10 ${
                  darkMode ? "bg-gray-800" : "bg-gray-200"
                }`}
              >
                <div
                  className={`h-full rounded-full ${
                    skill.level === "Advanced"
                      ? "w-[90%]"
                      : skill.level === "Intermediate"
                      ? "w-[70%]"
                      : "w-[50%]"
                  } bg-gradient-to-r from-blue-500 to-cyan-400`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div
            className={`inline-flex flex-wrap justify-center gap-4 px-6 py-4 rounded-2xl border ${
              darkMode
                ? "bg-gray-900 border-gray-800"
                : "bg-white border-gray-200 shadow-md"
            }`}
          >
            <span className="font-medium">⚡ Backend Development</span>
            <span className="font-medium">🌐 REST APIs</span>
            <span className="font-medium">☁️ Cloud & DevOps</span>
            <span className="font-medium">📦 Scalable Architecture</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
