import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { generateClient } from "aws-amplify/api";
import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { AppConstants } from "../../assets/constants/app_constants";
import type { TabsStackProps } from "../../type";
import { AppButton } from "../components";
import { useAuth } from "../contexts/auth_context";
import { useTheme } from "../contexts/theme_context";

const client = generateClient();

export function ProfileScreen() {
  const { openLoginPopup, getAuthenticatedUser, logoutAction, showLoginPopup } =
    useAuth();

  const navigation = useNavigation<TabsStackProps>();
  const isFocused = useIsFocused();
  const { colors } = useTheme();

  const checkLoggedIn = useCallback(() => {
    getAuthenticatedUser().then((user) => {
      if (user == null) {
        openLoginPopup();
      }
    });
  }, []);

  useFocusEffect(checkLoggedIn);

  useEffect(() => {
    if (!showLoginPopup && isFocused) {
      navigation.navigate("Home");
    }
  }, [showLoginPopup]);

  const logoutUser = async () => {
    await logoutAction();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <AppButton
        text={AppConstants.PROFILE_LOGOUT}
        action={logoutUser}
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
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
