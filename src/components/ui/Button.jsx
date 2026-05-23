import { motion } from "framer-motion";

function Button({
  text,
  icon,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
  darkMode = false,
}) {
  const variants = {
    // Always visible — gradient on all backgrounds
    primary:
      "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg hover:shadow-blue-500/30 hover:opacity-90",

    // Dark mode: glassy white border + white text
    // Light mode: solid gray border + dark text + hover fills blue
    secondary: darkMode
      ? "border border-gray-600 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/40"
      : "border-2 border-gray-800 bg-transparent text-gray-800 hover:bg-gray-900 hover:text-white",

    outline:
      "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",

    dark: "bg-black text-white hover:bg-gray-800",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-3
        px-8 py-4
        rounded-2xl
        font-semibold
        text-base
        transition-all duration-300
        cursor-pointer
        ${variants[variant]}
        ${fullWidth ? "w-full" : ""}
      `}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </motion.button>
  );
}

export default Button;
