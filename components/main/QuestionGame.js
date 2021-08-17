import React, { Component } from 'react'
import { View, Text } from 'react-native';


//reference: https://www.youtube.com/watch?v=hOVM9JCiLJs - Coding With Zaidi

export class QuestionGame extends Component {
    render() {
        return (
            <View>
                <h1>Question Game Page</h1>
                <Text>Hypothetical Questions to Learn More About Each Other
If you could go back and redo one moment in your life, what would it be and why?
If we had $1,000 extra each month, what would you want to do with it?
If you could meet any famous person, who would it be and why?
If we could go on ANY date, and budget didn’t matter, where would we go?
If we won $100,000 in the lottery, how would you want to spend it?
If you could live one day over and over again for the rest of your life, which day would it be?
What are the 3 items you would want if you were trapped on a deserted island (no boats/flair guns allowed!)?
If someone were to write a biography about you, what do you hope they would say?
If you could pick ANY fictional character to change places with, who would you choose and why?
We see a homeless man and his daughter holding up a sign… Do you stop and give him money or keep driving?
If I were to start making more money than you, would you feel like less of a man?
If we had to do one extracurricular activity together everyday for a month, what would it be?
If a movie was made about our life, what actors would play us?
Money, power, love, or good looks… which would you choose?
If you were to lose your job tomorrow, what would you do?
If you could pick any job in the world to do, and money wasn’t an issue, what would you choose?</Text>
            </View>
        )
    }
}

export default QuestionGame
