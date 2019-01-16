'use strict';
const EventEmitter = require('events').EventEmitter;
// import EventEmitter from 'events';

class Store{
    constructor(state){
        this._state = state || {};
        this._updates = {};
        this._emitter = new EventEmitter;
    }
    get state(){
        let oo = JSON.parse(JSON.stringify(this._state));

        return oo;

    }
    //fns -function or object
    setUpdates(fns){
        this._updates = fns;
    }
    //action
    dispatch(action){
        if(typeof this._updates === 'function'){
            this._state = this._updates(this.state,action); //return new State;
        }else{
            let newState = {};
            const keys = Object.keys(this._updates);
            keys.forEach(key=>{
                let updater = this._updates[key]
                let oldValue = this.state[key];
                let newSubState = updater(oldValue,action);
                newState[key] = newSubState;
            })
            this._state = Object.assign({},this.state,newState);
        }
        this._emitter.emit('change');
    }
    //add listener
    listen(listener){
        this._emitter.on('change',listener);

    }
}

exports.modules = Store;
