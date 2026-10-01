import { create } from "zustand";
import {
  triggerHapticLight,
  triggerHapticSuccess,
  triggerHapticError,
} from "@/utils/feedback";

export interface MemoryCard {
  id: string;
  value: number;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface LevelConfig {
  pairs: number;
  cols: number;
}

export const LEVEL_CONFIGS: Record<number, LevelConfig> = {
  1: { pairs: 2, cols: 2 }, // 4 cards: 2x2
  2: { pairs: 3, cols: 3 }, // 6 cards: 3x2
  3: { pairs: 6, cols: 3 }, // 12 cards: 3x4 (Matches Figma Level 3 design)
  4: { pairs: 8, cols: 4 }, // 16 cards: 4x4
  5: { pairs: 10, cols: 4 }, // 20 cards: 4x5
};

export const MAX_LEVEL = 5;

// Generates and shuffles card pairs for a given level
export const generateCardsForLevel = (level: number): MemoryCard[] => {
  const config = LEVEL_CONFIGS[level] || LEVEL_CONFIGS[1];
  const pairCount = config.pairs;

  // Available candidate numbers
  const numberPool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  
  // Pick random subset of unique numbers
  const shuffledNumbers = [...numberPool].sort(() => Math.random() - 0.5);
  const selectedNumbers = shuffledNumbers.slice(0, pairCount);

  // Duplicate each number into a pair
  const cardItems: MemoryCard[] = [];
  selectedNumbers.forEach((val, index) => {
    cardItems.push({
      id: `card-${level}-${val}-a`,
      value: val,
      isFlipped: false,
      isMatched: false,
    });
    cardItems.push({
      id: `card-${level}-${val}-b`,
      value: val,
      isFlipped: false,
      isMatched: false,
    });
  });

  // Fisher-Yates shuffle
  for (let i = cardItems.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardItems[i], cardItems[j]] = [cardItems[j], cardItems[i]];
  }

  return cardItems;
};

interface NumberMemoryState {
  currentLevel: number;
  cards: MemoryCard[];
  flippedCardIds: string[];
  isProcessingTurn: boolean;
  moves: number;
  seconds: number;
  minutes: number;
  isPaused: boolean;
  isLevelComplete: boolean;
  isGameFinished: boolean;
  soundEnabled: boolean;
  hapticEnabled: boolean;

  // Actions
  startLevel: (level: number) => void;
  flipCard: (cardId: string) => void;
  tickTimer: () => void;
  pauseGame: () => void;
  resumeGame: () => void;
  restartLevel: () => void;
  nextLevel: () => void;
  toggleSound: () => void;
  toggleHaptic: () => void;
  closeLevelCompleteModal: () => void;
}

export const useNumberMemoryStore = create<NumberMemoryState>((set, get) => ({
  currentLevel: 1,
  cards: generateCardsForLevel(1),
  flippedCardIds: [],
  isProcessingTurn: false,
  moves: 0,
  seconds: 0,
  minutes: 0,
  isPaused: false,
  isLevelComplete: false,
  isGameFinished: false,
  soundEnabled: true,
  hapticEnabled: true,

  startLevel: (level: number) => {
    const boundedLevel = Math.min(Math.max(level, 1), MAX_LEVEL);
    set({
      currentLevel: boundedLevel,
      cards: generateCardsForLevel(boundedLevel),
      flippedCardIds: [],
      isProcessingTurn: false,
      moves: 0,
      seconds: 0,
      minutes: 0,
      isPaused: false,
      isLevelComplete: false,
      isGameFinished: false,
    });
  },

  flipCard: (cardId: string) => {
    const { cards, flippedCardIds, isProcessingTurn, isPaused, isLevelComplete, moves } = get();

    // Prevent flipping if game is paused, level completed, or currently checking a pair
    if (isPaused || isLevelComplete || isProcessingTurn) return;

    const clickedCard = cards.find((c) => c.id === cardId);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

    // Trigger haptic on card flip
    triggerHapticLight();

    // Flip the clicked card immediately
    const updatedCards = cards.map((c) =>
      c.id === cardId ? { ...c, isFlipped: true } : c
    );

    // Case 1: First card of pair
    if (flippedCardIds.length === 0) {
      set({
        cards: updatedCards,
        flippedCardIds: [cardId],
      });
      return;
    }

    // Case 2: Second card of pair
    if (flippedCardIds.length === 1) {
      const firstCardId = flippedCardIds[0];
      const firstCard = updatedCards.find((c) => c.id === firstCardId);
      const newMoves = moves + 1;

      // Check if match
      if (firstCard && firstCard.value === clickedCard.value) {
        // MATCH FOUND: keep both cards open and mark isMatched = true
        const matchedCards = updatedCards.map((c) =>
          c.id === firstCardId || c.id === cardId ? { ...c, isMatched: true } : c
        );

        // Haptic success on match
        triggerHapticSuccess();

        const allMatched = matchedCards.every((c) => c.isMatched);

        set({
          cards: matchedCards,
          flippedCardIds: [],
          moves: newMoves,
          isLevelComplete: allMatched,
          isGameFinished: allMatched && get().currentLevel >= MAX_LEVEL,
        });
      } else {
        // Haptic error on mismatch
        triggerHapticError();

        // MISMATCH: Show second card briefly, then flip both face down after 750ms
        set({
          cards: updatedCards,
          flippedCardIds: [firstCardId, cardId],
          moves: newMoves,
          isProcessingTurn: true,
        });

        setTimeout(() => {
          const { cards: currentCards } = get();
          const closedCards = currentCards.map((c) =>
            c.id === firstCardId || c.id === cardId ? { ...c, isFlipped: false } : c
          );

          set({
            cards: closedCards,
            flippedCardIds: [],
            isProcessingTurn: false,
          });
        }, 750);
      }
    }
  },

  tickTimer: () => {
    const { isPaused, isLevelComplete, seconds, minutes } = get();
    if (isPaused || isLevelComplete) return;

    if (seconds === 59) {
      set({ seconds: 0, minutes: minutes + 1 });
    } else {
      set({ seconds: seconds + 1 });
    }
  },

  pauseGame: () => {
    set({ isPaused: true });
  },

  resumeGame: () => {
    set({ isPaused: false });
  },

  restartLevel: () => {
    const { currentLevel } = get();
    get().startLevel(currentLevel);
  },

  nextLevel: () => {
    const { currentLevel } = get();
    if (currentLevel < MAX_LEVEL) {
      get().startLevel(currentLevel + 1);
    } else {
      set({ isLevelComplete: false, isGameFinished: true });
    }
  },

  toggleSound: () => {
    set((state) => ({ soundEnabled: !state.soundEnabled }));
  },

  toggleHaptic: () => {
    set((state) => ({ hapticEnabled: !state.hapticEnabled }));
  },

  closeLevelCompleteModal: () => {
    set({ isLevelComplete: false });
  },
}));
