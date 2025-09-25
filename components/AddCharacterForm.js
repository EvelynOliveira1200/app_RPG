import React from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AddCharacterForm({ newCharacter, setNewCharacter, addCharacter }) {
    return (
        <View style={styles.inputRow}>
            <View style={styles.inputContainer}>
               <FontAwesome name="user" size={24} color="#C5282F" />
                <TextInput
                    style={styles.input}
                    placeholder="Nome do novo personagem..."
                    value={newCharacter}
                    onChangeText={setNewCharacter}
                    onSubmitEditing={addCharacter}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={addCharacter}>
                <FontAwesome6 name="add" size={24} color="#E69A28" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: "row",
        marginBottom: 20,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#E69A28",
        borderRadius: 8,
        backgroundColor: "#F4E4BC",
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        padding: 12,
        color: "#1A0E0A",
        fontSize: 16,
    },
    button: {
        backgroundColor: "#C5282F",
        padding: 12,
        borderRadius: 8,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        borderWidth: 2,
        borderColor: "#E69A28",
    },
    buttonText: {
        color: "#E69A28",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
});
