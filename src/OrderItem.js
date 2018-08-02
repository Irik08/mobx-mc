import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class OrderItem extends Component {
    render() {
        const item = this.props.item;

        return <div className='order-item'>
            <img src={item.img} />
            <div className='caption'>{item.name}</div>
            <div className='description'>{item.description}</div>
            <div className='count'>
                <button onClick={item.decCount}>-</button>
                <span>{item.count}</span>
                <button onClick={item.incCount}>+</button>
            </div>
            <div className='price'>{item.price}</div>
            <div className='totalPrice'>{item.totalPrice}</div>
        </div>
    }
}