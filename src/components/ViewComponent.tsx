import { SafeAreaView, ScrollView, View } from 'react-native'
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
import ToDoList from './ToDoList';
import RandomUser from './RandomUser';
import UserProfile from './UserProfile';
import { NumberProvider } from '../context/RandomNumberContext';
import RandomNumber from './RandomNumber';
import AddRandomNumber from './AddRandomNumber';
import MyForm from './MyForm';

const ViewComponent = () => {
  return (
    // <ScrollView>

    <View>
      {/* <RandomUser /> */}
      {/* <UserProfile /> */}
      <NumberProvider>
        <SafeAreaView>
          <RandomNumber />
          <AddRandomNumber />
        </SafeAreaView>
      </NumberProvider>
      <MyForm />

       {/* <Cards /> */}
       {/* <ConversionComponent/> */}
       {/* <Fetching /> */}
       {/* <TogglerComponent/>
       <WeatherApp />
       <ColorPicker />
       <ToDoList /> */}
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

    // </ScrollView>
  )
}

export default ViewComponent;