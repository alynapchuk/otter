import React, { useState } from 'react';
import { Button, View } from 'react-native';
import firebase from 'firebase'
import { TextInput } from 'react-native-gesture-handler';

require('firebase/firestore')

export default function Send() {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const sendPebble = () => {

        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .collection('pebbles')
            .add({
                title,
                message
            })

    }

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <TextInput
                placeholder="title"
                onChangeText={(title) => setTitle(title)}
            />
            <TextInput
                placeholder="message"
                onChangeText={(message) => setMessage(message)}
            />

            <Button
                title="send"
                onPress={() => sendPebble()}
            />
        </View>
    );
}