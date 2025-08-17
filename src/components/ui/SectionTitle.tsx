import React from "react";
import { motion } from "framer-motion";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  variant?: "default" | "large" | "small";
  className?: string;
  animate?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
  variant = "default",
  className = "",
  animate = true,
}) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const variantClasses = {
    default: "mb-16",
    large: "mb-20",
    small: "mb-12",
  };

  const titleSizeClasses = {
    default: "text-4xl md:text-5xl",
    large: "text-5xl md:text-6xl",
    small: "text-3xl md:text-4xl",
  };

  const subtitleSizeClasses = {
    default: "text-lg md:text-xl",
    large: "text-xl md:text-2xl",
    small: "text-base md:text-lg",
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const TitleWrapper = animate ? motion.div : "div";
  const titleProps = animate ? { variants: titleVariants } : {};
  const subtitleProps = animate ? { variants: subtitleVariants } : {};

  return (
    <motion.div
      className={`${variantClasses[variant]} ${className}`}
      variants={animate ? containerVariants : undefined}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
    >
      <TitleWrapper
        className={`${alignClasses[align]} ${titleSizeClasses[variant]} font-bold text-gray-900 dark:text-white mb-4`}
        {...titleProps}
      >
        {title}
      </TitleWrapper>

      {subtitle && (
        <motion.p
          className={`${alignClasses[align]} ${
            subtitleSizeClasses[variant]
          } text-gray-600 dark:text-gray-400 max-w-3xl mx-auto ${
            align === "center" ? "mx-auto" : ""
          }`}
          {...subtitleProps}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
