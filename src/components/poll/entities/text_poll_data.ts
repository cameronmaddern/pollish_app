import type { TextOptionData } from "./text_option_data";

export type TextPollData = {
  id: string;
  title: string;
  image: string;
  username: string;
  profileImage: string;
  totalVotes: number;
  userVoteId: string;
  voteMap: Record<string, number>;
  //TODO: This should be a datetime
  timeRemaining: string;
  options: TextOptionData[];
  optionSelected: string | null;
  createdAt: string;
  topics: string[];
};
