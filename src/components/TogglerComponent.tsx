import { View, Text, Button } from 'react-native';
import { useState } from "react";
import React from 'react';

const TogglerComponent = () => {

    const [isOn, setIsOn] = useState(false);

  return (
    <View>
      <Text>{isOn ? 'On' : 'Off' }</Text>
      <Button title="Turn Me" onPress={()=> setIsOn(!isOn)}/>
    </View>
  )
}

export default TogglerComponent