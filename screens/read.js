import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Read extends Component {
  render() {
    alert("This website is not operated by DigiLibrary. Every book you open, if any copyright infrigent is being done, you are responsible and not 'DigiLibrary' ")
    return (
      <View>
     <WebView source={{ uri: 'https://annas-archive.org/' }} />
      </View>
    );
  }
}
