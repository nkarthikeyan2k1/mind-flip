import { createContext, useContext, useState } from "react";
import { useColorScheme } from "react-native";
import { Colors, ThemeMode } from "../theme/color";

type ThemeContextValue = {
  theme: typeof Colors.light | typeof Colors.dark;
  themeMode: ThemeMode;
  toggleTheme: () => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const colorScheme = useColorScheme();
  // const [themeMode, setThemeMode] = useState<ThemeMode>(colorScheme);
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');

  const isDark = themeMode === "dark";
  const theme = isDark ? Colors.dark : Colors.light;

  const toggleTheme = () => {
    setThemeMode(isDark ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, themeMode, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeContextProvider");
  }
  return context;
};
