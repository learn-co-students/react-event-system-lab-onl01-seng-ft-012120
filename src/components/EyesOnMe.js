// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    constructor(){
        super()
    }

    handleBlur = () => {
        console.log('Hey! Eyes on me!')
    }

    handleFocus = () => {
        console.log('Good!')
    }


    render(){
        return(
            <div>
                <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
            </div>
        )
    }
}