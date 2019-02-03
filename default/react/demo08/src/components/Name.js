import React,{Component} from 'react';
import {get_name} from '../actions'
import {connect} from 'react-redux';
class Name extends Component{
    render(){
        const {get_name} = this.props;
        return (
            <div>
                <p className = 'text-center'>
                    <button onClick={ ()=>get_name() } className='btn btn-success mr-2'>GET Name</button>
                    <h3>Name组件中获取次数：{this.props.counter}</h3>
                </p>

            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log(state);
    return (
        {counter:state.counter}
    )
}
export default connect(mapStateToProps,{get_name})(Name);
