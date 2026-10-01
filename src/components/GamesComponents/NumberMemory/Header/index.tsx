import Button from "@/globals/components/Button";
import { CustomText } from "@/globals/components/CustomText";
import PauseModal from "@/globals/components/PauseModal";
import { useStyles } from "@/hooks/useStyles";
import { MAX_LEVEL, useNumberMemoryStore } from "@/store/useNumberMemoryStore";
import { useNavigation } from "expo-router";
import { ChevronLeft, Pause } from "lucide-react-native";
import { View } from "react-native";
import { styleSheet } from "./index.style";

type HeaderProps = {
  showBack: boolean;
};

const Header = ({ showBack }: HeaderProps) => {
  const { styles, theme } = useStyles(styleSheet);
  const navigation = useNavigation();

  const currentLevel = useNumberMemoryStore((state) => state.currentLevel);
  const isPaused = useNumberMemoryStore((state) => state.isPaused);
  const pauseGame = useNumberMemoryStore((state) => state.pauseGame);
  const resumeGame = useNumberMemoryStore((state) => state.resumeGame);
  const restartLevel = useNumberMemoryStore((state) => state.restartLevel);

  return (
    <>
      <View style={styles.container}>
        {/* Left */}
        {showBack && (
          <Button
            iconLeft={<ChevronLeft color={theme.secondaryText} size={18} />}
            styles={styles.button}
            onPress={() => navigation.canGoBack() && navigation.goBack()}
          />
        )}

        {/* Middle */}
        <View style={{ alignItems: "center" }}>
          <CustomText style={styles.title}>MINDFLIP</CustomText>
          <CustomText style={styles.subtitle}>
            Level {currentLevel} of {MAX_LEVEL}
          </CustomText>
        </View>

        {/* Right */}
        <Button
          iconRight={<Pause color={theme.secondaryText} size={18} />}
          styles={styles.button}
          onPress={pauseGame}
        />
      </View>

      <PauseModal
        visible={isPaused}
        onClose={resumeGame}
        onResume={resumeGame}
        onRestart={restartLevel}
        levelText={`LEVEL ${currentLevel} OF ${MAX_LEVEL}`}
      />
    </>
  );
};

export default Header;
