import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <motion.div
      className="relative w-12 h-6 rounded-full bg-gray-600 cursor-pointer flex items-center p-1"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-white flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 0 : 24,
          backgroundColor: theme === 'dark' ? '#f5f5f5' : '#f5f5f5',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        {theme === 'dark' ? (
          <span className="text-xs">🌙</span>
        ) : (
          <span className="text-xs">☀️</span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ThemeToggle;
