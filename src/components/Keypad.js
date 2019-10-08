import React, { Component } from 'react';

class Keypad extends Component {
  render() {
    return (
      <div>
        <input type="password" onKeyUp={(e) => console.log('Entering password...')}/>
      </div>
    );
  }
}

export default Keypad;