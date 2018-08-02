import { observable, computed, action } from 'mobx';
import Data from './Data';

class OrderItemModel {
    id = null;
    @observable count = 1;
    name = null;
    description = null;
    weight = 0;
    price = 0;
    img = null;

    constructor(item) {
        this.id = item.id;
        this.img = item.img;
        this.name = item.name;
        this.description = item.description;
        this.weight = item.weight;
        this.price = item.price;
    }

    @action incCount = () => {
        this.count++;
    }

    @action decCount = () => {
        if (this.count > 1) {
            this.count--;
        }
    }

    @computed get totalPrice() {
        return this.count * this.price;
    }

    @computed get totalWeight() {
        return this.count * this.weight;
    }
}

export default class Store {
    skus = observable.map();
    order = observable.array([]);

    constructor() {
        for (let sku of Data.skus) {
            this.skus.set(sku.id, sku);
        }
    }

    @computed get totalCount() {
        return this.order.reduce((i, v) => i + v.count, 0);
    }
    @computed get totalWeight() {
        return this.order.reduce((i, v) => i + v.count * v.weight, 0);
    }
    @computed get totalPrice() {
        return this.order.reduce((i, v) => i + v.count * v.price, 0);
    }

    @computed get somethingSelected() {
        return this.order.length > 0;
    }

    @action addItem = (item) => {
        console.log('adding', item);
        const existing = this.order.find(a => a.id === item.id);
        if (existing) {
            existing.incCount();
        }
        else {
            this.order.push(new OrderItemModel(item));
        }
        console.log(this.order.toJS());
    }
}