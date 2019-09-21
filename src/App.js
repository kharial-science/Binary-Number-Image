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
      binNumber: null,
      squareArray: []
    }
    this.handleRenderClick = this.handleRenderClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSquareClick = this.handleSquareClick.bind(this)
    this.handleAddLineClick = this.handleAddLineClick.bind(this)
  }

  handleRenderClick() {

    // retrieving bin number from input
    let binNumber = BigInt(document.getElementById('numberInput').value).toString(2)

    // adding 0s to fill the lines
    let binNumberLength = new Number(binNumber.length)
    for (let i = 0; i < 16 - binNumberLength % 16; i++) {
      binNumber = '0' + binNumber
    }

    // setting binNumber in state after retrieving and generating corresponding squareArray to display
    this.setState({ 
      binNumber: binNumber
    }, () => {
      this.state.squareArray = []
      let key = 0
      for (const i of this.state.binNumber) {
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

    // getting corresponding square from the squareArray, switching its color and putting it back into the state
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
    }, () => {
      this.state.squareArray = []
      let key = 0
      for (const i of this.state.binNumber) {
        this.state.squareArray.push(<Square key={key} identifier={key} color={i} onClick={this.handleSquareClick}/>)
        key++
      }
      this.setState({}) // refresh
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
