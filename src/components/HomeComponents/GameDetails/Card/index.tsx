import { useStyles } from "@/hooks/useStyles";
import { Image, ImageRequireSource, View, ViewProps } from "react-native";
import { CustomText } from "@/globals/components/CustomText";
import { styleSheet } from "./index.style";

interface CardProps {
  title: string;
  description: string;
  badgeText: string;
  image: ImageRequireSource;
  is_disabled: boolean;
  right_icon?: React.ReactNode;
  style?: ViewProps["style"];
  is_active?: boolean;
}

const Card = ({
  title,
  description,
  badgeText,
  image,
  is_disabled,
  right_icon,
  style,
  is_active,
}: CardProps) => {
  const styles = useStyles(styleSheet);
  return (
    <View style={[
        styles.card, style, 
        { opacity: is_disabled ? 0.5 : 1 }
        ]}>
      {/* Left */}
    {is_active && <View style={[styles.activeIcon]}></View>}
      <View style={styles.iconContainer}>
        <Image source={image} style={styles.logo} />
      </View>

      {/* Middle */}
      <View style={styles.content}>
        <View style={styles.header}>
          <CustomText style={styles.title}>{title}</CustomText>

          {badgeText != "" && (
            <View style={styles.badge}>
              <CustomText style={styles.badgeText}>{badgeText}</CustomText>
            </View>
          )}
        </View>

        <CustomText style={styles.description}>{description}</CustomText>
      </View>

      {/* Right */}
      <View style={styles.right}>{right_icon}</View>
    </View>
  );
};

export default Card;
