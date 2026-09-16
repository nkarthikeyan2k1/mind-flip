import Button from "@/globals/components/Button";
import { CustomText } from "@/globals/components/CustomText";
import PauseModal from "@/globals/components/PauseModal";
import { useStyles } from "@/hooks/useStyles";
import { useNavigation } from "expo-router";
import { ChevronLeft, Pause } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";
import { styleSheet } from "./index.style";

type HeaderProps = {
  showBack: boolean;
};

const Header = ({ showBack }: HeaderProps) => {
  const { styles, theme } = useStyles(styleSheet);
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

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
        <View>
          <CustomText style={styles.title}>MINDFLIP</CustomText>
          <CustomText style={styles.subtitle}>Level 1 of 5</CustomText>
        </View>

        {/* Right */}
        <Button
          iconRight={<Pause color={theme.secondaryText} size={18} />}
          styles={styles.button}
          onPress={() => setModalVisible(true)}
        />
      </View>

      <PauseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
};

export default Header;

