import React, { Component,
 useState 
 } from "react";

import { StyleSheet,
 View, 
 Text, 
 Button  
 } from 'react-native';

export class QuestionsGame extends Component {
    constructor(props){
        super();
        this.state = {
            currentPage: "start"
        }
    }

  const questions = [
    {
      questionText: "Have you ever told a white lie?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false }
      ]
    },
    {
      questionText: "Have you ever dated a friends ex? ",
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
      questionText: "Would you ever stay friends with an ex?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText:
        "Would you tell a lie to keep from hurting your significant Otter's feelings?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false }
      ]
    },
    {
      questionText: "Would you share your phone password?",
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
      questionText: "Would you get a tattoo of your significant Otter's name?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText: "Have you ever been discriminated against?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText: "Have you ever done something you regret in life?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText: "Do you completely trust your significant Otter?",
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
      questionText: "Do you believe in a higher being?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: true },
        { answerText: "Its Complicated", isCorrect: true }
      ]
    },
    {
      questionText:
        "Do you have a bias towards any racial, religious or political group?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText:
        "Have you ever crushed on someome other than your Otter while in a relationship?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Would you leave your significant Otter for $1million?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
      ]
    },
    {
      questionText: "Do you believe in love at first sight?",
      answerOptions: [
        { answerText: "Yes", isCorrect: true },
        { answerText: "No", isCorrect: false },
        { answerText: "Its Complicated", isCorrect: false },
        { answerText: "never", isCorrect: false }
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

start(){
  return (
      <View>
    <Text className="App">
      <Text>Honest Otter Question Game</Text>
      <Text> |Conversation starters for you & your significant Otter|</Text>
      {showScore ? (
        <Text className="question-section">
          {" "}
          You scored {score} integrity points out of {questions.length}
        </Text>
      ) : (
        <>
          <Text className="question-count">
            <span className="question__number">
              {" "}
              Question{" "}
              <span className="current-question">{currentQuestion + 1}</span>
            </span>
            /{questions.length}
          </Text>
          <Text className="question-text">
            {" "}
            {questions[currentQuestion].questionText}
          </Text>
          <Text className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOptions) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </Text>
        </>
      )}
    </Text>
    </View>
  );
}

