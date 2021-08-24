import React, { useState } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function QuestionsGame() {

    const questions = [
        {
            questionText: "Have you ever told a white lie?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false }
            ]
        },
        {
            questionText: "Have you ever gotten caught dancing in front of the mirror?",
            answerOptions: [
                { answerText: "Yes", isCorrect: false },
                { answerText: "No", isCorrect: true },
                { answerText: "Its Complicated", isCorrect: false }
            ]
        },
        {
            questionText: "Have you ever felt unheard?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false }
            ]
        },
        {
            questionText: "Have you ever forgotten someone's name even though you’ve spent time with them in the past?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
                { answerText: "Its Complicated", isCorrect: true }
            ]
        },
        {
            questionText:
                "Have you ever gotten locked out of your own house? ",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
                { answerText: "Its Complicated", isCorrect: false }
            ]
        },
        {
            questionText: "Have you ever had an imaginary friend? ",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
                { answerText: "Its Complicated", isCorrect: true }
            ]
        },
        {
            questionText: "Do you struggle with apologizing?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: true },
                { answerText: "Its Complicated", isCorrect: false }
            ]
        },
        {
            questionText: "Do you think you would be a good ninja?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: true },
                { answerText: "Its Complicated", isCorrect: true }
            ]
        },
        {
            questionText: "Have you ever “sharted”? As in farted, but pooped yourself a little?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: true },
                { answerText: "Its Complicated", isCorrect: true }
            ]
        },
        {
            questionText: "Have you ever made a ridiculous impulse purchase?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
                { answerText: "Its Complicated", isCorrect: true }
            ]
        },
        {
            questionText: "Have you ever slept in until 3 in the afternoon or later? ",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: true },
                { answerText: "Its Complicated", isCorrect: true }
            ]
        },
        {
            questionText: "Have you ever broken up over text?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: true },
                { answerText: "Its Complicated", isCorrect: false }
            ]
        },
        {
            questionText: "Do you like horror movies?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: true },
                { answerText: "Its Complicated", isCorrect: true }
            ]
        },
        {
            questionText: "Do you like to excercise?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: true }
            ]
        },
        {
            questionText: "DO you consider yourself controversial?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: true },
                { answerText: "Its Complicated", isCorrect: false }
            ]
        },
        {
            questionText: "Do you like piña coladas?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: true }

            ]
        },
        {
            questionText:
                "Do your parents ever embarrass you?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
                { answerText: "Its Complicated", isCorrect: true }

            ]
        },
        {
            questionText:
                "Do you think you will have any regrets when you’re 90?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
                { answerText: "Its Complicated", isCorrect: false }
            ]
        },
        {
            questionText: "Do you believe in ghosts?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
                { answerText: "Its Complicated", isCorrect: false }
            ]
        },
        {
            questionText: "Do you sing in the shower?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false },
                { answerText: "Its Complicated", isCorrect: false }
            ]
        }
    ];

    /* reference:https://www.buzzfeed.com/jamedjackson/these-yes-or-no-relationship-questions-will-reveal-if-youre */

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [score, setScore] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };


    return (<>
        <View style={styles.container}>
            {showScore ? (
                <Text>You scored {score} integrity points out of {questions.length}</Text>
            ) : (
                <>
                    <View style={styles.questionContainer}>
                        <Text>Question {currentQuestion + 1}/{questions.length}</Text>
                        <Text>{questions[currentQuestion].questionText}</Text>
                    </View>


                    {questions[currentQuestion].answerOptions.map((answerOptions) => (
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.buttons}
                                onPress={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                                <Text style={styles.text}>{answerOptions.answerText}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}

                </>
            )}
        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    questionContainer: {
        alignItems: 'center',
        width: '90%'
    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttons: {
        backgroundColor: '#03989e',
        padding: 20,
        width: '90%',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 15,
    }
});