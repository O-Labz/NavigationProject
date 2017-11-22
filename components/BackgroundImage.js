import React, {Component} from 'react';

import {Image, Dimensions, StyleSheet} from 'react-native';

const BackgroundImage = ({source, originalWidth, originalHeight}) => {
    let windowWidth = Dimensions.get('window').width
    let widthChange = (windowWidth*1)/originalWidth
    let newWidth = Dimensions.get('window').width
    let newHeight = Dimensions.get('window').height

    return (
        <Image source = {source} style = {{width: newWidth, height: newHeight, resizeMode: 'stretch', position: 'relative'}}
        />

    )
}


const styles = StyleSheet.create({
    background: {
      // resizeMode: 'conver',
      // position: 'relative',
      // alignItems: 'center',
    },
  });

export default BackgroundImage;