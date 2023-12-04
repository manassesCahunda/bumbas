import React from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Search =()=>{

    return(
        <GooglePlacesAutocomplete 
        placeholder="Locais Disponiveis"
        placeholderTextColor="#922"
        onPress={(date,details)=>{
            console.log(date);
            console.log(details);
        }}
        query={{
            key:"AIzaSyBoS3oqu2D4ZM5e54ODxOZe2NCbjgSGGA0",
            language:"pt"
        }}
        listViewDisplayed={true}
        fetchDetails={true}
        enablePoweredByContainer={false}   
        />
    )
}

export default Search;