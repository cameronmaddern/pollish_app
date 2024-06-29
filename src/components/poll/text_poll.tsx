import { View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from "../../contexts/theme_context";
import { useState } from "react";
import { PollSharedScaffold } from "./subcomponents";
import { toRoman } from "../../utils";
import { PollOptionState, TextPollData } from "./entities";
import { PollTextOption } from "./subcomponents/poll_text_option";

export function TextPoll({ pollData }: { pollData: TextPollData }) {
  const { textStyles } = useTheme();
  const [optionSelected, setOptionSelected] = useState<string | null>(null);

  const updateOption = (value: string) => {
    //TODO: Update logic to handle voting on a poll
    setOptionSelected(value);
  };

  return (
    <PollSharedScaffold
      pollSharedData={{
        username: pollData.username,
        timeRemaining: pollData.timeRemaining,
        profileImage: pollData.profileImage,
      }}
    >
      <View style={{ height: 8 }} />
      <View style={styles.pollImageContainer}>
        <Image
          style={styles.pollImage}
          source={{
            uri: pollData.image,
          }}
          resizeMode="cover"
        />
      </View>
      <View style={{ height: 24 }} />
      <View style={styles.genericContainer}>
        <Text style={textStyles.titleLarge}>{pollData.title}</Text>
      </View>
      <View style={styles.optionsContainer}>
        {pollData.options.map((option, index) => (
          <View key={index}>
            <PollTextOption
              data={option}
              number={toRoman(index + 1)}
              state={
                optionSelected == null
                  ? PollOptionState.UNSELECTED
                  : optionSelected == option.id
                  ? PollOptionState.VOTED_SELECTED
                  : PollOptionState.VOTED_UNSELECTED
              }
              updateOption={updateOption}
            />
            {index < pollData.options.length - 1 && (
              <View style={{ height: 8 }} />
            )}
          </View>
        ))}
      </View>
    </PollSharedScaffold>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 1000,
  },
  pollImageContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  pollImage: {
    width: "100%",
    height: 215,
    borderRadius: 10,
  },
  optionsContainer: {
    width: "100%",
    padding: 16,
  },
  genericContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
