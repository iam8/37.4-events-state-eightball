// Ioana A Mititean
// 37.4: React State - Eight Ball

import React from 'react';
import { useState } from 'react';
import "./EightBall.css";


function EightBall({answers}) {

    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

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
        setMsg("Think of a Question");
        setColor("black");
    }

    return (
        <div className="EightBall">
            <div className="EightBall-ball" style={ballStyles} onClick={updateBallState}>
                <div className="EightBall-msg">{msg}</div>
            </div>

            <button className="EightBall-reset" onClick={resetBall}>Reset</button>
        </div>
    )
}


export default EightBall;
