import * as React from 'react';
import { AsyncStorage } from 'react-native';

export function store(key, value) {
    try {
	await AsyncStorage.setItem(key, value);
	return true;
    } catch (e) {
	return false;
    }
}

export function load(key) {
    try {
	const value = await AsyncStorage.getItem(key);
	return value;
    } catch {
	return false;
    }
}

