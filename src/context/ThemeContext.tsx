import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  isChanging: boolean;
  systemTheme: Theme | null;
  followSystem: boolean;
  toggleSystemTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  followSystemByDefault?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
  storageKey = "codefusion-theme",
  followSystemByDefault = true,
}) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [systemTheme, setSystemTheme] = useState<Theme | null>(null);
  const [followSystem, setFollowSystem] = useState(followSystemByDefault);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme;
    const savedFollowSystem = localStorage.getItem(
      `${storageKey}-follow-system`
    );

    // Set system theme following preference
    if (savedFollowSystem !== null) {
      setFollowSystem(savedFollowSystem === "true");
    }

    // Get system theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const currentSystemTheme = mediaQuery.matches ? "dark" : "light";
    setSystemTheme(currentSystemTheme);

    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setThemeState(savedTheme);
    } else if (followSystem) {
      setThemeState(currentSystemTheme);
    } else {
      setThemeState(defaultTheme);
    }

    setIsInitialized(true);
  }, [storageKey, followSystem, defaultTheme]);

  // Apply theme to document
  useEffect(() => {
    if (!isInitialized) return;

    const root = document.documentElement;

    // Remove previous theme classes
    root.classList.remove("light", "dark");

    // Add current theme class
    root.classList.add(theme);

    // Set data attribute for CSS variables
    root.setAttribute("data-theme", theme);

    // Save to localStorage
    localStorage.setItem(storageKey, theme);
  }, [theme, isInitialized, storageKey]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const newSystemTheme = e.matches ? "dark" : "light";
      setSystemTheme(newSystemTheme);

      // Update theme if following system preference
      if (followSystem && !localStorage.getItem(storageKey)) {
        setThemeState(newSystemTheme);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [storageKey, followSystem]);

  const toggleTheme = () => {
    setIsChanging(true);
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

    // Reset changing state after animation
    setTimeout(() => setIsChanging(false), 300);
  };

  const setTheme = (newTheme: Theme) => {
    setIsChanging(true);
    setThemeState(newTheme);

    // Reset changing state after animation
    setTimeout(() => setIsChanging(false), 300);
  };

  const toggleSystemTheme = () => {
    const newFollowSystem = !followSystem;
    setFollowSystem(newFollowSystem);
    localStorage.setItem(
      `${storageKey}-follow-system`,
      newFollowSystem.toString()
    );

    // If enabling system theme following, switch to system theme
    if (newFollowSystem && systemTheme) {
      setThemeState(systemTheme);
    }
  };

  const value: ThemeContextType = {
    theme,
    isDark: theme === "dark",
    toggleTheme,
    setTheme,
    isChanging,
    systemTheme,
    followSystem,
    toggleSystemTheme,
  };

  // Don't render until theme is initialized to prevent flash
  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

// Hook for getting just the theme state
export const useThemeState = (): { theme: Theme; isDark: boolean } => {
  const { theme, isDark } = useTheme();
  return { theme, isDark };
};

// Hook for getting just the theme toggle function
export const useThemeToggle = (): (() => void) => {
  const { toggleTheme } = useTheme();
  return toggleTheme;
};

export default ThemeContext;
