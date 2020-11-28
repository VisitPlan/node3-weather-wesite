import React, { Component } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,Button,
    TouchableOpacity
  } from 'react-native';
  import Addition from './Addition';

class Input extends React.Component{
    render(){
        return(
            <View>
             {/* <Icon></Icon> */}
            <Addition name="Mamatha"
                placeholder="Enter Name"
                label='Name'
                name='comments'
            ></Addition>
             <Addition name="Mamatha"
                placeholder="Enter Name"
                label='Name'
                name='comments'
            ></Addition>
             <Addition name="Mamatha"
                placeholder="Enter Name"
                label='Name'
                name='comments'
            ></Addition>
            </View>
        )
    }
}

export default Input;