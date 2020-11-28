import React, { Component } from 'react';
// import { View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    styles
  } from 'react-native';
 
export default class Field extends Component {
  render() {
    return (
      <View >
        <OtpInputs
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
        />
      </View>
    );
  }
}

// export default Field;