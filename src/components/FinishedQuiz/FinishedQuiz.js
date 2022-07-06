import React from 'react';
import classes from './FinishedQuiz.module.css';
import Button from '../UI/Button/Button';

const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total;
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa-solid',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                    ];

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i 
                            className={cls.join(' ')} 
                            style={{color: props.results[quizItem.id] === 'error' 
                                                                        ? 'rgba(240, 87, 108, .7)' 
                                                                        : 'rgba(161, 240, 69, .7)'}} />
                        </li>
                    )
                })}
            </ul>

            <p>Правильных ответов {successCount} из {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type='primary'>Повторить</Button>
                <Button type='success'>Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz;