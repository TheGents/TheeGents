
import React, { Component } from 'react';
import {

  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView
} from 'react-native';

var {height, width} = Dimensions.get('window');
import Nav from '../global-widgets/nav';


const Home = () => {
    return ( 
      <View style={{flex:1}}>
      <Nav  type = "home" />
      <Image source ={require('../../images/player-vs-gentleman.jpg')} resizeMode="stretch" style={{height:350, width:width}} />
       <Text style = {{fontSize:19, fontWeight:'400'}}>Gentleman, </Text><Text style={{fontSize:21, fontWeight:'300', marginBottom:-2}}>23</Text>
       </View>
        
    )
}


export default Home;