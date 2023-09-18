import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default class Dash extends Component {
  render() {
    return (
      <View>
        <Text style={stylus.namastetext}>Namaste,</Text>
        <Text style={stylus.namastetexto}>User</Text>
        <ScrollView horizontal={true}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Cat');
            }}>
            <Image source={require('../cat.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../support.png')}></Image>
          </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('read');
            }}>
            <Image source={require('../online.png')}></Image>
          </TouchableOpacity>
           </ScrollView>   
      </View>
    );
  }
}

const stylus = StyleSheet.create({
  namastetext: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'purple',
  },
  namastetexto: {
    fontWeight: 'bold',
    fontsize: 50,
    color: 'blue',
  },
});
