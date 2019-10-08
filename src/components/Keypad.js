// Code Keypad Component Here

import React, { Component } from 'react';

export default class Keypad extends Component {
   
    keyStroke = () => {
        console.log('Entering password...')
    }

    render(){
    return (

        <input type="password" onKeyUp={this.keyStroke}></input>

    )


}


}


//<button onClick={this.tickle}>Tickle me!</button>

