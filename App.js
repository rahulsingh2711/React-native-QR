import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default class App extends Component {
  state = {
    qr: ""
  }

  onRead = e => {
    this.setState({ qr: e.data })

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
            <View>
              {this.state.qr ? <QRCode
                value={this.state.qr}
              /> : null}
            </View>
          }
        />
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',

  }
})