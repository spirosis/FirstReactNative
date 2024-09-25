import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Styles from '../stylist/GeneralStyles'
import { FlatList } from 'react-native-gesture-handler';


const ToDoList = () => {

    const [text, setText] = useState('')
    const [todo, setTodo] = useState([])

    const addTodo = () => {
        if(text.trim()){
            setTodo([...todo, {id: Date.now().toString(), text}]);
            setText("")
        }
    };

    const handleSubmit = () => {
        addTodo()
    };

    const removeTodo = (id: string) =>{
        setTodo(todo.filter(todo => todo.id !== id));
    }
    const renderTodo =({item}) =>{
        return (
        <TouchableOpacity onPress={()=> removeTodo(item.id)} style={Styles.itemTodo} >
            <Text style={Styles.itemTodo}>{item.text}</Text>
        </TouchableOpacity>

        );
    };

    return (
    <View>
      <Text style={Styles.headerTodo}>To Do List</Text>
      <TextInput
        style={Styles.inputTodo}
        value={text}
        onChangeText={setText}
        placeholder="Add a new task"
        onSubmitEditing={handleSubmit}
        returnKeyType="done" />
    <Button title="Add Task" onPress={addTodo} />
    <FlatList 
    data={todo}
    keyExtractor={(item) => item.id}
    renderItem={renderTodo}
    />

    </View>


  )
}

export default ToDoList