import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    Modal,
    Image,
	TouchableOpacity,
} from "react-native";
import { SearchBar } from 'react-native-elements';
import { 
	genRands,
	FirstName,
	LastName,
	ProfilePic,
	Description,
} from 'random-object-gen';
import ItemSeparatorView from '../components/ItemSeparatorView';

export default function ConnectionsScreen() {
    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
        setSearch(search);
        setSubRes(fullRes.filter((item) => {
	    	return item.name.first.toLowerCase().includes(search.toLowerCase())
				|| item.name.last.toLowerCase().includes(search.toLowerCase())
				|| (item.name.first.toLowerCase() + ' ' + item.name.last.toLowerCase()).includes(search.toLowerCase());
		}));
    }
    const [fullRes, setFullRes] = useState([]);
    const [subRes, setSubRes] = useState([]);
	
	const userTemplate = {
		name: {
			first: FirstName, 
			last: LastName
		},
		picture: {
			large: ProfilePic,
		},
		role: ['experiencer', 'mentor', 'friend'],
		description: Description,
	};
	const Users = genRands(userTemplate, 50);

    const fetchData = async () => {
        const data = await fetch("https://randomuser.me/api/?results=50").then(res => res.json());
        setFullRes(Users);
        setSubRes(Users);
    }
    useEffect(() => fetchData(), []);
	
	const [profileVisible, setProfileVisible] = useState(false);
    const [currentProf, setCurrentProf] = useState({
		picture: {large: null}, 
		name: {first: null, last: null}, 
		login: {username: null}
	});

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
					flexDirection: 'column',
					marginTop: 100,
					marginBottom: 100,
					marginRight: 50,
					marginLeft: 50,
					backgroundColor: 'white',
					borderRadius: 20,
		    	}}
				elevation={5}
	    	>
				<View
					style={{
						flex: 7,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
    	        <Image 
	           		style={{
			    		height: 100,
						width: 100,
			    		borderRadius: 50
		    		}} 
	    			source={{uri: currentProf.picture.large}}
	    	    />
	        	<Text 
					style={{
						fontSize: 20,
						fontWeight: 'bold',
		    		}}
				>
	    		{currentProf.name.first} {currentProf.name.last}
	    	    </Text>
				<Text>
					This user is {currentProf.role == 'experiencer' ? 'an' : 'a'} {currentProf.role}
				</Text>
				<Text 
					style={{
						fontSize: 12,
						marginLeft: 20,
						marginRight: 20,
					}}
				>
					{currentProf.description}
				</Text>
				</View>
				<TouchableOpacity 
					onPress={() => setProfileVisible(!profileVisible)}
					elevation={5}
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: '#eeeeff',
						width: '100%',
						borderBottomLeftRadius: 20,
						borderBottomRightRadius: 20,
					}}
				>
					<Text style={{fontWeight: 'bold'}}>Close</Text>
				</TouchableOpacity>
	    	</View>
	    </Modal>
	);
    }

    return ( 
	<View style={styles.container}>
        <SearchBar 
			style={{flex: 1}}
	    	round 
	    	placeHolder="Type here..."
            onChangeText={updateSearch}
	    	onCancel={() => setSubRes(fullRes)}
	    	onClear={() => setSubRes(fullRes)}
	    	showCancel={true}
            value={search}
        />
		<ProfileView/>
		<FlatList
		    data={subRes}
	        renderItem={({item}) => (
				<TouchableOpacity 
					style={styles.item}
					onPress={() => {
						setCurrentProf(item);
						setProfileVisible(true);
					}}
				>
					<Image
						style={{
							height: 75, 
							width: 75, 
							borderRadius: 50, 
							margin: 10, 
							borderWidth: 2
				    	}} 
						source={{uri: item.picture.large}}
					/>
					<Text>{item.name.first} {item.name.last}</Text>
				</TouchableOpacity>
	        )}
		    ItemSeparatorComponent={ItemSeparatorView}
			keyExtractor={(item) => item.name.first + item.name.last}
	    />
	</View>
    );
}

const styles = StyleSheet.create({
    container: {
	
    },
	infoText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: 'navy',
	},
    item: {
		flex: 1,
		flexDirection: 'row',
		padding: 10,
		alignItems: 'center',
    },
});
