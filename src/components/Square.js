import React, { Component } from 'react'

class Square extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div 
                id="Square" 
                className={`color${this.props.color}`} 
                onClick={() => {
                    this.props.onClick(this.props.identifier)
                }}
                onPointerLeave={(e) => {
                    if(e.pressure > 0) this.props.onClick(this.props.identifier)
                }}
            >
                {this.props.number}
            </div>
        )
    }
  
}

export default Square;