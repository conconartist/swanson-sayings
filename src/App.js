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
      <main className='App'>
        <h1>Swanson Says, "{this.state.quote}"</h1>
        <button>Say Something Else</button>
      </main>
    )
  }
}

export default App;
