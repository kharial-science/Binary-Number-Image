import React, { Component } from 'react'

class Input extends Component {
  
  
  
  render() {

    let value = new String(this.props.value).replace(/\B(?=(\d{3})+(?!\d))/g, " ")

    return (
      <div id="Input">
          <div className="input-container">
            <input 
              id="numberInput" 
              type="text" 
              placeholder="Entrez ici le nombre à convertir en binaire" 
              value={value}
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