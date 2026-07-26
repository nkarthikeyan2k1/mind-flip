import { useStyles } from "@/hooks/useStyles";
import { Image, ImageRequireSource, Text, View, ViewProps } from "react-native";
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
          <Text style={styles.title}>{title}</Text>

          {badgeText != "" && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{badgeText}</Text>
            </View>
          )}
        </View>

        <Text style={styles.description}>{description}</Text>
      </View>

      {/* Right */}
      <View style={styles.right}>{right_icon}</View>
    </View>
  );
};

export default Card;
