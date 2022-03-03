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
    Image
} from "react-native";
import { SearchBar } from 'react-native-elements';
import Users from '../constants/Users';

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
        setSubRes('');
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
    const [currentProf, setCurrentProf] = useState({
	picture: {large: null}, 
	name: {first: null, last: null}, 
	login: {username: null}}
    );

    const ProfileView = () => {
	return (
	    <Modal
	       	animationType="slide"
	    	transparent={true}
	    	visible={profileVisible}
	    	onRequestClose={() => setProfileVisible(!profileVisible)}
	    >
	        <View
	    	    style={{
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			marginTop: 100,
			marginBottom: 100,
			marginRight: 50,
			marginLeft: 50,
			backgroundColor: 'white',
			borderRadius: 20, 
		    }}
	    	>
    	            <Image 
	           	style={{
			    height: '15%',
			    width: '30%',
			    borderRadius: 50
		    	}} 
	    		source={{uri: currentProf.picture.large}}
	    	    />
	        <Text style={{
			fontSize: 20,
			fontWeight: 'bold',
		    }}>
	    		{currentProf.name.first} {currentProf.name.last}
	    	    </Text>
	    	    <Text>{currentProf.email}</Text>
	    	</View>
	    </Modal>
	);
    }

    const [users, setUsers] = useState(Users);

    return ( 
	<View style={styles.container}>
        <SearchBar 
	    round 
	    placeHolder="Type here..."
            onChangeText={
                updateSearch
            }
	    onCancel={() => setSubRes('')}
	    onClear={() => setSubRes('')}
	    showCancel={true}
            value={
                search
            }
        />
	<ProfileView/>
	<FlatList
	    style={{
	    }}
	    data={subRes}
            renderItem={({item}) => (
		<View style={styles.item}>
		<Text onPress={
		    () => {
			setCurrentProf(item);
		    	setProfileVisible(true);
		    }}> 
		    {item.name.first} {item.name.last} 
		</Text>
		</View>
            )}
	    ItemSeparatorComponent={ItemSeparatorView}
	    keyExtractor={(item) => item.login.username}
        />
	<View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
	{Users.map((user) => (
	    <Image style={{
		height: 75, 
		width: 75, 
		borderRadius: 50, 
		margin: 10, 
		borderColor: 'black',
		borderWidth: 2
	    }} 
	        source={{uri: user.picture.large}}
	    	onPress={() => {
		    setCurrentProf(user);
		    setProfileVisible(true);
		}}
	    />
	))}	
	</View>
	</View>
    );
}

const styles = StyleSheet.create({
    container: {
	
    },
    item: {
	flex: 1,
	flexDirection: 'row',
	padding: 10,
	alignItems: 'center',
    },
});

