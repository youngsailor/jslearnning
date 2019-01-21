const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const Component = require('react').Component;
const {connect,Provider} = require('react-redux');

function reducer(state,action){
    if(typeof state == 'undefined') return {name:'',num:0};
    console.log(action.name);
    console.log(state)
    switch(action.type){
        case 'changeName':
            let obj =  Object.assign({},state,{name:action.name});
            console.log(obj)
            return obj
        case 'access':
            return Object.assign({},state,{num:1+state.num});
        default:return state;
    }
}

const store = Redux.createStore(reducer);
let actions = {
    changeName(name){
        return{
            type:'changeName',
            name
        }
    },
    access(){
        return{
            type:'access'
        }
    }
}
//store.dispatch(actions.changeName('leo'));
// actions = Redux.bindActionCreators(actions,store.dispatch);
//-----------------------------------
class UI extends Component{
    render(){
        return (
            <div>
            <p>{this.props.name}</p>
            <p>{this.props.num}</p>
            <input onChange={event => this.props.changeName(event.target.value)} />
            <button onClick={event=>this.props.access()}>提交</button>
            </div>
        )

    }
}

function getState(state,props){
    return state =>{
        return state;
    };
    // return store.getState()
}
// function getActions(){
//     return actions;
// }
UI = connect(getState,actions)(UI);
//UI = connect((state,props)=>state=>state,actions)(UI);
ReactDOM.render(<Provider store={store}><UI /></Provider>,document.body);
