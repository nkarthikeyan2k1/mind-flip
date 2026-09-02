import { StyleSheet } from "react-native";
import { ThemeColors } from "@/theme/color";

export const styleSheet = (theme:ThemeColors) => StyleSheet.create({
    modal: {
        height: 230,
        width: 260,
        borderWidth:1,
        borderColor:theme.primary_30,
        justifyContent:'center',
        alignItems:'center',
        gap: 40,
    },
    modalBody: {
        alignItems: 'center',
        gap: 5,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:12,
    },
    logo: {
        width: 120,
        height: 120,
    },
    title: {
        fontWeight: 'bold',
        color:theme.primaryText,
        textAlign: 'center',
        fontSize:22
    },
    lable: {
        color:theme.secondaryText,
        fontSize: 16,
        lineHeight: 19,
        fontWeight:'regular',
        marginTop:4
    }

});