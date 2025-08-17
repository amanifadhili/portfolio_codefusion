import { useCallback, useEffect } from 'react';
import { useTheme as useThemeContext } from '../context/ThemeContext';

/**
 * Return type for the custom theme hook
 */
export interface CustomThemeHookReturn {
  /** Current theme ('light' | 'dark') */
  theme: 'light' | 'dark';
  /** Whether the current theme is dark */
  isDark: boolean;
  /** Whether the current theme is light */
  isLight: boolean;
  /** Function to toggle between light and dark themes */
  toggleTheme: () => void;
  /** Function to set a specific theme */
  setTheme: (theme: 'light' | 'dark') => void;
  /** Function to cycle through available themes */
  cycleTheme: () => void;
  /** Whether the theme is currently being changed */
  isChanging: boolean;
  /** Available theme options */
  availableThemes: Array<'light' | 'dark'>;
  /** System theme preference (if available) */
  systemTheme: 'light' | 'dark' | null;
  /** Whether to follow system theme preference */
  followSystem: boolean;
  /** Function to toggle system theme following */
  toggleSystemTheme: () => void;
}

/**
 * Custom hook for enhanced theme management
 * 
 * This hook provides a simplified interface for managing theme state,
 * including theme switching, system theme detection, and theme persistence.
 * It extends the basic useTheme hook with additional functionality.
 * 
 * @returns Object containing theme state and control functions
 * 
 * @example
 * ```tsx
 * const { theme, isDark, toggleTheme } = useCustomTheme();
 * 
 * return (
 *   <button
 *     onClick={toggleTheme}
 *     className={`p-2 rounded ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}
 *   >
 *     {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
 *   </button>
 * );
 * ```
 */
export function useCustomTheme(): CustomThemeHookReturn {
  const context = useThemeContext();

  const {
    theme,
    setTheme: setContextTheme,
    isChanging,
    systemTheme,
    followSystem,
    toggleSystemTheme: toggleSystemThemeContext
  } = context;

  /**
   * Toggle between light and dark themes
   * Automatically switches to the opposite theme
   */
  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setContextTheme(newTheme);
  }, [theme, setContextTheme]);

  /**
   * Set a specific theme
   * @param newTheme - The theme to set ('light' | 'dark')
   */
  const setTheme = useCallback((newTheme: 'light' | 'dark') => {
    setContextTheme(newTheme);
  }, [setContextTheme]);

  /**
   * Cycle through available themes
   * Useful for theme switchers with more than two themes
   */
  const cycleTheme = useCallback(() => {
    const themes: Array<'light' | 'dark'> = ['light', 'dark'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setContextTheme(themes[nextIndex]);
  }, [theme, setContextTheme]);

  /**
   * Toggle system theme following
   * Enables/disables automatic theme switching based on system preference
   */
  const toggleSystemTheme = useCallback(() => {
    toggleSystemThemeContext();
  }, [toggleSystemThemeContext]);

  /**
   * Get computed theme values
   */
  const isDark = theme === 'dark';
  const isLight = theme === 'light';
  const availableThemes: Array<'light' | 'dark'> = ['light', 'dark'];

  return {
    theme,
    isDark,
    isLight,
    toggleTheme,
    setTheme,
    cycleTheme,
    isChanging,
    availableThemes,
    systemTheme,
    followSystem,
    toggleSystemTheme
  };
}

/**
 * Hook for theme-aware styling
 * Provides theme-specific values and utilities for conditional styling
 */
