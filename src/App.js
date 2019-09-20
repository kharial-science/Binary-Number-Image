import React, { Component } from 'react'

import './style/index.css'

import Input from './components/Input'
import Display from './components/Display'

class App extends Component {
  constructor() {
    super()
    this.state = {
      number: null,
    }
    this.handleRenderClick = this.handleRenderClick.bind(this)
  }

  handleRenderClick() {
    this.setState({ 
      number: new Number(document.getElementById('numberInput').value).toString(2)
    }, console.log(this.state))
  }

  render() {
    return (
      <div id="App">
        <header>
          <h1>Hello World !</h1>
          <p>Here is the kfs number binary image converter</p>
        </header>
        <Input handleRenderClick={this.handleRenderClick} />
        <Display number={this.state.number}/>
      </div>
    )
  }
}

export default App;
