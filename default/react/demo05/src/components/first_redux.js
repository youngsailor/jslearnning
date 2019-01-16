const Redux = require('redux');
const reducer = function (state,action){
    if(action.type === 'changeName'){
        return Object.assign({},state,{name:action.name});
    }else{
        return state;
    }
};
const store = Redux.createStore(reducer,{name:'leo'});
store.subscribe(()=>console.log(store.getState()));
function callAction(){
    var promiseAction = new Promise(function(resolve,reject){
        console.log('我先执行。。。')
        setTimeout(function(){
            console.log('我后执行。。。');
            var action = {
                type:'changeName',
                name:'zengliang'
            }
            resolve(action);
        },5000)
    })
    promiseAction.then(function(action){
        store.dispatch(action);
    })
}
callAction();
console.log('我再执行。。。');
// const action = {
//     type:'changeName',name:'zengliang'
// }
// store.dispatch(action); //dispatch触发reducer保存新状态并emit subscribe的事件。
