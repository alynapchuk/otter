import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import firebase from 'firebase';
require('firebase/firestore')

function Home(props) {

    const { currentUser } = props;

    return (
        <View>
            <Text>Welcome to your home screen, {currentUser.name}!</Text>
        </View>
    )
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

export default connect(mapStateToProps, null)(Home);
