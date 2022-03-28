import * as React from 'react';
import { 
    View, 
    Text,
    Image,
} from 'react-native';

export default function Post(props) {
    return (
        <View style={{flex: 1, padding: 10, flexDirection: 'column', alignItems: 'center'}}>
            <Image
                style={{
                    height: 50,
                    width: 50,
                    borderRadius: 100,
                }}
                source={{uri: props.user.pic}}
            />
            <Text>{props.content.text}</Text>
        </View>
    );
}