export function useThemeStyles() {
  const { theme, isDark, isLight } = useCustomTheme();

  /**
   * Get theme-specific class names
   * @param lightClass - CSS class for light theme
   * @param darkClass - CSS class for dark theme
   * @returns The appropriate class based on current theme
   */
  const getThemeClass = useCallback((lightClass: string, darkClass: string): string => {
    return isLight ? lightClass : darkClass;
  }, [isLight]);

  /**
   * Get theme-specific styles object
   * @param lightStyles - Styles for light theme
   * @param darkStyles - Styles for dark theme
   * @returns The appropriate styles object based on current theme
   */
  const getThemeStyles = useCallback(<T extends Record<string, any>>(
    lightStyles: T,
    darkStyles: T
  ): T => {
    return isLight ? lightStyles : darkStyles;
  }, [isLight]);

  /**
   * Get theme-specific color values
   * @param lightColor - Color for light theme
   * @param darkColor - Color for dark theme
   * @returns The appropriate color based on current theme
   */
  const getThemeColor = useCallback((lightColor: string, darkColor: string): string => {
    return isLight ? lightColor : darkColor;
  }, [isLight]);

  /**
   * Get theme-specific boolean values
   * @param lightValue - Value for light theme
   * @param darkValue - Value for dark theme
   * @returns The appropriate value based on current theme
   */
  const getThemeValue = useCallback(<T>(lightValue: T, darkValue: T): T => {
    return isLight ? lightValue : darkValue;
  }, [isLight]);

  return {
    theme,
    isDark,
    isLight,
    getThemeClass,
    getThemeStyles,
    getThemeColor,
    getThemeValue
  };
}

/**
 * Hook for theme transitions
 * Provides utilities for smooth theme switching animations
 */
export function useThemeTransition() {
  const { theme, isChanging } = useCustomTheme();

  /**
   * Get transition classes for theme changes
   * @param duration - Transition duration in milliseconds
   * @returns CSS classes for smooth theme transitions
   */
  const getTransitionClasses = useCallback((duration: number = 300) => {
    return {
      transition: `all ${duration}ms ease-in-out`,
      transitionProperty: 'background-color, color, border-color, shadow-color'
    };
  }, []);

  /**
   * Get theme change animation variants
   * @returns Animation variants for theme transitions
   */
  const getThemeVariants = useCallback(() => ({
    light: {
      backgroundColor: 'var(--color-bg-primary)',
      color: 'var(--color-text-primary)',
      transition: { duration: 0.3, ease: 'easeInOut' }
    },
    dark: {
      backgroundColor: 'var(--color-bg-primary-dark)',
      color: 'var(--color-text-primary-dark)',
      transition: { duration: 0.3, ease: 'easeInOut' }
    }
  }), []);

  return {
    theme,
    isChanging,
    getTransitionClasses,
    getThemeVariants
  };
}

/**
 * Hook for theme persistence
 * Provides utilities for saving and restoring theme preferences
 */
export function useThemePersistence() {
  const { theme, setTheme } = useCustomTheme();

  /**
   * Save theme preference to localStorage
   * @param themeToSave - Theme to save
   */
  const saveThemePreference = useCallback((themeToSave: 'light' | 'dark') => {
    try {
      localStorage.setItem('codefusion-theme', themeToSave);
    } catch (error) {
      console.warn('Failed to save theme preference:', error);
    }
  }, []);

  /**
   * Load theme preference from localStorage
   * @returns The saved theme preference or null if not found
   */
  const loadThemePreference = useCallback((): 'light' | 'dark' | null => {
    try {
      const saved = localStorage.getItem('codefusion-theme');
      return saved === 'light' || saved === 'dark' ? saved : null;
    } catch (error) {
      console.warn('Failed to load theme preference:', error);
      return null;
    }
    return null;
  }, []);

  /**
   * Clear saved theme preference
   */
  const clearThemePreference = useCallback(() => {
    try {
      localStorage.removeItem('codefusion-theme');
    } catch (error) {
      console.warn('Failed to clear theme preference:', error);
    }
  }, []);

  // Auto-save theme changes
  useEffect(() => {
    saveThemePreference(theme);
  }, [theme, saveThemePreference]);

  return {
    saveThemePreference,
    loadThemePreference,
    clearThemePreference
  };
}

// Export all theme-related hooks
export default {
  useCustomTheme,
  useThemeStyles,
  useThemeTransition,
  useThemePersistence
};
