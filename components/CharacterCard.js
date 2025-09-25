import React from "react";
import { Text, TouchableOpacity, StyleSheet, Modal, LayoutAnimation, Platform, UIManager 
} from "react-native";
import { Card } from 'react-native-paper';
import { View } from "react-native-web";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CharacterCard({ character, onToggleRecruit, onRemove }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleRemove = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    onRemove(character);
    setModalVisible(false);
  };

  return (
    <Card style={{ marginBottom: 10 }}>
      <TouchableOpacity
        style={[styles.character, character.recruited && styles.characterRecruited]}
        onPress={() => onToggleRecruit(character)}
        onLongPress={() => setModalVisible(true)}
      >
        <Text style={[styles.characterText, character.recruited && styles.characterRecruitedText]}>
          {character.name}
        </Text>
        <Text style={styles.status}>
          {character.recruited ? "⭐" : "💤"}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja remover {character.name}?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleRemove}>
                <Text style={styles.modalButtonText}>Sim ✅</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Não ❌</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Card>
  );
}


const styles = StyleSheet.create({
    character: {
        backgroundColor: "#2C1810",
        padding: 15,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#58180D",
    },
    characterRecruited: {
        backgroundColor: "#58180D",
        borderColor: "#E69A28",
        borderWidth: 2,
    },
    characterText: {
        flex: 1,
        fontSize: 16,
        color: "#F4E4BC",
        fontWeight: "500",
    },
    characterRecruitedText: {
        color: "#E69A28",
        fontWeight: "bold",
    },
    status: {
        fontSize: 20,
        marginLeft: 10,
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "#58180D",
        borderColor: "#E69A28",
        borderWidth: 2,
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
        width: 500,
        shadowColor: "#000",
        shadowOpacity: 0.25,  
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: "center",
        color: "#E69A28",
        fontWeight: "bold",
    },
    modalButtonText: {
        color: "#fff",
        fontSize: 16,
        marginTop: 10,
        fontWeight: "bold",
    },
    modalButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
});