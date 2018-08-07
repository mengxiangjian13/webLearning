import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './redLabel'
import RedLabel from './redLabel';
import TextInput from './TextInput';

class App extends Component {
  render() {
    let array = ["1", "2", "3","4"];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {array.map((number) => {
            return (<li style={{textAlign: "left"}}>hello, {number}</li>)
          })}
        </ul>
        <RedLabel text='welcome to react' />
        <TextInput />
      </div>
    );
  }
}

export default App;
