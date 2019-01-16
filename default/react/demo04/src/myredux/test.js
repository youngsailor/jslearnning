const createStore = require('./index').createStore;
const useMiddleware = require('./index').useMiddleware;
const logger = store => next => action =>{
    store.dispatch = function(action){
        console.log('Action begin',action.type);
        next.call(store,action)
        console.log('Action end',action.type);
    }
}
const store = createStore(function(state,action){
    if(action.type = 'changeName'){
        return {
            name:action.name
        }
    }else{
        return state
    }
},{name:'leo'});
useMiddleware(store,[logger]);
store.listen(()=>{
    console.log(store.state);
})
store.dispatch({
    action:'changeName',
    name:'zeng liang'
})
