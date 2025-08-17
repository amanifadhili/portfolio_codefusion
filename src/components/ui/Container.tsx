import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full" | "screen";
  padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  as?: "div" | "section" | "main" | "article";
  centered?: boolean;
  fluid?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = "lg",
  padding = "md",
  className = "",
  as: Component = "div",
  centered = true,
  fluid = false,
}) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
    screen: "min-h-screen",
  };

  const paddingClasses = {
    none: "",
    sm: "px-4 py-8",
    md: "px-6 py-12",
    lg: "px-8 py-16",
    xl: "px-12 py-20",
    "2xl": "px-16 py-24",
  };

  const containerClasses = [
    // Size classes
    !fluid && size !== "full" && size !== "screen" ? sizeClasses[size] : "",
    // Centering
    centered && !fluid ? "mx-auto" : "",
    // Padding
    paddingClasses[padding],
    // Custom classes
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={containerClasses}>{children}</Component>;
};

export default Container;
