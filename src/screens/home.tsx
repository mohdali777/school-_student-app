import { View ,Text,Button} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";


type Props = NativeStackScreenProps<RootStackParamList, "Home">;

function HomeScreen({ navigation }: Props) {
  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  )
}

export default HomeScreen

