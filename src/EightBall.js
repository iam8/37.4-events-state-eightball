// Ioana A Mititean
// 37.4: React State - Eight Ball

import React from 'react';
import { useState } from 'react';
import "./EightBall.css";


function EightBall({answers}) {

    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    /**
     * Update Eight Ball with a randomly-chosen message and color.
     */
    function updateBallDisplay() {

        const idx = Math.floor(Math.random() * answers.length);
        const answer = answers[idx];

        setMsg(answer.msg);
        setColor(answer.color);
    }

    return (
        <div className="EightBall">
            <h4>Current message: {msg}</h4>
            <h4>Current color: {color}</h4>

            <div className="EightBall-ball" onClick={updateBallDisplay}>
                <div className="EightBall-msg">{msg}</div>
            </div>
        </div>
    )
}


export default EightBall;
