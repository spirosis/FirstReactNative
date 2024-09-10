import { View, Text, Button } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Text>Lets explore buttons II</Text>
      <Button title="Learn More " color="#DE48E0" />
      <Button title="Tap me" color="#000" onPress={()=> alert("You fucked with the wrong cock")}
    />
    </View>
  )
}

export default ButtonComponent;