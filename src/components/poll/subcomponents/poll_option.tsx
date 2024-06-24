import { useEffect, useRef, useState } from "react";
import {
  Animated,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from "react-native";
import { useTheme } from "../../../contexts/theme_context";
import { PollOptionState } from "../entities";

interface PollOptionProps {
  number: string;
  title: string;
  state: PollOptionState;
  percentageOfVote: number;
  optionSelected: string;
  setOptionSelected: (option: string) => void;
}

export function PollOption({
  number,
  title,
  state,
  percentageOfVote,
  optionSelected,
  setOptionSelected,
}: PollOptionProps) {
  const { textStyles, colors } = useTheme();

  const fillAnim = useRef(new Animated.Value(0)).current;
  const [percentage, setPercentage] = useState(0);

  const handlePress = () => {
    setOptionSelected(title);
  };

  useEffect(() => {
    fillAnim.setValue(0);
    Animated.timing(fillAnim, {
      toValue: percentageOfVote,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [optionSelected]);

  useEffect(() => {
    const listener = fillAnim.addListener(({ value }) => {
      setPercentage(Math.round(value));
    });
    return () => {
      fillAnim.removeListener(listener);
    };
  }, [fillAnim]);

  const fillWidth = fillAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const containerBackgroundColor =
    state === PollOptionState.VOTED_SELECTED
      ? colors.contrastMedium
      : colors.contrastLowest;

  const barFillColor =
    state === PollOptionState.VOTED_UNSELECTED
      ? colors.fadedOnPrimary
      : colors.contrastHighest;

  const textColor =
    state === PollOptionState.VOTED_SELECTED
      ? colors.contrastLowest
      : colors.contrastHighest;

  const percentageColor =
    state === PollOptionState.VOTED_UNSELECTED
      ? colors.lightTextOnPrimary
      : colors.contrastLowest;

  const circleBackground =
    state === PollOptionState.VOTED_SELECTED
      ? colors.contrastHigh
      : "transparent";

  const optionBorderColor =
    state === PollOptionState.VOTED_SELECTED
      ? colors.contrastHighest
      : colors.lightTextOnPrimary;

  const barFillWidth = state === PollOptionState.UNSELECTED ? 0 : fillWidth;

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        ...styles.touchableContainer,
        borderColor: optionBorderColor,
        backgroundColor: containerBackgroundColor,
      }}
    >
      <Animated.View
        style={{
          ...styles.barFill,
          width: barFillWidth,
          backgroundColor: barFillColor,
        }}
      />
      <View style={styles.contentContainer}>
        <View
          style={{
            ...styles.numberContainer,
            backgroundColor: circleBackground,
          }}
        >
          <Text
            style={{
              ...textStyles.labelLargeProminent,
              color: textColor,
            }}
          >
            {number}
          </Text>
        </View>
        <View style={{ width: 8 }} />
        <Text
          style={{
            ...textStyles.bodyMedium,
            color: textColor,
          }}
        >
          {title}
        </Text>
        <View style={{ flex: 1 }} />
        <Text
          style={{
            ...textStyles.bodyMedium,
            color: percentageColor,
          }}
        >
          {percentage}%
        </Text>
        <View style={{ width: 12 }} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableContainer: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 20,
    borderWidth: 1,
  },
  contentContainer: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  numberContainer: {
    borderRadius: 1000,
    borderWidth: 1,
    width: 36,
    height: 36,
    borderColor: "#8B8B8B",
    alignItems: "center",
    justifyContent: "center",
  },
  barFill: {
    height: "100%",
    width: "100%",
    position: "absolute",
    borderRadius: 20,
  },
});
