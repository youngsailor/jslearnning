'use strict';
// import {createStore} from 'redux';
const createStore = require('redux').createStore;
function count(state = 0, action) {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'REDUCER':
            return state - 1;
        default:
            return state
    }
}

let store = createStore(count);

let currentValue = store.getState();
console.log('当前的值:', currentValue);

//定义一个监听的方法
let listener = () => {
    const previosValue = currentValue;
    currentValue = store.getState();
    console.log('上一个值:', previosValue, '当前值:', currentValue)
}
//创建一个监听
store.subscribe(listener);
//分发任务
store.dispatch({type:"ADD"});
store.dispatch({type:"ADD"});
store.dispatch({type:"ADD"});
store.dispatch({type:"REDUCER"});
