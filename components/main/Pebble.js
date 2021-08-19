import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export class Pebble extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Pebble Page</Text>
            </View>
        )
    }
}

export default Pebble

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
});