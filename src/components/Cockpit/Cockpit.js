import React from 'react';

const cockpit = (props) => {
    return (
        <div>
            <h1>Hi, I'm a React App</h1>
            <p>{props.title}</p>
            <button onClick={props.clicked}>Toggle Persons </button>
        </div>   
    );
}

export default cockpit;