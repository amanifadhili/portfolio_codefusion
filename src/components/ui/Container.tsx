import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = "lg",
  padding = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "max-w-4xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  const paddingClasses = {
    none: "",
    sm: "px-4 py-8",
    md: "px-6 py-12",
    lg: "px-8 py-16",
    xl: "px-12 py-20",
  };

  return (
    <div
      className={`mx-auto ${sizeClasses[size]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
