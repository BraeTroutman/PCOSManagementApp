import * as React from 'react';
import { Button, View, Text } from "react-native";
//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function ReportScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text> Welcome to daily report! </Text>
          <TextInput placeholder='Enter your weight'/>
          <TextInput placeholder='Enter your anxiety level'/>
          <TextInput placeholder='Starting day of your cycle'/>
          <TextInput placeholder='Ending day of your cycle'/>
      </View>
    );
}