import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from "../../contexts/theme_context";

export function LoadingOverlay() {
  const { colors } = useTheme();

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
