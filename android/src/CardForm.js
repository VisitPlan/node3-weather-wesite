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
          const {text,button,time}=this.props
          return(
          <View>
            <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
              {/* <TouchableOpacity
          style={styles.button}
        > */}
          {/* <Text style={{color:'white'}}>{button}</Text> */}
    <Buuton></Buuton>
        {/* </TouchableOpacity> */}
        <View>
          <Text style={styles.time}>{time}</Text>
        </View>
            </View>
          </View>
          )
      }
  }

  const styles = StyleSheet.create({
    container:{
        // width:'98%',
        // height:'20%',
        borderColor:'white',
        borderWidth:1,
        backgroundColor:'white',
        margin:3,
        borderRadius:5,
        display: 'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        textAlign:'center',
        
    },
    button: {
      borderWidth:1,
      borderRadius:7,
    //   borderColor:'blue',
    //   backgroundColor:'blue',
      padding:2,
       marginTop:10,
       width:'25%',
       height:'20%',
       textAlign:'center',
       alignItems:'center'
    
      },
      text:{
          fontSize:18,
          margin:10
      },
      time:{
          color:'#B0B0B0',
          fontSize:19,
          margin:10,
          paddingTop:50
      }
})

  export default CardForm;