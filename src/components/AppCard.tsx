import { View } from "react-native";
import { Theme } from "../themes/theme";

export default function AppCard({children}:any){

return(

<View

style={{

backgroundColor:"#fff",

padding:15,

borderRadius:15,

...Theme.Shadows.card

}}

>

{children}

</View>

)

}