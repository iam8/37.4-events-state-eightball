// Ioana A Mititean
// 37.4: React State - Eight Ball

import React from 'react';
import { useState } from 'react';


function ColorCounter({trackedColor}) {
    const [count, setCount] = useState(0);

    return (
        <div className="ColorCounter">
            {trackedColor.toUpperCase()} count: {count}
        </div>
    )
}


export default ColorCounter;
