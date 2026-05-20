import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";

function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`relative py-24 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-black via-gray-950 to-black text-white"
          : "bg-gradient-to-b from-gray-100 via-white to-gray-50 text-gray-900"
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
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Let's Work Together
          </h2>

          <p
            className={`max-w-2xl mx-auto text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project idea, collaboration opportunity, or job opening? Feel
            free to reach out. I'm always open to discussing new ideas and
            building impactful solutions.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
                darkMode
                  ? "bg-gray-900 border-gray-700 text-blue-400"
                  : "bg-white border-gray-200 text-blue-600 shadow-sm"
              }`}
            >
              📩 Get In Touch
            </div>

            {/* Title */}
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              Let's Build Something Amazing Together
            </h3>

            {/* Description */}
            <p
              className={`leading-8 text-lg mb-10 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I specialize in Java Full Stack Development, scalable backend
              systems, microservices, and modern frontend experiences. Feel free
              to connect regarding opportunities, freelance projects, or
              collaborations.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Email */}
              <div
                className={`flex items-center gap-5 p-5 rounded-2xl border transition duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:border-blue-500"
                    : "bg-white border-gray-200 shadow-md hover:border-blue-400"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <FaEnvelope className="text-2xl text-blue-500" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    sandeepswain027@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className={`flex items-center gap-5 p-5 rounded-2xl border transition duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:border-blue-500"
                    : "bg-white border-gray-200 shadow-md hover:border-blue-400"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <FaPhone className="text-2xl text-blue-500" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    +91 9078915953
                  </p>
                </div>
              </div>

              {/* Location */}
              <div
                className={`flex items-center gap-5 p-5 rounded-2xl border transition duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "bg-gray-900 border-gray-800 hover:border-blue-500"
                    : "bg-white border-gray-200 shadow-md hover:border-blue-400"
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-2xl text-blue-500" />
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/sandeepswain12"
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition duration-300 ${
                  darkMode
                    ? "bg-gray-900 border border-gray-800 hover:bg-blue-500"
                    : "bg-white border border-gray-200 shadow-md hover:bg-blue-500 hover:text-white"
                }`}
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/sandeep-kumar-swain-778b40237/"
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition duration-300 ${
                  darkMode
                    ? "bg-gray-900 border border-gray-800 hover:bg-blue-500"
                    : "bg-white border border-gray-200 shadow-md hover:bg-blue-500 hover:text-white"
                }`}
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form
              className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-md ${
                darkMode
                  ? "bg-gray-900/80 border-gray-800"
                  : "bg-white/90 border-gray-200 shadow-xl"
              }`}
            >
              {/* Form Title */}
              <h3 className="text-3xl font-bold mb-8">Send Me a Message</h3>

              {/* Name */}
              <div className="mb-6">
                <label className="block mb-3 font-medium">Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className={`w-full p-4 rounded-2xl border outline-none transition ${
                    darkMode
                      ? "bg-gray-950 border-gray-700 text-white focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 text-black focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label className="block mb-3 font-medium">Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full p-4 rounded-2xl border outline-none transition ${
                    darkMode
                      ? "bg-gray-950 border-gray-700 text-white focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 text-black focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block mb-3 font-medium">Subject</label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className={`w-full p-4 rounded-2xl border outline-none transition ${
                    darkMode
                      ? "bg-gray-950 border-gray-700 text-white focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 text-black focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block mb-3 font-medium">Message</label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className={`w-full p-4 rounded-2xl border outline-none resize-none transition ${
                    darkMode
                      ? "bg-gray-950 border-gray-700 text-white focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 text-black focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Button */}
              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-lg hover:opacity-90 transition duration-300 shadow-lg">
                Send Message 🚀
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
