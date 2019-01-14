// import EventEmitter from 'events';
const EventEmitter = require('events').EventEmitter;
class Store{
    constructor(state){
        this._state = state || {};
        this._updates = {};
        this._emitter = new EventEmitter;
    }
    get state(){
        return JSON.parse(JSON.stringify(this._state));
    }
    //fns -function or object
    setUpdates(fns){
        this._updates = fns;
    }
    //action
    dispatch(action){
        this._state = this._updates(this.state,action); //return new State;
        this._emitter.emit('change');
    }
    //add listener
    listen(listener){
        this._emitter.on('change',listener);

    }
}
const sto = new Store({num:5});

sto.setUpdates(function(oldState,action){
    let newstate = {};
    switch(action.type){
        case '+':
            newstate.num = ++oldState.num;
            return newstate;
        case '-':
            newstate.num = --oldState.num;
            return newstate;

        default:
            return oldState;
    }
})
sto.listen(()=>{
    console.log(sto.state);
})
const action = {
    type:'+'
};
const action2 = {
    type:'-'
};
sto.dispatch(action2);
sto
