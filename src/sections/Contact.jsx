import { useState } from "react";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import data from "../data/data.json";

const { contact } = data;

// Map icon type string → actual icon component
const iconMap = {
  email: <FaEnvelope className="text-2xl text-blue-500" />,
  phone: <FaPhone className="text-2xl text-blue-500" />,
  location: <FaMapMarkerAlt className="text-2xl text-blue-500" />,
};

function Contact({ darkMode }) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Input Change
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong ❌");
    } finally {
      setSending(false);
    }
  };

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
            {contact.sectionLabel}
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            {contact.heading}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
                darkMode
                  ? "bg-gray-900 border-gray-700 text-blue-400"
                  : "bg-white border-gray-200 text-blue-600 shadow-sm"
              }`}
            >
              📩 {contact.badge}
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              {contact.title}
            </h3>

            <p
              className={`leading-8 text-lg mb-10 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {contact.body}
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contact.info.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-5 p-5 rounded-2xl border transition duration-300 hover:-translate-y-1 ${
                    darkMode
                      ? "bg-gray-900 border-gray-800 hover:border-blue-500"
                      : "bg-white border-gray-200 shadow-md hover:border-blue-400"
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                    {iconMap[item.type]}
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.label}</h4>

                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-5 mt-10">
              <a
                href={contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition duration-300 ${
                  darkMode
                    ? "bg-gray-900 border border-gray-800 hover:bg-blue-500"
                    : "bg-white border border-gray-200 shadow-md hover:bg-blue-500 hover:text-white"
                }`}
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href={contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
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
              onSubmit={handleSubmit}
              className={`p-8 sm:p-10 rounded-3xl border backdrop-blur-md ${
                darkMode
                  ? "bg-gray-900/80 border-gray-800"
                  : "bg-white/90 border-gray-200 shadow-xl"
              }`}
            >
              <h3 className="text-3xl font-bold mb-8">Send Me a Message</h3>

              {/* Name */}
              <div className="mb-6">
                <label className="block mb-3 font-medium">Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`w-full p-4 rounded-2xl border outline-none resize-none transition ${
                    darkMode
                      ? "bg-gray-950 border-gray-700 text-white focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 text-black focus:border-blue-500"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-lg hover:opacity-90 transition duration-300 shadow-lg disabled:opacity-70"
              >
                {sending ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
