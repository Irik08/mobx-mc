import {observable, computed, action} from 'mobx';
import Data from './Data';

export default class Counter {
    skus = observable.map();
    
    constructor() {
        for (let sku of Data.skus) {
            this.skus.set(sku.id, sku);
        }
    }

    @observable count = 0;
    
    @computed get isOdd() {
        return Math.abs(this.count % 2) === 1;
    }

    @action increment() {
        this.count++;
    }

    @action decrement() {
        this.count--;
    }
}