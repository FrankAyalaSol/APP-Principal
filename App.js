import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

const App = () => {
  const [textInputValue, setTextInputValue] = useState('');
  const [data, setData] = useState([]);

  const handleAddItem = () => {
    if (textInputValue) {
      setData([...data, { id: data.length + 1, text: textInputValue }]);
      setTextInputValue('');
    }
  };

  const renderItem = ({ item }) => (
    <Text style={styles.item}>{item.text}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Lista</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setTextInputValue}
        value={textInputValue}
        placeholder="Ingresa un elemento"
      />
      <Button title="Agregar" onPress={handleAddItem} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  list: {
    marginTop: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default App;
