import { View, Text, Button } from 'react-native'
import Styles  from "../stylist/GeneralStyles"
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Text style={Styles.buttonText}>Lets explore buttons</Text>
      <Button style={Styles.buttonText} title="Learn More " color="#DE48E0" />
      <Button title="Tap me" color="#000" onPress={()=> console.log("Pressed")}
    />
    </View>
  )
}

export default ButtonComponent;