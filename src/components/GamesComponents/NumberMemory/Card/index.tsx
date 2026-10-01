import React, { useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { Brain } from "lucide-react-native";
import { CustomText } from "@/globals/components/CustomText";
import { useStyles } from "@/hooks/useStyles";
import { DEFAULT_CARD_COLOR, NUMBER_COLORS, styleSheet } from "./index.style";

export interface CardProps {
  value: number | string;
  isFlipped: boolean;
  isMatched?: boolean;
  onPress?: () => void;
  disabled?: boolean;
  style?: any;
  customColor?: {
    text: string;
    bgStart: string;
    bgEnd: string;
    border: string;
    glow: string;
  };
}

const Card: React.FC<CardProps> = ({
  value,
  isFlipped,
  isMatched = false,
  onPress,
  disabled = false,
  style,
  customColor,
}) => {
  const { styles, theme } = useStyles(styleSheet);

  const flipProgress = useSharedValue(isFlipped ? 1 : 0);
  const scaleProgress = useSharedValue(1);

  useEffect(() => {
    flipProgress.value = withTiming(isFlipped ? 1 : 0, { duration: 320 });
  }, [isFlipped]);

  const handlePressIn = () => {
    if (!disabled && onPress) {
      scaleProgress.value = withSpring(0.95);
    }
  };

  const handlePressOut = () => {
    scaleProgress.value = withSpring(1);
  };

  // Color mapping based on number value or custom prop
  const colorScheme =
    customColor || NUMBER_COLORS[value] || DEFAULT_CARD_COLOR;

  // Reanimated style for front of card (number face)
  const frontAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(flipProgress.value, [0, 1], [180, 360]);
    return {
      transform: [
        { perspective: 1000 },
        { rotateY: `${rotateValue}deg` },
        { scale: scaleProgress.value },
      ],
      backfaceVisibility: "hidden" as const,
    };
  });

  // Reanimated style for back of card (matrix dot pattern face)
  const backAnimatedStyle = useAnimatedStyle(() => {
    const rotateValue = interpolate(flipProgress.value, [0, 1], [0, 180]);
    return {
      transform: [
        { perspective: 1000 },
        { rotateY: `${rotateValue}deg` },
        { scale: scaleProgress.value },
      ],
      backfaceVisibility: "hidden" as const,
    };
  });

  return (
    <Pressable
      style={[styles.cardWrapper, style]}
      onPress={!disabled ? onPress : undefined}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
    >
      {/* CARD BACK (Unflipped State) */}
      <Animated.View style={[styles.cardFace, styles.cardBack, backAnimatedStyle]}>
        <LinearGradient
          colors={["#1E1E26", "#141419"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.cardFace}
        >
          {/* Dot Matrix Pattern (3x3 Grid) */}
          <View style={styles.dotGrid}>
            <View style={styles.dotRow}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <View style={styles.dotRow}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
            <View style={styles.dotRow}>
              <View style={styles.dot} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
          </View>

          {/* Brain Watermark at bottom right */}
          <View style={styles.watermark}>
            <Brain size={14} color={theme.white} />
          </View>
        </LinearGradient>
      </Animated.View>

      {/* CARD FRONT (Flipped / Revealed State) */}
      <Animated.View
        style={[
          styles.cardFace,
          styles.cardFront,
          { borderColor: colorScheme.border },
          isMatched && styles.matchedCard,
          frontAnimatedStyle,
        ]}
      >
        <LinearGradient
          colors={[colorScheme.bgStart, colorScheme.bgEnd, "#121217"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.cardFace}
        >
          {/* Soft Glow behind number */}
          <View
            style={[
              styles.glowCircle,
              { backgroundColor: colorScheme.glow },
            ]}
          />

          {/* Number Display */}
          <CustomText
            style={[
              styles.numberText,
              { color: colorScheme.text },
            ]}
          >
            {value}
          </CustomText>

          {/* Brain Watermark at bottom right */}
          <View style={[styles.watermark, { opacity: 0.25 }]}>
            <Brain size={14} color={colorScheme.text} />
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
};

export default Card;
