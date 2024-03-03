import React from 'react'
import { useState } from 'react';
const Counter = () => {
    console.log('render', 'counter');
    let [number, setNumber] = useState(0);

    function handleClick(e) {
        e.stopPropagation();

        setTimeout(() => {
            setNumber(number=> number + 1);
        }, 2000);

        /* setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        rendring will happen only on time*/

        console.log(number);
    }

    return (
        <>
            <h1 style={{color:'while'}}>{number}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter