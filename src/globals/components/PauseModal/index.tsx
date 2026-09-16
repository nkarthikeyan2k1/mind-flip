import Button from "@/globals/components/Button";
import { CustomText } from "@/globals/components/CustomText";
import Modal from "@/globals/components/Modal";
import { useStyles } from "@/hooks/useStyles";
import { Link } from "expo-router";
import { Play, RotateCw } from "lucide-react-native";
import { View } from "react-native";
import { styleSheet } from "./index.style";

interface PauseModalProps {
  visible: boolean;
  onClose: () => void;
  onResume?: () => void;
  onRestart?: () => void;
  levelText?: string;
}

const PauseModal = ({
  visible,
  onClose,
  onResume,
  onRestart,
  levelText = "LEVEL 2 OF 5",
}: PauseModalProps) => {
  const { styles, theme } = useStyles(styleSheet);

  if (!visible) return null;

  const handleResume = () => {
    if (onResume) {
      onResume();
    } else {
      onClose();
    }
  };

  const handleRestart = () => {
    if (onRestart) {
      onRestart();
    } else {
      onClose();
    }
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      modalStyle={styles.modal}
      headerComponent={() => (
        <View style={styles.modalHeader}>
          <CustomText style={styles.title}>Paused</CustomText>
          <CustomText style={styles.subtitle}>{levelText}</CustomText>
        </View>
      )}
      bodyComponent={() => (
        <View style={styles.modalBody}>
          <Button
            style={styles.modalButton}
            textStyle={{ fontSize: 13 }}
            title="Resume"
            onPress={handleResume}
            iconLeft={<Play color={theme.white} size={15} />}
          />
          <Button
            style={[styles.modalButton, { backgroundColor: theme.white_5 }]}
            textStyle={{ color: theme.secondaryText, fontSize: 13 }}
            title="Restart Level"
            onPress={handleRestart}
            iconLeft={<RotateCw color={theme.white} size={15} />}
          />
        </View>
      )}
      footerComponent={() => (
        <View>
          <Link href="/(root)/home" asChild>
            <CustomText style={styles.exitText}>Exit to Menu</CustomText>
          </Link>
        </View>
      )}
    />
  );
};

export default PauseModal;
