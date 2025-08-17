import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDark,
  onToggle,
  className = "",
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <motion.button
      onClick={onToggle}
      className={`${sizeClasses[size]} rounded-full bg-gray-200 dark:bg-gray-700 p-2 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full"
      >
        {isDark ? (
          <Moon
            className={`${iconSizeClasses[size]} text-yellow-500 absolute inset-0 m-auto`}
          />
        ) : (
          <Sun
            className={`${iconSizeClasses[size]} text-orange-500 absolute inset-0 m-auto`}
          />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
