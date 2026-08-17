import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme:ThemeColors) => StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        paddingHorizontal: 20,
    },
    button: {
        height: 40,
        width: 40,
        backgroundColor: theme.white_10,
        borderColor:theme.white_20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    title: {
        textAlign: "center",
        fontSize: 10,
        fontWeight: 'medium',
        letterSpacing: 1.4,
        color: theme.secondary_50,
    },
    subtitle: {
        fontSize: 14,
        textAlign: "center",
        fontWeight: 'bold',
        color: theme.primaryText,
        lineHeight: 21,
    },

    modal: {
        height: 310,
        width: 270,
        borderWidth:1,
        borderColor:theme.white_10,
        // paddingHorizontal:28,
        // paddingVertical:32,
    },
    modalBody: {
        backgroundColor:'green'
    },
    modalHeader: {
        backgroundColor:'red',
        alignItems:'center',
    },
    modalButton: {
        width:210,
        height:55,
        borderRadius: 16,
    },
    modalFooter: {
        alignItems:'center',
        backgroundColor:'purple'
    },
})