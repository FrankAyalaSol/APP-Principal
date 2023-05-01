import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

const SettingsScreen = () => {
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
      <Text style={styles.title}>Añadir Tienda</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setTextInputValue}
        value={textInputValue}
        placeholder="Ingresa una Tienda"
      />
      <Button title="Agregar" onPress={handleAddItem}/>
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
    marginTop:20,
    textAlign:'center',
    marginBottom: 16,
  },
  textInput: {
    height: 40,
    borderColor: 'green',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 8,
    marginTop:20
  },
  list: {
    marginTop: 16,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SettingsScreen;