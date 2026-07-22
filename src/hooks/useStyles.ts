import { useThemeContext } from "@/context/ThemeContext";
import { ThemeColors } from "@/theme/color";
import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const useStyles = <T extends StyleSheet.NamedStyles<T>>(
  createStyles: (theme: ThemeColors) => T
) => {
  const { theme } = useThemeContext();
  return useMemo(() => createStyles(theme), [theme, createStyles]);
};