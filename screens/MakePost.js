import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function MakePostScreen() {
    const [selected, setSelected] = useState("Experiencer");
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });
        
        console.log(result);

        if (!result.cancelled) setImage(result.uri);
    }
    const takeImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) setImage(result.uri);
    }

    return (
        <View>
            <Picker
                selectedValue={selected}
                style={styles.picker}
                onValueChange={(val, idx) => setSelected(val)}
            >
                <Picker.Item label="Recommendation" value="Recommendation"/>
                <Picker.Item label="Image" value="Image"/>
                <Picker.Item label="Story" value="Story"/>
            </Picker>
            {
                selected === 'Image' && 
                <View>
                    <Button title="load picture" onPress={pickImage}/>
                    <Button title="take picture" onPress={takeImage}/>
                    {image && <Image source={{uri: image}} style={styles.image}/>}
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    page: {},
    picker: {},
    image: {
        height: 200,
        width: 200,
    }
})