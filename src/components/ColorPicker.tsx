import { View, Text, } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Styles from '../stylist/GeneralStyles'


const colors = ["#ff5733", "teal", "crimson", "#000" ];

const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState("#fff");
  return (
    <View style={{backgroundColor: selectedColor}}>
      <Text style={Styles.colorTitle}>ColorPicker</Text>
      <View style={Styles.colorContainer}>
        {colors.map((color) => (
            <TouchableOpacity style={[Styles.colorBox, {background: color}]} key={color} onPress={()=> setSelectedColor(color)} />
        ))}
        
      </View>
    </View>
  )
}

export default ColorPicker