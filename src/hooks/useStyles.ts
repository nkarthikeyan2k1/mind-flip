import { useThemeContext } from "@/context/ThemeContext";
import { ThemeColors } from "@/theme/color";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

export type StylesWithTheme<T> = T & {
  styles: T;
  theme: ThemeColors;
};

export const useStyles = <T extends StyleSheet.NamedStyles<T>>(
  createStyles: (theme: ThemeColors) => T
): StylesWithTheme<T> => {
  const { theme } = useThemeContext();
  
  return useMemo(() => {
    const stylesObj = createStyles(theme);
    
    if (!("styles" in stylesObj)) {
      Object.defineProperty(stylesObj, "styles", {
        get() {
          return this;
        },
        enumerable: false,
        configurable: true,
      });
    }
    
    Object.defineProperty(stylesObj, "theme", {
      value: theme,
      enumerable: false,
      writable: false,
      configurable: true,
    });
    
    return stylesObj as StylesWithTheme<T>;
  }, [theme, createStyles]);
};