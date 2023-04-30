import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet
} from 'react-native';

const HomeScreen = () => {

    return(
        <View>
            <Text style={styles.Title}>
            Home Screen
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

export default HomeScreen;