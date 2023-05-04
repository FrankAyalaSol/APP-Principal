import { useState } from "react";
import { ImageBackground } from "react-native";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }
  function onAddTask() {
    props.onAddTask(enteredTaskText);
    setEnteredTaskText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nueva Tienda"
          onChangeText={taskInputHandler}
          value={enteredTaskText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Añadir" onPress={onAddTask} color={"#0073e6"} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"#ff4000"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    color: "black",
    fontSize: 18
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default TaskInput;
