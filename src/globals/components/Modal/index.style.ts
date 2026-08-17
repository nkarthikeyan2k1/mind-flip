import { ThemeColors } from "@/theme/color";
import { StyleSheet } from "react-native";

export const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
    },

    container: {
      backgroundColor: theme.card,
      borderRadius: 28,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "black",
      borderWidth: 2,
    },

    header: {},
    body: {},
    footer: {},
    closeButton: {}
  });