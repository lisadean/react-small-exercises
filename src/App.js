import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Box';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    );
  }
}

export default App;
