import { View, Text, Button } from 'react-native'
import React from 'react'
import ButtonComponent from './ButtonComponent'

import Greet  from "../components/Greet"
import Name from "../components/Name";
import Age from "../components/Age";
import Handle from "../components/Handle";
import Love from "../components/Love";
import ButtonComponent2 from './ButtonComponent2';

const ViewComponent = () => {
  return (
    <View>
        <Greet/>
        <Name/>
        <Age/>
        <Handle/>
        <Love/>
        <ButtonComponent />
        <ButtonComponent2 />
    </View>
  )
}

export default ViewComponent;