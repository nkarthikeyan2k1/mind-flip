import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 20,
    },
    topSection: {
      flex: 1,
      justifyContent: "center",
      gap: 12,
    },
    buttonContainer: {
      flex: 1.2,
      justifyContent: "flex-end",
      paddingBottom: 20,
    },
    button: {
      height: 52,
      backgroundColor: theme.primary_10,
      borderWidth: 1,
      borderColor: theme.primary_20,
      borderRadius: 16,
    },
    buttonFeature: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      paddingHorizontal: 40,
    },
    levelIndicationBar: {
      flexDirection: "row",
      backgroundColor: theme.surface || "#18181B",
      borderWidth: 1,
      borderColor: theme.white_10,
      borderRadius: 20,
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 24,
      height: 34,
    },
    levelIndicationDot: {
      height: 8,
      width: 8,
      backgroundColor: theme.white_10,
      borderColor: theme.white_20,
      borderRadius: 4,
      borderWidth: 1,
    },
    levelIndicationDotActive: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
      width: 24,
      height: 8,
      borderRadius: 4,
    },
    levelIndicationDotCompleted: {
      backgroundColor: theme.primary,
      borderColor: theme.primary,
      width: 8,
      height: 8,
      borderRadius: 4,
    },
    cardsContainer: {
      flex: 5,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 12,
    },
    grid: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      width: "100%",
    },
    cardItem2Col: {
      width: "44%",
      margin: "3%",
    },
    cardItem3Col: {
      width: "28%",
      margin: "2.5%",
    },
    cardItem4Col: {
      width: "21%",
      margin: "2%",
    },
  });