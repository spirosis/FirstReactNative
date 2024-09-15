import { ScrollView, View } from 'react-native'
import React from 'react'



import Cards from '../components/CardComponent'
import Form from './FormComponent';

const ViewComponent = () => {
  return (
    <ScrollView>

    <View>
       <Cards />
       <Form />
    </View>

    </ScrollView>
  )
}

export default ViewComponent;