import React, { useEffect } from 'react';

const Cockpit = (props) => {
    // useState ()
    useEffect (() => {
        console.log('[Cockpit.js] useEffect')
        // HTTP Request
    })

    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p>{props.title}</p>
            <button onClick={props.clicked}>Toggle Persons </button>
        </div>   
    );
}

export default Cockpit;