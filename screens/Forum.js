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
            type: ['IMAGES', 'STORIES', 'RECCS'],
            pic: ProfilePic,
            text: Description,
        },
        interaction: {
            likes: () => Math.floor(Math.random())*300,
        },
    };

    const postsLiteral = genRands(postTemplate, 50);
    const [postList, setPostList] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const fetchData = () => {
        setPostList(postsLiteral);
        setFilteredPosts(postsLiteral);
    };

    const [search, setSearch] = useState("");
    const updateSearch = (search) => {
        setSearch(search);
        setFilteredPosts(postList.filter(({content}) => {
            return content.text.toLowerCase().includes(search.toLowerCase());
        }));
    }
    
    useEffect(() => fetchData(), []);
    
    const [filterType, setFilterType] = useState('NONE');
    const [firstRender, setFirstRender] = useState(true);
    useEffect(() => {
        if (!firstRender) {
            if (filterType !== 'NONE') {
                console.log('changing filter to ', filterType);
                setFilteredPosts(postList.filter(({content: {type}}) => type === filterType));
            } else {
                console.log('resetting filter');
                setFilteredPosts(postList);
            }
        } else {
            setFirstRender(false);
        }}, [filterType]);

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
                <Button 
                    title="Stories" 
                    onPress={() => filterType === "STORIES" ? setFilterType("NONE") : setFilterType("STORIES")}
                    disabled={filterType !== "STORIES" && filterType !== "NONE"}
                />
                <Button 
                    title="Images" 
                    onPress={() => filterType === "IMAGES" ? setFilterType("NONE") : setFilterType("IMAGES")}
                    disabled={filterType !== "IMAGES" && filterType !== "NONE"}
                />
                <Button 
                    title="Reccs" 
                    onPress={() => filterType === "RECCS" ? setFilterType("NONE") : setFilterType("RECCS")}
                    disabled={filterType !== "RECCS" && filterType !== "NONE"}
                />
                </View>
            </View>
            <FlatList
                style={{flex: 1}}
                data={filteredPosts}
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
