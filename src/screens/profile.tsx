import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text,Pressable } from "react-native";
import { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Profile">;

export default function ProfileScreen({navigation}:Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>Profile Screen</Text>
    </View>
  );
}
