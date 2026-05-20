import { motion } from "framer-motion";

function Button({
  text,
  icon,
  onClick,
  type = "button",
  variant = "primary",
  fullWidth = false,
}) {
  // Variants
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg hover:shadow-blue-500/30",

    secondary:
      "border border-gray-300 dark:border-gray-700 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black",

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
      {/* Icon */}
      {icon && <span className="text-lg">{icon}</span>}

      {/* Text */}
      <span>{text}</span>
    </motion.button>
  );
}

export default Button;
