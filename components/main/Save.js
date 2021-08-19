import React from 'react'
import { View, Image, Button } from 'react-native'
import firebase from 'firebase'

require('firebase/firestore')
require('firebase/firebase-storage')

export default function Save(props) {

    const uploadProfilePicture = async () => {
        const response = await fetch(props.route.params.image);
        const blob = await response.blob();

        const task = firebase
            .storage()
            .ref()
            .child(`profile_picture/${firebase.auth().currentUser.uid}/${Math.random().toString(10)}`)
            .put(blob);

        const taskProgress = snapshot => {
            console.log(`uploading... ${snapshot.bytesTransferred}`)
        };

        const taskError = snapshot => {
            console.log(snapshot)
        }

        const taskCompleted = () => {
            task.snapshot.ref.getDownloadURL().then((snapshot) => {
                saveProfilePicture(snapshot);
                console.log(snapshot)
            })
        }

        task.on('state_changed', taskProgress, taskError, taskCompleted);

    }

    const saveProfilePicture = (profile_picture) => {

        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .update({
                profile_picture
            })

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={props.route.params.image} style={{ width: 200, height: 200 }} />
            <Button
                title="Upload Profile Picture"
                onPress={() => uploadProfilePicture()} />
        </View>
    )
}
