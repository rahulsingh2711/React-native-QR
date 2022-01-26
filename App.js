import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera'
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';

export default class App extends Component {
  state = {
    qr:""
  }

  onRead = e => {
    this.setState({qr:e.data})
   
  }
  
  
  render() {
    return (
      <View style={styles.container}>
      <QRCodeScanner
          onRead={this.onRead}
          // flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text>
              {this.state.qr
              }
              
            </Text>
          }
          bottomContent={
            <TouchableOpacity>
              <Text>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
        </View>
     
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'grey',
    
  }
})