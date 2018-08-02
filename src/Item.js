import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        const item = this.props.item;
        return <div className='item'><img src={item.img} /></div>;
    }
}