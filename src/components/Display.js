import React, { Component } from 'react'

import Square from './Square'

class Display extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        let squareArray = []
        if (this.props.number) {
            let key = 0
            for (const i of this.props.number) {
                squareArray.push(<Square key={key} color={i}/>)
                key++
            }
        }
        console.log(squareArray)
        
        return (
            <div id="Display">
                {squareArray ? squareArray : <div></div>}
            </div>
        )
    }
  
}

export default Display;