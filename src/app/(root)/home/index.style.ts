import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

const styleSheet = (theme: ThemeColors) => StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingHorizontal:24
  },

  header: {
    color: theme.primaryText,
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 34,
    letterSpacing: -0.75,
    marginBottom: 10,
  },

  title: {
    color: theme.secondaryText,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily:'Outfit-Medium',
    letterSpacing: 0.2
  },

  headerContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'red'
  },

  bodyContainer: {
    flex: 6,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor:'green'
  },

  fooderContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // gap: 20,
    // backgroundColor:'blue'
  },

  button: {
    // borderBottomLeftRadius:0,
    // borderBottomRightRadius:0
    borderRadius: 18,
    paddingVertical:18,

    shadowColor: 'white',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
      
    // backgroundColor: 'white',
    // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', 

    elevation: 2,
    // shadowColor: '#FFFF',
    // shadowOffset: { width: 0, height: 0 },
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
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
    backgroundColor: theme.primary,
    opacity: 0.2,
    zIndex: 1,
    shadowColor: theme.primary,
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

  active: {
    backgroundColor: theme.primary,
    padding: 5,
  },

});

export default styleSheet;