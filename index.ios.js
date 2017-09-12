/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class TheeGents extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Gents
        </Text>
        <Image source={require('./App/images/gents.png')} style={{width: 193, height: 200}}/>
        <Text style={styles.instructions}>
          Date with class.
        </Text>
        <Text style={styles.instructions}>
          Example new line,{'\n'}
          I love kitkats
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TheeGents', () => TheeGents);
