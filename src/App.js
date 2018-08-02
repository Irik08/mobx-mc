import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    const {counter} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          Counter:
          <span className={counter.isOdd ? 'Counter-odd' : 'Counter-even'}> {counter.count} </span>
        </p>
        <p>
          <button onClick={() => counter.increment()}> + </button>
          <button onClick={() => counter.decrement()}> - </button>
        </p>
      </div>
    );
  }
}

export default App;
