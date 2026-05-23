import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import data from "../../data/data.json";

const { footer } = data;

const socialIconMap = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  instagram: <FaInstagram />,
};

function Footer({ darkMode }) {
  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-500 ${
        darkMode
          ? "bg-black text-white border-gray-800"
          : "bg-white text-gray-900 border-gray-200"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {footer.logo}
              </span>
            </h2>
            <p
              className={`leading-8 text-lg mb-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {footer.tagline}
            </p>
            <a
              href={footer.resume}
              download
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg hover:opacity-90 transition duration-300"
            >
              Download Resume 🚀
            </a>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footer.quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`transition duration-300 hover:text-blue-500 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <p
              className={`leading-7 mb-8 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Follow me on social platforms and let's connect for opportunities,
              collaborations, and innovative projects.
            </p>

            <div className="flex gap-5">
              {footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border transition duration-300 ${
                    darkMode
                      ? "bg-gray-900 border-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white"
                      : "bg-white border-gray-200 text-gray-700 shadow-md hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {socialIconMap[social.platform]}
                </a>
              ))}
            </div>

            <div
              className={`mt-8 p-5 rounded-2xl border ${
                darkMode
                  ? "bg-gray-900 border-gray-800"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <p
                className={`text-sm mb-2 ${
                  darkMode ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Email
              </p>
              <p className="font-semibold text-lg">{footer.email}</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className={`my-12 border-t ${
            darkMode ? "border-gray-800" : "border-gray-200"
          }`}
        ></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className={`text-center md:text-left ${
              darkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            {footer.copyright.replace("❤️", "")}
            <FaHeart className="inline text-red-500 mx-1" />
            {footer.copyright.split("❤️")[1]}
          </p>
          <a
            href="#home"
            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl transition duration-300 ${
              darkMode
                ? "bg-gray-900 border border-gray-800 hover:bg-blue-500"
                : "bg-white border border-gray-200 shadow-md hover:bg-blue-500 hover:text-white"
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
