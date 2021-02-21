import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quote: "", 
      error: false
    }
  }
  componentDidMount = () => {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => response.json())
    .then(data => {
      this.setState({quote: data})
      console.log(this.state.quote)
    }).catch(error => {
      this.setState({error: true})
    })
  }
  render() {
    return (
      <main className='app'>
        <h1 className='swanson-heading'>Swanson Says,</h1>
        <p className='swanson-saying'>"{this.state.quote}"</p>
        <button className='swanson-switch'>Say Something Else</button>
      </main>
    )
  }
}

export default App;
