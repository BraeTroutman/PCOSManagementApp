import React, { useState } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function MakePostScreen() {
    const [selected, setSelected] = useState("Experiencer");
    return (
        <View>
            <Picker
                selectedValue={selected}
                style={styles.picker}
                onValueChange={(val, idx) => setSelected(val)}
            >
                <Picker.Item label="Experiencer" value="Experiencer"/>
                <Picker.Item label="Mentor" value="Mentor"/>
                <Picker.Item label="Friend" value="Friend"/>
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {},
    picker: {},
})