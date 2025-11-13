import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
export default function Authnavigator(){
  return(
    <NavigationContainer>
        <AuthStack/> 
    </NavigationContainer> 
  )

}