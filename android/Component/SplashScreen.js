import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    styles
  } from 'react-native';

class SplashScreen extends React.Component {
    render() {
      const viewStyles = [
        { backgroundColor: 'orange' }
      ];
      const textStyles = {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    
      };
  
      return (
        <View style={viewStyles}>
          <Text style={textStyles}>
            Splash Screen
          </Text>
        </View>
      );
    }
  }

  export default SplashScreen;