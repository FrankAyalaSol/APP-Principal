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

const HomeScreen = () => {

    return(
        <ImageBackground source={require("../assets/landscape-mobile-wallpaper.jpg")} style={{height:'100%',width:'100%'}}>
        <View style={styles.container}>
            <Text style={styles.title}>
            Aplicación de Registro de Tienda
            </Text>
            <Text style={styles.text1}>
            Esta es una aplicación de Registro de Tiendas y descubriendo la biblioteca de Google Maps
            </Text>
        </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',

    },
    title:{
        fontSize: 50,
        textAlign:"center",
        marginTop:"20%",
        fontWeight:'bold'
    },
    text1:{
        fontSize: 20,
        textAlign:"center",
        fontStyle:"italic",
        marginTop:"50%",
        color:'white'
    }

});

export default HomeScreen;