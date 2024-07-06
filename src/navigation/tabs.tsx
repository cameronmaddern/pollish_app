import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ColorValue, View, StyleSheet } from "react-native";
import {
  CreateIcon,
  HomeIcon,
  SearchIcon,
  TagsIcon,
  ProfileIcon,
} from "../../assets/svg";
import {
  TagsScreen,
  ProfileScreen,
  CreateScreen,
  HomeScreen,
  SearchScreen,
} from "../screens";
import * as Constants from "../../assets/constants/app_constants";
import { useTheme } from "../contexts/theme_context";
import { TabsStackParamList } from "../../type";

const Tab = createBottomTabNavigator<TabsStackParamList>();

export default function Tabs() {
  const { colors } = useTheme();

  const getTabBarIcon = (
    routeName: string,
    color: ColorValue,
    size: number
  ) => {
    switch (routeName) {
      case Constants.HOME_TAB:
        return <HomeIcon color={color} size={size} />;
      case Constants.SEARCH_TAB:
        return <SearchIcon color={color} size={size} />;
      case Constants.TAGS_TAB:
        return <TagsIcon color={color} size={size} />;
      case Constants.PROFILE_TAB:
        return <ProfileIcon color={color} size={size} />;
      case Constants.CREATE_TAB:
        return (
          <View
            style={[
              styles.createButtonOuter,
              { backgroundColor: colors.background },
            ]}
          >
            <View
              style={[
                styles.createButtonInner,
                { backgroundColor: colors.primary },
              ]}
            >
              <CreateIcon size={28} />
            </View>
          </View>
        );
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarStyle: {
          ...styles.tabBarStyle,
          borderColor: colors.background,
          borderTopColor: colors.background,
        },
      })}
    >
      <Tab.Screen name={Constants.HOME_TAB} component={HomeScreen} />
      <Tab.Screen name={Constants.SEARCH_TAB} component={SearchScreen} />
      <Tab.Screen name={Constants.CREATE_TAB} component={CreateScreen} />
      <Tab.Screen name={Constants.TAGS_TAB} component={TagsScreen} />
      <Tab.Screen name={Constants.PROFILE_TAB} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  createButtonOuter: {
    width: 60,
    height: 60,
    marginBottom: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
  },
  createButtonInner: {
    width: 50,
    height: 50,
    borderRadius: 1000,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarStyle: {
    position: "absolute",
    borderRadius: 20,
    borderWidth: 1,
    borderTopWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
