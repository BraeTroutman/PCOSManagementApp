import React, { useState } from 'react';
import { FlatList, TextInput, View, Text } from "react-native";
import { SearchBar } from 'react-native-elements';

const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
}

const ItemSeparatorView = () => {
  return (
    // Flat List Item Separator
    <View
      style={{
        height: 0.5,
        width: '100%',
        backgroundColor: '#C8C8C8',
      }}
    />
  );
};
const ConnectionsSearch = () => { 
    const [search, setSearch] = useState("") 
    const updateSearch = (search) => setSearch(search);
    return (
	<View>
	<SearchBar
	    placeHolder="Type here..."
	    onChangeText={updateSearch}
	    value={search}
	/>
	<FlatList>
	    data={fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
	    	.catch((error) => alert(error))}
	    renderItem={ItemView}
	    keyExtractor={(item, index) => index.toString()}
	    ItemSeparatorComponent={ItemSeparatorView}
	</FlatList>
	</View>
    );
};

export default function ConnectionsScreen() {
    return (
      <View>
     	  <ConnectionsSearch /> 
      </View>
    );
}
