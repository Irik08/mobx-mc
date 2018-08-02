import {observable, computed, action} from 'mobx';
import Data from './Data';

export default class Store {
    skus = observable.map();
    
    constructor() {
        for (let sku of Data.skus) {
            this.skus.set(sku.id, sku);
        }
    }
}