import React, { Component } from 'react';
// import { View } from 'react-native';
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
  import CardForm from './CardForm';
// const Card =(props)=>{
//     return(
//         <View style={{backgroundColor:'#C8C8C8',width:'100%',height:'100%'}}>
          
//               <CardForm text={'Meeting with Aravind Seonics'} button={'Hello'} time={'11:09'}></CardForm>
//               {/* <CardForm text={'Zoho one Demo one With wha'} button={'Demo'} time={'12:09'}></CardForm> */}
//               {/* <CardForm text={'Meeting with Aravind Seonics'} button={'Review'} time={'11.09'}></CardForm> */}
         
//         </View>
        
//     )
// }

export default class Card extends React.Component {
    state={
        name: "Heloo",
        color:'red'
       };
       render(){
           return(
            <View style={{backgroundColor:'#C8C8C8',width:'100%',height:'100%'}}>
          
                         <CardForm text={'Meeting with Aravind Seonics'} button={this.state.name} time={'11:09'}></CardForm>
                     {/* <CardForm text={'Zoho one Demo one With wha'} button={'Demo'} time={'12:09'}></CardForm> */}
                        {/* <CardForm text={'Meeting with Aravind Seonics'} button={'Review'} time={'11.09'}></CardForm> */}
                     
                    </View>
           )
       }
}
