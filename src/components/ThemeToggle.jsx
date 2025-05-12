import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";

const ThemeToggle = ({ scrolled = true }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.div
      className={`relative w-14 h-7 rounded-full ${
        scrolled ? "bg-[var(--text-highlight)]" : "bg-white bg-opacity-20"
      } cursor-pointer flex items-center p-1 shadow-md`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-6 h-6 rounded-full flex items-center justify-center shadow-md"
        style={{
          background: theme === "dark" ? "#f5f5f5" : "#f5f5f5",
        }}
        animate={{
          x: theme === "dark" ? 0 : 28,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === "dark" ? (
          <span className="text-sm">🌙</span>
        ) : (
          <span className="text-sm">☀️</span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;
