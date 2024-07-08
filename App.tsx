import { REACT_APP_ENVIRONMENT } from "@env";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Amplify } from "aws-amplify";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { amplifyConfig, amplifyConfigDev } from "./amplify_config";
import { BackIcon } from "./assets/svg";
import { AuthProvider } from "./src/contexts/auth_context";
import { ThemeProvider } from "./src/contexts/theme_context";
import Tabs from "./src/navigation/tabs";
import { LoginScreen, VerifyScreen } from "./src/screens";
import type { RootStackParamList } from "./type";

if (REACT_APP_ENVIRONMENT == "prod") {
  Amplify.configure(amplifyConfig);
} else if (REACT_APP_ENVIRONMENT == "dev") {
  console.log(amplifyConfigDev);
  Amplify.configure(amplifyConfigDev);
} else {
  throw new Error("Environment not set");
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "SFProRounded-Medium": require("./assets/fonts/SF-Pro-Rounded-Medium.otf"),
    "SFProRounded-Bold": require("./assets/fonts/SF-Pro-Rounded-Bold.otf"),
    "SFProRounded-Regular": require("./assets/fonts/SF-Pro-Rounded-Regular.otf"),
    "SFProRounded-Semibold": require("./assets/fonts/SF-Pro-Rounded-Semibold.otf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  //TODO: Implement a nicer loading indicator
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const AuthStack = createStackNavigator<RootStackParamList>();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <NavigationContainer>
          <AuthProvider>
            <AuthStack.Navigator
              screenOptions={{
                headerBackTitleVisible: false,
                headerBackImage: () => (
                  <View style={{ paddingLeft: 10 }}>
                    <BackIcon size={28} color="black" />
                  </View>
                ),
              }}
            >
              <AuthStack.Screen
                name="Main"
                component={Tabs}
                options={{ headerShown: false }}
              />
              <AuthStack.Screen name="Account" component={LoginScreen} />
              <AuthStack.Screen name="Verify" component={VerifyScreen} />
            </AuthStack.Navigator>
          </AuthProvider>
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
