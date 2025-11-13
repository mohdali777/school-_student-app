import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../navigation/types";
import { View ,Text,Button} from "react-native";
import AuthInputRN from "../../components/inputboxes/loginbox";
import Feather from "react-native-vector-icons/Feather";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { login } from "../../redux/Slice/Auth";


type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

export default function Loginpage({navigation}:Props){
    const [loginPayload,setpayload] = useState({email:"",password:""})
     const dispatch = useDispatch<AppDispatch>() 
    return( 
      <View>
        <Text>
           welcome to login
        </Text>
        <AuthInputRN Icon={Feather} placeholder="email" iconName="mail" value={loginPayload.email} onChange={(text) => setpayload({ ...loginPayload, email: text })}/>
        <AuthInputRN Icon={Feather} placeholder="password" iconName="mail" value={loginPayload.password} onChange={(text) => setpayload({ ...loginPayload, password: text })}/>
         <Button onPress={()=>dispatch(login(true))} title="login" >
            </Button>   
      </View>
    )
}