// Code Keypad Component Here
import React, { Component } from 'react';

export class Keypad extends Component {
    render() {
        return (
            <div>
                <input type="password" name="password" id="password" onKeyUp={e => console.log("Entering password...")}/>
            </div>
        );
    }
}

export default Keypad;
