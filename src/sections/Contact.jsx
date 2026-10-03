import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import data from "../data/data.json";

const { contact } = data;

function Contact({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard! 📋");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields!");
      return;
    }

    try {
      setSending(true);

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, formData, publicKey);
        toast.success("Message sent successfully! 🚀");
      } else {
        // Fallback gracefully to mailto link when EmailJS is not configured in local environment
        const mailtoLink = `mailto:sandeepswain027@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact: " + formData.name
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        window.location.href = mailtoLink;
        toast.success("Opening your mail client... 📬");
      }

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Could not send directly. Please email me at sandeepswain027@gmail.com");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{contact.sectionLabel}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {contact.heading}
          </h2>

          <p
            className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct Info & Quick Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5 border ${
                darkMode
                  ? "bg-zinc-900 border-zinc-800 text-blue-400"
                  : "bg-white border-zinc-200 text-blue-600 shadow-sm"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{contact.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-snug">
              {contact.title}
            </h3>

            <p
              className={`text-base leading-relaxed mb-8 ${
                darkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              {contact.body}
            </p>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              {contact.info.map((item, index) => {
                const isEmail = item.type === "email";

                return (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition duration-200 ${
                      darkMode
                        ? "bg-zinc-900/60 border-zinc-800/80 hover:border-zinc-700"
                        : "bg-white border-zinc-200/90 shadow-sm hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                        {item.type === "email" ? (
                          <Mail className="w-5 h-5" />
                        ) : item.type === "phone" ? (
                          <Phone className="w-5 h-5" />
                        ) : (
                          <MapPin className="w-5 h-5" />
                        )}
                      </div>

                      <div>
                        <h4 className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}>
                          {item.label}
                        </h4>
                        <p className="text-sm sm:text-base font-medium mt-0.5">{item.value}</p>
                      </div>
                    </div>

                    {/* 1-Click Copy Button for Email */}
                    {isEmail && (
                      <button
                        onClick={() => handleCopyEmail(item.value)}
                        aria-label="Copy email"
                        className={`p-2.5 rounded-xl border transition cursor-pointer ${
                          copiedEmail
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                            : darkMode
                            ? "border-zinc-700 bg-zinc-800 hover:bg-zinc-700 text-zinc-300"
                            : "border-zinc-300 bg-slate-100 hover:bg-zinc-200 text-zinc-700"
                        }`}
                      >
                        {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href={contact.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-colors ${
                  darkMode
                    ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-blue-500 hover:text-white"
                    : "bg-white border-zinc-200 text-zinc-700 shadow-sm hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                <FaGithub />
              </a>

              <a
                href={contact.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl border transition-colors ${
                  darkMode
                    ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-blue-500 hover:text-white"
                    : "bg-white border-zinc-200 text-zinc-700 shadow-sm hover:border-blue-400 hover:text-blue-600"
                }`}
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-xl shadow-2xl ${
                darkMode
                  ? "bg-zinc-900/70 border-zinc-800/80 shadow-black/40"
                  : "bg-white border-zinc-200/90 shadow-slate-200/50"
              }`}
            >
              <h3 className="text-2xl font-bold tracking-tight mb-2">Send a Message</h3>
              <p className={`text-sm mb-8 ${darkMode ? "text-zinc-400" : "text-zinc-500"}`}>
                Drop a line about a role, project, or just to say hello.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className={`w-full p-3.5 rounded-xl border text-sm outline-none transition ${
                      darkMode
                        ? "bg-zinc-950/80 border-zinc-800 text-zinc-100 focus:border-blue-500"
                        : "bg-slate-50 border-zinc-200 text-zinc-900 focus:border-blue-500"
                    }`}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className={`w-full p-3.5 rounded-xl border text-sm outline-none transition ${
                      darkMode
                        ? "bg-zinc-950/80 border-zinc-800 text-zinc-100 focus:border-blue-500"
                        : "bg-slate-50 border-zinc-200 text-zinc-900 focus:border-blue-500"
                    }`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Backend Role / Collaboration Opportunity"
                  className={`w-full p-3.5 rounded-xl border text-sm outline-none transition ${
                    darkMode
                      ? "bg-zinc-950/80 border-zinc-800 text-zinc-100 focus:border-blue-500"
                      : "bg-slate-50 border-zinc-200 text-zinc-900 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your team, tech stack, or project..."
                  className={`w-full p-3.5 rounded-xl border text-sm outline-none resize-none transition ${
                    darkMode
                      ? "bg-zinc-950/80 border-zinc-800 text-zinc-100 focus:border-blue-500"
                      : "bg-slate-50 border-zinc-200 text-zinc-900 focus:border-blue-500"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-500/25 hover:opacity-90 transition duration-200 cursor-pointer disabled:opacity-70"
              >
                {sending ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
