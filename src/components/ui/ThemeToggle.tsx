import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "outlined";
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  isDark,
  onToggle,
  className = "",
  size = "md",
  variant = "default",
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

  const variantClasses = {
    default:
      "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600",
    minimal: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800",
    outlined:
      "bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500",
  };

  const iconVariants = {
    light: { rotate: 0, scale: 1 },
    dark: { rotate: 180, scale: 1 },
  };

  const containerVariants = {
    light: { backgroundColor: "#f3f4f6" },
    dark: { backgroundColor: "#374151" },
  };

  return (
    <motion.button
      onClick={onToggle}
      className={`${sizeClasses[size]} rounded-full ${variantClasses[variant]} p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      variants={containerVariants}
      animate={isDark ? "dark" : "light"}
    >
      <motion.div
        className="relative w-full h-full"
        variants={iconVariants}
        animate={isDark ? "dark" : "light"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? (
          <Moon
            className={`${iconSizeClasses[size]} text-yellow-400 absolute inset-0 m-auto`}
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
