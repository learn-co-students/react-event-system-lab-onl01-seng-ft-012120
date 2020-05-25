import React, { Component } from 'react';

export default class Keypad extends Component {

    handleOnKeyUp = () => {
        console.log("Entering password...");
    }
    
    render() {


        return(
            <div>
                <input onKeyUp={this.handleOnKeyUp} type="password" />
            </div>
        )
    }
}