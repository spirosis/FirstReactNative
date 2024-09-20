import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Styles from '../stylist/GeneralStyles'


export default function Fetching() {
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    useEffect(() =>{
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => response.json())
        .then(
            (result) =>{
                setIsLoading(false);
                setResponse(result);
            },
            (error) => {
                setIsLoading(false);
                setError(error);
            }
        )
    }, []);

    const getContent = ()=>{

        if(isLoading) {
            return <ActivityIndicator size="large"/>
        }

        if (error) {
           return <Text>{error}</Text>
        }

        console.log(response);
        return <View>
            < Text style={Styles.text}>Bitcoin (USD): {response["bpi"]["USD"].rate}</Text>
            </View>

    };
  return (
    <View style={Styles.container} >
        {getContent()}
      <StatusBar style="auto" />
    </View>
  )
}
