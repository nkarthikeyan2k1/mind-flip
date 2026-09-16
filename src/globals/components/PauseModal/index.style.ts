import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    modal: {
      height: 310,
      width: 270,
      borderWidth: 1,
      borderColor: theme.white_10,
      paddingHorizontal: 28,
      paddingVertical: 32,
      gap: 20,
    },
    modalHeader: {
      gap: 14,
      alignItems: "center",
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.primaryText,
    },
    subtitle: {
      fontSize: 10,
      fontWeight: "regular",
      color: theme.secondaryText,
      letterSpacing: 1.1,
    },
    modalBody: {
      gap: 10,
    },
    modalButton: {
      width: 210,
      height: 55,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: "transparent",
    },
    exitText: {
      fontSize: 11,
      fontWeight: "regular",
      color: theme.secondary_40,
      textDecorationLine: "none",
      letterSpacing: 2,
    },
  });
