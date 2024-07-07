import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { TabsStackProps } from "../../type";
import { AppButton } from "../components";
import { useAuth } from "../contexts/auth_context";
import { useTheme } from "../contexts/theme_context";

export function ProfileScreen() {
  const { openLoginPopup, isUserSignedIn, logoutAction, showLoginPopup } =
    useAuth();

  const navigation = useNavigation<TabsStackProps>();
  const isFocused = useIsFocused();
  const { colors } = useTheme();

  const checkLoggedIn = useCallback(() => {
    isUserSignedIn().then((isSignedIn) => {
      if (!isSignedIn) {
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
        text="Logout"
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
