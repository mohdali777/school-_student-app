import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import ProfileScreen from "../screens/profile";
import { RootStackParamList } from "./types";

export function RootStack(){
    const Stack = createNativeStackNavigator<RootStackParamList>()
    return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
    </Stack.Navigator>
    )
}
