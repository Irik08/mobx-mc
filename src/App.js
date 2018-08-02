import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react'
import Item from './Item';
import OrderItem from './OrderItem';

@observer
class App extends Component {
  itemSelected = (item) => {
    this.props.store.addItem(item);
  }

  render() {
    const { store } = this.props;
    const skus = Array.from(store.skus.keys());
    return (
      <div className="App">
        <div className='choose-items'>
          <h1>Выбирай!</h1>
          {skus.map(a => <Item onClick={this.itemSelected} item={store.skus.get(a)} key={a} />)}
        </div>

        {store.somethingSelected &&
          <div className='order'>
            <div className='order-header'>
              <div>Фото товара</div>
              <div>Название</div>
              <div>Описание</div>
              <div>Количество</div>
              <div>Цена</div>
              <div>Итого</div>
            </div>
            {Array.from(store.order).map(i => <OrderItem item={i} />)}
          </div>}
      </div>
    );
  }
}

export default App;
