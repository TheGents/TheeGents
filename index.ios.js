/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';


//import Register from "./App/components/Register/Register.js";
//import Profile from "./App/components/Profile/profile.js";
//import Shop from "./App/components/GoShopping/GoShopping";
import Messages from "./App/components/Matches/Matches";
export default class TheeGents extends Component {
  render() {
    return (
      //<Register />
      <Messages />
    );
  }
}


AppRegistry.registerComponent('TheeGents', () => TheeGents);