import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const NUMBER_COLORS: Record<string | number, { text: string; bgStart: string; bgEnd: string; border: string; glow: string }> = {
  1: {
    text: "#3B82F6", // Blue
    bgStart: "rgba(59, 130, 246, 0.18)",
    bgEnd: "rgba(59, 130, 246, 0.05)",
    border: "rgba(59, 130, 246, 0.4)",
    glow: "#3B82F6",
  },
  2: {
    text: "#22C55E", // Green
    bgStart: "rgba(34, 197, 94, 0.18)",
    bgEnd: "rgba(34, 197, 94, 0.05)",
    border: "rgba(34, 197, 94, 0.4)",
    glow: "#22C55E",
  },
  3: {
    text: "#F59E0B", // Amber / Gold
    bgStart: "rgba(245, 158, 11, 0.18)",
    bgEnd: "rgba(245, 158, 11, 0.05)",
    border: "rgba(245, 158, 11, 0.4)",
    glow: "#F59E0B",
  },
  4: {
    text: "#EC4899", // Pink
    bgStart: "rgba(236, 72, 153, 0.18)",
    bgEnd: "rgba(236, 72, 153, 0.05)",
    border: "rgba(236, 72, 153, 0.4)",
    glow: "#EC4899",
  },
  5: {
    text: "#A855F7", // Purple
    bgStart: "rgba(168, 85, 247, 0.18)",
    bgEnd: "rgba(168, 85, 247, 0.05)",
    border: "rgba(168, 85, 247, 0.4)",
    glow: "#A855F7",
  },
  6: {
    text: "#06B6D4", // Teal / Cyan
    bgStart: "rgba(6, 182, 212, 0.18)",
    bgEnd: "rgba(6, 182, 212, 0.05)",
    border: "rgba(6, 182, 212, 0.4)",
    glow: "#06B6D4",
  },
  7: {
    text: "#F97316", // Orange
    bgStart: "rgba(249, 115, 22, 0.18)",
    bgEnd: "rgba(249, 115, 22, 0.05)",
    border: "rgba(249, 115, 22, 0.4)",
    glow: "#F97316",
  },
  8: {
    text: "#6366F1", // Indigo
    bgStart: "rgba(99, 102, 241, 0.18)",
    bgEnd: "rgba(99, 102, 241, 0.05)",
    border: "rgba(99, 102, 241, 0.4)",
    glow: "#6366F1",
  },
  9: {
    text: "#F43F5E", // Rose
    bgStart: "rgba(244, 63, 94, 0.18)",
    bgEnd: "rgba(244, 63, 94, 0.05)",
    border: "rgba(244, 63, 94, 0.4)",
    glow: "#F43F5E",
  },
  10: {
    text: "#14B8A6", // Teal
    bgStart: "rgba(20, 184, 166, 0.18)",
    bgEnd: "rgba(20, 184, 166, 0.05)",
    border: "rgba(20, 184, 166, 0.4)",
    glow: "#14B8A6",
  },
  11: {
    text: "#8B5CF6", // Violet
    bgStart: "rgba(139, 92, 246, 0.18)",
    bgEnd: "rgba(139, 92, 246, 0.05)",
    border: "rgba(139, 92, 246, 0.4)",
    glow: "#8B5CF6",
  },
  12: {
    text: "#EAB308", // Yellow
    bgStart: "rgba(234, 179, 8, 0.18)",
    bgEnd: "rgba(234, 179, 8, 0.05)",
    border: "rgba(234, 179, 8, 0.4)",
    glow: "#EAB308",
  },
};

export const DEFAULT_CARD_COLOR = {
  text: "#3B82F6",
  bgStart: "rgba(59, 130, 246, 0.18)",
  bgEnd: "rgba(59, 130, 246, 0.05)",
  border: "rgba(59, 130, 246, 0.4)",
  glow: "#3B82F6",
};

export const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    cardWrapper: {
      aspectRatio: 1,
      borderRadius: 16,
    },
    cardFace: {
      ...StyleSheet.absoluteFill,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.white_10,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#16161C",
    },
    cardBack: {
      backgroundColor: "#18181E",
      borderColor: "rgba(255, 255, 255, 0.08)",
    },
    cardFront: {
      backgroundColor: "#141419",
    },
    // Matrix Dot pattern for card back
    dotGrid: {
      justifyContent: "center",
      alignItems: "center",
      gap: 6,
    },
    dotRow: {
      flexDirection: "row",
      gap: 6,
    },
    dot: {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: "rgba(255, 255, 255, 0.18)",
    },
    // Brain watermark at bottom-right
    watermark: {
      position: "absolute",
      bottom: 8,
      right: 8,
      opacity: 0.2,
    },
    numberText: {
      fontSize: 32,
      fontWeight: "700",
      textAlign: "center",
    },
    glowCircle: {
      position: "absolute",
      width: 60,
      height: 60,
      borderRadius: 30,
      opacity: 0.15,
    },
    matchedCard: {
      borderColor: "rgba(34, 197, 94, 0.6)",
    },
  });
