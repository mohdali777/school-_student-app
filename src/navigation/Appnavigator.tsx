import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./Rootstack";

export default function AppNavigator(){
  return(
    <NavigationContainer>
        <RootStack/>
    </NavigationContainer>
  )
}