import React from "react";
import { motion } from "framer-motion";

export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "gradient" | "glass";
  image?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
}

const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  image,
  imageAlt,
  title,
  subtitle,
  className = "",
  onClick,
  hoverEffect = true,
  padding = "md",
  shadow = "md",
}) => {
  const baseClasses = "rounded-xl overflow-hidden transition-all duration-300";

  const variantClasses = {
    default: "bg-white dark:bg-gray-800",
    elevated: "bg-white dark:bg-gray-800",
    outlined:
      "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700",
    gradient:
      "bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900",
    glass:
      "bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border border-white/20 dark:border-gray-700/20",
  };

  const shadowClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hoverEffect
    ? "hover:scale-[1.02] hover:-translate-y-1"
    : "";

  const CardWrapper = onClick ? motion.div : motion.div;
  const cardProps = onClick
    ? {
        onClick,
        className: "cursor-pointer",
        whileHover: hoverEffect ? { scale: 1.02, y: -4 } : {},
        whileTap: { scale: 0.98 },
      }
    : {};

  return (
    <CardWrapper
      className={`${baseClasses} ${variantClasses[variant]} ${shadowClasses[shadow]} ${hoverClasses} ${className}`}
      {...cardProps}
    >
      {image && (
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title || "Card image"}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      {(title || subtitle) && (
        <div className={`${paddingClasses[padding]} pb-4`}>
          {title && (
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div
        className={`${
          image || title || subtitle ? `px-6 pb-6` : paddingClasses[padding]
        }`}
      >
        {children}
      </div>
    </CardWrapper>
  );
};

export default Card;
