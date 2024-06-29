import { TextOptionData } from "./text_option_data";

export type TextPollData = {
  id: string;
  title: string;
  image: string;
  username: string;
  profileImage: string;
  totalVotes: number;
  //TODO: This should be a datetime
  timeRemaining: string;
  options: TextOptionData[];
};
