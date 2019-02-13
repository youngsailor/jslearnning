import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About'
import Home from './components/Home';
import Name from './components/Name';
import Error from './components/Error';
import queryString from 'query-string';
import { BrowserRouter as Router,
        Route,
        NavLink,
        Redirect,
        Switch
    } from 'react-router-dom';

const User = (props) =>{
    //解析?name=Jay&age=23这种参数
    //http://212.64.53.19:3000/user/rails?name=jay&age=12
    const values = queryString.parse(props.location.search)
    console.log(values);
    console.log(props)
    return(
        props.match.params.id === 'rails365' ?
        // <Redirect to ="/" /> :
        <Redirect to ={{
                pathname:"/",
                search:'?utm=your+face',
                state:{referrer:'currentlocation'}
        }} /> :
        <div>User page {props.match.params.id}</div>
    )
}
class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
            <div>
                <ul>
                    <li><NavLink exact activeStyle={{color:'green'}} to="/about">About</NavLink></li>
                    <li><NavLink exact activeStyle={{color:'green'}} to="/home">Home</NavLink></li>
                    <li><NavLink exact activeStyle={{color:'green'}} to={{
                            pathname:'/name',
                            search:'?a=b',
                            state:{fromDashboard:true}
                        }}>Name</NavLink></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home } />
                    <Route exact path="/about" component={ About }/>
                    <Route exact path="/home/" component={ Home }/>
                    <Route exact path="/name/" component={ Name }/>
                    <Route exact path="/user/:id" component={User} />
                    <Route component={ Error }/>
                </Switch>
            </div>
          </div>
        </Router>
    );
  }
}

export default App;
