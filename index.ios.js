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

import Register from "./App/components/Register/Register.js"
export default class TheeGents extends Component {
  render() {
    return (
      <Register />
    );
  }
}


AppRegistry.registerComponent('TheeGents', () => TheeGents);
