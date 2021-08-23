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
            <View style={styles.pebbleContainer} key={index}>
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
    pebbleContainer: {
        flex: 1,
        alignItems: "flex-end",
        backgroundColor: "white",
        margin: 5,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'flex-end',
    },
    buttons: {
        backgroundColor: '#03989e',
        padding: 10,
        margin: 10,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
});