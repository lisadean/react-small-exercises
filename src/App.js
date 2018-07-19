import React, { Component } from 'react';
import './App.css';
import Box from './Box';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="boxes">
          <Box message="Monday"/>
          <Box message="Tuesday"/>
          <Box message="Wednesday"/>
          <Box message="Thursday"/>
          <Box message="Friday"/>
        </div>
      </div>
    );
  }
}

export default App;
