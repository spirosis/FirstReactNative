import { View, Text, Pressable } from 'react-native'
import Styles  from "../stylist/GeneralStyles"
import React from 'react'

const ButtonComponent = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.buttonText}>Lets explore buttons</Text>
      <Pressable style={Styles.button} onPress={() => alert("Yeah Papo!!!")}>
        <Text style={Styles.buttonText}> Asere </Text>
      </ Pressable>
    </View>
  )
}

export default ButtonComponent;