import * as React from 'react';
import { Image, StyleSheet, Button, View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnectionsScreen from './Connections';
import Users from '../constants/Users';

export default function ProfileScreen({ navigation }) {
    const styles = StyleSheet.create({
	user: {
	    fontSize: 30,
	    fontWeight: '700',
	    margin: 10,
	},
	role: {
	    fontSize: 20,
	    fontWeight: '500',
	    margin: 10,
	},
	bio: {
	    fontSize: 25,
	    fontWeight: '500',
	    margin: 10,
	},
	activities: {
	    fontSize: 15,
	    fontWeight: '700',
	    margin: 10,
	},
	description: {
	    fontSize: 15,
	    fontWeight: '300',
	    margin: 10,
	},
	myButton: {
	    margin: 20,
	}
    });
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
	<Text style={styles.user}>Username</Text>
	<Image 
	    style={{height: '15%', width: '30%', borderRadius: 50}}
	    source={{uri: Users[0].picture.large}}
	/>
	<Button style={styles.myButton}  title="Follow +"/>
	<Text style={styles.role}>This user is a (insert role)</Text>
	<Button style={styles.myButton}  title="My Connections" onPress={() => navigation.navigate('Connections')} />
	<Button style={styles.myButton}  title="Edit Profile"/>
	<Button style={styles.myButton}  title="Edit Privacy Settings"/>
	<Button style={styles.myButton}  title="Edit Sharing Preferences"/>
	<Button style={styles.myButton}  title="Edit Content Preferences"/>
	<Button style={styles.myButton}  title="Edit Notification Preferences"/>

	<Text style={styles.bio}>Bio...</Text>
	<Text style={styles.activities}>Recent activity...</Text>
	<Text style={styles.description}>This is an optional description lorem ipsum dolor sit amet, consectetur adipicking elit, sed do eriusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</Text>
      </View>
    );
}

