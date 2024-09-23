import { View } from "react-native";

import ViewComponent from "../components/ViewComponent";
import Fetching from "../components/Fetching";

function Index() {
    return <View>
       <ViewComponent />
        {/* <Fetching/> */}
        {/*
            1.OnPress: Function that is called when the component is pressed. required.
            2.onPressIn: function that is called when the press gesture <starts.
            3. onPressOut: function that is called when the press gesture ends (or is cancelled).
            4. onLongPress: Function that is called when a long press is 
        */}
    </View>
}



export default Index;