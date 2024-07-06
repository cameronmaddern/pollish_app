import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import amplifyConfig from "./amplify_config";
import Tabs from "./src/navigation/tabs";
import { ThemeProvider } from "./src/contexts/theme_context";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { AuthProvider } from "./src/contexts/auth_context";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, VerifyScreen } from "./src/screens";
import { RootStackParamList } from "./type";
import { BackIcon } from "./assets/svg";
import { GestureHandlerRootView } from "react-native-gesture-handler";

Amplify.configure(amplifyConfig);

export default function App() {
  let [fontsLoaded] = useFonts({
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
