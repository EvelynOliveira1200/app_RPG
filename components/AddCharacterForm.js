import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function AddCharacterForm({ newCharacter, setNewCharacter, addCharacter }) {
    return (
        <View style={styles.inputRow}>
            <TextInput
                style={styles.input}
                placeholder="🎭 Nome do novo personagem..."
                value={newCharacter}
                onChangeText={setNewCharacter}
                onSubmitEditing={addCharacter}
            />
            <TouchableOpacity style={styles.button} onPress={addCharacter}>
                <Text style={styles.buttonText}>⚔️</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    inputRow: {
        flexDirection: "row",
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 2,
        borderColor: "#E69A28",
        borderRadius: 8,
        padding: 12,
        backgroundColor: "#F4E4BC",
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
