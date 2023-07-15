// Ioana A Mititean
// 37.4: React State - Eight Ball

import React, {useState} from 'react';
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import altAnswers from "./answers2.json";
import { createColorCounter } from './helpers';


/**
 * Magic Eight Ball component.
 *
 * On click: display a random answer and its corresponding color.
 *
 * Props:
 * - answers: array of {msg, color} objects
 *
 * State:
 * - answer: {msg, color} of current answer
 */
function EightBall({answers=defaultAnswers}) {

    const initAnswer = {msg: "Think of a Question", color: "black"};
    const initCounter = createColorCounter(answers);

    const [answer, setAnswer] = useState(initAnswer);
    const [counter, setCounter] = useState(initCounter);

    const ballStyles = {backgroundColor: answer.color};

    /**
     * Update Eight Ball with a randomly-chosen message and color.
     * Update color counter.
     */
    function updateBall() {

        if (Object.keys(counter).length === 0) return;

        const idx = Math.floor(Math.random() * answers.length);
        const newAnswer = answers[idx];

        setAnswer(newAnswer);

        const updCounter = {...counter};
        updCounter[newAnswer.color] += 1;
        setCounter(updCounter);
    }

    /**
     * Reset Eight Ball to initial state.
     */
    function resetBall() {
        setAnswer(initAnswer);
        setCounter(initCounter);
    }

    return (
        <div className="EightBall">
            <div className="EightBall-Color-Counter">
                {Object.keys(counter).map(color => <div>{color} count: {counter[color]}</div>)}
            </div>

            <div className="EightBall-ball" style={ballStyles} onClick={updateBall}>
                <div className="EightBall-msg">{answer.msg}</div>
            </div>

            <button className="EightBall-reset" onClick={resetBall}>Reset</button>
        </div>
    )
}


export default EightBall;
