import { motion } from "framer-motion";
import {
  Wrench,
  Layers,
  Server,
  Zap,
  Database,
  Cloud,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { FaJava, FaAws } from "react-icons/fa6";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiHibernate,
  SiMariadb,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiPostman,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";
import data from "../data/data.json";

const { skills } = data;

// Map iconKey string to actual React Icon component
const iconMap = {
  java: <FaJava className="text-[#f89820] text-xl" />,
  springboot: <SiSpringboot className="text-[#6db33f] text-xl" />,
  springsecurity: <SiSpringsecurity className="text-[#6db33f] text-xl" />,
  microservices: <Layers className="text-blue-400 w-5 h-5" />,
  rest: <Server className="text-cyan-400 w-5 h-5" />,
  hibernate: <SiHibernate className="text-[#bcae79] text-xl" />,
  mariadb: <SiMariadb className="text-[#003545] dark:text-[#6c9fb0] text-xl" />,
  mysql: <SiMysql className="text-[#00758f] text-xl" />,
  postgresql: <SiPostgresql className="text-[#336791] text-xl" />,
  infinispan: <Zap className="text-amber-400 w-5 h-5" />,
  mongodb: <SiMongodb className="text-[#47a248] text-xl" />,
  docker: <SiDocker className="text-[#2496ed] text-xl" />,
  aws: <FaAws className="text-[#ff9900] text-xl" />,
  git: <SiGit className="text-[#f05032] text-xl" />,
  postman: <SiPostman className="text-[#ff6c37] text-xl" />,
  react: <SiReact className="text-[#61dafb] text-xl" />,
  typescript: <SiTypescript className="text-[#3178c6] text-xl" />,
  javascript: <SiJavascript className="text-[#f7df1e] text-xl" />,
  tailwind: <SiTailwindcss className="text-[#06b6d4] text-xl" />,
  python: <SiPython className="text-[#3776ab] text-xl" />,
};

const categoryIconMap = {
  0: <Server className="w-5 h-5 text-blue-500" />,
  1: <Database className="w-5 h-5 text-cyan-500" />,
  2: <Cloud className="w-5 h-5 text-amber-500" />,
  3: <Code2 className="w-5 h-5 text-emerald-500" />,
};

function Skills({ darkMode }) {
  return (
    <section
      id="skills"
      className={`relative py-28 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-[#09090b] text-zinc-100"
          : "bg-slate-50/70 text-zinc-900"
      }`}
    >
      {/* Background Lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border bg-blue-500/10 border-blue-500/20 text-blue-400">
            <Wrench className="w-3.5 h-3.5" />
            <span>{skills.sectionLabel}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {skills.heading}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {skills.description}
          </p>
        </motion.div>

        {/* Categorized Technical Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.categories?.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-xl ${
                darkMode
                  ? "bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700 shadow-xl shadow-black/40"
                  : "bg-white border-zinc-200/90 hover:border-zinc-300 shadow-xl shadow-slate-200/40"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-2">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  {categoryIconMap[catIdx] || <Wrench className="w-5 h-5 text-blue-500" />}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                    {cat.title}
                  </h3>
                </div>
              </div>
              <p
                className={`text-xs sm:text-sm mb-6 ${
                  darkMode ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                {cat.description}
              </p>

              {/* Skills Chips Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-200 group ${
                      darkMode
                        ? "bg-zinc-950/60 border-zinc-800/80 hover:border-blue-500/50 hover:bg-zinc-900/80"
                        : "bg-slate-50/80 border-zinc-200/80 hover:border-blue-400 hover:bg-white shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/5 group-hover:scale-110 transition-transform">
                        {iconMap[skill.iconKey] || <Code2 className="w-4 h-4 text-blue-400" />}
                      </div>
                      <span className="text-sm font-semibold tracking-tight">
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                        skill.level === "Core Expertise"
                          ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                          : skill.level === "Production"
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          : darkMode
                          ? "bg-zinc-800/60 text-zinc-400 border-zinc-700/50"
                          : "bg-zinc-100 text-zinc-600 border-zinc-200"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <div
            className={`inline-flex flex-wrap justify-center items-center gap-3 sm:gap-6 px-6 py-3.5 rounded-2xl border ${
              darkMode
                ? "bg-zinc-900/60 border-zinc-800/80 text-zinc-300"
                : "bg-white border-zinc-200 text-zinc-700 shadow-md"
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
              Architectural Focus:
            </span>
            {skills.tags?.map((tag, index) => (
              <span key={index} className="text-xs sm:text-sm font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                {tag.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
