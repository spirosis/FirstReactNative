import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Styles from '../stylist/GeneralStyles'

const Cards = () => {
  return (
    <View style={Styles.container}>
        <Image source={require('../img/banda1.jpg')} style={Styles.circularImage}/>
        <Text style={Styles.titleName}>Omar Gutierrez</Text>
        <Text>Coding is my pashon</Text>
        <Text style={Styles.textContainer}>
          He aqui una pequena muestra de lo que es mi realidad verdadera dentro de una simulacion de la matrix.
        </Text>

        <Pressable style={Styles.buttonHitMe} onPress={() => alert("Stay in touch!")} >
            <Text style={Styles.textHitMe}> Hit me Up!</Text>
        </Pressable>
    </View>
  )
}

export default Cards