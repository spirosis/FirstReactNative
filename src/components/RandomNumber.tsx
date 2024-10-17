import { View, Text, FlatList } from 'react-native'
import React from 'react'

const RandomNumber = () => {
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