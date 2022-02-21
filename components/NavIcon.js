import * as React from 'react';
import { View, Text } from "react-native";
import { Feather, MaterialIcons, FontAwesome5, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const IconClasses = {
    "MaterialIcons": MaterialIcons,
    "Feather": Feather,
    "FontAwesome5": FontAwesome5,
    "AntDesign": AntDesign,
    "MaterialCommunityIcons": MaterialCommunityIcons
};

export default function NavIcon(props) {
    const IconClass = IconClasses[props.class];
    return <IconClass name={props.name} color={props.color} size={props.size}/>;
}
