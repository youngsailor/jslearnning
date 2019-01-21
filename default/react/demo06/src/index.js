import {Component} from 'react';
import List from './components/List';
import Editor from './components/Editor';
import React from 'react';
import {createStore} from 'redux';
import {connect,Provider} from 'react-redux';
import ReactDOM from 'react-dom';
console.log('aaa');
function reducer(state,action){
    if(typeof state === 'undefined')return {list:['1111']}
    switch(action.type){
        case 'add':
            let list = state.list.concat(action.value);
            let obj = Object.assign({},state,{list});
            console.log(obj);
            return obj;
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
function getState(state,props){
    return state =>{
        return state;
    }
}
const store = createStore(reducer,{list:[]});
class App extends Component{
    render(){
        console.log(this.props);
        return(
            <div>
                <List list={this.props.list} />
                <Editor submit={this.props.submit.bind(this)} />
            </div>
        )
    }
}
App = connect(getState,actions)(App);
ReactDOM.render(<Provider store={store}><App/></Provider>,document.body);
