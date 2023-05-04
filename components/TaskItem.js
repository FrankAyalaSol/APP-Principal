import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <Pressable
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.itemView}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemText: {
    color: "black",
  },
  itemView: {
    borderColor: "black",
    borderWidth: 4,
    backgroundColor: "#0099e6",
    borderRadius: 10,
    padding: 30,
    marginBottom:10,
    marginTop:20
  },
  pressedItem: {
    opacity: 0.7,
  },
});

export default TaskItem;
