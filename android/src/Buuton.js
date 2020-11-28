import React, { Component } from 'react';
import { View } from 'react-native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    // View,
    Text,
    StatusBar,
    Image,Button,
    TouchableOpacity
  } from 'react-native';


const Buuton = () =>{
    return(
    <View>
     <View >
       <Text style={styles.button}></Text>
     </View>
    </View>
    )
}

const styles = StyleSheet.create({
button:{
    borderWidth:1,
    width:'100%',
    height:'10%',
    borderColor:'black',
    backgroundColor:'red'
}
})

export default Buuton;