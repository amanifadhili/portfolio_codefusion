import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  disabled?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  rounded?: "sm" | "md" | "lg" | "full";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = "left",
  onClick,
  className = "",
  type = "button",
  fullWidth = false,
  rounded = "lg",
}) => {
  const baseClasses = `inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
    fullWidth ? "w-full" : ""
  }`;

  const roundedClasses = {
    sm: "rounded",
    md: "rounded-lg",
    lg: "rounded-xl",
    full: "rounded-full",
  };

  const variantClasses = {
    primary:
      "bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 shadow-lg hover:shadow-xl active:bg-primary-800",
    secondary:
      "bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500 shadow-lg hover:shadow-xl active:bg-secondary-800",
    outline:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500 active:bg-primary-700",
    ghost:
      "text-gray-700 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800",
    accent:
      "bg-accent-600 hover:bg-accent-700 text-white focus:ring-accent-500 shadow-lg hover:shadow-xl active:bg-accent-800",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const iconSizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-7 h-7",
  };

  const loadingSpinner = (
    <motion.div
      className={`mr-2 ${iconSizeClasses[size]}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    >
      <svg className="w-full h-full" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </motion.div>
  );

  return (
    <motion.button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      aria-label={loading ? "Loading..." : undefined}
    >
      {loading && loadingSpinner}

      {Icon && iconPosition === "left" && !loading && (
        <Icon className={`mr-2 ${iconSizeClasses[size]}`} />
      )}

      <span className="whitespace-nowrap">{children}</span>

      {Icon && iconPosition === "right" && !loading && (
        <Icon className={`ml-2 ${iconSizeClasses[size]}`} />
      )}
    </motion.button>
  );
};

export default Button;
