import React,{ Component} from 'react';
import { connect } from 'react-redux';
import {get_user} from '../actions';
import Name from './Name';
class User extends Component{
    render(){
        console.log(this.props.get_user);

        const { get_user } = this.props;

        return(
            <div>
                <h1 className='jumbotron-heading text-center'></h1>
                <p className = 'text-center'>
                    <button onClick={ ()=>get_user() } className='btn btn-success mr-2'>GET RANDOM USER</button>
                    <h3 className = 'text-center'>{this.props.email}</h3>
                </p>
                <Name />
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state);//对应combineReducer函数的参数，结构如下{counter:data1,user1:data2}
    return(
        {email:state.user1.email}
    )
}
export default connect(mapStateToProps,{get_user})(User);
