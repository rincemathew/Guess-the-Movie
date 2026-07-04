import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

export default function CoinBar(){

return(

<View

style={{

flexDirection:"row",

alignItems:"center",

backgroundColor:"#fff",

padding:10,

borderRadius:20

}}

>

<Ionicons
name="logo-bitcoin"
size={22}
color="#FFC107"
/>

<Text

style={{

marginLeft:8,

fontWeight:"700",

fontSize:18

}}

>

500

</Text>

</View>

)

}