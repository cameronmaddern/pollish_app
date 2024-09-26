import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  Account: { signInState: boolean };
  Main: undefined;
  Verify: undefined;
};

export type RootScreenNavigationProp =
  NativeStackScreenProps<RootStackParamList>;

export type RootStackProps = NativeStackNavigationProp<RootStackParamList>;

export type TabsStackParamList = {
  Home: undefined;
  Search: undefined;
  Create: undefined;
  Tags: undefined;
  Profile: undefined;
};

export type TabsStackNavigationPop = NativeStackScreenProps<TabsStackParamList>;

export type TabsStackProps = NativeStackNavigationProp<TabsStackParamList>;

export type ProfileStackParamList = {
  Base: undefined;
};

export type ProfileStackNavigationProp =
  NativeStackScreenProps<ProfileStackParamList>;

export type ProfileStackProps =
  NativeStackNavigationProp<ProfileStackParamList>;
