import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal:24
    },
    buttonContainer: {
      flex: 1,
      // justifyContent: "center",
      // alignItems: "center",
    },

    button: {
      color:'red',
      height: 52,
      backgroundColor:theme.primary_10,
      borderWidth: 1,
      borderColor: theme.primary_20,
      borderRadius: 16,
    },

    buttonFeature: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      paddingHorizontal: 65,
      // backgroundColor:'red'
    },

    levelIndicationBar: {
      flexDirection:'row',
      backgroundColor:theme.primary_10,
      borderWidth: 1,
      borderColor: theme.primary_20,
      borderRadius: 16,
      justifyContent:'space-around',
      alignItems:'flex-start'
    },

    levelIndicationDot: {
      height: 8,
      width: 8,
      backgroundColor: theme.white_10,
      borderColor:theme.white_20,
      borderRadius: 10,
      borderWidth: 1,
    }
  });