/* global BigInt */

import React, { Component } from 'react'

import './style/index.css'

import Input from './components/Input'
import Square from './components/Square'

class App extends Component {
  constructor() {
    super()
    this.state = {
      decNumber: undefined,
      binNumber: new Array(16).fill('0').join(''),
      line: 'off',
    }
    this.handleRenderClick = this.handleRenderClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSquareClick = this.handleSquareClick.bind(this)
    this.handleAddLineClick = this.handleAddLineClick.bind(this)
    this.handleRemoveLineClick = this.handleRemoveLineClick.bind(this)
    this.handleDisplayLineClick = this.handleDisplayLineClick.bind(this)
  }

  handleRenderClick() {

    // retrieving bin number from input
    let binNumber = '0'
    if (this.state.decNumber) binNumber = BigInt(this.state.decNumber).toString(2)

    // adding 0s to fill the lines
    let binNumberLength = new Number(binNumber.length)
    for (let i = 0; i < 16 - binNumberLength % 16; i++) {
      binNumber = '0' + binNumber
    }

    // setting binNumber in state after retrieving and generating corresponding squareArray to display
    this.setState({ 
      binNumber: binNumber
    })

  }

  handleInputChange(event) {
    this.setState({
      decNumber: event.target.value.replace(/\s/g, '') // remove all white spaces
    })
  }

  handleSquareClick(i) {

    // changing binNumber in state as well, switching corresponding 0 to 1 or vice versa + changing corresponding decNumber in input
    let binNumber = this.state.binNumber
    binNumber = binNumber.substr(0, i) + (binNumber[i] === "1" ? "0" : "1") + binNumber.substr(i + 1);
    let decNumber = BigInt('0b' + binNumber).toString(10)
    this.setState({
      decNumber: decNumber,
      binNumber: binNumber
    })

  }

  handleAddLineClick() {

    // generating 16 0s in the binNumber in state and regenerating squareArray to create a new black line of squares
    let string16Zeros = new Array(16).fill("0").join('')
    this.setState({
      binNumber: string16Zeros + this.state.binNumber,
    })

  }

  handleRemoveLineClick() {

    // deleting 16 first digits of binNumber and actualizing squareArray and decNumber
    if (this.state.binNumber.length > 16) {
      this.setState({
        binNumber: this.state.binNumber.substr(16, this.state.binNumber.length),
      }, () => {
        this.state.squareArray = []
        let key = 0
        for (const i of this.state.binNumber) {
          this.state.squareArray.push(<Square key={key} identifier={key} color={i} onClick={this.handleSquareClick}/>)
          key++
        }
        let decNumber = BigInt('0b' + this.state.binNumber).toString(10)
        this.setState({
          decNumber: decNumber
        }) // refresh
      })
    }
    
  }

  handleDisplayLineClick() {
    if(this.state.line === "off") {
      this.setState({
        line: "on"
      })
    } else {
      this.setState({
        line: "off"
      })
    }
  }

  render() {

    let squareArray = []
    let key = 0
    for (const i of this.state.binNumber) {
      squareArray.push(<Square key={key} identifier={key} color={i} onClick={this.handleSquareClick}/>)
      key++
    }

    return (
      <div id="App">
        <header>
          <h1>Binary Number Image</h1>
          <p>Kharoh Family Science Binary Number Image Convertor : convert any number to its binary image correspondance.</p>
        </header>
        <Input 
          handleRenderClick={this.handleRenderClick} 
          value={this.state.decNumber} 
          handleInputChange={this.handleInputChange}
          handleAddLineClick={this.handleAddLineClick}
          handleRemoveLineClick={this.handleRemoveLineClick}
          handleDisplayLineClick={this.handleDisplayLineClick}
          line={this.state.line}
        />
        <div id="Display">
          <div id="line1" className={`line ${this.state.line}`}></div>
          <div id="line2" className={`line ${this.state.line}`}></div>
          <div id="line3" className={`line ${this.state.line}`}></div>
          {squareArray ? squareArray : <div></div>}
        </div>
      </div>
    )
  }
}

export default App;
