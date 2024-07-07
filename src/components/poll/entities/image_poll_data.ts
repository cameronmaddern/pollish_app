import type { ImageOptionData } from "./image_option_data";

export type ImagePollData = {
  id: string;
  title: string;
  username: string;
  profileImage: string;
  totalVotes: number;
  //TODO: This should be a datetime
  timeRemaining: string;
  options: ImageOptionData[];
  createdAt: string;
  topics: string[];
};
