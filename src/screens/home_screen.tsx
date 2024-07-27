import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as constants from "../../assets/constants/app_constants";
import { NotificationIcon } from "../../assets/svg";
import { ImagePoll, TextPoll } from "../components";
import type { ImagePollData, TextPollData } from "../components/poll/entities";
import { useAuth } from "../contexts/auth_context";
import { HomeProvider, useHome } from "../contexts/home_context";
import { useTheme } from "../contexts/theme_context";

export function HomeScreen() {
  return (
    <HomeProvider>
      <HomeScreenInternal />
    </HomeProvider>
  );
}

export function HomeScreenInternal() {
  const { colors, textStyles } = useTheme();
  const insets = useSafeAreaInsets();
  const tabBarHeight = useBottomTabBarHeight();
  const [polls, setPolls] = useState<(TextPollData | ImagePollData)[]>([]);
  const { findPolls } = useHome();
  const { user, setUser, getAuthenticatedUser } = useAuth();

  const locatePolls = async () => {
    const foundPolls = await findPolls();
    setPolls(foundPolls);
  };

  const checkLoggedIn = useCallback(async () => {
    const user = await getAuthenticatedUser();
    setUser(user);
  }, []);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  useEffect(() => {
    locatePolls();
  }, [user]);

  useFocusEffect(() => {
    checkLoggedIn();
  });

  return (
    <View
      style={{
        ...styles.genericContainer,
        backgroundColor: colors.background,
      }}
    >
      <View
        style={{
          ...styles.headerContainer,
          paddingTop: insets.top,
          backgroundColor: colors.contrastLowest,
        }}
      >
        <Text style={textStyles.appName}>
          <Text style={{ color: colors.primary }}>{constants.APP_NAME_P1}</Text>
          <Text>{constants.APP_NAME_P2}</Text>
        </Text>
        <View style={{ flex: 1 }} />
        <NotificationIcon color={colors.text} size={28} />
      </View>

      <ScrollView>
        {
          //TODO change View boxes to padding/margin
        }
        <View style={{ height: 9 }} />
        {polls.length > 0 &&
          polls.map((poll, index) =>
            //TODO: come up with a better way of determining if it's a text or image poll
            "image" in poll ? (
              <View key={index}>
                <TextPoll pollData={poll as TextPollData} />
                <View style={{ height: 9 }} />
              </View>
            ) : (
              <View key={index}>
                <ImagePoll pollData={poll as ImagePollData} />
                <View style={{ height: 9 }} />
              </View>
            )
          )}
        <View style={{ height: 10 }} />
      </ScrollView>

      <View
        style={{
          height: tabBarHeight - 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  genericContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 10,
    alignItems: "center",
  },
});
