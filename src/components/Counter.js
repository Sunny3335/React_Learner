import React from 'react'
import { useState } from 'react';
const Counter = () => {
    console.log('render', 'counter');
    let [number, setNumber] = useState(0);

    function handleClick(e) {
        e.stopPropagation();

        setTimeout(() => {
            setNumber(number => number + 1);
            setNumber(number => number + 1);
            setNumber(number => number + 1);
            // it will reflect the number in asynchronously  after 3 seconds
            // so we can see how many times this callback is called.
            // setNumber(number + 1); both above are same we have written this in the functional style because to control therecurring rendring of dom.
        }, 2000);

        /* setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
        rendring will happen only on time these are running  in the same time */

        console.log(number);
    }

    return (
        <>
            <h1 style={{ color: 'while' }}>{number}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter