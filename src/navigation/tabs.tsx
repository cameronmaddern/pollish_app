import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  type ColorValue,
} from "react-native";
import { AppConstants } from "../../assets/constants/app_constants";
import {
  BackIcon,
  CreateIcon,
  HomeIcon,
  ProfileIcon,
  SearchIcon,
  TagsIcon,
} from "../../assets/svg";
import type { TabsStackParamList } from "../../type";
import { useAuth } from "../contexts/auth_context";
import {
  CreatePollModalProvider,
  useCreatePollModal,
} from "../contexts/create_poll_modal_context";
import { MoreModalProvider } from "../contexts/more_modal_context";
import { useTheme } from "../contexts/theme_context";
import { MoreBottomSheet } from "../modals";
import { CreatePollPopup } from "../modals/create_poll_popup";
import {
  CreateScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen,
  TagsScreen,
} from "../screens";

const Tab = createBottomTabNavigator<TabsStackParamList>();

//TODO POL-14: Remove nested providers when modals are changed to bottom sheets
export default function Tabs() {
  return (
    <CreatePollModalProvider>
      <TabsInternal />
      <CreatePollPopup />
    </CreatePollModalProvider>
  );
}

function TabsInternal() {
  const { colors } = useTheme();
  const { openModal } = useCreatePollModal();
  const { user, openLoginPopup } = useAuth();

  function checkAuthForCreatePopup() {
    if (user) {
      openModal();
    } else {
      openLoginPopup();
    }
  }

  const getTabBarIcon = (
    routeName: string,
    color: ColorValue,
    size: number
  ) => {
    switch (routeName) {
      case AppConstants.HOME_TAB:
        return <HomeIcon color={color} size={size} />;
      case AppConstants.SEARCH_TAB:
        return <SearchIcon color={color} size={size} />;
      case AppConstants.TAGS_TAB:
        return <TagsIcon color={color} size={size} />;
      case AppConstants.PROFILE_TAB:
        return <ProfileIcon color={color} size={size} />;
      case AppConstants.CREATE_TAB:
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
    //TODO: Moving it here is not a long term solution, but it will do for now
    <MoreModalProvider>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          tabBarIcon: ({ color, size }) =>
            getTabBarIcon(route.name, color, size),
          tabBarShowLabel: false,
          tabBarInactiveTintColor: colors.textMuted,
          tabBarActiveTintColor: colors.primary,
          headerShown: false,
          tabBarStyle: {
            ...styles.tabBarStyle,
            borderColor: colors.background,
            borderTopColor: colors.background,
            display:
              navigation.getState().routes[navigation.getState().index].name ===
              AppConstants.CREATE_TAB
                ? "none"
                : "flex",
          },
        })}
      >
        <Tab.Screen name={AppConstants.HOME_TAB} component={HomeScreen} />
        <Tab.Screen name={AppConstants.SEARCH_TAB} component={SearchScreen} />
        <Tab.Screen
          name={AppConstants.CREATE_TAB}
          component={CreateScreen}
          options={({ navigation }) => ({
            headerLeft: () => (
              <TouchableOpacity
                style={{ paddingLeft: 10 }}
                onPress={() => navigation.goBack()}
              >
                <BackIcon size={28} color={colors.contrastHigh} />
              </TouchableOpacity>
            ),
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                onPress={checkAuthForCreatePopup}
              ></TouchableOpacity>
            ),
          })}
        />
        <Tab.Screen name={AppConstants.TAGS_TAB} component={TagsScreen} />
        <Tab.Screen name={AppConstants.PROFILE_TAB} component={ProfileScreen} />
      </Tab.Navigator>
      <MoreBottomSheet />
    </MoreModalProvider>
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
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 1,
    borderTopWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
