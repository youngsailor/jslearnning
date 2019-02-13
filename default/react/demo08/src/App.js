import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { increment,decrement } from './actions';
//import * as types from './actions';配合下面的mapDispatchToProps
import {bindActionCreators} from 'redux';
import User from './components/User';

class App extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.increment);
    //connect之后，每个action在props中会有一个同名的dispatch函数，其函数体如下：
      //   ƒ () {
      //   return dispatch(actionCreator.apply(this, arguments));
      // }
    const { increment,decrement } = this.props;
    return (
        <div className="container">
            <h1 className="jumbotron-heading text-center">{ this.props.counter }</h1>
            <p className='text-center'>
                <button onClick={increment} className="btn btn-primary mr-2" >Increase</button>
                <button onClick={decrement} className="btn btn-danger mr-2" >Decrease</button>
            </p>
            <User />
        </div>
    );
  }
}
//每次更新都会触发，第一次加载也会
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        counter:state.counter
    }
}
//{increment,decrement}用bindActioncreator也可以。
//如下：
// const mapDispatchToProps = (dispat ) =>{
//     return{
//         bindActionCreators(types,dispatch);
//     }
// }
export default connect(mapStateToProps,{increment,decrement})(App);
