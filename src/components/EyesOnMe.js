// Code EyesOnMe Component Here
import React, { Component } from 'react'

 class EyesOnMe extends Component {

    handleonBlur = event => {
        console.log('Hey! Eyes on me!')
    }

    handleonFocus = (event) => {
        console.log('Good!')
    }

    render() {
        return (
            <div>
                <button onFocus={this.handleonFocus} onBlur={this.handleonBlur} >Button</button>
            </div>
        )
    }
}

export default EyesOnMe