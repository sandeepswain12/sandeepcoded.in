import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import data from "../data/data.json";

const { experience } = data;

function Experience({ darkMode }) {
  if (!experience || !experience.list || experience.list.length === 0) return null;

  return (
    <section
      id="experience"
      className={`relative py-28 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-[#09090b] text-zinc-100"
          : "bg-slate-50/70 text-zinc-900"
      }`}
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border bg-blue-500/10 border-blue-500/20 text-blue-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{experience.sectionLabel}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {experience.heading}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {experience.description}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-blue-500/30 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {experience.list.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/40 ring-4 ring-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>

              {/* Main Card */}
              <div
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-xl ${
                  darkMode
                    ? "bg-zinc-900/80 border-zinc-800/80 hover:border-blue-500/50 shadow-xl shadow-black/40 hover:shadow-blue-500/10"
                    : "bg-white border-zinc-200/90 hover:border-blue-400 shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10"
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-zinc-500/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                        {item.role}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                        {item.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                      <span className="flex items-center gap-1.5 text-blue-500 font-semibold">
                        <Building2 className="w-4 h-4" />
                        {item.company}
                      </span>
                      <span className={`flex items-center gap-1.5 ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        {item.team}
                      </span>
                    </div>
                  </div>

                  <div className={`flex flex-wrap items-center gap-4 text-xs sm:text-sm ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-rose-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Contribution Points */}
                <div className="mt-6 space-y-3.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? "text-zinc-300" : "text-zinc-700"}`}>
                        {pt}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-8 pt-6 border-t border-zinc-500/10">
                  <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-blue-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Technologies & Architecture</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono border transition-colors ${
                          darkMode
                            ? "bg-zinc-800/70 border-zinc-700/60 text-zinc-300 hover:text-white hover:border-blue-500"
                            : "bg-slate-100 border-zinc-200 text-zinc-700 hover:text-blue-600 hover:border-blue-400"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
