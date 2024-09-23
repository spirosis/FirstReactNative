import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Styles from '../stylist/GeneralStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Fetching() {
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState();
    let [response, setResponse] = useState();

    useEffect(() => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(response => response.json())
            .then(
                (result) => {
                    setIsLoading(false);
                    setResponse(result);
                },
                (error) => {
                    setIsLoading(false);
                    setError(error);
                }
            )
    }, []);

    const getContent = () => {

        if (isLoading) {
            return <ActivityIndicator size="large" />
        }

        if (error) {
            return <Text>{error}</Text>
        }

        console.log(response);
        return <View style={Styles.centeredView}>

            <Icon name="currency-bitcoin" size={20} color="#300" />
            <Text style={Styles.text}>
            Bitcoin (USD):
            
                <Text style={Styles.productName}> {response["bpi"]["USD"].rate}</Text></Text>

            
                <Icon name="currency-pound" size={20} color="#300" />
            <Text style={Styles.text}>Bitcoin (GBP):
                <Text style={Styles.productName}> {response["bpi"]["GBP"].rate}</Text></Text>


                <Icon name="euro-symbol" size={20} color="#300" />
            <Text style={Styles.text}>Bitcoin (EUR):
                <Text style={Styles.productName}> {response["bpi"]["EUR"].rate}</Text></Text>

        </View>


    };
    return (
        <View style={Styles.container} >
            {getContent()}
            <StatusBar style="auto" />
        </View>
    )
}
