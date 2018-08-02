import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    const {counter} = this.props;
    const skus = Array.from(counter.skus.keys());
    console.log(skus);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {skus.map(a => <img style={{width: 120}} src={counter.skus.get(a).img} key={a} />)}
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
