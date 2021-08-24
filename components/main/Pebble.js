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

        <View style={styles.partnerContainer}>
            <Text style={{ fontSize: 18, padding: 5, }}>Another Title That's Random</Text>
            <Text style={{ padding: 5, }}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            <Text style={{ padding: 5, }}>♥ Alejandro Garcia</Text>
        </View>

        {pebbles.map((pebble, index) => (
            <View style={styles.senderContainer} key={index}>
                <Text style={styles.titleText}>{pebble.title}</Text>
                <Text style={styles.text}>{pebble.message}</Text>
                <Text style={styles.text}>♥ {currentUser.name}</Text>
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
    senderContainer: {
        backgroundColor: "#03989e",
        padding: 10,
        margin: 10,
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    partnerContainer: {
        padding: 10,
        margin: 10,
        alignContent: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    buttonContainer: {
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
        padding: 5,
    },
    titleText: {
        color: 'white',
        fontSize: 18,
        padding: 5,
    }
});