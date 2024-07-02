import { generateClient } from "aws-amplify/api";
import { ImageOption, ImagePoll, TextOption, TextPoll } from "../API";
import {
  ImageOptionData,
  ImagePollData,
  TextOptionData,
  TextPollData,
} from "../components/poll/entities";
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

  static async formatDataFromTextPoll(poll: TextPoll): Promise<TextPollData> {
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

    //TODO: replace hardcoded values with real data
    return {
      id: poll.id,
      title: poll.title,
      image: poll.image,
      options: pollOptions,
      totalVotes: listVotes.data.listVotes.items.length,
      username: "example_user",
      profileImage: poll.image,
      timeRemaining: "7h",
      createdAt: poll.createdAt,
    };
  }

  static async formatDataFromImagePoll(
    poll: ImagePoll
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

    const pollOptions: ImageOptionData[] =
      listImageOptions.data.listImageOptions.items.map(
        (option: ImageOption) => {
          const numberOfVotes = listVotes.data.listVotes.items.filter(
            (vote) => vote.option === option.id
          ).length;

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
      username: "example_user",
      profileImage:
        "https://cdn.openart.ai/stable_diffusion/2a2e915092e222b3a1e00970c4bc6833b30a4e0d_2000x2000.webp",
      timeRemaining: "7h",
      createdAt: poll.createdAt,
    };
  }
}
