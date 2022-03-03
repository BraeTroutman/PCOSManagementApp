import * as React from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons, FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileScreen from './screens/Profile';
import ForumScreen from './screens/Forum';
import MessageScreen from './screens/Messages';
import NavItems from './constants/NavItems';
import TrackingScreen from './screens/Tracking';
import ConnectionsScreen from './screens/Connections';
import InitScreen from './screens/InitialScreen';
import ReportScreen from './screens/Report'

import NavIcon from './components/NavIcon';
import Header from './components/Header';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {
          NavItems.map(drawer => <Tab.Screen 
            key={drawer.name}
	    name={drawer.name}
	    options={{
		tabBarIcon:({focused})=> 
		    <NavIcon 
			class={drawer.iconType} 
			name={drawer.iconName} 
			size={24} 
			color={focused ? "#ace1af" : "black"}
		    />,
		headerRight: drawer.headerRight
	    }}
	    component={
  	       drawer.name==='Profile' ? ProfileScreen
  	       : drawer.name==='Forum' ? ForumScreen 
  	       : drawer.name==='Tracking' ? TrackingScreen 
  	       : MessageScreen 
	    }
          />)
	}
	<Tab.Screen
	    name={"Connections"}
	    key={"Connections"}
	    options={{
		tabBarButton: () => null,
		tabBarVisible: false,
	    }}
	    component={ConnectionsScreen}
	/>
        <Tab.Screen
      	    name={"InitialLogin"}
            key={"InitialLogin"}
            options={{
		tabBarButton: () => null,
		tabBarVisible: false,
	    }}
      	    component={InitScreen}
      	/>
		<Tab.Screen
      	    name={"Report"}
            key={"Report"}
			options={{
			tabBarButton: () => null,
			tabBarVisible: false,
			}}
      	    component={ReportScreen}
      	/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

