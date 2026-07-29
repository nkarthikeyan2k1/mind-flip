import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme:ThemeColors) => StyleSheet.create({
    container: {
        backgroundColor: theme.background,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    button: {
        height: 40,
        width: 40,
        backgroundColor: theme.secondaryText,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    title: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: 'medium',
        letterSpacing: 1.4,
        color: theme.secondaryText,
    },
    subtitle: {
        fontSize: 14,
        textAlign: "center",
        fontWeight: 'semibold',
        color: theme.primaryText,
        lineHeight: 21,
    }
})