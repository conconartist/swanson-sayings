import React, { Component } from 'react';
import Quotes from './Quotes/Quotes.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }
  }
  render() {
    return (
      <main className='App'>
        <h1>Swanson Says</h1>
        <Quotes />  
      </main>
    )
  }
}

export default App;
