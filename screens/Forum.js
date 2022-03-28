import React, { useState, useEffect } from 'react';
import { Button, View, FlatList } from "react-native";
import { load, store } from '../utils/AsyncWrapper';
import { 
    genRands, 
    FirstName, 
    LastName, 
    ProfilePic, 
    Description
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
            pic: ProfilePic,
            text: Description,
        },
        interaction: {
            likes: () => Math.floor(Math.random())*300,
        },
    };
    const posts = genRands(postTemplate, 10);
    const [postList, setPostList] = useState([]);
    const fetchData = () => {
        setPostList(posts);
    };
    
    useEffect(() => fetchData(), []);   

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
	              title="Initial Login Screen"
	              onPress={() => navigation.navigate('InitialLogin')}
	        />
            <FlatList
                style={{flex: 1}}
                data={postList}
                renderItem={({item}) => Post(item)}
                ItemSeparatorComponent={ItemSeparatorView}
            />
        </View>
    );
}
