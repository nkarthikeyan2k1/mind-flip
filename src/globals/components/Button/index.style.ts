import { ThemeColors } from "@/theme/color";
import { StyleSheet } from "react-native";

export const styleSheet = (theme: ThemeColors) => StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        gap: 8,
        backgroundColor: theme.primary,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonDisabled: {
        backgroundColor: theme.border,
    },
    buttonTextDisabled: {
        color: theme.primaryText,
    },
});