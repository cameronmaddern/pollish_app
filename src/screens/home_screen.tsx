import { useTheme } from "@react-navigation/native";
import { View } from "react-native";

export function HomeScreen() {
  const { colors } = useTheme();
  return <View style={{ flex: 1, backgroundColor: colors.background }}></View>;
}
