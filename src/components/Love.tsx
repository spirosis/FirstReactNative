import { View, Text, Pressable } from 'react-native';
import Styles from "../stylist/GeneralStyles"

const Love =()=> {
    return (
        <View style={Styles.container}>
          <Text style={Styles.text}>Me encanta la Papaya</Text>
          <Pressable onLongPress={()=> alert("Why did you stop?! aaajj")}>
            <Text style={{color :"teal", fontSize: 8,}}>Press here daddy
            </Text>
          </Pressable>
        </View>
      );
    };
    
    


export default Love;