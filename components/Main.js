import React, { Component } from 'react'
import { connect } from 'react-redux'; // ALLOWS CONNECTION TO REDUX
import { bindActionCreators } from 'redux'; // BINDS ACTIONS TO THIS COMPONENT
import { fetchUser } from '../redux/actions/index' // IMPORT FUNCTION FROM ACTIONS
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from './main/Home';
import Pebble from './main/Pebble';
import QuestionGame from './main/QuestionGame';

const Tab = createBottomTabNavigator();

export class Main extends Component {

    // CALLS fetchUser FUNCTION FROM ACTIONS TO UPDATE STATE OF currentUser
    // FIRST COMPONENT CALLED UPON SO MUST FETCH USER DATA THROUGH componentDidMount
    componentDidMount() {
        this.props.fetchUser();
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

// SELECTS DATA FROM STORE THAT CONNECTED COMPONENT NEEDS
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

// DISPATCH ACTION TO THE STORE
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main)
