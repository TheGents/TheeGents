import React from 'react';
import { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

import LoginButton from './LoginButton/LoginButton.js';

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <Text style={styles.welcome}>
                    Gents
                </Text>

                <Image source={require('../../../App/images/gents.png')} style={{width: 193, height: 200}}/>

                <Text style={styles.instructions}>
                    Date with class.
                </Text>

                <Text style={styles.instructions}>
                    Example new line,{'\n'}
                </Text>

                <LoginButton />
            </View>)
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