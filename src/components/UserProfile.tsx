import { FlatList, View, Text, TouchableOpacity, Button } from 'react-native';
import { useReducer, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import Styles from "../stylist/GeneralStyles";

interface Profile {
    id: string;
    name: string;
    age: number;
}

interface State {
    profiles: Profile[];
}

interface AddProfileAction {
    type: 'ADD_PROFILE';
    payload: { name: string; age: number };
}

interface RemoveProfileAction {
    type: 'REMOVE_PROFILE';
    payload: string; // No change here, this is correct
}

interface UpdateProfileAction {
    type: 'UPDATE_PROFILE';
    payload: { id: string; name: string; age: number };
}

type Action = AddProfileAction | RemoveProfileAction | UpdateProfileAction;

const initialState = { profiles: [] };

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_PROFILE':
            return {
                profiles: [
                    ...state.profiles,
                    {
                        id: Date.now().toString(),
                        name: action.payload.name,
                        age: action.payload.age,
                    },
                ],
            };
        case 'REMOVE_PROFILE':
            return {
                profiles: state.profiles.filter((profile) => profile.id !== action.payload),
            };

        case 'UPDATE_PROFILE':
            return {
                profiles: state.profiles.map((profile) =>
                    profile.id === action.payload.id
                        ? { ...profile, name: action.payload.name, age: action.payload.age }
                        : profile
                ),
            };

        default:
            return state;
    }
};

const UserProfile = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // MODIFIED: Changed the type of `editingId` to `string | null` to account for the null state.
    const [editingId, setEditingId] = useState<string | null>(null); 

    const handleAddProfile = () => {
        if (name.trim() && age.trim()) {
            dispatch({
                type: 'ADD_PROFILE',
                payload: { name, age: parseInt(age, 10) },
            });
            setName('');
            setAge('');
        }
    };

    const handleUpdateProfile = (id: string) => {
        if (name.trim() && age.trim()) {
            dispatch({
                type: 'UPDATE_PROFILE',
                payload: { id, name, age: parseInt(age, 10) },
            });

            setName('');
            setAge('');
            setEditingId(null); // MODIFIED: Reset `editingId` after updating to null, since editing is complete.
        }
    };

    // FIXED: Ensure `handleRemoveProfile` takes `id: string` as its parameter.
    const handleRemoveProfile = (id: string) => {
        dispatch({ type: 'REMOVE_PROFILE', payload: id });
    };

    return (
        <View style={Styles.container}>
            <TextInput
                style={Styles.inputTextProfile}
                placeholder="Enter name"
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={Styles.inputTextProfile}
                placeholder="Enter age"
                keyboardType="numeric"
                value={age}
                onChangeText={setAge}
            />

            {editingId ? (
                <Button
                    title="Update profile"
                    onPress={() => handleUpdateProfile(editingId)} // No changes, just ensure it receives the correct `id`
                />
            ) : (
                <Button title="Add profile" onPress={handleAddProfile} />
            )}

            <FlatList
                data={state.profiles}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={Styles.profileItem}>
                        <Text style={Styles.profileText}>
                            {item.name}, {item.age} y/o.
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setName(item.name);
                                setAge(item.age.toString());
                                setEditingId(item.id); // MODIFIED: Store the `id` of the profile to be edited in `editingId`.
                            }}
                        >
                            <Text style={Styles.editButton}>Edit</Text>
                        </TouchableOpacity>

                        {/* FIXED: Call handleRemoveProfile with the correct id */}
                        <TouchableOpacity onPress={() => handleRemoveProfile(item.id)}> 
                            <Text style={Styles.removeButton}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

export default UserProfile;
