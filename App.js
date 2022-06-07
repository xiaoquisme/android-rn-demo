/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  Switch,
} from 'react-native';

import RNScanner from 'react-native-scanner';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      isPopup: false,
      displayBottomBtns: false,
    }
  }

  _onPressButton = (type) => {
    const { isPopup, displayBottomBtns } = this.state;
    RNScanner.scan(type, { isPopup, displayBottomBtns }).then((data) => {
      console.log(data);
      if (data.status === 'success') {
        this.setState({ result: data });
      }
    }).catch(
      console.log('Error happened in scan process.')
    );
  };

  render() {
    const data = this.state.result;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native Scanner Example
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={() => this._onPressButton('carPlate')} style={styles.button}>
            <Text style={styles.title}>车牌</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._onPressButton('carVin')} style={styles.button}>
            <Text style={styles.title}>VIN</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._onPressButton('carLicense')} style={styles.button}>
            <Text style={styles.title}>行驶证</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._onPressButton('idCard')} style={styles.button}>
            <Text style={styles.title}>身份证</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this._onPressButton('driverLicense')} style={styles.button}>
            <Text style={styles.title}>驾驶证</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.parametersArea}>
          <Text style={styles.resultTitle}>isPopup:</Text>
          <Switch
            onValueChange={(value) => this.setState({isPopup: !this.state.isPopup})}
            value={this.state.isPopup} />

          <Text style={styles.resultTitle}>displayBottomBtns:</Text>
          <Switch
            onValueChange={(value) => this.setState({displayBottomBtns: !this.state.displayBottomBtns})}
            value={this.state.displayBottomBtns} />
        </View>
        <View style={styles.resultContainer}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: data.imagePath ? data.imagePath : 'http://via.placeholder.com/160x180' }}
          />
        </View>
        <View style={styles.resultContainer}>
          <View style={styles.resultArea}>
            <Text style={styles.resultTitle}>Type:</Text>
            <Text style={styles.resultText}>{data.type}</Text>
            <Text style={styles.resultTitle}>Result:</Text>
            <Text style={styles.resultText} numberOfLines={5}>{data.result}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const WINDOW = {
  HEIGHT: Dimensions.get('window').height,
  WIDTH: Dimensions.get('window').width,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: '#02ADF0',
    borderRadius: 4,
    marginRight: 20,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: '#02ADF0',
    fontWeight: '500',
    margin: 8,
  },
  parametersArea: {
    marginTop: 10,
    flexDirection: 'row',
  },
  resultContainer: {
    flex: 1,
    width: WINDOW.WIDTH,
    borderTopWidth: 1,
    borderTopColor: 'black',
    marginTop: 20,
    flexDirection: 'row',
  },
  image: {
    width: WINDOW.WIDTH * 0.5,
  },
  resultArea: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 20,
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginLeft: 50,
    maxWidth: WINDOW.WIDTH * 0.4,
    minHeight: 50,
  },
});
