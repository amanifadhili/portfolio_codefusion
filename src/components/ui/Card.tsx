import React from "react";
import { motion } from "framer-motion";

export interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "outlined" | "gradient";
  image?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
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
}) => {
  const baseClasses = "rounded-xl overflow-hidden transition-all duration-300";

  const variantClasses = {
    default: "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg",
    elevated: "bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl",
    outlined:
      "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700",
    gradient:
      "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900",
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
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      {...cardProps}
    >
      {image && (
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title || "Card image"}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {(title || subtitle) && (
        <div className="p-6 pb-4">
          {title && (
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className={`${image || title || subtitle ? "px-6 pb-6" : "p-6"}`}>
        {children}
      </div>
    </CardWrapper>
  );
};

export default Card;
