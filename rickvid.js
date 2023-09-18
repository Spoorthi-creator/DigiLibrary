import React, { Component } from 'react';
import { Text, View, StyleSheet, WebView} from 'react-native';

export default class RICKVID extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://www.youtube.com/watch?v=OmSra4BJRrY',
        }}
        style={{marginTop: 20}}
      />
    );
  }
}


const Stylus = StyleSheet.create({
libo:{
  color:"purple",
  fontWeight:'bold',
  fontSize:35
},
book:{
  color:"purple",
  fontWeight:'bold',
  fontSize:27,
}
})
