import { useThemeContext } from "@/context/ThemeContext";
import { StyleSheet, Text, TextProps } from "react-native";

export interface CustomTextProps extends TextProps {
  fontSize?: number;
  className?: string;
  hide?: boolean;
}

enum fontFamily {
  regular = "Regular",
  medium = "Medium",
  semiBold = "Semi Bold",
  bold = "Bold",
}

export const CustomText = ({
  children,
  style,
  fontSize,
  className,
  hide,
  ...props
}: CustomTextProps) => {
  const { theme } = useThemeContext();
  if (hide) return null;

  const getFontFamily = (): keyof typeof fontFamily => {
    const flattenedStyle = StyleSheet.flatten(style);
    const weight = flattenedStyle?.fontWeight?.toString();

    switch (weight) {
      case "bold":
      case "700":
        return "bold";
      case "600":
        return "semiBold";
      case "500":
        return "medium";
      case "400":
        return "regular";
      default:
        return "semiBold";
    }
  };

  const defaultStyle = [
    {
      fontFamily: fontFamily[getFontFamily()],
      fontSize: fontSize ?? 12,
      lineHeight: (fontSize ?? 12) + 6,
      color: theme.primaryText,
      margin: -1,
    },
    style,
  ];
  return (
    <Text className={className} style={defaultStyle} {...props}>
      {children ? children : "-"}
    </Text>
  );
};
