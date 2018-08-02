import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer } from 'mobx-react'
import Item from './Item';

@observer
class App extends Component {
  render() {
    const { store } = this.props;
    const skus = Array.from(store.skus.keys());
    console.log(skus);
    return (
      <div className="App">
        <div className='choose-items'>
          {skus.map(a => <Item item={store.skus.get(a)} key={a} />)}
        </div>
      </div>
    );
  }
}

export default App;
