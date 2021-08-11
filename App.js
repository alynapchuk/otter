import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

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

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
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
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    // IF USER IS LOGGED IN, DISPLAYS HOME PAGE
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>Placeholder</Text>
      </View>
    )
  }
}

export default App