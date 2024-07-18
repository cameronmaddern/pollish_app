import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  LOGIN_POPUP_CONTENT,
  LOGIN_POPUP_TITLE,
  LOGIN_PROMPT_LOGIN,
  LOGIN_SIGNUP,
  LOGIN_WITH_GOOGLE,
} from "../../assets/constants/app_constants";
import { GoogleIcon } from "../../assets/svg/google_icon";
import type { RootStackProps } from "../../type";
import { OrDivider } from "../components/shared";
import { AppButton } from "../components/shared/app_button";
import { useTheme } from "../contexts/theme_context";

interface LoginPopupProps {
  visible: boolean;
  onClose: () => void;
}

export function LoginPopup({ visible, onClose }: LoginPopupProps) {
  const { textStyles, colors } = useTheme();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = [375];

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
      <TouchableOpacity
        onPress={onClose}
        style={styles.closeAreaContainer}
        activeOpacity={1}
      />

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        onClose={onClose}
      >
        <BottomSheetView>
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
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  blurOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 5,
  },
  closeAreaContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    zIndex: 10,
    padding: 20,
    paddingTop: 10,
    alignItems: "center",
  },
});
