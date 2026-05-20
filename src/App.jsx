import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero darkMode={darkMode} />

      <About darkMode={darkMode} />

      <Skills darkMode={darkMode} />

      <Projects darkMode={darkMode} />

      <Contact darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
