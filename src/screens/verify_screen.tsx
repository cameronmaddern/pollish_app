import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Alert } from "react-native";
import { RootStackProps } from "../../type";
import { useState } from "react";
import { useTheme } from "../contexts/theme_context";
import { useAuth } from "../contexts/auth_context";
import {
  LOGIN_INVALID_POPUP_DISMISS,
  LOGIN_INVALID_TITLE,
  LOGIN_VERIFY,
  LOGIN_VERIFY_PLACEHOLDER,
} from "../../assets/constants/app_constants";
import { AppButton, AppTextInput } from "../components";

//TODO: Implement a mechanism for resending the verification code
export function VerifyScreen() {
  const { colors } = useTheme();
  const { confirmSignupAction } = useAuth();
  const navigation = useNavigation<RootStackProps>();

  const [confirmationCode, setConfirmationCode] = useState("");

  const completeSignUp = async () => {
    const res = await confirmSignupAction({
      confirmationCode,
    });

    if (res.success) {
      navigation.navigate("Main");
    } else {
      Alert.alert(
        LOGIN_INVALID_TITLE,
        `${res.message}`,
        [{ text: LOGIN_INVALID_POPUP_DISMISS }],
        {
          cancelable: false,
        }
      );
    }
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.contrastLowest,
      }}
    >
      <AppTextInput
        placeholder={LOGIN_VERIFY_PLACEHOLDER}
        valueSetter={setConfirmationCode}
      />
      <View style={{ height: 24 }} />
      <AppButton
        text={LOGIN_VERIFY}
        action={completeSignUp}
        backgroundColor={colors.primary}
        textColor={colors.contrastLowest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 16,
    paddingTop: 27,
  },
});
