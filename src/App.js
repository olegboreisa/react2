import React, { Component } from 'react'
import './App.css';
import Person from './Person/Person.js'


class App extends Component {
    state = {
      person: [
        { id: 1, name: 'Oleg', age: 26 },
        { id: 2, name: 'Donatas', age: 27 }
      ],
      showPerson: true
    };

    switchNameHandler = (anyNameArg) => {
      this.setState({
        person: [
        { id: 1, name: anyNameArg, age: 26 },
        { id: 2, name: 'Donatas Viaževičius', age: 27 }
      ]
    });
  };

    nameChangedHandler = ( event, id ) => {
      const personIndex = this.state.person.findIndex(p => {
        return p.id === id;
      });

      const person1 = {
        ...this.state.person[personIndex]
      }

      // const person = Object.assign({}, this.state.person[personIndex]);

      person1.name = event.target.value;
      const person = [...this.state.person];
      person[personIndex] = person1;

      this.setState = ({ person: person });
    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
    }

    deletePersonHandler = (personIndex) => {
      // const persons = this.state.person.slice(); //Creating a copy and then updating
      const persons = [...this.state.person]; // ALTERNATIVE METHOD IS A SPREAD OPERATOR! Spreads out elements into a list of object into person array 
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
              age={personAnyName.age}
              key={personAnyName.id}
              changed={(event) => this.nameChangedHandler (event, personAnyName.id)}
              />   
            })}
          </div>
        )
      }

      return (
        <div className="App">
            <h1>Hi, I am React App</h1>
            <p>This is actually working!</p>
            <button onClick={this.switchNameHandler.bind(this, 'Oleg Boreiša')}>Switch Name</button>
            <br />
            <br />
            <button onClick={this.togglePersonHandler}>Toogle Persons</button>
            {person}
        </div> 
      );
    };
  };

export default App;
