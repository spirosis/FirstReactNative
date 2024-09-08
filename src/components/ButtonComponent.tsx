import { View, Text, Button } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Text>Lets explore buttons</Text>
      <Button title="Learn More " color="#DE48E0" />
      <Button title="Tap me" color="#000" onPress={()=> console.log("Pressed")}
    />
    </View>
  )
}

export default ButtonComponent;