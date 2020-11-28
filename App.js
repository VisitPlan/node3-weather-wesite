import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  // styles
} from 'react-native';
import SplashScreen from './android/Component/SplashScreen'
import Screen from './android/Component/Screen';
import OTPscreen from './android/src/OTPscreen';
import Field from './android/src/Field';
import Success from './android/src/Success';
import Component from './android/src/Addition';
import Input from './android/src/Input';
import Paper from './android/src/Paper';
import Card from './android/src/Card';
import Buuton from './android/src/Buuton';

class App extends React.Component{
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
  
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  constructor(props) {
    super(props);
  
    this.state = { isLoading: true }
  }
  render(){
    
    
    if (this.state.isLoading) {
      return <Screen />;
    }
    return(
      <View style={styles.container}>
        {/* <OTPscreen></OTPscreen> */}
        {/* <Success></Success> */}
        {/* <Input></Input> */}
        {/* <Chip></Chip> */}
        {/* <Field></Field> */}
        {/* <Screen></Screen> */}
        <Paper></Paper>
        <Card></Card>
        <Buuton></Buuton>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    // width:'100%',
    // height:'100%',
    // borderColor:'gray',
    // borderWidth:1,
    // justifyContent:'center',
    // backgroundColor:'red'
  }
})
 
export default App;
