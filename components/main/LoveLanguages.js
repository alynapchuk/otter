import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';
import { Languages, Questions } from '../quiz/Quiz'

export class LoveLanguages extends Component {
    constructor(props) {
        super();
        this.state = {
          loaded: false,
          text: "state was here",
          currentPage: "start"
        };
    }

    start() {
        return (
            <View style={styles.container}>
                <Text>Love Language Quiz</Text>
                <Button title="Start" onPress={() => this.setQuestions()}></Button>
            </View>
        )
    }  
    
    setQuestions(){
        this.setState({
            currentPage: "questions"
        })
    }

    questions(){
        return (
            <View style={styles.container}>
                <Text>It's more meaningful to me when...</Text>
                <Text>{Questions[0][0].text}</Text>
                <Text>{Questions[0][1].text}</Text>
            </View>
        )
    }
    render() {
        const currentPage = {
            "start": this.start(),
            "questions": this.questions()
        }
        return (
            currentPage[this.state.currentPage]
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
