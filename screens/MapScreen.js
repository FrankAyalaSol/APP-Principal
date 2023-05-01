import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
const {width,height} = Dimensions.get('screen')
const MapScreen = () => {

    return(
        <View style={styles.container}>
            <MapView
            style={{width:width,height:height}}
            
            />
        </View>
    );
}
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
},
});

export default MapScreen;