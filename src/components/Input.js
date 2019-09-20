import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <div id="Input">
          <input id="numberInput" type="number" placeholder="Entrez ici le nombre à convertir en binaire"></input>
          <button onClick={this.props.handleRenderClick}>
            render
          </button>
      </div>
    )
  }
  
}

export default Input;