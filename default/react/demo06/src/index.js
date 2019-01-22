import {Component} from 'react';
import List from './components/List';
import Editor from './components/Editor';
import React from 'react';
import {createStore,applyMiddleware} from 'redux';
import {connect,Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
import {Grid,Row,Col} from 'react-bootstrap';
import Login from './components/Login';
import thunk from 'redux-thunk';
console.log('aaa');
//state是所有属性变量的state,action是单个的action
function reducer(state,action){
    if(typeof state === 'undefined')return {list:['1111']}
    switch(action.type){
        case 'init':
            return action.payload;
        case 'add':
            console.log('reducer');
            let list = state.list.concat(action.payload);
            let obj = Object.assign({},state,{list});
            return obj;
        case 'logined':
            if(action.error){
                return Object.assign({},state,{loginError:action.payload,logined:false});
            }else{
                return Object.assign({},state,{loginError:null,logined:true});
            }
        case 'logout':
            return Object.assign({},state,{loginError:null,logined:false});
        default:
            return state;
    }
}
const actions = {
    init(){
        return function(dispatch){
            fetch('data.json')
            .then((res)=>{
                return res.json()
            })
            .then(data=>{
                dispatch({
                    type:'init',
                    payload:data
                });
            });
        }
    },
    submit(value){
        return{
            type:'add',
            payload:value
        }
    },
    login(info){
        if(info.loginname === 'leo' && info.password === '123'){
            return {
                type:'logined',
                payload:info
            }
        }else{
            return{
                type:'logined',
                payload:new Error('登陆失败'),
                error:true
            }
        }
    },
    logout(){
        return{
            type:'logout',
            payload:''
        }
    }
}
function getState(state,props){  //props是对应52行，<APP />的属性的，比如给App定义一个name属性，<APP name={name}/>，当name属性改变时，会重新渲染UI组件
    console.log(state);
    //这里定义哪些属性改变之后要重新渲染哪些组件，是有一个改变都会重新渲染
    return{
        list:state.list,
        logined:state.logined,
        loginError:state.loginError
    }
}
const store = createStore(reducer,{list:[]},applyMiddleware(thunk));
class App extends Component{
    componentDidMount(){
        this.props.init();
    }
    render(){
        return(
            <div>
                {Navbar}
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <code><List list={this.props.list} /></code>
                        </Col>
                        <Col xs={6} md={4}>
                            {this.props.logined?<div>登陆成功<button onClick={this.props.logout}>退出</button></div>:<Login loginError={this.props.loginError} login={this.props.login} />}
                        </Col>
                    </Row>
                </Grid>
                <Editor submit={this.props.submit.bind(this)} />
            </div>
        )
    }
}
// App = connect(state=>state,actions)(App);  //这样写也是可以的
App = connect(getState,actions)(App);
ReactDOM.render(<Provider store={store}><App /></Provider>,document.body);
