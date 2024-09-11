import { View } from 'react-native'
import React from 'react'
import ButtonComponent from './ButtonComponent'

import GritoDeGuerra  from "../components/Greet"
import Name from "../components/Name";
import Age from "../components/Age";
import Handle from "../components/Handle";
import Love from "../components/Love";
import ButtonComponent2 from './ButtonComponent2';
import Cards from './CardComponent';

const ViewComponent = () => {
  return (
    <View>
       
        <Name/>
        <GritoDeGuerra/>
        <Age/>
        <Love/>
        <Handle/>
        <ButtonComponent />
        <ButtonComponent2 />
    </View>
  )
}

export default ViewComponent;