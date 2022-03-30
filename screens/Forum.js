import React, { useState, useEffect } from 'react';
import { Button, View, FlatList, Modal, Text} from "react-native";
import { load, store } from '../utils/AsyncWrapper';
import { FAB, SearchBar } from 'react-native-elements';

import { 
    genRands, 
    FirstName, 
    LastName, 
    ProfilePic, 
    Description,
} from 'random-object-gen';
import Post from '../components/Post';
import ItemSeparatorView from '../components/ItemSeparatorView';

export default function ForumScreen({ navigation }) {
    const postTemplate = {
        user: {
            first: FirstName,
            last: LastName,
            pic: ProfilePic,
        },
        content: {
            type: ['text', 'cappedImage', 'reccomendation'],
            pic: ProfilePic,
            text: Description,
        },
        interaction: {
            likes: () => Math.floor(Math.random())*300,
        },
    };

    const posts = genRands(postTemplate, 50);
    const [postList, setPostList] = useState([]);
    const fetchData = () => {
        setPostList(posts);
    };

    const [search, setSearch] = useState("hello!");
    const updateSearch = (search) => {
        setSearch(search);
    }
    
    useEffect(() => fetchData(), []);   

    return (
        <View style={{ flex:1, paddingLeft: 5, paddingRight: 5 }}>
            <View style={{backgroundColor: 'white', paddingBottom: 10}}>
                <SearchBar
         			style={{
        				flex: 1,
        			}}
        			inputStyle={{
        				backgroundColor: 'white',
        			}}
        			inputContainerStyle={{
        				backgroundColor:'white' 
        			}}
        			containerStyle={{
        				backgroundColor: 'white',
        				borderWidth: 1,
        				borderRadius: 5,
        			}}
        			placeholderTextColor="#ace1af"
        	    	round 
        	    	placeHolder="Type here..."
        	    	showCancel={true}
                    value={search}
                    onChangeText={updateSearch}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 10}}>
                <Button title="Stories"/>
                <Button title="Images"/>
                <Button title="Reccs"/>
                </View>
            </View>
            <FlatList
                style={{flex: 1}}
                data={postList}
                renderItem={({item}) => <Post {...item}/>}
                keyExtractor={(post) => post.user.first + post.user.last}
            />
            <FAB
                visible={true}
                placement="right" 
                title="+"
                onPress={() => navigation.navigate('InitialLogin')}
            />
        </View>
    );
}
