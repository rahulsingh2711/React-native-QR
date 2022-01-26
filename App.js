import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera'
import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text>
              Go to{' '}
              <Text>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
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
    backgroundColor:'black',
    
  }
})