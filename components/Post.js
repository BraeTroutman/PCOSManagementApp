import React, { useState } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Button,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

export default function Post(props) {
    const {content, user, interaction} = props;

    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <Image
                    style={styles.profilePic} 
                    source={{uri: props.user.pic}}
                />
                <Text style={styles.headerText}>{user.first} {user.last}</Text>
            </View>
            <View styles={styles.content}>
                {content.type === 'cappedImage' 
                    && <Image style={styles.contentImage} source={{uri: content.pic}}/>
                }
                <Text style={styles.contentText}>{props.content.text}</Text>
            </View>
            <View style={styles.interactBar}>
                <FontAwesome name="bookmark-o" size={24} color="black" />
                <AntDesign name="hearto" style={styles.like} size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'black',
        borderTopWidth: 0.5,
        paddingBottom: 20,
    },
    content: {
        
    },
    contentText: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    header: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        padding: 5, 
        width: '100%', 
        borderBottomWidth: 0.5,
        borderColor: 'black',
        alignItems: 'center',
    },
    profilePic: {
        height: 50,
        width: 50,
        borderRadius: 100,
    },
    headerText: {
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    contentImage: {
        width: Dimensions.get('window').width,
        height: 300,
    },
    interactBar: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    like: {
        paddingLeft: 10,
    }
})