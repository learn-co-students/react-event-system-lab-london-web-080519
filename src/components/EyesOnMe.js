// Code EyesOnMe Component Here
import React, { Component } from 'react';

export class EyesOnMe extends Component {
    render() {
        return (
            <div>
                <button onFocus={e => console.log("Good!")} onBlur={e => console.log("Hey! Eyes on me!")}>button</button>
            </div>
        );
    }
}

export default EyesOnMe;
