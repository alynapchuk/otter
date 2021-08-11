import { StatusBar } from 'expo-status-bar';
import React from 'react';

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

import Landing from './components/auth/Landing';
import Register from './components/auth/Register';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name='Otter' component={Landing} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}