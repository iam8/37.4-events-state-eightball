// Ioana A Mititean
// 37.4: React State - Eight Ball

import React from 'react';
import { useState } from 'react';
import "./EightBall.css";


function EightBall({answers}) {

    const initMsg = "Think of a Question";
    const initColor = "black";

    const [msg, setMsg] = useState(initMsg);
    const [color, setColor] = useState(initColor);
    const [greenCount, setGreenCount] = useState(0);
    const [goldenrodCount, setGoldenrodCount] = useState(0);
    const [redCount, setRedCount] = useState(0);

    const ballStyles = {backgroundColor: color};

    /**
     * Update Eight Ball with a randomly-chosen message and color.
     * Update color counter.
     */
    function updateBallState() {
        const idx = Math.floor(Math.random() * answers.length);
        const answer = answers[idx];

        setMsg(answer.msg);
        setColor(answer.color);

        if (answer.color === "green") {
            setGreenCount(greenCount + 1);
        }

        if (answer.color === "goldenrod") {
            setGoldenrodCount(goldenrodCount + 1);
        }

        if (answer.color === "red") {
            setRedCount(redCount + 1);
        }

    }

    /**
     * Reset Eight Ball to initial state.
     */
    function resetBall() {
        setMsg(initMsg);
        setColor(initColor);
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

            <div className="EightBall-ball" style={ballStyles} onClick={updateBallState}>
                <div className="EightBall-msg">{msg}</div>
            </div>

            <button className="EightBall-reset" onClick={resetBall}>Reset</button>
        </div>
    )
}


export default EightBall;
