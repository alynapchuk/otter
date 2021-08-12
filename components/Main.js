import React, { Component } from 'react'
import { connect } from 'react-redux'; // ALLOWS CONNECTION TO REDUX
import { bindActionCreators } from 'redux'; // BINDS ACTIONS TO THIS COMPONENT
import { fetchUser, fetchUserPebbles } from '../redux/actions/index' // IMPORT FUNCTION FROM ACTIONS
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './main/Home';
import Pebble from './main/Pebble';
import QuestionGame from './main/QuestionGame';

const Tab = createBottomTabNavigator();

export class Main extends Component {

    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchUserPebbles();
    }

    render() {
        return (
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='home' color={color} size={20} />
                        )
                    }} />

                <Tab.Screen
                    name="Pebble"
                    component={Pebble}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='pebble' color={color} size={20} />
                        )
                    }} />

                <Tab.Screen
                    name="Game"
                    component={QuestionGame}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name='game' color={color} size={20} />
                        )
                    }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({ // SELECTS DATA FROM STORE THAT CONNECTED COMPONENT NEEDS
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser, fetchUserPebbles }, dispatch); // DISPATCH ACTION TO THE STORE

export default connect(mapStateToProps, mapDispatchProps)(Main)
