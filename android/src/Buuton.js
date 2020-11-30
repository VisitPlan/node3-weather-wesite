import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableOpacity,style} from 'react-native';

const Buuton = props =>{
  const content =(
  <View style={[styles.button,{backgroundColor:props.color}]}>  
  <Text style={styles.text}>{props.text}</Text>
  </View>
  )
  return<TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}
const styles = StyleSheet.create({
  button:{
  padding:4,
  borderRadius:6,
  alignItems:'center',
  textAlign:'center',
  
  },
  text:{
    color:'white',
    fontSize:14,
    textAlign:'center'
  }
})
export default Buuton;