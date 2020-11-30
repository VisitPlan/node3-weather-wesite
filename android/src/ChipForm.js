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
//   import Icon from 'react-native-vector-icons/Ionicons';
  import SvgComponent from './Custamize';


  class ChipForm extends Component {
      state={ }
      render(){
          const {text,textsrc}=this.props
          return(
            <View style={{height:45,borderRadius:50,backgroundColor:'#C0E1DC',flexDirection:'row',alignItems:'center',margin:5}}>
            <View style={{width:33,height:33,borderRadius:20,backgroundColor:'#2DBCA2',alignItems:'center',marginLeft:5}}>
              <Text style={{textAlign:'center',paddingTop:6,color:'white'}}>{textsrc}</Text>
            </View>
          <Text style={{ textAlign:'center',marginHorizontal:15,fontSize:15,color:'#2DBCA2'}}>{text}</Text>
            <View>
            <SvgComponent style={{flex:1,paddingRight:40,paddingTop:15,color:'#2DBCA2'}} name='close-outline' size={20} color="#000"/>
            </View>
        </View>
          )
      }
  }


  export default ChipForm;