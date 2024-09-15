import { Alert, Modal, View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import Styles from '../stylist/GeneralStyles';

const Form = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={Styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={Styles.centeredView}>
                    <View style={Styles.modalView}>
                        <Text style={Styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[Styles.buttonModal, Styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={Styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <TextInput style={Styles.textInput} placeholder="Enter Email Address"  />
            <TextInput secureTextEntry={true} style={Styles.textInput} placeholder="Re-Enter Password" />
            <TextInput secureTextEntry={true} style={Styles.textInput} placeholder="Re-Enter Password" />
            <View style={Styles.inputContainer}>

                <Pressable style={Styles.buttonLogin} onPress={() => setModalVisible(true)} >
                    <Text style={Styles.textHitMe}> Login</Text>
                </Pressable>
                <Pressable style={Styles.buttonSignup} onPress={() => alert("Sign Up for Free!")} >
                    <Text style={Styles.textHitMe}> Sing Up</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Form