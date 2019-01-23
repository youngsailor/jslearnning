import React, { Component } from 'react';
import _Navbar from './components/Navbar';
import _UserList from './components/UserList';
import About from './components/About';
import Login from './components/Login';
import redux from 'redux';
import {createStore} from 'redux';
import {connect,Provider} from 'react-redux';
import actions from './components/actions';
import reducer from './components/reducer';

const store = createStore(reducer)

class _App extends Component {
    getCurrentPage(){
        switch(this.props.linkName){
            case 'about':
                return <About />
            case 'userlist':
                return <UserList />
            case 'login':
                return <Login />
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                {this.getCurrentPage()}
            </div>
        );
    }
}

const Navbar = connect(null,actions)(_Navbar);
const UserList = connect(state=>state,actions)(_UserList);
const App = connect(state=>state,actions)(_App);


export {store};
export default App;
