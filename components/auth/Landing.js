import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

export default function Landing({ navigation }) {
    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.intrologo}
                    source={require('../../assets/intro.gif')} />
                <Text style={styles.subhead}>The app for you and your significant otter.</Text>
            </View>

            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.text}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    intrologo: {
        height: 300,
        width: 300,
    },
    buttons: {
        backgroundColor: '#03989e',
        padding: 20,
        alignItems: 'center'
    },
    subhead: {
        color: '#545454',
        alignItems: 'center'

    },
    text: {
        color: 'white',
        fontSize: 15,
    }
});