import { ThemeColors } from "@/theme/color";
import { StyleSheet } from "react-native";

export const styleSheet = (theme: ThemeColors) => StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: theme.primary,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    // buttonDisabled: {
    //     backgroundColor: theme.disabled,
    // },
    // buttonTextDisabled: {
    //     color: theme.disabledText,
    // },
});