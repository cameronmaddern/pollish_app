import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { useCallback, useEffect } from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AppConstants } from "../../../assets/constants/app_constants";
import {
  ActivityIcon,
  EyeOpenIcon,
  HelpIcon,
  LicenseIcon,
  ProfileIcon,
  SettingsIcon,
  TopicsIcon,
  WithNotificationIcon,
} from "../../../assets/svg";
import { ProfileStackProps, type TabsStackProps } from "../../../type";
import { useAuth } from "../../contexts/auth_context";
import { useTheme } from "../../contexts/theme_context";
import { UserDetailsHeader } from "./components/user_details_header";

export function ProfileScreen() {
  const {
    openLoginPopup,
    getAuthenticatedUser,
    logoutAction,
    showLoginPopup,
    user,
  } = useAuth();

  const navigation = useNavigation<TabsStackProps>();
  const profileNavigation = useNavigation<ProfileStackProps>();
  const isFocused = useIsFocused();
  const { colors, textStyles } = useTheme();

  const { width } = Dimensions.get("window");
  const itemWidth = (width - 48) / 3;

  const checkLoggedIn = useCallback(() => {
    getAuthenticatedUser().then((user) => {
      if (user == null) {
        openLoginPopup();
      }
    });
  }, []);

  useFocusEffect(checkLoggedIn);

  useEffect(() => {
    if (!showLoginPopup && isFocused && !user) {
      navigation.navigate("Home");
    }
  }, [showLoginPopup]);

  const logoutUser = async () => {
    await logoutAction();
    navigation.navigate("Home");
  };

  const NavigationButton = ({
    title,
    icon,
  }: {
    title: string;
    icon: React.JSX.Element;
    action: () => void;
  }) => {
    return (
      <TouchableOpacity
        style={{
          ...styles.itemContainer,
          backgroundColor: colors.background,
          width: itemWidth,
        }}
      >
        {icon}
        <View style={{ height: 9 }} />
        <Text style={{ ...textStyles.bodyMedium, color: colors.text }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const ScoreNavigationButton = ({}: {}) => {
    return (
      <View
        style={{
          ...styles.itemContainer,
          width: itemWidth,
          backgroundColor: colors.primaryMuted,
        }}
      >
        <View
          style={{
            ...styles.scoreContainer,
            backgroundColor: colors.primary,
          }}
        >
          <Text
            style={{
              ...textStyles.titleExtraLarge,
              color: colors.contrastLowest,
            }}
          >
            938
          </Text>
        </View>
        <View style={{ height: 9 }} />
        <Text
          style={{ ...textStyles.bodyMedium, color: colors.contrastLowest }}
        >
          {AppConstants.PROFILE_SCORE}
        </Text>
      </View>
    );
  };

  const TextNavigationButton = ({
    title,
    count,
  }: {
    title: string;
    count: number;
  }) => {
    return (
      <View
        style={{
          ...styles.itemContainer,
          backgroundColor: colors.background,
          width: itemWidth,
          height: 54,
        }}
      >
        <Text style={{ ...textStyles.titleLarge }}>{count}</Text>
        <Text style={{ ...textStyles.labelSmall, color: colors.fadedText }}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={textStyles.appName}>
        <Text style={{ color: colors.primary }}>
          {AppConstants.APP_NAME_P1}
        </Text>
        <Text>{AppConstants.APP_NAME_P2}</Text>
      </Text>
      <View style={{ height: 15 }} />
      {/* TODO: Remove placeholder data for bio and profile pic */}
      <UserDetailsHeader
        username={user ? user.username : AppConstants.PROFILE_NO_USER}
        profilePic={
          "https://cdn.openart.ai/stable_diffusion/2a2e915092e222b3a1e00970c4bc6833b30a4e0d_2000x2000.webp"
        }
        bio={"Basketball, Running, Chess"}
      />
      {/* TODO: Implement real values and navigation to sub screens */}
      <View style={{ flexDirection: "row", marginTop: 24 }}>
        <TextNavigationButton
          title={AppConstants.PROFILE_FOLLOWERS}
          count={3210}
        />
        <View style={{ width: 10 }} />
        <TextNavigationButton
          title={AppConstants.PROFILE_FOLLOWING}
          count={938}
        />
        <View style={{ width: 10 }} />
        <TextNavigationButton title={AppConstants.PROFILE_POLLS} count={32} />
      </View>
      <View style={{ height: 18 }} />
      <View style={{ ...styles.divider, backgroundColor: colors.background }} />
      {/* TODO: Implement navigation to unimplemented pages */}
      <View style={styles.navigationButtonRow}>
        <NavigationButton
          // TODO: This is the logout button for now but will be replaced when settings page is implemented
          action={() => logoutUser()}
          icon={<TopicsIcon size={28} color={colors.text} strokeWidth={1.5} />}
          title={AppConstants.PROFILE_TOPICS}
        />
        <View style={{ width: 10 }} />
        <NavigationButton
          action={() => /* Unimplemented */ {}}
          icon={<EyeOpenIcon size={28} color={colors.text} />}
          title={AppConstants.PROFILE_WATCHING}
        />
        <View style={{ width: 10 }} />
        <NavigationButton
          action={() => /* Unimplemented */ {}}
          icon={<ActivityIcon size={28} color={colors.text} />}
          title={AppConstants.PROFILE_ACTIVITY}
        />
      </View>
      <View style={styles.navigationButtonRow}>
        <NavigationButton
          action={() => /* Unimplemented */ {}}
          icon={<ProfileIcon size={28} color={colors.text} strokeWidth={1.5} />}
          title={AppConstants.PROFILE_PROFILE}
        />
        <View style={{ width: 10 }} />
        <ScoreNavigationButton />
        <View style={{ width: 10 }} />
        <NavigationButton
          action={() => /* Unimplemented */ {}}
          icon={<WithNotificationIcon size={28} color={colors.text} />}
          title={AppConstants.PROFILE_NOTIFICATIONS}
        />
      </View>
      <View style={styles.navigationButtonRow}>
        <NavigationButton
          action={() => /* Unimplemented */ {}}
          icon={<HelpIcon size={28} color={colors.text} />}
          title={AppConstants.PROFILE_HELP}
        />
        <View style={{ width: 10 }} />
        <NavigationButton
          action={() => /* Unimplemented */ {}}
          icon={<LicenseIcon size={28} color={colors.text} />}
          title={AppConstants.PROFILE_LICENSE}
        />
        <View style={{ width: 10 }} />
        <NavigationButton
          action={() => /* Unimplemented */ {}}
          icon={<SettingsIcon size={28} color={colors.text} />}
          title={AppConstants.PROFILE_SETTINGS}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scoreContainer: {
    width: 85,
    height: 28,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    height: 10,
    width: "100%",
    marginBottom: 16,
  },
  navigationButtonRow: {
    flexDirection: "row",
    marginTop: 8,
  },
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    borderRadius: 20,
  },
});
