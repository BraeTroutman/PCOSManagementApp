import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    FlatList,
    TextInput,
    View,
    SafeAreaView,
    Text,
    StatusBar,
    Modal,
    Button
} from "react-native";
import { SearchBar } from 'react-native-elements';

export default function ConnectionsScreen() {
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
        setSearch(search);
        setSubRes(fullRes.filter((item) => {
	    return (item.name.first + ' ' + item.name.last).toLowerCase().includes(search.toLowerCase());
	}));
    }
    const [fullRes, setFullRes] = useState([]);
    const [subRes, setSubRes] = useState([]);

    const fetchData = async () => {
        const data = await fetch("https://randomuser.me/api/?results=50").then(res => res.json());
        setFullRes(data.results);
        setSubRes(data.results);
    }

    useEffect(() => fetchData(), []);

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

    const [profileVisible, setProfileVisible] = useState(false);
    const [currentProf, setCurrentProf] = useState({name: "brae"});

    const ProfileView = () => {
	return (
	    <Modal
	        animationType="slide"
	        visible={profileVisible}
	    	onRequestClose={() => {setProfileVisible(!profileVisible)}}
	    >
		<View style={{
		    flex: 1, 
		    justifyContent: 'center', 
		    alignItems: 'center'
		}}>
	    	    <Text>{JSON.stringify(currentProf)}</Text>
	        </View>
	    </Modal>
	);
    };

    return ( 
	<View style={styles.container}>
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
	<ProfileView/>
	<FlatList
	    style={{
		marginBottom: 75 
	    }}
	    data={subRes}
            renderItem={({item}) => ( 
		<Text style={styles.item} onPress={
		    () => {
			setCurrentProf(item);
		    	setProfileVisible(true);
		    }}> 
		    {item.name.first} {item.name.last} 
		</Text>
            )}
	    ItemSeparatorComponent={ItemSeparatorView}
	    keyExtractor={(item) => item.login.username}
        /> 
	</View>
    );
}

const styles = StyleSheet.create({
    container: {
	
    },
    item: {
	padding: 10,
    },
});

