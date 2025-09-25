import React, { useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from 'react-native-paper';
import Header from "./components/Header";
import AddCharacterForm from "./components/AddCharacterForm";
import CharacterCard from "./components/CharacterCard";

// import * as SQLite from "expo-sqlite";
// 💾 Conectar ao banco SQLite
// const db = SQLite.openDatabase("party.db");

export default function App() {

  const [characters, setCharacters] = useState([
    { id: 1, name: "🧙‍♂️ Gandalf o Mago", recruited: 0 },
    { id: 2, name: "⚔️ Aragorn o Guerreiro", recruited: 1 },
    { id: 3, name: "🏹 Legolas o Arqueiro", recruited: 0 }
  ]);
  const [newCharacter, setNewCharacter] = useState("");

  function addCharacter() {
    if (newCharacter === "") return;

    const newId = characters.length + 1;
    
    const newCharacterObj = {
      id: newId,
      name: newCharacter,
      recruited: 0
    };

    const newList = [newCharacterObj];
    const allCharacters = newList.concat(characters);

    setCharacters(allCharacters);
    setNewCharacter("");
  }

  function toggleRecruit(character) {
    const newCharacters = [];
    for (let i = 0; i < characters.length; i++) {
      const currentChar = characters[i];
      if (currentChar.id === character.id) {
        const newStatus = currentChar.recruited ? 0 : 1;
        newCharacters.push({
          id: currentChar.id,
          name: currentChar.name,
          recruited: newStatus
        });
      } else {
        newCharacters.push(currentChar);
      }
    }
    setCharacters(newCharacters);
  }

  function removeCharacter(character) {
    Alert.alert("Remover Personagem", `Remover ${character.name} da party ?`, [
      { text: "Não" },
      {
        text: "Sim",
        onPress: () => {
          const newList = [];
          for (let i = 0; i < characters.length; i++) {
            if (characters[i].id !== character.id) {
              newList.push(characters[i]);
            }
          }
          setCharacters(newList);
        }
      }
    ]);
  }

  function renderCharacter({ item }) {
    return (
      <CharacterCard
        character={item}
        onToggleRecruit={toggleRecruit}
        onRemove={removeCharacter}
      />
    );
  }

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <Header />

        <AddCharacterForm
          newCharacter={newCharacter}
          setNewCharacter={setNewCharacter}
          addCharacter={addCharacter}
        />
        <FlatList
          data={characters}
          keyExtractor={item => String(item.id)}
          renderItem={renderCharacter}
          style={styles.list}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A0E0A",
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  list: {
    flex: 1,
  },
  status: {
    fontSize: 20,
    marginLeft: 10,
  }
});