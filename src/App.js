import React, { Component } from 'react'
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
    state = {
      person: [
        { name: 'Oleg', age: 26 },
        { name: 'Donatas', age: 27 }
      ],
      showPerson: true
    };

    switchNameHandler = (anyNameArg) => {
      this.setState({
        person: [
        { name: anyNameArg, age: 26 },
        { name: 'Donis', age: 27 }
      ]
    });
  };

    togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
      const persons = this.state.person;
      persons.splice(personIndex, 1); // array.splice(index, howmany) -> if howmany = 0, none will be removed
      this.setState({person: persons}) // rewriting person array after deleting an element (person)
    }

    render () {

      let person = null;

      if (this.state.showPerson) {
        person = (
          <div>
            {this.state.person.map((personAnyName, index) => {
              return <Person 
              click={() => this.deletePersonHandler(index)}
              name={personAnyName.name} 
              age={personAnyName.age}/>
            })}
          </div>
        )
      }

      return (
        <div className="App">
            <h1>Hi, I am React App</h1>
            <p>This is actually working!</p>
            <button onClick={this.switchNameHandler.bind(this, 'New Name by Binding')}>Switch Name</button>
            <br />
            <br />
            <button onClick={this.togglePersonHandler}>Toogle Persons</button>
            {person}
        </div> 
      );
    };
  };

export default App;
