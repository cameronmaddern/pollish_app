import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../screens";

const Stack = createStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={({}) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
