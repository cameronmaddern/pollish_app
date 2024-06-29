import { generateClient } from "aws-amplify/api";
import { TextOption, TextPoll } from "../API";
import { TextOptionData, TextPollData } from "../components/poll/entities";
import * as queries from "../graphql/queries";

const client = generateClient();

export class PollService {
  static async findTextPolls(): Promise<TextPoll[]> {
    const textPollData = await client
      .graphql({
        query: queries.listTextPolls,
        authMode: "apiKey",
      })
      .catch((error) => {
        throw "Failed to find list of polls" + error;
      });

    return textPollData.data.listTextPolls.items;
  }

  static async formatDataFromPoll(poll: TextPoll): Promise<TextPollData> {
    const listVotes = await client
      .graphql({
        query: queries.listVotes,
        variables: {
          filter: {
            poll: {
              eq: poll.id,
            },
          },
        },
        authMode: "apiKey",
      })
      .catch((error: string) => {
        throw "Failed to find poll votes" + error;
      });

    const listTextOptions = await client
      .graphql({
        query: queries.listTextOptions,
        variables: {
          filter: {
            poll: {
              eq: poll.id,
            },
          },
        },
        authMode: "apiKey",
      })
      .catch((error) => {
        throw "Failed to find poll options" + error;
      });

    const pollOptions: TextOptionData[] =
      listTextOptions.data.listTextOptions.items.map((option: TextOption) => {
        const numberOfVotes = listVotes.data.listVotes.items.filter(
          (vote) => vote.option === option.id
        ).length;

        return {
          id: option.id,
          pollId: poll.id,
          title: option.text,
          numberOfVotes: numberOfVotes,
          totalVotes: listVotes.data.listVotes.items.length,
        };
      });

    return {
      id: poll.id,
      title: poll.title,
      image: poll.image,
      options: pollOptions,
      totalVotes: listVotes.data.listVotes.items.length,
      username: "example_user",
      profileImage: poll.image,
      timeRemaining: "7h",
    };
  }
}
