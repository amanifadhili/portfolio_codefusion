import React from "react";
import { motion } from "framer-motion";

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  variant?: "default" | "large" | "small" | "hero";
  className?: string;
  animate?: boolean;
  showDivider?: boolean;
  titleColor?: "default" | "primary" | "secondary" | "accent";
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = "center",
  variant = "default",
  className = "",
  animate = true,
  showDivider = false,
  titleColor = "default",
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
    hero: "mb-24",
  };

  const titleSizeClasses = {
    default: "text-4xl md:text-5xl",
    large: "text-5xl md:text-6xl",
    small: "text-3xl md:text-4xl",
    hero: "text-5xl md:text-7xl",
  };

  const subtitleSizeClasses = {
    default: "text-lg md:text-xl",
    large: "text-xl md:text-2xl",
    small: "text-base md:text-lg",
    hero: "text-xl md:text-2xl",
  };

  const titleColorClasses = {
    default: "text-gray-900 dark:text-white",
    primary: "text-primary-600 dark:text-primary-400",
    secondary: "text-secondary-600 dark:text-secondary-400",
    accent: "text-accent-600 dark:text-accent-400",
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
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
        ease: "easeOut" as const,
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
        ease: "easeOut" as const,
      },
    },
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut" as const,
      },
    },
  };

  const TitleWrapper = animate ? motion.div : "div";
  const titleProps = animate ? { variants: titleVariants } : {};
  const subtitleProps = animate ? { variants: subtitleVariants } : {};
  const dividerProps = animate ? { variants: dividerVariants } : {};

  return (
    <motion.div
      className={`${variantClasses[variant]} ${className}`}
      variants={animate ? containerVariants : undefined}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-100px" }}
    >
      <TitleWrapper
        className={`${alignClasses[align]} ${titleSizeClasses[variant]} font-bold ${titleColorClasses[titleColor]} mb-4`}
        {...titleProps}
      >
        {title}
      </TitleWrapper>

      {subtitle && (
        <motion.p
          className={`${alignClasses[align]} ${
            subtitleSizeClasses[variant]
          } text-gray-600 dark:text-gray-400 max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          } leading-relaxed`}
          {...subtitleProps}
        >
          {subtitle}
        </motion.p>
      )}

      {showDivider && (
        <motion.div
          className={`mt-8 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full ${
            align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : ""
          } w-24`}
          {...dividerProps}
          style={{
            transformOrigin:
              align === "center"
                ? "center"
                : align === "right"
                ? "right"
                : "left",
          }}
        />
      )}
    </motion.div>
  );
};

export default SectionTitle;
