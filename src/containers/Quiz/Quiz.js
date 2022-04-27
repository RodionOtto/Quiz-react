import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends React.Component {

    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'Синего', id: 1},
                    {text: 'Чёрного', id: 2},
                    {text: 'Зелёного', id: 3},
                    {text: 'Красного', id: 4},
                ]
            },
            {
                question: 'В каком году основали Санкт-Петербург?',
                rightAnswerId: 2,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1703', id: 2},
                    {text: '1708', id: 3},
                    {text: '1803', id: 4},
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log(answerId);

        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        numberOfCurrentQuestion={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz;