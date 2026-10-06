import { ImageMap } from "@/assets/ImageMap";
import Button from "@/globals/components/Button";
import Glow from "@/globals/components/Gradient";
import Modal from "@/globals/components/Modal";
import { useStyles } from "@/hooks/useStyles";
import { RotateCcw } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { Image, View } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import Svg, { Circle } from "react-native-svg";
import { CustomText } from "../CustomText";
import { styleSheet } from "./index.style";


const COUNTDOWN_SECONDS = 3;
const RADIUS = 22;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface LevelCompleteModalProps {
  visible: boolean;
  onClose: () => void;
  timeTaken?: string;
  moves?: number;
  level?: number;
  isGameFinished?: boolean;
  onNextLevel?: () => void;
  onRestart?: () => void;
  autoNextLevel?: boolean;
}

const LevelCompleteModal = ({
  visible,
  onClose,
  timeTaken,
  moves,
  level = 1,
  isGameFinished = false,
  onNextLevel,
  onRestart,
  autoNextLevel = true,
}: LevelCompleteModalProps) => {
  const { styles, theme } = useStyles(styleSheet);
  const [countdown, setCountdown] = useState(COUNTDOWN_SECONDS);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Animated values
  const strokeDash = useSharedValue(0); // 0 = full ring, CIRCUMFERENCE = empty
  const numberScale = useSharedValue(1);
  const numberOpacity = useSharedValue(1);

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    if (!visible) {
      clearTimers();
      setCountdown(COUNTDOWN_SECONDS);
      strokeDash.value = 0;
      return;
    }

    if (isGameFinished || !autoNextLevel || !onNextLevel) return;

    // Reset
    setCountdown(COUNTDOWN_SECONDS);
    strokeDash.value = 0;

    // Animate the ring draining over COUNTDOWN_SECONDS
    strokeDash.value = withTiming(CIRCUMFERENCE, {
      duration: COUNTDOWN_SECONDS * 1000,
      easing: Easing.linear,
    });

    let current = COUNTDOWN_SECONDS;

    intervalRef.current = setInterval(() => {
      current -= 1;
      setCountdown(current);

      // Pop animation on number change
      numberScale.value = withSequence(
        withSpring(1.4, { damping: 6, stiffness: 200 }),
        withSpring(1, { damping: 8, stiffness: 150 })
      );

      if (current <= 0) {
        clearTimers();
      }
    }, 1000);

    // Auto-advance
    timeoutRef.current = setTimeout(() => {
      clearTimers();
      onNextLevel();
    }, COUNTDOWN_SECONDS * 1000);

    return () => clearTimers();
  }, [visible]);

  if (!visible) return null;

  const showCountdown = !isGameFinished && autoNextLevel && onNextLevel;

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      modalStyle={styles.modal}
      headerComponent={() => (
        <View style={styles.imageContainer}>
          <Glow size={120} color="#22C55E" opacity={0.35}>
            <Image
              source={ImageMap.assets.level_complete}
              style={styles.logo}
            />
          </Glow>
        </View>
      )}
      bodyComponent={() => (
        <View style={styles.modalBody}>
          {/* Title */}
          <CustomText style={styles.title}>
            {isGameFinished ? "All Levels Cleared! 🎉" : `Level ${level} Complete!`}
          </CustomText>

          {/* Countdown Ring + Label */}
          {showCountdown && (
            <View style={styles.countdownContainer}>

              {/* "Next level in X" label */}
              <CustomText style={styles.countdownLabel}>
                {countdown > 0
                  ? `Next level in ${countdown}...`
                  : "Advancing..."}
              </CustomText>
            </View>
          )}

          {/* Manual Next Level button */}
          {onNextLevel && !isGameFinished && (
            <Button
              title="Next Level Now"
              onPress={() => {
                clearTimers();
                onNextLevel();
              }}
              style={styles.actionButton}
              textStyle={{ fontSize: 13, fontWeight: "600" }}
            />
          )}
          {/* Play Again for game finished */}
          {isGameFinished && onRestart && (
            <Button
              title="Play Again"
              onPress={onRestart}
              iconLeft={<RotateCcw color={theme.white} size={16} />}
              style={styles.actionButton}
              textStyle={{ fontSize: 13, fontWeight: "600" }}
            />
          )}
        </View>
      )}
    />
  );
};

export default LevelCompleteModal;
