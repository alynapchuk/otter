import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

export class LoveLanguages extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Love Language Quiz</Text>
                <Button title="Start" onPress={() => console.log("Buttton Tapped.")}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        alignItems: "center",
        justifyContent: "center"

    }
})

export default LoveLanguages
