import React from "react";
import { Modal as RNModal, View, Pressable, StyleProp, ViewStyle } from "react-native";
import { X } from "lucide-react-native";
import { styleSheet } from "./index.style";
import { useStyles } from "@/hooks/useStyles";

interface ModalProps {
  visible?: boolean;
  onClose?: () => void;
  shouldShowClose?: boolean;
  headerComponent?: () => React.ReactNode;
  bodyComponent?: () => React.ReactNode;
  footerComponent?: () => React.ReactNode;
  modalStyle?: StyleProp<ViewStyle>;
  backdropOpacity?: number;
}

const Modal = ({
  visible = false,
  onClose,
  shouldShowClose = false,
  headerComponent,
  bodyComponent,
  footerComponent,
  modalStyle,
  backdropOpacity,
}: ModalProps) => {
  const styles = useStyles(styleSheet);

  return (
    <RNModal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        {shouldShowClose && onClose && (
          <Pressable style={styles.closeButton} onPress={onClose}>
            <X size={18} color={styles.theme.secondaryText} />
          </Pressable>
        )}
        <View style={[styles.container, modalStyle]}>
          {headerComponent && <View style={styles.header}>{headerComponent()}</View>}

          {bodyComponent && <View style={styles.body}>{bodyComponent()}</View>}

          {footerComponent && <View style={styles.footer}>{footerComponent()}</View>}
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;
