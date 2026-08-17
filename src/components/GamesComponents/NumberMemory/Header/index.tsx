import Button from "@/globals/components/Button";
import { CustomText } from "@/globals/components/CustomText";
import Modal from "@/globals/components/Modal";
import { useStyles } from "@/hooks/useStyles";
import { Link, useNavigation } from "expo-router";
import { ChevronLeft, Import, Pause, RotateCw, StepForward  } from "lucide-react-native";
import { useState } from "react";
import { View } from "react-native";
import { styleSheet } from "./index.style";

type HeaderProps = {
  showBack: boolean;
};

const Header = ({ showBack }: HeaderProps) => {
  const { styles, theme } = useStyles(styleSheet);
  const navigaction = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
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
          onPress={() => setModalVisible(true)}
        />
      </View>

      <Modal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        modalStyle={styles.modal}
        headerComponent={() => (
          <View style={styles.modalHeader}>
            <CustomText style={{fontSize: 20, fontWeight:'bold', color:theme.primaryText}}>Paused</CustomText>
            <CustomText style={{fontSize: 12, fontWeight:'regular', color:theme.secondaryText, letterSpacing: 1.1}}>LEVEL 2 OF 5</CustomText>
          </View>
        )}
        bodyComponent={() => (
          <View style={styles.modalBody}>
            <Button 
              style={styles.modalButton} 
              title="Resume" onPress={() => setModalVisible(false)} 
              iconLeft={<StepForward color={theme.white} size={18} />}
            />
            <Button 
              style={[styles.modalButton,{
                backgroundColor:theme.white_10, 
                borderWidth:1, 
                borderColor:theme.white_20
              }]} 
              title="Restart Level" 
              onPress={() => setModalVisible(false)} 
              iconLeft={<RotateCw color={theme.white} size={18} />}
            />
          </View>
        )}
        footerComponent={() => (
          <View style={styles.modalFooter}>
            <Link href="/(root)/home" asChild>
              <CustomText style={{ fontSize: 15, fontWeight:'regular', color:theme.secondaryText, textDecorationLine:'none' ,letterSpacing: 2, }}>Exit to Menu</CustomText>
            </Link>
          </View>
        )}
      />
    </>
  );
};

export default Header;
