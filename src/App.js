import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    const {store} = this.props;
    const skus = Array.from(store.skus.keys());
    console.log(skus);
    return (
      <div className="App">
        {skus.map(a => <img style={{width: 120}} src={store.skus.get(a).img} key={a} />)}
      </div>
    );
  }
}

export default App;
