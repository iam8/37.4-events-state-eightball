// Ioana A Mititean
// 37.4: React State - Eight Ball

import React from 'react';
import { useState } from 'react';
import "./EightBall.css";

import ColorCounter from './ColorCounter';


function EightBall({answers}) {

    const initMsg = "Think of a Question";
    const initColor = "black";

    const [msg, setMsg] = useState(initMsg);
    const [color, setColor] = useState(initColor);

    const ballStyles = {backgroundColor: color};

    /**
     * Update Eight Ball with a randomly-chosen message and color.
     */
    function updateBallState() {
        const idx = Math.floor(Math.random() * answers.length);
        const answer = answers[idx];

        setMsg(answer.msg);
        setColor(answer.color);
    }

    /**
     * Reset Eight Ball to initial state.
     */
    function resetBall() {
        setMsg(initMsg);
        setColor(initColor);
    }

    return (
        <div className="EightBall">
            <ColorCounter trackedColor="green" />
            <ColorCounter trackedColor="goldenrod" />
            <ColorCounter trackedColor="red" />

            <div className="EightBall-ball" style={ballStyles} onClick={updateBallState}>
                <div className="EightBall-msg">{msg}</div>
            </div>

            <button className="EightBall-reset" onClick={resetBall}>Reset</button>
        </div>
    )
}


export default EightBall;
