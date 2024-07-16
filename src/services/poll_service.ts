import { generateClient } from "aws-amplify/api";
import type {
  ImageOption,
  ImagePoll,
  TextOption,
  TextPoll,
  User,
} from "../API";
import type {
  ImageOptionData,
  ImagePollData,
  TextOptionData,
  TextPollData,
} from "../components/poll/entities";
import * as mutations from "../graphql/mutations";
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
        throw "Failed to find list of text polls" + error;
      });

    return textPollData.data.listTextPolls.items;
  }

  static async findImagePolls(): Promise<ImagePoll[]> {
    const imagePollData = await client
      .graphql({
        query: queries.listImagePolls,
        authMode: "apiKey",
      })
      .catch((error) => {
        throw "Failed to find list of image polls" + error;
      });

    return imagePollData.data.listImagePolls.items;
  }

  static async createNewVote(
    optionId: string,
    ownerId: string,
    pollId: string
  ) {
    const createVoteData = await client.graphql({
      query: mutations.createVote,
      variables: {
        input: {
          option: optionId,
          owner: ownerId,
          poll: pollId,
        },
      },
      authMode: "apiKey",
    });

    return createVoteData.data.createVote;
  }

  static async updateVote(voteId: string, optionId: string) {
    const updateVoteData = await client.graphql({
      query: mutations.updateVote,
      variables: {
        input: {
          id: voteId,
          option: optionId,
        },
      },
      authMode: "apiKey",
    });

    return updateVoteData.data.updateVote;
  }

  static async deleteVote(voteId: string) {
    const deleteVoteData = await client.graphql({
      query: mutations.deleteVote,
      variables: {
        input: {
          id: voteId,
        },
      },
      authMode: "apiKey",
    });

    return deleteVoteData.data.deleteVote;
  }

  static async formatDataFromTextPoll(
    poll: TextPoll,
    user: User | null
  ): Promise<TextPollData> {
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

    // find a vote associated to the current user
    const voteIndex = listVotes.data.listVotes.items.findIndex(
      (vote) => vote.owner === user?.id
    );
    const userVoteId =
      voteIndex !== -1 ? listVotes.data.listVotes.items[voteIndex].id : "";

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

    let optionSelected = null;
    const voteMap: Record<string, number> = {};
    const pollOptions: TextOptionData[] =
      listTextOptions.data.listTextOptions.items.map((option: TextOption) => {
        const numberOfVotes = listVotes.data.listVotes.items.filter(
          (vote) => vote.option === option.id
        ).length;
        voteMap[option.id] = numberOfVotes;

        if (
          voteIndex !== -1 &&
          listVotes.data.listVotes.items[voteIndex].option === option.id
        ) {
          optionSelected = option.id;
        }
        return {
          id: option.id,
          pollId: poll.id,
          title: option.text,
          numberOfVotes: numberOfVotes,
          totalVotes: listVotes.data.listVotes.items.length,
        };
      });

    //TODO: replace hardcoded values with real data
    return {
      id: poll.id,
      title: poll.title,
      image: poll.image,
      options: pollOptions,
      optionSelected: optionSelected,
      totalVotes: listVotes.data.listVotes.items.length,
      userVoteId: userVoteId,
      voteMap: voteMap,
      username: "example_user",
      profileImage: poll.image,
      timeRemaining: "7h",
      createdAt: poll.createdAt,
      topics: ["Basketball", "Apple"],
    };
  }

  static async formatDataFromImagePoll(
    poll: ImagePoll,
    user: User | null
  ): Promise<ImagePollData> {
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

    // find a vote associated to the current user
    const voteIndex = listVotes.data.listVotes.items.findIndex(
      (vote) => vote.owner === user?.id
    );
    const userVoteId =
      voteIndex !== -1 ? listVotes.data.listVotes.items[voteIndex].id : "";

    const listImageOptions = await client
      .graphql({
        query: queries.listImageOptions,
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

    let optionSelected = null;
    const voteMap: Record<string, number> = {};
    const pollOptions: ImageOptionData[] =
      listImageOptions.data.listImageOptions.items.map(
        (option: ImageOption) => {
          const numberOfVotes = listVotes.data.listVotes.items.filter(
            (vote) => vote.option === option.id
          ).length;
          voteMap[option.id] = numberOfVotes;

          if (
            voteIndex !== -1 &&
            listVotes.data.listVotes.items[voteIndex].option === option.id
          ) {
            optionSelected = option.id;
          }

          return {
            id: option.id,
            pollId: poll.id,
            text: option.text,
            image: option.image,
            numberOfVotes: numberOfVotes,
            totalVotes: listVotes.data.listVotes.items.length,
          };
        }
      );

    //TODO: replace hardcoded values with real data
    return {
      id: poll.id,
      title: poll.title,
      options: pollOptions,
      totalVotes: listVotes.data.listVotes.items.length,
      userVoteId: userVoteId,
      optionSelected: optionSelected,
      voteMap: voteMap,
      username: "example_user",
      profileImage:
        "https://cdn.openart.ai/stable_diffusion/2a2e915092e222b3a1e00970c4bc6833b30a4e0d_2000x2000.webp",
      timeRemaining: "7h",
      createdAt: poll.createdAt,
      topics: ["Running", "National Parks"],
    };
  }
}
