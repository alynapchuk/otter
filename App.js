import React, { Component } from "react";
import { Provider } from "react-redux"; // PROVIDER ALLOWS THE REDUX STORE TO CONNECT TO COMPONENTS
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { createStore, applyMiddleware } from "redux"; // IMPORT CREATE STORE FUNCTION, APPLIES THUNK TO DISPATCH
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk"; // ALLOWS USE OF DISPATCH IN ACTIONS
import { Provider as PaperProvider } from "react-native-paper";

import firebase from "firebase"; // IMPORT OUR DATABASE & CONNECT TO SPECIFIED PROJECT

const fbConfig = {
  apiKey: "AIzaSyBoin7bNXBMDzo_dUCBsGPfBmwE7p7rg7o",
  authDomain: "otter-1407a.firebaseapp.com",
  projectId: "otter-1407a",
  storageBucket: "otter-1407a.appspot.com",
  messagingSenderId: "711653970460",
  appId: "1:711653970460:web:0f31978f36fa295814c5d9",
  measurementId: "G-LCTB5FV8W3",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(fbConfig);
}

import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Main from "./components/Main";
import Upload from "./components/main/Upload";
import Send from "./components/main/Send";
import AddEvent from "./components/main/AddEvent";

const Stack = createStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

export class App extends Component {
  constructor(props) {
    // CURRENTLY NO VALUE, WILL BE PASSING PROPS TO FUTURE COMPONENTS
    super();
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        // IF NOT LOADED OR USER NOT LOGGED IN
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        // USER IS LOGGED IN
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loaded, loggedIn } = this.state;

    if (!loaded) {
      // IF STATE NOT LOADED, DISPLAYS LOADING SCREEN
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text>Loading...</Text>
        </View>
      );
    }

    if (!loggedIn) {
      // IF USER NOT LOGGED IN, DISPLAY LANDING PAGE WITH LOGIN/REGISTER
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Otter"
              component={Landing}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      // IF USER IS LOGGED IN, DISPLAYS MAIN HOME PAGE, WILL BE PASSING PROPS THROUGH FUTURE COMPONENTS
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
              <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Upload"
                component={Upload}
                navigation={this.props.navigation}
              />
              <Stack.Screen
                name="Send"
                component={Send}
                navigation={this.props.navigation}
              />
              <Stack.Screen
                name="AddEvent"
                component={AddEvent}
                navigation={this.props.navigation}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  }
}

export default App;
