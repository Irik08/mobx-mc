import {observable, computed, action} from 'mobx';

export default class Counter {
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