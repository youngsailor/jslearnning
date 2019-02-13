import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import {counterAdd,counterAsyncAdd} from '../actions';
import{withRouter} from 'dva/router'
//const Counter = (props) =>{
//当mapStateToDispatch没有指定的时候，dispatch可以直接传入这里
const Counter = ({counter,dispatch,history}) =>{
    // console.log(props)
    // console.log(props.counter)
    return (
        <div>
            <h1>{counter.count}</h1>
            <button onClick={()=>history.push('/')}>go back home</button>
            <button onClick={()=>{dispatch({type:'counter/add',name:'wang'})}}>+</button>
            <button onClick={()=>{dispatch({type:'counter/asyncAdd',name:'wang'})}}>async+</button>
            <button onClick={()=>{dispatch({type:'counter/add',name:'wang'})}}>+</button>
        </div>
    )
}
Counter.propsTypes = {
    counter:PropTypes.object
}
const mapStateToProps = (state) =>{
    // console.log(state)
    return{
        //第一个counter，models中的namespace，state是state
        //counter改变就会引起组件中counter的改变
        //state包括了models中所有的命名空间，相当于redux中取出所有reducer的状态一样
        counter:state.counter
    }
}
//也可以在routes中connect，就可以传入路由等更多的属性
// export default connect(mapStateToProps,{counterAdd,counterAsyncAdd})(Counter);这种写法组件中用props引入
//withRouter之后就可以直接传参
export default connect(mapStateToProps)(withRouter(Counter));
