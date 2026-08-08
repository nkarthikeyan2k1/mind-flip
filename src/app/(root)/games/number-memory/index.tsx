import Timer from "@/components/GamesComponents/NumberMemory/Timer";
import Button from "@/globals/components/Button";
import { useStyles } from "@/hooks/useStyles";
import { RotateCcw, Vibrate, Volume1 } from "lucide-react-native";
import { View } from "react-native";
import { styleSheet } from "./index.style";

const NumberMemory = () => {
  const { styles, theme } = useStyles(styleSheet);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Timer />
      </View>
      <View style={styles.levelIndicationBar}>
            <View style={styles.levelIndicationDot}></View>
            <View style={styles.levelIndicationDot}></View>
            <View style={styles.levelIndicationDot}></View>
            <View style={styles.levelIndicationDot}></View>
            <View style={styles.levelIndicationDot}></View>
        </View>
      <View style={{ flex: 5 }}></View>
      <View style={styles.buttonContainer}>
        <Button
          title="Restart Level"
          onPress={() => {}}
          styles={{ ...styles.button, marginBottom: 10}}
          textStyle={{ color: theme.primary }}
          iconLeft={<RotateCcw color={theme.primary} size={18} />}
        />
        <View style={styles.buttonFeature}>
          <Button
            title="Sound"
            style={{ ...styles.button, height: 40 }}
            textStyle={{ color: theme.primary, fontSize: 12 }}
            onPress={() => {}}
            iconLeft={<Volume1 color={theme.primary} size={18} />}
          />
          <Button
            title="Haptic"
            style={{ ...styles.button, height: 40 }}
            textStyle={{ color: theme.primary, fontSize: 12 }}
            onPress={() => {}}
            iconLeft={<Vibrate color={theme.primary} size={18} />}
          />
        </View>
      </View>
    </View>
  );
};

export default NumberMemory;
