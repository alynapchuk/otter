import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

import firebase from 'firebase';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
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

                <TouchableOpacity style={styles.buttons}
                    onPress={() => this.onSignIn()}>
                    <Text style={styles.text}>Sign In</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

export default Login

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