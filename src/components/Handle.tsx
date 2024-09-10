import { View, Text, Pressable } from 'react-native';
import Styles  from "../stylist/GeneralStyles"

const Handle =()=> {
    return (
        <View style={Styles.container}>
          <Text style={Styles.text}>Maine Handle aus Instagram ist G_artForce</Text>
          <Pressable onPressOut={()=> alert("Just Pull Out papi")}>
            <Text style={{color :"teal", fontSize: 8,}}>Press here daddy
            </Text>
          </Pressable>
        </View>
      );
    };
   


export default Handle;