/*
 * Async Storage get and set wrappers
 * to use, add:
 *     import { load, store } from './utils/AsyncWrapper';
 * to the file you'd like to use the functions in
 */

import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';

// stores a key value pair in local storage
export function store(key, value) {
    return AsyncStorage.setItem(key, value).then((val) => val);
}

// retrieves a value corresponding to the given key from memory
export function load(key) {
    /* 
     * In js, we represent and change state using functions rather than variables
     * (I mean, functions are technically variables, but you know what I mean)
     * So if we want to store some information, we use `useState()` to do that.
     * useState takes as an argument the initial value you want your "variable"
     * to take, and returns two functions: one to get the value in memory, and
     * the other to set the value, much like getters in setters in object-oriented
     * programming. Here, we name these two functions "data" and "setData". When
     * we want to set the state of the variable, we call "setData(val)", and when we
     * want to return the value in that variable, we use "data". This is necessary
     * here because AsyncStorage is asynchronous, which means that the value it
     * returns is not actually the object from storage, but rather a "promise" to
     * give us that object once it's retrieved. So we have to use the Promise.then()
     * method to extract the object and then store it in data so we can return it
     * to the caller. The same principle goes for other asynchronous operations,
     * like fetching data over the web (see Connections.js for an example of
     * async fetch)
    */
    const [data, setData] = useState({});
    AsyncStorage.getItem(key).then((val) => setData(val));
    return data;
}

