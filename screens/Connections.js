import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    FlatList,
    TextInput,
    View,
    SafeAreaView,
    Text,
    StatusBar
} from "react-native";
import { SearchBar } from 'react-native-elements';

export default function ConnectionsScreen() {
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
        setSearch(search)
        setSubRes(fullRes.filter((item) => item.title.includes(search)));
    }
    const [fullRes, setFullRes] = useState([]);
    const [subRes, setSubRes] = useState([]);

    const DATA = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
        setFullRes(data);
        setSubRes(data);
    }

    useEffect(() => DATA(), []);

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View style = {{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    return ( 
	<View>
        <SearchBar 
	    round 
	    placeHolder="Type here..."
            onChangeText={
                updateSearch
            }
            value={
                search
            }
        /> 
	<FlatList 
	    data={subRes}
            renderItem={({item}) => ( 
		<Text onPress={() => alert(item.title)}> 
		    {item.title} 
		</Text>
            )}
	    ItemSeparatorComponent={ItemSeparatorView}
        /> 
	</View>
    );
}

