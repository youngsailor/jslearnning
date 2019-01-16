'use strict';
const Store  = require('./Store.js');

function createStore(updaters,defaultState){
    const sto = new Store(defaultState);
    sto.setUpdates(updaters);
    return sto;
}
//[logger,ajaxData]
function useMiddleware(store,middles){
    middles.reverse();
    middles.forEach(middle=>{
        let next = store.dispatch;
        middle(store.bind(store));
    })
    return store;
}
exports.modules = {createStore,useMiddleware};
