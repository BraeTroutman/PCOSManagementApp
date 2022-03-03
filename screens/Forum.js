import * as React from 'react';
import { Button, View, Text } from "react-native";
import { load, store } from '../utils/AsyncWrapper';

export default function ForumScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button
	      title="Initial Login Screen"
	      onPress={() => navigation.navigate('InitialLogin')}
	  />
      </View>
    );
  }

