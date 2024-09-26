import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppConstants } from "../../../assets/constants/app_constants";
import { useTheme } from "../../contexts/theme_context";

export function OrDivider() {
  const { colors, textStyles } = useTheme();
  return (
    <>
      <View style={{ height: 20 }} />
      <View style={styles.dividerContainer}>
        <View
          style={{
            ...styles.divider,
            backgroundColor: colors.fadedOnPrimary,
          }}
        />
        <View style={{ width: 15 }} />
        <Text
          style={{
            ...textStyles.bodyMedium,
            color: colors.lightTextOnPrimary,
            textAlign: "center",
            includeFontPadding: false,
          }}
        >
          {AppConstants.LOGIN_OR}
        </Text>
        <View style={{ width: 15 }} />
        <View
          style={{
            ...styles.divider,
            backgroundColor: colors.fadedOnPrimary,
          }}
        />
      </View>
      <View style={{ height: 20 }} />
    </>
  );
}

const styles = StyleSheet.create({
  dividerContainer: {
    height: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    height: 2,
    flex: 1,
    borderRadius: 10,
  },
});
