import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlightBase } from 'react-native';
import { Languages, Questions } from '../quiz/Quiz'

export class LoveLanguages extends Component {
    constructor(props) {
        super();
        this.state = {
          currentPage: "start",
          loveLanguages: {
              [Languages.WORDS_OF_AFFIRMATION] : 0,
              [Languages.QUALITY_TIME] : 0,
              [Languages.RECEIVING_GIFTS] : 0,
              [Languages.ACTS_OF_SERVICE] : 0,
              [Languages.PHYSICAL_TOUCH] : 0
          },
          currentQuestionPair: 0,
          results: ''
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

    setResults() {
        this.setState({
            currentPage: "results"
        })
    }

    storeUserSelection(language) {
        const index = this.state.currentQuestionPair
        this.setState({
            loveLanguages: {
                ...this.state.loveLanguages,
                [language] : this.state.loveLanguages[language] + 1
            },
            currentQuestionPair: index < Questions.length - 1 ? index + 1 : index
        })
        if(index === Questions.length - 1){
            console.log("REDIRECT NOW")
            this.setResults()
        }
    }

    findUserResults() {
        const loveArray= Object.entries(
            this.state.loveLanguages
        )
        let topLanguage = ''
        let largest = 0;
        for (let i = 0; i < loveArray.length; i++){
            if (loveArray[i][1] > largest) {
                largest = loveArray[i][1]
                topLanguage = loveArray[i][0]
            }
        }
        console.log('THE HIGHEST LANGUAGE IS:', topLanguage)
        console.log('THE LARGEST NUMBER IS:', largest)
        console.log('THE LOVE ARRAY:', loveArray)
    }
    

    questions(){
        const index = this.state.currentQuestionPair
        return (
            <View style={styles.container}>
                <Text>It's more meaningful to me when...</Text>
                <Button title={Questions[index][0].text} color="#841584" style={styles.button} onPress={() => this.storeUserSelection(Questions[index][0].language)}></Button>
                <Button title={Questions[index][1].text} color="#841584" style={styles.button} onPress={() => this.storeUserSelection(Questions[index][1].language)}></Button>
            </View>
        )
    }

    results(){
        return (
        <View>
        <Text>Welcome to the results page!</Text>
        </View>
        )
    }

    render() {
        const currentPage = {
            "start": this.start(),
            "questions": this.questions(),
            "results": this.results()
        }
        this.findUserResults()
        if(!!this.state && !!this.state.loveLanguages){
            console.log(this.state.loveLanguages)
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

    },
    button: {
        backgroundColor: "red",
    }
})

export default LoveLanguages
