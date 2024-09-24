import { ScrollView, View } from 'react-native'
import React from 'react'


import Cards from '../components/CardComponent'
import Form from './FormComponent';
import ProductsComponent from './ProductsComponent';
import { products } from '../public/Products';
import ConversionComponent from './ConversionComponent';
import Fetching from './Fetching';
import TogglerComponent from './TogglerComponent';
import WeatherApp from './GetWeatherComponent';
import ColorPicker from './ColorPicker';

const ViewComponent = () => {
  return (
    <ScrollView>

    <View>
       {/* <Cards /> */}
       <ConversionComponent/>
       {/* <Fetching /> */}
       <TogglerComponent/>
       <WeatherApp />
       <ColorPicker />
       {/* <Form /> */}
       {/* {products.map(item =>(

         <ProductsComponent 
          productImage={item.productImage}
          productName={item.productName}
          productPrice={item.productPrice}
          isFeatured={item.isFeatured}
          productDescription={item.productDescription}
          />
       ))
       } */}
    </View>

    </ScrollView>
  )
}

export default ViewComponent;