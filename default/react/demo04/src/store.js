// import EventEmitter from 'events';
const EventEmitter = require('events').EventEmitter;
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
function createStore(updaters,defaultState){
    const sto = new Store(defaultState);
    sto.setUpdates(updaters);
    return sto;
}
const sto = createStore({
    name:nameUpdater,
    num:numUpdater
},{name:'leo',num:5})
function numUpdater(oldNum,action){
    switch(action.type){
        case '+':
            return ++oldNum;
        case '-':
            return --oldNum;

        default:
            return oldNum;
    }
}
function nameUpdater(oldName,action){
    if(action.type === 'changeName'){
        return action.name;
    }else{
        return oldName;
    }

}
sto.listen(()=>{
    console.log(sto.state);
})
const action1 = {
    type:'+'
};
const action2 = {
    type:'-'
};
function createChangeActioin(name){
    return{
        type:'changeName',
        name
    }
}
let action3 = createChangeActioin('wangyingjie')



//异步加载数据
ajaxData(function(data){
    sto.dispatch(createChangeActioin(data.name));
})
function logger(store){
    let next = store.dispatch;
    store.dispatch = function(action){
        console.log('Action begin',action.type);
        next.call(store,store);  //{ name: 'leo', num: 6 }
        console.log('Action end',action.type);
    }

    return store;
}
function ajaxData(store){
    let next = store.dispatch;
    store.dispatch = function(action){
        if(action.url){
            function ajaxData(callback){
                setTimeout(function(){
                    action.name = 'ajax ok!';
                    next.call(store,action);
                },1000);
            }
        }else{
            next.call(store,action);
        }
    }

    return store;
}
//[logger,ajaxData]
function useMiddleware(store,middles){
    middles.reverse();
    middles.forEach(middle=>{
        middle(store);
    })
    return store;
}
useMiddleware(sto,[logger,ajaxData]);
sto.dispatch({
    type:'changeName',
    url:'///'
})
