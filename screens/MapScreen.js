import * as React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
import MapView, {Marker,Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const {width,height} = Dimensions.get('screen')
const MapScreen = () => {
const [origin,SetOrigin] = React.useState({
    latitude:-12.130561,
    longitude:-76.979959
});
const [destination,SetDestination] = React.useState({
    latitude:-12.087880,
    longitude:-77.034050
});
    return(
        <View style={styles.container}>
            <MapView
            style={{width:width,height:height}}
            initialRegion={{
                latitude:origin.latitude,
                longitude:origin.longitude,
                latitudeDelta:0.09,
                longitudeDelta:0.04
            }}
            >
                <Marker
                    draggable
                    coordinate={origin}
                    onDragEnd={(direction) => SetOrigin(direction.nativeEvent.coordinate)}
                />
                <Marker
                    draggable
                    coordinate={destination}
                    onDragEnd={(direction) => SetDestination(direction.nativeEvent.coordinate)}
                />
            </MapView>
            

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