import { View, Text, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { RandomNumberContext } from '../context/RandomNumberContext'

const RandomNumber = () => {
  const {num} = useContext(RandomNumberContext)
  return (
    <View>
      <Text>Number List: </Text>
      <FlatList data={num} keyEstractor={(item)=>item.id}
        renderItem={({item}) => <Text>{item.name}</Text>}
        />

    </View>
  )
}

export default RandomNumber 