import { View, Alert, StyleSheet } from "react-native";
import { useTheme } from "../contexts/theme_context";
import { useState } from "react";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { RootStackParamList, RootStackProps } from "../../type";
import { useAuth } from "../contexts/auth_context";
import { AppButton } from "../components/shared/app_button";
import {
  LOGIN_EMAIL_PLACEHOLDER,
  LOGIN_INVALID_POPUP_DISMISS,
  LOGIN_INVALID_TITLE,
  LOGIN_LOGIN,
  LOGIN_PASSWORD_PLACEHOLDER,
  LOGIN_PROMPT_LOGIN,
  LOGIN_PROMPT_SIGNUP,
  LOGIN_SIGNUP,
  LOGIN_USERNAME_PLACEHOLDER,
  LOGIN_WITH_GOOGLE,
} from "../../assets/constants/app_constants";
import { GoogleIcon } from "../../assets/svg/google_icon";
import { AppTextInput, OrDivider } from "../components";

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
          LOGIN_INVALID_TITLE,
          `${res.message}`,
          [{ text: LOGIN_INVALID_POPUP_DISMISS }],
          {
            cancelable: false,
          }
        );
      }
    } else {
      setSignInState(false);
    }
  };

  //TODO: Update to navigate to verify if the user is not verified
  const callSignIn = async () => {
    if (signInState) {
      const res = await loginAction({ username, password });
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
    }
    setSignInState(true);
  };

  const AppActionButtons = {
    SIGNUP: (
      <AppButton
        action={callSignUp}
        text={signInState ? LOGIN_PROMPT_SIGNUP : LOGIN_SIGNUP}
        backgroundColor={signInState ? colors.fadedOnPrimary : colors.primary}
        textColor={signInState ? colors.text : colors.contrastLowest}
      />
    ),
    SIGNIN: (
      <AppButton
        action={callSignIn}
        text={signInState ? LOGIN_LOGIN : LOGIN_PROMPT_LOGIN}
        backgroundColor={signInState ? colors.primary : colors.fadedOnPrimary}
        textColor={signInState ? colors.contrastLowest : colors.text}
      />
    ),
    WITH_GOOGLE: (
      <AppButton
        text={LOGIN_WITH_GOOGLE}
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
        placeholder={LOGIN_USERNAME_PLACEHOLDER}
        valueSetter={setUsername}
      />

      {!signInState && (
        <>
          <View style={{ height: 18 }} />
          <AppTextInput
            placeholder={LOGIN_EMAIL_PLACEHOLDER}
            valueSetter={setEmail}
          />
        </>
      )}
      <View style={{ height: 18 }} />
      <AppTextInput
        placeholder={LOGIN_PASSWORD_PLACEHOLDER}
        valueSetter={setPassword}
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
