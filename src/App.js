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
      number: null,
      squareArray: []
    }
    this.handleRenderClick = this.handleRenderClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSquareClick = this.handleSquareClick.bind(this)
    this.handleAddLineClick = this.handleAddLineClick.bind(this)
  }

  handleRenderClick() {

    let binNumber = BigInt(document.getElementById('numberInput').value).toString(2)
    let binNumberLength = new Number(binNumber.length)
    for (let i = 0; i < 16 - binNumberLength % 16; i++) {
      binNumber = '0' + binNumber
    }

    this.setState({ 
      number: binNumber
    }, () => {
      this.state.squareArray = []
      let key = 0
      for (const i of this.state.number) {
        this.state.squareArray.push(<Square key={key} identifier={key} color={i} onClick={this.handleSquareClick}/>)
        key++
      }
      this.setState({}) //call this to re render after calculating squareArray
    })
  }

  handleInputChange(event) {
    this.setState({
      decNumber: event.target.value
    })
  }

  handleSquareClick(i) {
    let squareArray = this.state.squareArray
    let square = squareArray[i]
    square.props.color === "1" ? 
      square = <Square key={square.key} identifier={square.props.identifier} color={"0"} onClick={this.handleSquareClick}/>
      :
      square = <Square key={square.key} identifier={square.props.identifier} color={"1"} onClick={this.handleSquareClick}/>
    squareArray[i] = square
    console.log(squareArray)
    this.setState({
      squareArray: squareArray
    })

    let binNumber = this.state.number
    binNumber = binNumber.substr(0, i) + (binNumber[i] === "1" ? "0" : "1") + binNumber.substr(i + 1);
    let decNumber = BigInt('0b' + binNumber).toString(10)
    console.log(binNumber, decNumber)
    this.setState({
      decNumber: decNumber,
      number: binNumber
    })

    console.log(this.state.squareArray.length - i - 1)
  }

  handleAddLineClick() {
    let string16Zeros = new Array(16).fill("0").join('')
    this.setState({
      number: string16Zeros + this.state.number,
    }, () => {
      this.state.squareArray = []
      let key = 0
      for (const i of this.state.number) {
        this.state.squareArray.push(<Square key={key} identifier={key} color={i} onClick={this.handleSquareClick}/>)
        key++
      }
      this.setState({})
    })
  }

  render() {

    return (
      <div id="App">
        <header>
          <h1>Hello World !</h1>
          <p>Here is the kfs number binary image converter</p>
        </header>
        <Input 
          handleRenderClick={this.handleRenderClick} 
          value={this.state.decNumber} 
          handleInputChange={this.handleInputChange}
          handleAddLineClick={this.handleAddLineClick}
        />
        <div id="Display">
          {this.state.squareArray ? this.state.squareArray : <div></div>}
        </div>
      </div>
    )
  }
}

export default App;
