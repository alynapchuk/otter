import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase'

require('firebase/firestore')
require('firebase/firebase-storage')

export default function Upload({ navigation }) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        const data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });
        setImage(data.uri);
    };

    const uploadProfilePicture = async () => {
        const response = await fetch(image);
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
            .then((function () {
                navigation.popToTop()
            }))

    }

    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Select Image"
                onPress={pickImage}
            />
            {image &&
                <>
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    <Button
                        title="Upload Profile Picture"
                        onPress={() => uploadProfilePicture()} />

                </>
            }
        </View>
    );
}