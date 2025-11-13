import { View ,Text,Button} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useDispatch } from "react-redux";
import { login } from "../redux/Slice/Auth";
import { AppDispatch } from "../redux/store";


type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ navigation }: Props) {
  const dispatch = useDispatch<AppDispatch>()
  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Home Screen</Text>
      <View style={{gap:10}}>

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
       <Button
        title="logout"
        onPress={() => dispatch(login(false))}
      />
      </View>
    </View>
  )
}

export default HomeScreen

