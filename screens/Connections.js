import React, { useState } from 'react';
import { StyleSheet, FlatList, TextInput, View, SafeAreaView, Text, StatusBar } from "react-native";
import { SearchBar } from 'react-native-elements';

const ConnectionsSearch = () => { 
    const [search, setSearch] = useState("") 
    const updateSearch = (search) => setSearch(search);
    return (
	<SafeAreaView>
	<SearchBar
	    placeHolder="Type here..."
	    onChangeText={updateSearch}
	    value={search}
	/>
	<List/>	
	</SafeAreaView>
    );
};

export default function ConnectionsScreen() {
    return (
      <View>
     	<ConnectionsSearch/> 
      </View>
    );
}

const TESTDATA = fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json).catch((error) => console.log(error));

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => {
  return (<View>
    <Text>{title}</Text>
  </View>);
};

const List = () => {
  const renderItem = ({ item }) => {
    return (<Item title={item.title} />);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
	    <Text>{item.title}</Text>
	)}
      />
    </SafeAreaView>
  );
}

