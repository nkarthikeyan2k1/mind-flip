import { Pressable, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { styleSheet } from "./index.style";
import { useStyles } from "@/hooks/useStyles";

type ButtonProps = {
    title?: string
    onPress: () => void
    disabled?: boolean
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    styles?: StyleProp<ViewStyle> | {
        button?: StyleProp<ViewStyle>;
        buttonText?: StyleProp<TextStyle>;
    };
    iconRight?: React.ReactNode;
    iconLeft?: React.ReactNode;
    shouldShowLoaderWithoutChildren?: boolean;
    loaderSize?: "small" | "large" | number;
    loaderColor?: string;
    delay?: number;
    disableLoading?: boolean;
    showLoadingText?: boolean;
    iconSize?: number;
}

const Button = ({ 
  title, 
  onPress, 
  disabled,
  style,
  textStyle,
  styles: customStyles,
  iconRight,
  iconLeft,
  shouldShowLoaderWithoutChildren,
  loaderSize,
  loaderColor,
  delay,
  disableLoading,
  showLoadingText,
  iconSize,
 }: ButtonProps) => {
  const defaultStyles = useStyles(styleSheet);

  const isStructured = customStyles && 
    typeof customStyles === "object" && 
    ("button" in customStyles || "buttonText" in customStyles);

  const resolvedContainerStyle = [
    defaultStyles.button,
    isStructured ? (customStyles as any).button : customStyles,
    style
  ];

  const resolvedTextStyle = [
    defaultStyles.buttonText,
    isStructured ? (customStyles as any).buttonText : undefined,
    textStyle
  ];

  return (
    <Pressable style={resolvedContainerStyle} disabled={disabled} onPress={onPress}>
      {iconLeft}
      {title && <Text style={resolvedTextStyle}>{title}</Text>}
      {iconRight}
    </Pressable>
  );
};

export default Button;