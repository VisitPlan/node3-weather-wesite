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
  import ChipForm from './ChipForm';
  import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  const Paper =(props)=>{
       return(
           <View style={styles.container}>
           <View style={{flexDirection:'row',alignSelf:'stretch',flexWrap:'wrap'}}>
           <ChipForm text={'MAMATHA'} textsrc={'M'}/>
           <ChipForm text={'MAMATHA Bindu'} textsrc={'M'}/>
           <ChipForm text={'hi'} textsrc={'M'}/>
           </View>
           </View>
       );
   

}

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      margin:90,
      // width:'100%',

      


      
  }
})

export default Paper;