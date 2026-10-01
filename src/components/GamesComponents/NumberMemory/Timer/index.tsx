import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { Clock4, Zap } from "lucide-react-native";
import { CustomText } from "@/globals/components/CustomText";
import { useStyles } from "@/hooks/useStyles";
import { useNumberMemoryStore } from "@/store/useNumberMemoryStore";
import { padTime } from "@/utils/formatTime";
import { styleSheet } from "./index.style";

const Timer = () => {
  const { styles } = useStyles(styleSheet);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const seconds = useNumberMemoryStore((state) => state.seconds);
  const minutes = useNumberMemoryStore((state) => state.minutes);
  const moves = useNumberMemoryStore((state) => state.moves);
  const isPaused = useNumberMemoryStore((state) => state.isPaused);
  const isLevelComplete = useNumberMemoryStore((state) => state.isLevelComplete);
  const tickTimer = useNumberMemoryStore((state) => state.tickTimer);

  useEffect(() => {
    if (!isPaused && !isLevelComplete) {
      timerRef.current = setInterval(() => {
        tickTimer();
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, isLevelComplete, tickTimer]);

  return (
    <View style={styles.container}>
      <View style={styles.timer}>
        <Clock4 color="#3B82F6" size={15} strokeWidth={2} />
        <CustomText style={styles.timerText}>
          {padTime(minutes)}:{padTime(seconds)}
        </CustomText>
      </View>
      <View style={styles.moves}>
        <Zap color="#F59E0B" size={15} strokeWidth={2} />
        <CustomText style={styles.movesText}>
          <CustomText style={{ color: "gray" }}>Moves:</CustomText> {moves}
        </CustomText>
      </View>
    </View>
  );
};

export default Timer;