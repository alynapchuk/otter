import React, { Component } from 'react'
import firebase from 'firebase';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Languages, Questions } from '../quiz/Quiz'

require('firebase/firestore')

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

    componentDidMount() {
        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .get()
            .then((user) => {
                this.setState({
                    results: user.data().lovelanguage
                })
            })       
    }

    start() {
        let takeQuiz = (
            <View style={styles.container}>
                <Text style={styles.header}>Love Language Quiz</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.setQuestions()}>
                <Text>Start</Text>
                </TouchableOpacity>
            </View>
        )
        return (this.state.results ? this.results() : takeQuiz)
    }  
    
    setQuestions(){
        this.setState({
            currentPage: "questions",
            currentQuestionPair: 0,
            loveLanguages: {
            [Languages.WORDS_OF_AFFIRMATION] : 0,
            [Languages.QUALITY_TIME] : 0,
            [Languages.RECEIVING_GIFTS] : 0,
            [Languages.ACTS_OF_SERVICE] : 0,
            [Languages.PHYSICAL_TOUCH] : 0
            }
        })
    }

    setResults() {
        this.findUserResults()
        this.setState({
            currentPage: "results"
        })
    }

    StoreUserLoveLanguage = () => {
        firebase.firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .update({
                'lovelanguage': this.state.results
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

        setTimeout(() => {
            if(index === Questions.length - 1){
                this.setResults()
            }
         }, 500);
    }

    findUserResults() {
        const loveArray = Object.entries(
            this.state.loveLanguages
        )
        console.log("TEST",loveArray)
        let topLanguage = ''
        let largest = 0;
        for (let i = 0; i < loveArray.length; i++){
            if (loveArray[i][1] > largest) {
                largest = loveArray[i][1]
                topLanguage = loveArray[i][0]

            }
        }

        const tiedLanguages = loveArray.filter(language => language[1] === largest)

        this.setState({
            results: topLanguage,
            tiedLanguages: tiedLanguages
        })
        this.StoreUserLoveLanguage();
        console.log('THE LARGEST NUMBER IS:', largest)
        console.log('THE LOVE ARRAY:', loveArray)
    }
    

    questions(){
        const index = this.state.currentQuestionPair
        return (
            <View style={styles.container}>
                <Text style={styles.header2}>It's more meaningful to me when...</Text>
                <br></br>
                <Button title={Questions[index][0].text} color="#841584" style={styles.button} onPress={() => this.storeUserSelection(Questions[index][0].language)}></Button>
                <br></br>
                <Button title={Questions[index][1].text} color="#841584" style={styles.button} onPress={() => this.storeUserSelection(Questions[index][1].language)}></Button>
                <br></br>
                <Text>Question {index+1}/{Questions.length}</Text>
                </View>
        )
    }

    results(){
        return (
            <View style={styles.container}>
                <Text>Your Primary Love Language is:</Text>
                <Text>{this.state.results}</Text>
                <Button title="Take the quiz again!" onPress={() => this.setQuestions()}></Button>
            </View>
        )
    }

    render() {
        const currentPage = {
            "start": this.start(),
            "questions": this.questions(),
            "results": this.results()
        }
        
        return (
            currentPage[this.state.currentPage]
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#85D0CB",
        alignItems: "center",
        justifyContent: "center"

    },
    
    header: {
        fontSize: 36
    },

    header2: {
        fontSize: 24
    },

    button: {
        backgroundColor: "#841584",
        paddingVertical: 20,
        paddingHorizontal: 40
    }
})

export default LoveLanguages
