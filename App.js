import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons, FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import SavedScreen from './screens/Saved';
import NavItems from './constants/NavItems';
import StreamScreen from './screens/Stream.js';
import ChartScreen from './screens/MyCharts.js';

import NavIcon from './components/NavIcon.js';
import Header from './components/Header.js';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        //initialRouteName="Profile"
        //drawerContentOptions={{
        //  activeTintColor: '#e91e63',
        //  itemStyle: { marginVertical: 10 },
        //}}
      >
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
		    />
	    }}
	   component={
  	       drawer.name==='Profile' ? ProfileScreen
  	       : drawer.name==='Settings' ? SettingsScreen
  	       : drawer.name==='Saved Items' ? SavedScreen
  	       : drawer.name==='MyChart' ? ChartScreen
  	       : StreamScreen
	   }
          />)
        }
      </Tab.Navigator>
    </NavigationContainer>
  );
}

