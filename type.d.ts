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
