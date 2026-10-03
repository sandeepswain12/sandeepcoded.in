import { useState, useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-[#09090b] text-zinc-100" : "bg-[#f8fafc] text-zinc-900"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: darkMode ? "#18181b" : "#ffffff",
            color: darkMode ? "#f4f4f5" : "#09090b",
            border: darkMode ? "1px solid #27272a" : "1px solid #e4e4e7",
            borderRadius: "1rem",
            padding: "12px 18px",
            fontSize: "14px",
            fontWeight: "500",
          },
        }}
      />
    </div>
  );
}

export default App;

