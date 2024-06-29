import { generateClient } from "aws-amplify/api";
import { ReactNode, createContext, useContext } from "react";
import { TextPollData } from "../components/poll/entities";
import { PollService } from "../services/poll_service";

interface HomeContextType {
  findPolls(): Promise<TextPollData[]>;
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
  const client = generateClient();

  //TODO: Update to include image polls
  const findPolls = async (): Promise<TextPollData[]> => {
    try {
      const textPolls = await PollService.findTextPolls();
      const formattedPolls: TextPollData[] = [];

      for (const textPoll of textPolls) {
        const formattedPoll = await PollService.formatDataFromPoll(textPoll);
        formattedPolls.push(formattedPoll);
      }

      return formattedPolls;
    } catch (error) {
      console.error("error finding polls", error);
      return [];
    }
  };

  return (
    <HomeContext.Provider value={{ findPolls }}>
      {children}
    </HomeContext.Provider>
  );
}
