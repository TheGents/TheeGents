import React, { Component } from 'react';
import Button from 'react-native-button';

export default class LoginButton extends Component {
    constructor(props, context) {
        super(props, context);
      }
      _handlePress() {
        console.log('Pressed!');
      }
      render() {
        return (
          <Button
            containerStyle={{height:30, overflow:'hidden', borderRadius:4, backgroundColor: 'black'}}
            style={{fontSize: 20, color: 'white'}}
            onPress={() => this._handlePress()}>
            Login
          </Button>
        );
      }
}