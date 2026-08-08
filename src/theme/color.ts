import { Platform } from "react-native";
import { populateOpacityMixes } from "./helper";

type WHITE_MIX = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

type White_Mixed_Color_Keys =
  | `primary_${WHITE_MIX}`
  | `secondary_${WHITE_MIX}`
  | `accent_${WHITE_MIX}`
  | `background_${WHITE_MIX}`
  | `surface_${WHITE_MIX}`
  | `card_${WHITE_MIX}`
  | `border_${WHITE_MIX}`
  | `text_${WHITE_MIX}`
  | `textSecondary_${WHITE_MIX}`
  | `success_${WHITE_MIX}`
  | `warning_${WHITE_MIX}`
  | `error_${WHITE_MIX}`
  | `white_${WHITE_MIX}`
  | `black_${WHITE_MIX}`;

export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;

  background: string;
  surface: string;
  card: string;
  border: string;

  primaryText: string;
  secondaryText: string;

  success: string;
  warning: string;
  error: string;
  white: string;
  black: string;
} & {
  [K in White_Mixed_Color_Keys]?: string;
};

interface AppTheme {
  dark: ThemeColors;
  light: ThemeColors;
}

export type ThemeMode = "dark" | "light" | "null" | "unspecified";

const whiteMixingColors = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  ACCENT: "accent",
  BACKGROUND: "background",
  SURFACE: "surface",
  CARD: "card",
  BORDER: "border",
  PRIMARY_TEXT: "primaryText",
  SECONDARY_TEXT: "secondaryText",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  WHITE: "white",
  BLACK: "black",
} as const;

type WhiteMixedColorKeyType =
  (typeof whiteMixingColors)[keyof typeof whiteMixingColors];

const darkTheme: ThemeColors = {
  primary: "#3B82F6",
  secondary: "#D4D4D4",
  accent: "#22C55E",
  background: "#09090B",
  surface: "#18181B",
  card: "#18181B",
  border: "#3F3F46",
  primaryText: "#FFFFFF",
  secondaryText: "#A1A1AA",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  white: "#FFFFFF",
  black: "#09090B",
};

const lightTheme: ThemeColors = {
  primary: "#3B82F6",
  secondary: "#6B7280",
  accent: "#22C55E",
  background: "#FAFAFA",
  surface: "#FFFFFF",
  card: "#F3F4F6",
  border: "#E5E7EB",
  primaryText: "#09090B",
  secondaryText: "#6B7280",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  white: "#FFFFFF",
  black: "#09090B",
};

const COLORS: Record<keyof AppTheme, ThemeColors> = {
  dark: populateOpacityMixes(darkTheme, Object.values(whiteMixingColors)),
  light: populateOpacityMixes(lightTheme, Object.values(whiteMixingColors)),
};

export const Colors: AppTheme = {
  dark: COLORS.dark,
  light: COLORS.light,
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: "system-ui",
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: "ui-serif",
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: "ui-rounded",
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;