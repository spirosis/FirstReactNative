import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { useReducer, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Styles from "../stylist/GeneralStyles"

interface Profile {
    id: string;
    name: string;
    age: number;
}

interface State {
    profiles: Profile[];
}

interface AddProfileAction {
    type: 'ADD_PROFILE',
    payload: {name: string; age: number}
}

interface RemoveProfileAction{
    type: 'REMOVE_PROFILE',
    payload: {name: string; age: number};
}

interface UpdateProfileAction{
    type: 'UPDATE_PROFILE'
    payload: {id: string; name: string; age: number}
}

const initialState = {profiles: []};
const reducer = (state: State, action: Action) : State =>{
    switch (action.type) {
        case 'ADD_PROFILE':
            return{
                profiles:[
                    ...state.profiles,{
                        id: Date.now().toString(),
                        name: action.payload.name,
                        age: action.payload.age,
                    }
                ]
            }
        case 'REMOVE_PROFILE':
            return{
                profiles: state.profiles.filter(profile => profile.id !== action.payload.id)
            }

        case 'UPDATE_PROFILE':
            return{
                profiles: state.profiles.map(profile => profile.id === action.payload.id ? {...profile, name:action.payload.name, age: action.payload.age} : profile    
                ),
            };
            
        default:
            return state;
    }
} 

const UserProfile = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [editingId, setEditingId] = useState(null)

    const handleAddProfile = () =>{
        if (name.trim() && age.trim()){
            dispatch({
                type: 'ADD_PROFILE',
                payload: {name, age: parseInt(age, 10)}
            })
            setName('');
            setAge('');
        }
    }

  return (
    <View>
      <TextInput style={Styles.inputProfile}
      placeholder="Enter name"
      value={name}
      onChangeText={setName} />

      <FlatList
        data={state.profiles}
        keyExtractor={(item) => item.id}
        renderItem={({item}) =><View style={Styles.profileItem}>
                <Text style={Styles.name}>{item.age} years old,{item.name}</Text>
                <TouchableOpacity onPress={() => {
                    setName(item.name);
                    setAge(item.age.toString());
                    setEditingId(item.id);
                }}>
                <Text style={Styles.editButton}>Edit</Text>
                </TouchableOpacity>
        </View>}
        >
        
      </FlatList>
    </View>
  )
}

export default UserProfile