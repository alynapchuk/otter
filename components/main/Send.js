import React, { useState } from 'react';
import { Button, View } from 'react-native';
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