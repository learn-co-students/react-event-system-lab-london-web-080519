import React, { Component } from 'react';

export default class KeyPad extends Component {

    render(){
        return(
            <input type='password' onKeyUp={this.keyFunction}/>
        )
    }

    keyFunction= () => console.log("Entering password...")

}