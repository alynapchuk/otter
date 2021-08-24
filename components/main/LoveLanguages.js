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
                <Text style={styles.meaningful}>It's more meaningful to me when...</Text>
                
                <TouchableOpacity style={styles.button} onPress={() => this.storeUserSelection(Questions[index][0].language)}>
                <Text style={styles.selectionText}>{Questions[index][0].text}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => this.storeUserSelection(Questions[index][1].language)}>
<Text style={styles.selectionText}>{Questions[index][1].text}</Text>
                </TouchableOpacity>
                <Text>Question {index+1}/{Questions.length}</Text>
                </View>
        )
    }

    results(){
        return (
            <View style={styles.container}>
                <Text style={styles.meaningful}>Your Primary Love Language is:</Text>
                <Text style={styles.header3}>{this.state.results}</Text>
                <TouchableOpacity style={styles.startButton} onPress={() => this.setQuestions()}>
                <Text style={styles.header2}>Take the quiz again!</Text>
                </TouchableOpacity>
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
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },

    header3: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
        marginVertical: 40
    },

    meaningful: {
        marginVertical: 30,
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    },

    startButton: {
        backgroundColor: "#44b3a4",
        paddingVertical: 30,
        width: "70%",
        alignItems: 'center',
        borderRadius: 10
    },

    button: {
        backgroundColor: "#44b3a4",
        paddingVertical: 70,
        width: "100%",
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10
    },

    selectionText: {
        fontSize: 18,
        color: "white"
    }
})

export default LoveLanguages
