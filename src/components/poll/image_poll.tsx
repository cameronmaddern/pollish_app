import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../contexts/auth_context";
import { useTheme } from "../../contexts/theme_context";
import { PollService } from "../../services/poll_service";
import { type ImagePollData, PollOptionState } from "./entities";
import { PollImageOption, PollSharedScaffold } from "./subcomponents";

interface PollState {
  votes: Record<string, number>; // map option ID to current vote count
  selectedOption: string | null; // ID of currently selected option, else null
}

export function ImagePoll({ pollData }: { pollData: ImagePollData }) {
  const { textStyles } = useTheme();
  const { user, openLoginPopup } = useAuth();

  const initialState: PollState = {
    votes: pollData.voteMap,
    selectedOption: pollData.optionSelected,
  };
  const [pollState, setPollState] = useState<PollState>(initialState);
  const totalVotes = Object.values(pollState.votes).reduce(
    (acc, count) => acc + count,
    0
  );
  const [userVoteId, setUserVoteId] = useState<string>(pollData.userVoteId);

  const onVote = async (optionId: string) => {
    try {
      if (user === null) {
        openLoginPopup();
      } else if (pollState.selectedOption === null) {
        // NEW VOTE REGISTERED
        setPollState((prevState) => ({
          votes: {
            ...prevState.votes,
            [optionId]: (prevState.votes[optionId] || 0) + 1,
          },
          selectedOption: optionId,
        }));
        const newVote = await PollService.createNewVote(
          optionId,
          user.id,
          pollData.id
        );
        setUserVoteId(newVote.id);
      } else if (pollState.selectedOption === optionId) {
        // DELETE EXISTING VOTE
        setPollState((prevState) => ({
          votes: {
            ...prevState.votes,
            [optionId]: Math.max((prevState.votes[optionId] || 0) - 1, 0),
          },
          selectedOption: null,
        }));
        await PollService.deleteVote(userVoteId);
        setUserVoteId("");
      } else {
        // UPDATE EXISTING VOTE TO NEW OPTION
        setPollState((prevState) => {
          const newState = {
            votes: {
              ...prevState.votes,
              [optionId]: (prevState.votes[optionId] || 0) + 1,
            },
            selectedOption: optionId,
          };
          if (prevState.selectedOption !== null) {
            newState.votes[prevState.selectedOption] = Math.max(
              (prevState.votes[optionId] || 0) - 1,
              0
            );
          }
          return newState;
        });
        await PollService.updateVote(userVoteId, optionId);
      }
    } catch (error) {
      console.log("Failed updating vote" + JSON.stringify(error));
    }
  };
  return (
    <PollSharedScaffold
      pollSharedData={{
        id: pollData.id,
        title: pollData.title,
        username: pollData.username,
        profileImage: pollData.profileImage,
        timeRemaining: pollData.timeRemaining,
        topics: pollData.topics,
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
              pollState.selectedOption == null
                ? PollOptionState.UNSELECTED
                : pollState.selectedOption == option.id
                  ? PollOptionState.VOTED_SELECTED
                  : PollOptionState.VOTED_UNSELECTED
            }
            votes={pollState.votes[option.id] || 0}
            totalVotes={totalVotes}
            onVote={onVote}
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
