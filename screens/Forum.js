import React, { useState, useEffect } from 'react';
import { Button, View, FlatList, Modal, Text} from "react-native";
import { load, store } from '../utils/AsyncWrapper';
import { FAB } from 'react-native-elements';

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
    
    useEffect(() => fetchData(), []);   

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                style={{flex: 1}}
                data={postList}
                renderItem={({item}) => Post(item)}
                keyExtractor={(post) => post.user.first + post.user.last}
            />
            <Button
	              title="Initial Login Screen"
	              onPress={() => navigation.navigate('InitialLogin')}
	        />
            <FAB
                visible={true}
                placement="right" 
                title="+"
                onPress={() => navigation.navigate('InitialLogin')}
            ></FAB>
        </View>
    );
}
