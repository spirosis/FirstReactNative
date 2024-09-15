import { View, Text, Pressable } from 'react-native';
import Styles  from "../stylist/GeneralStyles"



const Name =()=> {
    return (
        <View style={Styles.container}>
          <Text style={Styles.text}>Ich HeiBe Omar.</Text>
        <Pressable onPress={()=> console.log("Just Pressed papi")}>
          <Text style={{color :"teal", fontSize: 8,}}>Press here daddy
          </Text>
        </Pressable>
        </View>
      );
    };
    
    


export default Name;