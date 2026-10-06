import React, { useCallback } from "react";
import { View } from "react-native";
import Card from "@/components/GamesComponents/NumberMemory/Card";
import Timer from "@/components/GamesComponents/NumberMemory/Timer";
import Button from "@/globals/components/Button";
import LevelCompleteModal from "@/globals/components/LevelCompleteModal";
import { useStyles } from "@/hooks/useStyles";
import {
  LEVEL_CONFIGS,
  MAX_LEVEL,
  useNumberMemoryStore,
} from "@/store/useNumberMemoryStore";
import { formatTime } from "@/utils/formatTime";
import { useSoundEffects, triggerHapticLight } from "@/utils/feedback";
import { RotateCcw, Vibrate, Volume2, VolumeX } from "lucide-react-native";
import { styleSheet } from "./index.style";

const NumberMemory = () => {
  const { styles, theme } = useStyles(styleSheet);

  const cards = useNumberMemoryStore((state) => state.cards);
  const currentLevel = useNumberMemoryStore((state) => state.currentLevel);
  const isLevelComplete = useNumberMemoryStore((state) => state.isLevelComplete);
  const isGameFinished = useNumberMemoryStore((state) => state.isGameFinished);
  const moves = useNumberMemoryStore((state) => state.moves);
  const seconds = useNumberMemoryStore((state) => state.seconds);
  const minutes = useNumberMemoryStore((state) => state.minutes);
  const soundEnabled = useNumberMemoryStore((state) => state.soundEnabled);
  const hapticEnabled = useNumberMemoryStore((state) => state.hapticEnabled);

  const flipCard = useNumberMemoryStore((state) => state.flipCard);
  const restartLevel = useNumberMemoryStore((state) => state.restartLevel);
  const nextLevel = useNumberMemoryStore((state) => state.nextLevel);
  const toggleSound = useNumberMemoryStore((state) => state.toggleSound);
  const toggleHaptic = useNumberMemoryStore((state) => state.toggleHaptic);
  const closeLevelCompleteModal = useNumberMemoryStore(
    (state) => state.closeLevelCompleteModal
  );

  // Sound effects (hook must be called at component level)
  const { playFlipSound, playMatchSound, playMismatchSound } =
    useSoundEffects();

  // Wrap flipCard to also play flip sound; match/mismatch sounds are triggered
  // via a store subscription below
  const handleFlipCard = useCallback(
    (cardId: string) => {
      const prevCards = useNumberMemoryStore.getState().cards;
      const card = prevCards.find((c) => c.id === cardId);
      if (!card || card.isFlipped || card.isMatched) return;

      playFlipSound();
      flipCard(cardId);

      // After the store processes the flip, check if a match/mismatch occurred
      // (only when 2 cards are now flipped or a match was just found)
      setTimeout(() => {
        const state = useNumberMemoryStore.getState();
        const updatedCard = state.cards.find((c) => c.id === cardId);
        if (updatedCard?.isMatched) {
          playMatchSound();
        } else if (state.isProcessingTurn) {
          playMismatchSound();
        }
      }, 50);
    },
    [flipCard, playFlipSound, playMatchSound, playMismatchSound]
  );

  // Handle toggle with haptic feedback on the toggle button itself
  const handleToggleSound = useCallback(() => {
    triggerHapticLight();
    toggleSound();
  }, [toggleSound]);

  const handleToggleHaptic = useCallback(() => {
    triggerHapticLight();
    toggleHaptic();
  }, [toggleHaptic]);

  // Determine grid column layout based on current level configuration
  const cols = LEVEL_CONFIGS[currentLevel]?.cols || 2;
  const cardItemStyle =
    cols === 2
      ? styles.cardItem2Col
      : cols === 3
      ? styles.cardItem3Col
      : styles.cardItem4Col;

  return (
    <View style={styles.container}>
      {/* Top Section: Timer & Level Indicator */}
      <View style={styles.topSection}>
        <Timer />

        {/* 5-Level Progress Indicator Bar */}
        <View style={styles.levelIndicationBar}>
          {Array.from({ length: MAX_LEVEL }).map((_, idx) => {
            const isCompleted = idx < currentLevel - 1;
            const isActive = idx === currentLevel - 1;

            return (
              <View
                key={`level-dot-${idx}`}
                style={[
                  styles.levelIndicationDot,
                  isCompleted && styles.levelIndicationDotCompleted,
                  isActive && styles.levelIndicationDotActive,
                ]}
              />
            );
          })}
        </View>
      </View>

      {/* Cards Grid Container */}
      <View style={styles.cardsContainer}>
        <View style={styles.grid}>
          {cards.map((card) => (
            <View key={card.id} style={cardItemStyle}>
              <Card
                value={card.value}
                isFlipped={card.isFlipped || card.isMatched}
                isMatched={card.isMatched}
                onPress={() => handleFlipCard(card.id)}
              />
            </View>
          ))}
        </View>
      </View>

      {/* Bottom Controls */}
      <View style={styles.buttonContainer}>
        <Button
          title="Restart Level"
          onPress={restartLevel}
          style={[styles.button, { marginBottom: 10 }]}
          textStyle={{ color: theme.primary }}
          iconLeft={<RotateCcw color={theme.primary} size={18} />}
        />
        <View style={styles.buttonFeature}>
          <Button
            title="Sound"
            inactive={!soundEnabled}
            style={[styles.button, { height: 40 }]}
            textStyle={{ color: theme.primary, fontSize: 12 }}
            onPress={handleToggleSound}
            iconLeft={
              soundEnabled ? (
                <Volume2 color={theme.primary} size={18} />
              ) : (
                <VolumeX color={theme.primary} size={18} />
              )
            }
          />
          <Button
            title="Haptic"
            inactive={!hapticEnabled}
            style={[styles.button, { height: 40 }]}
            textStyle={{ color: theme.primary, fontSize: 12 }}
            onPress={handleToggleHaptic}
            iconLeft={<Vibrate color={theme.primary} size={18} />}
          />
        </View>
      </View>

      {/* Level Complete / Game Finished Modal */}
      <LevelCompleteModal
        visible={isLevelComplete}
        onClose={closeLevelCompleteModal}
        level={currentLevel}
        timeTaken={formatTime(minutes, seconds)}
        moves={moves}
        isGameFinished={isGameFinished}
        onNextLevel={nextLevel}
        onRestart={restartLevel}
        autoNextLevel={true}
      />
    </View>
  );
};

export default NumberMemory;
