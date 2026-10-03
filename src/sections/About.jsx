import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Database, CheckCircle2, Code2 } from "lucide-react";
import data from "../data/data.json";

const { about } = data;

function About({ darkMode }) {
  return (
    <section
      id="about"
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
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border bg-blue-500/10 border-blue-500/20 text-blue-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>{about.sectionLabel}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {about.heading}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {about.subheading}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Backend & FinTech Architecture Terminal Card (Replaces duplicate photo) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div
              className={`rounded-3xl border overflow-hidden shadow-2xl backdrop-blur-xl ${
                darkMode
                  ? "bg-zinc-950/90 border-zinc-800 shadow-black/60"
                  : "bg-slate-900 border-slate-800 text-white shadow-slate-300/40"
              }`}
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800/80 bg-zinc-900/60">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>sandeep@aurus:~/fintech-core</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  LIVE
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs sm:text-sm space-y-4 text-zinc-300">
                <div>
                  <span className="text-blue-400">$</span>{" "}
                  <span className="text-zinc-100">cat system_spec.json</span>
                </div>

                <div className="bg-zinc-900/90 p-4 rounded-2xl border border-zinc-800/80 space-y-2 text-xs">
                  <p className="text-zinc-400">// Aurus Inc. ECST Payment Architecture</p>
                  <p>
                    <span className="text-purple-400">"team"</span>:{" "}
                    <span className="text-emerald-300">"ECST (Electronic Commerce &amp; Settlement)"</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">"core_service"</span>:{" "}
                    <span className="text-emerald-300">"iFrame PayPage &amp; Tokenization"</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">"security_protocol"</span>:{" "}
                    <span className="text-emerald-300">"One-Time Token Pipeline"</span>,
                  </p>
                  <p>
                    <span className="text-purple-400">"active_migration"</span>:{" "}
                    <span className="text-cyan-300">"Infinispan Cache + MariaDB"</span>
                  </p>
                </div>

                {/* Architecture Highlights List */}
                <div className="space-y-2 pt-2">
                  <div className="text-zinc-400 text-xs">// Production Specialization:</div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Secure iFrame merchant payment workflows</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Low-latency distributed caching with Infinispan</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>ACID-compliant MariaDB &amp; MySQL persistence</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio & Key Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5 border ${
                darkMode
                  ? "bg-zinc-900 border-zinc-800 text-blue-400"
                  : "bg-white border-zinc-200 text-blue-600 shadow-sm"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{about.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 leading-snug">
              {about.title}
            </h3>

            <p
              className={`text-base sm:text-lg leading-relaxed mb-8 ${
                darkMode ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              {about.description}
            </p>

            {/* Architecture Highlights Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {about.cards.map((card, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-2xl border transition duration-300 ${
                    darkMode
                      ? "bg-zinc-900/60 border-zinc-800/80 hover:border-blue-500/40"
                      : "bg-white border-zinc-200 shadow-sm hover:border-blue-300"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-3">
                    {index === 0 ? <Shield className="w-5 h-5" /> : <Database className="w-5 h-5" />}
                  </div>
                  <h4 className="text-base font-bold mb-1.5">{card.title}</h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech Stack List */}
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                Core Technical Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {about.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono border transition ${
                      darkMode
                        ? "bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:text-white hover:border-blue-500"
                        : "bg-white border-zinc-200 text-zinc-700 hover:text-blue-600 hover:border-blue-400 shadow-sm"
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

