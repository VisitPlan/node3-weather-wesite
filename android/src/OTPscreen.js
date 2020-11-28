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
import Field from './Field';
import OtpInputtext from 'react-native-otp-textinput';
import LinearGradient from 'react-native-linear-gradient';

const OTPscreen=(props)=>{
    return(
        <View style={styles.container}>
            <LinearGradient
   start={{x: 0, y: 1}} //here we are defined x as start position
   end={{x: 0, y: 0}} //here we can define axis but as end position
  colors={['#E8E8E8', '#FFFFFF', '#FFFFFF']}
    style={{
     height: '100%',
}}>
            <View >
            <Image  style={styles.img} source={require('../Assets/Group5.png')} />
            </View>
    
      <View style={styles.text}>
          <Text style={{textAlign:'center',fontSize:25,color:'#424668',fontWeight:'bold',padding:'4%'}}>OTP Verification</Text>
      <Text style={{color:'#A1AFC6',fontSize:16,textAlign:'center',}}>Kindly Enter the OTP sent to your Mobile</Text>
        <Text style={{color:'#A1AFC6',fontSize:16,textAlign:'center'}}>Number +91 9900977652</Text>
      </View>
      <View style={{width:'70%',justifyContent:'center',alignSelf:'center'}}>
     <OtpInputtext style={styles.inputStyle}></OtpInputtext>
      </View>
      <TouchableOpacity
         style={styles.button}
        //  onPress={this.onPress}
>
         <Text style={{color:'white',fontSize:19,}}> Verify </Text>
       </TouchableOpacity>
       <View style={{padding:'10%'}}>
           <Text style={{textAlign:'center',color:'#A1AFC6',fontSize:19,padding:'2%'}}>Didn't Receive Code?</Text>
           <TouchableOpacity >
           <Text style={{textAlign:'center',color:'#A1AFC6',fontSize:19,fontWeight:'bold'}}>Resend OTP</Text>
           </TouchableOpacity>
       </View>
       </LinearGradient>
        </View>
    )
}
const styles = StyleSheet.create({
    img:{
        position: 'relative', /* or absolute */
        top: '51%',
        left: '32%',
        width:150,
        height:150,
    },
    text:{
   marginTop:"29%",
//    padding:10
    },
    inputStyle:{
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        width:50,
        height:50,
        marginTop: 30,
        opacity:0.8,
        color:'gray',
        textAlign:'center',
        fontSize:20,
        backgroundColor:'white',
    elevation: 1,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#3F67FF',
        padding: 10,
        width:'58%',
        height:45,
        borderRadius:15,
        marginLeft:'21%',
        marginTop:'13%'
      },
})
export default OTPscreen;