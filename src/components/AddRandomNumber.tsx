import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { RandomNumberContext } from '../context/RandomNumberContext'

const AddRandomNumber = () => {

  const {addNumber} = useContext(RandomNumberContext)
  const handleAddNumber = ()=>{
    addNumber({
      id: String(Date.now()),
      name: "Number" + Math.floor(Math.random() * 100),
    });
  };

  return (
    <View>
      <Button title="Add Random Number" onPress={handleAddNumber}/>
    </View>
  );
}

export default AddRandomNumber