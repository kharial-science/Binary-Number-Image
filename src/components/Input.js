import React, { Component } from 'react'

class Input extends Component {
  
  
  
  render() {

    let value = undefined
    if (this.props.value) value = new String(this.props.value).replace(/\B(?=(\d{3})+(?!\d))/g, " ") // add white space every 3 digits

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
          <div className='buttons-container'>
            <button className="removeline" onClick={this.props.handleRemoveLineClick}>
              -
            </button>
            <button className="addline" onClick={this.props.handleAddLineClick}>
              +
            </button>
            <button className={`togglebitlines ${this.props.line === 'on' ? 'on' : 'off'}`} onClick={this.props.handleDisplayLineClick}>
              |
            </button>
          </div>
          <button className="render" onClick={this.props.handleRenderClick}>
            render
          </button>
      </div>
    )
  }
}

export default Input;