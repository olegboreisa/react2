import React, { Component } from 'react'
// ES6 JavaScript

class Person extends Component {
    // static getDerivedStateFromProps (props, state) {
    //     console.log('[Person.js] getDerivedStateFrom ');
    //     return state;
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Person.js] componentWillReceiveProps');
    // }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        return true; //compare props and state
    }

    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return {message : 'Snapshot!'};
    }

    componentDidUpdate (prevProps, prevState, snapshot) {
        console.log('[Person.js] componentDidMount');
        console.log(snapshot);
    }

    render () {
        return (
        <div>
            <p onClick={this.props.click}>I am a {this.props.name} and I am {this.props.age} old! </p>
            <input type="text" onChange={this.props.changed} value={this.props.name}/>
        </div> 
        )
    }
}; 


export default Person;
