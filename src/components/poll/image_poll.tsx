import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../contexts/theme_context";
import { useState } from "react";
import { PollSharedScaffold, PollImageOption } from "./subcomponents";
import { ImagePollData, PollOptionState } from "./entities";

export function ImagePoll({ pollData }: { pollData: ImagePollData }) {
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
        profileImage: pollData.profileImage,
        timeRemaining: pollData.timeRemaining,
      }}
    >
      <View style={{ height: 12 }} />
      <View style={styles.genericContainer}>
        <Text style={textStyles.titleLarge}>{pollData.title}</Text>
      </View>
      <View style={{ height: 12 }} />
      {pollData.options.map((option, index) => (
        <View key={index} style={{ paddingHorizontal: 8 }}>
          <PollImageOption
            data={option}
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
      <View style={{ height: 16 }} />
    </PollSharedScaffold>
  );
}

const styles = StyleSheet.create({
  genericContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
