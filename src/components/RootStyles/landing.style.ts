import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding:20,
    },

    header: {
      color: theme.primaryText,
      fontSize: 44,
      fontWeight: "700",
      lineHeight: 48,
      letterSpacing: 1,
      marginBottom: 6,
    },

    title: {
      color: theme.primaryText,
      fontSize: 14,
      letterSpacing: 3,
      lineHeight:24,
      fontWeight: "500",
    },

    headerContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'red'
    },

    bodyContainer: {
      flex: 6,
      justifyContent: "center",
      alignItems: "center",
    },

    fooderContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      gap: 20,
    },

    card: {
      backgroundColor: theme.card,
      borderColor: theme.border,
      borderWidth: 1,
      padding: 20,
      borderRadius: 12,
    },
    loadingDots: {
      width: 8,
      height: 8,
      backgroundColor: theme.primary,
      borderRadius: 8,
    },

  logoContainer: {
    width: 220,
    height: 220,
    borderRadius: 20,

    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },

// logoContainer: {
//   width: 220,
//   height: 220,
//   borderRadius: 20,
//   justifyContent: "center",
//   alignItems: "center",
// },

// glow: {
  // position: "absolute",
  // width: 180,
  // height: 180,
  // borderRadius: 90,
  // backgroundColor: "#3B82F6",
  // opacity: 0.45,
// },

// logo: {
//   width: 120,
//   height: 120,
//   resizeMode: 'contain'
// },

glow: {
    position: "absolute",
    width: 180,
    height: 180,
    right: -20,
    bottom: -20,
    borderRadius: 90,
    backgroundColor: "#3B82F6",
    opacity: 0.2,
    zIndex: 1,
    shadowColor: "#3B82F6",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 35,
},

logo: {
    width: 140,
    height: 140,
    resizeMode: "contain"

},

    span: {
      color: theme.secondaryText,
      fontSize: 12,
      lineHeight: 16, 
      letterSpacing: 0.3
    },
  });