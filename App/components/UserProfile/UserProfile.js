
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
      <ScrollView style={styles.container}>
      <Image source ={require('../../images/player-vs-gentleman.jpg')} resizeMode="stretch" style={{height:350, width:width}} />
       <View style={[styles.row, {marginTop:15}]}>
       <Text style = {{fontSize:19, fontWeight:'400'}}>Gentleman, </Text><Text style={{fontSize:21, fontWeight:'300', marginBottom:-2}}>23</Text>
       </View>
        
    )
}
//onPress = {() => this.renderNope()} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  }
});


export default Home;