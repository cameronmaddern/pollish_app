import { TextPoll } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { useTheme } from "../contexts/theme_context";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { NotificationIcon } from "../../assets/svg";
import { useEffect, useState } from "react";
import { HomeProvider, useHome } from "../contexts/home_context";
import { TextPollData } from "../components/poll/entities";
import * as constants from "../../assets/constants/app_constants";

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
  const [polls, setPolls] = useState<TextPollData[]>([]);
  const { findPolls } = useHome();

  const locatePolls = async () => {
    const foundPolls = await findPolls();
    setPolls(foundPolls);
  };

  useEffect(() => {
    locatePolls();
  }, []);

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
        <View style={{ height: 9 }} />
        {polls.length > 0 &&
          polls.map((poll, index) => (
            <View key={index}>
              <TextPoll pollData={poll} />
              <View style={{ height: 9 }} />
            </View>
          ))}
        <View style={{ height: 10 }} />
      </ScrollView>
      <View
        style={{
          ...styles.genericContainer,
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
