import * as React from 'react';
import { Image, StyleSheet, Button, View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnectionsScreen from './Connections';
import Users from '../constants/Users';

export default function ProfileScreen({navigation}) {
    return (
	<View style={styles.container}>
		<View style={styles.header}>
			<Image
				source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/VAN_CAT.png/440px-VAN_CAT.png"}}
				style={styles.profilePhoto}
		         />
			   <Text style={styles.name}>Steve Thompson</Text>
   			   <Button style={styles.button} title="follow +"/>
			 </View>
			 <View style={styles.body}>
				<Text style={styles.description}>This user is a Supporter</Text>
                        <Text style={styles.description}>Biography:</Text>
                        <Text style={styles.description}>Hello there! I am steve, and I am here to support my wife, who was diagnosed with PCOS eight months ago. Looking forward to meeting fellow supporters and learning new things! :)</Text>
				<View style={styles.buttons}>
                          <Button style={styles.button} title="My connections" onPress={()=>navigation.navigate('Connections')}/>
				  <Button style={styles.button} title="Edit Profile"/>
				  <Button style={styles.button} title="Privacy Settings"/>
				  <Button style={styles.button} title="Edit Preferences"/>
			</View>
		</View>
	</View>
    );
 }

      const styles = StyleSheet.create({
		container: {
		  flex: 1,
		  flexDirection: 'column',
		},
		header: {
		  flex: 1,
		  flexDirection: 'row',
		  alignItems: 'center',
		  margin: 10,
		  marginTop: 30,
		  borderBottomColor: 'black',
		  borderBottomWidth: 1,
		  padding: 10,
		},
		body: {
		  flex: 6,
		  flexDirection: 'column',
		  alignItems: 'center',
		},
		profilePhoto: {
		  height: 100,
		  width: 100,
		  borderRadius: 50,
		},
		name: {
		  fontWeight: 'bold',
		  paddingLeft: 20,
		  fontSize: 20,
		},
		description: {
		  padding: 10,
		},
		bio: {
		  padding: 10,
		},
		button: {
		  width: 100,
		},
		buttons: {
		  flex: 10,
		  flexDirection: 'column',
		  width: '100%'
		}
	});
	

  