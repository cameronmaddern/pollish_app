import { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "../../../contexts/theme_context";
import { PollOptionState, TextOptionData } from "../entities";

interface PollOptionProps {
  data: TextOptionData;
  number: string;
  state: PollOptionState;
  updateOption: (option: string) => void;
}

export function PollTextOption({
  data,
  number,
  state,
  updateOption,
}: PollOptionProps) {
  const { textStyles, colors } = useTheme();

  const fillAnim = useRef(new Animated.Value(0)).current;
  const percentageOfVote = (data.numberOfVotes / data.totalVotes) * 100;

  const handlePress = async () => {
    updateOption(data.id);
  };

  useEffect(() => {
    fillAnim.setValue(0);
    Animated.timing(fillAnim, {
      toValue: percentageOfVote,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [state]);

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
          {data.title}
        </Text>
        <View style={{ flex: 1 }} />
        <Text
          style={{
            ...textStyles.bodyMedium,
            color: percentageColor,
          }}
        >
          {percentageOfVote}%
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
