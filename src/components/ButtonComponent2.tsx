import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import Styles  from "../stylist/GeneralStyles"

const ButtonComponent = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>Lets explore buttons II</Text>
       <Pressable style={Styles.button} onPress={() => alert("Aqui Aqui")}>
        <Text style={Styles.buttonText}>Si Toca Aqui!</Text>
      </ Pressable>

      <Button title="Tap me" color="#000" onPress={()=> alert("You fucked with the wrong cock")}
    />
    </View>
  )
}

export default ButtonComponent;