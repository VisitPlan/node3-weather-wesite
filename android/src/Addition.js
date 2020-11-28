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
    TouchableOpacity,TextInput,
  } from 'react-native';
  import  FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Addition=(props)=>{
  // const [fontSize, setFontSize] = useState(10);
    return(
        <View >
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.searchSection}>
        <FontAwesome5 style={styles.searchIcon} name={props.name} size={20} color="#000"></FontAwesome5>
        <TextInput style={styles.input} 
        placeholder={props.placeholder}
        autoCompleteType={props.autoCompleteType}
        ></TextInput>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
  input: {
    flex: 1,
    // color:'red',
    paddingLeft:10,
    paddingBottom:0,
},
searchSection: {
  flexDirection: 'row',
  borderWidth: 1,
  borderColor: '#707070',
  paddingBottom: 10,
  width:342,
  height:50,
  borderRadius:1,
  margin:8,
 justifyContent:'space-around',
  fontSize:15,
  alignItems:'center',
  opacity:22,
  
},
searchIcon: {
paddingLeft:20,
paddingTop:9,

},
label:{
  fontSize:18,
  paddingLeft:11,
  paddingTop:10,
  color:'black'
}
})
export default Addition;