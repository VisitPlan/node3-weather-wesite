import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
  } from 'react-native';

//   import Loading from './android/Component/Loading';
class Screen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
             <View style={{alignSelf:"center", justifyContent:"center"}}>
             <Image style={styles.img} source={require('../Assets/Group1.png')} />
             </View>
             <View style={{alignSelf:"flex-end", 
              justifyContent:"center" , position: 'absolute',bottom:'2%',
           right:'40%',}}>
             <Text style={{fontSize:18,color:'gray',fontWeight:'bold'}} >Loading...</Text>
             </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       flexDirection:"row",
    //    backgroundColor:'red'
    },

    img:{
        width:110,
        height:70,
    }
})

export default Screen;