import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler';
import { useLinkTo } from '@react-navigation/native';

require('firebase/firestore')

export default function Send() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const linkTo = useLinkTo();

    const sendPebble = () => {

        firebase.firestore()
            .collection('pebbles')
            .doc(firebase.auth().currentUser.uid)
            .collection('userPebbles')
            .add({
                title,
                message,
                creation: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then((linkTo('/Pebble')
            ))

    }

    return (

        <View style={styles.container}>

            <TextInput style={styles.input}
                placeholder="Pebble Title"
                onChangeText={(title) => setTitle(title)}
            />
            <TextInput style={styles.input}
                placeholder="Otter Tip: Always try to refrain from you-statements."
                onChangeText={(message) => setMessage(message)}
            />

            <TouchableOpacity style={styles.buttons}
                onPress={() => this.sendPebble()}>
                <Text style={styles.text}>Send Pebble</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        justifyContent: 'space-evenly',
    },
    buttons: {
        backgroundColor: '#03989e',
        padding: 20,
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 15,
    },
    input: {
        padding: 20
    }
});