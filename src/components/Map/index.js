import React, { useEffect, useState} from 'react';
import { View, PermissionsAndroid, Platform, Dimensions, Alert} from 'react-native';

import MapView,{Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

import Geolocation from '@react-native-community/geolocation';

const {width,height}=Dimensions.get('screen');
export default function Map(){ 

const [region,setRegion]=useState(null);
const [markers,setMarkers]=useState([]);

useEffect(()=>
{
    getMylocation()

},[])
function getMylocation(){
    Geolocation.getCurrentPosition(info =>{
        console.log("lat"+info.coords.latitude);
        console.log("long"+info.coords.longitude);

        setRegion({
            latitude:info.coords.latitude,
            longitude:info.coords.longitude,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        })
    },
    ()=>{
        console.log('error: algo deu errado')},{
            timeout:2000,
            enableHighAccuracy:true,
            maximumAge:1000,
        
    })
}

function newMarker(e){
let dados ={
key:markers.length,
coords:{
latitude:e.nativeEvent.coordinate.latitude,
longitude:e.nativeEvent.coordinate.longitude,
},
pinColor:'#ff0000'
}
setRegion({
latitude:e.nativeEvent.coordinate.latitude,
longitude:e.nativeEvent.coordinate.longitude,
latitudeDelta:0.0922,
longitudeDelta:0.0421
})
setMarkers(oldArray => [...oldArray,dados])
}
return(
        <View  style={{ flex:1 }}>
        <MapView  
        onMapReady={()=>{
        Platform.OS==='android'?
        PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
        title: "Permissão",
        message: "Solicitar a permissão de localização",
        buttonNeutral: "Pergunte-me depois",
        buttonNegative: "Cancelar",
        buttonPositive: "OK"
        })
        .then(()=>{
        console.log("Permissão Concedida")
        }):''
        }}
            style={{width:width,height:height}}
            region={region}
            showsUserLocation={true}
            zoomEnabled={true}
            minZoomLevel={17}
            onPress={(e)=>newMarker(e)}
        >
        {
        markers.map(marker =>{
            return(
                <Marker key={marker.key} coordinate={marker.coords} pinColor={marker.pinColor}/>
        )
        }
        )}

        </MapView>
    
        </View>
        );     
}

