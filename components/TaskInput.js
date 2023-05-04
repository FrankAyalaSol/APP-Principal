import { useState } from "react";
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
          placeholder="Write your task"
          onChangeText={taskInputHandler}
          value={enteredTaskText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Task" onPress={onAddTask} color={"darkgreen"} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color={"red"} />
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
    backgroundColor: "mediumseagreen"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
    color: "white",
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
