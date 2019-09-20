import React, { Component } from 'react'

class Square extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Square" className={`color${this.props.color}`}>
                {this.props.number}
            </div>
        )
    }
  
}

export default Square;