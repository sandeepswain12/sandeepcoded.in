import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, ShieldCheck, Terminal, Layers } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import data from "../data/data.json";
import images from "../data/images";

const { hero } = data;

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20 transition-colors duration-500 ${
        darkMode
          ? "bg-[#09090b] text-zinc-100"
          : "bg-gradient-to-b from-slate-50 via-white to-slate-50 text-zinc-900"
      }`}
    >
      {/* Background Glows */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Dot Grid Background in Dark Mode */}
      {darkMode && (
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content (7 Cols on LG) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col justify-center"
          >
            {/* Live Availability & Company Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6">
              <div
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${
                  darkMode
                    ? "bg-zinc-900/90 border-zinc-800 text-zinc-300"
                    : "bg-white border-zinc-200 text-zinc-700 shadow-sm"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{hero.availability || "Available for Opportunities"}</span>
              </div>

              <div
                className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                  darkMode
                    ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                    : "bg-blue-50 border-blue-200 text-blue-700"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                <span>{hero.badge}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] mb-5">
              <span className={`block text-lg sm:text-xl font-medium tracking-normal mb-2 ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                {hero.greeting}
              </span>
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {hero.name}
              </span>
            </h1>

            {/* Sub-headline / Role */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <Terminal className="w-5 h-5 text-blue-500" />
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-blue-500">
                {hero.title || "Backend Software Engineer"}
              </p>
            </div>

            {/* Bio Description */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0 ${
                darkMode ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              {hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/sandeepkumarswain_resume.pdf"
                download
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl border font-semibold text-sm sm:text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                  darkMode
                    ? "border-zinc-700 bg-zinc-800/80 text-zinc-200 hover:border-blue-500 hover:text-white"
                    : "border-zinc-300 bg-white text-zinc-800 hover:border-blue-400 hover:text-blue-600 shadow-sm"
                }`}
              >
                <ArrowDownToLine className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </a>

              {/* Social Quick Icons */}
              <div className="flex items-center gap-2.5 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href="https://github.com/sandeepswain12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={`p-3 rounded-xl border transition duration-200 ${
                    darkMode
                      ? "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-900/60"
                      : "border-zinc-200 text-zinc-600 hover:text-black hover:border-zinc-300 bg-white"
                  }`}
                >
                  <FaGithub className="text-lg" />
                </a>

                <a
                  href="https://www.linkedin.com/in/sandeep-kumar-swain-778b40237/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className={`p-3 rounded-xl border transition duration-200 ${
                    darkMode
                      ? "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-900/60"
                      : "border-zinc-200 text-zinc-600 hover:text-black hover:border-zinc-300 bg-white"
                  }`}
                >
                  <FaLinkedin className="text-lg" />
                </a>

                <a
                  href="mailto:sandeepswain027@gmail.com"
                  aria-label="Send Email"
                  className={`p-3 rounded-xl border transition duration-200 ${
                    darkMode
                      ? "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-900/60"
                      : "border-zinc-200 text-zinc-600 hover:text-black hover:border-zinc-300 bg-white"
                  }`}
                >
                  <FaEnvelope className="text-lg" />
                </a>
              </div>
            </div>

            {/* Metrics & Highlights Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-zinc-500/10 text-left">
              {hero.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`p-3 sm:p-4 rounded-2xl border transition ${
                    darkMode
                      ? "bg-zinc-900/40 border-zinc-800/60"
                      : "bg-white/60 border-zinc-200/70 shadow-sm"
                  }`}
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-500 tracking-tight">
                    {stat.value}
                  </h3>
                  <p
                    className={`text-xs font-medium mt-1 ${
                      darkMode ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual (5 Cols on LG) with Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative">
              {/* Backlight Ambient Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 blur-3xl opacity-30 animate-pulse pointer-events-none" />

              {/* Profile Image with Ring */}
              <div className="relative p-2 rounded-full bg-gradient-to-tr from-blue-500/40 via-cyan-400/20 to-transparent border border-blue-500/30 shadow-2xl">
                <img
                  src={images[hero.profileImage]}
                  alt={`${hero.name} Profile`}
                  className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] object-cover rounded-full shadow-inner"
                />
              </div>

              {/* Floating Badge 1: Aurus FinTech */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={`absolute -top-4 -left-6 sm:-left-8 px-4 py-2.5 rounded-2xl border shadow-xl backdrop-blur-xl flex items-center gap-2.5 ${
                  darkMode
                    ? "bg-zinc-900/90 border-zinc-700/80 text-white"
                    : "bg-white/95 border-zinc-200 text-zinc-800 shadow-slate-200"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold text-sm">
                  💳
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">Aurus ECST Team</p>
                  <p className={`text-[10px] ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                    PayPage &amp; Tokenization
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Java & Spring */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className={`absolute bottom-4 -right-4 sm:-right-8 px-4 py-2.5 rounded-2xl border shadow-xl backdrop-blur-xl flex items-center gap-2.5 ${
                  darkMode
                    ? "bg-zinc-900/90 border-zinc-700/80 text-white"
                    : "bg-white/95 border-zinc-200 text-zinc-800 shadow-slate-200"
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 font-bold text-sm">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold leading-tight">Java &amp; Spring Boot</p>
                  <p className={`text-[10px] ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                    Infinispan &amp; MariaDB
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 3: Distributed Microservices */}
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className={`hidden sm:flex absolute -bottom-6 left-10 px-3.5 py-2 rounded-xl border shadow-lg backdrop-blur-xl items-center gap-2 text-xs font-semibold ${
                  darkMode
                    ? "bg-zinc-900/80 border-zinc-700/60 text-zinc-300"
                    : "bg-white/90 border-zinc-200 text-zinc-700"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-blue-500" />
                <span>Distributed Microservices</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

