import { View, Text, Pressable } from 'react-native';
import Styles  from "../stylist/GeneralStyles"

const Greet =()=> {
    return (
        <View style={Styles.container}>
          <Text style={Styles.text}>Bienvenuti panuchis</Text>
          <Pressable onPressIn={()=> alert("Just Pressed papi INNNN!!!")}>
          <Text style={{color :"teal", fontSize: 8,}}>Press here daddy
          </Text>
        </Pressable>
        </View>
      );
    };
    


export default Greet;