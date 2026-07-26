import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";


export const styleSheet = (theme:ThemeColors) => StyleSheet.create({
    logo: {
        height: 48,
        width: 48,
    },

    title: {
        fontSize: 15,
        fontWeight: "700",
        color: "#F8FAFC",
        lineHeight: 22,
        
    },

    description: {
        fontSize: 12,
        fontWeight: "regular",
        color: theme.secondaryText,
        lineHeight: 17,
    },

card: {
  flexDirection: "row",
  alignItems: "center",

  height: 100,
  padding: 18,

  backgroundColor: theme.card,
  borderRadius: 20,
  borderWidth: 0.2,
  borderColor: theme.primary,
  marginBottom: 10,
},
iconContainer: {
  width: 48,
  height: 48,

  justifyContent: "center",
  alignItems: "center",

  borderRadius: 16,
},
content: {
  flex: 1,
  marginHorizontal: 16,
  gap: 5,
},
header: {
  flexDirection: "row",
  alignItems: "center",
},
badge: {
  marginLeft: 10,

  paddingHorizontal: 10,
  paddingVertical: 3,

  borderRadius: 999,
  borderWidth:1,
  borderColor: '#244A90',

  backgroundColor: "rgba(59,130,246,0.125)"
},
badgeText: {
  fontSize: 9,
  fontWeight: "800",
  color: theme.primary
},
right: {
  justifyContent: "center",
  alignItems: "center",
},
layout: {
    flex:1,
    width:80,
},

activeIcon: {
  backgroundColor: theme.primary,
  padding: 5,
  left: -5,
  position: 'absolute',
  height: 65,
  borderRadius: 5
}

})