import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';
import SettingsScreen from './SettingsScreen';

const StackScreen = () => {

    return(
        <View>
            <Text style={styles.Title}>
            Stack Screen
            </Text>
           
        </View>
    );
}
const styles = StyleSheet.create({
title:{
    fontSize: 30,
    textAlign:"center",
    marginTop:"20%"
}

});

export default StackScreen;