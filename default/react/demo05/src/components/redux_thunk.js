'use strict';
const redux = require('redux');
const thunk = require('redux-thunk').default;

// let createStore = redux.applyMiddleware(thunk)(redux.createStore);
function reducer(state,action){
    if(typeof state === 'undefined') return{name:'1'};
    switch (action.type) {
        case 'changeName':return {name:action.name};
        default:return state;
    }
}
const store = redux.createStore(reducer,redux.applyMiddleware(thunk));

let asyncAction = function(name){
    let action = {
        type:'changeName',
        name
    }
    return (dispatch,getState) =>{
        if(getState().name === '2') return;
        setTimeout(()=>{
            dispatch(action);
        },1000);
    }
}
store.dispatch(asyncAction('zengliang'));
store.subscribe(()=>{
    console.log(store.getState());
})
