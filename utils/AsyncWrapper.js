import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';

export function store(key, value) {
    return AsyncStorage.setItem(key, value).then((val) => val);
}

export function load(key) {
    const [data, setData] = useState({});
    AsyncStorage.getItem(key).then((val) => setData(val));
    return data;
}

