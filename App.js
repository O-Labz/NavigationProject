/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View
} from 'react-native';

import BackgroundImage from './components/BackgroundImage';


export default class App extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <BackgroundImage
          source={require('./images/jamiaca_beach.png')}
          originalWidth = {1440}
          originalHeight = {2560}
        />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});
