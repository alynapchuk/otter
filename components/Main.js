import React, { Component } from 'react'
import { View, Text } from 'react-native';

import { connect } from 'react-redux'; // ALLOWS CONNECTION TO REDUX
import { bindActionCreators } from 'redux'; // BINDS ACTIONS TO THIS COMPONENT
import { fetchUser } from '../redux/actions/index' // IMPORT FUNCTION FROM ACTIONS

export class Main extends Component {

    // CALLS fetchUser FUNCTION FROM ACTIONS TO UPDATE STATE OF currentUser
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>Placeholder</Text>
            </View>
        )
    }
}

// CONNECTS FUNCTION TO PROPS, PASSES OBJECT CONTAINING FUNCTIONS WE WANT TO ACCESS
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch);

export default connect(null, mapDispatchProps)(Main)
