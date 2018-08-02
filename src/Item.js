import React, { Component } from 'react';

export default class Item extends Component {
    clicked = () => {
        this.props.onClick(this.props.item);
    }

    render() {
        const item = this.props.item;
        console.log(item);
        return <div className='item' onClick={this.clicked}><img src={item.img} /></div>;
    }
}