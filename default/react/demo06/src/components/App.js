import {Component} from 'react';
const React = require('react');
const Editor = require('./Editor').default;
const List = require('./List').default;
const redux = require('redux');
const {connect,Provider} = require('react-redux');
const ReactDOM = require('react-dom');
console.log('aaa');
function reducer(state,action){
    if(typeof state === 'undefined')return {list:['1111']}
    switch(action.type){
        case 'add':
            let list = state.list.concat(action.value);
            return Object.assign({},state,{list});
        default:
            return state;
    }
}
const actions = {
    submit(value){
        return{
            type:'add',
            value
        }
    }
}
const store = redux.createStore(reducer,{list:[]});
class App extends Component{
    render(){
        console.log(this.props);
        return(
            // <List list={this.props.list} />
            // <Editor submit={this.props.submit} />
            <h1>1111</h1>
        )
    }
}
App = connect(state=>store.state,actions)(App);
// console.log(App);
// class AppOuter extends Component{
//
//     render(){
//
//         return(
//                 <div>
//                 <Provider store={store}><App /></Provider>
//                 </div>
//             )
//     }
// }
//
// export default AppOuter;
ReactDOM.render(<Provider store={store}><App/></Provider>,document.body);
