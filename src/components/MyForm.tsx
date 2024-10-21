import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import useFormInput from '../hooks/UseFormInput';

const MyForm = () => {
    const nameInput = useFormInput("");
    const emailInput = useFormInput("");

    const handleSubmit = () =>{
        console.log("Name: ", nameInput.value)
        console.log("email: ", emailInput.value)
    }
  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={nameInput.value} 
      onChangeText={nameInput.onChange}
      placeholder="Enter your pinshi name"/>
      <Text>Email:</Text>
      <TextInput value={emailInput.value} 
      onChangeText={emailInput.onChange}
      placeholder="Enter your pinshi email"
      keyboardType="email-address"/>

      <Button title="Submit" onPress={handleSubmit}/>
    </View>
  )
}

export default MyForm
