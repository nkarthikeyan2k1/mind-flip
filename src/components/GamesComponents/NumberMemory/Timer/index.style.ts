import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      justifyContent:'space-between',
    paddingHorizontal: 70
    },
    timer: {
      flex: 1,
      flexDirection:"row",
      gap: 7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    moves: {
      flex: 1,
      flexDirection:"row",
      gap: 7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    timerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color:theme.primaryText,
    },
    movesText: {
      fontSize: 14,
      fontWeight: 'bold',
      color:theme.primaryText,
    }
  });