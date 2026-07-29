import Button from "@/globals/components/Button";
import { useStyles } from "@/hooks/useStyles";
import { useNavigation } from "expo-router";
import { ChevronLeft, Pause } from "lucide-react-native";
import { Text, View } from "react-native";
import { styleSheet } from "./index.style";

type HeaderProps = {
  showBack: boolean;
};

const Header = ({ showBack }: HeaderProps) => {
  const styles = useStyles(styleSheet);
  const navigaction = useNavigation();
  return (
    <View style={styles.container}>
      {/* Left */}
      {showBack && (
        <Button
          iconLeft={<ChevronLeft color="white" size={18} />}
          styles={styles.button}
          onPress={() => navigaction.canGoBack() && navigaction.goBack()}
        />
      )}

      {/* Middle */}
      <View>
        <Text style={styles.title}>MINDFLIP</Text>
        <Text style={styles.subtitle}>Level 1 of 5</Text>
      </View>

      {/* Right */}
      <Button
        iconRight={<Pause color="white" size={18} />}
        styles={styles.button}
        onPress={() => {}}
      />
    </View>
  );
};

export default Header;
