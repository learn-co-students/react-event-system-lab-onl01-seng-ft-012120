// Code Keypad Component Here
import React from 'react';

//In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.

class Keypad extends React.Component {

    handleInputPassword = () => console.log('Entering password...')

    render() {
        return (
          <div>
            <input 
              type="password"
              onKeyUp={this.handleInputPassword} 
            />
          </div>
        )
      }
    }

export default Keypad;