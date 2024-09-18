import React from 'react'
import { View, Text, Image } from 'react-native'
import Styles from "../stylist/GeneralStyles"



interface ProductProps {
  id: number,
  productImage: string,
  productName: string,
  productPrice: number,
  isFeatured: boolean,
  productDescription: string,

}

const ProductsComponent = ({productImage, productName, productDescription, isFeatured, productPrice}: ProductProps) => {
  return (
    <View style={Styles.productCard}>
      <View>
        <Image style={Styles.productImage} source={{uri: productImage}} />
      </View>
      <View style={Styles.productCard}>
        <Text style={Styles.productName}>{productName}</Text>
        <Text style={Styles.productPrice}>${productPrice}</Text>
        {isFeatured && <Text>Featured</Text>}
        <Text style={Styles.productDescription}>{productDescription}</Text>
      </View>
    </View>
  )
}

export default ProductsComponent