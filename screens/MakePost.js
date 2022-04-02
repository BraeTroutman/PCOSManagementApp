import React, { useState } from 'react';
import { 
    StyleSheet, 
    Button, 
    View, 
    Text, 
    TextInput, 
    Image,
    ScrollView,
    KeyboardAvoidingView,
    TouchableOpacity,
 } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function MakePostScreen({navigation}) {
    const [selected, setSelected] = useState('IMAGE');
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');

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
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) setImage(result.uri);
    }

    return (
        <View style={styles.page} behavior='padding'>
            <Picker
                selectedValue={selected}
                style={styles.picker}
                onValueChange={(val, idx) => setSelected(val)}
            >
                <Picker.Item label="Recommendation" value="RECC"/>
                <Picker.Item label="Image" value="IMAGE"/>
                <Picker.Item label="Story" value="STORY"/>
            </Picker>
            <KeyboardAvoidingView style={styles.content}>
            {
                selected === 'IMAGE'
                ? <View>
                    <Text style={styles.typeTitle}>IMAGE</Text>
                    <Button title="Load Photo" onPress={pickImage}/>
                    <Button title="Take Photo" onPress={takeImage}/>
                </View>
                : selected === 'RECC'
                ? <Text style={styles.typeTitle}>RECC</Text>
                : <Text style={styles.typeTitle}>STORY</Text>
            }
            <TextInput
                style={styles.text}
                multiline={true}
                editable
                onChangeText={setText}
                placeholder="You're message here..."
            />
            <View style={styles.cancelSubmit}>
                <TouchableOpacity style={styles.cancel} onPress={() => navigation.goBack()}><Text>cancel</Text></TouchableOpacity> 
                <TouchableOpacity style={styles.submit} onPress={() => navigation.goBack()}><Text>Post</Text></TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            <View style={{flex: 1}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
    },
    picker: {
        flex: 1,
    },
    imageContainer: {
        padding: 10,
    },
    image: {
    },
    text: {
        flex: 13,
        padding: 10,
        fontSize: 18,
    },
    typeTitle: {
        paddingTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    content: {
        backgroundColor: 'white',
        height: '75%',
        borderRadius: 10,
        flex: 20,
    },
    cancelSubmit: {
        flex: 2,
        flexDirection: 'row',
    },
    cancel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
        borderBottomLeftRadius: 10,
    },
    submit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomRightRadius: 10,
    }
})