import * as React from 'react';
import { View, Text, Button } from "react-native";

export default function MessageScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{fontSize:16,fontWeight:'700'}}>Messages</Text>
            <Button
	              title="Initial Login Screen"
	              onPress={() => navigation.navigate('InitialLogin')}
	          />
        </View>
     );
}
   