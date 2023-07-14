// Ioana A Mititean
// 37.4: React State - Eight Ball

import React from 'react';
import { useState } from 'react';


function EightBall({answers}) {

    // Set initial state
    const [msg, setMsg] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    return (
        <div className="EightBall">

        </div>
    )
}


export default EightBall;
