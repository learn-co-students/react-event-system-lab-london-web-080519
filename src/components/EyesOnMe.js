import React, { Component } from 'react';

class EyesOnMe extends Component {
  render() {
    return (
      <div>

        <button onFocus={(e) => console.log("Good!")} onBlur={(e) => console.log('Hey! Eyes on me!')}></button>

      </div>
    );
  }
}

export default EyesOnMe;