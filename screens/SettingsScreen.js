import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TaskItem from "../components/TaskItem";
import TaskInput from "../components/TaskInput";

const SettingsScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addTaskHandler(enteredTaskText) {
    console.log(modalIsVisible);
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        title: enteredTaskText,
        id: Math.random().toString(),
        enabled: true,
      },
    ]);
    endModalHandler();
  }

  function startModalHandler() {
    setModalIsVisible(true);
  }
  function endModalHandler() {
    setModalIsVisible(false);
  }

  function deleteTaskHandler(id) {
    setTasks((currentTasks) => {
      Alert.alert(
                  '¡Alerta!',
                  '¿Estás seguro de borrar esta tienda?',
                  [
                    {text:'No',onPress:() => console.log('Cancelado')},
                    {text:'Si',onPress:() => console.log('Cancelado') ,deleteTaskHandler}
                  ],{cancelable: true})
      return currentTasks.filter((item) => item.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Button
        title="Add new Task"
        color="darkgreen"
        onPress={startModalHandler}
      />
      <TaskInput
        visible={modalIsVisible}
        onAddTask={addTaskHandler}
        onCancel={endModalHandler}
      />
      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          renderItem={(itemData) => {
            return (
              <TaskItem
                id={itemData.item.id}
                text={itemData.item.title}
                enabled={itemData.item.enabled}
                onDeleteItem={deleteTaskHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  },
});
export default SettingsScreen;