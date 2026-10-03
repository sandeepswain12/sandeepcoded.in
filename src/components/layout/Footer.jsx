import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import { Copy, Check, ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import data from "../../data/data.json";

const { footer } = data;

const socialIconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
};

function Footer({ darkMode }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(footer.email);
    setCopied(true);
    toast.success("Email copied to clipboard! 📋");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-500 ${
        darkMode
          ? "bg-[#09090b] text-zinc-100 border-zinc-800/80"
          : "bg-white text-zinc-900 border-zinc-200"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1.5 mb-4">
              <span className="font-mono text-blue-500 font-bold text-2xl">&gt;_</span>
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {footer.logo}
              </span>
            </div>
            <p
              className={`leading-relaxed text-sm sm:text-base mb-8 max-w-md ${
                darkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              {footer.tagline}
            </p>
            <a
              href={footer.resume}
              download
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:opacity-90 transition duration-300"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Center Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:mx-auto"
          >
            <h3 className="text-lg font-bold mb-5 tracking-tight">Quick Navigation</h3>
            <ul className="space-y-3">
              {footer.quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`text-sm transition duration-200 hover:text-blue-500 ${
                      darkMode ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-5 tracking-tight">Connect With Me</h3>
            <p
              className={`text-sm leading-relaxed mb-6 ${
                darkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Open for backend engineering roles, fintech collaborations, and architecture discussions.
            </p>

            <div className="flex gap-4">
              {footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.platform}`}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-all duration-200 ${
                    darkMode
                      ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-blue-500 hover:text-white"
                      : "bg-white border-zinc-200 text-zinc-700 shadow-sm hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {socialIconMap[social.platform]}
                </a>
              ))}
            </div>

            {/* Email Box with 1-Click Copy */}
            <div
              className={`mt-6 p-4 rounded-xl border flex items-center justify-between gap-3 ${
                darkMode
                  ? "bg-zinc-900/80 border-zinc-800"
                  : "bg-slate-50 border-zinc-200"
              }`}
            >
              <div>
                <p className={`text-xs ${darkMode ? "text-zinc-500" : "text-zinc-500"}`}>
                  Direct Email
                </p>
                <p className="font-mono text-xs sm:text-sm font-semibold">{footer.email}</p>
              </div>

              <button
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className={`p-2 rounded-lg border transition cursor-pointer ${
                  copied
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                    : darkMode
                    ? "border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                    : "border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-700"
                }`}
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className={`my-10 border-t ${
            darkMode ? "border-zinc-800/80" : "border-zinc-200"
          }`}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className={`text-xs sm:text-sm text-center sm:text-left ${
              darkMode ? "text-zinc-500" : "text-zinc-600"
            }`}
          >
            {footer.copyright.replace("❤️", "")}
            <FaHeart className="inline text-rose-500 mx-1 w-3.5 h-3.5" />
            {footer.copyright.split("❤️")[1] || "All rights reserved."}
          </p>
          <a
            href="#home"
            aria-label="Scroll to top"
            className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm border transition-all duration-200 ${
              darkMode
                ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-blue-500 hover:text-white"
                : "bg-white border-zinc-200 text-zinc-700 shadow-sm hover:border-blue-400 hover:text-blue-600"
            }`}
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

