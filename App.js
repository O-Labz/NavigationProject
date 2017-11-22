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
  Animated,
  View,
  ScrollView
} from 'react-native';

import BackgroundImage from './components/BackgroundImage';


class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BackgroundImage
          source={require('./images/jamiaca_beach.png')}
          originalWidth = {1440}
          originalHeight = {2560}
        ></BackgroundImage>
        <FadeInView style = {{height:250 , width:250,position:'absolute'}}>
          <Animated.Image style = {{position:'absolute', height:250 , width:250,resizeMode:'contain'}} source={require('./images/NCB-Financial-Group.png')} ></Animated.Image>
        </FadeInView>
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
    color: 'white',
  },

});
