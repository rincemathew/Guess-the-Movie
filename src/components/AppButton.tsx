import { Text, TouchableOpacity } from "react-native";
import { Theme } from "../themes/theme";

export default function AppButton({title,onPress}:any){

    return(

        <TouchableOpacity

        onPress={onPress}

        style={{

            backgroundColor:Theme.Colors.primary,

            padding:16,

            borderRadius:15,

            alignItems:"center",

            marginVertical:8

        }}

        >

        <Text
        style={{
            color:"#fff",
            fontSize:18,
            fontWeight:"700"
        }}
        >

        {title}

        </Text>

        </TouchableOpacity>

    )

}