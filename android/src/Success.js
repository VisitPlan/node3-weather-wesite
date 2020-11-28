import React, { Component } from 'react';
// import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TouchableOpacity,
    // styles
  } from 'react-native';
const Success = () =>{
    return(
        <LinearGradient  start={{x: 0, y: 1}} //here we are defined x as start position
        end={{x: 0, y: 0}} //here we can define axis but as end position
       colors={['#E8E8E8', 'white']}
         style={{
          height: '100%',
     }}>
        <View style={styles.container}>
           <View>
            <Image  style={styles.img} source={require('../Assets/Image.png')} />
            </View>
            <View style={{marginTop:'50%'}}>
                <Text style={{textAlign:'center',color:'#A1AFC6',fontSize:19,padding:'1%'}}>Your Account has been Verified</Text>
                <Text style={{textAlign:'center',color:'#A1AFC6',fontSize:19,}}>Successfully</Text>
            </View>
            <View>
            <TouchableOpacity
         style={styles.button}
        //  onPress={this.onPress}
>
         <Text style={{color:'white',fontSize:19,}}> Done </Text>
       </TouchableOpacity>
            </View>
        </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
   img:{
    position:'relative', /* or absolute */
    top: '51%',
    left: '10%',
   },
   button: {
    alignItems: 'center',
    backgroundColor: '#3F67FF',
    padding: 10,
    width:'58%',
    height:45,
    borderRadius:15,
    marginLeft:'21%',
    marginTop:'17%',
  },
})

export default Success;