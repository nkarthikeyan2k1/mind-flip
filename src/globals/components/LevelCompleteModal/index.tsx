import { ImageMap } from "@/assets/ImageMap";
import Glow from "@/globals/components/Gradient";
import Modal from "@/globals/components/Modal";
import { useStyles } from "@/hooks/useStyles";
import { useRouter } from "expo-router";
import { Image, View } from "react-native";
import { CustomText } from "../CustomText";
import { styleSheet } from "../LevelCompleteModal/index.style";

interface LevelCompleteModalProps {
  visible: boolean;
  onClose: () => void;
  timeTaken: string;
  stars: number;
}

const LevelCompleteModal = ({
  visible,
  onClose,
  timeTaken,
  stars,
}: LevelCompleteModalProps) => {
  const { styles, theme } = useStyles(styleSheet);
  const route = useRouter();

  // useEffect(()=>{
  //     setTimeout(()=>{
  //         route.push('/(root)/home')
  //     }, 3)
  // }, [visible])

  if (!visible) return null;

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      shouldShowClose={true}
      modalStyle={styles.modal}
      headerComponent={() => (
        <View style={styles.imageContainer}>
          <Glow size={150} color="#336b20ff" opacity={0.5}>
            <Image
              source={ImageMap.assets.level_complete}
              style={styles.logo}
            />
          </Glow>
        </View>
      )}
      bodyComponent={() => (
        <View style={styles.modalBody}>
          <CustomText style={styles.title}>Level 2 Complete!</CustomText>
          <CustomText fontSize={10} style={styles.lable}>
            Advancing to Level 3...
          </CustomText>
        </View>
      )}
    />
  );
};

export default LevelCompleteModal;
