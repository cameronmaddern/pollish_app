import { createContext, useContext, type ReactNode } from "react";
import type { ImagePollData, TextPollData } from "../components/poll/entities";
import { PollService } from "../services/poll_service";
import { useAuth } from "./auth_context";

interface HomeContextType {
  findPolls(): Promise<(TextPollData | ImagePollData)[]>;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const useHome = (): HomeContextType => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("usePoll must be used within a PollProvider");
  }
  return context;
};

interface HomeProviderProps {
  children: ReactNode;
}

export function HomeProvider({ children }: HomeProviderProps) {
  //TODO: Update to include image polls
  const { user } = useAuth();
  const findPolls = async (): Promise<(TextPollData | ImagePollData)[]> => {
    try {
      const textPolls = await PollService.findTextPolls();
      const imagePolls = await PollService.findImagePolls();

      const formattedTextPolls: TextPollData[] = [];
      const formattedImagePolls: ImagePollData[] = [];

      for (const textPoll of textPolls) {
        const formattedTextPoll = await PollService.formatDataFromTextPoll(
          textPoll,
          user
        );
        formattedTextPolls.push(formattedTextPoll);
      }

      for (const imagePoll of imagePolls) {
        const formattedImagePoll = await PollService.formatDataFromImagePoll(
          imagePoll,
          user
        );
        formattedImagePolls.push(formattedImagePoll);
      }

      const formattedPolls = [...formattedTextPolls, ...formattedImagePolls];

      formattedPolls.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        if (a.createdAt > b.createdAt) {
          return 1;
        }
        return 0;
      });

      return formattedPolls;
    } catch (error) {
      console.log("error finding polls", error);
      return [];
    }
  };

  return (
    <HomeContext.Provider value={{ findPolls }}>
      {children}
    </HomeContext.Provider>
  );
}
