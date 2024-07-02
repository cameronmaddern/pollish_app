import { useEffect, useRef } from "react";
import {
  Animated,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { useTheme } from "../../../contexts/theme_context";
import { ImageOptionData, PollOptionState } from "../entities";

interface PollImageOptionProps {
  data: ImageOptionData;
  state: PollOptionState;
  updateOption: (option: string) => void;
}

export function PollImageOption({
  data,
  state,
  updateOption,
}: PollImageOptionProps) {
  const { textStyles, colors } = useTheme();

  const fillAnim = useRef(new Animated.Value(0)).current;
  const percentageOfVote = (data.numberOfVotes / data.totalVotes) * 100;

  const handlePress = () => {
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

  const imageBorderColor =
    state === PollOptionState.VOTED_SELECTED
      ? colors.contrastHighest
      : colors.contrastMediumLowTransparency;

  const imageBackgroundColor =
    state === PollOptionState.VOTED_SELECTED
      ? colors.contrastHighMediumTransparency
      : colors.contrastLowLowTransparency;

  const barFillColor =
    state === PollOptionState.VOTED_SELECTED
      ? colors.contrastHighMediumTransparency
      : colors.contrastLowMediumTransparency;

  const barFillHeight = state === PollOptionState.UNSELECTED ? 0 : fillWidth;

  const imageBorderWidth =
    state === PollOptionState.UNSELECTED
      ? 0
      : state === PollOptionState.VOTED_SELECTED
      ? 2
      : 1;

  const optionTextColor =
    state === PollOptionState.VOTED_SELECTED
      ? colors.contrastLowest
      : colors.contrastMediumMediumTransparency;

  return (
    <TouchableOpacity onPress={handlePress} style={styles.touchableContainer}>
      <View style={styles.contentsContainer}>
        <Image
          style={styles.pollImage}
          source={{
            uri: data.image,
          }}
          resizeMode="cover"
        />
        {!(state === PollOptionState.UNSELECTED) && (
          <View
            style={{
              ...styles.imageBackgroundContainer,
              backgroundColor: imageBackgroundColor,
            }}
          />
        )}
        <Animated.View
          style={{
            ...styles.animatedFillOverlay,
            height: barFillHeight,
            backgroundColor: barFillColor,
          }}
        />
        {!(state === PollOptionState.UNSELECTED) && (
          <View
            style={{
              ...styles.imageBackgroundContainer,
              borderWidth: imageBorderWidth,
              borderColor: imageBorderColor,
            }}
          />
        )}
        {!(state === PollOptionState.UNSELECTED) && (
          <View style={styles.imageTextContainer}>
            <Text
              style={{
                ...textStyles.displaySmall,
                color: optionTextColor,
                lineHeight: 36,
              }}
            >
              {percentageOfVote}%
            </Text>
            <View style={{ width: 8 }} />
            <Text
              style={{
                color: optionTextColor,
                ...textStyles.headerSmall,
                lineHeight: 30,
              }}
            >
              {data.text}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentsContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  touchableContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  animatedFillOverlay: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    bottom: 0,
    width: "100%",
    position: "absolute",
  },
  imageBackgroundContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imageTextContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 5,
    left: 10,
    alignItems: "flex-end",
  },
  pollImage: {
    width: "100%",
    height: 215,
  },
});
