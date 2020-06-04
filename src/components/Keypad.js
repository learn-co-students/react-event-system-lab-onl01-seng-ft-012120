// Code Keypad Component Here

import React from 'react'

export default class Keypad extends React.Component {

	constructor() {
		super()

	}

	handleInputNumber = () => {
		console.log('Entering password...')
	}

	render(){
		return(
		<div>
		<input onKeyUp={this.handleInputNumber} type='password'/>
		</div>
		)
	}

}