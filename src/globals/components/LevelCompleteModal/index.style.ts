import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    modal: {
      height: 310,
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
      marginTop: 8,
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
    },
    label: {
      color: theme.secondaryText,
      fontSize: 13,
      lineHeight: 18,
      textAlign: "center",
    },
    actionButton: {
      marginTop: 8,
      width: "100%",
      height: 48,
      borderRadius: 14,
      backgroundColor: theme.primary,
    },
  });