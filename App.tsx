import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import amplifyConfig from "./amplify_config";
import Tabs from "./src/navigation/tabs";
import { ThemeProvider } from "./src/contexts/theme_context";

Amplify.configure(amplifyConfig);

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ThemeProvider>
  );
}
