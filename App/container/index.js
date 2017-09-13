//Import a library to help create a component
/*
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import Header from '../components/header'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import Components from '../components/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
//Create a component
class App extends Component {

  componentDidMount(){
  }
  render() {
    return (
      <View
       style={{flex:1}}>
      <Provider store={store}>
        <Components/>
      </Provider>
      </View>
    )  
  }
}

export default App;






Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from '../components/header'; 
import AlbumList from '../components/AlbumList';

//Create a component
const App = () =>  (
  <View style={{ flex: 1 }}>
    <Header gentText={'Gentz'} />
    <AlbumList />
  </View>  
);

export default App;
*/