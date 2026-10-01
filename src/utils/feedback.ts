import * as Haptics from "expo-haptics";
import { useAudioPlayer } from "expo-audio";
import { useNumberMemoryStore } from "@/store/useNumberMemoryStore";

// ─── Haptic Feedback (standalone, no hooks needed) ───

/**
 * Triggers a light haptic impact if hapticEnabled is true in the store.
 */
export const triggerHapticLight = () => {
  const hapticEnabled = useNumberMemoryStore.getState().hapticEnabled;
  if (!hapticEnabled) return;
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
};

/**
 * Triggers a medium haptic impact if hapticEnabled is true in the store.
 */
export const triggerHapticMedium = () => {
  const hapticEnabled = useNumberMemoryStore.getState().hapticEnabled;
  if (!hapticEnabled) return;
  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
};

/**
 * Triggers a success haptic notification if hapticEnabled is true in the store.
 */
export const triggerHapticSuccess = () => {
  const hapticEnabled = useNumberMemoryStore.getState().hapticEnabled;
  if (!hapticEnabled) return;
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
};

/**
 * Triggers an error haptic notification if hapticEnabled is true in the store.
 */
export const triggerHapticError = () => {
  const hapticEnabled = useNumberMemoryStore.getState().hapticEnabled;
  if (!hapticEnabled) return;
  Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
};

// ─── Sound Feedback (React hook — must be called inside a component) ───

// Sound assets bundled with the app
const FLIP_SOUND = require("@/assets/sounds/card-flip.wav");
const MATCH_SOUND = require("@/assets/sounds/match.wav");
const MISMATCH_SOUND = require("@/assets/sounds/mismatch.wav");

/**
 * React hook that provides pre-loaded audio players for game sound effects.
 * Must be called inside a React component.
 *
 * Returns functions that check `soundEnabled` before playing.
 */
export const useSoundEffects = () => {
  const flipPlayer = useAudioPlayer(FLIP_SOUND);
  const matchPlayer = useAudioPlayer(MATCH_SOUND);
  const mismatchPlayer = useAudioPlayer(MISMATCH_SOUND);

  const playFlipSound = () => {
    const soundEnabled = useNumberMemoryStore.getState().soundEnabled;
    if (!soundEnabled) return;
    flipPlayer.seekTo(0);
    flipPlayer.play();
  };

  const playMatchSound = () => {
    const soundEnabled = useNumberMemoryStore.getState().soundEnabled;
    if (!soundEnabled) return;
    matchPlayer.seekTo(0);
    matchPlayer.play();
  };

  const playMismatchSound = () => {
    const soundEnabled = useNumberMemoryStore.getState().soundEnabled;
    if (!soundEnabled) return;
    mismatchPlayer.seekTo(0);
    mismatchPlayer.play();
  };

  return { playFlipSound, playMatchSound, playMismatchSound };
};
