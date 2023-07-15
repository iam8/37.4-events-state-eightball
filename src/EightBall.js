// Ioana A Mititean
// 37.4: React State - Eight Ball

import React, {useState} from 'react';
import "./EightBall.css";
import defaultAnswers from "./answers.json";


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

    const [answer, setAnswer] = useState(initAnswer);
    const [greenCount, setGreenCount] = useState(0);
    const [goldenrodCount, setGoldenrodCount] = useState(0);
    const [redCount, setRedCount] = useState(0);

    const ballStyles = {backgroundColor: answer.color};
    const countSetMap = {
        "green": () => {setGreenCount(greenCount + 1)},
        "goldenrod": () => {setGoldenrodCount(goldenrodCount + 1)},
        "red": () => {setRedCount(redCount + 1)},
    };

    /**
     * Update Eight Ball with a randomly-chosen message and color.
     * Update color counter.
     */
    function updateBall() {
        const idx = Math.floor(Math.random() * answers.length);
        const newAnswer = answers[idx];

        setAnswer(newAnswer);
        countSetMap[newAnswer.color.toLowerCase()]();
    }

    /**
     * Reset Eight Ball to initial state.
     */
    function resetBall() {
        setAnswer(initAnswer);
        setGreenCount(0);
        setGoldenrodCount(0);
        setRedCount(0);
    }

    return (
        <div className="EightBall">
            <div className="EightBall-Color-Counter">
                <div>Green counter: {greenCount}</div>
                <div>Goldenrod counter: {goldenrodCount}</div>
                <div>Red counter: {redCount}</div>
            </div>

            <div className="EightBall-ball" style={ballStyles} onClick={updateBall}>
                <div className="EightBall-msg">{answer.msg}</div>
            </div>

            <button className="EightBall-reset" onClick={resetBall}>Reset</button>
        </div>
    )
}


export default EightBall;
