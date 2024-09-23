import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from "react";


const weatherData = {
    London: "12, Horrible",
    Cuba: "40, Myserable",
    NewYork: "16, Stinky",

};

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");

    const getWeather = () =>{
      setWeather(weatherData[city] || "No data");
    };

  return (
    <View>
      <Text>Weather App</Text>
      <TextInput placeholder="Enter City" value={city} onChangeText={setCity}/>
      <Button title="Get Weather" onPress={getWeather} />
      {weather ? <Text>{weather}</Text> : null}
    </View>
  )
}

export default WeatherApp