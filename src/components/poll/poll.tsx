import { View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from "../../contexts/theme_context";
import { MoreIcon, TimerIcon, ChatIcon } from "../../../assets/svg";
import { useState } from "react";
import { PollOption } from "./subcomponents";
import { toRoman } from "../../utils";
import { PollOptionState } from "./entities";
import * as Constants from "../../../assets/constants/app_constants";

// TODO: Remove example poll data when fetching from backend is setup
type PollOptionData = {
  number: string;
  title: string;
  percentageOfVote: number;
};

type PollData = {
  title: string;
  username: string;
  profileImage: string;
  timeRemaining: string;
  image: string;
  options: PollOptionData[];
};

const pollData: PollData = {
  title: "Quomodo technologiae evolutionem futuram Lorem Ipsum praenunti?",
  username: "username00",
  profileImage:
    "https://cdn.openart.ai/stable_diffusion/2a2e915092e222b3a1e00970c4bc6833b30a4e0d_2000x2000.webp",
  timeRemaining: "7d6h",
  image:
    "https://images.newscientist.com/wp-content/uploads/2022/12/01182812/SEI_135903350.jpg",
  options: [
    { number: "I", title: "Lima, Peru", percentageOfVote: 30 },
    { number: "II", title: "Santiago, Chile", percentageOfVote: 55 },
    { number: "III", title: "Buenos Aires, Argentina", percentageOfVote: 5 },
    { number: "IV", title: "Quito, Ecuador", percentageOfVote: 10 },
  ],
};
//////////////////////////////////////////////////////////////////////

export function Poll() {
  const { textStyles, colors } = useTheme();
  const [optionSelected, setOptionSelected] = useState("");

  const updateOption = (value: string) => {
    //TODO: Update logic to handle voting on a poll
    setOptionSelected(value);
  };

  return (
    <View
      style={{
        ...styles.pollContainer,
        backgroundColor: colors.contrastLowest,
      }}
    >
      <View style={styles.genericContainer}>
        <Image
          source={{
            uri: pollData.profileImage,
          }}
          style={styles.profileImage}
        />
        <View style={{ width: 8 }} />
        <Text style={textStyles.bodyMedium}>{pollData.username}</Text>
        <View style={{ flex: 1 }} />
        <MoreIcon color={colors.textMuted} size={20} />
      </View>
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
            <PollOption
              number={toRoman(index + 1)}
              title={option.title}
              percentageOfVote={option.percentageOfVote}
              state={
                optionSelected == ""
                  ? PollOptionState.UNSELECTED
                  : optionSelected == option.title
                  ? PollOptionState.VOTED_SELECTED
                  : PollOptionState.VOTED_UNSELECTED
              }
              optionSelected={optionSelected}
              setOptionSelected={updateOption}
            />
            {index < pollData.options.length - 1 && (
              <View style={{ height: 8 }} />
            )}
          </View>
        ))}
      </View>
      <View style={styles.genericContainer}>
        {/* TODO: Implement action on press */}
        <View style={styles.rowCenterAligned}>
          <TimerIcon size={28} color={colors.text} />
          <View style={{ width: 4 }} />
          {/* TODO: Replace with actual time remaining, when backend implemented  */}
          <Text style={{ ...textStyles.bodyMedium, color: colors.text }}>
            {pollData.timeRemaining}
          </Text>
        </View>
        <View style={{ flex: 1 }} />
        {/* TODO: Implement action on press */}
        <View style={styles.rowCenterAligned}>
          <ChatIcon size={28} color={colors.text} />
          <View style={{ width: 4 }} />
          <Text style={{ ...textStyles.bodyMedium, color: colors.text }}>
            {Constants.CHAT}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pollContainer: {
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
  },
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
  rowCenterAligned: {
    flexDirection: "row",
    alignItems: "center",
  },
});
