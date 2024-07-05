import React from "react";
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../contexts/theme_context";
import { useNavigation } from "@react-navigation/native";
import { RootStackProps } from "../../type";
import { AppButton } from "../components/shared/app_button";
import { GoogleIcon } from "../../assets/svg/google_icon";
import {
  LOGIN_POPUP_CONTENT,
  LOGIN_POPUP_TITLE,
  LOGIN_PROMPT_LOGIN,
  LOGIN_SIGNUP,
  LOGIN_WITH_GOOGLE,
} from "../../assets/constants/app_constants";
import { OrDivider } from "../components";

interface LoginPopupProps {
  visible: boolean;
  onClose: () => void;
}

export function LoginPopup({ visible, onClose }: LoginPopupProps) {
  const { textStyles, colors } = useTheme();

  const navigation = useNavigation<RootStackProps>();

  const navigateToSignup = () => {
    onClose();
    navigation.navigate("Account", { signInState: false });
  };

  const navigateToLogin = () => {
    onClose();
    navigation.navigate("Account", { signInState: true });
  };

  if (!visible) return <View></View>;
  return (
    <View
      style={{
        ...styles.blurOverlay,
        backgroundColor: colors.contrastHighMediumTransparency,
      }}
    >
      <Modal
        visible={visible}
        onRequestClose={onClose}
        transparent={true}
        animationType="slide"
      >
        <TouchableOpacity
          activeOpacity={1}
          style={styles.modalBackground}
          onPress={onClose}
        >
          <View
            style={{
              ...styles.modalContent,
              backgroundColor: colors.contrastLowest,
            }}
          >
            <Text style={textStyles.titleLarge}>{LOGIN_POPUP_TITLE}</Text>
            <View style={{ height: 12 }} />
            <Text style={{ ...textStyles.bodyMedium, textAlign: "center" }}>
              {LOGIN_POPUP_CONTENT}
            </Text>
            <View style={{ height: 24 }} />
            <AppButton
              text={LOGIN_SIGNUP}
              backgroundColor={colors.primary}
              textColor={colors.contrastLowest}
              action={navigateToSignup}
            />
            <OrDivider />
            <AppButton
              text={LOGIN_WITH_GOOGLE}
              textColor={colors.contrastLowest}
              action={onClose}
              backgroundColor={colors.tertiary}
              icon={<GoogleIcon size={22} />}
            />
            <View style={{ height: 14 }} />
            <AppButton
              text={LOGIN_PROMPT_LOGIN}
              textColor={colors.text}
              action={navigateToLogin}
              backgroundColor={colors.fadedOnPrimary}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  blurOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    position: "absolute",
    width: "100%",
    bottom: 0,
    height: 350,
  },
});
