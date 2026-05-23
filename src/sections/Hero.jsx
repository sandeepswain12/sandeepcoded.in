import Button from "../components/ui/Button";
import { motion } from "framer-motion";
import data from "../data/data.json";
import images from "../data/images";

const { hero } = data;

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900"
      }`}
    >
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)] py-10 lg:py-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col justify-center"
          >
            {/* Badge */}
            <div className="flex justify-center lg:justify-start mb-6">
              <div
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-blue-400"
                    : "bg-white border-gray-200 text-blue-600 shadow-sm"
                }`}
              >
                🟢 {hero.badge}
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              {hero.greeting} <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {hero.name}
              </span>{" "}
              👋
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {hero.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {hero.buttons.map((btn, index) => (
                <a key={index} href={btn.href}>
                  <Button
                    text={btn.text}
                    variant={btn.variant}
                    darkMode={darkMode}
                  />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-12 justify-center lg:justify-start">
              {hero.stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="text-3xl font-bold text-blue-500">
                    {stat.value}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <img
                src={images[hero.profileImage]}
                alt={`${hero.name} Profile`}
                className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] object-cover rounded-full border-4 border-white/20 shadow-2xl backdrop-blur-md hover:scale-105 transition duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
