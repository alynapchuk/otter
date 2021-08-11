import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk'; // ALLOWS USE OF DISPATCH FUNCTION IN ACTIONS

const store = createStore(rootReducer, applyMiddleware(thunk));

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyBoin7bNXBMDzo_dUCBsGPfBmwE7p7rg7o",
  authDomain: "otter-1407a.firebaseapp.com",
  projectId: "otter-1407a",
  storageBucket: "otter-1407a.appspot.com",
  messagingSenderId: "711653970460",
  appId: "1:711653970460:web:0f31978f36fa295814c5d9",
  measurementId: "G-LCTB5FV8W3"
})

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import Landing from './components/auth/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Main from './components/Main';

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super();
    this.state = {
      loaded: false
    }
  }

  // DISPLAY LOADING SCREEN WHILE STATE IS LOADED
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      // IF NOT LOADED OR LOGGED IN
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
        // USER IS LOGGED IN
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }

  render() {

    const { loaded, loggedIn } = this.state;

    // IF STATE NOT LOADED, DISPLAYS LOADING SCREEN
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading...</Text>
        </View>
      )
    }

    // IF USER NOT LOGGED IN, DISPLAY LOGIN/REGISTER
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen name='Otter' component={Landing} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Login' component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    // IF USER IS LOGGED IN, DISPLAYS MAIN HOME PAGE
    return (
      // PROVIDER MAKES THE REDUX STORE AVAILABLE TO CONNECT COMPONENTS
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App