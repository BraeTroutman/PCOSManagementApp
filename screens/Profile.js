import * as React from 'react';
import { Button, View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnectionsScreen from './Connections';

const Stack = createNativeStackNavigator();

export default function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
	<Button title="My Connections" onPress={() => navigation.navigate('Connections')} />
      </View>
    );
}

