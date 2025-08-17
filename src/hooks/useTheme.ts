// Re-export theme hooks from context
export { useTheme, useThemeState, useThemeToggle } from '../context/ThemeContext';
export type { Theme } from '../context/ThemeContext';

// Additional theme utility hooks can be added here
export const useThemeColor = () => {
  const { isDark } = useThemeState();
  
  return {
    isDark,
    // Light mode colors
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      border: 'border-gray-200',
      hover: 'hover:bg-gray-50',
    },
    // Dark mode colors
    dark: {
      bg: 'bg-gray-900',
      text: 'text-white',
      border: 'border-gray-700',
      hover: 'hover:bg-gray-800',
    },
    // Current theme colors
    current: {
      bg: isDark ? 'bg-gray-900' : 'bg-white',
      text: isDark ? 'text-white' : 'text-gray-900',
      border: isDark ? 'border-gray-700' : 'border-gray-200',
      hover: isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50',
    }
  };
};

export const useThemeTransition = () => {
  return {
    transition: 'transition-colors duration-300 ease-in-out',
    transitionFast: 'transition-colors duration-150 ease-in-out',
    transitionSlow: 'transition-colors duration-500 ease-in-out',
  };
};
