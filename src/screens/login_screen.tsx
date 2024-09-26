import { useNavigation, type RouteProp } from "@react-navigation/native";
import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { AppConstants } from "../../assets/constants/app_constants";
import { GoogleIcon } from "../../assets/svg/google_icon";
import type { RootStackParamList, RootStackProps } from "../../type";
import { AppTextInput, OrDivider } from "../components/shared";
import { AppButton } from "../components/shared/app_button";
import { useAuth } from "../contexts/auth_context";
import { useTheme } from "../contexts/theme_context";

interface LoginScreenProps {
  route: RouteProp<RootStackParamList, "Account">;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ route }) => {
  const { colors } = useTheme();
  const { signupAction, loginAction } = useAuth();
  const navigation = useNavigation<RootStackProps>();

  const [signInState, setSignInState] = useState(route.params.signInState);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const callSignUp = async () => {
    if (!signInState) {
      const res = await signupAction({ username, password, email });
      if (res.success) {
        navigation.navigate("Verify");
      } else {
        Alert.alert(
          AppConstants.LOGIN_INVALID_TITLE,
          `${res.message}`,
          [{ text: AppConstants.LOGIN_INVALID_POPUP_DISMISS }],
          {
            cancelable: false,
          }
        );
      }
    } else {
      setSignInState(false);
    }
  };

  const callSignIn = async () => {
    if (signInState) {
      const res = await loginAction({ username, password });
      if (res.success) {
        if (res.requiresVerification) {
          navigation.navigate("Verify");
        } else {
          navigation.navigate("Main");
        }
      } else {
        Alert.alert(
          AppConstants.LOGIN_INVALID_TITLE,
          `${res.message}`,
          [{ text: AppConstants.LOGIN_INVALID_POPUP_DISMISS }],
          {
            cancelable: false,
          }
        );
      }
    }
    setSignInState(true);
  };

  const AppActionButtons = {
    SIGNUP: (
      <AppButton
        action={callSignUp}
        text={
          signInState
            ? AppConstants.LOGIN_PROMPT_SIGNUP
            : AppConstants.LOGIN_SIGNUP
        }
        backgroundColor={signInState ? colors.fadedOnPrimary : colors.primary}
        textColor={signInState ? colors.text : colors.contrastLowest}
      />
    ),
    SIGNIN: (
      <AppButton
        action={callSignIn}
        text={
          signInState
            ? AppConstants.LOGIN_LOGIN
            : AppConstants.LOGIN_PROMPT_LOGIN
        }
        backgroundColor={signInState ? colors.primary : colors.fadedOnPrimary}
        textColor={signInState ? colors.contrastLowest : colors.text}
      />
    ),
    WITH_GOOGLE: (
      <AppButton
        text={AppConstants.LOGIN_WITH_GOOGLE}
        textColor={colors.contrastLowest}
        action={() => {}}
        backgroundColor={colors.tertiary}
        icon={<GoogleIcon size={22} />}
      />
    ),
  };

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: colors.contrastLowest,
      }}
    >
      <AppTextInput
        placeholder={AppConstants.LOGIN_USERNAME_PLACEHOLDER}
        valueSetter={setUsername}
        value={username}
      />

      {!signInState && (
        <>
          <View style={{ height: 18 }} />
          <AppTextInput
            placeholder={AppConstants.LOGIN_EMAIL_PLACEHOLDER}
            valueSetter={setEmail}
            value={email}
          />
        </>
      )}
      <View style={{ height: 18 }} />
      <AppTextInput
        placeholder={AppConstants.LOGIN_PASSWORD_PLACEHOLDER}
        valueSetter={setPassword}
        value={password}
        isSecure
      />
      <View style={{ height: 24 }} />
      {signInState ? AppActionButtons.SIGNIN : AppActionButtons.SIGNUP}
      <OrDivider />
      {AppActionButtons.WITH_GOOGLE}
      <View style={{ height: 14 }} />
      {signInState ? AppActionButtons.SIGNUP : AppActionButtons.SIGNIN}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 16,
    paddingTop: 27,
  },
});
