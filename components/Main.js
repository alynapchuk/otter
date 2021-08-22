import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser, fetchUserPebbles } from "../redux/actions/index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Home from "./main/Home";
import Pebble from "./main/Pebble";
import QuestionGame from "./main/QuestionGame";
import LoveLanguages from "./main/LoveLanguages";
// import OtterCalendar from "./main/OtterCalendar";

const Tab = createBottomTabNavigator();

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchUserPebbles();
  }

  render() {
    return (
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons color="#03989e" name="home" size={20} />
            ),
          }}
        />

        {/* <Tab.Screen
          name="Calendar"
          component={OtterCalendar}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="calendar"
                color="#03989e"
                size={20}
              />
            ),
          }}
        /> */}

        <Tab.Screen
          name="Pebble"
          component={Pebble}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="message"
                color="#03989e"
                size={20}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Game"
          component={QuestionGame}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="star" color="#03989e" size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Quiz"
          component={LoveLanguages}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart" color="#03989e" size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  pebbles: store.userState.pebbles,
});

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchUserPebbles }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
