 import Loginpage from "../screens/Auth/login";
 import { AuthStackParamList, RootStackParamList } from "./types";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import { NavigationContainer } from "@react-navigation/native";
  
 export default function AuthStack(){
       const Stack = createNativeStackNavigator<AuthStackParamList>()
    return(
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Loginpage}/>
     </Stack.Navigator>
    )
 }
 
  