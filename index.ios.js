import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Register from "./App/components/Register/Register.js";
import Profile from "./App/components/ShopProfile/profile.js";
import Shop from "./App/components/GoShopping/GoShopping";
import Messages from "./App/components/Matches/Matches";
import UserProfile from './App/components/UserProfile/UserProfile.js'

class TheeGents extends Component {
  static navigationOptions = {
    header: null,
   };

  render(){
    const { navigation } = this.props;
    return (
      <Register navigation= { navigation }/>
    );
  }
}

const DaGents = StackNavigator({
  Home: { screen: Register },
  Profile: { screen: Profile },
  },
  { headerMode: 'none' }
);

AppRegistry.registerComponent('TheeGents', () => DaGents);


// import React, { Component } from 'react';
// import { AppRegistry, View, Text, StyleSheet } from 'react-native';

// import Register from "./App/components/Register/Register.js";
// import Profile from "./App/components/Profile/profile.js";
// import Shop from "./App/components/GoShopping/GoShopping";
// import Messages from "./App/components/Matches/Matches";

//Declare initial style container so that the view can fit into a "box" like UI routes in Angular.

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// const App = ()  => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.welcome}>
//         Welcome to React Native Navigation Sample!
//       </Text>
//       <Text style={styles.instructions}>
//         To get started, edit index.ios.js
//       </Text>
//       <Text style={styles.instructions}>
//         Press Cmd+R to reload,{'\n'}
//         Cmd+D or shake for dev menu
//       </Text>
//     </View>
//   );
// }


// export default App;