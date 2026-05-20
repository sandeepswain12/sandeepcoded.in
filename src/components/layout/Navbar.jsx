import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Nav Links
  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? "bg-black/70 backdrop-blur-xl border-b border-gray-800 shadow-lg"
            : "bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold cursor-pointer"
          >
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              SandeepCoded.In
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <motion.ul
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center gap-10"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className={`relative font-medium transition duration-300 hover:text-blue-500 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {link.name}

                  {/* Hover Underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </motion.ul>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-5">
            {/* Social Icons */}
            <a
              href="https://github.com/sandeepswain12"
              className={`text-xl transition duration-300 hover:text-blue-500 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sandeep-kumar-swain-778b40237/"
              className={`text-xl transition duration-300 hover:text-blue-500 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <FaLinkedin />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition duration-300 ${
                darkMode
                  ? "bg-gray-900 text-yellow-400 hover:bg-gray-800"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition duration-300 shadow-lg"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-11 h-11 rounded-xl flex items-center justify-center transition duration-300 ${
                darkMode
                  ? "bg-gray-900 text-yellow-400"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-2xl ${darkMode ? "text-white" : "text-black"}`}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden px-6 pb-6 ${
              darkMode
                ? "bg-black/95 backdrop-blur-xl border-t border-gray-800"
                : "bg-white/95 backdrop-blur-xl border-t border-gray-200"
            }`}
          >
            <ul className="flex flex-col gap-6 pt-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-lg font-medium transition duration-300 hover:text-blue-500 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Socials */}
            <div className="flex items-center gap-5 mt-8">
              <a
                href="#"
                className={`text-2xl transition duration-300 hover:text-blue-500 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className={`text-2xl transition duration-300 hover:text-blue-500 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-8 block text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg"
            >
              Hire Me 🚀
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
