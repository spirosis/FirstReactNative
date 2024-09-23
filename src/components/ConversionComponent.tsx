import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Styles from "../stylist/GeneralStyles"


const ConversionComponent =()=> {
    return (
        <View style={Styles.container}>
          <View>
          <Ionicons name="fa-bitcoin" size={30} color="black" />
          </View>
          <Text style={Styles.text}>Bitcoin to USD: </Text>
          
        </View>
      );
    };
    


export default ConversionComponent;