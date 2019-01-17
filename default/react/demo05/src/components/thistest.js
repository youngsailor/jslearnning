// function User(){
//     this.name = 'leo';
//     this.changeName = function(name){
//         this.name = name;
//         console.log(this);
//     }
// }
// var u = new User();
// console.log(u.changeName);
// var changeName = u.changeName;
// changeName('zengliang');



function createStore(){
    let myname = 'leo';
    function dispatch(){
        console.log(this)
        console.log(myname);
    }
    return {
        dispatch:dispatch
    }
}
store = createStore();
store.dispatch()
var dispatch = store.dispatch;
dispatch();
