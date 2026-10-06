import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    modal: {
      height: 280,
      width: 270,
      borderWidth: 1,
      borderColor: theme.white_10,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 24,
      paddingVertical: 20,
      gap: 16,
    },
    modalBody: {
      alignItems: "center",
      gap: 10,
      width: "100%",
    },
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 4,
    },
    logo: {
      width: 100,
      height: 100,
    },
    title: {
      fontWeight: "bold",
      color: theme.primaryText,
      textAlign: "center",
      fontSize: 20,
      lineHeight: 26,
    },
    label: {
      color: theme.secondaryText,
      fontSize: 13,
      lineHeight: 18,
      textAlign: "center",
      marginBottom: 4,
    },
    // Countdown section
    countdownContainer: {
      alignItems: "center",
      gap: 8,
      marginTop: 12,
      marginBottom: 4,
    },
    countdownLabel: {
      color: theme.secondaryText,
      fontSize: 12,
      lineHeight: 16,
      textAlign: "center",
      letterSpacing: 0.2,
    },
    actionButton: {
      marginTop: 12,
      width: 158,
      height: 44,
      borderRadius: 14,
      backgroundColor: theme.primary,
    },
  });