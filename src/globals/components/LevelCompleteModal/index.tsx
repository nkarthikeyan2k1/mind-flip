import { ImageMap } from "@/assets/ImageMap";
import Button from "@/globals/components/Button";
import Glow from "@/globals/components/Gradient";
import Modal from "@/globals/components/Modal";
import { useStyles } from "@/hooks/useStyles";
import { ArrowRight, RotateCcw } from "lucide-react-native";
import { Image, View } from "react-native";
import { CustomText } from "../CustomText";
import { styleSheet } from "./index.style";

interface LevelCompleteModalProps {
  visible: boolean;
  onClose: () => void;
  timeTaken?: string;
  moves?: number;
  level?: number;
  isGameFinished?: boolean;
  onNextLevel?: () => void;
  onRestart?: () => void;
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
}: LevelCompleteModalProps) => {
  const { styles, theme } = useStyles(styleSheet);

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      shouldShowClose={true}
      modalStyle={styles.modal}
      headerComponent={() => (
        <View style={styles.imageContainer}>
          <Glow size={130} color="#22C55E" opacity={0.4}>
            <Image
              source={ImageMap.assets.level_complete}
              style={styles.logo}
            />
          </Glow>
        </View>
      )}
      bodyComponent={() => (
        <View style={styles.modalBody}>
          <CustomText style={styles.title}>
            {isGameFinished ? "All Levels Cleared!" : `Level ${level} Complete!`}
          </CustomText>
          <CustomText style={styles.label}>
            {timeTaken ? `Time: ${timeTaken}` : ""}
            {timeTaken && moves !== undefined ? " • " : ""}
            {moves !== undefined ? `Moves: ${moves}` : ""}
          </CustomText>
          {onNextLevel && !isGameFinished && (
            <Button
              title="Next Level"
              onPress={onNextLevel}
              iconRight={<ArrowRight color={theme.white} size={16} />}
              style={styles.actionButton}
              textStyle={{ fontSize: 13, fontWeight: "600" }}
            />
          )}
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
