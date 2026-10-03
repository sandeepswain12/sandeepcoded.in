import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { ArrowDownToLine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../data/data.json";

const { navbar } = data;

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ScrollSpy logic to detect active section
      const sections = navbar.links.map((l) => l.path.replace("#", ""));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-[#09090b]/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/20"
            : "bg-white/85 backdrop-blur-xl border-b border-zinc-200/80 shadow-md shadow-slate-200/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20 gap-4 lg:gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0 flex items-center gap-2 text-xl sm:text-2xl font-extrabold cursor-pointer group"
          >
            <span className="font-mono text-blue-500 font-bold">&gt;_</span>
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:opacity-90 transition">
              {navbar.logo}
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center gap-6 xl:gap-8 shrink-0"
          >
            {navbar.links.map((link, index) => {
              const secId = link.path.replace("#", "");
              const isActive = activeSection === secId;

              return (
                <li key={index}>
                  <a
                    href={link.path}
                    className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                      isActive
                        ? "text-blue-500"
                        : darkMode
                        ? "text-zinc-400 hover:text-zinc-100"
                        : "text-zinc-600 hover:text-zinc-900"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute left-0 -bottom-1 w-full h-[2.5px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </motion.ul>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            {/* Social links visible on XL screens */}
            <div className="hidden xl:flex items-center gap-2">
              <a
                href={navbar.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`p-2.5 rounded-xl border transition-colors ${
                  darkMode
                    ? "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-900/60"
                    : "border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 bg-white"
                }`}
              >
                <FaGithub className="text-base" />
              </a>

              <a
                href={navbar.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`p-2.5 rounded-xl border transition-colors ${
                  darkMode
                    ? "border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-900/60"
                    : "border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 bg-white"
                }`}
              >
                <FaLinkedin className="text-base" />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                darkMode
                  ? "border-zinc-800 text-amber-400 hover:bg-zinc-800 bg-zinc-900/60"
                  : "border-zinc-200 text-zinc-700 hover:bg-zinc-100 bg-white"
              }`}
            >
              {darkMode ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>

            {/* Resume Download Button */}
            <a
              href={navbar.resume || "/sandeepkumarswain_resume.pdf"}
              download
              className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs xl:text-sm font-semibold border transition duration-300 ${
                darkMode
                  ? "border-zinc-700 bg-zinc-800/80 text-zinc-200 hover:border-blue-500 hover:text-white"
                  : "border-zinc-300 bg-slate-100 text-zinc-800 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <ArrowDownToLine className="w-3.5 h-3.5 text-blue-500" />
              <span>Resume</span>
            </a>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs xl:text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition duration-300"
            >
              {navbar.cta}
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className={`p-2.5 rounded-xl border ${
                darkMode
                  ? "border-zinc-800 text-amber-400 bg-zinc-900"
                  : "border-zinc-200 text-zinc-800 bg-white"
              }`}
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2.5 rounded-xl border ${
                darkMode
                  ? "border-zinc-800 text-white bg-zinc-900"
                  : "border-zinc-200 text-black bg-white"
              }`}
            >
              {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden px-6 pb-6 border-b ${
              darkMode
                ? "bg-[#09090b]/95 backdrop-blur-xl border-zinc-800"
                : "bg-white/95 backdrop-blur-xl border-zinc-200"
            }`}
          >
            <ul className="flex flex-col gap-4 pt-4">
              {navbar.links.map((link, index) => {
                const secId = link.path.replace("#", "");
                const isActive = activeSection === secId;

                return (
                  <li key={index}>
                    <a
                      href={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`block py-2 text-base font-semibold transition ${
                        isActive
                          ? "text-blue-500"
                          : darkMode
                          ? "text-zinc-300 hover:text-white"
                          : "text-zinc-700 hover:text-black"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-4 mt-6 pt-4 border-t border-zinc-500/10">
              <a
                href={navbar.resume || "/sandeepkumarswain_resume.pdf"}
                download
                onClick={() => setMenuOpen(false)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border ${
                  darkMode
                    ? "border-zinc-700 text-zinc-200"
                    : "border-zinc-300 text-zinc-800"
                }`}
              >
                <ArrowDownToLine className="w-4 h-4 text-blue-500" />
                Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex-1 text-center py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-semibold shadow-md"
              >
                {navbar.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

