import React, { useState, useEffect } from 'react';
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

const Item = ({ title }) => {
  return (<View>
    <Text>{title}</Text>
  </View>);
};

const List = () => {
  const renderItem = ({ item }) => {
    return (<Item title={item.title} />);
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const DATA = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
      setData(data);
      setLoading(false);
  }

  useEffect(() => DATA(), []);

  return (
    <SafeAreaView>
      <FlatList
        style={{marginBottom: 200}}
        data={data}
        renderItem={({ item }) => (
	    <Text style={{backgroundColor: '#ace1af', borderColor: 'black', marginTop: 5}}>{item.title}</Text>
	)}
      />
    </SafeAreaView>
  );
}

