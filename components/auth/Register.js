import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import firebase from 'firebase';

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }
        this.onSignUp = this.onSignUp.bind(this);
    }

    onSignUp() {
        const { email, password, name } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection('users')
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={(email) => this.setState({ email })} />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })} />
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    onChangeText={(name) => this.setState({ name })} />

                <TouchableOpacity style={styles.buttons}
                    onPress={() => this.onSignUp()}>
                    <Text style={styles.text}>Sign Up</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

export default Register

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