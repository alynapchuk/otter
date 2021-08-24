import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useLinkTo } from '@react-navigation/native';
import { connect } from "react-redux";

require('firebase/firestore')

function Pebble(props) {

    const { pebbles } = props;
    const { currentUser } = props;
    const linkTo = useLinkTo();

    console.log(pebbles)

    const toSend = () => linkTo('/Send')

    return (<>
        {pebbles.map((pebble, index) => (
            <View style={styles.container} key={index}>
                <Text>{currentUser.name}</Text>
                <Text>{pebble.title}</Text>
                <Text>{pebble.message}</Text>
            </View>
        ))}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttons}
                onPress={toSend}>
                <Text style={styles.text}>Send New Pebble</Text>
            </TouchableOpacity>
        </View>
    </>)
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    pebbles: store.userState.pebbles
});

export default connect(mapStateToProps, null)(Pebble);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    },
    buttonContainer: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: 'flex-end'
    },
    buttons: {
        backgroundColor: '#03989e',
        padding: 20,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
    }
});