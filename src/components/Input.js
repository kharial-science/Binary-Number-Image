import React, { Component } from 'react'

class Input extends Component {
  render() {
    return (
      <div id="Input">
          <div className="input-container">
            <input 
              id="numberInput" 
              type="text" 
              placeholder="Entrez ici le nombre à convertir en binaire" 
              value={this.props.value}
              onChange={this.props.handleInputChange}
            ></input>
          </div>
          <button className="removeline" onClick={this.props.handleRemoveLineClick}>
            -
          </button>
          <button className="addline" onClick={this.props.handleAddLineClick}>
            +
          </button>
          <button className="render" onClick={this.props.handleRenderClick}>
            render
          </button>
      </div>
    )
  }
}

export default Input;