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
import Buuton from './Buuton';
 


  class CardForm extends Component {
      state={ }
      render(props){
          const {textline,button,time,text}=this.props
          return(
            <View style={styles.container}>
              <View style={styles.textbox}>
              <Text style={styles.text}>{textline}</Text>
              </View>
              
           <View style={styles.buttonbox}>
          <Buuton text={text} color={button}></Buuton>
           </View>
         
         <View style={styles.timebox}> 
          <Text style={styles.time}>{time}</Text>
        </View>
            </View>
         
          )
      }
  }

  const styles = StyleSheet.create({
    container:{
        borderColor:'white',
        borderWidth:1,
        backgroundColor:'white',
        margin:10,
        borderRadius:7,
        flexWrap:'wrap',
        elevation:1,
    },
      text:{
          fontSize:16,
          padding:10
          
      },
      time:{
          color:'#B0B0B0',
          fontSize:16,
          // marginTop:10
 
      },
      timebox:{
      position:'absolute',
      bottom:0,
      left:10,

      },
      textbox:{
        width:'80%',
        height:'15%',
        paddingRight: 5,
        textAlignVertical: 'top',
     
      },
      buttonbox:{
        width:'20%',
        position:'absolute',
        top:10,
        right:9,
      }
})

  export default CardForm;