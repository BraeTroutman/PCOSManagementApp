import React, { useState } from 'react';
import { TextInput, View, Text } from "react-native";
import { SearchBar } from 'react-native-elements';

const MyBar = () => { 
    const [search, setSearch] = useState("") 
    const updateSearch = (search) => setSearch(search);
    return (
	<SearchBar
	    placeHolder="Type here..."
	    onChangeText={updateSearch}
	    value={search}
	/>
    );
};

export default function ConnectionsScreen() {
    return (
      <View>
     	  <MyBar /> 
      </View>
    );
}
