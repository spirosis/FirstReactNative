import { View, FlatList, Text, Image } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from "../stylist/GeneralStyles";

const RandomUser = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchUser = async () => {
            try {
                const response = await axios.get("https://randomuser.me/api/?results=100");
                setUsers(response.data.results);
            }catch (err: any){
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, []);

    if (loading) {
        return (
            <Text>Loading...</Text>
        )
    };

    if (error) {
        return <Text>Error:{error}</Text>
    }

    const renderUser = ({item}: any) => {
        return (
            <View style={Styles.itemContainer} >
            <Image style={Styles.avatarItem} source={{ uri: item.picture.thumbnail }}/>
            <View style={Styles.infoContainer} >
                <Text style={Styles.nameItem}>{item.name.first}{item.name.last}</Text>
                <Text style={Styles.nameItem}>{item.email}</Text>
            </View>
        </View>
        )    
    }

  return (
    <View>
      <FlatList data={users} renderItem={renderUser} keyExtractor={(item: any) => item.login.uuid} />
    </View>
  )
};

export default RandomUser