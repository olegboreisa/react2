import React from 'react'
// ES6 JavaScript
const person = (props) => {
    return  (
    <div>
        <p onClick={props.click}>I am a {props.name} and I am {props.age} old! </p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
    )
};


export default person;

// Calling JavaScript Functions using in TAGS {};
// When Using Class Based Components IT IS USED {this.props} etc.