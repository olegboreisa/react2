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

    onNameSwitchHandler = () => {
      this.setState ({
        person: [
          { name: 'On it', age: 55 },
          { name: 'Donis', age: 27 }
        ],
      });
    };

    inputNameHandler = (event) => {
      this.setState ({
        person: [
          { name: event.target.value, age: 55 },
          { name: 'Donis', age: 27 }
        ]
      });
    };

    togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson: !doesShow});
    }

    render () {
      return (
        <div className="App">
            <h1>Hi, I am React App</h1>
            <p>This is actually working!</p>
            <button onClick={this.switchNameHandler.bind(this, 'BindingName')}>Switch Name</button>
            <br />
            <button onClick={this.togglePersonHandler}>Disapper</button>

            {
            this.state.showPerson === true ?
              <div>
                <Person name={this.state.person[0].name} years={this.state.person[0].age} />
                <Person name={this.state.person[1].name} years={this.state.person[1].age} click={this.onNameSwitchHandler}/>
              </div> : null
            }

        </div> 
      );
    };
  };

export default App;


   /** 
       * What is JSX? JSX stands for JavaScript XML. JSX allows us to write HTML in React/JavaScript. JSX makes it easier to write and add HTML in React. 
       * 
       One difference would be instead of class="", there is className="". React actually converting HTML tags into React syntax.
       */

      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React Create Element'))

      /**
       * Hooks (State in Function Components) -> State Usually Used in Class Components
       * [STATE IS A JAVASCRIPT OBJECT] [IT IS A SPECIAL PROPERTY THAT CAN BE CHANGED]
       * 
       * [THIS REFERS TO A CLASS [ES6]]
       * 
       * DO NOT PUT () on the Click Event because it will be executed during runtime not on the exact click!
       */


       /**
        *   state = {
              person: [
                { name: 'Oleg', age: 26 },
                { name: 'Donatas', age: 27 }
              ]
            }
            
            switchNameHandler = () => {
              //console.log('Was clicked!')
              //  DON'T DO THIS: this.state.person[0].name = 'Olegas';
              this.setState({
                person: [
                { name: 'Olegas', age: 26 },
                { name: 'Donis', age: 27 }
              ] 
            })
            }
        */

        /**
         * In the functional component we do not need to use render method. We are also using hooks to manage state. [useState]
         * 
         * const App = props => {
            const [ anyNamePersonState, setPersonState] = useState ({
              person: [
                { name: 'Oleg', age: 26 },
                { name: 'Donatas', age: 27 }
              ]
            });

            const switchNameHandler = () => {
              setPersonState({
                person: [
                { name: 'Olegas', age: 26 },
                { name: 'Donis', age: 27 }
              ] 
            });
          };
         * 
           // [FUNCTIONAL COMPONENT DOES NOT MANUALLY MERGE PREVIOUS STATE THAT A NOT CHANGED!]

          // const [otherState, setOtherState] = useState({otherState: 'some other value'}) or ('some other value');
         */