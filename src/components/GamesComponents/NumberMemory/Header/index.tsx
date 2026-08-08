import Button from "@/globals/components/Button";
import { useStyles } from "@/hooks/useStyles";
import { useNavigation } from "expo-router";
import { ChevronLeft, Pause } from "lucide-react-native";
import { View } from "react-native";
import { CustomText } from "@/globals/components/CustomText";
import { styleSheet } from "./index.style";

type HeaderProps = {
  showBack: boolean;
};

const Header = ({ showBack }: HeaderProps) => {
  const {styles, theme} = useStyles(styleSheet);
  const navigaction = useNavigation();
  return (
    <View style={styles.container}>
      {/* Left */}
      {showBack && (
        <Button
          iconLeft={<ChevronLeft color={theme.secondaryText} size={18} />}
          styles={styles.button}
          onPress={() => navigaction.canGoBack() && navigaction.goBack()}
        />
      )}

      {/* Middle */}
      <View>
        <CustomText style={styles.title}>MINDFLIP</CustomText>
        <CustomText style={styles.subtitle}>Level 1 of 5</CustomText>
      </View>

      {/* Right */}
      <Button
        iconRight={<Pause color={theme.secondaryText} size={18} />}
        styles={styles.button}
        onPress={() => {}}
      />
    </View>
  );
};

export default Header;
